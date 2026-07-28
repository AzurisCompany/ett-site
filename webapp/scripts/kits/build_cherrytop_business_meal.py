#!/usr/bin/env python3
"""
Artes do kit "CherryTop Business Meal" — atividade online da Cherry Top,
sábado 01/08/2026, 12h–13h, divulgada pelo ETT.

    python3 webapp/scripts/kits/build_cherrytop_business_meal.py

Arte TIPOGRÁFICA de propósito: não existe foto real desta atividade no repo, e
ilustrar um encontro online com foto de imersão presencial nos EUA passaria a
informação errada. Se aparecer foto real, entra no lugar do bloco de chips.

A logo da Cherry Top vai dentro de um chip BRANCO: o texto "Business
Communication" é azul-marinho e sumiria sobre o fundo escuro, e recolorir a
logo de um parceiro não se faz.
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ett_kit import (  # noqa: E402
    F, MUTED, NEON, REPO, WHITE, background, chip, draw_lines, fit_block,
    footer, gerar, logo_ett, pill, text_w, trim_white,
)

OUT = REPO / "webapp/public/divulgacao/cherrytop-business-meal/assets"
LOGO_CHERRY = REPO / "webapp/public/images/logo-cherrytop.jpeg"

CONFIG = {
    "eyebrow": "GRATUITO  ·  ONLINE  ·  SÁBADO, 1º DE AGOSTO",
    "headline": "CherryTop Business Meal",
    "date_big": "SÁB 01/08 · 12H ÀS 13H",
    "sub": "Uma hora praticando inglês de negócios em grupo, com a equipe da Cherry Top.",
    "chips": ["Negotiation", "Networking", "Team Building"],
    "cta": "Sala: ett-speak.vercel.app/r/cherrytop",
    # só no 9:16, que sobra altura
    "bullets": [
        "Atividade realizada pela Cherry Top",
        "Uma hora, em inglês, em situações de negócio",
        "Grupo de WhatsApp: vagas e o one-to-one da tarde",
    ],
    "footer_left": "ONLINE · 12H ÀS 13H · HORÁRIO DE BRASÍLIA",
    "footer_right": "ENGLISHTALKTIME.COM.BR",
}

# vinho no lugar do azul do kit de segunda — diferencia sem sair da marca
BG_BOT = (46, 10, 26)
GLOW = (40, 6, 16)
CHERRY = (214, 40, 34)


def logo_cherry(height):
    logo = trim_white(Image.open(LOGO_CHERRY).convert("RGB"))
    return chip(logo, height, (255, 255, 255), (255, 255, 255), pad_ratio=0.10)


def chips_row(draw, xy, width, size, gap):
    """Os 3 focos da atividade. Quebra pra linha de baixo quando não cabe."""
    x0, y = xy
    x = x0
    f = F("700", size)
    padx, pady = int(size * 0.85), int(size * 0.55)
    line_h = size + pady * 2 + gap
    for c in CONFIG["chips"]:
        w = text_w(draw, c, f) + padx * 2
        if x > x0 and x + w > x0 + width:
            x = x0
            y += line_h
        pill(draw, (x, y), c, f, WHITE, (58, 14, 26), (150, 40, 44), padx, pady)
        x += w + gap
    return y + line_h


def render(size, kind):
    W, H = size
    c = background(size, bot=BG_BOT, glow=GLOW, seed=20260801).convert("RGBA")
    d = ImageDraw.Draw(c)
    pad = int(W * 0.055)

    if kind == "wide":
        col = int(W * 0.60)
        lh = int(H * 0.115)
        c.alpha_composite(logo_ett(lh), (pad, int(H * 0.085)))
        # a logo da Cherry Top é quadrada e com muito respiro interno: no mesmo
        # tamanho do chip do ETT o texto dela fica ilegível — vai 40% maior
        cl = logo_cherry(int(lh * 1.4))
        c.alpha_composite(cl, (W - pad - cl.size[0], int(H * 0.070)))

        y = int(H * 0.275)
        fe = F("700", int(H * 0.030))
        pill(d, (pad, y), CONFIG["eyebrow"], fe, NEON, (8, 32, 30), (0, 70, 56),
             int(H * 0.024), int(H * 0.017))
        y += int(H * 0.100)

        fh, lines = fit_block(d, CONFIG["headline"], "800", int(H * 0.105), col, 2)
        y = draw_lines(d, (pad, y), lines, fh, WHITE)
        y += int(H * 0.030)

        fd = F("900", int(H * 0.062))
        d.text((pad, y), CONFIG["date_big"], font=fd, fill=NEON)
        y += int(fd.size * 1.30)

        y = chips_row(d, (pad, y), W - pad * 2, int(H * 0.030), int(W * 0.012))
        y += int(H * 0.010)

        fs, sl = fit_block(d, CONFIG["sub"], "400", int(H * 0.034), int(W * 0.72), 2)
        draw_lines(d, (pad, y), sl, fs, MUTED, 1.32)

    else:
        sq = kind == "square"
        lh = int(H * (0.072 if sq else 0.050))
        c.alpha_composite(logo_ett(lh), (pad, int(H * (0.050 if sq else 0.070))))
        cl = logo_cherry(int(lh * 1.5))
        c.alpha_composite(cl, (W - pad - cl.size[0], int(H * (0.042 if sq else 0.062))))

        fe = F("700", int(H * (0.023 if sq else 0.017)))
        pill(d, (pad, int(H * 0.150)), CONFIG["eyebrow"], fe, NEON, (8, 32, 30),
             (0, 70, 56), int(H * 0.018), int(H * 0.013))

        y = int(H * (0.225 if sq else 0.220))
        fh, lines = fit_block(d, CONFIG["headline"], "800", int(H * (0.085 if sq else 0.058)),
                              W - pad * 2, 2)
        y = draw_lines(d, (pad, y), lines, fh, WHITE)
        y += int(H * 0.030)

        fd = F("900", int(H * (0.052 if sq else 0.036)))
        d.text((pad, y), CONFIG["date_big"], font=fd, fill=NEON)
        y += int(fd.size * 1.35)

        y = chips_row(d, (pad, y), W - pad * 2, int(H * (0.026 if sq else 0.019)),
                      int(W * 0.020))
        y += int(H * 0.015)

        fs, sl = fit_block(d, CONFIG["sub"], "400", int(H * (0.028 if sq else 0.020)),
                           W - pad * 2, 3)
        y = draw_lines(d, (pad, y), sl, fs, MUTED, 1.34)

        # CTA do WhatsApp: só onde sobra altura (4:5 e 9:16)
        fc = F("700", int(H * (0.026 if sq else 0.019)))
        f_top = int(H * (0.938 if sq else 0.895))
        if y + int(fc.size * 3.2) < f_top:
            y += int(H * 0.030)
            _, ph = pill(d, (pad, y), CONFIG["cta"], fc, (12, 5, 8), (0, 255, 157),
                         (0, 255, 157), int(fc.size * 0.9), int(fc.size * 0.6))
            y += ph

        if not sq:  # 9:16 sobra altura: os detalhes da atividade
            y += int(H * 0.040)
            fb = F("600", int(H * 0.019))
            for item in CONFIG["bullets"]:
                r = int(fb.size * 0.20)
                cy = y + fb.size // 2
                d.ellipse((pad, cy - r, pad + r * 2, cy + r), fill=NEON)
                bl = fit_block(d, item, "600", fb.size, W - pad * 2 - int(fb.size * 1.2), 2)[1]
                y = draw_lines(d, (pad + int(fb.size * 1.05), y), bl, fb, (214, 226, 244), 1.30)
                y += int(fb.size * 0.85)

    c = c.convert("RGB")
    footer(c, kind, CONFIG["footer_left"], CONFIG["footer_right"])
    return c


if __name__ == "__main__":
    gerar(OUT, render)
