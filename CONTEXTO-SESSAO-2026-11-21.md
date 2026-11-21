# Contexto da sessão: 2026-11-21

**Este é o handoff mais novo. Leia primeiro.** O anterior é `CONTEXTO-SESSAO-2026-11-19.md`.

Sessão de sábado, com 6 deploys, todos conferidos em produção. Assuntos: re-leitura, **área de parceiros** com o 1º professor (J.G. Franklin), landing de captação dele no CRM, mudanças na agenda e a regra dos **grupos de 3 a 8 pessoas**.

---

## 1. Re-leitura (início da sessão)

- **Repositório:** o último commit era `41b0e44`. O `CLAUDE.md` (seção "DNS e subdomínios") e o handoff de 19/11 ainda não estavam comitados e subiram no 1º deploy.
- **Produção:** `last-modified` de 10/11.
  - 11 rotas, os 3 checkouts e `crm.englishtalktime.com.br` respondiam 200.
  - `/planos/` continua respondendo **403**.
- 🔴 **SSL de `englishtalktime.com` e `.lat`:** ainda sem resposta.
- **Feed do parceiro:** o elegível continua *"O Pilar Invisível da Fluência"* (16/11).

## 2. Deploys do dia (todos conferidos com `curl` na produção)

| Commit | O que subiu |
|---|---|
| `7bbc0e5` | Área `/parceiros/` + perfil `/parceiros/jg-franklin/` + "Todos os parceiros" no rodapé + sitemap. Também subiram o `CLAUDE.md` (DNS) e o handoff de 19/11 |
| `334515a` | Encontro do J.G. no **sábado 9h–10h**, os 4 horários sugeridos por ele como "Previsão de novos encontros" no perfil, botão "Quero participar" (WhatsApp do Miguel) e "Parceiros" no menu do topo |
| `2458a38` | Botão "Entrar em contato" → landing do CRM (no perfil e sob a foto em `/parceiros/`). **Seção "Encontros de <período>" removida da `/agenda/`** |
| `53b2a6c` | Cartão do encontro online do J.G. na `/agenda/` (abaixo de segunda e IEP Talks) + texto do topo da agenda citando os 3 encontros |
| `15ef738` | Copy: **encontros em grupos de 3 a 8 pessoas** em todo o site |

## 3. Área de parceiros

- **`/parceiros/`** tem duas partes:
  - **Professores parceiros**: cartão com foto, botão vermelho "Entrar em contato" logo abaixo da foto e "Ver perfil".
  - **Escolas e instituições**: lê `lib/parceiros.ts` por categoria, no formato "Oferecido por" × "Apoio do ETT".
- **`/parceiros/<slug>/`** tem:
  - foto, chamada, bio, especialidades, níveis e formatos;
  - o bloco "Encontro ETT com <nome>": horário atual, "Previsão de novos encontros", formato, tamanho e foco;
  - "Como participar" com o botão "Quero participar";
  - "Quer ter aulas com <nome>?" com o botão "Entrar em contato";
  - JSON-LD `Person`.
- **Fonte única: `webapp/lib/professores.ts`.** Adicionar professor = adicionar um objeto e a foto em `public/images/parceiros/` (webp + jpg). As rotas, o sitemap, o índice e o cartão da agenda saem sozinhos.
- **Dados da ficha (Anexo I do termo, em `contratos/`, fora do git):** só vai pro site o que a Cl. 3.5 do termo permite (nome, foto, minibio, especialidades, formato, contato). 🚫 CPF, RG, nascimento, endereço, PIX, CNPJ, e-mail e WhatsApp pessoal **nunca**. O código e o `out/` foram varridos com grep e esses dados não aparecem em lugar nenhum. A linha "formação: nada formal" ficou de fora.
- **Foto:** cópia recortada em quadrado (sem a moldura e sem o nome impresso) de `D:\2027\ETT2027\parceiros\gjf\foto.jpg`. O original não foi tocado.

### J.G. Franklin (`jg-franklin`)

- Norte-americano (Tacoma, WA), mora em BH, ensina inglês há 18 anos e é ator com quase 100 créditos.
- Especialidades: conversação, nuances do inglês nativo, gramática, entonação e pronúncia. Atende todos os níveis, online, em aulas individuais e em grupo.
- **Encontro ETT:** **sábado 9h–10h, online, a partir de 05/12/2026**, um por semana (4 por mês, como combinado). Grupos de 3 a 8 pessoas.
  - Ele sugeriu 4 horários: sexta 9h30–11h30 e 18h30–20h30, sábado 9h–12h e 14h–16h. Eles ficam no campo `previstos`: aparecem **só no perfil**, como registro, e não entram na agenda.
- **Quem participa:** é gratuito para quem está no Desafio de 7 dias ou é participante regular do programa. A inscrição é pelo **WhatsApp do Miguel**, com mensagem pronta.
- **Contato / aulas particulares:** landing do CRM **`https://crm.englishtalktime.com.br/lp/jgfranklin`**, publicada pelo Alessandro.
  - O miolo HTML está em `novoConteudo/parceiros/jgfranklin-lp-miolo.html`. Esse arquivo foi comitado, então também abre em `englishtalktime.com.br/novoConteudo/...`.
  - Campos: `nome`\*, `email`\*, `telefone`, `empresa`, mais um checkbox de consentimento LGPD sem `name` (só bloqueia o envio sem o aceite).
  - O envio é em JSON para `/api/lp/jgfranklin/submit`, com a mensagem de obrigado na própria página.

## 4. Agenda

- **A lista "Encontros de 23 de novembro a 19 de dezembro" (seção "Próximas datas") foi removida** a pedido. A `/agenda/` agora tem:
  - o topo;
  - os cartões fixos: segunda online, IEP Talks e **um cartão por professor parceiro**, com o "Próximo:" calculado no navegador;
  - "Primeira vez?" e o CTA.
- `lib/agenda-events.ts` ganhou `encontrosProfessoresRecorrentes()` e o campo `restrito`. Os encontros de professor nunca contam como "próximo encontro aberto" nem ganham o selo "Volta". Eles continuam entrando em `eventosFuturos()`, que hoje só alimenta os cartões e o `ProximosPresenciais`.
- O texto do topo da agenda cita os 3 encontros. O selo "Gratuito e aberto" ficou, mesmo o encontro do J.G. sendo restrito. Ofereci trocar o selo; está sem resposta.

## 5. Grupos de 3 a 8 pessoas

Decisão do Alessandro: "encontros são de 3 até 8 pessoas". Onde a copy fala do tamanho do grupo de conversa, agora diz "3 a 8 pessoas":
- home: "Como é" e 2 respostas do FAQ;
- `/detalhes/` (HowItWorks);
- ETT Speak (`ferramentas.ts` e `ferramentas-paginas.ts`);
- 2 posts do blog;
- encontro do J.G.

**Não mudaram:** as imersões da Cherry Top ("até 8 pessoas por turma" é turma de imersão), o kit `convitesegunda20h` (e-mails já disparados), a landing do CRM e as páginas EN/ES (nenhuma fala de tamanho).

## 6. Outras mudanças no código

- **Menu do topo:** "Parceiros" entra entre Imersões e Blog. O espaço entre os itens caiu para `gap-4 2xl:gap-6`. Medido em 1280, 1440 e 1536 px: sobram 60 px antes dos botões e não há rolagem horizontal.
- **Rodapé:** "Todos os parceiros" é o 1º item da coluna Parceiros. Parceiro sem URL agora aponta para `/parceiros/` (antes era `/#parceiros`).

## 7. Deploy

Quando o Alessandro diz "pode fazer o deploy" naquela mensagem, o `./deploy.sh` vindo do Claude passa. Sem esse pedido, o modo automático bloqueia (aconteceu uma vez hoje). O `CLAUDE.md` foi corrigido.

## Pendências

- **Testar o formulário da landing do J.G.:** enviar um lead `TESTE - IGNORAR` e conferir que chegou no funil do CRM. Não foi testado para não criar lead falso.
- **Selo "Gratuito e aberto" no topo da `/agenda/`:** trocar ou manter? Aguarda decisão.
- **J.G.:** comunicar o horário (sábado 9h–10h, desde 05/12) e alinhar com o Miguel como funciona a reserva das vagas.
- **Termo do J.G.:** a ficha veio preenchida, mas não houve confirmação de que o termo foi assinado. A Cl. 9.2 (uso de nome e imagem) depende disso.
- **Herdadas:**
  - `AnuncioReinicio` sai depois de 30/11; revisar a Business School depois de 06/12.
  - Termos e Política com o advogado; aviso de privacidade do Level Check; aviso de gravação no Speak.
  - Google Forms; arte do logo; métricas do desafio.
  - Blog do parceiro parado (elegível: *"O Pilar Invisível da Fluência"*).
  - `CheckoutDemo.tsx` sem uso; kit do convite com as cores antigas.
  - SSL de `.com`/`.lat`; `/planos/` respondendo 403; leads de teste na RD; direitos de conteúdo das ferramentas.

---

Última revisão: **2026-11-21**.
