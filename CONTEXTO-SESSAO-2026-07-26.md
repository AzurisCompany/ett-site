# Contexto da sessão — 2026-07-26

Handoff da sessão de **2026-07-26**. Dois blocos de trabalho:

1. **E-mail de convite** para o encontro online de segunda (RD Station) → `/divulgacao/convitesegunda20h/`
2. **Reescrita da home** para deixar de parecer infoproduto + criação de `/detalhes/` + **cardápio de preços com 3 trilhas**

**Leia este arquivo primeiro** — é o mais novo. Anteriores: `CONTEXTO-SESSAO-2026-07-06.md`, `CONTEXTO-SESSAO-2026-06-06.md`, `CONTEXTO-SESSAO-2026-06-05.md`, `CONTEXTO-SESSAO-SEO-2026-05-22.md`.

---

## Estado final: TUDO COMMITADO E PUSHADO ✅ / pull no Hostinger pendente ⚠️

Commits desta sessão (todos em `origin/main`):

| SHA | O quê |
|---|---|
| `596b912` | E-mail HTML de convite (segunda 20h) em `/divulgacao/convitesegunda20h/` |
| `67feb5a` | Banner "ETT Meet Online" no topo do e-mail + destaque das 3 novas ferramentas |
| `7e1c2fa` | Troca do banner pela versão "Participe do nosso encontro online" |
| `2839a12` | **Home reescrita (8 seções), `/detalhes/` criada, cardápio de 3 trilhas** |

⚠️ Os três primeiros **já foram puxados** no Hostinger e conferidos no ar. O `2839a12` (home nova) **ainda não** — confirmar em `hpanel.hostinger.com`.

---

# Parte 1 — E-mail de convite (RD Station)

## O que é

`webapp/public/divulgacao/convitesegunda20h/index.html` — e-mail HTML pronto pra colar no RD Station, publicado como página estática em
**https://englishtalktime.com.br/divulgacao/convitesegunda20h/**

Ficou em `public/` **de propósito**: assim a URL serve o HTML cru do e-mail, sem o Next injetar layout/fontes/scripts. O usuário abre a página, dá "ver código-fonte" e cola no RD.

## Como o e-mail foi construído

Padrão de e-mail, não de site:

- Tabelas aninhadas, 600px, CSS 100% inline, `bgcolor` em todo `td` (Outlook desktop usa engine do Word e ignora `background-color` em `div`).
- Botões "bulletproof": padding no `td`, não no `<a>`. Bloco condicional MSO pro fallback de fonte.
- Preheader oculto, `color-scheme` declarado (evita inversão automática no dark mode do Apple Mail).
- Media query pra empilhar no mobile. Conferido em 700px e 390px.
- **Imagens em JPEG/PNG, nunca `.webp`** — vários clientes de e-mail não renderizam webp.

Conteúdo: banner → selo "Gratuito · Online · Toda segunda" → headline → CTA pra `https://ett-speak.vercel.app/` → "Como funciona" em 3 passos → ficha do encontro → link de Google Calendar com recorrência semanal → quebra de objeção ("meu inglês não é bom o suficiente") → bloco do ETT Player → rodapé.

No topo do arquivo há um comentário com **passo a passo pro RD Station** e **4 sugestões de assunto** pra teste A/B.

## Banner

- Publicado: `webapp/public/divulgacao/convitesegunda20h/EmailTopNovo.jpg` — 124 KB, 1200×675 real, exibido a 600×338.
- Originais em alta: `novoConteudo/EttMeetOnline-segunda20h/` (`EmailTopNovo.png` = atual, `EttTopSegunda20h.png` = versão anterior).
- **Nome de arquivo novo a cada versão do banner é regra**, não capricho: o hosting serve imagem com `max-age` de 7 dias, então reaproveitar o nome faz o RD Station puxar a imagem velha.

## Pendências do e-mail

- Inserir o **campo dinâmico de nome** onde está o "Oi!" (o token de merge varia por conta RD, por isso não está chumbado).
- Enviar teste pra si mesmo antes do disparo — principalmente Gmail e celular.

## ⚠️ Armadilha que custou tempo nesta sessão

O usuário colou o banner em `divulgacao/convitesegunda20h/` **na raiz do repo**. Essa pasta é **cópia de build**: o `deploy.sh` faz `rm -rf` em cada diretório top-level e recria a partir de `webapp/out/`. O arquivo foi apagado pelo deploy seguinte.

**Regra:** asset novo vai em `webapp/public/...`, nunca na raiz. Conferir `git status` antes de rodar `./deploy.sh` — se aparecer arquivo untracked na raiz, é asset do usuário: mover primeiro. E avisar explicitamente quando mover algo, senão ele vai olhar a pasta, achar vazia e recopiar.

---

# Parte 2 — Reposicionamento da home

## O problema relatado

Pessoas diziam que a home passava impressão de **infoproduto**, e não de um grupo de conversação online/presencial com ferramentas de apoio.

## Diagnóstico (14 sinais encontrados no código)

1. **Depoimentos fictícios** com resultado datado ("consegui o cargo em 45 dias"). Confirmado com o usuário que eram ilustrativos — a home EN até declarava isso, a PT não.
2. **"Salários até 5x maiores"** — em `Results.tsx` e `HowItWorks.tsx`.
3. **Painel de métricas com contador animado** (300h, 3.000, 60%, 95%, 10x, 5x) — estética de VSL.
4. **"Jackpot mensal"** com pontos, badges e ranking — mecânica de afiliado.
5. **"Vagas limitadas"** num evento gratuito — escassez artificial.
6. **"…e o lançamento do ebook"** no texto legal do formulário.
7. **6 campos obrigatórios** (empresa, telefone, LinkedIn) pra entrar num grupo grátis → lê-se "captura pra vendas".
8. **"+365 mil alunos" / Fórmula Fluente** no topo → associa a método de guru.
9. **Vocabulário de lançamento**: "ecossistema de aceleração", "jornada do aluno", "7 passos do iniciante ao global".
10. **O produto real enterrado**: "toda segunda 20h" só como texto miúdo, sem nenhuma data concreta.
11. **13 seções** — comprimento de página de vendas.
12. **Zero prova real** — nenhuma foto de encontro, nenhum número verdadeiro de comunidade.
13. **Menu com 9 itens**.
14. **CTAs vagos**: "Tenho Interesse", "Quero receber as informações do ETT".

**Raiz:** a home vendia *transformação de carreira* em vez de convidar pra *um encontro que acontece segunda que vem*.

## O que foi feito

### Home nova — 8 seções (`webapp/app/page.tsx`)

| Ordem | Componente | Papel |
|---|---|---|
| 1 | `HeroSimples.tsx` **(novo)** | O que é + quando + onde + gratuito, em 3 linhas. CTAs: "Quero participar" e "Ver a sala do encontro" (link real do ETT Speak) |
| 2 | `ProximosEncontros.tsx` **(novo)** | As 3 próximas segundas **com data** + card do presencial com as 4 casas de Curitiba |
| 3 | `ComoE.tsx` **(novo)** | 3 passos do encontro + bloco **"O que o ETT NÃO é"** |
| 4 | `FerramentasResumo.tsx` **(novo)** | ETT Player com screenshot, versão curta |
| 5 | `ParceirosFaixa.tsx` **(novo)** | Faixa fina de logos das casas e parceiros |
| 6 | `Precos.tsx` **(novo)** | **Cardápio de 3 trilhas** (ver Parte 3) |
| 7 | `FAQ.tsx` (agora com props) | 6 perguntas curtas, "Quanto custa?" em primeiro |
| 8 | `LeadForm.tsx` (revisado) | Só nome e e-mail obrigatórios |

Fecha com uma ponte pra `/detalhes/`.

### `/detalhes/` — a home antiga preservada

`webapp/app/detalhes/page.tsx` monta a composição antiga inteira (About, Methodology, Tools, PlayerShowcase, Partners, ImersoesTeaser, HowItWorks, Results, FAQ longa, LeadForm), menos os depoimentos.

`webapp/components/detalhes/HeroDetalhes.tsx` é um **snapshot do Hero antigo** — existe justamente pra `/detalhes/` não mudar quando a home evoluir.

### Removido do site

- `components/Testimonials.tsx` — **arquivo deletado** (depoimentos fictícios).
- "Salários até 5x maiores" e "Jackpot mensal" saíram da home (seguem em `/detalhes/`, que herdou `Results`/`HowItWorks` — **avaliar se devem sair de lá também**).
- "vagas limitadas" e "lançamento do ebook" — apagados de vez.

### Menu (`Navbar.tsx` + `lib/i18n/messages.ts`)

De 9 pra 6 itens no pt-BR: Agenda · Preços · Ferramentas · O programa · Imersões · Blog. CTA passou de "Tenho Interesse" para **"Quero participar"**.

**Mudança obrigatória, não cosmética:** as âncoras `#sobre`, `#metodologia` e `#como-funciona` **deixaram de existir na home** — apontariam pro vazio. Duas chaves novas em `NavMessages`: `pricing` e `program` (preenchidas nos 3 locales; só o pt-BR usa).

### Formulário (`LeadForm.tsx`)

- Obrigatórios: **só nome e e-mail**. Empresa, telefone, LinkedIn e nível viraram opcionais.
- Dois campos novos de pesquisa: `cf_trilha_ett` e `cf_faixa_plano_mensal`.
- Copy sóbria: "Sem custo. Sem venda no fim." Sucesso agora oferece o link da sala.

### Detalhes técnicos que não são óbvios

- **`ProximosEncontros` calcula as segundas no navegador** (`useEffect`), não no build. O site é export estático e o build pode ficar semanas sem rodar — datas calculadas no build apareceriam vencidas. Renderiza um skeleton antes do cálculo pra não quebrar hidratação.
- **`FAQ.tsx` ganhou props** (`faqs`, `title`, `subtitle`). Home usa `homeFaqsCurtas`, `/detalhes/` usa `homeFaqs` (default). JSON-LD de `FAQPage` só na home, com a lista curta.
- **O fundo do hero (`ETT-top01.webp`) é um cartaz com slogans impressos** — "Programa de Aceleração de Inglês para o Mercado Internacional", "Job Interview", "Imersões", "Carreira no Exterior", URLs. Aparecia atrás do título novo dizendo exatamente a mensagem que se estava removendo. **Remendo aplicado:** `blur-lg scale-110 opacity-40` + overlay mais escuro, virando textura. **O certo é trocar por foto real de encontro.**

### Números

| | Antes | Depois |
|---|---|---|
| Altura da home (1280px) | 15.428 px | **7.978 px** (−48%) |
| Seções | 13 | 8 |
| Campos obrigatórios | 6 | 2 |
| Itens de menu | 9 | 6 |

Validado com Playwright em 1280px e 390px: zero erro de console, sem overflow horizontal. (O único 404 é `/favicon.ico` — **o site não tem favicon**, problema pré-existente.)

---

# Parte 3 — Modelo de cobrança

Decidido nesta sessão e publicado em `Precos.tsx` (seção `#precos`).

## As 3 trilhas

| Trilha | Preço | Inclui | Contrapartida |
|---|---|---|---|
| **Aceleração** | **R$ 0 sempre** | Encontros + ETT Player completo + plano personalizado + acompanhamento | Presença nos encontros **+ 1h/dia** nas ferramentas |
| **Dedicação** | **R$ 0 sempre** | Encontros + **ferramentas em beta, enquanto estiverem em beta** + comunidade | Só presença. Sem rotina obrigatória |
| **Livre** | **Plano mensal — valor em definição** | Igual à Aceleração | Nenhuma |

## Regras firmes

- **Os encontros são gratuitos nas três trilhas.** O produto pago é a ferramenta, não o encontro. Cobrar ingresso quebraria as parcerias (UTFPR, IEP, Hard Rock, Habitat), que existem sob premissa de comunidade aberta. Aparecer pra conhecer é livre, sem cadastro.
- **Fase de teste:** hoje tudo liberado. Promessa publicada na página: *quem já estiver numa trilha gratuita continua sem pagar — não existe cobrança retroativa*.
- **Nenhum valor foi publicado, de propósito.** Em vez disso o formulário coleta a trilha pretendida e a faixa de preço que faria sentido — precificação com dado real de lead, não achismo.
- A pausa na rotina **não gera multa nem cobrança retroativa**; no máximo a pessoa passa a escolher outra trilha. Isso está escrito na página, senão a regra "grátis se você se dedicar" lê-se como armadilha.

## ⚠️ Ponto a confirmar

O **escopo da Trilha de Dedicação foi inferido** de uma frase curta do usuário ("ferramentas em beta são gratuitas") e nunca foi detalhado. Se o escopo real for outro (Player completo incluído? limite de sessões?), ajustar o array `trilhas` no topo de `Precos.tsx`.

---

# Pendências abertas

## Desta sessão

1. **Pull no Hostinger** pra publicar `2839a12` (home nova). Conferir: hero sem os slogans do cartaz aparecendo; seção Preços com as 3 trilhas; "Os próximos encontros" mostrando **datas futuras** (se aparecer data passada, é bug do cálculo); `/detalhes/` carregando.
2. **Criar `cf_trilha_ett` e `cf_faixa_plano_mensal` na conta RD Station** — sem os campos, as respostas da pesquisa de precificação se perdem. O resto do formulário funciona normalmente.
3. **Fotos reais dos encontros** — item de maior impacto contra a percepção de infoproduto, e substitui o remendo do fundo desfocado do hero.
4. **Números verdadeiros de comunidade** ("X encontros realizados", "Y participantes") pra ocupar o lugar dos 300h/3.000/5x.
5. **Depoimentos fictícios ainda nas homes EN e ES** (`app/en/page.tsx`, `app/es/page.tsx`) — não removidos porque estavam fora do pedido.
6. Avaliar se "salários 5x" e "Jackpot mensal" devem sair também de `/detalhes/`.
7. **Confirmar o escopo da Trilha de Dedicação** (acima).

## Antigas (arrastadas de sessões anteriores)

- 🔴 **SSL de `englishtalktime.com` e `.lat` quebrado** há 2+ meses (verificado de novo em 26/07: nenhum dos dois responde em `https://`). É configuração no **Namecheap**. Bloqueia adicionar os domínios no GSC.
- 🟡 **`webapp/lib/agenda-events.ts` parado em 2026-06-04.** A `/agenda/` filtra eventos futuros, então deve estar **vazia em produção** — e a home nova aponta pra lá em dois lugares. As datas do online se resolvem sozinhas (calculadas no navegador); os presenciais precisam das datas reais.
- 🟡 **Fluxo semanal de indicação do parceiro parado desde 06/06.** `npm run partner:feed` lista 10 artigos não publicados; o único elegível pela regra é *"A Verdade Sobre Aulas de Conversação em Inglês"* (26/07, categoria Dicas práticas).
- 🟡 Frente de conteúdo parada: expandir i18n EN (`/imersoes/florida/`) **ou** Onda 2 de SEO pt-BR.
- 🟡 O site **não tem favicon**.

Última revisão: **2026-07-26**.
