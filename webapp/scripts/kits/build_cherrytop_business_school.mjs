// Artes do kit "cherrytop-business-school" (Cherry Top Business School, Curitiba, 04–06/dez/2026).
//
// Mesmo método do build_lancamento_dssbr.mjs: cada arte é HTML/CSS fotografado no Chromium,
// com a identidade nova do ETT, a logo negativa em SVG e a Inter versionada. Uso:
//   node scripts/kits/build_cherrytop_business_school.mjs
// Saída: public/divulgacao/cherrytop-business-school/assets/ (5 formatos canônicos)
//        + public/images/og-cherrytop-business-school.png (prévia de link da página do curso)
// Depois, banner.webp e o JPEG do e-mail (Chromium não exporta webp):
//   python3 -c "from PIL import Image; K='public/divulgacao/cherrytop-business-school/'; b=Image.open(K+'assets/banner.png').convert('RGB'); b.save(K+'assets/banner.webp','WEBP',quality=86,method=6); b.resize((1200,675),Image.LANCZOS).save(K+'EmailBusinessSchool-<MMDD>.jpg','JPEG',quality=86,optimize=True,progressive=True)"
//   ⚠️ JPEG do e-mail com NOME NOVO a cada versão (cache de 7 dias no hosting) e atualizar o email.html.
//
// Foto: quadro do reel 1 da Cherry Top (44,6 s), recortado acima das legendas
// → public/images/cherrytop-bs/instrutor-v1.webp. Sem nome na arte: o nome do instrutor não foi informado.
// Sem preço (decisão do Alessandro, 09/11/2026) e sem promessa de resultado.
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { chromium } = require('/mnt/d/2026/01-enrequecimento/node_modules/playwright')

const WEBAPP = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..')
const PUB = path.join(WEBAPP, 'public')
const OUT = path.join(PUB, 'divulgacao', 'cherrytop-business-school', 'assets')
const url = (p) => 'file://' + path.join(PUB, p)
const font = (w) => 'file://' + path.join(WEBAPP, 'scripts', 'fonts', `Inter-${w}.ttf`)

const FORMATOS = [
  ['banner.png', 1920, 1080, 'wide'],
  ['og-1200x630.png', 1200, 630, 'wide'],
  ['feed-1080x1080.png', 1080, 1080, 'square'],
  ['feed-1080x1350.png', 1080, 1350, 'tall'],
  ['story-1080x1920.png', 1080, 1920, 'story'],
]

const situacoes = ['Reunião', 'Negociação', 'Apresentação']

function html(W, H, kind) {
  const u = W / 100
  const wide = kind === 'wide'
  const s = { square: 0.84, tall: 1, story: 1.08 }[kind] ?? 1
  // altura da foto nos formatos empilhados (fração de H)
  const fotoH = { square: 0, tall: 0.27, story: 0.3 }[kind] ?? 0
  const semChips = wide && W < 1500 // prévia 1200×630: as etiquetas encostam no rodapé

  const chips = situacoes.map((c) => `<span class="chip">${c}</span>`).join('')
  const quando = `<div class="quando"><div class="dia"><small>DEZ</small><strong>04–06</strong></div>
      <div class="info"><b>Sexta a domingo · 8h às 18h</b><br>Curitiba/PR · presencial</div></div>`
  const cabeca = `
      <span class="badge">Imersão · Cherry Top</span>
      <h1>Três dias treinando o <em>inglês dos negócios</em>.</h1>`
  const chipsHtml = semChips ? '' : `<div class="chips">${chips}</div>`
  const texto = `${cabeca}${quando}${chipsHtml}`
  const foto = (estilo = '') =>
    `<div class="foto" style="${estilo}"><img src="${url('images/cherrytop-bs/instrutor-v1.webp')}"><div class="tag">Cherry Top Business School</div></div>`

  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;font-weight:400;src:url(${font(400)})}
@font-face{font-family:Inter;font-weight:600;src:url(${font(600)})}
@font-face{font-family:Inter;font-weight:700;src:url(${font(700)})}
@font-face{font-family:Inter;font-weight:800;src:url(${font(800)})}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:Inter;color:#fff;position:relative;
  background:radial-gradient(ellipse at 90% 0%,rgba(215,34,41,.30),transparent 55%),
             radial-gradient(ellipse at 0% 100%,rgba(168,169,172,.14),transparent 50%),
             linear-gradient(160deg,#0A1630 0%,#122650 60%,#162B4E 100%)}
.wrap{position:absolute;inset:0;padding:${wide ? 5 * u : 7 * u}px;display:flex;flex-direction:column}
.top{display:flex;align-items:center;justify-content:space-between;gap:${2 * u}px}
.logo{height:${(wide ? 4.4 : 7.2 * s) * u}px}
.parc{display:flex;align-items:center;gap:${(wide ? 1 : 1.8) * u}px}
.parc span{font-weight:700;font-size:${(wide ? 1.1 : 2 * s) * u}px;color:#C9CDD6;letter-spacing:.1em;text-transform:uppercase;text-align:right;line-height:1.25}
.parc .ct{width:${(wide ? 6.2 : 11 * s) * u}px;height:${(wide ? 6.2 : 11 * s) * u}px;background:#fff;border-radius:${(wide ? .9 : 1.6) * u}px;padding:${(wide ? .35 : .6) * u}px}
.parc .ct img{width:100%;height:100%;object-fit:contain;display:block}
.badge{display:inline-block;align-self:flex-start;margin-top:${(wide ? 3.4 : 4.6 * s) * u}px;padding:${(wide ? .55 : .9) * u}px ${(wide ? 1.3 : 2) * u}px;
  border-radius:999px;background:#D72229;font-weight:800;font-size:${(wide ? 1.2 : 2.1 * s) * u}px;letter-spacing:.08em;text-transform:uppercase}
h1{font-weight:800;line-height:1.05;letter-spacing:-.02em;margin-top:${(wide ? 1.8 : 2.8 * s) * u}px;font-size:${(wide ? 5.2 : 8.6 * s) * u}px}
h1 em{font-style:normal;color:#F05A60}
.quando{display:flex;align-items:center;gap:${(wide ? 1.6 : 3) * u}px;margin-top:${(wide ? 2.6 : 4 * s) * u}px}
.dia{background:#fff;color:#162B4E;border-radius:${(wide ? 1 : 1.8) * u}px;text-align:center;padding:${(wide ? .7 : 1.2) * u}px ${(wide ? 1.4 : 2.4) * u}px;line-height:1}
.dia small{display:block;font-weight:800;color:#D72229;letter-spacing:.12em;font-size:${(wide ? 1.2 : 2.2 * s) * u}px}
.dia strong{display:block;font-weight:800;font-size:${(wide ? 3.3 : 6 * s) * u}px;margin-top:${.3 * u}px}
.info{font-size:${(wide ? 1.65 : 3 * s) * u}px;line-height:1.4;color:#D1D5DB}
.info b{color:#fff}
.chips{display:flex;flex-wrap:wrap;gap:${(wide ? .8 : 1.4) * u}px;margin-top:${(wide ? 2.4 : 3.6 * s) * u}px}
.chip{border:1px solid #3A5283;background:rgba(10,22,48,.6);border-radius:999px;font-weight:700;
  font-size:${(wide ? 1.35 : 2.5 * s) * u}px;padding:${(wide ? .5 : .9) * u}px ${(wide ? 1.3 : 2.2) * u}px}
.cols{display:flex;gap:${4 * u}px;flex:1;min-height:0;padding-bottom:${wide ? 4.5 * u : 0}px}
.cols>.l{flex:1.25;display:flex;flex-direction:column}
.cols>.r{flex:1;display:flex;align-items:stretch;padding-top:${2.6 * u}px}
.foto{flex-shrink:0;border-radius:${(wide ? 1.6 : 2.4) * u}px;overflow:hidden;border:${Math.max(3, .35 * u)}px solid rgba(255,255,255,.9);position:relative;background:#0E1D3C}
.foto img{width:100%;height:100%;object-fit:cover;object-position:50% 28%;display:block}
.foto .tag{position:absolute;left:${(wide ? 1.2 : 2) * u}px;bottom:${(wide ? 1.2 : 2) * u}px;background:rgba(10,22,48,.85);border-radius:${.8 * u}px;
  padding:${(wide ? .5 : .9) * u}px ${(wide ? 1 : 1.6) * u}px;font-weight:700;font-size:${(wide ? 1.15 : 2.1 * s) * u}px;color:#E5E9F2}
.sq{display:flex;gap:${3.5 * u}px;flex:1;min-height:0;margin-top:${3 * u}px;padding-bottom:${12 * u}px}
.sq>.l{flex:1;display:flex;flex-direction:column;justify-content:center}
.sq>.l .quando{flex-direction:column;align-items:flex-start;margin-top:0}
.sq>.foto{flex:0 0 42%}
.extra{margin-top:auto;padding-bottom:${(kind === 'story' ? 22 : 12) * u}px;font-size:${2.9 * s * u}px;color:#D1D5DB;line-height:1.4}
.extra b{color:#fff}
.foot{position:absolute;left:0;right:0;bottom:${kind === 'story' ? 5.5 * u : 0}px;background:#D72229;display:flex;align-items:center;justify-content:center;
  gap:${2 * u}px;flex-wrap:wrap;text-align:center;padding:${(wide ? 1.2 : 2.3 * s) * u}px ${4 * u}px;font-weight:700;font-size:${(wide ? 1.5 : 2.6 * s) * u}px}
.foot span{opacity:.92;font-weight:600}
</style></head><body><div class="wrap">
  <div class="top"><img class="logo" src="${url('images/ett-logo-horizontal-negativa.svg')}">
    <div class="parc"><span>Oferecido por<br>Cherry Top</span><div class="ct"><img src="${url('images/logo-cherrytop.jpeg')}"></div></div></div>
  ${
    wide
      ? `<div class="cols"><div class="l">${texto}</div>
          <div class="r">${foto('width:100%')}</div></div>`
      : kind === 'square'
        ? `${cabeca}<div class="sq"><div class="l">${quando}${chipsHtml}</div>${foto()}</div>`
        : `${foto(`height:${H * fotoH}px;margin-top:${4 * s * u}px`)}
        ${texto}
        ${kind === 'story' ? `<p class="extra">Turma <b>bilíngue</b> para o básico · <b>imersão total</b> do intermediário ao avançado.</p>` : ''}`
  }
</div>
<div class="foot"><b>Certificado de 50 horas</b><span>englishtalktime.com.br/imersoes</span></div>
</body></html>`
}

fs.mkdirSync(OUT, { recursive: true })
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'kit-cbs-'))
const browser = await chromium.launch()
for (const [nome, W, H, kind] of FORMATOS) {
  const page = await browser.newPage({ viewport: { width: W, height: H } })
  const f = path.join(tmp, nome + '.html')
  fs.writeFileSync(f, html(W, H, kind))
  await page.goto('file://' + f)
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)
  const dest = path.join(OUT, nome)
  await page.screenshot({ path: dest })
  if (nome === 'og-1200x630.png') fs.copyFileSync(dest, path.join(PUB, 'images', 'og-cherrytop-business-school.png'))
  console.log('  ', nome, W + 'x' + H, (fs.statSync(dest).size / 1024).toFixed(0) + 'KB')
  await page.close()
}
await browser.close()
fs.rmSync(tmp, { recursive: true, force: true })
console.log('OK →', OUT)
