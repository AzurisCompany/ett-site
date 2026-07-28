# Contexto da sessão — 2026-07-27

Handoff da sessão de **2026-07-27**. Quatro blocos:

1. **Re-leitura do projeto** — o que estava pendente e o que já tinha sido resolvido sem registro
2. **Central de Divulgação** — sistema de kits portado do DSSBR + kit piloto do encontro de segunda
3. **Kit CherryTop Business Meal** — atividade da parceira, sábado 01/08
4. **Agenda + post no blog** — o evento no calendário do site e o post com CTA pro formulário

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-07-26.md`.

---

## Commits desta sessão (todos em `origin/main`)

| SHA | O quê |
|---|---|
| `57454e5` | Central de kits: hub, template, geradores de arte, fontes Inter e kit do encontro de segunda |
| `1d74826` | Kit CherryTop Business Meal + módulo compartilhado `ett_kit.py` |
| `90beffd` | `.gitignore` do `__pycache__` dos geradores |
| `273d3c3` | Evento na agenda (agora com datas calculadas no cliente) + post no blog + link da sala em tudo |

⚠️ **Pull no Hostinger pendente** no fim da sessão. Sem ele nada disso aparece em produção — e o
e-mail do Business Meal sai com a imagem quebrada, porque o banner é servido por URL absoluta
deste site.

---

# Parte 1 — Re-leitura do projeto

Correções ao que estava registrado:

- ✅ **O pull do `2839a12` (home nova) FOI feito.** Produção com `last-modified: 27/07 01:55`,
  home com as 3 trilhas, `/detalhes/` e `/divulgacao/convitesegunda20h/` respondendo 200.
  A pendência nº 1 do handoff de 26/07 está fechada.
- ❌ **A `/agenda/` não estava "vazia"** (foi o que eu disse primeiro, errado): ela mostrava a
  lista **congelada** de "11 de maio a 4 de junho", com todos os eventos já passados e o título
  do período escrito à mão. Corrigido nesta sessão — ver Parte 4.
- 🔴 **SSL de `englishtalktime.com` e `.lat` continua quebrado** (reconferido em 27/07: nenhum
  dos dois responde em `https://`). Vai para 3 meses. É configuração no Namecheap e bloqueia
  adicionar os domínios no GSC.
- 🟡 Indicação semanal do parceiro segue parada desde 06/06. Dos 10 artigos não publicados no
  feed, o único elegível pela regra continua sendo *"A Verdade Sobre Aulas de Conversação em
  Inglês"* (26/07, Dicas práticas) — os outros 9 são Vídeo/Song/Story.

---

# Parte 2 — Central de Divulgação (kits)

## O que é

Sistema portado do **DSSBR 2026** (12 kits em produção). O usuário copiou o playbook portátil
para `novoConteudo/PLAYBOOK-KIT-DIVULGACAO-PORTAVEL.md`; a versão adaptada ao ETT — que é a que
se lê pra trabalhar — está em **`novoConteudo/PROCESSO-DIVULGACAO-ETT.md`**.

Um kit é uma página compartilhável em `/divulgacao/<slug>/` com **artes em 5 formatos + textos
por rede + o e-mail HTML**. A promessa: *um link resolve a divulgação* — a equipe e o parceiro
abrem o mesmo link, copiam o texto, baixam a arte e postam.

**Gatilho pra sessões futuras:** *"cria o kit de divulgação do [X]"*.

## Decisão de estrutura (o usuário escolheu)

`/divulgacao/<slug>/index.html` passou a ser a **página do kit**; o HTML cru do e-mail virou
`email.html` na mesma pasta. Ou seja, a convenção antiga ("cada pasta é um e-mail") foi
absorvida, não duplicada.

```
webapp/public/divulgacao/
├── index.html                  ← HUB (lista os kits) · noindex
├── README.md                   ← convenções da pasta
├── convitesegunda20h/          ← kit piloto (slug legado, ver abaixo)
└── cherrytop-business-meal/

novoConteudo/_template-kit/                     ← template com {{PLACEHOLDERS}}
novoConteudo/PROCESSO-DIVULGACAO-ETT.md         ← o processo
webapp/scripts/gerar-imagens.py                 ← baseline letterbox
webapp/scripts/kits/ett_kit.py                  ← helpers de layout (kits novos importam)
webapp/scripts/kits/build_*.py                  ← um gerador por kit
webapp/scripts/fonts/Inter-*.ttf                ← Inter versionada (o PIL não acha no sistema)
```

Scripts, template e docs ficam **fora de `public/`** de propósito: `public/` é servido cru na
web e não faz sentido publicar `.py` nem template com placeholder.

## Regras que valem sempre

- **Kit é `noindex, nofollow`** e fica fora do sitemap (o `app/sitemap.ts` só lista rotas do
  app, então `public/` já fica de fora automaticamente). Kit é material raso e repetitivo —
  indexar derruba o score médio do site.
- **Link colado no LinkedIn/WhatsApp pra gerar prévia é o do site ou do post**, nunca o do kit.
- **`robots.txt` não pode ganhar `Disallow: /divulgacao/`** — isso impediria o Google de *ler*
  o `noindex`, que é o que de fato tira a página do índice.
- `convitesegunda20h` é **slug legado e não pode ser renomeado**: e-mails já disparados apontam
  pra `EmailTopNovo.jpg` dentro dessa pasta.

## Kit piloto — encontro de segunda

`/divulgacao/convitesegunda20h/` — 5 artes compostas por proporção, 5 blocos de texto, e o
e-mail que já existia. Logo e foto recortadas em alta do banner do e-mail
(`novoConteudo/EttMeetOnline-segunda20h/EmailTopNovo.png`, 1672×941).

---

# Parte 3 — Kit CherryTop Business Meal

`/divulgacao/cherrytop-business-meal/` — **atividade da Cherry Top; o ETT divulga.**
Isso está escrito em todos os textos. Não é "patrocínio" e não é atividade do ETT.

## Fatos (conversa com a Leonarda, 27/07/2026)

| | |
|---|---|
| Atividade | CherryTop Business Meal |
| Quando | sábado, **01/08/2026, 12h–13h** (01/08/2026 é sábado, conferido) |
| Onde | online — sala **https://ett-speak.vercel.app/r/cherrytop** |
| Alvo | Negotiation, Networking & Team Building |
| Grupo | https://chat.whatsapp.com/LEpi3Cm9cWv20kBHg5xjdb (vagas + one-to-one da tarde) |
| Preço | gratuito — **confirmado com o Alessandro**, não estava na mensagem dela |

Os dois links têm papéis distintos e ambos aparecem nos textos: **sala** = onde o encontro
acontece; **grupo** = vagas e o atendimento one-to-one de sábado à tarde (só pra quem está no
grupo).

## ⚠️ Suposições a confirmar com a Leonarda

1. **Fuso horário.** Ela escreveu "12 as 13 horas" sem fuso; está sendo comunicado como
   **horário de Brasília**.
2. **Link do grupo sem os parâmetros de rastreio** (`?s=cl&p=a&ilr=4&amv=3`) que vieram na
   mensagem. Se ela quiser medir origem, é trocar de volta.

## Fora do kit, de propósito

A **imersão em Curitiba (30/10 a 03/11)** que ela sugeriu no meio da conversa ainda é proposta
— vira kit próprio quando as datas fecharem.

---

# Parte 4 — Agenda e post no blog

## Agenda (`/agenda/`)

Antes: lista estática em `webapp/lib/agenda-events.ts` parada em 04/06, renderizada inteira
(sem filtro de data), com o período **escrito à mão** no título ("Encontros de 11 de maio a 4
de junho"). Ou seja: quem abria via encontros que já tinham acontecido.

Agora:

- **`eventosFuturos(semanas)`** (em `lib/agenda-events.ts`) mescla os eventos datados que ainda
  não passaram com as **segundas geradas por regra** (`encontrosOnlineRecorrentes`), ordenadas.
- **`Agenda.tsx` calcula no navegador** (`useEffect` + skeleton), pelo mesmo motivo do
  `ProximosEncontros` da home: o site é export estático e um build de semanas atrás mostraria
  data vencida.
- O título do período e os contadores passaram a ser derivados da lista.
- `AgendaEvent` ganhou `links?: {url,label}[]` e `partner?` — o card mostra os links de entrada
  e o selo do parceiro.
- O CTA do fim da página dizia **"Inscreva-se e receba o ebook da Fórmula Fluente"** e apontava
  pra um Google Form — resquício que o reposicionamento da home de 26/07 tinha mandado apagar.
  Virou "Tenho interesse" → `/#inscricao`.

## Post no blog

`/blog/cherrytop-business-meal/` — capa própria (derivada da arte do kit), os três temas
explicados, como participar (sala + grupo), o one-to-one da tarde, e o CTA
**"Tenho interesse — quero receber as datas dos encontros"** apontando pro formulário em
`/#inscricao`. Tem JSON-LD de `Event` além do `BlogPosting`. Entra no sitemap automaticamente
via `blog-posts.ts`.

---

# Aprendizados técnicos (pra não repetir)

## Geração de arte (PIL)

- **Posicionar tudo em frações de W/H**, nunca em pixels: o mesmo layout serve 1920×1080 e
  1200×630.
- **Headline com auto-encolhimento** (`fit_block`), senão título comprido atravessa a arte.
- **O recorte da foto muda por proporção.** Usar a grade 3×2 de rostos numa banda horizontal
  corta todo mundo ao meio — existe um recorte só da linha de cima (`CROP_FAIXA`) pra isso.
- **Checar se o bloco de baixo cabe** antes de desenhar: no 1:1 o subtítulo é omitido por
  código, o que é melhor do que sobrepor o rodapé.
- **Rodapé empilha quando não cabe lado a lado** — no 9:16 os dois textos se sobrepuseram na
  primeira rodada.
- **Logo de parceiro vai em chip branco**, nunca recolorida (a da Cherry Top tem texto
  azul-marinho que sumiria no fundo escuro). Logo quadrada com muito respiro interno precisa de
  chip 40–50% maior que o do ETT pra ficar legível.
- **Inspecionar as 5 artes com o próprio olho.** Gerar não é validar — os dois defeitos acima só
  apareceram ao olhar.

## Ambiente (WSL)

- Pillow 12.2 é a única ferramenta de imagem: **não há `cwebp`, ImageMagick nem `pngquant`**.
- **Não há font de emoji** — emoji só nos textos das redes, nunca desenhado na arte.
- Inter não está instalada; os `.ttf` foram baixados do Google Fonts (`css2` + User-Agent de
  navegador; a API v1 devolve URL sem extensão que o PIL não abre) e versionados em
  `webapp/scripts/fonts/`.
- Screenshot headless: usar o chromium do Playwright (`~/.cache/ms-playwright/chromium-*/`).

## Next / conteúdo

- **`<strong>` dentro de `<a>` no prose do blog mata a cor do link** — o link fica parecendo
  texto comum. Deixar o `<a>` sem `<strong>` dentro.
- `__pycache__` dos geradores entrou num commit; agora está no `.gitignore`.

---

# Pendências abertas

## Imediatas (esta semana)

1. **Pull no `hpanel.hostinger.com`** — publica kit, post, agenda corrigida e o e-mail.
2. **Confirmar com a Leonarda** o fuso do horário e a gratuidade antes de disparar o e-mail.
3. **Disparar o e-mail do Business Meal** (RD Station → Código HTML) depois do pull —
   a atividade é **sábado 01/08**.

## Antigas

- 🔴 **SSL `.com`/`.lat`** quebrado há ~3 meses (Namecheap). Bloqueia GSC.
- 🔴 **Criar `cf_trilha_ett` e `cf_faixa_plano_mensal` na RD** — sem os campos, a pesquisa de
  precificação das trilhas é descartada silenciosamente.
- 🟡 **Logo do ETT em alta/vetorial.** A `Logo-ETT.png` tem 212×132 e sem alpha; as artes usam
  um recorte do banner do e-mail dentro de um chip.
- 🟡 **Hashtag principal** (`#EnglishTalkTime` é proposta minha) e **WhatsApp oficial do ETT**
  (não existe no repo) nunca foram confirmados.
- 🟡 **Datas reais dos encontros presenciais** — a agenda hoje gera as segundas online, mas os
  presenciais de Curitiba precisam ser cadastrados à mão em `agenda-events.ts`.
- 🟡 Fotos reais dos encontros; números verdadeiros de comunidade.
- 🟡 Depoimentos fictícios ainda nas homes `/en/` e `/es/`.
- 🟡 Avaliar se "salários 5x" e "Jackpot mensal" saem também de `/detalhes/`.
- 🟡 Indicação semanal do parceiro parada desde 06/06.
- 🟡 O site não tem favicon.

## Backlog de kits

| Kit | Estado |
|---|---|
| `convitesegunda20h` | ✅ feito (piloto) |
| `cherrytop-business-meal` | ✅ feito |
| ETT Player / ETT Speak | pronto pra fazer (já tem screenshot real) |
| Parceiros (BeeTools, Coders, IEP) | alinhar o que cada acordo permite anunciar |
| Imersões (Curitiba, BH, Flórida) | precisa datas e fotos reais |
| As 3 trilhas / preços | copy delicada — respeitar as regras anti-infoproduto |

Última revisão: **2026-07-27**.
