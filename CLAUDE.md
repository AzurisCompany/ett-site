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

`novoConteudo/` é a **área de rascunho (staging) de conteúdo pros próximos posts do blog**. Conteúdo bruto (ideias, textos, links, materiais de parceiro, banners) é colocado aqui antes de virar página publicada. **Não é build artifact e não vira rota automaticamente** — é matéria-prima. Daqui o conteúdo é transformado em (a) indicação de parceiro → objeto em `webapp/lib/partner-posts.ts` (`/blog/indicacoes/<slug>/`), ou (b) post próprio → entrada em `webapp/lib/blog-posts.ts` + `webapp/app/blog/<slug>/page.tsx`. Imagens vão otimizadas (webp) pra `webapp/public/images/`. Ver `novoConteudo/README.md` pra convenção de nomes e destinos.

`webapp/public/divulgacao/<campanha>/` guarda os **e-mails de marketing em HTML** (RD Station). Cada campanha é uma pasta com `index.html` + imagens. Fica em `public/` de propósito: o export copia sem tocar, então a URL (`/divulgacao/<campanha>/`) serve **o HTML cru do e-mail**, sem o Next injetar layout, fontes ou scripts — o usuário abre, dá "ver código-fonte" e cola no RD. Convenções:

- Tabelas aninhadas, 600px, **CSS 100% inline**, `bgcolor` em todo `td` (Outlook desktop ignora `background-color` em `div`). Botão com padding no `td`, não no `<a>`.
- **Imagens em JPEG/PNG, nunca `.webp`** (vários clientes de e-mail não renderizam), com **URL absoluta** de produção — ou seja, a imagem só carrega depois do pull no Hostinger.
- **Nome de arquivo novo a cada versão da imagem.** O hosting serve imagem com `max-age` de 7 dias; reaproveitar o nome faz o RD puxar a versão velha.
- Original em alta resolução vai arquivado em `novoConteudo/<campanha>/`, não em `public/`.
- Comentário no topo do HTML com o passo a passo pro RD e sugestões de assunto. O bloco de descadastro é inserido pela própria RD — não duplicar.

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
- **⚠️ Arquivo solto num diretório da raiz é APAGADO pelo deploy.** Como cada diretório top-level é recriado do zero a partir de `webapp/out/`, qualquer coisa colocada à mão em `images/`, `divulgacao/`, `agenda/` etc. **na raiz** some no `./deploy.sh` seguinte. Já aconteceu (2026-07-26, banner de e-mail perdido). Asset novo vai **sempre** em `webapp/public/<caminho>/`. O usuário acessa o repo pelo Windows via `C:\WSL\home\` → `/home/binhara/` e costuma soltar arquivo na raiz: **antes de deployar, olhar o `git status` atrás de arquivo untracked na raiz e mover primeiro** (e apagar o `<nome>:Zone.Identifier` que vem junto). Ao mover, **dizer explicitamente pra onde** — senão ele confere a pasta, vê vazia e recopia.
- **Não checa branch.** Por convenção, deploy roda em `main`. Confira `git rev-parse --abbrev-ref HEAD` antes.
- **Não roda `npm install` automaticamente.** Se mudou `package.json` ou é o primeiro deploy na máquina, rode `cd webapp && npm install` antes.
- **Não dispara o pull no hosting.** Esse passo é manual; depois de ver o push concluído, abra o painel.

## Architecture Notes

- **Next.js App Router** com `output: 'export'` (`webapp/next.config.mjs`) — site totalmente estático. Sem API routes, sem server actions, sem ISR. `images.unoptimized: true` é obrigatório para o export.
- `trailingSlash: true` — todas as rotas terminam em `/` (necessário para servir `pasta/index.html` no hosting).
- **Rotas atuais:** `/` (home), `/detalhes/` (programa completo), `/agenda/`, `/ff/` (Fórmula Fluente), `/conversacao/`, `/curitiba/`, `/online/`, `/imersoes/` (+ `/curitiba/`, `/belo-horizonte/`, `/florida/`), `/blog/` (+ posts e `/blog/indicacoes/<slug>/`), `/politica-privacidade/`, `/termos-uso/`, `/en/` e `/es/` (landings i18n com subrotas próprias). Cada rota é um `app/<rota>/page.tsx` que monta `Navbar` + componentes de seção + `Footer`.
- **Home (`webapp/app/page.tsx`)** — 8 seções, nesta ordem: `HeroSimples`, `ProximosEncontros`, `ComoE`, `FerramentasResumo`, `ParceirosFaixa`, `Precos`, `FAQ` (curta), `LeadForm`, + ponte pra `/detalhes/`. Adicionar seção = criar componente e importar em `page.tsx`.
- **`/detalhes/` (`webapp/app/detalhes/page.tsx`)** guarda a **versão longa do programa** — a home anterior a 2026-07-26 (About, Methodology, Tools, PlayerShowcase, Partners, ImersoesTeaser, HowItWorks, Results, FAQ longa). `components/detalhes/HeroDetalhes.tsx` é um snapshot congelado do Hero antigo, pra essa página não mudar quando a home evoluir. **Ao mexer na home, não editar os componentes que só `/detalhes/` usa** — e vice-versa.
- **Posicionamento da home (regras de copy).** A home foi reescrita porque o público a lia como **infoproduto**. Regras a respeitar: fato verificável no lugar de promessa; **nada de promessa financeira ou de resultado em prazo**; o produto é o **encontro de segunda**, não a transformação de carreira; evitar vocabulário de lançamento ("ecossistema de aceleração", "jornada do aluno", "N passos do iniciante ao global", "vagas limitadas"); métricas grandes (300h, 3.000 palavras, %) e gamificação vivem só em `/detalhes/`. A seção "O que o ETT **não** é" (`ComoE.tsx`) é o antídoto explícito — manter. **Não usar depoimentos fictícios** (os antigos eram e foram deletados; as homes `/en/` e `/es/` ainda têm os seus, hardcoded).
- **`ProximosEncontros.tsx` calcula as próximas segundas no navegador** (`useEffect`), não no build. O site é export estático e o build pode ficar semanas sem rodar — data calculada no build apareceria vencida pro visitante. Renderiza skeleton antes do cálculo pra não quebrar hidratação. Mesma lógica vale pra qualquer data recorrente que venha a aparecer no site.
- **Preços (`components/Precos.tsx`, seção `#precos`)** — 3 trilhas: **Aceleração** (R$ 0, exige presença + 1h/dia), **Dedicação** (R$ 0, só presença, ferramentas em beta enquanto em beta) e **Livre** (plano mensal, **valor em definição**). Os encontros são gratuitos nas três. Nenhum valor é publicado de propósito: o formulário coleta faixa de preço pra precificar com dado real. Editar = mexer no array `trilhas` no topo do arquivo.
- **Styling:** Tailwind CSS com tema dark custom (neon green `#00FF9D`, tech blue `#00BFFF`) em `webapp/app/globals.css` e `webapp/tailwind.config.ts`. Helper `cn()` em `webapp/lib/utils.ts` (`clsx` + `tailwind-merge`).
- **Animações:** `framer-motion`. Ícones: `lucide-react`.
- **LeadForm** (`webapp/components/LeadForm.tsx`) faz `POST` direto pra **RD Station Marketing API v1.3** (`https://www.rdstation.com.br/api/1.3/conversions`) — endpoint público com CORS aberto. Token público (`token_rdstation`) e identificador da conversão (`tenhointeresseprogramaaceleracaoingles`) hardcoded no componente; o token só identifica a conta GUBigData, não autoriza leitura/escrita do CRM. Campos enviados: `nome`/`email` (**os únicos obrigatórios**), `empresa`/`telefone`/`linkedin`/`cf_nivel_ingles` (opcionais) e mais dois de pesquisa — `cf_trilha_ett` (qual trilha a pessoa quer) e `cf_faixa_plano_mensal` (faixa de preço que faria sentido). ⚠️ **Esses dois `cf_` precisam existir na conta RD** ou as respostas se perdem. Só nome e e-mail são obrigatórios de propósito: 6 campos obrigatórios num grupo gratuito sinalizavam "captura pra vendas". Validação via HTML5 nativa (`required`, `pattern`, `type=email/tel`) + normalização de URL do LinkedIn no JS. Honeypot `website` oculto descarta bots. **Sem react-hook-form, sem zod, sem backend nosso.** Se aparecer spam: a primeira escalada é captcha matemático client-side (~20 linhas); a segunda é função serverless com rate-limit.
- **Path alias:** `@/*` mapeia para a raiz de `webapp/` (`webapp/tsconfig.json`).

## Indicações de Parceiros (Blog) — fluxo semanal

O blog divulga artigos do parceiro **Aprendendo Inglês** (`aprendendoingles.com.br`). Cada indicação é UMA página em `/blog/indicacoes/<slug>/` com um **resumo original nosso** + link pro artigo completo no site do parceiro. **Nunca copiar o texto integral do parceiro** — o `summary` é curadoria/resenha do ETT (conteúdo original); o leitor termina a leitura no site dele.

Arquitetura (data-driven, 1 página por artigo):

- **`webapp/lib/partner-posts.ts`** — array `partnerPosts: PartnerPost[]`. Adicionar indicação = adicionar 1 objeto. **Não** se cria `page.tsx` por post.
- **`webapp/app/blog/indicacoes/[slug]/page.tsx`** — rota dinâmica com `generateStaticParams` que renderiza todos os objetos.
- A listagem (`app/blog/page.tsx`) e o `sitemap.ts` já mesclam `partnerPosts` automaticamente (selo azul "Indicação" + nome do parceiro).
- **`webapp/scripts/partner-feed.mjs`** — detector de RSS (`npm run partner:feed` ou `partner:feed:json`). Lê o feed do parceiro, deduplica contra `partner-posts.ts` (por `partnerUrl` limpa) e lista os artigos ainda não publicados, do mais novo pro mais antigo. É só detector — não escreve nada.

**Procedimento do agente semanal (Nível 4 de automação):**

1. `cd webapp && npm run partner:feed` para ver os novos artigos.
2. Pegar **o mais recente** ainda não publicado. Pular itens que não sejam artigo de dica (ex.: `Vídeo |`, `Easy English Song |`, `Story |` — preferir categoria "Dicas práticas" / "Estratégias de Aprendizado"). Publicar no máximo 1 por execução.
3. Ler o artigo completo no link, escrever um **resumo ORIGINAL em pt-BR** (2-4 parágrafos no campo `summary`) + um parágrafo `whyRead` com o ângulo do ETT. Adicionar o objeto no início do array em `partner-posts.ts` (slug curto e descritivo; `date` = data de hoje; `partnerDate` = data original do feed).
4. `npm run build` para validar. Depois `./deploy.sh "feat(blog): indicação <título curto>"` a partir da raiz.
5. **Lembrar o usuário** que a produção só atualiza após o pull manual no painel do hosting (ver acima).

Esse fluxo é disparado por uma rotina agendada (`/schedule`, semanal). Ver `CONTEXTO-SESSAO-SEO-2026-05-22.md` e o histórico de commits para contexto.

## SEO / Metadata

URLs canônicas, Open Graph e JSON-LD usam `https://englishtalktime.com.br`. Se algum dia o domínio mudar, atualize:

- `webapp/app/layout.tsx` (`metadataBase`, `openGraph.url`, `jsonLd.url`)
- `webapp/app/ff/page.tsx` (`openGraph.url`)
- `webapp/app/agenda/page.tsx` (`openGraph.url`)
- `webapp/app/blog/indicacoes/[slug]/page.tsx` (`SITE_URL`)

## Project Context (`webapp/ConteudoSite/`)

ETT é um programa brasileiro de aceleração de inglês para profissionais de tech (Data, AI, BI, Cloud). Toda copy do site é em **pt-BR**. O programa tem 6 pilares (Comunidade, Base estruturada via BeeTools, English Talk Time conversacional, Imersão Cherry Top, Mentoria de carreira Coders, Personalização com IA) e ~10 ferramentas planejadas. Parceiros: **BeeTools**, **Cherry Top**, **Coders**, **IEP**. Specs principais em `ConteudoSite/ProjetoGeralETT.docx` e PDFs relacionados.
