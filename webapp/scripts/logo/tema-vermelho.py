"""06/10/2026 — tema da logo corrigida: o verde saiu da marca.

Ação (botão, link, destaque): verde → vermelho. Fundo sólido usa o vermelho oficial (brand-red-deep,
#D72229) com texto branco; texto, borda e tintas usam o vermelho clareado (brand-red, #F05A60, AA no marinho).
Secundária: o vermelho de antes → cinza da logo (brand-silver, #A8A9AC).
Uso: python3 scripts/logo/tema-vermelho.py   (roda uma vez; idempotente só porque não sobra brand-green)
"""
import re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
files = [p for d in ('app', 'components', 'lib') for p in (ROOT / d).rglob('*') if p.suffix in ('.tsx', '.ts', '.css')]
STR = re.compile(r'"[^"\n]*"|\'[^\'\n]*\'|`[^`]*`')
SOLID = re.compile(r'(?<![\w/-])((?:[a-z-]+:)*)bg-brand-green(?![\w/-])')
total = 0
for p in files:
    s0 = s = p.read_text(encoding='utf-8')
    # 1. vermelho secundário de antes → cinza (marcador para não colidir com o vermelho novo)
    s = re.sub(r'brand-red(?=[\w/-]*)', 'BRAND_SILVER', s)
    s = s.replace('--BRAND_SILVER', '--brand-silver')
    # 2. em cada string de classes com fundo verde SÓLIDO, o texto escuro vira branco
    def fix(m):
        t = m.group(0)
        if SOLID.search(t):
            t = re.sub(r'(?<![\w/-])((?:[a-z-]+:)*)text-(black|dark)(?![\w/-])', r'\1text-white', t)
        return t
    s = STR.sub(fix, s)
    # 3. fundo sólido e hover sólido → vermelho oficial; tintas → vermelho claro
    s = SOLID.sub(r'\1bg-brand-red-deep', s)
    s = re.sub(r'bg-brand-green/(80|90)\b', r'bg-brand-red-deep/\1', s)
    s = s.replace('shadow-brand-green-lg', 'shadow-brand-red-lg').replace('shadow-brand-green', 'shadow-brand-red')
    s = s.replace('brand-green', 'brand-red')
    s = s.replace('BRAND_SILVER', 'brand-silver')
    # 4. cores literais
    s = re.sub(r'141,\s*198,\s*63', '215, 34, 41', s)
    s = re.sub(r'240,\s*90,\s*96', '168, 169, 172', s)
    s = re.sub(r'#8DC63F', '#D72229', s, flags=re.I)
    if s != s0:
        p.write_text(s, encoding='utf-8'); total += 1
print('arquivos alterados:', total)
