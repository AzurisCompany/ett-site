# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Production URL

**https://englishtalktime.com.br**

O domínio NÃO está no GitHub Pages. Está em um **hosting externo** que aponta para os arquivos estáticos do repositório (raiz do `main`). Por isso:

- Não existe arquivo `CNAME` no repo (não é necessário).
- A publicação acontece em duas etapas: (1) `git push` deste repo, (2) **alguém precisa entrar no painel do hosting e disparar o pull/deploy manualmente**. Sem o passo 2 a produção não atualiza.

## Repository Layout

Repo serve o site **ETT (English Talk Time)** via duas árvores acopladas:

- **`webapp/`** — Projeto Next.js 14 (fonte). **Toda edição de site acontece aqui.**
- **Raiz do repo (`index.html`, `404.html`, `_next/`, `images/`, `agenda/`, `ff/`, etc.)** — Cópia de `webapp/out/` versionada para o hosting servir os HTMLs estáticos. Trate esses arquivos como **build artifacts**, não como fonte. Não edite à mão.

`formulafluente/` e `webapp/ConteudoSite/` guardam documentos de planejamento da marca/programa em português + logos de parceiros — referência, não rota do site.

## Common Commands

Tudo a partir de `webapp/`:

```bash
cd webapp
npm install        # primeira vez / após mudança em dependências
npm run dev        # http://localhost:3000
npm run build      # export estático → webapp/out/
npm run lint       # next lint (eslint-config-next)
```

Não há suíte de testes.

## Deploy

Use o script da raiz — **não** publique manualmente:

```bash
./deploy.sh                            # commit com timestamp automático
./deploy.sh "fix: ajuste CTA do ebook" # mensagem custom
```

O que ele faz, em ordem:

1. `cd webapp && npm run build` — exporta para `webapp/out/`.
2. **Espelha** `webapp/out/*` na raiz do repo:
   - Diretórios (`_next/`, `agenda/`, `ff/`, `images/`, `404/`) são recriados do zero (`rm -rf` + `cp -r`).
   - Arquivos top-level (`index.html`, `404.html`, `index.txt`) são sobrescritos.
   - Remove órfãos `.html`/`.txt` da raiz que não existem mais em `webapp/out/`.
3. `git add -A` + `git commit` + `git push` para `origin/main`.
4. **(Manual)** Entrar no painel do hosting e disparar o pull/deploy. Só depois desse passo a produção em `englishtalktime.com.br` atualiza.

### Limitações conhecidas do `deploy.sh`

Atalhos a evitar / pontos a observar:

- **Só remove órfãos `.html`/`.txt`, não diretórios.** Se uma rota for renomeada (ex.: `/ff/` → `/formula-fluente/`), o diretório antigo (`ff/`) **fica para sempre** na raiz e continua acessível na produção. Quando renomear/remover rota, apague manualmente o diretório antigo antes do `./deploy.sh` e revise o `git status` antes do commit.
- **`git add -A` comita tudo da working tree.** Não rode o deploy com mudanças não relacionadas pendentes — elas vão junto pro commit.
- **Não checa branch.** Por convenção, deploy roda em `main`. Confira `git rev-parse --abbrev-ref HEAD` antes.
- **Não roda `npm install` automaticamente.** Se mudou `package.json` ou é o primeiro deploy na máquina, rode `cd webapp && npm install` antes.
- **Não dispara o pull no hosting.** Esse passo é manual; depois de ver o push concluído, abra o painel.

## Architecture Notes

- **Next.js App Router** com `output: 'export'` (`webapp/next.config.mjs`) — site totalmente estático. Sem API routes, sem server actions, sem ISR. `images.unoptimized: true` é obrigatório para o export.
- `trailingSlash: true` — todas as rotas terminam em `/` (necessário para servir `pasta/index.html` no hosting).
- **Rotas atuais:** `/` (home), `/ff/` (Fórmula Fluente), `/agenda/` (próximos encontros). Cada rota é um `app/<rota>/page.tsx` que monta `Navbar` + componente principal + `Footer`.
- **Home (`webapp/app/page.tsx`)** compõe uma seção por componente em `webapp/components/` (Hero, About, Methodology, Tools, Partners, HowItWorks, Results, Testimonials, LeadForm, Footer). Adicionar seção = adicionar componente e importar em `page.tsx`.
- **Styling:** Tailwind CSS com tema dark custom (neon green `#00FF9D`, tech blue `#00BFFF`) em `webapp/app/globals.css` e `webapp/tailwind.config.ts`. Helper `cn()` em `webapp/lib/utils.ts` (`clsx` + `tailwind-merge`).
- **Animações:** `framer-motion`. Ícones: `lucide-react`.
- **LeadForm** (`webapp/components/LeadForm.tsx`) usa `react-hook-form` + `zod` e atualmente **simula** o envio com `setTimeout`. Como o build é export estático, integrar com backend real exige endpoint externo (Resend, Formspree, etc.) — ver `webapp/README.md`.
- **Path alias:** `@/*` mapeia para a raiz de `webapp/` (`webapp/tsconfig.json`).

## SEO / Metadata

URLs canônicas, Open Graph e JSON-LD usam `https://englishtalktime.com.br`. Se algum dia o domínio mudar, atualize:

- `webapp/app/layout.tsx` (`metadataBase`, `openGraph.url`, `jsonLd.url`)
- `webapp/app/ff/page.tsx` (`openGraph.url`)
- `webapp/app/agenda/page.tsx` (`openGraph.url`)

## Project Context (`webapp/ConteudoSite/`)

ETT é um programa brasileiro de aceleração de inglês para profissionais de tech (Data, AI, BI, Cloud). Toda copy do site é em **pt-BR**. O programa tem 6 pilares (Comunidade, Base estruturada via BeeTools, English Talk Time conversacional, Imersão Cherry Top, Mentoria de carreira Coders, Personalização com IA) e ~10 ferramentas planejadas. Parceiros: **BeeTools**, **Cherry Top**, **Coders**, **IEP**. Specs principais em `ConteudoSite/ProjetoGeralETT.docx` e PDFs relacionados.
