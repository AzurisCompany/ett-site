#!/usr/bin/env python3
"""
Gerador de artes do kit "Encontro de segunda, 20h" (nível 2: composição
própria por proporção, não letterbox).

    python3 webapp/scripts/kits/build_encontro_segunda.py

Escreve as 5 artes canônicas em
    webapp/public/divulgacao/convitesegunda20h/assets/

Este arquivo é o MOLDE dos próximos kits: copie, troque o bloco CONFIG e
as fontes de imagem. As funções de layout (render/kind) não precisam mudar.

Fontes: webapp/scripts/fonts/Inter-*.ttf (Inter é a fonte do site; não vem
instalada no sistema, por isso os .ttf estão versionados).
Imagens: recortadas do banner em alta do e-mail
(novoConteudo/EttMeetOnline-segunda20h/EmailTopNovo.png, 1672x941).
"""
import random
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps

# ── Caminhos ─────────────────────────────────────────────────────────
SCRIPTS = Path(__file__).resolve().parents[1]          # webapp/scripts
REPO = SCRIPTS.parents[1]                              # raiz do repo
FONTS = SCRIPTS / "fonts"
SRC_BANNER = REPO / "novoConteudo/EttMeetOnline-segunda20h/EmailTopNovo.png"
OUT = REPO / "webapp/public/divulgacao/convitesegunda20h/assets"

# ── CONFIG do kit ────────────────────────────────────────────────────
CONFIG = {
    "eyebrow": "GRATUITO  ·  ONLINE  ·  SEM CADASTRO",
    "headline": "Encontro de conversação em inglês",
    "date_big": "TODA SEGUNDA · 20H",
    "sub": "90 minutos falando inglês com gente que também está treinando.",
    "footer_left": "ONLINE · 20H ÀS 21H30 · HORÁRIO DE BRASÍLIA",
    "footer_right": "ENGLISHTALKTIME.COM.BR",
    # só no 9:16, que sobra altura. Resumo fiel dos 3 passos de ComoE.tsx.
    "bullets": [
        "Um clique no navegador, sem instalar nada",
        "Cada encontro tem tema, perguntas e rodadas",
        "Grupos pequenos: todo mundo fala",
    ],
}

# ── Paleta (tokens do site) ──────────────────────────────────────────
NEON = (0, 255, 157)
BLUE = (0, 191, 255)
WHITE = (255, 255, 255)
MUTED = (176, 190, 214)
PANEL = (14, 26, 58)
BG_TOP = (4, 7, 20)
BG_BOT = (9, 26, 66)


def F(weight, size):
    return ImageFont.truetype(str(FONTS / f"Inter-{weight}.ttf"), size)


# ── Helpers de texto ─────────────────────────────────────────────────
def wrap(draw, text, font, width):
    lines, line = [], ""
    for word in text.split():
        test = (line + " " + word).strip()
        if draw.textbbox((0, 0), test, font=font)[2] <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def fit_block(draw, text, weight, start_size, width, max_lines):
    """Encolhe a fonte até o texto caber em max_lines. Nome comprido não
    atravessa a arte por causa disso."""
    size = start_size
    while size > 12:
        font = F(weight, size)
        lines = wrap(draw, text, font, width)
        if len(lines) <= max_lines:
            return font, lines
        size -= 2
    return F(weight, size), wrap(draw, text, F(weight, size), width)


def draw_lines(draw, xy, lines, font, fill, leading=1.16):
    x, y = xy
    step = int(font.size * leading)
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        y += step
    return y


def text_w(draw, text, font):
    return draw.textbbox((0, 0), text, font=font)[2]


# ── Fundo ────────────────────────────────────────────────────────────
def background(size):
    W, H = size
    base = Image.new("RGB", (1, H))
    px = base.load()
    for y in range(H):
        t = y / max(1, H - 1)
        px[0, y] = tuple(int(BG_TOP[i] + (BG_BOT[i] - BG_TOP[i]) * (t ** 1.3)) for i in range(3))
    canvas = base.resize((W, H))

    # starfield determinístico (mesma arte a cada rodada)
    rnd = random.Random(20260727)
    stars = Image.new("RGB", (W, H), (0, 0, 0))
    sd = ImageDraw.Draw(stars)
    for _ in range(int(W * H / 5200)):
        x, y = rnd.randrange(W), rnd.randrange(H)
        r = rnd.choice([0, 0, 1, 1, 2])
        v = rnd.randrange(70, 190)
        sd.ellipse((x - r, y - r, x + r, y + r), fill=(v, v, min(255, v + 40)))
    canvas = ImageChops.add(canvas, stars)

    # brilho neon suave no canto inferior esquerdo
    glow = Image.new("RGB", (W, H), (0, 0, 0))
    gd = ImageDraw.Draw(glow)
    r = int(min(W, H) * 0.55)
    gd.ellipse((-r // 2, H - r, r, H + r // 2), fill=(0, 34, 26))
    glow = glow.filter(ImageFilter.GaussianBlur(int(min(W, H) * 0.09)))
    return ImageChops.add(canvas, glow)


# ── Peças ────────────────────────────────────────────────────────────
def rounded(im, radius):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1), radius=radius, fill=255)
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out


def logo_chip(height):
    """Logo ETT recortada do banner, dentro de um chip navy (o recorte tem
    fundo azul do banner — o chip esconde a emenda de propósito)."""
    logo = Image.open(SRC_BANNER).convert("RGB").crop((1232, 682, 1500, 838))
    pad = int(height * 0.14)
    lh = height - pad * 2
    lw = int(logo.size[0] * lh / logo.size[1])
    logo = logo.resize((lw, lh), Image.LANCZOS)
    chip = Image.new("RGB", (lw + pad * 2, height), PANEL)
    chip.paste(logo, (pad, pad))
    chip = rounded(chip, int(height * 0.22))
    d = ImageDraw.Draw(chip)
    d.rounded_rectangle((0, 0, chip.size[0] - 1, chip.size[1] - 1),
                        radius=int(height * 0.22), outline=(38, 62, 120), width=2)
    return chip


# Recortes da arte-fonte. GRADE = 3x2 rostos (proporção 1.15, cabe em card
# quase quadrado); FAIXA = só a linha de cima (proporção 2.5, para banda
# horizontal em formato vertical). Usar a GRADE numa banda fina corta os
# rostos ao meio — foi o primeiro erro desta arte.
CROP_GRADE = (1014, 232, 1444, 606)
CROP_FAIXA = (1014, 230, 1444, 398)


def photo_card(size, radius, box=CROP_GRADE):
    """Gente na chamada — recorte da arte do e-mail."""
    ph = Image.open(SRC_BANNER).convert("RGB").crop(box)
    card = ImageOps.fit(ph, size, Image.LANCZOS, centering=(0.5, 0.4))
    card = rounded(card, radius)
    d = ImageDraw.Draw(card)
    d.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, outline=(46, 74, 134), width=3)
    return card


def pill(draw, xy, text, font, fg, bg, border, padx, pady, radius=None):
    x, y = xy
    w = text_w(draw, text, font) + padx * 2
    h = font.size + pady * 2
    radius = radius if radius is not None else h // 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=radius, fill=bg, outline=border, width=2)
    draw.text((x + padx, y + pady - int(font.size * 0.06)), text, font=font, fill=fg)
    return w, h


def footer(canvas, kind):
    """Barra de rodapé: horário à esquerda, domínio à direita. Se as duas
    linhas não couberem lado a lado (típico do 9:16), empilha centralizado —
    senão os textos se sobrepõem."""
    W, H = canvas.size
    d = ImageDraw.Draw(canvas)
    pad = int(W * 0.055)
    left, right = CONFIG["footer_left"], CONFIG["footer_right"]

    h = int(H * (0.085 if kind == "wide" else 0.062))
    y = int(H * 0.895) if kind == "vertical" else H - h
    fs = max(14, int((H * 0.085 if kind == "wide" else W * 0.062) * 0.30))
    f = F("700", fs)

    stacked = text_w(d, left, f) + text_w(d, right, f) + pad * 3 > W
    if stacked:
        h = int(fs * 2.9)
    if kind != "wide":
        h = max(h, H - y)  # em vertical/quadrado a barra vai até a borda

    d.rectangle((0, y, W, H if kind != "wide" else y + h), fill=(3, 6, 16))
    d.line((0, y, W, y), fill=NEON, width=max(2, int(H * 0.004)))

    if stacked:
        ty = y + int(fs * 0.55)
        for text, fill in ((right, NEON), (left, MUTED)):
            d.text(((W - text_w(d, text, f)) // 2, ty), text, font=f, fill=fill)
            ty += int(fs * 1.45)
    else:
        ty = y + (h - fs) // 2 - int(fs * 0.12)
        d.text((pad, ty), left, font=f, fill=MUTED)
        d.text((W - pad - text_w(d, right, f), ty), right, font=f, fill=NEON)


# ── Layouts ──────────────────────────────────────────────────────────
def render(size, kind):
    W, H = size
    c = background(size).convert("RGBA")
    d = ImageDraw.Draw(c)
    pad = int(W * 0.055)

    if kind == "wide":
        col = int(W * 0.455)
        chip = logo_chip(int(H * 0.115))
        c.alpha_composite(chip, (pad, int(H * 0.085)))

        y = int(H * 0.265)
        fe = F("700", int(H * 0.032))
        pill(d, (pad, y), CONFIG["eyebrow"], fe, NEON, (8, 32, 30), (0, 70, 56),
             int(H * 0.026), int(H * 0.018))
        y += int(H * 0.105)

        fh, lines = fit_block(d, CONFIG["headline"], "800", int(H * 0.105), col, 2)
        y = draw_lines(d, (pad, y), lines, fh, WHITE)
        y += int(H * 0.035)

        fd = F("900", int(H * 0.072))
        d.text((pad, y), CONFIG["date_big"], font=fd, fill=NEON)
        y += int(fd.size * 1.34)

        fs, sl = fit_block(d, CONFIG["sub"], "400", int(H * 0.036), col, 2)
        draw_lines(d, (pad, y), sl, fs, MUTED, 1.34)

        cw = int(W * 0.40)
        ch = int(cw * 374 / 430)
        c.alpha_composite(photo_card((cw, ch), int(W * 0.018)),
                          (W - pad - cw, int(H * 0.5 - ch * 0.5) - int(H * 0.02)))

    else:
        # square (1:1 e 4:5) e vertical (9:16) compartilham a mesma pilha:
        # chip → selo → headline → banda de foto → data → sub, com o `sub`
        # só entrando se sobrar altura antes do rodapé.
        sq = kind == "square"
        top_ = 0.050 if sq else 0.070
        chip_h = 0.072 if sq else 0.050
        eyebrow_y = 0.150 if sq else 0.150
        head_y = 0.230 if sq else 0.230
        head_s = 0.075 if sq else 0.052
        f_top = int(H * (0.938 if sq else 0.895))  # topo do rodapé

        c.alpha_composite(logo_chip(int(H * chip_h)), (pad, int(H * top_)))

        fe = F("700", int(H * (0.026 if sq else 0.019)))
        pill(d, (pad, int(H * eyebrow_y)), CONFIG["eyebrow"], fe, NEON, (8, 32, 30),
             (0, 70, 56), int(H * 0.020), int(H * 0.014))

        y = int(H * head_y)
        fh, lines = fit_block(d, CONFIG["headline"], "800", int(H * head_s), W - pad * 2, 2)
        y = draw_lines(d, (pad, y), lines, fh, WHITE)
        y += int(H * 0.022)

        cw = W - pad * 2
        ch = int(cw * 168 / 430)  # banda: linha de cima, 3 rostos
        c.alpha_composite(photo_card((cw, ch), int(W * 0.026), CROP_FAIXA), (pad, y))
        y += ch + int(H * (0.032 if sq else 0.040))

        fd = F("900", int(H * (0.058 if sq else 0.040)))
        d.text((pad, y), CONFIG["date_big"], font=fd, fill=NEON)
        y += int(fd.size * 1.32)

        fs, sl = fit_block(d, CONFIG["sub"], "400", int(H * (0.030 if sq else 0.021)),
                           W - pad * 2, 3)
        if y + int(fs.size * 1.34 * len(sl)) < f_top - int(H * 0.02):
            y = draw_lines(d, (pad, y), sl, fs, MUTED, 1.34)

        if not sq:  # 9:16 sobra altura: os 3 passos do encontro
            y += int(H * 0.035)
            fb = F("600", int(H * 0.020))
            for item in CONFIG["bullets"]:
                r = int(fb.size * 0.20)
                cy = y + fb.size // 2
                d.ellipse((pad, cy - r, pad + r * 2, cy + r), fill=NEON)
                d.text((pad + int(fb.size * 1.05), y), item, font=fb, fill=(214, 226, 244))
                y += int(fb.size * 2.0)

    c = c.convert("RGB")
    footer(c, kind)
    return c


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    def save(img, name, **kw):
        p = OUT / name
        img.save(p, **kw)
        print(f"  {name:24s} {img.size}  {p.stat().st_size/1024:.0f}KB")

    banner = render((1920, 1080), "wide")
    save(banner, "banner.png")
    save(banner, "banner.webp", format="WEBP", quality=86, method=6)
    save(render((1200, 630), "wide"), "og-1200x630.png")
    save(render((1080, 1080), "square"), "feed-1080x1080.png")
    save(render((1080, 1350), "square"), "feed-1080x1350.png")
    save(render((1080, 1920), "vertical"), "story-1080x1920.png")
    print("OK →", OUT)


if __name__ == "__main__":
    main()
