# Contexto da sessão — 2026-11-01/02

Handoff da sessão de **01 e 02/11/2026**. Foram três entregas, todas no ar e conferidas na produção:
**(1)** uma página por ferramenta do ETT Player, **(2)** os textos curtos das ferramentas corrigidos a partir do
código, **(3)** o vídeo institucional na home e as telas das ferramentas nos cartões.

**Leia este arquivo primeiro**, porque é o mais novo. O anterior é `CONTEXTO-SESSAO-2026-10-31.md`. O levantamento
completo das ferramentas está em **`novoConteudo/ferramentas/LEVANTAMENTO-FERRAMENTAS-2026-11-01.md`**.

---

## Commits (todos em `origin/main`, no ar)

| SHA | O quê |
|---|---|
| `3b6685f` | `/ferramentas/` + 10 páginas, textos corrigidos, links no menu, nos cartões e no rodapé, sitemap. |
| `8228b43` | Commit do `./deploy.sh` que publicou o `3b6685f` (com o `CLAUDE.md`). |
| `cff5fdf` | Deploy do vídeo institucional na home + telas nos cartões das ferramentas. |
| (este) | Este handoff. |

Os dois deploys foram rodados pelo Claude, com o ok explícito do Alessandro ("pode fazer o deploy" / "pode"). O
modo automático deixou rodar desta vez. Quando bloquear, continua valendo: propor `! ./deploy.sh "..."`.

## 1. Re-leitura (início da sessão)

- **SSL de `.com`/`.lat`:** ainda sem resposta por `https://`. São ~5,5 meses quebrado, e isso bloqueia o GSC.
- **`/planos/`:** ainda dá 403.
- **Indicação de parceiro:** o artigo elegível é *"O Que a IA Faz Melhor do Que um Professor Humano"* (25/10). Os
  itens novos de 01/11 são Story e Song.

## 2. Páginas das ferramentas

**Como foi feito:** o Alessandro apontou os repositórios em `C:\WSL\home\ett` (`/home/binhara/ett/`) e o deck
`ett-slides`. Três agentes varreram os repositórios **só lendo**, e foram tiradas capturas de cada app em produção.
O mapa app → URL vem do catálogo do Player:
`ett-player/apps/player/src/data/local/catalogo-estatico-ferramenta-repository.ts`.

**Achado principal:** os slides do lançamento e vários READMEs descrevem a visão, não o que existe. O próprio
site tinha afirmações falsas:
- Speak "correção na hora": é uma sala de vídeo com moderador, sem correção;
- Flashcards "momento certo" e "repetição espaçada": a seleção é aleatória;
- Player "lembra onde você parou": não guarda progresso;
- Level Check "Oxford 5000" e "90 dias": só Longman, e o plano tem revisões nos dias 2/4/7/14/30.

**Decisões do Alessandro:**
- Todas as ferramentas ganham página com **texto neutro**: sem o nome do deck do Flashcards, sem os nomes das séries
  das Legendas, sem logo de rádio.
- **Speak e Meet** também ganham página. **Voice Agent Lab** (em produção roda em modo demo, com roteiro fixo) e
  **ShadowDaily** (em breve) ficam só no índice.
- No começo ele pediu para não mexer na home. **Depois reviu:** os textos curtos foram corrigidos.
- Menu "Ferramentas" passa a apontar para `/ferramentas/`, os cartões da home ganham "Ver como funciona" e o
  rodapé ganha o link.
- Level Check publicado assim mesmo. A divergência de LGPD fica para ele corrigir no app.

**Arquivos:**
- `webapp/lib/ferramentas-paginas.ts`: conteúdo longo das páginas.
- `webapp/app/ferramentas/page.tsx` e `webapp/app/ferramentas/[id]/page.tsx`.
- `webapp/public/images/ferramentas/<id>.webp`: capturas das páginas.
- `lib/ferramentas.ts`: textos curtos corrigidos. O Speak foi para o grupo `comunidade`, o que tira ele da lista
  de ferramentas de apoio em `/conversacao/`, de propósito.
- Também corrigidos: `FerramentasResumo`, `PlayerShowcase`, `HowItWorks` e `Results`.
- CTA das páginas: o primário é o teste de 30 dias, e o secundário é "Abrir no ETT Player". No Speak e no Meet, o
  primário vira "Ver os próximos encontros", e o Speak tem link direto para a sala.

## 3. Vídeo institucional e telas nos cartões

**Fonte (material do Alessandro, só leitura):** `D:\2026\31-videoETT` (`/mnt/d/2026/31-videoETT`).

**Telas:** saíram de `storyboard/assets/telas/` (e `v03/`). Cópias derivadas em
`public/images/ferramentas/cards/<id>-v1.webp`, mapeadas em `telaFerramenta` (`lib/ferramentas.ts`).
- Level Check: o nome do Alessandro foi desfocado.
- Flashcards: cortada a barra do navegador (com os favoritos dele) e a barra de tarefas.

**Vídeo:** `renders/ETT-institucional-16x9-v05.mp4` (2:07) foi **cortado em 92,3 s**, com fade. Termina no slide
"Programa de Aceleração · englishtalktime.com.br".
- Saiu o trecho do evento: "E tem mais, só aqui no DSSBR", a mentoria, "Últimas 4 vagas · converse no nosso stand"
  e as turmas de Curitiba e BH.
- Arquivos: `public/videos/ett-institucional-v05-site.mp4` (6,7 MB, H.264 com faststart) e
  `ett-institucional-v05-capa.jpg` (capa no quadro de 3,5 s; o de 1,2 s pega o logo no meio da animação).
- Componente `components/VideoInstitucional.tsx`, na home logo depois do `HeroSimples`, com `preload="none"`.
- O servidor de produção aceita byte-range (206), então dá para avançar no vídeo.

---

# Pendências

## Nos apps (outros repositórios; esta sessão não mexe neles)

1. **Level Check, LGPD (o mais urgente):** a tela diz "seus dados são armazenados localmente", mas
   `lib/hooks/useTestPage.ts:148` envia nome, e-mail, telefone e LinkedIn para `/api/gaio/events`, que encaminha
   para `datalake.winov.com.br`.
2. **Player** (a produção ainda é a versão em HTML puro): "continuar de onde parou", números de exemplo nos cards
   ("dia 23/90"), Speak descrito como "correção na hora".
3. **Meet:** o Player aponta para `ett-meet.vercel.app` (demo). O README diz que a produção é
   `meet.talktimeapp.com.br`. O deploy no ar ainda cita Hard Rock, Habitat/FIEP e degustação de vinho e cerveja.
4. **Radio:** diz "sem propaganda" (o stream traz os comerciais), a grade de programação é fixa e há páginas
   antigas no ar.
5. **Direitos:**
   - deck "4000 Essential English Words" no Flashcards;
   - SRT de séries comerciais guardados no servidor das Legendas;
   - aulas da Fórmula Fluente transcritas;
   - narração do Lit2Go no AudioBook (pela memória, uso não comercial; isso pesa se entrar em plano pago).
6. **Learning DNA:** `/teste/sobre` promete um "Sistema Inteligente" que não existe. O VAK é contestado na
   literatura.

## Vídeo (sessão do vídeo, `D:\2026\31-videoETT`)

7. **Fazer uma v06 para o site.** Os slides das ferramentas ainda dizem "3000 e 5000 (Oxford)", "repetição
   espaçada", "vocabulário direto para os FlashCards" e mostram o ETT Planner, que não está no Player. O slide de
   parceiros tem a logo do Silicon Valley Brasil, que não está em `lib/parceiros.ts`. A tela das Legendas mostra
   Beakman's World. Quando a v06 sair, trocar o arquivo **com nome novo** (cache de 7 dias).

## Herdadas (sem mudança)

- EN/ES fora do reposicionamento (depoimentos fictícios, Google Form, preços velhos).
- Anos de experiência da Cherry Top (30 ou 40).
- SSL de `.com`/`.lat`, `/planos/` em 403, quem responde os leads, 4 leads de teste na RD, kits antigos de
  `/divulgacao/` na identidade antiga.
- Indicação semanal do parceiro parada.

---

Última revisão: **2026-11-02**.
