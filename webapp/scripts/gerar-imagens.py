#!/usr/bin/env python3
"""
Baseline: gera as 5 artes de um kit a partir de UMA arte 16:9 pronta.

Uso:
    python3 webapp/scripts/gerar-imagens.py CAMINHO/banner.png webapp/public/divulgacao/SLUG/assets

Produz: banner.png, banner.webp, og-1200x630.png,
        feed-1080x1080.png, feed-1080x1350.png, story-1080x1920.png

Use isto só quando o material já vier pronto do designer/cliente. Para peça
de destaque (encontro, imersão, parceiro), componha cada proporção — o
letterbox deixa ~60% de tarja no 9:16. Ver PROCESSO-DIVULGACAO-ETT.md §4.
"""
import sys, os
from PIL import Image

ETT_DARK = (5, 5, 16)  # #050510 — mesmo fundo do site


def letterbox(src, w, h):
    """Redimensiona para a largura do canvas e centraliza sobre o fundo da marca."""
    scale = w / src.size[0]
    resized = src.resize((w, round(src.size[1] * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (w, h), ETT_DARK)
    canvas.paste(resized, (0, (h - resized.size[1]) // 2))
    return canvas


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
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

    save(src.resize((1920, 1080), Image.LANCZOS), "banner.png")
    save(src.resize((1920, 1080), Image.LANCZOS), "banner.webp", format="WEBP", quality=82, method=6)
    save(src.resize((1200, 630), Image.LANCZOS), "og-1200x630.png")
    save(letterbox(src, 1080, 1080), "feed-1080x1080.png")
    save(letterbox(src, 1080, 1350), "feed-1080x1350.png")
    save(letterbox(src, 1080, 1920), "story-1080x1920.png")
    print("OK")


if __name__ == "__main__":
    main()
