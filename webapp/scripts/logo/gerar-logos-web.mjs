// Gera os SVGs/PNGs da logo usados no site a partir dos originais do cliente (novoConteudo/identidade-visual-2026/logo-ETT/SVG).
// 06/10/2026 — logo corrigida: o verde saiu; "Time" e o 3º balão viraram cinza #A8A9AC.
// Para cada SVG: tira o <rect> de fundo, mede o bbox real no Chromium e recorta o viewBox na arte.
// Símbolo = só os 3 balões (paths à esquerda do texto). Uso: node scripts/logo/gerar-logos-web.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/mnt/d/2026/01-enrequecimento/node_modules/playwright');

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..', '..');
const SRC = path.join(ROOT, 'novoConteudo', 'identidade-visual-2026', 'logo-ETT', 'SVG');
const IMG = path.join(ROOT, 'webapp', 'public', 'images');
const APP = path.join(ROOT, 'webapp', 'app');

const jobs = [
  ['Assinatura Horizontal — Negativa.svg', 'ett-logo-horizontal-negativa.svg', 'all'],
  ['Assinatura Horizontal — Positiva.svg', 'ett-logo-horizontal-positiva.svg', 'all'],
  ['Assinatura Institucional — Negativa.svg', 'ett-logo-institucional-negativa.svg', 'all'],
  ['Assinatura Horizontal — Negativa.svg', 'ett-simbolo.svg', 'symbol'],
  ['Assinatura Horizontal — Positiva.svg', 'ett-simbolo-positiva.svg', 'symbol'], // menu claro no celular
  ['Assinatura Institucional — Positiva.svg', 'ett-logo-institucional-positiva.svg', 'all'],
];

const browser = await chromium.launch();
const page = await browser.newPage();
const out = {};
for (const [src, dst, mode] of jobs) {
  const svg = fs.readFileSync(path.join(SRC, src), 'utf8').replace(/^<\?xml[^>]*>\s*/, '');
  await page.setContent(`<!doctype html><body style="margin:0">${svg}</body>`);
  const res = await page.evaluate((mode) => {
    const root = document.querySelector('svg');
    const vb = root.viewBox.baseVal;
    // fundo = rect do tamanho do viewBox
    for (const r of root.querySelectorAll('rect')) {
      const b = r.getBBox();
      if (b.width >= vb.width * 0.98 && b.height >= vb.height * 0.98) r.remove();
    }
    const shapes = [...root.querySelectorAll('path,polygon,circle,ellipse,rect,polyline')];
    if (mode === 'symbol') {
      // balões = formas cuja borda direita fica à esquerda do início do texto
      const boxes = shapes.map((s) => [s, s.getBBox()]);
      // critério relativo ao maior balão, não ao viewBox: na positiva (viewBox de 165 de altura) as letras
      // têm 50 e passavam no antigo "30% da altura" — o símbolo saía com a assinatura inteira.
      const widest = boxes.reduce((m, [, b]) => Math.max(m, b.width), 0);
      const tallest = boxes.reduce((m, [, b]) => Math.max(m, b.height), 0);
      const balloons = boxes.filter(([, b]) => b.width > widest * 0.5 || b.height > tallest * 0.6);
      const right = Math.max(...balloons.map(([, b]) => b.x + b.width));
      for (const [s, b] of boxes) if (b.x >= right - 1) s.remove();
    }
    const g = root.getBBox();
    return { x: g.x, y: g.y, w: g.width, h: g.height, n: root.querySelectorAll('path').length, html: root.outerHTML };
  }, mode);
  // classes .cls-N viram fill direto: CSS de SVG inline é global e colide entre logos na mesma página
  const css = Object.fromEntries([...res.html.matchAll(/\.(cls-\d+)\s*\{\s*fill:\s*(#[0-9a-fA-F]{3,6});?\s*\}/g)].map((m) => [m[1], m[2].toLowerCase()]));
  res.html = res.html.replace(/<defs>[\s\S]*?<\/defs>/, '').replace(/class="(cls-\d+)"/g, (m, c) => `fill="${css[c]}"`);
  // o original negativo do cliente traz a camada antiga de balões (com o verde) sob uma cópia idêntica com o
  // cinza: path repetido fica só a última ocorrência (a visível) e verde da logo antiga não passa.
  const seen = new Map();
  for (const m of res.html.matchAll(/<path [^>]*d="([^"]+)"[^>]*(?:\/>|><\/path>)/g)) seen.set(m[1], m.index);
  res.html = res.html.replace(/<path [^>]*d="([^"]+)"[^>]*(?:\/>|><\/path>)/g, (m, d, off) => (seen.get(d) !== off || /#8dc63f/i.test(m) ? '' : m));
  const pad = 0.5;
  const viewBox = [res.x - pad, res.y - pad, res.w + 2 * pad, res.h + 2 * pad].map((v) => +v.toFixed(2)).join(' ');
  let s = res.html
    .replace(/<svg[^>]*>/, (m) => m.replace(/viewBox="[^"]*"/, `viewBox="${viewBox}"`).replace('<svg', '<svg role="img" aria-label="English Talk Time"'))
    .replace(/\s(width|height)="[^"]*"(?=[^<]*>)/, (m) => m); // mantém só viewBox
  fs.writeFileSync(path.join(IMG, dst), s + '\n');
  out[dst] = { viewBox, paths: res.n };
}

// favicon: símbolo sobre quadrado marinho arredondado (mesmo desenho do icon.svg anterior)
const sim = fs.readFileSync(path.join(IMG, 'ett-simbolo.svg'), 'utf8');
const [x, y, w, h] = sim.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const side = Math.max(w, h) * 1.36, cx = x + w / 2, cy = y + h / 2;
const sx = +(cx - side / 2).toFixed(2), sy = +(cy - side / 2).toFixed(2), sd = +side.toFixed(2);
const inner = sim.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${sx} ${sy} ${sd} ${sd}"><rect x="${sx}" y="${sy}" width="${sd}" height="${sd}" rx="${+(sd * 0.22).toFixed(2)}" fill="#162b4e"/>${inner}</svg>\n`;
fs.writeFileSync(path.join(APP, 'icon.svg'), icon);

// PNGs: apple-icon 180×180 (do icon.svg) e ett-logo-2026.png (horizontal positiva, fundo transparente, 1200 de largura)
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(`<!doctype html><body style="margin:0">${icon.replace('<svg', '<svg width="180" height="180"')}</body>`);
await page.locator('svg').screenshot({ path: path.join(APP, 'apple-icon.png'), omitBackground: true });
const pos = fs.readFileSync(path.join(IMG, 'ett-logo-horizontal-positiva.svg'), 'utf8');
const [, , pw, ph] = pos.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const W = 1200, H = Math.round((W * ph) / pw);
await page.setViewportSize({ width: W, height: H });
await page.setContent(`<!doctype html><body style="margin:0;background:transparent">${pos.replace('<svg', `<svg width="${W}" height="${H}"`)}</body>`);
await page.locator('svg').screenshot({ path: path.join(IMG, 'ett-logo-2026.png'), omitBackground: true });
await browser.close();
console.log(JSON.stringify(out, null, 1), '\nicon', sx, sy, sd, '\nlogo png', W, H);
