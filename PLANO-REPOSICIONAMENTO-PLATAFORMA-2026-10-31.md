# Plano — Reposicionamento do ETT como plataforma (não curso)

**Criado em 2026-10-31.** Branch de trabalho: `reposicionamento-plataforma` (nada vai pro `main`
nem pro ar até a revisão final — o push no `main` publica sozinho em ~2 min).

Briefing de origem: o documento "PROJETO: Reposicionamento e revisão completa do site ETT"
colado na sessão. **O briefing chegou cortado no meio da seção 12** (perfil "Grupos de
conversação") — o que vier depois dele não está neste plano.

> Este plano **substitui a premissa** do `PLANO-REVISAO-MARKETING-2026-08-01.md` ("o ETT é um grupo
> de conversação com ferramentas de apoio") pela nova ("plataforma de ferramentas + conversação +
> parceiros"). As decisões de 01–02/08 que **continuam valendo**: encontros sempre gratuitos e sem
> cadastro; só o IEP Talks como presencial (UTFPR/Hard Rock/Habitat fora da copy); os 4 cartões de
> plano; preços só em `lib/planos.ts`; nada de depoimento fictício; nada de promessa de resultado.
> A que **muda**: o hero volta a ter botões (em 02/08 eles tinham sido tirados por tom).

---

## 1. O que a auditoria encontrou

### 1.1 Estrutura
- Next.js 14, export estático, 30 rotas `page.tsx`. Conteúdo **todo em código** (componentes + `lib/*.ts`), sem CMS nem API.
- Fontes únicas já existentes: `lib/planos.ts` (preços, checkout), `lib/agenda-events.ts` (encontros), `lib/home-faqs.ts`, `lib/partner-posts.ts`, `lib/lancamento.ts`.
- **Sem fonte única** pra ferramentas, parceiros e imersões — cada componente tem a sua lista, e elas divergem.
- Integrações: checkout `azuris.com.br/ett/{adesao,assinatura}`, RD Station (LeadForm), ETT Player (`ett-player.vercel.app`, com portão de e-mail), Google Forms (imersões `forms.gle/E4dV7…`, landing EN `forms.gle/jpK8…`, lançamento).

### 1.2 A home ainda está em modo lançamento (o evento foi 27/10)
- `app/page.tsx:25` — metadata OG do lançamento (estática).
- `useLancamentoAtivo()` começa como `true` → o HTML publicado traz o hero do evento e o visitante vê ele piscar antes da home.

### 1.3 Ferramentas: o site anuncia o que o Player não tem
Catálogo **real** do ETT Player (lido do app em produção, 31/10), com o status que o próprio app mostra:

| App no Player | Categoria no app | Status no app |
|---|---|---|
| Fórmula Fluente | Metodologia (e-book em capítulos) | disponível |
| Meet | Comunidade · Encontros | disponível |
| Speak | Conversa guiada com correção | disponível |
| Daily | Plano diário / planner | disponível |
| Learning DNA | Perfil de aprendizagem | disponível |
| Level Check | Diagnóstico + plano 90 dias (Longman 3000 / Oxford 5000) | disponível |
| Flashcards | Revisão de vocabulário | disponível |
| Legendas | Séries com legenda | disponível |
| AudioBook | Audiolivro | disponível |
| Radio | Rádio/notícias ao vivo | disponível |
| Voice Agent Lab | Voz com IA | **POC** |
| ShadowDaily | Shadowing com nota de pronúncia | **Em breve** |

O app também avisa: "algumas ferramentas ainda estão em Beta".

O que o site promete **e não existe no Player**: `Tools.tsx` (usado em `/detalhes/`) lista **Diário ETT**,
**Sistema de Recomendação "ClickHouse + IA"**, **ETT AI Prompt**, **ETT GameZone** (ranking, jackpot) e
**Técnica dos Pontinhos** ("10 meses para fluência"). `PlayerShowcase.tsx` apresenta o Voice Agent Lab
como "Prática de fala com IA", sem dizer que é POC. `lib/planos.ts` fala em "10 ferramentas" e cita
"diário falado e escrito" e "simulações com IA".

### 1.4 Parceiros: tudo misturado num "ecossistema"
- `Partners.tsx` (em `/detalhes/`): 9 parceiros sem categoria, com título "Um ecossistema completo de especialistas ao seu lado".
- **Promessas de terceiros sem fonte**: Coders "vagas no exterior em 30–45 dias, salários até 5x"; Cherry Top "saltam de nível em poucas semanas", "até 10× mais rápido" (repetido em `Imersoes.tsx`, `ImersaoDetalhe.tsx`, `/imersoes/curitiba/`, `/imersoes/florida/`).
- UTFPR, Hard Rock e Habitat continuam em `Partners.tsx` e `ParceirosFaixa.tsx` (decisão #2 de 01/08 mandou tirar).

### 1.5 Imersões: o ETT aparece como co-operador
- Marca "ETT × Cherry Top" em títulos, metadata e JSON-LD; "Você não escolhe entre o ETT e a Cherry Top. Você ganha os dois"; "a imersão é o acelerador da trilha ETT".
- **Datas vencidas na vitrine**: Curitiba (29/jul–02/ago) ainda aparece como "Próxima a acontecer"; BH lista set e out (já passaram) junto com nov (18–22/11).
- "Vagas extremamente limitadas", "Vaga garantida com taxa de pré-inscrição" — vocabulário de lançamento, e não está claro quem cobra a taxa.

### 1.6 `/detalhes/` lê como currículo de curso
- `About.tsx`: "É um ecossistema de aceleração", "programa de aceleração".
- Métricas grandes: 300h, 3.000 palavras, 10 palavras/dia, "10 meses para fluência", "do inglês travado ao funcional" (este último também em `app/layout.tsx:123`, a descrição global do site).
- `HowItWorks.tsx`, `Results.tsx`, `Methodology.tsx` — jornada em passos e resultados quantificados.

### 1.7 EN e ES
`/en/` e `/es/` são landings separadas, com depoimentos fictícios hardcoded, Google Form próprio e preços antigos.
Já estavam fora da revisão de 01/08.

---

## 2. Princípios da execução

1. **Não inventar.** Só entra ferramenta que existe no Player, com o status dele. Preço e regra comercial só de `lib/planos.ts`, sem mudar valores. Parceiro só com o papel que o próprio site já documenta.
2. **Fonte única por assunto.** Ferramentas, parceiros e imersões ganham um `lib/*.ts`, e home, `/detalhes/` e `/imersoes/` leem dele.
3. **Data no navegador.** Imersão passada vai pro histórico calculado no navegador (mesma regra da agenda). Não hardcodar "próxima a acontecer".
4. **URLs preservadas.** Nenhuma rota muda de endereço. Slugs de plano e checkout ficam, só os títulos de apresentação mudam.
5. **Positivo, não defensivo.** A seção "o que o ETT não é" fica, mas encolhe. O resto do site mostra o que ele é.
6. **Tema e tokens.** Só cores semânticas (`ink-*`, `surface-*`, `brand-*`) e componentes existentes.

---

## 3. Fases

### Fase 0 — Sair do modo lançamento *(pré-requisito, 1 commit)*
- Apagar a `metadata` do lançamento em `app/page.tsx` (volta o cartão `og-ett-2026.png` do layout).
- Apagar `HeroHome`, `HeroLancamento`, `LancamentoDSSBR`, `LancamentoChamadas` e `lib/lancamento.ts`, e limpar o CTA do `Navbar`.
- O kit `/divulgacao/lancamento-dssbr-2026/` **fica** (é `noindex` e tem e-mails já disparados apontando pra ele).

### Fase 1 — Fontes únicas de dados
| Arquivo novo | Conteúdo |
|---|---|
| `lib/ferramentas.ts` | Os 12 apps do Player: nome, finalidade, o que faz, exemplo de uso, `status: 'disponivel' \| 'beta' \| 'poc' \| 'em-breve'`, link (o Player não tem link profundo por app, então todos levam à raiz). |
| `lib/parceiros.ts` | Parceiro → categoria (ensino · imersão · conteúdo · institucional/comunidade), "Oferecido por" e "Apoio do ETT", URL, logo. Sem as promessas quantificadas de terceiros. |
| `lib/imersoes.ts` | As 3 imersões com **datas ISO** por turma, organizador (Cherry Top), papel do ETT e link. Helper `separarImersoes()` que divide em atuais e histórico no navegador. |

### Fase 2 — Home (`app/page.tsx`)
Nova ordem, respondendo às 6 perguntas do briefing:

| # | Seção | Componente | Responde |
|---|---|---|---|
| 1 | Hero "Pratique mais inglês. Com ferramentas, conversação e oportunidades reais." + CTA **Conhecer as ferramentas** (→ `#ferramentas`) + **Participar da conversação** (→ `#encontros`) + link **Como funciona o ETT** (→ `#como-funciona`). Visual: screenshot real do Player. | `HeroSimples` (reescrito) | O que é |
| 2 | Três pilares (Ferramentas · Conversação · Parceiros) + faixa "são complementares, não etapas de um curso" | **novo** `TresPilares` | O que encontro |
| 3 | Ferramentas: catálogo real com selo de status, CTA primário teste de 30 dias, secundário abrir Player | `FerramentasResumo` (reescrito, lê `lib/ferramentas.ts`) | O que encontro |
| 4 | Encontros: "Inglês se desenvolve praticando. Venha conversar." + próximas datas + como é um encontro + "gratuito, sem cadastro, sem obrigação de plano" | `ProximosEncontros` + `ComoE` (enxugado) + `CapturaRapida` | O que encontro / grátis |
| 5 | Parceiros por categoria, com "Oferecido por / Apoio do ETT" e a frase de responsabilidade de cada parceiro | `ParceirosFaixa` → reescrito (lê `lib/parceiros.ts`) | O que encontro |
| 6 | Como funciona: 4 passos (conhece → identifica necessidades/diagnóstico → escolhe recursos e encontros → explora parceiros) | **novo** `ComoFunciona` | Como funciona |
| 7 | O que é grátis e o que é pago, em 4 blocos (Encontros · Acesso às ferramentas · Orientação e personalização · Cursos e imersões de parceiros) seguidos dos 4 cartões atuais | `Precos` (reorganizado; valores de `lib/planos.ts`) | Grátis × pago |
| 8 | ETT para escolas, professores e grupos | **novo** `ParaEducadores` | Para quem |
| 9 | FAQ curta revisada (tirar "É aula de inglês? Não…" do topo e incluir "O ETT é um curso?" com resposta positiva) | `lib/home-faqs.ts` | — |
| 10 | Formulário + ponte pra `/detalhes/` | `LeadForm` (texto de cabeçalho) | Como começo |

### Fase 3 — Imersões (`/imersoes/` + 3 subpáginas)
- Título "Imersões em inglês oferecidas por nossos parceiros" e o subtítulo do briefing.
- Cada cartão com **Oferecido por: Cherry Top** e **Apoio do ETT** (o que existir de fato: ferramentas e encontros antes e depois, divulgação).
- Vitrine (atuais) separada de histórico, calculada pela data. Curitiba vai pro histórico. BH mostra só as turmas futuras.
- Tirar "até 10× mais rápido", "Você ganha os dois", "Vagas extremamente limitadas" e o "ETT ×" dos títulos e da metadata (vira "com a Cherry Top").
- Bloco "Antes, durante e depois da imersão" usando só apps disponíveis (Level Check, Flashcards, Legendas, Speak, Meet).
- CTA: hoje leva a um Google Form do ETT. Mantém o form, com o texto "o ETT encaminha seu interesse à Cherry Top", e adiciona o link do site da Cherry Top.

### Fase 4 — `/detalhes/`
- Hero/título: "Como o ETT ajuda você a acelerar sua prática de inglês" (`HeroDetalhes` é snapshot congelado, então reescrevo só ele).
- `About`: troca "ecossistema de aceleração" por plataforma. "Programa de Aceleração" entra contextualizado ("o nome histórico do projeto…").
- `Methodology`/`HowItWorks`/`Results`: linguagem de jornada de prática. 300h, 3.000 palavras e 10 palavras/dia viram **metas de referência** com aviso explícito de que não são garantia. "10 meses para fluência" sai.
- `Tools` → passa a ler `lib/ferramentas.ts` (as 5 que não existem saem ou vão pra "planejadas", ver decisão D1).
- `PlayerShowcase`: Voice Agent Lab com selo **POC**, ShadowDaily com **Em breve**.
- `Partners` → lê `lib/parceiros.ts`, agrupado por categoria.
- Mentoria da adesão explicada como **orientação de uso da plataforma**, não aula particular. Diagnóstico como apoio à personalização, não certificação.
- FAQ longa (`homeFaqs`): alinhar.

### Fase 5 — Planos (só apresentação)
- "Quero entrar" / "Adesão ao programa" → título de apresentação **"Ativação acompanhada da plataforma"**. Slug `/planos/adesao/`, checkout e `PRECO_ADESAO` não mudam. As **2 sessões individuais de 1h** ficam em destaque.
- Trilhas de Dedicação/Aceleração: subtítulo "modalidade de acesso às ferramentas", não curso.
- "Entrada nos encontros de conversação" como item da adesão **sai da lista de benefícios pagos** (o encontro é aberto a todos). Vira nota: "os encontros continuam abertos a todos".
- "10 ferramentas" → número real vindo de `lib/ferramentas.ts`. Tirar "diário" e "simulações com IA" dos textos se D1 confirmar que não existem.

### Fase 6 — Varredura global
- `app/layout.tsx`: description/keywords/JSON-LD (tirar "do inglês travado ao funcional", descrever a plataforma).
- `Footer` (alt "Programa de Aceleração de Inglês", tagline, links), `Navbar` (o item "Programa" vira "Como funciona").
- `/conversacao/`, `/online/`, `/curitiba/`, `/agenda/`: só trechos que chamem o ETT de curso, prometam resultado ou citem UTFPR/Hard Rock/Habitat.
- Blog: **não** reescrever posts publicados. Só o post da parceria, se disser "Programa de Aceleração" como produto.

### Fase 7 — `/en/` e `/es/` *(escopo a decidir, D4)*
Mínimo: novo posicionamento no hero, sem depoimentos fictícios, sem promessa, CTA pro formulário certo, sem preço velho.

### Fase 8 — Validação e entrega
1. `npx tsc --noEmit` + `npm run build`.
2. `node scripts/tema/auditar-contraste.mjs` no `out/` local.
3. Screenshots das seções novas (método do CLAUDE.md, arquivo temporário **fora** de `out/`), desktop e 390px.
4. `grep` final por "curso", "10×", "garant", "300h", "UTFPR", "ETT ×".
5. Teste de lead marcado no LeadForm, se o formulário mudar.
6. Mostrar os screenshots ao Alessandro, depois merge no `main` e `./deploy.sh` (só com ok), e conferir na produção com `?v=`.
7. Atualizar `CLAUDE.md` (posicionamento novo, fontes únicas novas, fim do modo lançamento), escrever o handoff `CONTEXTO-SESSAO-2026-10-31.md` e as memórias.

**Commits sugeridos** (um por fase, todos no branch): F0 · F1 · F2 · F3 · F4 · F5 · F6 · (F7) · docs.

---

## 4. Decisões

**Respondidas em 31/10/2026:**
- **D1 →** as 5 ferramentas fora do Player entram numa linha **"Em construção"**, só com o nome e sem descrever funcionalidade.
- **D2 →** **BH 18–22/11 e Flórida 2027 confirmadas.** Ficam como atuais. Curitiba e as turmas de BH de set/out vão pro histórico.
- **D3 →** contato de educadores por **e-mail** `binhara@azuris.com.br`, com assunto pré-preenchido.
- **D4 →** **EN/ES numa rodada separada**, depois da aprovação do pt-BR. A Fase 7 sai desta rodada.

- **D2 (taxa) →** inscrição, taxa de pré-inscrição e condições são **da Cherry Top**. O ETT só encaminha o interesse.
- **D5 →** categorias **aprovadas como propostas** (Ensino: BeeTools · Imersão: Cherry Top · Conteúdo: Aprendendo Inglês e Fórmula Fluente · Institucional/comunidade: IEP e DSSBR & GUBigData · Carreira: Coders). UTFPR, Hard Rock e Habitat saem.
- **D6 →** o briefing tem mais seções. O Alessandro vai colar o resto, e ele entra antes da Fase 6.
- **Fase 0 publicada à parte em 31/10** (commit `9ce9301` no `main`), a pedido: "já lançamos, pode remover".

Tabela original:

| # | Pergunta | Minha recomendação |
|---|---|---|
| D1 | Diário ETT, ETT AI Prompt, Sistema de Recomendação, GameZone e Técnica dos Pontinhos não estão no Player. O que faço com eles? | Tirar do catálogo. Se forem roadmap real, vão pra uma linha "Em construção" sem descrição de funcionalidade. |
| D2 | BH 18–22/11 e Flórida (jan/fev 2027) continuam de pé com a Cherry Top? Quem cobra a "taxa de pré-inscrição"? | Manter as duas como atuais (se confirmadas) e trocar "vaga garantida com taxa" por "condições definidas pela Cherry Top". |
| D3 | Seção "para escolas e professores": qual o canal de contato? (não existe oferta B2B configurada) | E-mail `binhara@azuris.com.br` com assunto pré-preenchido. Sem preço e sem pacote. |
| D4 | EN/ES entram agora ou numa rodada separada? | Rodada separada, depois que a versão pt-BR estiver aprovada. |
| D5 | Categorias dos parceiros (proposta): **Ensino** BeeTools · **Imersão** Cherry Top · **Conteúdo** Aprendendo Inglês, Fórmula Fluente · **Institucional e comunidade** IEP, DSSBR & GUBigData · Coders = **Carreira** (categoria que o briefing não prevê). UTFPR, Hard Rock e Habitat saem. | Como proposto. |
| D6 | O briefing parou na seção 12. Há seções 13+ (SEO, critérios de aceite…)? | Mandar o resto antes da Fase 6. |
