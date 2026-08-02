# Contexto da sessão — 2026-08-02

Handoff da sessão de **2026-08-02**. Sessão curta, três blocos:

1. **Re-leitura do projeto** — o que a produção mostrou
2. **Ajuste de tom do funil** — o site pedia decisão cedo demais
3. **Descoberta: o deploy virou automático** — o `CLAUDE.md` estava errado em 6 lugares

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-08-01.md`.

---

## Commits desta sessão (todos em `origin/main`, todos já no ar)

| SHA | O quê |
|---|---|
| `f22e8a3` | Remove os 2 CTAs do hero; formulário passa a prometer informações por e-mail + contato da equipe |
| `abf7313` | CTA do topo vira "Tenho Interesse"; título do formulário deixa de convidar pro encontro |

---

# Parte 1 — Re-leitura

✅ **O pull dos 10 commits de 01/08 tinha sido feito** (produção com `last-modified: 02/08 00:57
UTC`). Conferido no ar: preços **R$ 67 / R$ 37 / R$ 370** na home, os dois checkouts
(`azuris.com.br/ett/{adesao,assinatura}`) respondendo 200, e todas as rotas principais em 200.

🔴 **SSL de `englishtalktime.com` e `.lat`**: reconferido, **nenhum dos dois responde**. ~3 meses.
Segue bloqueando o GSC.

🟡 **Indicação semanal do parceiro**: parada há ~8 semanas. O feed tem 10 artigos não publicados e
o elegível mais novo passou a ser **"O desconforto que ensina: o segredo ignorado no aprendizado de
idiomas"** (01/08, Dicas práticas) — casa com a copy do ETT sobre desconforto no encontro.

🟡 **`/agenda/` sem eventos datados futuros** — o último era o Cherry Top de 01/08. De 02/08 em
diante ela mostra só os recorrentes gerados (segundas online + IEP Talks aos sábados).

🟡 **Resíduo do deploy de ontem:** `/planos/` responde **403** (não 404). O diretório continua na
raiz sem `index.html` desde que a comparativa foi removida. Não quebra nada, mas é uma URL feia
para quem tiver o link antigo.

🟡 **Termos e Política ainda descrevem programa gratuito** — `app/termos-uso/page.tsx` cita
"gratuito" 5 vezes e tem **uma** menção a pagamento/reembolso. Com o checkout ligado, é o item de
risco jurídico da lista e não avançou.

---

# Parte 2 — Ajuste de tom do funil

Pedido do Alessandro, em duas mensagens. A segunda resume o diagnóstico melhor do que qualquer
análise: **"o texto 'Participe do próximo encontro' está muito direto... a pessoa só quer mais
informações."**

O site pedia decisão cedo demais. Quem chega numa landing de um programa que nunca ouviu falar não
quer *participar* — quer *entender*.

## O que mudou

| Onde | Antes | Agora |
|---|---|---|
| Hero (`HeroSimples.tsx`) | Botão verde "Quero o link do próximo encontro" + link "ou entre direto na sala" | **Sem CTA nenhum** |
| CTA do topo (`lib/i18n/messages.ts`) | "Quero participar" | **"Tenho Interesse"** |
| Título do formulário | "Participe do próximo encontro" | **"Quer saber mais sobre o ETT?"** |
| Botão do formulário | "Quero participar do próximo encontro" | **"Quero mais informações"** |
| Promessa (formulário + `CapturaRapida` + tela de sucesso) | Só link do encontro + datas | **Informações por e-mail + "entramos em contato para tirar suas dúvidas"** |

O CTA do topo é uma constante só (`nav['pt-BR'].cta`) lida pelo botão do desktop **e** pelo do menu
mobile — por isso aparece uma vez só no HTML gerado (o mobile só renderiza com o hambúrguer
aberto). `/en/` ("I want in") e `/es/` ("Quiero participar") ficaram como estavam: são landings à
parte e o pedido foi sobre o pt-BR.

## ⚠️ Isso reverte a decisão #1 de 01/08 — e cria uma promessa operacional

A decisão #1 tinha encolhido a promessa de propósito ("só link + datas"), porque prometer
acompanhamento lia-se como captura de vendas. A revisão de hoje vai na direção oposta, e é
coerente: **"Tenho Interesse" cria expectativa de retorno que "Quero participar" não criava.**

Mas agora **três textos da home prometem contato humano**. **Alguém precisa efetivamente responder
os leads** — se não acontecer, a copy nova é pior que a antiga, que não prometia nada. Falta
combinar **quem faz** e **em quanto tempo**. Registrado também no
`PLANO-REVISAO-MARKETING-2026-08-01.md`.

## Consequência a observar

**O hero ficou sem CTA.** O primeiro ponto de conversão da home passou a ser a faixa
`CapturaRapida`, logo depois de `ProximosEncontros`. Vale olhar a taxa de cadastro em alguns dias —
se cair, o caminho não é devolver os dois botões, é reforçar a faixa.

---

# Parte 3 — O deploy virou automático

**A descoberta mais importante da sessão**, porque corrige documentação que estava mandando todo
mundo (e toda sessão futura) fazer um passo manual desnecessário.

## O que aconteceu

Depois do primeiro deploy, encerrei com o lembrete de sempre — "falta o pull manual no hpanel". O
Alessandro respondeu colando o painel do Hostinger, que mostrava **"Conectado com GitHub"**,
implantação **concluída em 9s**, commit `f22e8a3`, branch `main`, diretório `public_html`.

Testado no deploy seguinte: **push às 14:12 UTC, produção com `last-modified` de 14:14 UTC, sem
ninguém tocar no painel.** Auto Deployment está ligado.

## O que mudou na documentação

Seis pontos do `CLAUDE.md` descreviam o pull como manual e obrigatório — todos corrigidos:
seção "Production URL", o passo 4 do "## Deploy", a limitação "não dispara o pull", o passo 5 do
fluxo semanal de indicação de parceiro, e a nota sobre imagens de e-mail.

**A regra nova:** `./deploy.sh` é ponta a ponta. Depois do push, conferir com
`curl -sI https://englishtalktime.com.br/ | grep -i last-modified` uns 2 minutos depois — e só usar
o botão "Reimplantar" do hpanel se o horário não tiver mudado.

## ⚠️ O que isso tira

Existia uma rede de proteção que ninguém tinha projetado: entre o push e o pull manual havia uma
janela para revisar o que ia ao ar. **Ela não existe mais.** Como o `deploy.sh` faz `git add -A`,
qualquer coisa na working tree é comitada e publicada em ~2 minutos. A limitação já documentada
("não rode o deploy com mudanças não relacionadas pendentes") passou de recomendação a regra séria.

---

# Pendências abertas

## Precisa de decisão sua

1. **Quem responde os leads, e em quanto tempo?** A home promete contato em três lugares desde
   hoje.
2. **Termos de uso e Política de privacidade** ainda falam de programa gratuito, com o checkout
   ligado. Recorrência, reembolso e os 7 dias do CDC art. 49 não estão cobertos. **É o item de
   risco jurídico.**

## Externas (não são deste repo)

3. **Apagar os 4 leads de teste na conta RD** (`teste-claude-*@azuris.com.br`), de 31/07.
4. **Conferir onde caem os e-mails capturados pelo portão do ETT Player** — a base pode estar em
   três lugares (RD, Google Form das landings EN/ES, Player).
5. 🔴 **SSL `.com`/`.lat`** quebrado há ~3 meses (Namecheap). Bloqueia o GSC.

## Copy / conteúdo

6. **Landings `/en/` e `/es/`** seguem fora de todas as revisões: Google Form externo, depoimentos
   fictícios e preços velhos.
7. **Indicação do parceiro** parada há ~8 semanas — elegível: *"O desconforto que ensina"* (01/08).
8. Post `praticar-ingles-em-curitiba-gratis` ainda descreve a rotação por 4 locais (maio).
9. Kit `/divulgacao/convitesegunda20h/` ainda diz "sem mensalidade" (`noindex`, registro de e-mail
   já disparado).
10. Contagem de ferramentas: planos dizem "todas", `Tools.tsx` diz 10, o Player mostra 12.
11. `/planos/` respondendo 403 na produção.
12. Gravar os 4 vídeos dos planos; sequência de e-mails do dia 25 ao 35; acordos de parceiro por
    escrito.
13. 🟡 Fotos reais dos encontros; hero ainda com imagem genérica; site sem favicon.

---

Última revisão: **2026-08-02**.
