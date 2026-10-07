// Converte as classes do tema escuro (fundo marinho) para tokens semânticos que funcionam
// no tema claro e, dentro de `.tema-escuro`, voltam a ser escuros. Rodado UMA vez em 06/10/2026.
//
//   node webapp/scripts/tema/tema-claro.mjs          # aplica
//   node webapp/scripts/tema/tema-claro.mjs --dry    # só conta
//
// Regras:
//  - superfícies: dark → surface, dark-secondary → surface-alt, dark-card → surface-card,
//    dark-border → surface-line;
//  - texto: white → ink (títulos), gray-100/200 → ink, gray-300 → ink-soft, gray-400 → ink-muted,
//    gray-500 → ink-subtle, gray-600/700 → ink-faint;
//  - `text-white` CONTINUA branco quando a mesma string de classes pinta um fundo sólido
//    (botão vermelho, faixa marinha, lightbox preto) — é texto sobre cor, não sobre a página;
//  - transparências brancas (bg-white/5, border-white/30) viram ink/N, que escurece no claro;
//  - lightbox `bg-black/95` ganha `tema-escuro` pra o conteúdo dele continuar claro.
import fs from 'fs';
import path from 'path';

const DRY = process.argv.includes('--dry');
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const DIRS = ['app', 'components', 'lib'].map((d) => path.join(ROOT, d));

const SOLID_BG = /(^|\s)(?:[a-z]+:)*bg-(?:brand-red(?:-deep)?|brand-navy|black|brand-gray)(?=\s|$)/;
const SOLID_BG_ALPHA = /(^|\s)bg-black\/\d+(?=\s|$)/;

const SIMPLE = [
  [/\bdark-secondary\b/g, 'surface-alt'],
  [/\bdark-card\b/g, 'surface-card'],
  [/\bdark-border\b/g, 'surface-line'],
  [/\b(bg|from|via|to|border|ring|divide|shadow)-dark(?=[\s/"'`:]|$)/g, '$1-surface'],
  [/\btext-dark(?=[\s"'`]|$)/g, 'text-white'], // botão prata/vermelho: texto branco
  [/\b(text|placeholder|border|from|via|to|fill|stroke|divide|ring)-gray-(?:100|200)\b/g, '$1-ink'],
  [/\b(text|placeholder|border|from|via|to|fill|stroke|divide|ring)-gray-300\b/g, '$1-ink-soft'],
  [/\b(text|placeholder|border|from|via|to|fill|stroke|divide|ring)-gray-400\b/g, '$1-ink-muted'],
  [/\b(text|placeholder|border|from|via|to|fill|stroke|divide|ring)-gray-500\b/g, '$1-ink-subtle'],
  [/\b(text|placeholder|border|from|via|to|fill|stroke|divide|ring)-gray-(?:600|700)\b/g, '$1-ink-faint'],
  [/\bbg-gray-800\b/g, 'bg-ink/5'],
  [/\b(bg|border|ring|divide|from|via|to)-white\/(\d+)\b/g, '$1-ink/$2'],
];

let total = 0;
const report = {};
function convertLiteral(lit) {
  let s = lit;
  for (const [re, to] of SIMPLE) s = s.replace(re, to);
  const keepWhite = SOLID_BG.test(s) || SOLID_BG_ALPHA.test(s);
  if (!keepWhite) s = s.replace(/(^|[\s:])text-white(?=[\s"'`/]|$)/g, '$1text-ink');
  if (SOLID_BG_ALPHA.test(s) && !/\btema-escuro\b/.test(s)) s = s.replace(SOLID_BG_ALPHA, (m) => m + ' tema-escuro');
  return s;
}

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|mjs)$/.test(e.name)) {
      const src = fs.readFileSync(p, 'utf8');
      // cada literal de string/template é tratado isoladamente (a regra do fundo sólido é por literal)
      const conv = (m, q, body) => {
        if (!/(text|bg|border|from|via|to|placeholder)-(white|gray|dark|black)/.test(body)) return m;
        const nb = convertLiteral(body);
        return nb === body ? m : q + nb + q;
      };
      // 1º strings de uma linha ('...', "...", `...`); 2º template strings de várias linhas
      const out = src
        .replace(/(["'`])((?:(?!\1)[^\\\n]|\\.)*?)\1/g, conv)
        .replace(/(`)((?:[^`\\]|\\.)*?)`/gs, conv);
      if (out !== src) {
        const n = [...src.matchAll(/(white|gray-\d00|dark)/g)].length - [...out.matchAll(/(white|gray-\d00|dark)/g)].length;
        report[path.relative(ROOT, p)] = n;
        total += n;
        if (!DRY) fs.writeFileSync(p, out);
      }
    }
  }
}
DIRS.forEach(walk);
console.log(JSON.stringify(report, null, 1));
console.log(DRY ? '[dry]' : '[aplicado]', Object.keys(report).length, 'arquivos,', total, 'trocas');
