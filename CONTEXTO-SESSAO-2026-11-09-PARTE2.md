# Contexto da sessão — 2026-11-09 (parte 2, tarde/noite)

Continuação de `CONTEXTO-SESSAO-2026-11-09.md` (manhã: Business School, kit, agenda nova). **Este é o handoff mais novo — leia primeiro.** Tudo abaixo está no ar e foi conferido na produção.

Seis frentes:

1. a Business School passou a ser no IEP, e o kit ganhou e-mail marketing;
2. o modelo de cobrança mudou: o teste grátis acabou e a ativação de R$ 97 virou a única entrada;
3. as 3 páginas de plano ganharam layout novo, e os links de checkout foram trocados;
4. uma auditoria completa de conteúdo, seguida da correção de quase tudo o que ela achou;
5. o Desafio de 7 dias com o Miguel no WhatsApp, a nova isca de leads;
6. a página 404 em pt-BR.

---

## Commits (todos em `origin/main`, no ar)

| SHA | O quê |
|---|---|
| `d2eb5aa` | Business School no IEP (página, kit, artes, e-mail `EmailBusinessSchool-1109b.jpg`) + seção "E-mail marketing" no kit |
| `6647d0d` | Texto do formulário de interesse mais claro (e-mail, kit, páginas de imersão) |
| `6138a31` | Ativação R$ 97 como única entrada (sai o "Quero conhecer" R$ 0), botão de checkout no topo, `/planos/conhecer/` vira redirecionamento |
| `b25534e` | Trilhas exigem a ativação antes (passos 1→2, aviso nos cartões e nas páginas) |
| `2e4e95e` | Página nova da ativação (`components/planos/AdesaoDetalhe.tsx`), sem o vídeo do YouTube |
| `bf45710` | Novos links de checkout + `AUDITORIA-CONTEUDO-2026-11-09.md` |
| `c5d4d55` | Correções da auditoria (≈70 arquivos) + botão do topo renomeado "Quero começar" |
| `9bb3ab4` | "Quero começar" passa a levar a `/#precos` (o quadro das 3 opções) |
| `630a1bc` | Página nova da Dedicação (`DedicacaoDetalhe.tsx`) |
| `0a185b4` | Página nova da Aceleração (`AceleracaoDetalhe.tsx`) |
| `79f455a` | Desafio de 7 dias + WhatsApp do site para o Miguel + página 404 (`.htaccess`) + Leonarda Flyhigher no kit + `/conversacao/` sem minutagem + `PlanoDetalhe` apagado |

O Alessandro liberou cada deploy com "pode fazer o deploy" ou "pode publicar". O modo automático às vezes bloqueia o `./deploy.sh`; nesse caso, peça a frase explícita.

## 1. Business School no IEP + e-mail marketing

- **Local:** IEP — Instituto de Engenharia do Paraná, Rua Emiliano Perneta, 174 · Centro. Atualizado em `lib/imersoes.ts`, `BusinessSchoolDetalhe.tsx`, no JSON-LD da página e no kit inteiro (textos, `index.html`, `email.html`). As artes foram regeradas com "IEP · Curitiba/PR".
- **Kit, seção 05 "E-mail marketing (RD Station)":**
  - botão "Copiar HTML do e-mail" (busca o `email.html` no carregamento e copia);
  - botões "Baixar email.html", "Abrir em tela cheia" e "Imagem do topo";
  - 4 assuntos com botão de copiar, pré-cabeçalho, prévia em iframe e orientações de disparo.
- **Imagem do topo do e-mail:** a nova é `EmailBusinessSchool-1109b.jpg`. A `-1109.jpg` continua no servidor.

## 2. Modelo de cobrança (fonte única `lib/planos.ts`)

- **Ativação acompanhada: R$ 97, pagamento único = o 1º mês.** É a única porta de entrada; o teste grátis "Quero conhecer" saiu.
- **Trilhas, a partir do dia 31:**
  - Dedicação: R$ 37/mês ou R$ 370/ano;
  - Aceleração: R$ 0 com 20 dias válidos por mês.
- **As trilhas exigem a ativação antes.** Nas páginas das trilhas, o botão principal é "Começar pela ativação — R$ 97" e o link secundário "Já fez a ativação?" leva ao checkout da trilha.
- **Checkouts:**
  - `CHECKOUT_ADESAO` = `https://azuris.com.br/ett/ativacao` (era `/ett/adesao`);
  - `CHECKOUT_DEDICACAO` = `/ett/assinatura`;
  - `CHECKOUT_ACELERACAO` = `/ett/aceleracao` (novo).

  Os três estavam abrindo, e a ativação mostrava R$ 97,00 no momento da troca.
- **Botão "Quero começar" no topo (pt-BR):** leva a `/#precos`. Ficou alguns minutos direto no checkout; o Alessandro preferiu o quadro. Entre 1280 e 1535 px o "Tenho Interesse" some do menu para caber.
- **`/planos/conhecer/`:** meta refresh para `/planos/adesao/`, noindex, fora do sitemap.

## 3. Páginas de plano (layout novo, as 3 iguais)

- **Arquivos:** `components/planos/{Adesao,Dedicacao,Aceleracao}Detalhe.tsx`.
- **Estrutura comum:**
  - topo com cartão de compra;
  - "O que está incluso" em cartões com ícone;
  - linha do tempo;
  - comparação Dedicação × Aceleração;
  - FAQ (que filtra `faqCobranca`);
  - fechamento com os botões.
- **Só na Aceleração:** a seção "A meta, explicada".
- O `PlanoDetalhe.tsx` genérico foi apagado.

## 4. Auditoria de conteúdo e correções

- **Relatório:** `AUDITORIA-CONTEUDO-2026-11-09.md`, na raiz, com a seção "Decisões tomadas". Cobriu 51 páginas: ~70 achados, 17 de gravidade alta.

### Decisões do Alessandro

- **ETT Player continua ABERTO.** A ativação vende orientação (2×1h), diagnóstico, plano, material e acompanhamento por 30 dias, **não acesso às ferramentas**. Os botões pagos dizem "Orientação individual — R$ 97".
- **As trilhas vendem a continuidade do acompanhamento:** plano revisado, material atualizado, feedback. Sem contador, histórico ou selo, porque o Player não tem conta. A meta da Aceleração é registrada pela pessoa e conferida pelo ETT. Definição única de dia válido: `DIA_VALIDO` em `lib/planos.ts`.
- **Fora da lista paga:**
  - vídeos de demonstração (não existem);
  - "conversa guiada com correção" e "simulação" (não existem);
  - "sala do ETT Speak" e "os encontros" (são gratuitos).
- **Nível de inglês:** qualquer nível, rende mais a partir do A2.
- **Isenção de quem se cadastrou antes:** virou pergunta no FAQ — quem ativou o teste até 09/11/2026 não paga a ativação.
- **EN/ES = uma página curta por idioma** (`components/intl/LandingIntl.tsx` e `EncontrosIntl.tsx`): horário no fuso do visitante e FAQ para quem é de fora. As 4 subrotas antigas viraram meta refresh noindex.
- **Termos e Política:** rascunhos para revisão jurídica em `novoConteudo/juridico/`. **Estão no `.gitignore`, de propósito:** têm placeholders e não podem ficar públicos. As páginas publicadas ainda são as de 14/05.
- **Redes sociais:** os ícones do rodapé saíram (não há perfis). O rodapé lista os 7 parceiros de `lib/parceiros.ts`.
- **Menu:** "Como funciona" virou "Sobre o ETT".

### O que foi corrigido (resumo)

- **Landings de encontro** (`/online/`, `/conversacao/`, `/curitiba/`):
  - Google Meet virou ETT Speak;
  - o botão principal é "Entrar na sala" e o formulário virou lembrete;
  - aviso da pausa (`components/encontros/AvisoPausa.tsx`);
  - `/online/` mostra as datas pelo gerador (`ProximosOnline.tsx`);
  - saíram o público só de tech, as promessas e os nomes de concorrentes.
- **Blog:**
  - post de Curitiba reescrito para o IEP Talks, na mesma URL;
  - Business Meal com `realizado` (faixa no post e no fim da listagem);
  - prazos e promessas removidos;
  - CTA com `components/blog/ProximasDatas.tsx`;
  - campo `formato: 'video'` nas indicações.
- **`/ff/`:**
  - saiu o bloco do ebook e o link da GUBigData;
  - "encontros mensais" virou "semanais";
  - a Fórmula Fluente aparece como método do parceiro;
  - "ETT Subtitles" virou "Legendas".
- **Imersões:**
  - JSON-LD sem preço, com a Cherry Top como organizer;
  - turmas passadas marcadas "(realizada)";
  - Flórida com nível B1+ em todos os lugares;
  - "Lagoa Santa (região de BH)";
  - nome padronizado "Cherry Top".
- **Kits:**
  - faixa "Evento realizado" no lançamento DSSBR e no Business Meal, e selo no hub;
  - e-mail do convite de segunda corrigido.
- **Fundadora da Cherry Top:** "Leonarda Flyhigher" em todo lugar (é a mesma pessoa que "Maria Leonardo Aparecida").

## 5. Desafio de 7 dias (isca de lead gratuita)

- **Arquivos:**
  - página `/desafio/` (`components/desafio/DesafioDetalhe.tsx`);
  - faixa na home logo abaixo do hero (`DesafioChamada.tsx`);
  - dados em `lib/desafio.ts` (`WHATSAPP_MIGUEL` = `5513991511656`, `DESAFIO_WHATSAPP` com a mensagem pronta).
- **Mecânica:**
  1. a pessoa chama o Miguel no WhatsApp;
  2. durante 7 dias, escolhe **uma ferramenta do Player por dia** (8 disponíveis; Speak e Meet ficam de fora), pratica ~15 min e manda um check-in;
  3. participa do encontro de conversação;
  4. responde o **feedback**.
- **Roteiro do Miguel:** `novoConteudo/desafio-7-dias/ROTEIRO-MIGUEL.md`, com as mensagens prontas, as 5 perguntas do feedback (a 5ª pede autorização de depoimento), uma planilha e as métricas. A ativação só aparece depois do feedback.
- **Botão flutuante do WhatsApp do site inteiro:** agora é o do Miguel (antes 5541998003687).

## 6. Página 404

- `app/not-found.tsx` (pt-BR, com menu) + `webapp/public/.htaccess` com `ErrorDocument 404 /404.html`.
- O `deploy.sh` ganhou o passo 2c, que copia o `.htaccess` para a raiz (o glob não pega dotfile).
- Conferido: endereço inexistente mostra "Página não encontrada".

## Estratégia comercial (conversa, sem código)

- O Alessandro pediu uma análise como diretor comercial: base de 300 leads, 9 pagantes.
- **Recomendação:** manter a entrada única paga e gerar lead pela porta grátis (encontro e desafio). O gargalo é contato e motivo para decidir, não o preço.
- **Brainstorm de iscas:** a escolhida foi o Desafio de 7 dias.
- **Próxima isca, depois do desafio rodar 1 a 2 semanas:** grupo piloto de 8 pessoas com candidatura (4 semanas grátis em troca de feedback e depoimento).
- **Alerta registrado:** se quiserem vender "grupos de conversação", que seja um produto separado (grupo fixo), sem cobrar o encontro aberto.

---

# Pendências

## Do Alessandro / fora do repo

1. **Termos e Política:** levar os rascunhos de `novoConteudo/juridico/` ao advogado. Faltam razão social, CNPJ, gateway e foro, e a lista de [CONFIRMAR]/[DECISÃO] está dentro dos arquivos.
2. **Level Check (`/home/binhara/ett/ett-vocabsub-work`):** o aviso de privacidade foi corrigido em `messages/pt-BR.json` e `messages/en.json`, **mas não foi commitado nem publicado.** Fazer commit/push quando ele liberar. Opcional: caixa de consentimento.
3. **ETT Speak:** grava vídeo e transcreve por IA sem aviso na sala. Pôr o aviso.
4. **Google Forms:**
   - fechar o do lançamento de 27/10;
   - no das imersões, tirar a opção vencida "Curitiba", corrigir "Belohorizonte" e incluir o aviso de repasse à Cherry Top.
5. **Logo:** a arte oficial ainda traz o subtítulo "Programa de Aceleração de Inglês". Precisa de arte nova do designer; no código só o `alt` foi trocado.

## No site

6. **Desafio:** acompanhar as métricas do Miguel e decidir o grupo piloto em 1 a 2 semanas.
7. **Depois de 30/11:** apagar `AnuncioReinicio.tsx` e o selo "Estamos voltando!" de `ProximosEncontros.tsx`.
8. **Depois de 06/12:** decidir se a página da Business School fica no ar.
9. **Blog parado:** não há post da Business School, do reposicionamento ou do desafio, e a indicação semanal do parceiro segue parada.
10. **Código morto:** `components/CheckoutDemo.tsx` não é usado e ainda tem o número antigo do WhatsApp. Pode ser apagado.
11. **Cores do kit do convite de segunda:** ainda são as neon antigas.

## Herdadas

- SSL de `.com`/`.lat`;
- `/planos/` dá 403;
- 4 leads de teste na RD;
- direitos de conteúdo das ferramentas: Flashcards, Legendas, Fórmula Fluente e narração do AudioBook (ver `LEVANTAMENTO-FERRAMENTAS-2026-11-01.md`).

---

Última revisão: **2026-11-09 (noite)**.
