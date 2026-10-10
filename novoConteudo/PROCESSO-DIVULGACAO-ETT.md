# Processo — Central de Divulgação do ETT

Versão **local e adaptada** do `PLAYBOOK-KIT-DIVULGACAO-PORTAVEL.md` (que veio do
DSSBR 2026, nesta mesma pasta). Leia este arquivo pra trabalhar; o playbook fica
como referência do original e explica o *porquê* de cada regra.

Gatilho: **"cria o kit de divulgação do [X]"**.

---

## 0. O que é um kit

Uma página compartilhável em `/divulgacao/{slug}/` que reúne **artes prontas por rede
+ textos prontos pra copiar + o e-mail HTML** de um assunto só. A promessa: *um link
resolve a divulgação* — a equipe (ou o parceiro) abre, copia o texto, baixa a arte e posta.

| | `/divulgacao/{slug}/` | `/blog/{slug}/` |
|---|---|---|
| O que é | Material de trabalho (kit) | Conteúdo público |
| Indexação | **`noindex, nofollow`**, fora do sitemap | Indexado, no sitemap |
| Quem abre | Equipe + parceiros | Público, Google |
| Preview de link | — | é esta URL que se cola no LinkedIn/WhatsApp |

**Nunca cole o link do kit no LinkedIn esperando prévia** — é noindex de propósito.
Cole `englishtalktime.com.br` ou a sala do encontro.

---

## 1. Ficha do ETT (preenchida)

```yaml
projeto:            ETT — English Talk Time
dominio:            https://englishtalktime.com.br
repo_local:         /home/binhara/ett/ett-site
kits_em:            webapp/public/divulgacao/{slug}/     # NUNCA na raiz do repo
# Identidade NOVA (desde 06/10/2026 — logo sem verde). Os 2 primeiros kits ainda usam a antiga (neon).
logo_svg:           webapp/public/images/ett-logo-horizontal-negativa.svg  # sobre fundo escuro
                    webapp/public/images/ett-logo-horizontal-positiva.svg  # sobre fundo claro
fundo:              #0A1630        cor_painel:  #0E1D3C   borda: #24395F
primaria (ação):    #D72229 (vermelho oficial; texto vermelho em fundo escuro: #F05A60)
secundaria:         #A8A9AC (prata)  marinho da marca: #162B4E
texto:              #F3F5F9        muted:       #A8B0C0
# legado (kits antigos): fundo #050510, neon #00FF9D, tech blue #00BFFF, Logo-ETT.png 212x132
fonte:              Inter (webapp/scripts/fonts/Inter-*.ttf — versionada p/ o PIL)
encontro_online:    toda segunda, 20h–21h30 (horário de Brasília)
sala:               https://ett-speak.vercel.app/
player:             https://ett-player.vercel.app/
plataforma_email:   RD Station (colar "Código HTML")
parceiros:          BeeTools · Cherry Top · Coders · IEP · UTFPR · Hard Rock · Habitat
hashtag_principal:  #EnglishTalkTime      # ← proposta, confirmar com o usuário
whatsapp_oficial:   (não definido)        # ← perguntar antes de usar em arte/texto
```

**Badges por tipo:**

| Tipo | Rótulo | Classe |
|---|---|---|
| Encontro (online/presencial) | `Encontro · recorrente` | `b-neon` |
| Imersão | `Imersão` | `b-peach` |
| Parceiro | `Parceria` | `b-blue` |
| Ferramenta (Player, Speak) | `Ferramenta` | `b-blue` |
| Anúncio / conteúdo | `Anúncio` | `b-peach` |

⚠️ **Parceiro ≠ patrocinador.** No ETT todos os nomes acima são **parceiros** (acordo de
comunidade), não patrocinadores. Não escrever "patrocinado por".

---

## 2. Estrutura

```
webapp/public/divulgacao/
├── index.html                  ← HUB (lista os kits) · noindex
├── README.md                   ← convenções da pasta
└── convitesegunda20h/          ← KIT PILOTO (clone este)
    ├── index.html              ← a página que se compartilha
    ├── email.html              ← o e-mail HTML pro RD Station
    ├── textos.md               ← os 5 blocos de texto
    ├── EmailTopNovo.jpg        ← banner do e-mail (NÃO mover: e-mail já disparado aponta pra cá)
    └── assets/
        ├── banner.png / .webp        1920×1080
        ├── og-1200x630.png           1200×630
        ├── feed-1080x1080.png        1080×1080
        ├── feed-1080x1350.png        1080×1350
        └── story-1080x1920.png       1080×1920

novoConteudo/_template-kit/      ← template com {{PLACEHOLDERS}} (fora de public/)
webapp/scripts/gerar-imagens.py  ← baseline letterbox (arte pronta → 5 formatos)
webapp/scripts/kits/build_encontro_segunda.py  ← composição por proporção (molde)
webapp/scripts/fonts/Inter-*.ttf ← Inter pro PIL (não vem instalada no sistema)
```

Scripts, template e docs ficam **fora de `public/`** de propósito: `public/` é servido cru
na web, e não faz sentido publicar `.py` e template com placeholder.

Slug: kebab-case, sem acento, curto — `imersao-curitiba`, `beetools-parceria`,
`ett-player`. (`convitesegunda20h` é legado: a pasta já existia como e-mail e **não pode
ser renomeada**, porque e-mails já disparados apontam pra imagem que está dentro dela.)

---

## 3. Fluxo

1. **Briefing:** tipo, título, fatos verificáveis (data/hora/local/preço), CTA, imagem-fonte,
   se vai ter post no blog junto.
2. **Ler a fonte de verdade no próprio site** antes de escrever — `webapp/components/`,
   `webapp/lib/agenda-events.ts`, a página da rota. **Não inventar número, data, nome ou
   credencial.** Se o dado não existe no repo, perguntar.
3. `cp -r novoConteudo/_template-kit webapp/public/divulgacao/{slug}`
4. **Artes** (§4) — 5 formatos, nomes canônicos.
5. **`textos.md`** com os 5 blocos (§5) + colar os mesmos textos nos `<pre>` do `index.html`.
6. **Preencher o `index.html`** — placeholders, badge, fatos, links. **Manter o noindex.**
7. **`email.html`** (§6), quando a campanha tiver e-mail.
8. **Card no hub** `webapp/public/divulgacao/index.html`, **sempre em primeiro**.
9. **Build + verificação visual** (§7), depois `./deploy.sh`. O Hostinger tem Auto Deployment
   (desde 02/08/2026): o push publica em ~2 min — conferir com `curl` (§7).

---

## 4. Artes

### 4.1 Especificação canônica

| Arquivo | Tamanho | Uso |
|---|---|---|
| `banner.png` + `banner.webp` | 1920×1080 | capa de post, hero do kit |
| `og-1200x630.png` | 1200×630 | prévia de link |
| `feed-1080x1080.png` | 1080×1080 | feed quadrado |
| `feed-1080x1350.png` | 1080×1350 | feed vertical (maior alcance no Instagram) |
| `story-1080x1920.png` | 1080×1920 | story / reels |

Nomes fixos. O `index.html` e o hub apontam pra eles.

### 4.2 Nível 1 — arte pronta → derivados

```bash
python3 webapp/scripts/gerar-imagens.py CAMINHO/arte-16x9.png \
        webapp/public/divulgacao/{slug}/assets
```

Só quando o material já vem pronto do designer. No 9:16 sobra ~60% de tarja — aceitável
pra aviso simples, **não** pra peça de destaque.

### 4.3 Nível 2 — composição por proporção (o padrão)

Helpers compartilhados em `webapp/scripts/kits/ett_kit.py` (fontes, wrap/auto-encolhimento,
fundo, chips de logo, rodapé, `gerar()`). Kit novo = copiar
`build_cherrytop_business_meal.py`, trocar `CONFIG` e o `render()`.
(`build_encontro_segunda.py`, o piloto, é standalone e **não** importa o módulo — não foi
refatorado pra não arriscar mudar arte já publicada.)

Cores de fundo diferenciam o kit sem sair da marca: azul no encontro de segunda, vinho no
da Cherry Top (parâmetros `bot=` e `glow=` de `background()`).

**Logo de parceiro vai em chip BRANCO**, nunca recolorida: a da Cherry Top tem texto
azul-marinho que sumiria no fundo escuro. E logo quadrada com muito respiro interno precisa
de chip maior que o do ETT pra ficar legível (a da Cherry Top vai 40–50% maior).

Regras aprendidas fazendo o kit piloto:

- Posicionar tudo em **frações de W/H** (`int(H*0.23)`), nunca em pixels fixos — o mesmo
  layout serve 1920×1080 e 1200×630.
- **Headline com auto-encolhimento** (`fit_block`): título comprido não atravessa a arte.
- **Recorte da foto muda por proporção.** Usar a grade 3×2 de rostos numa banda horizontal
  corta todo mundo ao meio; para banda existe um recorte só da linha de cima (`CROP_FAIXA`).
  Foi o primeiro erro desta arte.
- **Checar se o bloco de baixo cabe** antes de desenhar. No 1:1 o `sub` não cabe e é
  omitido por código — melhor omitir do que sobrepor o rodapé.
- **Rodapé empilha quando não cabe lado a lado** (aconteceu no 9:16, os textos se
  sobrepuseram na primeira rodada).
- **Story 9:16:** conteúdo dentro dos 90% centrais; rodapé sobe pra ~0.895H.
- **Inspecionar as 5 artes com o próprio olho** ao final. Gerar não é validar.

### 4.3b Nível 3 — arte em HTML/CSS fotografada no Chromium (o padrão desde 10/10/2026)

Kit `lancamento-dssbr-2026`: `node webapp/scripts/kits/build_lancamento_dssbr.mjs`. Cada formato é
uma página HTML (Inter de `scripts/fonts/` via `@font-face`, logo **SVG** negativa, fotos de
`public/images/`) e o Playwright tira o screenshot no tamanho exato. Vantagens sobre o PIL: usa a
logo vetorial e a identidade nova direto, texto quebra sozinho, ajuste é CSS. Mesmas regras de
layout: medidas em frações da largura (`u = W/100`), layout próprio por proporção (`wide`, `square`,
`tall`, `story`). O Chromium não exporta webp: `banner.webp` e o JPEG do e-mail saem pelo PIL
(comando no topo do script). Playwright: `/mnt/d/2026/01-enrequecimento/node_modules/playwright`
(máquina do Alessandro). **Kit novo = copiar este script**, não os de PIL.

Aprendido nesse kit: no 1:1 não cabe a linha extra embaixo da fileira de rostos (encosta) — omitir;
no 9:16 a fileira de rostos deixa um vazio grande no meio — usar a **lista** de palestrantes
(avatar + nome + organização + hora) em escala maior.

### 4.4 Ambiente (WSL)

| Item | Situação |
|---|---|
| Pillow | **12.2 disponível** — é a única ferramenta de imagem |
| `cwebp`, ImageMagick, `pngquant` | **ausentes** — WebP sai pelo próprio PIL |
| Inter | não instalada no sistema → `.ttf` versionados em `webapp/scripts/fonts/` |
| Fontes do sistema | Ubuntu (`/usr/share/fonts/truetype/ubuntu/`), DejaVu, Arial via `/mnt/c/Windows/Fonts/` |
| Emoji | **não há font de emoji** — emoji só nos textos das redes, nunca desenhado na arte |
| SVG | PIL não abre; `utfpr-logo.svg` precisa virar PNG antes de compor |
| Ruído `_distutils_hack` | cosmético do `python3`, ignore |

⚠️ **A logo do ETT (`Logo-ETT.png`) tem só 212×132 e não tem transparência.** Para as artes
do kit piloto a logo foi **recortada em alta do banner do e-mail**
(`novoConteudo/EttMeetOnline-segunda20h/EmailTopNovo.png`, 1672×941) e colocada dentro de
um chip navy que esconde a emenda. **Pedir ao usuário um logo vetorial/alta resolução**
resolveria isso de vez.

---

## 5. Copy — 5 blocos por kit

| Rede | Tamanho | Estrutura |
|---|---|---|
| LinkedIn | 2–4 parágrafos | emoji + manchete → o quê → por que importa → convite → link → 4-5 hashtags |
| Instagram | médio | gancho → 1 parágrafo → "link na bio" → hashtags |
| WhatsApp | 2–4 linhas | 📣 manchete → 1 linha → links |
| X | **≤280 caracteres contados** (URL conta 23) | frase + link + 2-3 hashtags |
| Repost | curto, **1ª pessoa** | pronto pro parceiro/participante colar |

### 5.1 Regras de copy do ETT (não negociáveis)

Herdadas do reposicionamento da home (ver `CLAUDE.md` e `CONTEXTO-SESSAO-2026-07-26.md`) —
o público lia o site como **infoproduto** e isso foi corrigido. Vale igual pro kit:

- **Fato verificável no lugar de promessa.** Nada de resultado em prazo, "salário Nx",
  "fluência em N meses".
- **O produto é o encontro**, não uma transformação de carreira.
- **Nada de escassez artificial** ("vagas limitadas") num encontro gratuito.
- **Sem vocabulário de lançamento**: "ecossistema de aceleração", "jornada do aluno",
  "N passos do iniciante ao global".
- **Métricas grandes** (300h, 3.000 palavras, %) e gamificação **só em `/detalhes/`** —
  não entram em arte nem em post.
- **Sem depoimento fictício.** Se não houver depoimento real assinado, não existe depoimento.
- **Fraseado neutro de gênero.** Nunca inferir gênero a partir do nome.

---

## 6. E-mail (RD Station)

Mesmas regras do `webapp/public/divulgacao/README.md`: tabelas aninhadas, 600px, CSS 100%
inline, `bgcolor` em todo `td`, botão com padding no `td`, preheader oculto, **imagem em
JPEG/PNG (nunca webp) com URL absoluta**, **nome de arquivo novo a cada versão** (cache de
7 dias no hosting), e comentário no topo com o passo a passo + sugestões de assunto.
O bloco de descadastro é inserido pela RD — não duplicar.

⚠️ As imagens do e-mail só carregam **depois que o deploy publicou** (~2 min após o push).
Conferir a URL da imagem com `curl` antes de disparar.

---

## 7. Publicação e verificação

```bash
cd webapp && npm run build          # confere que o kit aparece em webapp/out/divulgacao/
cd .. && ./deploy.sh "feat(divulgacao): kit {slug}"
# Auto Deployment do Hostinger publica em ~2 min. Se não mudar: hpanel.hostinger.com → Reimplantar
```

Checklist antes de entregar o link:

- [ ] `curl -o /dev/null -w '%{http_code}' https://englishtalktime.com.br/divulgacao/{slug}/` → **200**
- [ ] As 5 artes **foram olhadas** — sem texto cortado, sobreposição ou tarja vazia
- [ ] Botões **Copiar** funcionam (exigem HTTPS ou localhost; não funcionam via `file://`)
- [ ] Botões **Baixar** apontam pra arquivos que existem
- [ ] `<meta name="robots" content="noindex, nofollow">` presente
- [ ] Card no hub `/divulgacao/`, em primeiro
- [ ] ⚠️ **`git status` conferido** antes do deploy: arquivo/pasta untracked que não é desta sessão
      é do Alessandro — **perguntar** antes de publicar, nunca mover (ver abaixo)

### Armadilhas do ETT

- **Arquivo solto num diretório da raiz é APAGADO pelo `./deploy.sh`.** A pasta
  `divulgacao/` da raiz é cópia de build: o deploy faz `rm -rf` e recria a partir de
  `webapp/out/`. Já custou um banner (2026-07-26). Asset novo vai **sempre** em
  `webapp/public/...`.
- **Material que o Alessandro solta (ex.: `lancamento/` na raiz) é só leitura** — regra dele desde
  10/10/2026. Não mover, renomear, editar nem apagar (nem `:Zone.Identifier`); gerar cópia derivada
  em `webapp/public/...` e deixar o original. Outras sessões podem estar usando a mesma pasta.
- **O sitemap é gerado por `webapp/app/sitemap.ts`**, que só lista rotas do app — kits em
  `public/` ficam fora automaticamente. O `noindex` no HTML é a segunda trava.
- **`robots.txt` tem `Allow: /`** — não adicionar `Disallow: /divulgacao/`: isso impediria
  o Google de **ler** o `noindex`, que é o que de fato tira a página do índice.

---

## 8. Backlog de kits (ideias, em ordem de uso)

| Kit | Estado |
|---|---|
| `convitesegunda20h` — encontro online | ✅ piloto, feito |
| `cherrytop-business-meal` — atividade da Cherry Top, 01/08/2026 | ✅ feito (arte tipográfica, sem foto; usa `ett_kit.py`) |
| `lancamento-dssbr-2026` — lançamento do ETT no DSSBR, 27/10/2026 | ✅ feito em 10/10 (identidade nova, gerador HTML §4.3b, + lembrete da véspera; falta a foto da Maria Leonardo) |
| Refazer `convitesegunda20h` na identidade nova | pendente (e-mails já disparados apontam pra `EmailTopNovo.jpg` — não apagar) |
| Encontro presencial de Curitiba | ⛔ bloqueado: `agenda-events.ts` parado em 2026-06-04 |
| `ett-player` / `ett-speak` — ferramentas | pronto pra fazer (já tem screenshot real) |
| Parceiros (BeeTools, Cherry Top, Coders, IEP) | precisa alinhar o que cada acordo permite anunciar |
| Imersões (Curitiba, BH, Flórida) | precisa datas e fotos reais |
| As 3 trilhas / preços | copy delicada — respeitar §5.1 |

---

*Escrito em 2026-07-27, a partir do playbook do DSSBR e do kit piloto do ETT. Atualizado em 2026-10-10 (identidade nova, gerador HTML, deploy automático, regra de material do usuário).*
