# Contexto da sessão — 2026-11-09

Handoff da sessão de **09/11/2026**. Houve quatro entregas, todas no ar e conferidas na produção:

1. o curso **Cherry Top Business School** em `/imersoes/` e na página própria dele;
2. um **layout novo** para essa página;
3. o **kit de divulgação** do curso;
4. a **agenda nova**, com a volta dos encontros e o anúncio na home.

**Leia este arquivo primeiro**, porque é o mais novo. O anterior é `CONTEXTO-SESSAO-2026-11-01.md`.

---

## Commits (todos em `origin/main`, no ar)

| SHA | O quê |
|---|---|
| `51b34c2` | Box do curso em `/imersoes/#proximas` + página `/imersoes/business-school/` com reel sorteado. ⚠️ Levou junto a pasta `novoConteudo/NovoCursoCherrytop/` (ver Pendências). |
| `0e9a34b` | Layout próprio da página do curso (`components/imersoes/BusinessSchoolDetalhe.tsx`). |
| `8def75d` | Agenda nova + volta dos encontros + faixa na home + kit `cherrytop-business-school`. |
| (este) | Este handoff. |

Os deploys de `51b34c2` e `8def75d` foram rodados pelo Alessandro (`! ./deploy.sh`). O de `0e9a34b` foi rodado pelo Claude, com o "pode fazer o deploy" dele. Nesse, o push falhou uma vez por conexão e passou no `git push` seguinte.

## 1. Re-leitura (início da sessão)

- **SSL de `.com`/`.lat`:** ainda sem resposta por `https://`. São cerca de 6 meses quebrado.
- **`/planos/`:** ainda dá 403.
- **Indicação de parceiro elegível:** *"Um Roteiro Prático para Estudar Diálogos com Active Recall"* (07/11) e *"Como a História do Império Britânico Moldou o Inglês Moderno"* (01/11). A rotina semanal continua parada.

## 2. Cherry Top Business School

**Fontes:**
- 3 reels do Alessandro em `novoConteudo/NovoCursoCherrytop/`. O material é dele: só leitura.
- O flyer institucional, na mesma pasta.
- As mensagens do Prof. Leo (Cherry Top) de 31/10, coladas no chat.

**Transcrição:** feita com Whisper large-v3, em `novoConteudo/cherrytop-business-school/TRANSCRICAO-REELS-2026-11-09.md`. Duas observações:
- O Whisper inventou uma frase depois do fim do reel 1, e ela foi removida.
- No reel 3, ele entendeu "Trabalhe agora com a sua imersão". O provável é "Garanta"; falta conferir ouvindo.

**Fatos publicados:**
- 04 a 06/12/2026 (sexta a domingo), das 8h às 18h, em Curitiba, local a confirmar.
- 50h no total: The Passport (10h online), 3 dias de 10h e 10h de estudo orientado.
- Certificado de 50h e almoço.
- Passagem, hospedagem e traslado ficam por conta do participante.
- Turma bilíngue para o básico; imersão total do intermediário ao avançado.

**Decisões do Alessandro:**
- **Preço não é publicado.** O valor mostrado é "Sob consulta". O que se sabe: R$ 2.000 à vista ou 4x R$ 550, e o The Passport de R$ 220. Ficou ambíguo se ele soma ou se já está incluso.
- O formulário é o mesmo Google Form das outras imersões.
- O bloco institucional da Cherry Top entra; a Mentoria Executiva 2027 não.
- O vídeo sorteado aparece só na página de detalhes.

**Fora da copy de propósito:**
- "acelera 10x mais rápido" e "transformação radical", que são promessa de resultado;
- "Em 2027 essa conta fica mais cara".

**Arquivos:**
- `lib/imersoes.ts`: entrada `business-school-curitiba-2026` e o campo opcional novo `titulo`, que o cartão usa no lugar da cidade.
- `app/imersoes/business-school/page.tsx`: metadata e JSON-LD Event. O OG usa `images/og-cherrytop-business-school.png`.
- `components/imersoes/BusinessSchoolDetalhe.tsx`:
  - hero com 4 fatos e o reel;
  - Situações reais; Níveis;
  - Programação em linha do tempo;
  - Incluso e Investimento;
  - Quem oferece;
  - depois de 06/12, a página se marca como encerrada sozinha.
- `components/VideoSorteado.tsx`: reel 9:16 sorteado por visita, no navegador, com o botão "Ver outro vídeo".
- Reels comprimidos em `public/videos/cherrytop-bs-reel{1,2,3}-v1.mp4` (7–9 MB), com as capas `-capa.jpg`.
- O `ImersaoDetalhe` genérico só ganhou o banner lendo `props.metodologia`. As outras páginas não mudaram.
- "Since 1985", no flyer, resolve a dúvida antiga entre "30 ou 40 anos": são **41**.

## 3. Kit `cherrytop-business-school`

- Página `/divulgacao/cherrytop-business-school/` (noindex), com:
  - 5 artes;
  - textos de LinkedIn, Instagram, WhatsApp, X (261 caracteres) e repost;
  - os 3 reels para baixar;
  - o `email.html`, cujo topo é `EmailBusinessSchool-1109.jpg`.
- Card no hub, em primeiro.
- Gerador: `webapp/scripts/kits/build_cherrytop_business_school.mjs` (HTML no Chromium).
  - A foto é o quadro de 44,6 s do reel 1, recortado acima das legendas: `public/images/cherrytop-bs/instrutor-v1.webp`.
  - O nome do instrutor não aparece, porque não foi informado.
- Aprendido nas artes:
  - no 4:5 o conteúdo não cabia, e o flex espremia a foto até cortar o rosto; a foto agora tem `flex-shrink:0` e o 4:5 perdeu a linha extra;
  - no 1:1 a foto vai ao lado da data;
  - na prévia 1200×630 as etiquetas saem, porque encostavam no rodapé.

## 4. Agenda nova e volta dos encontros

**Decisão do Alessandro:** os encontros voltam na **segunda, 16/11 (online)** e no **sábado, 21/11 (IEP Talks)**. Antes disso, nenhuma data aparece.

**`lib/agenda-events.ts`:**
- `REINICIO`: os geradores começam na data de volta.
- `ANUNCIO_REINICIO_ATE = '2026-11-30'`.
- `CONTATO_IEP_TALKS`: o WhatsApp do Miguel Donizete, `+55 13 99151-1656`, por `wa.me` com mensagem pronta.
- `IEP_ENDERECO`: Rua Emiliano Perneta, 174 · Centro. `IEP_MAPA` traz o link do mapa.
- O IEP Talks recorrente ganhou os links "Dúvidas? Fale com o Miguel" e "Como chegar".
- `agendaEvents` ficou **vazio**: os eventos de mai–ago/2026 (UTFPR, Hard Rock, Habitat, Business Meal) saíram.

**`components/Agenda.tsx`, reescrito:**
- aviso da volta no topo;
- 2 cartões completos, com o selo "Volta 16/11" / "Volta 21/11", o próximo encontro e os botões;
- próximas datas, com o selo "Volta";
- "Primeira vez?" e o CTA.
- Corrigido: "Presencial · quartas ou quintas" e a seção "4 locais / rotação semanal", que estavam errados.

**Home:**
- `components/AnuncioReinicio.tsx`: faixa vermelha abaixo do menu, link para `/agenda/`.
- `ProximosEncontros.tsx`: usa os geradores (antes calculava as segundas por conta própria), ganhou o selo "Voltamos!", mostra o próximo IEP Talks e o botão "Fale com o Miguel".
- A faixa e o selo nascem escondidos e **somem sozinhos depois de 30/11**.

**`CLAUDE.md`:** atualizado no bloco da `/agenda/`.

---

# Pendências

## Novas

1. **Pasta `novoConteudo/NovoCursoCherrytop/` publicada sem decisão.** São os 3 originais (145 MB) e o flyer.
   - Entrou no commit `51b34c2` porque o deploy rodou antes da resposta.
   - O GitHub avisou que dois arquivos passam de 50 MB.
   - Como `novoConteudo/` fica na raiz servida pelo Hostinger, os arquivos estão públicos (o flyer dá 200). Isso vale para todo `novoConteudo/`.
   - Opções, só se o Alessandro quiser: `git rm --cached` + `.htaccess` bloqueando `novoConteudo/`. O histórico do GitHub continua com os vídeos.
2. **Endereço do Business School em Curitiba.** Quando chegar, atualizar:
   - `BusinessSchoolDetalhe.tsx` (`fatos` e o texto do hero);
   - `lib/imersoes.ts` (`local`);
   - o JSON-LD da página;
   - `textos.md`, `index.html` e `email.html` do kit.
3. **Reel 3:** conferir "Trabalhe" ou "Garanta agora a sua imersão".
4. **Depois de 30/11:** apagar `AnuncioReinicio.tsx` e o selo "Voltamos!" de `ProximosEncontros.tsx`, num deploy.
5. **Depois de 06/12:** a turma de dezembro sai sozinha de `/imersoes/#proximas`, e a página do curso mostra "já aconteceu". Decidir se a página fica no ar.
6. **Ver como fica o cálculo do preço**, se um dia ele for publicado (ver §2).

## Herdadas (sem mudança)

- Level Check e LGPD, Player, Meet, Radio, direitos e Learning DNA (ver `CONTEXTO-SESSAO-2026-11-01.md`).
- v06 do vídeo institucional.
- EN/ES fora do reposicionamento.
- SSL de `.com`/`.lat`; `/planos/` em 403.
- Quem responde os leads; 4 leads de teste na RD.
- Kits antigos na identidade antiga.
- Indicação semanal do parceiro parada.
- A agenda EN/ES (`/en/schedule/`, `/es/agenda/`) lia `agendaEvents` no build. Agora ela fica sem eventos datados, como já estava na prática, e não tem gerador.

---

Última revisão: **2026-11-09**.
