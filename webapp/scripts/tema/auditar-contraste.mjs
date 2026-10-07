// Auditoria de contraste (WCAG AA) em todas as rotas do export.
// Para cada texto visível, calcula a cor real (com opacidade) contra o fundo efetivo (compondo as
// camadas de background dos ancestrais) e lista o que fica abaixo de 4,5:1 (ou 3:1 em texto grande).
//
//   cd webapp && npm run build
//   npx serve out -l 8766            # ou: python3 -m http.server 8766 -d out
//   node scripts/tema/auditar-contraste.mjs http://localhost:8766
//   node scripts/tema/auditar-contraste.mjs https://englishtalktime.com.br   # produção
//
// Em produção o script acrescenta ?v=<n> em cada URL: sem isso o Hostinger pode servir HTML velho.
// Resultado detalhado em scripts/tema/contraste.json. Numerais decorativos (select-none) e o botão
// do WhatsApp (branco no verde da marca deles) ficam abaixo de propósito.
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// mesmo Playwright do gerador de logos (scripts/logo/gerar-logos-web.mjs)
const { chromium } = require('/mnt/d/2026/01-enrequecimento/node_modules/playwright');

const BASE = (process.argv[2] || 'http://localhost:8766').replace(/\/$/, '');
const HERE = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.resolve(HERE, '..', '..', 'out');
const bust = BASE.includes('localhost') ? '' : `?v=${Date.now()}`;

const routes = [];
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    // kits de /divulgacao/ são HTML cru (noindex), fora do tema; _next e images não têm rota
    if (e.isDirectory() && !['_next', 'divulgacao', 'images'].includes(e.name)) walk(path.join(dir, e.name), `${rel}${e.name}/`);
    else if (e.name === 'index.html') routes.push(rel);
  }
})(OUT, '/');
routes.sort();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const all = {};
let total = 0;
for (const r of routes) {
  await page.goto(BASE + r + bust, { waitUntil: 'networkidle' });
  // framer-motion começa em opacity:0 e só anima com rolagem — força visível e rola a página
  await page.addStyleTag({ content: '[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important}' });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((res) => setTimeout(res, 50)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
  const bad = await page.evaluate(() => {
    const P = (s) => { const m = s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/); return m ? [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]] : null; };
    const lum = ([r, g, b]) => { const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4); return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const over = (t, b) => [t[0] * t[3] + b[0] * (1 - t[3]), t[1] * t[3] + b[1] * (1 - t[3]), t[2] * t[3] + b[2] * (1 - t[3]), 1];
    const bgOf = (el) => {
      const layers = [];
      for (let e = el; e; e = e.parentElement) {
        const c = P(getComputedStyle(e).backgroundColor);
        if (c && c[3] > 0) { layers.push(c); if (c[3] >= 0.99) break; }
      }
      let bg = [255, 255, 255, 1];
      for (let i = layers.length - 1; i >= 0; i--) bg = over(layers[i], bg);
      return bg;
    };
    const out = [];
    const seen = new Set();
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const t = w.currentNode; if (!t.textContent.trim()) continue;
      const el = t.parentElement; if (!el || seen.has(el)) continue; seen.add(el);
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none' || el.closest('[aria-hidden="true"],script,style,noscript')) continue;
      const rect = el.getBoundingClientRect(); if (!rect.width || !rect.height) continue;
      if (['rgba(0, 0, 0, 0)', 'transparent'].includes(cs.webkitTextFillColor)) continue; // .gradient-text
      let fg = P(cs.color); if (!fg) continue;
      const bg = bgOf(el);
      let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
      fg = over([fg[0], fg[1], fg[2], fg[3] * op], bg);
      const L1 = lum(fg), L2 = lum(bg);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const size = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
      const need = size >= 24 || (size >= 18.6 && bold) ? 3 : 4.5;
      if (ratio < need - 0.05) out.push({ ratio: +ratio.toFixed(2), need, texto: t.textContent.trim().slice(0, 60), classes: (typeof el.className === 'string' ? el.className : '').slice(0, 160) });
    }
    return out;
  });
  all[r] = bad;
  total += bad.length;
  console.log(r.padEnd(58), bad.length ? `${bad.length} abaixo de AA` : 'ok');
}
fs.writeFileSync(path.join(HERE, 'contraste.json'), JSON.stringify(all, null, 1));
console.log(`\n${routes.length} rotas, ${total} trechos abaixo de AA — detalhes em scripts/tema/contraste.json`);
await browser.close();
