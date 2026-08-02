# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Production URL

**https://englishtalktime.com.br**

O domínio NÃO está no GitHub Pages. Está em um **hosting externo** que aponta para os arquivos estáticos do repositório (raiz do `main`). Por isso:

- Não existe arquivo `CNAME` no repo (não é necessário).
- **O Hostinger está com Auto Deployment ligado (confirmado em 02/08/2026): o push já publica.** O painel mostra "Conectado com GitHub" e a implantação dispara sozinha, levando ~9s. Medido: push às 14:12 UTC, produção com `last-modified` de 14:14 UTC sem ninguém tocar no painel. **Até 02/08 este arquivo dizia que o pull era manual** — era verdade antes; a conexão com o GitHub foi feita em algum momento entre 01/08 e 02/08.
- Ainda assim, **confira** depois de deployar: `curl -sI https://englishtalktime.com.br/ | grep -i last-modified` mais ou menos 2 minutos após o push. Se não tiver mudado, aí sim abrir `hpanel.hostinger.com` e clicar em **Reimplantar** (o botão continua existindo). Diretório raiz do site no painel: `public_html`, branch `main`.

## Repository Layout

Repo serve o site **ETT (English Talk Time)** via duas árvores acopladas:

- **`webapp/`** — Projeto Next.js 14 (fonte). **Toda edição de site acontece aqui.**
- **Raiz do repo (`index.html`, `404.html`, `_next/`, `images/`, `agenda/`, `ff/`, etc.)** — Cópia de `webapp/out/` versionada para o hosting servir os HTMLs estáticos. Trate esses arquivos como **build artifacts**, não como fonte. Não edite à mão.

`formulafluente/` e `webapp/ConteudoSite/` guardam documentos de planejamento da marca/programa em português + logos de parceiros — referência, não rota do site.

`novoConteudo/` é a **área de rascunho (staging) de conteúdo pros próximos posts do blog**. Conteúdo bruto (ideias, textos, links, materiais de parceiro, banners) é colocado aqui antes de virar página publicada. **Não é build artifact e não vira rota automaticamente** — é matéria-prima. Daqui o conteúdo é transformado em (a) indicação de parceiro → objeto em `webapp/lib/partner-posts.ts` (`/blog/indicacoes/<slug>/`), ou (b) post próprio → entrada em `webapp/lib/blog-posts.ts` + `webapp/app/blog/<slug>/page.tsx`. Imagens vão otimizadas (webp) pra `webapp/public/images/`. Ver `novoConteudo/README.md` pra convenção de nomes e destinos.

`webapp/public/divulgacao/` é a **Central de Divulgação**: `index.html` é o hub e cada subpasta é um **kit** (`/divulgacao/<slug>/`) com `index.html` (a página compartilhável, `noindex`), `email.html` (o HTML cru pro RD Station), `textos.md` (5 blocos: LinkedIn, Instagram, WhatsApp, X, repost) e `assets/` (5 artes canônicas: banner 1920×1080 + webp, og 1200×630, feed 1080×1080, feed 1080×1350, story 1080×1920). Fica em `public/` de propósito: o export copia sem tocar, então a URL serve HTML cru — pro e-mail, o usuário abre `.../email.html`, dá "ver código-fonte" e cola no RD.

- **Processo completo em `novoConteudo/PROCESSO-DIVULGACAO-ETT.md`** (adaptado do `PLAYBOOK-KIT-DIVULGACAO-PORTAVEL.md`, sistema que já roda no DSSBR). Template em `novoConteudo/_template-kit/`. Geradores de arte em `webapp/scripts/kits/` (composição por proporção, PIL) e `webapp/scripts/gerar-imagens.py` (baseline letterbox); Inter versionada em `webapp/scripts/fonts/` porque não está instalada no sistema.
- **Kit é sempre `noindex, nofollow`** e fica fora do sitemap (que só lista rotas do app). Link colado no LinkedIn/WhatsApp pra gerar prévia é o do **site**, não o do kit.
- `convitesegunda20h` é slug **legado** (nasceu como pasta só de e-mail) e não pode ser renomeado: e-mails já disparados apontam pra `EmailTopNovo.jpg` dentro dela.

Convenções do e-mail:

- Tabelas aninhadas, 600px, **CSS 100% inline**, `bgcolor` em todo `td` (Outlook desktop ignora `background-color` em `div`). Botão com padding no `td`, não no `<a>`.
- **Imagens em JPEG/PNG, nunca `.webp`** (vários clientes de e-mail não renderizam), com **URL absoluta** de produção — ou seja, a imagem só carrega depois que o deploy publicou.
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
npx tsc --noEmit   # typecheck
```

Não há suíte de testes. **`npm run lint` não funciona** — não existe config de ESLint no repo e o
comando abre um wizard interativo. A validação real é `npx tsc --noEmit` + `npm run build`.

**Conferir mudança visual:** componentes usam `framer-motion` com `whileInView`, que começa em
`opacity: 0` e só dispara com scroll real — screenshot headless sai preto. O que funciona é
extrair a seção do HTML gerado pra um arquivo temporário com o CSS do build e a regra
`[style*="opacity:0"]{opacity:1!important}`. ⚠️ **Esse arquivo temporário não pode ficar em
`webapp/out/`** (é espelhado pra raiz no deploy) — apagar antes. Três detalhes que custaram
tentativa (01/08): `--virtual-time-budget` **não** resolve (a captura sai com a animação pela
metade); **não** juntar `transform:none` ao override (zera o `scale-110` do fundo e desloca o
layout inteiro); e janela alta **não** captura a página toda — o hero é `min-h-[92vh]`, então uma
janela de 5200px estica o hero pra ~4800px e o resto some do enquadramento.

**Apagou uma rota?** O `npx tsc --noEmit` vai falhar com `TS2307: Cannot find module .../page.js`
apontando pra `.next/types/` — é tipo gerado obsoleto, não erro real. Rodar `npm run build` antes
(que regenera) e só então o typecheck.

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

O script **não** tem passo 4: desde que o Auto Deployment do Hostinger está ligado (02/08/2026), o push publica sozinho em ~2 minutos. Confira com `curl -sI https://englishtalktime.com.br/ | grep -i last-modified` — e só recorra ao botão "Reimplantar" no hpanel se o horário não tiver mudado.

⚠️ **O commit é o que sobe.** Como o hosting puxa do `main`, qualquer coisa comitada pelo `git add -A` vai pro ar — não existe mais a janela entre o push e o pull manual que antes servia de rede de proteção.

### Limitações conhecidas do `deploy.sh`

Atalhos a evitar / pontos a observar:

- **Só remove órfãos `.html`/`.txt`, não diretórios.** Se uma rota for renomeada (ex.: `/ff/` → `/formula-fluente/`), o diretório antigo (`ff/`) **fica para sempre** na raiz e continua acessível na produção. Quando renomear/remover rota, apague manualmente o diretório antigo antes do `./deploy.sh` e revise o `git status` antes do commit.
- **`git add -A` comita tudo da working tree.** Não rode o deploy com mudanças não relacionadas pendentes — elas vão junto pro commit.
- **⚠️ Arquivo solto num diretório da raiz é APAGADO pelo deploy.** Como cada diretório top-level é recriado do zero a partir de `webapp/out/`, qualquer coisa colocada à mão em `images/`, `divulgacao/`, `agenda/` etc. **na raiz** some no `./deploy.sh` seguinte. Já aconteceu (2026-07-26, banner de e-mail perdido). Asset novo vai **sempre** em `webapp/public/<caminho>/`. O usuário acessa o repo pelo Windows via `C:\WSL\home\` → `/home/binhara/` e costuma soltar arquivo na raiz: **antes de deployar, olhar o `git status` atrás de arquivo untracked na raiz e mover primeiro** (e apagar o `<nome>:Zone.Identifier` que vem junto). Ao mover, **dizer explicitamente pra onde** — senão ele confere a pasta, vê vazia e recopia.
- **Não checa branch.** Por convenção, deploy roda em `main`. Confira `git rev-parse --abbrev-ref HEAD` antes.
- **Não roda `npm install` automaticamente.** Se mudou `package.json` ou é o primeiro deploy na máquina, rode `cd webapp && npm install` antes.
- **Não espera nem confere a publicação.** O Auto Deployment do Hostinger cuida do pull, mas o script termina no push: quem quiser certeza confere o `last-modified` da produção ~2 min depois.

## Architecture Notes

- **Next.js App Router** com `output: 'export'` (`webapp/next.config.mjs`) — site totalmente estático. Sem API routes, sem server actions, sem ISR. `images.unoptimized: true` é obrigatório para o export.
- `trailingSlash: true` — todas as rotas terminam em `/` (necessário para servir `pasta/index.html` no hosting).
- **Rotas atuais:** `/` (home), `/detalhes/` (programa completo), `/agenda/`, `/planos/conhecer|adesao|dedicacao|aceleracao/` (**não existe índice em `/planos/`** nem `/planos/checkout/` — a comparação foi removida em 01/08 e vive na seção `#precos` da home; o checkout é externo), `/ff/` (Fórmula Fluente), `/conversacao/`, `/curitiba/`, `/online/`, `/imersoes/` (+ `/curitiba/`, `/belo-horizonte/`, `/florida/`), `/blog/` (+ posts e `/blog/indicacoes/<slug>/`), `/politica-privacidade/`, `/termos-uso/`, `/en/` e `/es/` (landings i18n com subrotas próprias). Cada rota é um `app/<rota>/page.tsx` que monta `Navbar` + componentes de seção + `Footer`.
- **Home (`webapp/app/page.tsx`)** — 8 seções, nesta ordem: `HeroSimples`, `ProximosEncontros`, `ComoE`, `FerramentasResumo`, `ParceirosFaixa`, `Precos`, `FAQ` (curta), `LeadForm`, + ponte pra `/detalhes/`. Adicionar seção = criar componente e importar em `page.tsx`.
- **`/detalhes/` (`webapp/app/detalhes/page.tsx`)** guarda a **versão longa do programa** — a home anterior a 2026-07-26 (About, Methodology, Tools, PlayerShowcase, Partners, ImersoesTeaser, HowItWorks, Results, FAQ longa). `components/detalhes/HeroDetalhes.tsx` é um snapshot congelado do Hero antigo, pra essa página não mudar quando a home evoluir. **Ao mexer na home, não editar os componentes que só `/detalhes/` usa** — e vice-versa.
- **⚠️ Revisão de marketing em aberto — ler `PLANO-REVISAO-MARKETING-2026-08-01.md` antes de mexer em copy.** O site foi escrito quando tudo era gratuito e os planos foram publicados por cima em 31/07, então sobraram contradições ("não tem mensalidade" no hero, "preço ainda em definição" na FAQ, formulário prometendo as ferramentas de graça). O plano lista cada uma com arquivo e correção, e registra **4 decisões já tomadas** pelo Alessandro: (1) o lead do formulário recebe **só link do encontro + agenda**, ferramenta só via Conhecer/adesão; (2) o único presencial é o **IEP Talks, sábados 10h** — UTFPR/Hard Rock/Habitat saem da copy; (3) o **ETT Player continua público** (tem portão de e-mail na entrada), mas entra na home como CTA **secundário** — o primário é o teste de 30 dias; (4) os **4 cartões de plano continuam** na home.
- **Posicionamento da home (regras de copy).** A home foi reescrita porque o público a lia como **infoproduto**. Regras a respeitar: fato verificável no lugar de promessa; **nada de promessa financeira ou de resultado em prazo**; o produto é o **encontro de segunda**, não a transformação de carreira; evitar vocabulário de lançamento ("ecossistema de aceleração", "jornada do aluno", "N passos do iniciante ao global", "vagas limitadas"); métricas grandes (300h, 3.000 palavras, %) e gamificação vivem só em `/detalhes/`. A seção "O que o ETT **não** é" (`ComoE.tsx`) é o antídoto explícito — manter. **Não usar depoimentos fictícios** (os antigos eram e foram deletados; as homes `/en/` e `/es/` ainda têm os seus, hardcoded).
- **`/agenda/` também é calculada no navegador.** `webapp/lib/agenda-events.ts` exporta `agendaEvents` (eventos datados, escritos à mão) + **dois geradores recorrentes** — `encontrosOnlineRecorrentes()` (segundas, 20h–21h30, online) e `encontrosPresenciaisRecorrentes()` (**IEP Talks**: sábados, 10h–12h, no IEP — Instituto de Engenharia do Paraná, Curitiba) — + `eventosFuturos(semanas)`, que mescla tudo e descarta o que já passou; `Agenda.tsx` chama isso em `useEffect` e mostra skeleton antes. Foi assim que se resolveu a agenda congelada em "11 de maio a 4 de junho" (27/07/2026) — **não voltar a renderizar `agendaEvents` direto nem escrever o período do título à mão, e encontro semanal vira gerador, não lista.** Um evento datado tem **precedência** sobre o recorrente do mesmo dia e tipo: é assim que se cancela ou substitui uma ocorrência. Evento pode ter `links: [{url,label}]` (sala, grupo) e `partner` (selo do parceiro).
- **`ProximosEncontros.tsx` calcula as próximas segundas no navegador** (`useEffect`), não no build. O site é export estático e o build pode ficar semanas sem rodar — data calculada no build apareceria vencida pro visitante. Renderiza skeleton antes do cálculo pra não quebrar hidratação. Mesma lógica vale pra qualquer data recorrente que venha a aparecer no site.
- **Modelo de cobrança — `webapp/lib/planos.ts` é a fonte única.** Preços, as 2 portas de entrada, as 2 trilhas, os cartões da home, o detalhe de cada plano, os prêmios e o FAQ de cobrança vivem **só** nesse arquivo; `components/Precos.tsx` (home, `#precos`) e `components/PlanoDetalhe.tsx` (páginas de plano) leem dele. **Não escrever preço à mão em componente.** Escada publicada: **Conhecer** (R$ 0, 30 dias, sem cartão) → **Adesão** (R$ 67, cobrança única, PIX ou cartão em até 3x, inclui 2×1h de mentoria individual, material didático e os 30 primeiros dias) → **Trilha de Dedicação** (R$ 37/mês ou R$ 370/ano) ou **Trilha de Aceleração** (R$ 0, revalidada por 20 dias válidos/mês). Regras de copy que não podem ser quebradas: **nunca publicar "R$ 0" sozinho** (sempre com âncora `~~R$ 37/mês~~` + o custo em outra moeda, "custa 1h da sua dedicação por dia"); o **encontro online de segunda continua aberto a qualquer pessoa, sem cadastro e sem pagar**; nada de preço simbólico (R$ 1/R$ 15 foram analisados e descartados — cheiro de infoproduto). Especificação completa (economia, prêmios, migração, perguntas em aberto) em **`novoConteudo/MODELO-COBRANCA-ETT.md`**.
- **Checkout ligado (01/08/2026).** Gateway próprio, fora deste repo. As duas constantes ficam no topo de `lib/planos.ts`: `CHECKOUT_ADESAO` = `https://azuris.com.br/ett/adesao` (cobrança única, PIX ou cartão em até 3x) e `CHECKOUT_DEDICACAO` = `https://azuris.com.br/ett/assinatura` (recorrente, mensal ou anual). As prévias internas em `app/planos/checkout/` **foram apagadas — não recriar**. Se o gateway cair, o certo é tirar o botão do ar, não simular checkout. Nunca criar checkout falso que peça cartão: o site está no ar e recebe tráfego real.
- **Styling:** Tailwind CSS com tema dark custom (neon green `#00FF9D`, tech blue `#00BFFF`) em `webapp/app/globals.css` e `webapp/tailwind.config.ts`. Helper `cn()` em `webapp/lib/utils.ts` (`clsx` + `tailwind-merge`).
- **Animações:** `framer-motion`. Ícones: `lucide-react`.
- **LeadForm** (`webapp/components/LeadForm.tsx`) faz `POST` direto pra **RD Station Marketing API v1.3** (`https://www.rdstation.com.br/api/1.3/conversions`) — endpoint público com CORS aberto. Token público (`token_rdstation`) e identificador da conversão (`tenhointeresseprogramaaceleracaoingles`) hardcoded no componente; o token só identifica a conta GUBigData, não autoriza leitura/escrita do CRM. **4 campos:** `name` e `email` (obrigatórios), `company` e `personal_phone` (opcionais) — nomes padrão da RD, iguais aos da LP de origem. Validação via HTML5 nativa (`required`, `pattern`, `type=email/tel`). Honeypot `website` oculto descarta bots. **Sem react-hook-form, sem zod, sem backend nosso.** Formulário curto é decisão de posicionamento: campo demais num programa aberto lê-se como captura pra vendas — os selects de trilha e de nível, o LinkedIn e a pesquisa de faixa de preço foram removidos em 31/07. Se aparecer spam: a primeira escalada é captcha matemático client-side (~20 linhas); a segunda é função serverless com rate-limit.
- **⚠️ Três armadilhas da API v1.3 da RD** (todas custaram lead corrompido, ver `CONTEXTO-SESSAO-2026-07-31.md`):
  1. **Enviar `application/x-www-form-urlencoded`, nunca `FormData`/multipart.** A RD não parseia multipart direito e o *boundary* vaza pro valor do último campo (`Telefone: ------XjqDhzJoDj3k0avrjDkS5I--`). Montar o corpo com `URLSearchParams`.
  2. **O campo é `identificador`, não `conversion_identifier`.** A LP da RD usa o segundo, mas ela posta em outro endpoint — na v1.3 ele é ignorado e a conversão chega como "Identificador: Indefinido".
  3. **`HTTP 200` não significa que o lead chegou certo.** A API responde `{"result":"success"}` mesmo ignorando campo desconhecido. Ao mexer no formulário, disparar um lead marcado (`TESTE ... - IGNORAR`) e **conferir o lead dentro da conta RD**, não só o status.
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
5. **Conferir a publicação** — o Auto Deployment publica sozinho em ~2 min; validar com `curl -sI` (ver "## Deploy").

Esse fluxo é disparado por uma rotina agendada (`/schedule`, semanal). Ver `CONTEXTO-SESSAO-SEO-2026-05-22.md` e o histórico de commits para contexto.

## SEO / Metadata

URLs canônicas, Open Graph e JSON-LD usam `https://englishtalktime.com.br`. Se algum dia o domínio mudar, atualize:

- `webapp/app/layout.tsx` (`metadataBase`, `openGraph.url`, `jsonLd.url`)
- `webapp/app/ff/page.tsx` (`openGraph.url`)
- `webapp/app/agenda/page.tsx` (`openGraph.url`)
- `webapp/app/blog/indicacoes/[slug]/page.tsx` (`SITE_URL`)

## Project Context (`webapp/ConteudoSite/`)

ETT é um programa brasileiro de aceleração de inglês para profissionais de tech (Data, AI, BI, Cloud). Toda copy do site é em **pt-BR**. O programa tem 6 pilares (Comunidade, Base estruturada via BeeTools, English Talk Time conversacional, Imersão Cherry Top, Mentoria de carreira Coders, Personalização com IA) e ~10 ferramentas planejadas. Parceiros: **BeeTools**, **Cherry Top**, **Coders**, **IEP**. Specs principais em `ConteudoSite/ProjetoGeralETT.docx` e PDFs relacionados.
