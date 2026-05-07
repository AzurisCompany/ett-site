#!/usr/bin/env bash
#
# Deploy do ETT-site:
#   1. Build do Next.js     (webapp/ -> webapp/out/)
#   2. Copia o export       (webapp/out/* -> raiz, p/ GitHub Pages)
#   3. git add + commit + push
#
# Uso:
#   ./deploy.sh                            # mensagem automática com timestamp
#   ./deploy.sh "fix: ajuste CTA do ebook" # mensagem custom
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

if [[ ! -d webapp ]] || [[ ! -d .git ]]; then
  echo "Erro: rode da raiz do repo (precisa de webapp/ e .git/)." >&2
  exit 1
fi

# -------------------------------------------------------------------
# 1. BUILD
# -------------------------------------------------------------------
echo "==> [1/4] Build do Next.js..."
( cd webapp && npm run build )

OUT="$ROOT/webapp/out"
if [[ ! -d "$OUT" ]]; then
  echo "Erro: webapp/out/ nao existe - build falhou?" >&2
  exit 1
fi

# -------------------------------------------------------------------
# 2. COPIA P/ RAIZ (GitHub Pages serve daqui)
# -------------------------------------------------------------------
echo "==> [2/4] Copiando export estatico para a raiz..."

# _next/ regenera com hashes a cada build, entao recriamos do zero
rm -rf "$ROOT/_next"
cp -r "$OUT/_next" "$ROOT/_next"

# .html / .txt que o Next gera no nivel raiz do export
shopt -s nullglob
for f in "$OUT"/*.html "$OUT"/*.txt; do
  cp "$f" "$ROOT/"
done
shopt -u nullglob

# images/ - merge (mantem possiveis arquivos extras que existam na raiz)
if [[ -d "$OUT/images" ]]; then
  mkdir -p "$ROOT/images"
  cp -r "$OUT/images/." "$ROOT/images/"
fi

# -------------------------------------------------------------------
# 3. STAGE + COMMIT
# -------------------------------------------------------------------
echo "==> [3/4] Mudancas:"
git status --short

git add -A

if git diff --cached --quiet; then
  echo "    Nada a comitar. Encerrando."
  exit 0
fi

COMMIT_MSG="${1:-Deploy: rebuild static site $(date -u +'%Y-%m-%d %H:%M UTC')}"
git commit -m "$COMMIT_MSG"

# -------------------------------------------------------------------
# 4. PUSH
# -------------------------------------------------------------------
echo "==> [4/4] Push..."
git push

SHA=$(git rev-parse --short HEAD)
BR=$(git rev-parse --abbrev-ref HEAD)
echo
echo "==> Done. ${SHA} -> ${BR}"
