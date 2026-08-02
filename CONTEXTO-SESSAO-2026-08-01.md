# Contexto da sessão — 2026-08-01

Handoff da sessão de **2026-08-01**. Cinco blocos:

1. **Re-leitura do projeto** — o que estava pendente e o que já tinha sido resolvido
2. **Poda de páginas e menu** — `/planos/` removida, menu reorganizado
3. **Cobrança ligada de verdade** — checkout real e preços novos
4. **Revisão de marketing** — o site se contradizia; P0 e P1 aplicados
5. **Aprendizados técnicos**

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-07-31.md`.

Plano vivo da revisão de copy: **`PLANO-REVISAO-MARKETING-2026-08-01.md`** (tem checklist de
execução e as 4 decisões do Alessandro).

---

## Commits desta sessão (todos em `origin/main`)

| SHA | O quê |
|---|---|
| `fe0e2da` | Remove a página comparativa `/planos/` e o item "Preços" do menu |
| `83145e9` | Remove o box da objeção dos R$ 70 da home |
| `6c06aa0` | **Checkout real da adesão** + preços 67/37/370; menu ganha Conversação e Fórmula Fluente |
| `cd9790e` | **Checkout da assinatura ligado**; apaga as prévias internas de checkout |
| `43334cf` | Plano de revisão de marketing (documento) |
| `c0be934` | **Revisão de copy**: elimina contradições de preço, unifica o presencial, captura mais cedo |
| `2514263` | ETT Player volta como CTA secundário |

⚠️ **Pull no Hostinger pendente no fim da sessão. São 7 commits acumulados; um pull traz tudo** —
e é ele que coloca a cobrança e os preços novos no ar. Até lá a produção mostra R$ 70/R$ 39.

---

# Parte 1 — Re-leitura do projeto

- ✅ **O pull dos 5 commits de 31/07 FOI feito** (produção com `last-modified: 31/07 23:36 UTC`).
  `/planos/` e as 4 páginas de plano respondiam 200.
- 🔴 **SSL de `englishtalktime.com` e `.lat`** reconferido: **nenhum dos dois responde** em
  `https://`. Vai para ~3 meses. Segue bloqueando o GSC.
- 🟡 Indicação semanal do parceiro continua parada (desde 06/06).

---

# Parte 2 — Poda de páginas e menu

## `/planos/` removida

A pedido do Alessandro. Saíram `app/planos/page.tsx` e `components/Planos.tsx`, o item **"Preços"**
do menu, o link "Ver os planos em detalhe" da home e a entrada do `sitemap.ts`.

**As 4 páginas de plano continuam** (`/planos/conhecer|adesao|dedicacao|aceleracao/`) — os dois
links internos que apontavam pra comparativa foram redirecionados pra `/#precos`, senão virariam
404.

Detalhe do `deploy.sh` que **não** virou problema: como `planos/` continua existindo no export, o
script recria o diretório do zero e o `planos/index.html` velho sumiu sozinho da raiz. A limitação
conhecida (diretórios órfãos que ficam pra sempre) só morde quando a pasta inteira deixa de existir.

## Auditoria de rotas órfãs

Feita a pedido do Alessandro, que estranhou o menu curto. Resultado:

- **Só uma rota foi deletada em toda a história do repo**: `/planos/`, nesta sessão.
- **Nenhuma rota está órfã** — todas as 32 do sitemap têm ao menos um link de entrada.
- A poda grande do menu foi em **26/07** (`2839a12`), junto com a reescrita da home: Sobre,
  Metodologia, Fórmula Fluente, Parceiros e Como Funciona saíram porque **as seções saíram da
  home** e viraram `/detalhes/`. Manter os itens apontaria pra âncora inexistente.

**Bug achado nessa auditoria:** o rodapé não tinha sido atualizado em 26/07 e tinha **5 âncoras
mortas** na home pt-BR — `/#sobre` e `/#parceiros` (×4). Clicar não dava erro: simplesmente não
acontecia nada.

## Menu reorganizado

`/conversacao/` e `/ff/` entraram no menu pt-BR, que ficou com 7 itens: **Agenda · Conversação ·
Ferramentas · O programa · Fórmula Fluente · Imersões · Blog**.

⚠️ **Com 7 itens o menu estourava em 1024px e 1152px** (o wordmark colava em "Agenda", "O programa"
e "Fórmula Fluente" quebravam em duas linhas). Só cabe a partir de 1280px, então o breakpoint do
menu desktop foi de `lg` para **`xl`** — abaixo disso aparece o hambúrguer, com os 7 itens dentro.
Verificado por screenshot em 1024, 1152, 1280 e 1440.

---

# Parte 3 — Cobrança ligada

## Preços novos

Como toda a copy lê de `webapp/lib/planos.ts`, foi um único ponto de edição:

| | Antes | Agora |
|---|---|---|
| Adesão | R$ 70 | **R$ 67** |
| Mensal | R$ 39 | **R$ 37** |
| Anual | R$ 390 | **R$ 370** |

O anual continua batendo com a copy "dois meses de desconto" (37×12 = 444; 370 economiza 74 = 2
meses). Confirmado por grep que não sobrou nenhum "R$ 70"/"R$ 39" em HTML gerado.

## Checkout real

| Constante | URL |
|---|---|
| `CHECKOUT_ADESAO` | `https://azuris.com.br/ett/adesao` — cobrança única, PIX ou cartão em até 3x |
| `CHECKOUT_DEDICACAO` | `https://azuris.com.br/ett/assinatura` — recorrente, mensal ou anual |

**`app/planos/checkout/` foi apagado por inteiro** — as prévias internas não existem mais e **não
devem ser recriadas**. Se o gateway cair, o certo é tirar o botão do ar, não simular checkout.

⚠️ **Sequência que vale registrar:** a URL da assinatura chegou junto com um aviso de que o botão
devolveria **500** até rodar a migração de produção (`assinaturas.produto_slug`). Ela foi
**deliberadamente não publicada** numa primeira rodada, e só entrou depois de o Alessandro
confirmar que a migração tinha rodado. `HTTP 200` no GET não prova nada nesse caso — a página abre
e quebra no clique.

---

# Parte 4 — Revisão de marketing

Pedido: revisar estrutura, apresentação e conteúdo pra ficar **simples de entender** que o ETT é um
grupo de conversação com ferramentas de apoio, e **estimular o cadastro**.

## O diagnóstico

> **O site foi escrito quando tudo era gratuito, os planos foram publicados por cima em 31/07 e o
> resto do texto não foi revisado.** A home contava **três histórias de preço incompatíveis** na
> mesma rolagem.

O visitante entendia *o que é*. Não entendia *o que acontece se eu me cadastrar* — e é essa dúvida
que trava o cadastro. O caso mais grave: a pessoa lia a seção de preços e, 30 segundos depois,
encontrava a FAQ dizendo que o preço "ainda está em definição" e que "tudo está liberado".

## A regra que resolveu o P0

> **O encontro é gratuito e vai continuar sendo. O programa (ferramentas, mentoria, material) é
> pago.** O site tem que dizer as duas coisas na mesma frase sempre que tocar no assunto.

O antídoto contra a leitura de "infoproduto" (que motivou a reescrita de 26/07 e continua valendo)
**deixou de ser** *"não tem mensalidade"* — que virou mentira — e **passou a ser** *"o encontro de
segunda é aberto, sem cadastro e sem pagar, e isso não muda"*.

## As 4 decisões do Alessandro

| # | Decisão |
|---|---|
| 1 | O lead do formulário recebe **só link do encontro + datas**. Ferramenta só via Conhecer/adesão. |
| 2 | O único presencial é o **IEP Talks, sábados 10h–12h**. UTFPR, Hard Rock e Habitat saem da copy. |
| 3 | O **ETT Player continua público** — tem portão de e-mail na entrada. Entra como CTA **secundário**. |
| 4 | Os **4 cartões de plano continuam** na home. |

*(A decisão #3 foi revisada no meio da sessão: a primeira resposta tinha sido "fechar o acesso
público", corrigida quando o Alessandro confirmou que o Player já tem autenticação.)*

## O que mudou (P0 + P1)

**Contradições eliminadas** em `HeroSimples`, `ComoE`, `home-faqs` (curta e longa), `LeadForm`,
`/online/`, `/curitiba/`, `/conversacao/`, `/agenda/`, `layout.tsx` e `HowItWorks`.

**Presencial unificado no IEP Talks** — inclusive no **card da home** (`ProximosEncontros.tsx`), que
ainda listava as quatro casas como rodízio semanal.

**Conversão:**
- Formulário promete só o que entrega; CTA secundário no sucesso leva ao teste de 30 dias.
- Hero: botão verde virou "Quero o link do próximo encontro"; "ver a sala" virou link secundário.
- **`components/CapturaRapida.tsx`** — faixa nova logo depois de `ProximosEncontros`. Antes, o único
  campo de e-mail ficava no fim da página, **depois** da seção de preços: quem não estava pronto pra
  decidir sobre plano ia embora antes de encontrar onde se cadastrar. A faixa não duplica o
  formulário de propósito (dois formulários iguais bagunçam a medição) — ela ancora em `#inscricao`.

## Dois achados extras, corrigidos na mesma passada

- **Havia dois caminhos de captura.** `/online/`, `/curitiba/`, `/conversacao/`, o blog e as
  indicações mandavam pra um **Google Form externo** (`forms.gle/jpK8bR4...`), com campos diferentes
  dos do formulário do site e tirando o visitante do domínio. Todos passaram a apontar pra
  `/#inscricao` (RD Station). **Se o Google Form era proposital, reverter é trocar a constante
  `FORM_URL` de volta nesses arquivos.**
- **`/curitiba/` anunciava "Sem encontros presenciais confirmados"** enquanto o resto do site dizia
  "todo sábado". A página filtrava `agendaEvents` **no build**, e o IEP Talks é gerado por regra.
  Criado **`components/ProximosPresenciais.tsx`**, que calcula no navegador via `eventosFuturos()`.
  É a terceira vez que essa armadilha aparece (agenda em 27/07, home antes disso) — **data de
  evento nunca no build.**

---

# Parte 5 — Aprendizados técnicos

## Screenshot de página com framer-motion (continuação)

Além do que já estava no `CLAUDE.md`:

- `--virtual-time-budget` **não resolve** — a captura sai com as animações pela metade.
- O que funciona é o override `[style*="opacity:0"]{opacity:1!important}`. **Não incluir
  `transform:none`** junto: isso zera o `scale-110` do fundo e desloca todo o layout.
- **Cuidado com viewport alto:** o hero é `min-h-[92vh]`, então uma janela de 5200px de altura
  estica o hero pra ~4800px e o resto da página some do enquadramento. Pra conferir uma seção
  específica, **extrair a seção** do HTML gerado pra um arquivo temporário com o CSS do build —
  e apagar o temporário antes do deploy (`webapp/out/` é espelhado na raiz).

## `.next/types` desatualizado depois de apagar rota

Ao remover um `page.tsx`, o `npx tsc --noEmit` falha com `TS2307: Cannot find module .../page.js`
apontando pra `.next/types/...`. **Não é erro real** — é tipo gerado obsoleto. Rodar `npm run build`
primeiro (que regenera) e só então o `tsc`.

---

# Pendências abertas

## Externas (não são deste repo)

1. **Pull no Hostinger** — 7 commits acumulados. Sem isso nada acima está em produção.
2. **Apagar os 4 leads de teste na conta RD** (`teste-claude-*@azuris.com.br`), da sessão de 31/07.
3. **Conferir onde caem os e-mails capturados pelo próprio ETT Player.** A tela de entrada é um
   portão de e-mail com aviso de "novidades por e-mail + convite do WhatsApp" — se não cai na RD, a
   base de leads está em três lugares (RD, Google Form das landings EN/ES, Player).
4. **Verificar se o conteúdo atrás do portão do Player é gated por plano.** O portão sozinho não
   separa pagante de visitante: qualquer pessoa entra digitando um e-mail.

## Copy / conteúdo

5. **Landings `/en/` e `/es/`** ficaram fora da revisão: ainda apontam pro Google Form, têm
   **depoimentos fictícios** e **não conhecem o modelo de cobrança novo**.
6. **Rodapé com âncoras mortas** — `/#sobre` e `/#parceiros` (×4) na home pt-BR. A correção
   proposta era apontar pra `/detalhes/#sobre` e dar `id="parceiros"` à faixa de logos.
   **Não foi aplicada** (o pedido virou outra coisa antes).
7. Post do blog `praticar-ingles-em-curitiba-gratis` ainda descreve a rotação por 4 locais
   (conteúdo datado de maio).
8. Kit `/divulgacao/convitesegunda20h/` ainda diz "sem mensalidade" (registro de e-mail já
   disparado, `noindex`).
9. Contagem de ferramentas: os planos agora dizem "todas as ferramentas"; `Tools.tsx` diz 10 e o
   Player mostra 12. **O número verdadeiro continua indefinido.**

## Do modelo de cobrança (herdadas de 31/07)

10. **Termos de uso e política de privacidade ainda falam de programa gratuito** — precisam cobrir
    plano pago, recorrência, reembolso e os 7 dias do CDC art. 49. **É o item de risco jurídico**, e
    ficou mais urgente agora que o checkout está ligado.
11. Gravar os 4 vídeos dos planos (roteiros em `novoConteudo/video-planos-conhecer/`).
12. Sequência de e-mails do dia 25 ao 35 — por onde passam ~90% das pessoas.
13. Acordos com IEP / Coders / Cherry Top / BeeTools por escrito.

## Antigas

- 🔴 **SSL `.com`/`.lat`** quebrado há ~3 meses (Namecheap). Bloqueia GSC.
- 🟡 Indicação semanal do parceiro parada desde 06/06.
- 🟡 Fotos reais dos encontros; hero ainda com imagem genérica; site sem favicon.

---

Última revisão: **2026-08-01**.
