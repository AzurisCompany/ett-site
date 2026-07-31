# Contexto da sessão — 2026-07-31

Handoff da sessão de **2026-07-31**. Cinco blocos:

1. **Re-leitura do projeto** — o que estava pendente e o que já tinha sido resolvido
2. **Modelo de cobrança** — desenho completo, decidido pergunta a pergunta
3. **Implementação** — `/planos/`, as 4 páginas de plano, a nova `#precos`
4. **Agenda** — IEP Talks presencial semanal
5. **Formulário e RD Station** — simplificação e **dois bugs reais corrigidos**

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-07-27.md`.

Especificação viva do modelo de cobrança: **`novoConteudo/MODELO-COBRANCA-ETT.md`**.
Roteiro dos vídeos: **`novoConteudo/video-planos-conhecer/ROTEIRO-HEYGEN.md`**.

---

## Commits desta sessão (todos em `origin/main`)

| SHA | O quê |
|---|---|
| `4da764b` | Modelo de cobrança publicado: `/planos/`, prévia de checkout, IEP Talks recorrente na agenda |
| `4f825fd` | As 4 opções como cartões cheios na home (box de escolha) |
| `170bcc7` | Página por plano com espaço de vídeo; renomeia Livre → Dedicação; ajusta copy da adesão |
| `ae8dc0a` | Formulário reduzido a 4 campos |
| `ea3abfb` | **Correção do envio pra RD**: urlencoded + `identificador` |

⚠️ **Pull no Hostinger pendente** no fim da sessão. Cinco commits acumulados; um pull traz tudo.

---

# Parte 1 — Re-leitura do projeto

- ✅ **O pull dos commits de 27/07 FOI feito** (produção com `last-modified: 28/07 00:25`).
  Kit do Business Meal, post do blog, agenda corrigida e o `email.html` — tudo no ar, inclusive o
  banner por URL absoluta.
- 🔴 **SSL de `englishtalktime.com` e `.lat`** reconferido: nenhum dos dois responde em `https://`.
  Vai para ~3 meses. Configuração no Namecheap; bloqueia adicionar os domínios no GSC.
- 🟡 **Indicação semanal do parceiro** parada desde 06/06 (~8 semanas). Dos 10 artigos não
  publicados no feed, o único elegível continua sendo *"A Verdade Sobre Aulas de Conversação em
  Inglês"* (26/07) — os outros são Vídeo/Song/Story.

---

# Parte 2 — Modelo de cobrança

Decidido pergunta a pergunta com o Alessandro. **22 decisões**, todas registradas em
`novoConteudo/MODELO-COBRANCA-ETT.md`. O essencial:

```
CONHECER            ADESÃO              ESCOLHA (dia 31)          REVALIDAÇÃO MENSAL
R$ 0 · 30 dias  →   R$ 70 · uma vez  →  ┌─ Dedicação · R$ 39/mês  sem meta
sem cartão          2×1h individuais    │
vídeos + 1:1 30min  + 30 dias inclusos  └─ Aceleração · R$ 0   →  20 dias válidos/mês
                                           (~R$ 39 riscado)      ├ bateu → renova + prêmio
                                                                 └ não bateu → recuperação,
                                                                    depois convite ao mensal
```

## Decisões que mudaram o desenho original

- **A adesão inclui os 30 primeiros dias.** Sem isso a pessoa paga, recebe as mentorias e leva um
  segundo boleto antes de ter usado qualquer coisa.
- **Porta única: todo mundo paga a adesão**, inclusive quem vai pra Aceleração gratuita. Sem isso
  ninguém racional escolhe pagar, e as 2h de mentoria são consumidas do mesmo jeito.
- **Nada de preço simbólico.** R$ 1/mês e R$ 15/ano foram analisados e descartados: cheiro de
  infoproduto (o público já leu o site assim uma vez), a fricção é o cartão e não o valor,
  gateways têm mínimo por transação, e os R$ 70 já são o compromisso.
- **Nunca publicar "R$ 0" sozinho.** Grátis sem âncora lê-se como "sem valor". Sempre
  `~~R$ 39/mês~~ · R$ 0 · custa 1h da sua dedicação por dia`.
- **A meta é medida em "dias válidos"**, nunca em hora de relógio — tempo de tela é burlável.

## As duas verdades econômicas

- **A Aceleração é investimento de marketing, não receita.** Premissa: ~10% cumprem. Ela precisa
  produzir o que falta no site — fotos reais, depoimentos verdadeiros, números de comunidade.
- **O custo real é a agenda, não o prêmio.** 2h de 1:1 por adesão = R$ 35/h. Teto prático ~15–20
  adesões/mês. **Gatilho pra revisar:** ao passar de ~15 adesões num mês, abrir turma de
  onboarding em vez de contratar 1:1.
- **Com 10% cumprindo, o caminho da falha é o fluxo principal.** 90% chegam nele, e é dali que sai
  toda a receita recorrente. A sequência de e-mails do dia 25 ao 35 merece tanto cuidado quanto a
  home.

## Prêmios

Mês 1: material didático impresso (custo R$ 28, venda R$ 50) — entregue **em mãos no IEP Talks**
sempre que der, o que zera o frete e transforma a entrega em cerimônia fotografável. Meses
seguintes: o material se refaz com o vocabulário atual. Prêmios de parceiro (IEP, Coders, Cherry
Top, BeeTools) **ficam fora do site** até os acordos existirem por escrito.

---

# Parte 3 — Implementação

## Fonte única: `webapp/lib/planos.ts`

Preços, portas, trilhas, cartões da home, detalhes de cada plano, prêmios e FAQ. A home, a
`/planos/` e as páginas de plano leem tudo daqui — não existe preço escrito à mão em componente.

**As duas URLs de checkout ficam no topo desse arquivo.** Trocar lá é a única mudança necessária
quando o gateway estiver ligado.

## Rotas novas

| Rota | O quê |
|---|---|
| `/planos/` | Comparativo: as 2 portas, as 2 trilhas, a meta, os prêmios, os encontros, FAQ de cobrança (com JSON-LD `FAQPage`) |
| `/planos/conhecer/` | Teste de 30 dias |
| `/planos/adesao/` | A adesão de R$ 70 |
| `/planos/dedicacao/` | Trilha de Dedicação, R$ 39/mês |
| `/planos/aceleracao/` | Trilha de Aceleração, R$ 0 |
| `/planos/checkout/adesao/` | **Prévia** do checkout · `noindex` |
| `/planos/checkout/dedicacao/` | **Prévia** do checkout · `noindex` |

Cada página de plano tem **espaço de vídeo 16:9 já posicionado** (placeholder com o título do
vídeo), 4 blocos explicando, a lista do que está incluso e o botão do checkout no fim.

## A prévia de checkout

O gateway ainda não existe. Em vez de botão morto ou de um checkout falso pedindo cartão — o site
está no ar e recebe gente do WhatsApp —, a prévia mostra **resumo do pedido com os valores reais**,
aviso de que o pagamento online não abriu, botão de pagar **desabilitado** e **"Concluir pelo
WhatsApp"** como ação principal, com mensagem pronta. O fluxo funciona de verdade hoje.

⚠️ Quando as URLs reais chegarem: trocar as constantes em `lib/planos.ts` e **apagar
`app/planos/checkout/`**.

## Home (`components/Precos.tsx`)

Reescrita. A primeira versão colocava as trilhas numa faixa compacta abaixo dos dois cartões de
entrada — o usuário estranhou, com razão, e **isso foi decisão do agente, não dele**. Hoje são
**4 cartões cheios** (`sm:grid-cols-2 xl:grid-cols-4`), com etiqueta de etapa: "Comece por aqui"
nos dois primeiros, "A partir do dia 31" nos dois últimos.

Ordem: Conhecer · Quero entrar · **Dedicação** · **Aceleração** (a paga vem antes da gratuita, a
pedido).

Abaixo: o box da objeção — *"Por que R$ 70 se o encontro de segunda é de graça?"* — que é o
antídoto explícito contra a leitura de infoproduto, no mesmo espírito da seção "O que o ETT não é".

## Renomeações e copy

| Antes | Agora |
|---|---|
| "Uma entrada de R$ 70" | **"Adesão ao programa: R$ 70"** |
| "Custa 1 hora por dia." | **"Custa 1h da sua dedicação por dia."** |
| "Sem rotina obrigatória." | **"Sem rotina obrigatória — 1h de dedicação por dia."** |
| **Trilha Livre** | **Trilha de Dedicação** |
| "Encontros, turmas por nível e o presencial de sábado" | **"Encontros online e presenciais"** |
| "sem meta nenhuma" | removido |

A **Trilha de Dedicação antiga** (R$ 0, só presença) **saiu do site**. Quem já estava nela fica
isento da adesão — a promessa de "sem cobrança retroativa" está publicada e precisa ser honrada.

Em todos os planos entraram *"O sistema acompanha e registra sua evolução"* e *"Acompanhamento e
feedback das ferramentas"*. A adesão ganhou **material didático personalizado** e **entrada nos
encontros de conversação**.

---

# Parte 4 — Agenda: IEP Talks

Presencial semanal: **todo sábado, 10h–12h, no IEP (Instituto de Engenharia do Paraná), Curitiba.**

Implementado como **recorrente gerado no navegador** (`encontrosPresenciaisRecorrentes` em
`webapp/lib/agenda-events.ts`), pelo mesmo motivo das segundas: data escrita à mão congela a
agenda — foi exatamente o bug corrigido em 27/07. Um helper `proximosDiasDaSemana` agora serve os
dois geradores, e `eventosFuturos` mescla recorrentes + datados, com o **datado tendo precedência**
sobre o recorrente do mesmo dia e tipo (é assim que se cancela ou substitui uma ocorrência).

**Correção de dado:** o cadastro de maio dizia "IEP — Instituto de Ensino e Pesquisa". O nome
correto, confirmado pelo Alessandro, é **Instituto de Engenharia do Paraná**. Estava errado desde
maio.

Isso também destravou a palavra "presenciais" na copy dos planos: agora tem lastro verificável.

---

# Parte 5 — Formulário e RD Station

## Simplificação

Saíram três campos: o select **"Como você quer participar?"** (`cf_trilha_ett`), o **LinkedIn** e o
select **"Qual seu nível atual de inglês?"** (`cf_nivel_ingles`). Antes, já tinha saído a pesquisa
de faixa de preço (`cf_faixa_plano_mensal`), que passou a contradizer a página no momento em que o
valor R$ 39 foi publicado.

**Sobraram 4 campos:** `name`*, `email`*, `company`, `personal_phone` (+ honeypot `website`).

Como nenhum campo `cf_*` é mais enviado, **a pendência de criar `cf_trilha_ett` e
`cf_faixa_plano_mensal` na conta RD deixou de existir.**

## ⚠️ Dois bugs reais, achados por um lead de teste

O Alessandro colou o e-mail de notificação do lead de teste. Ele revelou:

**1. `Identificador: Indefinido`.** A LP `eventos.gubigdata.com.br/tenhointeresseprograma...` usa
`conversion_identifier`, e o campo tinha sido alinhado com ela. Mas a LP posta em outro endpoint:
**a API v1.3 só entende `identificador`**. Com o nome errado, toda conversão chegava sem saber de
qual origem veio. Revertido.

**2. `Telefone: ------XjqDhzJoDj3k0avrjDkS5I--`.** Esse é o *boundary* do `multipart/form-data`
vazando pro valor. O componente enviava `FormData`, que o navegador serializa como multipart, e
**a v1.3 da RD não parseia multipart direito: o último campo chega com lixo colado.** Esse bug
existia desde sempre — todo lead que preencheu telefone chegou corrompido.

Corrigido: o corpo agora é montado com `URLSearchParams` e enviado como
`application/x-www-form-urlencoded`.

## O que ficou confirmado

- Token e identificador de conversão **batem com a LP**.
- `name`, `email` e `company` caem nos campos padrão da RD corretamente (confirmado no lead).
- Endpoint responde `HTTP 200 · {"result":"success","msg":"Lead conversion saved."}`.

## 🧹 Leads de teste pra apagar na conta RD

| Nome | E-mail |
|---|---|
| TESTE INTEGRACAO CLAUDE - IGNORAR (A) | teste-claude-a@azuris.com.br |
| TESTE INTEGRACAO CLAUDE - IGNORAR (B) | teste-claude-b@azuris.com.br |
| TESTE FINAL CLAUDE - IGNORAR | teste-claude-final@azuris.com.br |
| TESTE D CLAUDE - IGNORAR | teste-claude-d@azuris.com.br |

**Conferir no TESTE D** se o Identificador saiu de "Indefinido" e se o telefone chegou limpo. Se
sim, o formulário está correto de ponta a ponta.

## Copy desatualizada corrigida no formulário

- *"Curitiba: IEP, UTFPR, Hard Rock, Habitat"* → **"IEP Talks, sábados 10h · Curitiba"**
- *"Sem custo. Sem venda no fim."* → **"Os encontros são gratuitos."** (a primeira dava a entender
  que o programa inteiro é gratuito, o que deixou de ser verdade com os planos publicados)

---

# Aprendizados técnicos (pra não repetir)

## RD Station API v1.3

- **Enviar `application/x-www-form-urlencoded`, nunca `FormData`/multipart.** O boundary vaza pro
  último campo.
- **O campo é `identificador`, não `conversion_identifier`** — mesmo que a LP da RD use o segundo.
- Campos `name` / `email` / `company` / `personal_phone` caem nos campos padrão.
- A API devolve `200` mesmo quando um campo não é reconhecido. **200 não significa que o lead
  chegou correto** — só olhando o lead na conta dá pra saber. Testar sempre com um lead marcado.

## Screenshot de página com framer-motion

`whileInView` começa em `opacity: 0` e só dispara com scroll real. Chrome headless com
`--screenshot` não rola a página, então a captura sai preta. O que funciona: extrair a seção do
HTML gerado para um arquivo temporário com o CSS do build e uma regra
`[style*="opacity:0"]{opacity:1!important}`. **O arquivo temporário tem que ficar fora de
`webapp/out/`** ou ser apagado antes do deploy — `out/` é espelhado para a raiz.

## Ferramentas ausentes

`npm run lint` **não funciona**: não existe config de ESLint no repo, e o comando abre um wizard
interativo. A validação real é `npx tsc --noEmit` + `npm run build`.

---

# Pendências abertas

## Bloqueia a cobrança

1. **As duas URLs do checkout** (adesão R$ 70 e assinatura R$ 39/mês) — gateway próprio do
   Alessandro. Trocar em `webapp/lib/planos.ts` e apagar `app/planos/checkout/`.
2. **Termos de uso e política de privacidade** ainda falam de programa gratuito. Precisam cobrir
   plano pago, recorrência, reembolso e os 7 dias do CDC art. 49, com a razão social da Azuris.
3. **Provisionamento da conta no Player** é manual no começo. Vira gargalo passando de ~20
   adesões/mês.

## Conteúdo

4. **Gravar os 4 vídeos** (roteiros prontos em `novoConteudo/video-planos-conhecer/`). O da
   Aceleração depende de o **contador de dias válidos existir na interface do Player** — mostrar
   tela que não existe seria péssimo justamente no vídeo que diz "não é na confiança".
5. **As 8 gravações de tela** do Player listadas no roteiro.
6. **Acordos com IEP / Coders / Cherry Top / BeeTools** por escrito, antes de publicar prêmio de
   parceiro.
7. **Sequência de e-mails do dia 25 ao 35** — por onde passam 90% das pessoas.

## Antigas

- 🔴 **SSL `.com`/`.lat`** quebrado há ~3 meses (Namecheap). Bloqueia GSC.
- 🟡 Indicação semanal do parceiro parada desde 06/06.
- 🟡 Fotos reais dos encontros; números verdadeiros de comunidade; hero ainda com imagem genérica.
- 🟡 Depoimentos fictícios ainda nas homes `/en/` e `/es/`.
- 🟡 Logo do ETT em alta/vetorial; hashtag oficial; o site não tem favicon.
- 🟡 As homes `/en/` e `/es/` não conhecem o modelo de cobrança novo.

---

Última revisão: **2026-07-31**.
