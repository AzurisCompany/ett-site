# Contexto da sessão — 2026-10-06 (entrou pela madrugada de 07/10)

Handoff da sessão de **2026-10-06**. Primeira sessão depois de ~2 meses parado (a anterior é de
02/08). Quatro blocos:

1. **Re-leitura do projeto** — o que a produção mostrou depois de 2 meses
2. **Logo nova** — 1ª entrega com verde (errada), depois a correta (marinho/vermelho/prata)
3. **Tema marinho** com a logo correta — publicado, com backup e auditoria de cor
4. **Tema claro** (fundo branco, logo positiva) — decisão do Alessandro, é o que está no ar

**Leia este arquivo primeiro** — é o mais novo. Anterior: `CONTEXTO-SESSAO-2026-08-02.md`.

---

## Commits desta sessão (todos em `origin/main`, todos no ar)

| SHA | O quê |
|---|---|
| `3c0b547` | Logo nova (marinho/vermelho/prata) no menu, rodapé e favicon + tema marinho + pasta da logo arquivada |
| `873a520` | Cartão de compartilhamento (OG) com a logo nova + imersão Flórida sem roxo |
| `a9b8246` | **Tema claro** — cores semânticas por variável CSS, rodapé marinho, contraste AA auditado nas 33 rotas |
| (este) | Este handoff |

## Backups da produção (antes de cada troca grande)

| Tag git (no GitHub) | Commit | O que guarda |
|---|---|---|
| `backup-producao-2026-10-06-pre-logo` | `66d8e49` | Site como estava desde 03/08: tema neon (verde `#00FF9D` / azul `#00BFFF`), logo antiga |
| `backup-producao-2026-10-06-tema-escuro` | `873a520` | Tema marinho com a logo nova (no ar entre 22:52 de 06/10 e 02:54 UTC de 07/10) |

Além das tags, há um arquivo local da versão pré-logo:
`/home/binhara/ett/backups-ett-site/backup-producao-2026-10-06-pre-logo.tar.gz` (114 MB, `git archive`).

**Pra voltar a uma delas:** o hosting serve a raiz do `main`, então basta trazer os arquivos da tag
de volta pro `main` (ex.: `git checkout <tag> -- .` na raiz, conferir, commitar e dar push). Não
rodar `deploy.sh` nesse caso — ele rebuilda a partir de `webapp/` e sobrescreveria a raiz.

---

# Parte 1 — Re-leitura (06/10)

- ✅ Nenhum commit desde `66d8e49` (02/08); produção com `last-modified: 03/08 02:38 UTC`.
  Rotas principais e os 2 checkouts (`azuris.com.br/ett/{adesao,assinatura}`) em 200.
- 🟡 `/planos/` segue respondendo **403** (diretório sem `index.html`).
- 🔴 **SSL de `englishtalktime.com` e `.lat`**: os dois ainda dão timeout — **~5 meses**. Bloqueia o GSC.
- 🟡 **Feed do parceiro Aprendendo Inglês**: o item mais novo é de **07/09** (parceiro parou de
  publicar há 1 mês, ou o feed travou). Os 10 da janela do RSS são todos Vídeo/Song/Story — **nenhum
  elegível pela regra**. Os elegíveis de 01–02/08 (*"Persistência, Constância e Método"*, *"O
  desconforto que ensina"*) saíram da janela, mas dá pra publicar pela URL direta.
- 🟡 As 13 pendências do handoff de 02/08 continuam abertas (ver "Pendências" no fim).

---

# Parte 2 — Logo nova

## Duas entregas — a primeira estava errada

| Entrega | Onde está agora | Cores | Status |
|---|---|---|---|
| 17/09 | `novoConteudo/identidade-visual-2026/_v1-descartada-com-verde/` | marinho, vermelho, **verde `#8DC63F`** | **Descartada — não usar** |
| 06/10 | `novoConteudo/identidade-visual-2026/logo-ETT/` (`.ai`, PDF, PNG, SVG) | marinho `#162B4E`, vermelho `#D72229`, prata `#A8A9AC`, cinza `#59595B` (subtítulo da positiva) | **Correta** |

O Alessandro soltou as duas na raiz (`novalogo/`). As duas foram movidas pra `novoConteudo/` — **na
raiz elas iriam pro ar** no próximo `deploy.sh` (`git add -A`), com o `.ai` de 2 MB, os PDFs e os
`:Zone.Identifier` do Windows (apagados).

Variantes da correta: Horizontal, Institucional (balões em cima) e Monocromática, cada uma
Positiva (fundo claro) e Negativa (fundo marinho). O SVG "Horizontal — Negativa" do cliente traz
uma **camada antiga de balões verdes escondida** sob a prata — o gerador descarta.

## Como a logo entra no site — gerada, não editada à mão

`node webapp/scripts/logo/gerar-logos-web.mjs` lê `novoConteudo/identidade-visual-2026/logo-ETT/SVG/`,
tira o retângulo de fundo, recorta o viewBox no bbox real (medido no Chromium), troca as classes
`.cls-N` por `fill` direto (CSS de SVG inline é global: uma logo pintava a outra) e descarta a
camada verde. Saídas:

| Arquivo | Uso |
|---|---|
| `public/images/ett-logo-horizontal-positiva.svg` | **Menu** (sm+) |
| `public/images/ett-simbolo-positiva.svg` | **Menu no celular** (só os balões) |
| `public/images/ett-logo-institucional-negativa.svg` | **Rodapé** (marinho) |
| `public/images/ett-logo-horizontal-negativa.svg`, `ett-simbolo.svg`, `ett-logo-institucional-positiva.svg` | Reserva / base do favicon |
| `public/images/ett-logo-2026.png` | JSON-LD (`logo` da Organization) |
| `app/icon.svg` + `app/apple-icon.png` | **Favicon** — o site não tinha nenhum |

⚠️ O gerador importa o Playwright de `/mnt/d/2026/01-enrequecimento/node_modules/playwright`
(caminho da máquina do Alessandro). Se mudar de máquina, ajustar a linha 9.

## Cartão de compartilhamento

`public/images/og-ett-2026.png` (1200×630, logo institucional sobre marinho, faixa vermelha
embaixo). É o `og:image`/`twitter:image`/`image` do JSON-LD em 25 páginas — antes era
`ETT-top01.webp`, uma arte com o **símbolo antigo** (balões com bandeiras). `ETT-top01.webp` segue
só como foto de fundo desfocada dos heros e capa de Curitiba em `Imersoes.tsx`. As 4 páginas com
imagem própria (2 posts, imersões BH e Flórida) mantêm a delas.

---

# Parte 3 — Tema marinho (intermediário, ficou ~4h no ar)

Primeiro tema com a logo correta: o escuro existente com o neon trocado — fundo marinho, vermelho
como ação, prata como secundária. Tokens renomeados `neon-green`→(`brand-green`→)`brand-red` e
`tech-blue`→`brand-silver` em ~48 arquivos.

**Auditoria de cor** nas 33 rotas publicadas (cor calculada de todo elemento, via Playwright):
nenhum resto do neon. Corrigido o roxo da imersão Flórida (`Imersoes.tsx`, `ImersoesTeaser.tsx`).
Intencionais: verde do WhatsApp, bolinhas vermelha/amarela/verde de "janela" (`PlayerShowcase`,
`FerramentasResumo`), cores dos níveis de gamificação em `/detalhes/`.

---

# Parte 4 — Tema claro (o que está no ar)

## A decisão

Ao pedir "reanalise a logo e refaça o tema", o Alessandro escolheu entre 3 opções — **Claro
(fundo branco)**, Misto (branco + faixas marinhas) ou Manter escuro e refinar — a **Claro**, igual
à versão positiva da logo, com **rodapé marinho**.

## Como foi feito — cores semânticas por variável CSS

O site inteiro tinha sido escrito pra fundo escuro (~400 `text-white`, ~430 tons de cinza claros).
Em vez de trocar valor por valor, as cores viraram **papéis**, e o valor de cada papel vem de uma
variável CSS:

| Token Tailwind | Papel | Claro (`:root`) | Escuro (`.tema-escuro`) |
|---|---|---|---|
| `surface` | fundo da página | `#FFFFFF` | `#0A1630` |
| `surface-alt` | seção alternada | `#F3F5F9` | `#0E1D3C` |
| `surface-card` | card | `#F7F9FC` | `#132649` |
| `surface-line` | borda/divisória | `#DCE1EA` | `#24395F` |
| `ink` | título (era `text-white`) | `#162B4E` marinho | branco |
| `ink-soft` | texto corrido (era `gray-300`) | `#2D3748` | `#D1D5DB` |
| `ink-muted` | secundário (era `gray-400`) | `#4B5563` | `#9CA3AF` |
| `ink-subtle` | legenda (era `gray-500`) | `#5F6877` | `#8C95A3` |
| `ink-faint` | placeholder (era `gray-600/700`) | `#606876` | `#949CAA` |
| `brand-red` | texto/borda/tinta vermelha | `#BC1E24` | `#F05A60` |
| `brand-red-deep` | botão sólido (sempre `text-white`) | `#D72229` oficial | igual |
| `brand-silver` | secundária | `#5E6065` | `#A8A9AC` |

- **`.tema-escuro`** em qualquer elemento devolve o marinho pra tudo dentro dele, sem mudar o
  componente. Usado no **rodapé** e nos **lightboxes** de foto das imersões.
- O vermelho e o prata de **texto** no claro são um tom abaixo dos oficiais: o oficial `#D72229`
  dá 4,6:1 sobre a tinta vermelha clara (`bg-brand-red/15`), abaixo de AA. Botões e fundos sólidos
  usam o oficial.
- A conversão foi feita por **`webapp/scripts/tema/tema-claro.mjs`** (já rodado; idempotente). Ele
  trata cada string de classes isoladamente: `text-white` vira `text-ink`, **exceto** quando a mesma
  string pinta um fundo sólido (vermelho, marinho, preto) — aí é texto sobre cor e fica branco.
- Menu passou pra logo **positiva**; `themeColor` do navegador virou `#FFFFFF`.

**Regra pra quem mexer daqui pra frente:** cor só via esses tokens. Nada de `text-white` (a não
ser sobre fundo sólido), `gray-N`, `bg-white/N` ou hex em componente.

## Como foi conferido

- **Auditoria de contraste automática** nas 33 rotas (script em Playwright: cor real de cada texto
  contra o fundo efetivo, compondo transparências e opacidade). 1ª rodada: 245 trechos abaixo de
  AA → todos corrigidos (rodapé, selos vermelhos/prata sobre tinta, 2 botões vermelhos que tinham
  ficado com texto marinho, botão do parceiro com a cor de link do post vazando, níveis amarelo e
  laranja de `/detalhes/`).
- Abaixo de AA **de propósito**: numerais gigantes decorativos (`select-none`) e o botão
  **"Falar no WhatsApp"** (branco no verde `#25D366` do WhatsApp, 2:1 — padrão da marca deles).
- Revisão visual: miniaturas de página inteira das 33 rotas + rodapé e faixa de parceiros
  conferidos com rolagem lenta (as imagens são `lazy`).
- Produção conferida: logo positiva, símbolo, `tema-escuro` no rodapé, `theme-color #FFFFFF`.

⚠️ **Ao auditar a produção, usar query de cache-buster** (`?v=123`). Sem ela o Hostinger entregou
HTML da versão anterior por alguns minutos e a auditoria acusou problemas já corrigidos.

---

# Pendências abertas

## Novas desta sessão

1. **Kits de `/divulgacao/`** (artes e e-mails) seguem na **identidade antiga** — a próxima frente
   natural.
2. **Cartão de compartilhamento** é marinho — combina com o rodapé, mas pode ganhar versão clara.
3. **Tagline da logo em pt-BR** ("Programa de Aceleração de Inglês") aparece também em `/en/` e
   `/es/`. Se quiser, pedir à designer versões EN/ES.
4. Arte `ETT-top01.webp` (símbolo antigo) ainda é o fundo desfocado dos heros.
5. `/agenda/` (topo) ainda fala em "alternando entre IEP, UTFPR, Hard Rock e Habitat" — contradiz a
   decisão de 01/08 (único presencial = IEP Talks).
6. Contraste do botão do WhatsApp (decidir se mantém o padrão da marca deles).

## Herdadas de 02/08 (sem mudança)

- **Decisão:** quem responde os leads e em quanto tempo (a home promete contato).
- **Jurídico:** Termos e Política ainda falam de programa gratuito; falta recorrência, reembolso e
  os 7 dias do CDC art. 49.
- **Externas:** apagar os 4 leads de teste na RD; conferir onde caem os e-mails do portão do ETT
  Player; **SSL `.com`/`.lat`** (~5 meses quebrado).
- **Copy:** landings `/en/` e `/es/` fora das revisões (Google Form, depoimentos fictícios, preços
  velhos); indicação do parceiro parada desde 06/06; post `praticar-ingles-em-curitiba-gratis` com
  a rotação de maio; contagem de ferramentas (todas / 10 / 12); `/planos/` em 403; vídeos de
  Dedicação e Aceleração; fotos reais dos encontros.

---

Última revisão: **2026-10-07**.
