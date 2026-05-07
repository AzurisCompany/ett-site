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
echo "==> [2/4] Espelhando export estatico para a raiz..."

# 2a) Remove .html/.txt orfaos na raiz que nao existem mais no export
shopt -s nullglob
for f in "$ROOT"/*.html "$ROOT"/*.txt; do
  bn=$(basename "$f")
  if [[ ! -f "$OUT/$bn" ]]; then
    rm -f "$f"
    echo "    (rm orfao) $bn"
  fi
done
shopt -u nullglob

# 2b) Espelha cada entrada top-level de webapp/out/ na raiz
#     Diretorios sao recriados do zero (rm -rf + cp -r);
#     arquivos sao sobrescritos.
shopt -s nullglob
for entry in "$OUT"/*; do
  bn=$(basename "$entry")
  if [[ -d "$entry" ]]; then
    rm -rf "$ROOT/$bn"
    cp -r "$entry" "$ROOT/$bn"
  else
    cp "$entry" "$ROOT/"
  fi
done
shopt -u nullglob

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
