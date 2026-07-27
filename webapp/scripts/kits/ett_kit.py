"""
Helpers compartilhados dos geradores de arte dos kits de divulgação do ETT.

Importe daqui em vez de copiar: `from ett_kit import *` (os scripts de kit
ficam nesta mesma pasta). Cada kit define só o seu CONFIG e o seu `render()`.

Nota: `build_encontro_segunda.py` (kit piloto) é standalone e NÃO importa este
módulo — não foi refatorado pra não correr o risco de mudar arte já publicada.
Kits novos usam este módulo.

Ambiente (WSL): Pillow é a única ferramenta de imagem — não há cwebp,
ImageMagick nem font de emoji. Inter vem de ../fonts/ porque não está
instalada no sistema.
"""
import random
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps

SCRIPTS = Path(__file__).resolve().parents[1]          # webapp/scripts
REPO = SCRIPTS.parents[1]                              # raiz do repo
FONTS = SCRIPTS / "fonts"

# Paleta (tokens do site)
NEON = (0, 255, 157)
BLUE = (0, 191, 255)
WHITE = (255, 255, 255)
MUTED = (176, 190, 214)
PANEL = (14, 26, 58)

# Os 5 formatos canônicos: (arquivo, tamanho, kind)
FORMATOS = [
    ("banner.png", (1920, 1080), "wide"),
    ("og-1200x630.png", (1200, 630), "wide"),
    ("feed-1080x1080.png", (1080, 1080), "square"),
    ("feed-1080x1350.png", (1080, 1350), "square"),
    ("story-1080x1920.png", (1080, 1920), "vertical"),
]


def F(weight, size):
    return ImageFont.truetype(str(FONTS / f"Inter-{weight}.ttf"), size)


# ── Texto ────────────────────────────────────────────────────────────
def text_w(draw, text, font):
    return draw.textbbox((0, 0), text, font=font)[2]


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
    """Encolhe a fonte até caber em max_lines — título comprido não atravessa a arte."""
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


# ── Fundo ────────────────────────────────────────────────────────────
def background(size, top=(4, 7, 20), bot=(9, 26, 66), glow=(0, 34, 26), seed=20260727):
    """Gradiente + starfield determinístico + brilho no canto inferior esquerdo.
    `bot` e `glow` diferenciam o kit (o do encontro é azul; o da Cherry Top, vinho)."""
    W, H = size
    base = Image.new("RGB", (1, H))
    px = base.load()
    for y in range(H):
        t = y / max(1, H - 1)
        px[0, y] = tuple(int(top[i] + (bot[i] - top[i]) * (t ** 1.3)) for i in range(3))
    canvas = base.resize((W, H))

    rnd = random.Random(seed)
    stars = Image.new("RGB", (W, H), (0, 0, 0))
    sd = ImageDraw.Draw(stars)
    for _ in range(int(W * H / 5200)):
        x, y = rnd.randrange(W), rnd.randrange(H)
        r = rnd.choice([0, 0, 1, 1, 2])
        v = rnd.randrange(70, 190)
        sd.ellipse((x - r, y - r, x + r, y + r), fill=(v, v, min(255, v + 40)))
    canvas = ImageChops.add(canvas, stars)

    g = Image.new("RGB", (W, H), (0, 0, 0))
    gd = ImageDraw.Draw(g)
    r = int(min(W, H) * 0.55)
    gd.ellipse((-r // 2, H - r, r, H + r // 2), fill=glow)
    return ImageChops.add(canvas, g.filter(ImageFilter.GaussianBlur(int(min(W, H) * 0.09))))


# ── Peças ────────────────────────────────────────────────────────────
def rounded(im, radius):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1),
                                           radius=radius, fill=255)
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out


def trim_white(im, thresh=246):
    """Corta a margem branca de uma logo entregue em JPEG/PNG com fundo branco."""
    g = im.convert("L").point(lambda v: 0 if v > thresh else 255)
    box = g.getbbox()
    return im.crop(box) if box else im


def chip(content, height, bg, border, pad_ratio=0.14, radius_ratio=0.22):
    """Logo dentro de um chip arredondado. Chip branco preserva as cores da marca
    do parceiro sobre fundo escuro (keying na logo alteraria a marca)."""
    pad = int(height * pad_ratio)
    ch = height - pad * 2
    cw = int(content.size[0] * ch / content.size[1])
    content = content.resize((cw, ch), Image.LANCZOS)
    box = Image.new("RGB", (cw + pad * 2, height), bg)
    box.paste(content, (pad, pad))
    box = rounded(box, int(height * radius_ratio))
    ImageDraw.Draw(box).rounded_rectangle(
        (0, 0, box.size[0] - 1, box.size[1] - 1),
        radius=int(height * radius_ratio), outline=border, width=2)
    return box


def logo_ett(height):
    """Logo do ETT recortada em alta do banner do e-mail (a Logo-ETT.png do repo
    tem só 212x132 e sem alpha), dentro de um chip navy que esconde a emenda."""
    src = REPO / "novoConteudo/EttMeetOnline-segunda20h/EmailTopNovo.png"
    logo = Image.open(src).convert("RGB").crop((1232, 682, 1500, 838))
    return chip(logo, height, PANEL, (38, 62, 120))


def pill(draw, xy, text, font, fg, bg, border, padx, pady, radius=None):
    x, y = xy
    w = text_w(draw, text, font) + padx * 2
    h = font.size + pady * 2
    radius = radius if radius is not None else h // 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=radius, fill=bg, outline=border, width=2)
    draw.text((x + padx, y + pady - int(font.size * 0.06)), text, font=font, fill=fg)
    return w, h


def footer(canvas, kind, left, right, accent=NEON):
    """Horário à esquerda, domínio à direita; empilha centralizado quando não
    cabem lado a lado (senão os textos se sobrepõem no 9:16)."""
    W, H = canvas.size
    d = ImageDraw.Draw(canvas)
    pad = int(W * 0.055)
    h = int(H * (0.085 if kind == "wide" else 0.062))
    y = int(H * 0.895) if kind == "vertical" else H - h
    fs = max(14, int((H * 0.085 if kind == "wide" else W * 0.062) * 0.30))
    f = F("700", fs)

    stacked = text_w(d, left, f) + text_w(d, right, f) + pad * 3 > W
    if stacked:
        h = int(fs * 2.9)
    if kind != "wide":
        h = max(h, H - y)

    d.rectangle((0, y, W, H if kind != "wide" else y + h), fill=(3, 6, 16))
    d.line((0, y, W, y), fill=accent, width=max(2, int(H * 0.004)))

    if stacked:
        ty = y + int(fs * 0.55)
        for text, fill in ((right, accent), (left, MUTED)):
            d.text(((W - text_w(d, text, f)) // 2, ty), text, font=f, fill=fill)
            ty += int(fs * 1.45)
    else:
        ty = y + (h - fs) // 2 - int(fs * 0.12)
        d.text((pad, ty), left, font=f, fill=MUTED)
        d.text((W - pad - text_w(d, right, f), ty), right, font=f, fill=accent)


def gerar(out_dir, render):
    """Roda os 5 formatos + o webp do banner. `render(size, kind)` -> Image RGB."""
    out_dir.mkdir(parents=True, exist_ok=True)
    for name, size, kind in FORMATOS:
        img = render(size, kind)
        p = out_dir / name
        img.save(p)
        print(f"  {name:24s} {img.size}  {p.stat().st_size/1024:.0f}KB")
        if name == "banner.png":
            wp = out_dir / "banner.webp"
            img.save(wp, format="WEBP", quality=86, method=6)
            print(f"  {'banner.webp':24s} {img.size}  {wp.stat().st_size/1024:.0f}KB")
    print("OK →", out_dir)
