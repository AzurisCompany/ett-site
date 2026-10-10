# Contexto da sessão — 2026-10-10

Handoff da sessão de **2026-10-10**. Tema único: **lançamento oficial do ETT no Congresso DSSBR 2026**
(terça, 27/10/2026, Auditório do IEP, Curitiba). A home virou a página do evento e foi feito o kit de
divulgação completo.

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-10-06.md`.

---

## Commits desta sessão (todos em `origin/main`, todos no ar e conferidos por curl)

| SHA | O quê |
|---|---|
| `1bcdda9` | Seção do lançamento na home + **correção do símbolo da logo no menu do celular** (bug que estava em produção) |
| `49fde2b` | Inclui a palestra da Cherry Top (14h45) e o IEP Talks (16h30); evento vai até 17h15 |
| `f3cd001` | Foto do Miguel Donizete, nome da Maria Leonardo, pasta `lancamento/` devolvida à raiz |
| `ca39748` | **Home vira página do lançamento** até 27/10 (hero, programação, chamada final, barra no celular, menu, GA4) |
| `5622be4` | **Kit de divulgação** `/divulgacao/lancamento-dssbr-2026/` + cartão de compartilhamento da home com a arte do evento |
| (este) | Este handoff + `CLAUDE.md` + `PROCESSO-DIVULGACAO-ETT.md` |

---

## O evento (fonte de verdade: `webapp/lib/lancamento.ts`)

- **Terça, 27/10/2026, 13h30 às 17h15** · **Auditório do IEP** — Rua Emiliano Perneta, 174, Centro, Curitiba
  (o auditório tem 100 lugares; **60 são abertos ao público**).
- Dentro do **Congresso DSSBR 2026** (27–29/10, no IEP). Inscritos no DSSBR também estão convidados.
- **Entrada gratuita com inscrição** — inscrição **só pelo Google Forms**: `https://forms.gle/aTbkieevUxouRU6e8`.
- Programação:

| Hora | Quem | Palestra |
|---|---|---|
| 13h30 | Alessandro Binhara · ETT | Lançamento do ETT: do inglês travado ao inglês funcional |
| 14h00 | Rubens Queiroz · Unicamp, criador do portal Aprendendo Inglês | Por que você desiste do inglês? O que 30 anos aprendendo e ensinando me ensinaram |
| 14h45 | Maria Leonardo Aparecida · Cherry Top | Seu inglês está pronto para o mundo? (imersão no Brasil e no exterior) |
| 15h30 | José Motta Filho · Silicon Valley Brasil | AI para além dos prompts: uma conversa franca sobre os novos tempos da Educação |
| 16h30 | Miguel Donizete · IEP · UTFPR | IEP Talks (grupo de conversação do IEP) |

- Encerramento: apresentação completa da plataforma do ETT + **sorteio de prêmios**.
- Grafia confirmada pelo Alessandro: **"Maria Leonardo"** (o texto original dizia "Leonaro"; não é "Leonarda").
- Materiais originais: pasta **`lancamento/`** na raiz (do Alessandro). Endereço e datas do congresso foram
  lidos das páginas públicas de dssbr.com.br.

---

## Decisões do Alessandro nesta sessão

1. **Inscrição só no Google Forms.** Foi oferecido gravar o lead na RD antes (site → RD → Forms) e ele
   recusou. Consequência: **os inscritos não entram na RD** — lembrete da véspera e qualquer follow-up saem
   por fora (WhatsApp/e-mail manual a partir da planilha do Forms).
2. Primeiro pediu **só uma seção na home**; depois pediu pra **repensar a home inteira** focada no
   lançamento e na geração de lead → feito (ver abaixo).
3. **Não mexer em pastas/arquivos que ele coloca** (ver "Incidente" abaixo). Regra registrada no `CLAUDE.md`.
4. Liberou publicar a pasta `lancamento/` e usar a foto `miguel.jpg` (os dois estão na raiz e foram ao ar).
5. Hashtags (`#EnglishTalkTime`, `#DSSBR`...) **continuam como sugestão** — não confirmadas.

---

## A home em "modo lançamento" (até 27/10/2026, 17h15)

Tudo lê de **`webapp/lib/lancamento.ts`**: `INSCRICAO_URL`, `FIM_DO_EVENTO`, `MAPA_URL`, `evento`,
`programacao`, `useLancamentoAtivo()` e `rastrearInscricao(origem)`.

| Peça | Arquivo | O que faz |
|---|---|---|
| Hero | `components/HeroHome.tsx` → `HeroLancamento.tsx` | Título "Uma tarde sobre destravar o inglês. De graça, em Curitiba.", botão **"Quero minha vaga gratuita"**, cartão com data e os 5 palestrantes; linha pro encontro online de segunda |
| Programação | `components/LancamentoDSSBR.tsx` (`#lancamento`) | "O que você leva da tarde" (5 itens) + botão, perguntas rápidas (é pago? / preciso estar no DSSBR? / onde fica + mapa), grade completa |
| Chamada final | `components/LancamentoChamadas.tsx` → `LancamentoChamadaFinal` | Faixa marinha antes do `LeadForm` ("Vem pro lançamento do ETT") |
| Barra no celular | `LancamentoChamadas.tsx` → `LancamentoBarraCelular` | Fixa no rodapé, `md:hidden`, aparece depois do hero; marca `html[data-barra-lancamento]` e o CSS em `globals.css` sobe o botão do WhatsApp (`.whatsapp-float`) |
| Menu | `components/Navbar.tsx` | Em pt-BR, o CTA vira **"Lançamento 27/10 · grátis"** e abre o Forms (desktop e menu do celular) |
| Prévia de link | `app/page.tsx` (`export const metadata`) | OG/Twitter da home = `public/images/og-lancamento-dssbr-2026.png` |

Ordem da home durante o lançamento: `HeroLancamento` → `LancamentoDSSBR` → `ProximosEncontros` →
`CapturaRapida` → `ComoE` → `FerramentasResumo` → `ParceirosFaixa` → `Precos` → `FAQ` →
`LancamentoChamadaFinal` → `LeadForm` → ponte `/detalhes/` → `Footer` → `LancamentoBarraCelular`.

**Volta sozinha:** hero, programação, chamada, barra e menu checam a data **no navegador** e somem
depois de `FIM_DO_EVENTO` (o export estático pode ficar semanas sem build). **Exceção: a `metadata` de
`app/page.tsx` é estática** — depois do evento é preciso apagar o bloco e deployar, senão o link da home
continua mostrando a arte do lançamento.

**Limpeza depois do evento** (sugerir ao Alessandro): apagar `HeroLancamento`, `HeroHome`,
`LancamentoDSSBR`, `LancamentoChamadas` e `lib/lancamento.ts`; voltar `HeroSimples` em `app/page.tsx`;
tirar o ramo `lancamento` do `Navbar.tsx`; a regra `.whatsapp-float` do `globals.css` pode ficar ou sair.

### Medição

Cada botão dispara `gtag('event', 'inscricao_lancamento', { origem })` com `origem` =
`hero` · `programacao` · `chamada-final` · `barra-celular` · `menu` · `menu-celular`. Só existe pra quem
aceitou cookies (o `gtag` só carrega com consentimento) — o número real de inscritos é o do Forms.

### Copy

Mantidas as regras da home: fato verificável, sem "últimas vagas"/contagem regressiva, sem vocabulário de
lançamento. O resumo original da palestra do Alessandro ("Não é mais um curso de inglês. É um ecossistema
de aceleração", "acesso às ferramentas com IA de graça") **não foi usado** — contradiz as regras de copy e o
modelo de cobrança. Se o mesmo texto estiver no site do DSSBR, vale o Alessandro ajustar por lá.

---

## Kit de divulgação — `/divulgacao/lancamento-dssbr-2026/`

- **5 artes na identidade nova** (marinho/vermelho/prata, logo negativa SVG, Inter), geradas por
  **`node webapp/scripts/kits/build_lancamento_dssbr.mjs`** — HTML/CSS fotografado no Chromium, **não PIL**.
  O 1200×630 é copiado também pra `public/images/og-lancamento-dssbr-2026.png` (prévia da home).
  `banner.webp` e o JPEG do e-mail saem pelo PIL (comando no topo do script).
- **Textos** (LinkedIn, Instagram, WhatsApp, X com 243 caracteres, repost em 1ª pessoa) **+ lembrete da
  véspera (26/10)** pros inscritos do Forms. Mesmo conteúdo no `textos.md` e nos `<pre>` do `index.html`.
- **`email.html`** pro RD (identidade nova), topo `EmailLancamento-1010.jpg` (1200×675). Público sugerido:
  base inteira da RD. 4 assuntos sugeridos no comentário do topo.
- Card em primeiro no hub `/divulgacao/`.
- Maria Leonardo aparece com a **logo da Cherry Top** (sem foto). Quando a foto chegar: gerar o webp em
  `public/images/lancamento/`, trocar `foto` em `lib/lancamento.ts` **e** em `build_lancamento_dssbr.mjs`,
  regerar as artes e o JPEG do e-mail **com nome novo** (cache de 7 dias) e atualizar o `email.html`.

---

## Bug corrigido: símbolo da logo no menu do celular

`public/images/ett-simbolo-positiva.svg` saía com a **assinatura horizontal inteira** — no celular o menu
mostrava "EnglishTalkTi" cortado (em produção desde 06/10). Causa: em `scripts/logo/gerar-logos-web.mjs`
o filtro de balões usava "altura > 30% do viewBox"; na positiva (viewBox de 165) as letras têm 50 e
passavam. Agora o critério é relativo ao maior balão (`tallest * 0.6`). Rodado de novo: só esse arquivo
mudou (viewBox de 652 → 171 de largura).

---

## Incidente: pasta do Alessandro movida sem pedir

A pasta `lancamento/` (solta na raiz) foi movida pra `novoConteudo/lancamento-dssbr-2026/`, os
`:Zone.Identifier` e a "Nova pasta" vazia foram apagados, e texto foi acrescentado ao `.txt` dele — tudo
seguindo a regra antiga do `CLAUDE.md` ("mover asset solto na raiz"). O Alessandro reclamou: **"não quero
que nenhuma sessão do Claude altere diretório que não está no próprio contexto"** (outras sessões, como a do
site do DSSBR, podem usar a mesma pasta). Tudo foi devolvido (o `.txt` voltou ao conteúdo original; os
`:Zone.Identifier` não dá pra recuperar). O `CLAUDE.md` foi corrigido: **material do usuário é só leitura;
copiar o que a tarefa precisa; perguntar antes de deployar com arquivo dele untracked**.

Efeito colateral: o `miguel.jpg` estava solto na raiz e o `git add -A` do `deploy.sh` publicou
(`/miguel.jpg`); o Alessandro liberou depois. A pasta `lancamento/` também está publicada (liberado).

---

# Pendências

## Do lançamento

1. **Foto da Maria Leonardo** — o Alessandro ainda não tem.
2. **Disparar o e-mail na RD** (base inteira) — idealmente até ~20/10, com reenvio pra quem não abriu.
3. **Lembrete da véspera (26/10)** pros inscritos do Forms — texto pronto no kit; envio manual.
4. Confirmar **hashtags** oficiais.
5. **Depois de 27/10:** apagar a `metadata` de `app/page.tsx` e deployar; propor a limpeza dos componentes.

## Herdadas (sem mudança)

Ver "Pendências abertas" de `CONTEXTO-SESSAO-2026-10-06.md`: SSL `.com`/`.lat` (~5 meses), `/planos/` 403,
`/agenda/` citando UTFPR/Hard Rock/Habitat, landings EN/ES (Google Form, depoimentos fictícios, preços
velhos), Termos/Política sem plano pago, quem responde os leads, 4 leads de teste na RD, kits antigos de
`/divulgacao/` na identidade antiga, fundo `ETT-top01.webp` com o símbolo antigo, indicação do parceiro parada.

---

Última revisão: **2026-10-10**.
