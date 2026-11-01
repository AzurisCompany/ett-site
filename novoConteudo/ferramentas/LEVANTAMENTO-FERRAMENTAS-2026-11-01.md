# Levantamento das ferramentas do ETT Player — 2026-11-01

Varredura **só de leitura** dos repositórios em `/home/binhara/ett/` (C:\WSL\home\ett) + GET nas URLs de
produção + screenshots. Objetivo: montar uma página por ferramenta em `/ferramentas/<id>/` só com o que
**existe implementado e no ar**. O resumo dos slides (`ett-slides`, deck do lançamento) descreve a visão
— o código é a verdade.

Fonte do mapa app → URL: `ett-player/apps/player/src/data/local/catalogo-estatico-ferramenta-repository.ts`.
⚠️ A produção do Player ainda roda a versão antiga em HTML puro (`/app.js`); a versão Next do repo não foi publicada.

## Achados que afetam o SITE atual (lib/ferramentas.ts)

| Ferramenta | O site diz hoje | O código mostra |
|---|---|---|
| Speak | "fala seguindo um roteiro e recebe correção na hora" | sala de vídeo de **encontro com moderador** (breakouts, cartões de tema, SpyTalk). Sem correção. |
| Level Check | "Longman 3000 e Oxford 5000… plano de 90 dias" | só Longman (~3.160 palavras); plano com revisões nos dias 2/4/7/14/30 e 10/20/30 palavras/dia. **Não funciona no celular** (aviso na entrada). |
| Flashcards | "revisa no momento certo de cada uma" | seleção **aleatória**; palavra sai da revisão após 2 acertos em dias consecutivos. Não é SRS. |
| Daily | "registra o progresso ao longo das semanas" | versão digital do Participant's Planner (80 p.), **em inglês**, você fala/dita em vez de escrever; tudo no aparelho. |
| Legendas | "série de tecnologia" | 10 séries antigas/clipes no YouTube (Bewitched, Munsters, Beakman's World, The Office best of…). Sem Silicon Valley. |
| AudioBook | "livro de não ficção" | 16 clássicos (Lit2Go/USF), 410 capítulos. |
| Fórmula Fluente | "leitura em capítulos" | curso em **vídeo, em português** ("Farol da Fluência", Frank Florida), 83 aulas com transcrição, dentro do VocabSubs. |
| Radio | "rádios e noticiários" | 4 streams: myTalk 107.1, FOX News Radio, WLIR 107.1, NPR. |
| Player (FerramentasResumo) | "lembra onde você parou e organiza o que praticar a cada dia" | Player é **lista de cards + coleta de e-mail**; não guarda progresso. Cada app guarda o seu no navegador. |

## Riscos que precisam de decisão do Alessandro

1. **LGPD — Level Check:** a tela diz "seus dados são armazenados localmente e não são compartilhados", mas
   `lib/hooks/useTestPage.ts:148` envia resultado + nome, e-mail, telefone e LinkedIn para
   `/api/gaio/events` → datalake externo (datalake.winov.com.br). O texto contradiz o código.
2. **Direitos — Flashcards:** deck = "4000 Essential English Words" (série comercial), 3.871 cards + ~15 mil mídias
   tiradas de um Anki. Licença não encontrada.
3. **Direitos — Legendas:** vídeo é embed oficial do YouTube, mas SRT/TXT completos de séries comerciais ficam no
   servidor do app. Origem dos SRT não documentada.
4. **Direitos — Fórmula Fluente:** aulas transcritas e redistribuídas — confirmar autorização do canal.
5. **Direitos — AudioBook:** textos em domínio público; **narração é do Lit2Go/USF** (termos, pela memória, para
   uso educacional não comercial — não verificado). MP3 é puxado direto do servidor da USF.
6. **Radio:** a home diz "sem propaganda" (falso: o stream traz os comerciais); grade de programação é texto fixo;
   logos de NPR/FOX/WABC recriados. FOX News pode ser sensível pro público.
7. **Learning DNA:** modelo VAK é contestado na literatura (neuromito); `/teste/sobre` promete "Sistema Inteligente"
   que não existe.
8. **Voice Agent Lab:** em produção roda em **modo demo** — roteiro fixo e feedback por regras, não IA conversando.
9. **Meet:** o Player aponta para `ett-meet.vercel.app` (demo); README diz que a produção é `meet.talktimeapp.com.br`.
   O deploy no ar ainda cita Hard Rock, Habitat/FIEP, degustação de vinho/cerveja e "simulado nessa POC".
   Exige conta com senha; propor encontro exige convidar 2 amigos novos.
10. **Speak:** moderador pode **gravar vídeo** (LiveKit → Cloudflare R2) e ligar transcrição; chat arquivado na nuvem por padrão.

## Ficha por ferramenta (só o que está implementado)

### Level Check — https://ett-vocabsub-work.vercel.app/
- Teste de vocabulário: marca as palavras que não conhece numa lista baseada no Longman Communication 3000
  (~3.160 entradas, com classe gramatical e marcadores S1–S3/W1–W3), em etapas de 350 palavras com autosave.
- Resultado: % de vocabulário, nível CEFR estimado (régua interna: A1 <45%, A2 45–64, B1 65–79, B2 80–89, C1 90–94, C2 ≥95),
  mapa de calor, gráfico por classe gramatical, lista de prioridade, navegador das desconhecidas.
- Plano de estudo (10/20/30 palavras por dia, revisões nos dias 2, 4, 7, 14 e 30). Exporta PDF e CSV. Histórico de testes.
- Interface EN/PT (padrão inglês). Pede nome, e-mail, telefone e LinkedIn. Alfa; **sem suporte a celular**.
- NÃO publicar: flashcards/quiz/study today ("Em breve"), exportação Anki, banco remoto, "entender 85% do inglês".

### Learning DNA — https://ett-learning-dna.vercel.app/
- Questionário de preferência sensorial: 30 afirmações escritas pro ETT, em 3 blocos de 10, 4–6 min.
- Resultado: canal predominante, secundário, co-predominantes (até 10 p.p.), canal a fortalecer, características e
  5 estratégias por canal. Refazer o teste. Sem login/e-mail; resultado só no aparelho (IndexedDB).
- Texto do próprio app: "É uma ferramenta pedagógica… não um diagnóstico clínico".
- NÃO publicar: "o ETT joga a favor do seu jeito", Sistema Inteligente, ferramenta-ponte, compartilhar com professor.

### Daily — https://ett-daily.vercel.app/
- Versão digital do Participant's Planner do ETT (PDF de 80 p.). Interface em inglês. Você **fala em vez de escrever**
  (Web Speech API; Whisper como alternativa) e o texto cai sobre linhas de caderno.
- Blocos: opening, why, 3 self-tapes em vídeo, mechanics, 16 cards "Tell me about…" (pessoal/profissional, com timer),
  diário de 30 dias, 8 páginas de encontro, 36 frases, pitch de 1/3/5 min (STAR, cronometrado), reflexão.
- QR + OCR pra sincronizar com o papel (`/sync`). PWA instalável. Sem login; texto e áudio ficam no aparelho.
- NÃO publicar: backup JSON (sem botão), QR em toda página impressa (futuro), app nativo. (Ett-Planner é outro produto, mockup.)

### Flashcards — https://ett-flashcard.vercel.app/
- Cards com palavra, fonética, imagem, significado e exemplo, **cada um com áudio** (palavra → significado → exemplo).
- "I Know / I Don't Know"; meta diária de palavras novas + sessões extras; revisão acumulativa (sai após 2 acertos em
  dias consecutivos); estatísticas (estudados, acerto, sequência, tempo); configurar palavras por sessão/dia. PWA.
- E-mail na entrada é só identificação local (não valida, não envia). Progresso no aparelho (IndexedDB).
- ~3.871 cards. NÃO publicar: sincronização em nuvem, "use seu próprio deck", repetição espaçada.

### Legendas (VocabSubs) — https://ett-subtitles.vercel.app/focus (também /study, /watch, /mobile)
- Vídeo do YouTube embutido + legenda sincronizada; clicar numa palavra salva no vocabulário; cor = nível CEFR
  (lista de ~3.060 palavras padrão Oxford 3000) e tradução pt ao passar o mouse.
- Tocar uma fala, tocar em sequência, loop 1×/3×/5×/∞, velocidade 0,5×–2×. **Shadowing**: toca a fala e deixa
  um silêncio do mesmo tamanho pra você repetir. Frases favoritas. Exporta PDF/CSV. Retoma episódio e minuto; marca assistidos.
- 4 modos (Estudo, Foco, Assistir, Mobile — celular redireciona sozinho). Sem login; dados no navegador.
- Catálogo (produção): 10 séries + Fórmula Fluente, 622 vídeos (Bewitched 60, Munsters 66, Beakman's World 79,
  Mork & Mindy 48, The Office best of 69, Sherlock Holmes 1954 35, Lucy Show 30, Batman 27, Addams 15, Star Trek Continues 11).
- NÃO publicar: gerar flashcards (desativado, "Bloco 2"). No site: "vídeos do YouTube com legenda interativa", sem nomes/logos de séries.

### Fórmula Fluente — https://ett-subtitles.vercel.app/study?series=formulafluente&season=1&episode=1
- Curso em vídeo "Farol da Fluência", de Frank Florida, **falado em português**, sobre como aprender idiomas.
- 83 aulas em 8 módulos (temporadas 1–7 e 9; não há módulo 8), cada uma com transcrição sincronizada; mesmo player
  das Legendas (retomar, favoritar frase). Vender como "assista às aulas do método com transcrição", não como prática de inglês.

### AudioBook — https://audiobook-alpha1.vercel.app/
- Audiolivros clássicos em inglês com texto sincronizado frase a frase (SRT gerado pelo ETT por alinhamento forçado).
- Player com ±10 s, velocidade, loop de frase. Clicar numa palavra salva e ela aparece destacada em qualquer livro.
  Modos: estudo, leitura contínua, legenda, foco (uma frase por vez). Biblioteca com legibilidade (Flesch), gênero e país.
- Progresso automático: minutos ouvidos, dias seguidos, recorde, mapa de 12 semanas. Sem login; dados no navegador.
- 16 livros / 410 capítulos (Dracula, Frankenstein, Peter Pan, Alice, Tom Sawyer, Huckleberry Finn, Sherlock Holmes,
  The Secret Garden, Romeo and Juliet, The Time Machine, The War of the Worlds, The Invisible Man, Doctor Dolittle,
  The Hunchback of Notre Dame, The Outdoor Girls in Florida, Physics/Aristóteles). Narração: Lit2Go (University of South Florida).
- NÃO publicar: shadowing (só visual), flashcards, vocabulário por IA, exportação, repetição espaçada.

### Radio — https://ett-radio.vercel.app/
- 4 rádios americanas ao vivo pelo stream oficial, num player simples (play/espaço, volume), pensado pra celular.
- myTalk 107.1 (Minneapolis, talk/música), FOX News Radio, WLIR 107.1 (NY, rock alternativo), NPR (reserva WNYC).
- Sem login, sem progresso. No site: "streams públicos de rádios americanas"; sem logos, sem "parceria".

### Speak — https://ett-speak.vercel.app/
- Sala de videoconferência no navegador pra **encontros de conversação guiados por moderador**. Nada a instalar.
- Salas menores (7 formas de agrupar, inclusive por nível e rodízio "conversar com todos"), áudio isolado por sala,
  cartões de tema com tempo (2 baralhos de 8: Personal e Professional), SpyTalk (jogo de espião com 25 locais),
  equilíbrio de fala (% por pessoa), "Como falo…?", levantar a mão, reações, exit ticket, relatório de presença.
- Entrada com nome, e-mail, cargo e nível. Celular entra com aviso. IA só na transcrição (opcional, ligada pelo moderador).

### Voice Agent Lab — https://ett-voice-agent-lab.vercel.app/ (prova de conceito)
- 8 cenários (restaurante, imigração, hotel, entrevista tech/dados, daily, explicar projeto, networking, aeroporto);
  configura nível, dificuldade, tipo de correção, velocidade, duração (3/5/10 min); responde falando ou digitando.
- **Em produção: modo demo** — falas do agente roteirizadas e feedback por regras. Voz do agente sintetizada.
- Sem login; histórico no navegador. No iPhone/Safari o reconhecimento de fala não funciona (cai em "tocar pra responder").

### Meet — https://ett-meet.vercel.app/ (demo) · produção segundo o README: https://meet.talktimeapp.com.br
- Agenda da comunidade: alguém propõe um encontro (tema, data), convida, as pessoas confirmam; com quórum
  (4 online / 6 presencial) ou aprovação do ETT vira agenda oficial. A chamada acontece fora (Meet/Zoom/Jitsi/presencial).
- Calendário por status, e-mail a cada etapa, check-in por QR, temas sugeridos. Exige conta.

### ShadowDaily — em breve
- Sem repositório nem spec. Shadowing sem gravação já existe dentro das Legendas.

### ETT Player — https://ett-player.vercel.app/
- Tela com 12 cards que abrem cada ferramenta. Entrada pede e-mail (e nome/telefone se for novo) — coleta de contato,
  não autenticação; avisa sobre novidades por e-mail e convite pro WhatsApp. Não é PWA, não guarda progresso.
- Mostra números de exemplo nos cards (mock) e "lembra onde você parou" — não existe.
