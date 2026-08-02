# Plano — revisão de marketing do site ETT

**Criado em 2026-08-01.** Documento de trabalho: uma revisão de marketing digital da estrutura,
apresentação e conteúdo do site, com foco em **fazer o visitante entender rápido que o ETT é um
grupo de conversação com ferramentas de apoio** e **se cadastrar** (ou entrar num plano).

> **Leia isto antes de mexer em copy.** Ele contém 4 decisões já tomadas pelo Alessandro em
> 01/08/2026 que resolvem ambiguidades que estavam espalhadas pelo site. Não re-decidir sozinho.

Relacionados: `CONTEXTO-SESSAO-2026-07-31.md` (handoff mais recente), `CLAUDE.md` (regras de copy),
`novoConteudo/MODELO-COBRANCA-ETT.md` (modelo de cobrança completo).

---

## O diagnóstico

**O site foi escrito quando tudo era gratuito, os planos foram publicados por cima (31/07) e o
resto do texto não foi revisado.** Resultado: a home conta **três histórias de preço incompatíveis**
na mesma rolagem. O visitante entende *o que é* — isso está claro — mas não entende *o que acontece
se ele se cadastrar*. Essa dúvida é o que trava o cadastro.

O problema não é de design nem de tráfego. É de **coerência factual**.

---

## Decisões confirmadas (01/08/2026)

Quatro perguntas foram feitas ao Alessandro e respondidas. **São a base de toda a reescrita.**

| # | Pergunta | Decisão |
|---|---|---|
| 1 | O que o lead do formulário recebe? | **Só link do encontro + datas dos presenciais.** Ferramenta só via "Conhecer" (30 dias) ou adesão. |
| 2 | Qual o presencial real em Curitiba? | **Só o IEP Talks — sábados, 10h–12h, no IEP.** UTFPR, Hard Rock e Habitat saem da copy. |
| 3 | O ETT Player público é demo ou produto? | **O acesso público vai ser fechado.** Tirar os botões externos da home; usar screenshot + CTA de cadastro. |
| 4 | Simplificar os 4 cartões de plano da home? | **Não — mantém os 4.** (Conhecer · Adesão · Dedicação · Aceleração) |

---

## P0 — Parar de se contradizer

É o bloco que mais custa cadastro hoje. Um visitante atento lê a seção de preços e, 30 segundos
depois, encontra a FAQ dizendo que o preço "ainda está em definição" e que "tudo está liberado".
Aí ele não compra **e não se cadastra, porque desconfia**.

### As contradições, uma a uma

| Arquivo | Texto atual | Problema | Correção |
|---|---|---|---|
| `components/HeroSimples.tsx` (`reassurances`) | "Não é curso e **não tem mensalidade**" | Falso desde 31/07 — existe R$ 37/mês | Separar encontro (grátis) de programa (pago) |
| `components/HeroSimples.tsx` (3º §) | "As ferramentas de apoio também são [gratuitas], **para quem faz o programa**" | O programa custa R$ 67 | Reescrever |
| `components/ComoE.tsx` (`naoE`) | "Não é curso: não tem matrícula, **mensalidade** nem contrato" | Falso | Reescrever |
| `components/ComoE.tsx` (`naoE`) | "**Não tem venda no fim**: você entra, conversa e vai embora" | O site vende logo abaixo | Precisar: *no encontro* não tem venda |
| `components/ComoE.tsx` (rodapé) | "Existem programas pagos opcionais... **eles são de parceiros**" | Agora os planos são do ETT | Reescrever |
| `lib/home-faqs.ts` → `homeFaqsCurtas[0]` | "plano mensal — que **ainda está em definição**... **tudo está liberado**" | Contradiz a seção de preços da mesma página | Valores reais |
| `lib/home-faqs.ts` → `homeFaqsCurtas[5]` | "rodízio entre quatro casas: IEP, UTFPR, Hard Rock, Habitat" | Só existe IEP Talks | Decisão #2 |
| `components/LeadForm.tsx` | "Você recebe... **o acesso às ferramentas do ETT Player**" | Promete de graça o que os planos vendem | Decisão #1 |
| `app/online/page.tsx` | "Sem catraca, **sem mensalidade**" · "Ferramentas de apoio com IA **inclusas**" | Mesma contradição, em página de busca orgânica | Reescrever |
| `app/curitiba/page.tsx` | "rotação por 4 locais: IEP, UTFPR, Hard Rock, Habitat" | Decisão #2 | Reescrever sobre o IEP Talks |
| `app/agenda/page.tsx` (metadata) | "presenciais em Curitiba (IEP, UTFPR, Hard Rock, Habitat)" | Decisão #2 | Reescrever |
| `lib/home-faqs.ts` → `homeFaqs` (usada em `/detalhes/`) | "camadas pagas opcionais... acesso premium às ferramentas" | Vago e desatualizado | Alinhar com os planos reais |

### A regra que resolve todas

> **O encontro é gratuito e vai continuar sendo. O programa (ferramentas, mentoria, material) é
> pago.** São duas coisas, e o site tem que dizer as duas na mesma frase sempre que tocar no
> assunto.

O antídoto contra a leitura de "infoproduto" — que motivou a reescrita da home em 26/07 e continua
valendo (ver `CLAUDE.md`) — **deixa de ser** *"não tem mensalidade"* e **passa a ser** *"o encontro
de segunda é aberto, sem cadastro e sem pagar, e isso não muda"*.

### Outras inconsistências factuais menores

- **Nível:** hero diz "do intermediário travado ao avançado"; FAQ diz "a partir de A2
  (básico-intermediário)". Escolher uma e repetir.
- **Contagem de ferramentas:** planos dizem "as 10 ferramentas"; o Player mostra 12. Pendência
  aberta desde 06/07.
- **Duração:** "Uma hora e meia" (`ComoE.tsx`) vale pro online (20h–21h30). O IEP Talks é 10h–12h
  (2h). A frase está numa seção que fala dos dois.

---

## P1 — Facilitar o cadastro

### 1. Os CTAs primários levam o visitante embora

O hero tem "Quero participar" (verde, vai pro formulário) **ao lado de** "Ver a sala do encontro"
(sai pro `ett-speak.vercel.app`, nova aba). A seção de ferramentas tem **outro botão verde
primário**: "Abrir o ETT Player" — também pra fora, e mais o screenshot inteiro é um link externo.

O pico de interesse está sendo gasto mandando a pessoa pra um app onde ela não tem conta, não
entende o que vê e não deixa o e-mail.

- **`FerramentasResumo.tsx`:** remover os links externos pro Player (decisão #3). Screenshot vira
  imagem, não link. CTA primário passa a ser cadastro / teste de 30 dias.
- **`HeroSimples.tsx`:** "Ver a sala do encontro" continua (o encontro é aberto mesmo), mas como
  **link secundário discreto**, não botão do mesmo peso do CTA principal.

### 2. O formulário está longe demais

Ordem atual da home: hero → encontros → como é → ferramentas → parceiros → **preços** → FAQ →
**formulário**. A pessoa precisa atravessar a decisão de compra antes de achar o campo de e-mail.

**Ação:** mini-captura logo depois de `ProximosEncontros` — *"Quer o link da próxima segunda?"*,
nome + e-mail, âncora pro formulário completo. É a conversão mais fácil do site e hoje ela só
existe no rodapé da página.

### 3. Alinhar a promessa do formulário (decisão #1)

`LeadForm.tsx`, no cabeçalho e no estado de sucesso:

- Promete: link do encontro de segunda + datas do IEP Talks.
- **Não** promete ferramentas.
- CTA secundário depois do sucesso: *"quer as ferramentas? comece o teste de 30 dias"* →
  `/planos/conhecer/`.

---

## P2 — Oferta

Decisão #4: **mantém os 4 cartões** na home (Conhecer · Adesão · Dedicação · Aceleração). Nada a
fazer aqui além de garantir que o texto dos cartões não contradiga o P0.

---

## Dependência externa

**Fechar o acesso público do ETT Player** (decisão #3) é ação fora deste repo — está no app em
`ett-player.vercel.app`. A copy da home pode ser corrigida antes, mas enquanto o link público
estiver aberto e a home não o citar mais, quem tiver o link ainda entra. Não é bloqueio pro P0/P1.

---

## Como verificar

Não existe suíte de testes. A validação é:

```bash
cd webapp
npx tsc --noEmit
npm run build
```

Depois, no HTML gerado, conferir que sumiram as contradições:

```bash
cd webapp/out
grep -ri "sem mensalidade\|não tem mensalidade\|ainda está em definição\|tudo está liberado" . | head
grep -ri "UTFPR\|Hard Rock\|Habitat" . | head    # só deve sobrar na faixa de logos/parceiros
```

E o de sempre: `./deploy.sh` da raiz + **pull manual no painel da Hostinger** (sem esse passo a
produção não muda).

---

## Estado da execução

**P0 e P1 aplicados em 2026-08-01.**

- [x] P0 — contradições de preço (hero, ComoE, FAQ curta, LeadForm)
- [x] P0 — unificar presencial no IEP Talks (FAQ, `/curitiba/`, `/agenda/`, `/conversacao/`,
      `layout.tsx`, `HowItWorks.tsx` e o **card da home** em `ProximosEncontros.tsx`)
- [x] P0 — corrigir `/online/`
- [x] P0 — alinhar `homeFaqs` longa (usada em `/detalhes/`)
- [x] P0 — nível (A2 em todo lugar), contagem de ferramentas ("todas" em vez de "as 10"), duração
- [x] P1 — tirar CTAs externos do Player (`FerramentasResumo.tsx`)
- [x] P1 — rebaixar "Ver a sala do encontro" no hero
- [x] P1 — mini-captura depois de `ProximosEncontros` (`components/CapturaRapida.tsx`)
- [x] P1 — alinhar promessa do `LeadForm`
- [ ] Externo — **fechar acesso público do ETT Player** (fora deste repo; a copy já não cita o link)

### Achados extras corrigidos na mesma passada

- **Dois caminhos de captura.** `/online/`, `/curitiba/`, `/conversacao/`, o blog e as indicações
  mandavam pra um **Google Form externo** (`forms.gle/jpK8bR4...`), com campos diferentes dos do
  formulário do site e tirando o visitante do domínio. Todos passaram a apontar pra `/#inscricao`
  (RD Station), que é a captura oficial. **Se o Google Form era proposital, reverter é trocar a
  constante `FORM_URL` de volta nesses arquivos.**
- **`/curitiba/` anunciava "Sem encontros presenciais confirmados".** A página filtrava
  `agendaEvents` **no build**, e o IEP Talks é gerado por regra — então a seção ficava vazia
  enquanto o resto do site dizia "todo sábado". Criado `components/ProximosPresenciais.tsx`, que
  calcula no navegador via `eventosFuturos()`, igual à agenda e à home.

### Pendente / decisão do Alessandro

- **Landings `/en/` e `/es/`** continuam apontando pro Google Form, com **depoimentos fictícios** e
  **sem o modelo de cobrança novo**. Ficaram fora desta passada de propósito — são páginas em outro
  idioma e merecem decisão própria.
- **Post do blog** `praticar-ingles-em-curitiba-gratis` ainda descreve a rotação por 4 locais. É
  conteúdo datado (maio); reescrever muda um artigo publicado.
- **Kit** `/divulgacao/convitesegunda20h/` ainda diz "sem mensalidade" — é o registro de um e-mail
  já disparado, `noindex`. Reescrever seria reescrever história.

Última atualização: **2026-08-01**.
