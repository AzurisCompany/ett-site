# Playbook portátil — Central de Divulgação (Kits de Mídia)

**Para quem é este arquivo:** uma sessão do Claude (ou uma pessoa) que precisa **replicar em outro site** o sistema de kits de divulgação que já roda em produção no DSSBR 2026 (`https://dssbr.com.br/divulgacao/`).

Este documento é **auto-contido e portátil**: copie-o para o repositório do site de destino e siga daqui. Ele não pressupõe acesso ao repositório do DSSBR — todo código necessário está embutido em blocos copiáveis.

- **Implementação de referência (o original, específico do DSSBR):** `site/divulgacao/PROCESSO.md` + `site/divulgacao/README.md`
- **Este arquivo:** a versão generalizada, com as decisões explicadas, os erros já cometidos e as correções.

Origem: sistema criado em 2026-07-04 e evoluído em ~12 kits até 2026-07-27. Tudo aqui foi validado em produção.

---

## 0. O que é um kit, em uma frase

Uma página compartilhável, `/divulgacao/{slug}/`, que reúne **imagens prontas para cada rede + textos prontos para copiar + o e-mail marketing** de uma única confirmação (patrocinador, parceiro, palestrante, evento, anúncio).

**A promessa:** *um link resolve a divulgação.* A equipe abre o link, copia o texto e baixa a imagem, e posta. O parceiro/palestrante recebe **o mesmo link** e pega o material dele para repostar — sem trocar arquivos por WhatsApp, sem "me manda a arte de novo".

### A separação que faz o sistema funcionar

| | `/divulgacao/{slug}/` | `/blog/{slug}/` |
|---|---|---|
| O que é | Material de trabalho (kit) | Notícia pública |
| Indexação | **`noindex, nofollow`**, **fora do sitemap** | Indexada, **no sitemap** |
| Quem abre | Equipe + o parceiro/palestrante | Público, Google |
| Preview de link | — | `og:image` (é esta URL que se cola no LinkedIn/WhatsApp) |

Não misture os dois. O kit **linka** para a notícia. Quem cola o link do kit no LinkedIn não gera preview (é noindex) — cole o link **da notícia**.

> **Por que noindex:** cada kit é conteúdo raso e repetitivo. Indexar 12 kits derruba o score médio do site no Google. A regra geral do projeto é *não criar uma URL indexada por bio curta* — agregue em páginas ricas e mantenha o material de trabalho fora do índice.

---

## 1. Antes de começar: a ficha do site de destino

**Preencha isto primeiro.** Sem esses dados, o kit sai genérico e você retrabalha. Se algum campo estiver vazio, **pergunte ao usuário** — não invente (especialmente razão social, cargo e nome de empresa).

```yaml
# ── Identidade do site ───────────────────────────────────────────
projeto:            # ex.: DSSBR 2026
dominio:            # ex.: https://dssbr.com.br   (SEM barra no fim)
repo_local:         # ex.: /mnt/d/2026/siteDDs2026/site
logo_svg:           # caminho público, ex.: /assets/logo-dss-2026.svg
logo_png_arte:      # PNG para compor arte (transparente!), ex.: /assets/logo-....png

# ── Paleta (tokens CSS) ──────────────────────────────────────────
cor_fundo:          # ex.: #0A0A0C   (ink)
cor_painel:         # ex.: #121216
cor_borda:          # ex.: #24242C
cor_primaria:       # ex.: #00FFD4   (mint — CTAs, destaques)
cor_secundaria:     # ex.: #7C3AED   (violeta)
cor_terciaria:      # ex.: #FFBC7D   (peach)
cor_texto:          # ex.: #E7E7EE
cor_muted:          # ex.: #8C8C96

# ── Tipografia ───────────────────────────────────────────────────
fonte_display:      # ex.: Unbounded
fonte_corpo:        # ex.: Inter
fonte_mono:         # ex.: JetBrains Mono

# ── Fatos do evento/produto (vão no rodapé das artes) ────────────
data_evento:        # ex.: 27, 28 E 29 DE OUTUBRO
cidade_local:       # ex.: CURITIBA · IEP
assinatura_arte:    # ex.: DSSBR.COM.BR

# ── Canais e CTA ─────────────────────────────────────────────────
whatsapp_oficial:   # ex.: https://wa.me/5541998003687
cta_principal_url:  # para onde o e-mail e os textos empurram
hashtag_principal:  # ex.: #DSSBR2026
plataforma_email:   # ex.: RD Station (colar "Código HTML")
rodape_email_extra: # bloco obrigatório? (no DSSBR: barra "Powered by PipeZeroOne")

# ── Categorias / badges ──────────────────────────────────────────
# Mapeie tipo → rótulo → classe de cor. No DSSBR:
#   Patrocinador (cota paga)     → b-violet
#   Parceiro/Parceira (acordo)   → b-mint
#   Palestrante                  → b-mint
#   Evento/Café · Anúncio · Curso→ b-peach
```

> ⚠️ **Patrocinador ≠ Parceiro.** Patrocinador paga cota; parceiro tem acordo de comunidade/permuta. Trocar os dois é erro comercial visível — confirme com o usuário caso a caso. É um dos erros que já aconteceu e teve de ser corrigido retroativamente.

---

## 2. Estrutura de arquivos a criar

```
{repo}/divulgacao/
├── index.html                 ← HUB: lista todos os kits (é a página /divulgacao/)
├── README.md                  ← quickstart do site
├── PROCESSO.md                ← processo detalhado (pode ser este playbook adaptado)
├── gerar-imagens.py           ← baseline PIL (§4.2)
├── _snippets/                 ← blocos reutilizáveis de e-mail
├── _template/                 ← modelo a copiar para cada kit novo
│   ├── index.html
│   ├── email.html
│   ├── textos.md
│   └── assets/.gitkeep
└── {slug}/                    ← um por confirmação
    ├── index.html             ← O LINK QUE SE COMPARTILHA
    ├── email.html
    ├── textos.md
    └── assets/
        ├── banner.png / .webp        1920×1080
        ├── og-1200x630.png           1200×630
        ├── feed-1080x1080.png        1080×1080
        ├── feed-1080x1350.png        1080×1350
        └── story-1080x1920.png       1080×1920
```

### Convenção de slug (kebab-case, sem acento, curto)

| Tipo | Padrão | Exemplo |
|---|---|---|
| Patrocinador | `nome-patrocinio` | `winov-patrocinio` |
| Parceiro | `nome-parceria` / `nome-{papel}-oficial` | `pipezeroone-crm-oficial` |
| Palestrante | `nome-sobrenome-palestrante` | `raquel-nagasse-palestrante` |
| Evento / café | descritivo | `cafe-iep-2026` |
| Anúncio | descritivo | `palestras-aprovadas-2026` |

---

## 3. O fluxo completo (o que a sessão Claude executa)

Gatilho típico do usuário: **"cria o kit de divulgação do [X]"**.

1. **Coletar o briefing.** Tipo (patrocinador/parceiro/palestrante/evento/anúncio), nome, texto-base (release/bio), imagem-fonte (foto ou logo), URL do parceiro/LinkedIn, e se vai ter notícia no blog junto.
2. **Ler a fonte oficial de verdade no próprio site** — para palestrante, a página `/palestrantes/{slug}/`; para patrocinador, a página institucional. **Não inventar credencial, cargo, número ou título de palestra.** Ver §5.1.
3. **Criar a pasta:** `cp -r _template {slug}`.
4. **Produzir as artes** (§4) — 5 formatos, nomes canônicos.
5. **Escrever `textos.md`** com os 5 blocos de rede (§5) e colar os mesmos textos nos `<pre>` do `index.html`.
6. **Preencher `{slug}/index.html`** — título, badge, data, thumbs, textos, links. Manter `noindex`.
7. **Montar `{slug}/email.html`** (§6) + cópia-fonte em `_local/email-{plataforma}-{slug}.html`.
8. **(Opcional) Criar a notícia** em `/blog/{slug}/` + adicionar ao `sitemap.xml`.
9. **Adicionar o card no hub** `divulgacao/index.html` — **como primeiro da lista**.
10. **Deploy + verificar** (§7): HTTP 200, botões Copiar/Baixar, e **inspeção visual das 5 artes**.

---

## 4. Artes — a parte que mais dá errado

### 4.1 Especificação canônica (fixe estes nomes e tamanhos)

| Arquivo | Tamanho | Proporção | Uso |
|---|---|---|---|
| `banner.png` + `banner.webp` | **1920×1080** | 16:9 | Capa do post, hero do kit, topo do e-mail |
| `og-1200x630.png` | 1200×630 | 1.91:1 | Preview de link (WhatsApp, LinkedIn, X) |
| `feed-1080x1080.png` | 1080×1080 | 1:1 | Feed quadrado |
| `feed-1080x1350.png` | 1080×1350 | 4:5 | Feed vertical (**maior alcance no Instagram**) |
| `story-1080x1920.png` | 1080×1920 | 9:16 | Story / Reels |

> **Divergências que existem no DSSBR e você NÃO deve replicar:**
> - Banner saiu em 1600×900, 1672×941 e 1731×909 em kits diferentes. **Padronize 1920×1080.**
> - O 4:5 aparece como `feed-1080x1350.png` em uns kits e `feed-4x5-1080x1350.png` em outros. **Fixe `feed-1080x1350.png`.**
> - Kits antigos têm só 4 artes (nasceram antes do 4:5). **Novos: sempre 5.**
> - `retrato-3x4-1080x1440.png` foi um formato órfão de um kit só. Não use.

### 4.2 Nível 1 — baseline por letterbox (`gerar-imagens.py`)

Para quando já existe **uma arte 16:9 pronta** (entregue pelo cliente/designer) e você só precisa dos derivados. Salve como `divulgacao/gerar-imagens.py`:

```python
#!/usr/bin/env python3
"""
Gera as 5 variações de um kit a partir de um banner 16:9.

Uso:
    python3 divulgacao/gerar-imagens.py CAMINHO/banner.png divulgacao/SLUG/assets

Produz: banner.png, banner.webp, og-1200x630.png,
        feed-1080x1080.png, feed-1080x1350.png, story-1080x1920.png
Requer Pillow (PIL).
"""
import sys, os
from PIL import Image

BRAND_BLACK = (10, 10, 12)  # ← troque pela cor de fundo do site de destino


def letterbox(src, w, h):
    """Redimensiona para a largura do canvas e centraliza sobre o fundo da marca."""
    scale = w / src.size[0]
    resized = src.resize((w, round(src.size[1] * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (w, h), BRAND_BLACK)
    canvas.paste(resized, (0, (h - resized.size[1]) // 2))
    return canvas


def main():
    if len(sys.argv) != 3:
        print(__doc__); sys.exit(1)
    src_path, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)
    src = Image.open(src_path).convert("RGB")
    print(f"Fonte: {src_path} {src.size}")
    if src.size[0] < 1600:
        print("  ⚠ fonte com menos de 1600px de largura — as derivadas vão ficar moles")

    def save(img, name, **kw):
        p = os.path.join(out_dir, name)
        img.save(p, **kw)
        print(f"  {name:24s} {img.size}  {os.path.getsize(p)/1024:.0f}KB")

    save(src, "banner.png")
    save(src, "banner.webp", format="WEBP", quality=82, method=6)
    save(src.resize((1200, 630), Image.LANCZOS), "og-1200x630.png")
    save(letterbox(src, 1080, 1080), "feed-1080x1080.png")
    save(letterbox(src, 1080, 1350), "feed-1080x1350.png")
    save(letterbox(src, 1080, 1920), "story-1080x1920.png")
    print("OK")


if __name__ == "__main__":
    main()
```

> ℹ️ O script original do DSSBR gerava **só 3 derivados** (og, 1:1, 9:16) — o 4:5 era feito à mão. A versão acima já corrige isso.

**Limite do nível 1:** em 9:16 o letterbox deixa ~60% de tarja preta. Aceitável para anúncio simples; **inaceitável para kit de palestrante.**

### 4.3 Nível 2 — composição própria por proporção (o padrão de qualidade)

Para palestrante, patrocinador e qualquer peça de destaque, **não redimensione um banner** — componha cada proporção. Regras obrigatórias, aprendidas na marra:

- Compor **16:9, 1:1, 4:5 e 9:16 separadamente**, com layout próprio para cada uma.
- Usar **foto e logos oficiais**. Nunca recriar logo ou rosto com IA.
- Ocupar bem o espaço: nada de letterbox, faixa vazia ou área morta.
- **Selo do tipo de sessão** visível (`KEYNOTE`, `PALESTRA`, `PARCEIRA`…).
- **Rodapé completo**: edição + datas + cidade + domínio.
- **Inspecionar visualmente cada proporção** ao final e corrigir sobreposição/texto pequeno. Não confie no código: renderize e olhe.

Esqueleto reaproveitável (extraído do gerador do kit da Raquel Nagasse, o mais evoluído). Rode a partir de `_local/scripts/` ou do scratchpad — **não versione o gerador dentro de `divulgacao/`**:

```python
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

ROOT  = Path(__file__).resolve().parents[2]          # raiz do site
OUT   = ROOT / "divulgacao/{slug}/assets"
PHOTO = Image.open(ROOT / "assets/speakers/{foto}.jpg").convert("RGB")
LOGO  = Image.open(ROOT / "assets/logos/{logo}.png").convert("RGBA")

MINT=(0,255,212); ACCENT=(255,54,33); WHITE=(255,255,255)

# ── Fontes: ver §4.4. Escolha o par disponível no ambiente.
REG  = '/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf'
BOLD = '/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf'
def F(n, b=False): return ImageFont.truetype(BOLD if b else REG, n)

def fit(im, size, center=(.5,.5)):
    return ImageOps.fit(im, size, Image.Resampling.LANCZOS, centering=center)

def wrap(draw, text, font, width):
    lines, line = [], ''
    for word in text.split():
        test = (line + ' ' + word).strip()
        if draw.textbbox((0,0), test, font=font)[2] <= width:
            line = test
        else:
            if line: lines.append(line)
            line = word
    if line: lines.append(line)
    return lines

def draw_lines(draw, xy, text, font, fill, width, gap=5, max_lines=None):
    x, y = xy
    items = wrap(draw, text, font, width)
    if max_lines: items = items[:max_lines]
    for line in items:
        draw.text((x, y), line, font=font, fill=fill); y += font.size + gap
    return y

def alpha_logo(im):
    """Logo entregue como JPEG/PNG com fundo BRANCO → transparente, borda suave."""
    p = im.convert('RGBA'); px = p.load()
    for y in range(p.height):
        for x in range(p.width):
            r, g, b, a = px[x, y]; m = min(r, g, b)
            px[x, y] = (r, g, b, 0 if m > 246 else min(255, (255 - m) * 8))
    box = p.getbbox()
    return p.crop(box) if box else p

def cutout(photo):
    """Recorta a pessoa de um retrato com fundo neutro, amostrando o fundo por
    LINHA (retratos oficiais costumam ter gradiente vertical). Sem halo de caixa."""
    im = photo.convert('RGBA'); px = im.load(); w, h = im.size
    for y in range(h):
        s = [photo.getpixel((x, y)) for x in range(0, min(28, w))]
        br = sum(v[0] for v in s)/len(s); bg = sum(v[1] for v in s)/len(s); bb = sum(v[2] for v in s)/len(s)
        for x in range(w):
            r, g, b, a = px[x, y]
            dist = ((r-br)**2 + (g-bg)**2 + (b-bb)**2) ** .5
            px[x, y] = (r, g, b, max(0, min(255, int((dist - 9) * 8.5))))
    im.putalpha(im.getchannel('A').filter(ImageFilter.GaussianBlur(1.4)))
    return im

def footer(canvas, y, h, datas, dominio):
    W = canvas.width; d = ImageDraw.Draw(canvas)
    d.rectangle((0, y, W, y+h), fill=(2,7,18,235)); d.line((0, y, W, y), fill=MINT, width=3)
    fs = max(18, int(h*.22))
    d.text((int(W*.055), y+int(h*.25)), datas, font=F(fs, True), fill=WHITE)
    tw = d.textbbox((0,0), dominio, font=F(fs, True))[2]
    d.text((W-int(W*.055)-tw, y+int(h*.25)), dominio, font=F(fs, True), fill=MINT)

def render(size, name, kind):
    """kind ∈ {'wide','square','vertical'} → layout próprio por proporção."""
    W, H = size
    c = fit(BG[kind], size).convert('RGBA')
    ...  # logo, selo, headline, blocos de conteúdo, foto, rodapé
    c.convert('RGB').save(OUT/name, quality=96)

banner = render((1920,1080), 'banner.png',          'wide')
banner.save(OUT/'banner.webp', 'WEBP', quality=88, method=6)
render((1200,630),  'og-1200x630.png',    'wide')
render((1080,1080), 'feed-1080x1080.png', 'square')
render((1080,1350), 'feed-1080x1350.png', 'square')
render((1080,1920), 'story-1080x1920.png','vertical')
```

**Truque de layout que se repete:** posicione tudo em **frações da altura/largura** (`int(H*.285)`), não em pixels fixos. Assim o mesmo `kind` serve 1920×1080 e 1200×630 sem reescrever nada.

**Auto-encolher headline:** se o título pode variar de tamanho (nome longo, título de palestra), faça um laço que reduz a fonte até o bloco caber acima do rodapé. Sem isso, um nome longo atravessa a arte.

### 4.4 Ambiente de arte — gotchas reais (WSL/Linux)

| Item | Situação | O que fazer |
|---|---|---|
| **Pillow** | disponível (`PIL 12.x`) | é a única ferramenta de imagem. **Não há** `cwebp`, `convert`/ImageMagick nem `pngquant`. |
| **Fontes da marca** | Unbounded / Inter / JetBrains Mono **não estão instaladas** | ou baixe os `.ttf`, ou aceite o substituto |
| Fontes disponíveis (Linux) | `/usr/share/fonts/truetype/ubuntu/Ubuntu-{R,B,M,L}.ttf`, `/usr/share/fonts/truetype/dejavu/DejaVuSans{,-Bold}.ttf` | Ubuntu-B é o melhor substituto de display |
| Fontes disponíveis (WSL→Windows) | `/mnt/c/Windows/Fonts/arial.ttf`, `arialbd.ttf` | usadas no gerador da Raquel |
| **Emoji** | **não há font de emoji** | emoji em arte PIL sai como quadrado vazio. Emoji **só nos textos das redes**, nunca desenhado na imagem. |
| **SVG** | sem `cairosvg`/`rsvg` | PIL não abre SVG. Tenha o logo em **PNG transparente** antes de compor. |
| Logo preto-em-branco | não compõe sobre fundo escuro | rode `alpha_logo()`; se o traço for preto, force-o para branco (`if a and max(r,g,b) < 90 → branco`) |
| Ruído `ModuleNotFoundError: _distutils_hack` | cosmético do `python3` | ignore, as imagens saem |

### 4.5 Tratar uma logo entregue como JPEG com fundo

Receita validada (reduziu 124 KB → **15 KB**):

```python
im = Image.open(src).convert('RGB')
im = im.crop(im.getbbox())                      # tira a margem morta
p = im.convert('RGBA'); px = p.load()
for y in range(p.height):
    for x in range(p.width):
        r,g,b,a = px[x,y]
        if max(r,g,b)-min(r,g,b) < 14 and min(r,g,b) >= 232:   # cinza/branco neutro
            px[x,y] = (r,g,b,0)                 # → transparente, com alpha suave nas bordas
p = p.resize((600,600), Image.LANCZOS)
p.quantize(colors=48, method=Image.FASTOCTREE).save(out, optimize=True)
```

> ⚠️ **Gotcha de card quadrado:** ao inserir uma **logo 1:1** num card de patrocinador cujo CSS é `.sp-img img{max-width:100%;max-height:100%;object-fit:contain}`, o `max-height` percentual **não segura** — a altura do container vem do flex, só o `max-width` vale, e a logo estoura o card e é cortada. Corrija com `max-height` em **px** (ex.: `84px` num card de 110px). Vale para qualquer site que reaproveite esse padrão de grid de logos.

---

## 5. Copywriting — 5 blocos por kit

| Rede | Tamanho | Tom | Estrutura |
|---|---|---|---|
| **LinkedIn** | 2–4 parágrafos | Institucional | Emoji + manchete → o quê → por que importa → convite → link → 4-5 hashtags |
| **Instagram** | Médio | Leve, direto | Gancho → 1 parágrafo → "link na bio" → bloco de hashtags |
| **WhatsApp / Telegram** | 2–4 linhas | Encaminhável | 📣 manchete → 1 linha → 2 links (site + notícia) |
| **X / Twitter** | **≤280 caracteres** | Uma frase forte | Frase + link + 2-3 hashtags — **conte os caracteres** |
| **Repost do parceiro** | Curto | **1ª pessoa** | "Orgulho de anunciar…" / "Vou palestrar no…" — pronto para o parceiro colar |

Regras gerais: sempre citar o evento/produto e a hashtag principal; palestrante → destacar **tema + data + cidade/local**; patrocinador/parceiro → respeitar a nomenclatura da badge. Mantenha um **banco de hashtags** no fim do `textos.md`.

### 5.1 Regra editorial obrigatória (palestrantes)

Antes de escrever qualquer linha ou desenhar qualquer arte, **ler a página oficial da pessoa no site** e extrair, sem inventar:

- categoria da participação (Keynote, Palestra, Painel…);
- cargo, empresa, resumo do currículo;
- credenciais, resultados e números **verificáveis publicados na página**;
- título completo e resumo da palestra;
- problema, pilares técnicos, promessa e principal resultado.

Todo kit de palestrante combina **resumo do currículo + resumo da palestra**. A arte leva uma síntese legível; `textos.md`, página do kit e e-mail levam contexto suficiente para explicar *por que essa pessoa é relevante* e *o que o público vai aprender*.

### 5.2 Gênero — regra explícita

Use **fraseado neutro de gênero** ("confirma presença", "sobe ao palco", "vai apresentar"). **Nunca infira gênero a partir do nome.** Se não houver pronome declarado na fonte oficial, não use nenhum. Isso já foi aplicado retroativamente em posts e vale para artes, textos e e-mail.

---

## 6. E-mail marketing

O `email.html` é **HTML email-safe**: tabelas, CSS inline, largura fixa **600px**, sem flexbox/grid, sem `<style>` externo.

**Regras rígidas:**

1. **Imagem em PNG por URL absoluta** — `https://{dominio}/divulgacao/{slug}/assets/banner.png`. **WebP não é confiável** em clients de e-mail (Outlook).
2. **Preheader escondido** no topo (`display:none;max-height:0;opacity:0;mso-hide:all`).
3. **Botão CTA bulletproof**: `<td bgcolor>` + `<a>` com `display:block` e padding — não confie em `border-radius` sozinho.
4. **UTMs** em todo CTA: `utm_source={plataforma}&utm_medium=email&utm_campaign={slug}`.
5. **Cópia-fonte versionada** em `_local/email-{plataforma}-{slug}.html` — a plataforma de e-mail não é fonte de verdade.
6. Importar em **RD Station → E-mails → Criar e-mail → "Código HTML"**. A plataforma injeta descadastro e remetente sozinha.
7. **Bloco fixo de rodapé, se o projeto tiver um.** No DSSBR é obrigatória a barra do CRM oficial (PipeZeroOne) logo **antes** do rodapé: uma linha com logo · texto · botão, painel escuro com faixa verde à esquerda, tudo em CSS puro para sobreviver a imagens bloqueadas. Fonte canônica em `_snippets/` e já embutida no `_template/email.html`, para kits novos herdarem. **Se o site de destino tiver um bloco assim, coloque-o no template desde o dia 1** — aplicar retroativamente em 10 e-mails é o tipo de trabalho que se evita uma vez só.

> **Resend vs RD Station:** os dois já foram usados no projeto. Para **e-mail marketing em massa** → RD Station (colar HTML). Para **disparo transacional/pontual por script** → Resend funciona, com dois gotchas: domínio precisa estar verificado e as requisições precisam de **User-Agent de navegador** (senão Cloudflare devolve erro 1010).

---

## 7. Publicação e verificação

```bash
cd {repo_local}
git add divulgacao/ blog/ sitemap.xml
git commit -m "feat(divulgacao): kit {slug}"
git push origin main
npx vercel --prod --yes --scope {SCOPE}
```

**Deploy não depende do push.** O `git push` já falhou por instabilidade do GitHub (`remote: fatal error in commit_refs`); a Vercel publica direto pelo CLI. Mas **não deixe o backlog crescer** — o repositório do DSSBR ficou 12 commits atrás do GitHub exatamente por isso.

### Verificação obrigatória antes de entregar o link

- [ ] `curl -o /dev/null -w '%{http_code}' https://{dominio}/divulgacao/{slug}/` → **200**
- [ ] As 5 artes carregam e **foram olhadas** (não só geradas) — sem texto cortado, sem sobreposição, sem tarja vazia
- [ ] Botões **Copiar** funcionam (exigem HTTPS ou `localhost`; `navigator.clipboard` **não funciona via `file://`**)
- [ ] Botões **Baixar** apontam para arquivos existentes
- [ ] `<meta name="robots" content="noindex, nofollow">` presente **e** o slug **fora** do `sitemap.xml`
- [ ] Card no hub `/divulgacao/` aparecendo, com thumb correta
- [ ] Se houver notícia: `/blog/{slug}/` no ar, no sitemap, e com `og:image` gerando preview

**Verificação visual em WSL:** Firefox headless **não gera imagem** neste ambiente. Use o **chromium do Playwright**:

```bash
python3 -m http.server 8081 &   # servir o site local
~/.cache/ms-playwright/chromium-*/chrome-linux64/chrome \
  --headless --screenshot=/tmp/shot.png --window-size=1440,2400 \
  http://localhost:8081/divulgacao/{slug}/
```
Depois **abra o PNG** e olhe. Para página longa, capture alto (ex.: `--window-size=1300,17000`) e recorte com PIL.

---

## 8. Checklist de kit completo

- [ ] `assets/banner.png` (1920×1080) + `banner.webp`
- [ ] `assets/og-1200x630.png`
- [ ] `assets/feed-1080x1080.png`
- [ ] `assets/feed-1080x1350.png`
- [ ] `assets/story-1080x1920.png`
- [ ] `textos.md` com os 5 blocos + banco de hashtags
- [ ] `index.html` preenchido (thumbs + Baixar + Copiar + links), badge correta, **noindex**
- [ ] `email.html` + cópia em `_local/email-{plataforma}-{slug}.html` + bloco fixo de rodapé (se houver)
- [ ] Notícia `/blog/{slug}/` criada, linkada e no `sitemap.xml` (quando aplicável)
- [ ] Card no hub `divulgacao/index.html`, **em primeiro**
- [ ] Deploy · 200 · artes inspecionadas visualmente · Copiar/Baixar testados

---

## 9. Troubleshooting

| Sintoma | Causa / solução |
|---|---|
| `ModuleNotFoundError: _distutils_hack` | Ruído cosmético do `python3`. As imagens são geradas. Ignore. |
| Emoji vira quadrado na arte | Não há font de emoji. Emoji só nos textos das redes. |
| WebP não aparece no e-mail | Esperado. E-mail usa **PNG**; WebP só no site com `<picture>` fallback. |
| Preview de link sem imagem no WhatsApp | Você colou a URL do **kit** (noindex). Cole a da **notícia** `/blog/{slug}/`. |
| Botão "Copiar" não copia | `navigator.clipboard` exige HTTPS ou `localhost`. Não funciona em `file://`. |
| 9:16 com tarja preta enorme | Você usou o baseline (§4.2) onde precisava de composição própria (§4.3). |
| Logo estourou o card / foi cortada | Logo quadrada + `max-height:100%` em container flex. Use `max-height` em px. Ver §4.5. |
| Logo preta some no fundo escuro | `alpha_logo()` + inversão do traço para branco. Ver §4.3. |
| Kit apareceu no Google | Falta `noindex` **ou** o slug entrou no `sitemap.xml`. |
| `git push` falha (`commit_refs`) | Instabilidade do GitHub. `vercel --prod` publica sem depender do push. |
| Nome do arquivo de logo mente | Já aconteceu (`logo-asp-7.png` = MultiCortex). **Abra a imagem** antes de afirmar que um logo existe ou falta. |

---

## 10. Ordem recomendada de implantação num site novo

1. **Hub + template + script** (`index.html`, `_template/`, `gerar-imagens.py`, `_snippets/`) — meio dia. Faça o `_template/email.html` já com o bloco fixo de rodapé.
2. **Um kit-piloto** do tipo mais frequente do site (normalmente palestrante ou patrocinador). Ele vira a referência a clonar: `cp -r {kit-piloto} novo-slug` costuma ser mais rápido que partir do `_template` quando o formato se repete.
3. **Adaptar este playbook** para o site (vira o `PROCESSO.md` local) e escrever o `README.md` quickstart.
4. **Registrar na memória do projeto** o gatilho — *"cria o kit de divulgação do [X]"* — para as sessões seguintes reconhecerem o pedido.

---

## 11. Fonte de verdade do original

No repositório do DSSBR 2026 (`/mnt/d/2026/siteDDs2026/site/`):

| Arquivo | Conteúdo |
|---|---|
| `divulgacao/PROCESSO.md` | processo completo, específico do DSSBR |
| `divulgacao/README.md` | quickstart |
| `divulgacao/gerar-imagens.py` | baseline PIL (versão de 3 derivados) |
| `divulgacao/_template/` | template do kit (index + email + textos + assets) |
| `divulgacao/_snippets/rodape-crm-pipezeroone.html` | bloco fixo de rodapé de e-mail |
| `divulgacao/raquel-nagasse-palestrante/` | **melhor kit de referência** (composição própria por proporção) |
| `divulgacao/palestras-aprovadas-2026/` | referência de kit de anúncio (arte tipográfica, sem foto) |
| `_local/scripts/build_raquel_kit_images.py` | gerador de arte mais evoluído |
| `_local/scripts/build_alex_kit_images.py` | gerador anterior, mais simples |

---

*Escrito em 2026-07-27, a partir do sistema em produção em `https://dssbr.com.br/divulgacao/` (12 kits).*
