# Auditoria de conteúdo do ETT — 09/11/2026

Levantamento de inconsistências e pontos que confundem o visitante, feito no build de 09/11/2026 (depois da mudança para ativação de R$ 97 sem teste grátis). Cobertura: 51 páginas (todo o pt-BR, EN/ES, termos, política, blog, imersões, kits de divulgação e e-mails). Os trechos citados foram conferidos no texto publicado; os principais foram conferidos de novo no código.

Nada foi corrigido ainda. Gravidade: **Alta** = contradiz o modelo atual, promete o que não existe ou tem risco legal/comercial · **Média** = confunde ou deixa o visitante sem resposta · **Baixa** = acabamento.

---

## 1. Resumo

**Cinco causas explicam quase tudo:**

1. **A oferta paga descreve um produto mais avançado do que o que existe.** As páginas de plano prometem conta, histórico, contador de dias, selo, "conversa guiada com correção" e "simulação". As páginas das ferramentas, escritas a partir do código, dizem "não tem conta: o progresso fica no navegador" e que simulação está "em construção".
2. **O fim do teste grátis deixou o pago e o grátis lado a lado.** O ETT Player continua público (só portão de e-mail). O botão "Abrir o ETT Player" fica ao lado de "Começar na plataforma (R$ 97)", que promete "abrir todas as ferramentas".
3. **Conteúdo parado no tempo**, de antes do reposicionamento (31/10) e até de antes dos planos (31/07): "programa gratuito" nos Termos e na Política, rotação entre 4 locais (UTFPR, Hard Rock, Habitat), Google Meet com inscrição obrigatória, público só de tech, promessas de prazo.
4. **Datas vencidas tratadas como futuras** em metadados, JSON-LD, posts e kits, e páginas (/online/, EN/ES) que leem a lista estática vazia em vez dos geradores da agenda.
5. **EN/ES congeladas em maio–julho:** curso, depoimentos fictícios, ferramentas que não existem, Google Form em português só para estados brasileiros, `<html lang="pt-BR">`.

**Decisões que só você pode tomar** (o resto é correção de texto):

| # | Decisão | Por quê |
|---|---|---|
| D1 | **O que exatamente a ativação de R$ 97 destrava?** Ou o Player ganha controle de acesso, ou a oferta passa a ser "orientação + material + acompanhamento" (com as ferramentas abertas) | Hoje o site vende como pago algo que o visitante abre de graça ao lado |
| D2 | **Como se mede a Trilha de Aceleração** (20 dias válidos) se as ferramentas não têm conta? | A trilha promete contador "visível o tempo todo" e "não é na confiança", mas não existe medição |
| D3 | **EN/ES: tirar do ar e reescrever** ou corrigir ponto a ponto? | A revisão recomenda tirar do ar (noindex/redirecionar para uma página curta), porque os erros atingem quase todas as seções |
| D4 | **Termos de Uso e Política de Privacidade**: reescrever para cobrir venda (ativação, assinatura, renovação, cancelamento, 7 dias do CDC, nota pela Azuris, razão social/CNPJ do controlador) | Hoje dizem "o ETT é um programa gratuito" e não falam de pagamento. Recomendo revisão jurídica |
| D5 | **O botão "Começar — R$ 97" do menu**: checkout direto (como pedido) ou página da ativação? | A revisão aponta que quem chega pela primeira vez cai no pagamento sem saber o que compra. Nas páginas de imersão, ele ainda pode ser lido como o preço da imersão |

### Decisões tomadas pelo Alessandro (09/11/2026)

- **D1 (ativação × Player):** escolheu "Player com amostra" na 1ª rodada, mas na 2ª pediu para **deixar o Player como está** (público) e não marcou quais ferramentas seriam amostra. Leitura aplicada: o site não afirma nenhuma trava que não existe. A ativação é vendida pelo que acrescenta (2 sessões de orientação, plano, material, acompanhamento por 30 dias) e as ferramentas aparecem como "abertas para experimentar no Player". A confirmar com ele.
- **D2 (Aceleração):** manter a trilha e **tirar do texto o que não existe** (contador, histórico, selo). A meta é acompanhada nas sessões ou autodeclarada até o sistema existir.
- **D3 (EN/ES):** **página curta por idioma** (o que é o ETT, encontro online aberto com horário no fuso do visitante, resto do site em português). As 6 páginas antigas saem do índice (noindex).
- **D4 (Termos/Política):** **rascunho + revisão jurídica.** Empresa: Azuris, com espaço reservado [RAZÃO SOCIAL / CNPJ] para ele preencher.
- **D5 (botão do menu):** **manter** "Começar — R$ 97" direto no checkout, em todas as páginas.

---

## 2. Gravidade ALTA

### Oferta paga

**A1. A ativação "abre todas as ferramentas", mas o Player é público ao lado do botão de compra.**
- Rotas: home (#ferramentas), /ferramentas/, as 10 páginas /ferramentas/<id>/, /detalhes/.
- Trechos: "Todas as ferramentas do ETT Player por 30 dias", "Sem versão reduzida e sem trava por ferramenta". Ao lado do CTA pago fica "Abrir o ETT Player". As páginas das ferramentas dizem "Você abre o teste, sem cadastro e sem e-mail" (Learning DNA) e "Não tem cadastro nem histórico" (Radio). O Level Check, listado como item pago, também é aberto.
- Correção: depende da D1.
- Fontes: `components/FerramentasResumo.tsx:147-160`, `app/ferramentas/[id]/page.tsx:82,125-143`, `app/ferramentas/page.tsx`, `lib/planos.ts:59-67`.

**A2. Os planos prometem conta, histórico, contador e selo, mas as ferramentas não têm conta.**
- Rotas: home (#precos), /planos/adesao/, /planos/dedicacao/, /planos/aceleracao/.
- Trechos dos planos: "Conta no ETT Player", "O sistema acompanha e registra sua evolução", "Cada palavra revisada, cada episódio, cada simulação entra no seu histórico", "O contador fica visível o tempo todo no Player… Não é na confiança", "Selo de sequência no Player". Trechos das ferramentas: "Não tem conta: o progresso fica salvo no navegador do aparelho" (Flashcards, Fórmula Fluente, AudioBook, Legendas), "Sem conta" (Daily). "Gamificação e ranking" está como "Em construção".
- Correção: tirar contador, histórico, selo e "o sistema registra" até existirem, ou explicar a medição real (D2).
- Fontes: `lib/planos.ts:65-66,166-167,284,329,334,382`, `lib/ferramentas-paginas.ts:49,184`.

**A3. "Conversa guiada com correção" e "simulação" na lista paga, mas não existem.**
- Rotas: /planos/adesao/, /planos/dedicacao/.
- Por quê: o Voice Agent Lab é prova de conceito em modo demonstração, "Simulações com prompts" está em construção e a página do Speak diz "o Speak não corrige sua fala automaticamente".
- Fontes: `components/planos/AdesaoDetalhe.tsx:50,93`, `lib/planos.ts:235,240,279,284`.

**A4. Encontro gratuito aparecendo como benefício pago.**
- Rotas: home (Passo 1 e cartão da ativação), /planos/adesao/.
- Trechos: "Passo 1 · seu 1º mês — Ativação acompanhada, R$ 97. 30 dias com todas as ferramentas, duas sessões de orientação **e os encontros**" e o item pago "Conta no ETT Player **e sala do ETT Speak**". O Speak, que é a sala do encontro grátis, também entra nas "10 ferramentas" incluídas.
- Correção: tirar "e os encontros" do Passo 1 e "sala do ETT Speak" da lista paga. Separar Speak e Meet como "onde acontecem os encontros (grátis)".
- Fontes: `components/Precos.tsx` (Passo 1), `lib/planos.ts:65`.

**A5. /detalhes/ diz que o Speak serve para ensaiar sozinho; a página do Speak diz o contrário.**
- Trechos em /detalhes/: "o Speak permite ensaiar conversas guiadas entre um encontro e outro" e "O Daily organiza o que fazer em cada dia".
- Trechos das páginas das ferramentas: "Não é uma ferramenta para praticar sozinho"; o Daily é um diário falado, não um organizador.
- Fontes: `components/Methodology.tsx:37`, `lib/home-faqs.ts:73,77,81`, `components/HowItWorks.tsx:38`.

### Encontros (landings antigas)

**A6. Google Meet × ETT Speak.**
- Rotas: /online/ (11 menções), /conversacao/, /curitiba/ e EN/ES.
- Trechos: "Grupo de conversação semanal gratuito via Google Meet", "A gente manda o link do Google Meet". A home, a /agenda/ e /ferramentas/speak/ dizem "na sala do ETT Speak, direto no navegador". Também está nos metadados e no JSON-LD.
- Fontes: `app/online/page.tsx` (29, 38, 87, 108, 116, 160, 185, 221, 226, 262, 312, 428), `app/conversacao/page.tsx:363,440`, `app/curitiba/page.tsx:326`, `app/en/schedule/page.tsx`, `app/es/agenda/page.tsx`.

**A7. Inscrição obrigatória × "sem cadastro".**
- /online/: "Você se inscreve, recebe o link…", "1. Inscrição — Preenche o formulário", CTA "Receber o link do próximo encontro".
- /curitiba/: CTA "Garantir lugar no próximo encontro" (sugere vaga limitada) ao lado de "Entrada franca, sem cadastro".
- A home e a agenda dizem "É só aparecer".
- Correção: CTA primário "Entrar na sala" (Speak) e "Ver a agenda"; o formulário vira lembrete opcional.

**A8. As landings prometem material das ferramentas a quem só deixa nome e e-mail.**
- Trechos: "link do Google Meet + a agenda do mês + **materiais iniciais das ferramentas**" e "material de boas-vindas" (/online/, /conversacao/).
- Por quê: contradiz a decisão de 01/08 (lead recebe só link e agenda) e o LeadForm da home.
- Fontes: `app/online/page.tsx:221,428`, `app/conversacao/page.tsx:440-441`.

**A9. /online/ nunca mostra datas.**
- Trecho: "Sem datas online confirmadas nos próximos dias", embaixo do título "Toda Segunda às 20h".
- Por quê: lê `agendaEvents` (vazio) em vez de `encontrosOnlineRecorrentes()`, o padrão que o CLAUDE.md proíbe. Vai continuar assim depois de 16/11. O mesmo vale para /en/schedule/ e /es/agenda/.
- Fonte: `app/online/page.tsx:15,62,267-275`.

### Legal

**A10. Termos e Política não cobrem nada do que se vende.**
- Trechos: "O ETT é um programa gratuito de conversação…", "A inscrição é gratuita e voluntária", "Você pode sair do programa a qualquer momento, sem ônus". Atualizados em 14/05/2026.
- Não falam de ativação, assinatura, renovação, cancelamento, 7 dias do CDC, reembolso, nota pela Azuris nem dados de pagamento. O controlador aparece como "ecossistema DSSBR & GUBigData IA", sem razão social nem CNPJ.
- A Política lista campos que não existem mais (LinkedIn, nível) e omite pagamento, o portão de e-mail do Player e o WhatsApp.
- Também diz que dados só são compartilhados com consentimento específico, mas o formulário das imersões repassa contato à Cherry Top sem aviso.
- Fontes: `app/termos-uso/page.tsx:51,70,78,107,159,194`, `app/politica-privacidade/page.tsx:51,71,103,107,199`. Decisão D4.

**A11. Locais que saíram (UTFPR, Hard Rock, Habitat).**
- Termos ("rotação por venues parceiros (IEP, UTFPR, Hard Rock Cafe, Habitat)"), Política (parceiros "UTFPR, Habitat").
- Blog: /blog/praticar-ingles-em-curitiba-gratis/ (o post inteiro: "4 Locais Onde Você Pode Conversar Toda Semana"), /blog/como-destravar-conversacao-em-ingles/, /blog/cherrytop-business-meal/.
- EN/ES /schedule/ e /agenda/ ("We rotate between 4 venues").
- Correção: "IEP Talks, sábados às 10h, no IEP (Rua Emiliano Perneta, 174)". O post de Curitiba precisa ser reescrito: é post de SEO mandando gente para lugares sem encontro.

**A12. JSON-LD das imersões publica preço e põe o ETT como organizador.**
- As páginas dizem "Sob consulta / Oferecido por Cherry Top", mas os dados estruturados dizem: BH `7000–12000 BRL`, Flórida `5000–12000 USD`, Curitiba `3000–6000 BRL`, e `organizer` = ETT nas 4 (inclusive a Business School). O Google pode exibir isso.
- Fontes: `app/imersoes/belo-horizonte/page.tsx:78,87-89`, `florida/page.tsx:70,78-80`, `curitiba/page.tsx:50,58-60`, `business-school/page.tsx:53`.

### Promessas e conteúdo vencido

**A13. Promessas de prazo e resultado.**
- /blog/como-destravar-conversacao-em-ingles/: "destravar em 60 dias", "Em 90 dias isso vira 1.000 palavras ativas — o suficiente pra conversação fluente".
- /ff/ (e /en/method/, /es/metodo/): "chega à fluência funcional em poucos meses, mesmo do zero", "Em 30 minutos você muda de chave".
- Landings: "Chega, conversa, sai falando inglês", "Sai um job remoto".
- Fontes: `app/blog/como-destravar-conversacao-em-ingles/page.tsx:98,174,188,192,218`, `components/FormulaFluente.tsx:205,596`, `app/online/page.tsx:231,359-360`.

**A14. O 1º post do blog é um evento vencido apresentado como futuro.**
- "CherryTop Business Meal… (sábado, 1º de agosto)", com os botões "Entrar na sala" (a sala ainda responde) e "Entrar no grupo de WhatsApp".
- Correção: aviso "Evento realizado em 01/08/2026", tirar os botões e descer o post na listagem.
- Fontes: `lib/blog-posts.ts:14-25`, `app/blog/cherrytop-business-meal/page.tsx`.

**A15. O CTA de /ff/ "Inscreva-se no ETT e receba o ebook" leva para fora do site.**
- O link vai para um artigo da GUBigData ("Programa de Aceleração de Inglês…"), sem inscrição nem ebook. "Lançamento do ebook em breve" está lá há meses.
- Fonte: `components/FormulaFluente.tsx:31,762-782`.

**A16. O e-mail do convite de segunda contradiz a cobrança.**
- Trechos: "As ferramentas do ETT já estão no ar… **liberado pra quem participa da comunidade**", o "extra" de "3 novas ferramentas" e o rodapé "Programa aberto de aceleração de inglês".
- Fonte: `public/divulgacao/convitesegunda20h/email.html:140,271,303`.

### EN/ES (detalhe completo na seção 5)

**A17. EN/ES contradizem o site em quase todas as seções.**
- Curso/programa de aceleração; 4 depoimentos fictícios com prazo ("Got the job 45 days into the program").
- "300h / 3.000 words to fluency" como resultado; 10 ferramentas que não batem com o Player.
- Google Form em português que pergunta o estado brasileiro e o "WhatsApp com DDD".
- Google Meet com cadastro; agenda vazia; sem IEP Talks; "premium access / paid layers".
- `<html lang="pt-BR">`.
- Decisão D3.

---

## 3. Gravidade MÉDIA

**Cobrança e vocabulário**
- **M1. "Adesão", "ativação" e "planos" para a mesma coisa.** "sua adesão está isenta", "A adesão de R$ 97 vira mensalidade?", "inclusos na adesão de R$ 97", `cta: 'Fazer minha adesão'`. Padronizar em "ativação" no texto visível (o slug pode continuar `adesao`). Fontes: `components/Precos.tsx:97-99`, `lib/planos.ts:70,400-415`.
- **M2. "Quem já está numa trilha gratuita não passa a pagar. Se você se cadastrou antes desta página mudar…"** Sem data nem critério, e "cadastrou" pode ser lido como "deixei o e-mail". Dar data e critério ou mover para um FAQ de antigos usuários. Fontes: `components/Precos.tsx:86-100`, `lib/planos.ts:412-415`.
- **M3. Dedicação: "Sem rotina obrigatória — 1h de dedicação por dia".** Lê-se como exigência, que é justamente a regra da Aceleração. Sugestão: "Sem meta: use quando quiser". Fonte: `lib/planos.ts:97,161,271`.
- **M4. A meta da Aceleração aparece de 3 jeitos:** "1h por dia", "20 dias válidos por mês" e "dia em que as tarefas foram concluídas", e ninguém explica quais são as tarefas. Usar uma definição só. Fonte: `lib/planos.ts:109,329`, `components/Precos.tsx`.
- **M5. "Plano de estudos" × "plano de prática".** "Estudos" puxa para curso. Padronizar em "plano de prática". Fonte: `lib/planos.ts:235,298,348`.
- **M6. "Vídeos de demonstração" garantidos:** "Cada ferramenta tem vídeo", mas as páginas das trilhas mostram "Vídeo em breve". Conferir se os vídeos existem antes de vender. Fonte: `components/planos/AdesaoDetalhe.tsx:73`.
- **M7. Muitos rótulos para o mesmo destino pago:** "Começar — R$ 97", "Começar na plataforma" (sem preço), "Ver a ativação acompanhada", "Fazer minha ativação", ao lado de "Tenho Interesse" (formulário) e "Abrir o ETT Player" (grátis). Padronizar e mostrar o preço sempre que o destino for pago.

**Encontros e landings**
- **M8. Nenhuma página fora da home e da /agenda/ fala da pausa** (volta 16/11 e 21/11): /online/, /conversacao/, /curitiba/, o FAQ da home, o rodapé das 12 páginas de ferramenta e o CTA de todos os posts do blog. O botão "Entrar na sala" abre o Speak durante a pausa sem aviso. Reaproveitar `REINICIO`.
- **M9. /conversacao/ fala como curso e cita concorrentes:** "Aula 1-on-1 (Cambly et al.)… Caro, isolado", "palavras novas anotadas no sistema, próximo passo individual sugerido", "não pra ficar escutando o professor". Os blocos somam 95 min num encontro de 90. Fonte: `app/conversacao/page.tsx:108-124,140,206-212,274`.
- **M10. Público só de tech nas landings** ("Aberto a profissionais de tech do Brasil inteiro"), enquanto a home diz "abertos a qualquer pessoa". "Grupo pequeno (15-25 pessoas)" também confunde. Fonte: `app/online/page.tsx:29,161,226`.
- **M11. O Speak pede nome, e-mail e cargo na entrada, mas o encontro é "sem cadastro".** Avisar ("a sala pede nome e e-mail, sem criar conta"). Fonte: `lib/ferramentas-paginas.ts:409`.
- **M12. O Meet sugere outros presenciais e uma "agenda oficial"** que não é a agenda do site ("Com 4 confirmações (online) ou 6 (presencial)… entra na agenda oficial"). Fonte: `lib/ferramentas-paginas.ts` (meet).
- **M13. Level Check aparece como "Disponível" no índice e como "alfa" na própria página.**

**Imersões**
- **M14. Dois "Tenho interesse" diferentes na mesma página:** o do menu leva ao formulário RD (que manda link do encontro) e o da imersão leva ao Google Form da Cherry Top. Ao lado de "Investimento: Sob consulta" fica o botão do menu "Começar — R$ 97", que pode ser lido como o preço da imersão (D5).
- **M15. O Google Form das imersões** (fora do repositório): oferece a opção "Curitiba" da edição de julho (encerrada) separada de "Curitiba - Business School", tem o erro "Belohorizonte" e não avisa que o contato vai para a Cherry Top (LGPD).
- **M16. /imersoes/: título, descrição e JSON-LD ignoram a Business School** ("Imersões… — BH e Flórida") e listam "Curitiba (jul/2026)", que já passou. Fonte: `app/imersoes/page.tsx:25-45,60-63,82-84`.
- **M17. /imersoes/curitiba/ (julho, encerrada) e BH (2 de 3 turmas passadas)** continuam como futuras no título, na descrição, no OG e no `EventScheduled`. O selo "Encerrada" só aparece com JS.
- **M18. O ETT aparece como coautor de imersão** em /blog/grupo-de-conversacao-vs-aula-particular/: "a gente trabalha com a Cherry Top em imersões". O post também traz números sem fonte ("30 dias de imersão equivalem a 6-12 meses de estudo").

**Blog, /ff/, kits**
- **M19. /blog/como-destravar…:** ferramentas que não existem ("As ferramentas de IA do programa geram prompts", "diário falado") e "A inscrição leva 2 minutos… recebe os materiais das ferramentas".
- **M20. /blog/parceria-aprendendo-ingles/:** "English Talk Time — Programa de Aceleração de Inglês" e "Em breve… uma nova iniciativa de formação" (de junho).
- **M21. /ff/:** "o coração dos encontros **mensais**" (são semanais). A "aula 1 grátis, sem cadastro" é oferecida enquanto o resto diz que ferramenta só vem na ativação. O nome "ETT Subtitles" difere do "Legendas" do catálogo.
- **M22. A Fórmula Fluente é apresentada como "Metodologia ETT"** e, nos Termos, como "propriedade do ETT", mas é método de parceiro (Frank Florida). Fontes: `app/termos-uso/page.tsx` §5, `app/ff/page.tsx:23-26,49`.
- **M23. Kits de eventos passados sem aviso de encerrado:** lancamento-dssbr-2026 (o Google Form "Lançamento… 27/10" ainda aceita inscrição) e cherrytop-business-meal. O hub lista os dois sem selo "Realizado".
- **M24. O kit e o e-mail do convite de segunda** ainda dizem "não é aula nem curso… sem matrícula, sem mensalidade e sem venda no fim" e "Toda segunda", sem a pausa.

---

## 4. Gravidade BAIXA

- **B1.** Rodapé: ícones de LinkedIn, Instagram e GitHub com `href="#"`. A coluna "Parceiros" lista 4 dos 7 parceiros, e os 4 links vão para o mesmo /#parceiros (`components/Footer.tsx:6-11,69-75,110-124`).
- **B2.** /404/ é a página padrão do Next, em inglês ("This page could not be found") e sem menu. Criar `app/not-found.tsx`.
- **B3.** O item "Como funciona" do menu leva a /detalhes/, enquanto "Como funciona o ETT" no hero leva a #como-funciona. Renomear o do menu para "Sobre o ETT" ou "Detalhes".
- **B4.** Nível de entrada: "Qualquer nível" (/agenda/) × "A partir de A2… quem está do zero a gente orienta a construir uma base primeiro" (FAQ).
- **B5.** "Sem venda no fim" (/agenda/) × "entraremos em contato" (LeadForm). A mensagem de sucesso "Pronto, você está dentro!" sugere matrícula. O telefone promete "lembrete no WhatsApp": confirmar se ele existe.
- **B6.** Selo "Voltamos!" na home antes da volta (16/11). A faixa do topo diz "estão voltando".
- **B7.** "Turma" na página do Speak ("O moderador divide a turma"): linguagem de curso.
- **B8.** Parceiros: a Fórmula Fluente aparece como "o livro está dentro do ETT Player", mas a ferramenta são as 83 aulas em vídeo (`lib/parceiros.ts:98`).
- **B9.** Legendas "já faz shadowing" × ShadowDaily "Em breve — Shadowing": diferenciar.
- **B10.** /curitiba/ não mostra o endereço do IEP e promete "o link da comunidade", que não existe em lugar nenhum.
- **B11.** Flórida: nível mínimo "B1+" (FAQ) × "pré-intermediário" (página). "Casa de imersão" × resort.
- **B12.** BH: título "Belo Horizonte", local "Lagoa Santa". Usar "Lagoa Santa (região de BH)".
- **B13.** Nome da Cherry Top em 3 variações ("Business Communication", "Global Business School", "CherryTop"). A fundadora aparece como "Leonarda Flyhigher" e como "Maria Leonardo Aparecida": se for a mesma pessoa, padronizar.
- **B14.** Business School: "Por conta do participante: passagens aéreas, hospedagem, traslado" soa estranho num evento em Curitiba. Sugestão: "deslocamento e hospedagem, se vier de fora".
- **B15.** Indicação do Kaufmann: o conteúdo é um vídeo, mas o template diz "O que o artigo diz".
- **B16.** O blog parece parado: última indicação em 06/06, último post próprio de 27/07 (o evento vencido). Não há post da Business School nem do reposicionamento.
- **B17.** /ff/: "365 mil alunos formados" como fato do ETT. Atribuir à Fórmula Fluente.
- **B18.** Idade: Termos "maiores de 16" × Política "menores de 12". Não há regra para menor contratando plano pago.
- **B19.** Instruções internas velhas nos kits ("pull manual no painel do Hostinger"; o auto deploy está ligado desde 02/08).
- **B20.** O e-mail do convite diz "porque se cadastrou para participar dos encontros". Melhor "porque pediu informações sobre o ETT".

---

## 5. EN/ES em detalhe

As 6 rotas (`/en/`, `/en/method/`, `/en/schedule/`, `/es/`, `/es/metodo/`, `/es/agenda/`) são um retrato da home de maio a julho e não leem nenhuma fonte única.

| Gravidade | Problema | Fonte |
|---|---|---|
| Alta | Curso/"English acceleration program for Tech…", "functional English in months, not years" | `app/en/page.tsx:159,209-231`, `lib/i18n/messages.ts:150,180` |
| Alta | 4 depoimentos fictícios com prazo e 5 estrelas ("Illustrative testimonials…") | `app/en/page.tsx:119-144,400-430` |
| Alta | "300h / 3,000 words to fluency", "10 words/day = fluency", "5x salary", "+365,000 students accelerated" | `app/en/page.tsx:76-81,146-153` |
| Alta | 10 ferramentas que não batem com o Player (ETT Journal, Recommendation System, AI Prompt Simulator, GameZone com "monthly jackpot", Printed Materials com QR) | `app/en/page.tsx:106-117,178-179` |
| Alta | Google Form em português ("Em que Estado você mora?", só estados brasileiros, "WhatsApp com DDD") em todos os CTAs | `app/en/page.tsx:35`, `app/en/schedule/page.tsx:9` etc. |
| Alta | Google Meet com cadastro obrigatório ("Sign up to get the Google Meet link") | `app/en/schedule/page.tsx:19,27,128…` |
| Alta | Agenda vazia ("No confirmed online events"), sem a volta em 16/11, sem IEP Talks, JSON-LD vazio | `app/en/schedule/page.tsx:5,13,101-102` |
| Alta | Presencial vago ou com 4 sedes antigas; o IEP Talks não existe | `app/en/schedule/page.tsx:270` |
| Alta | FAQ: "paid layers: immersions… premium access to the AI tools"; nada sobre a ativação | `app/en/page.tsx:169` |
| Alta | `<html lang="pt-BR">` em todas as páginas EN/ES | `app/layout.tsx:188` |
| Média | Nível "A2 or higher… beginners routed to BeeTools" (escola em português) | `app/en/page.tsx:173` |
| Média | Formato do encontro inventado ("Sub-sessions in pairs, then group debrief", "salary negotiation") | `app/en/page.tsx:84-88,165` |
| Média | Sem resposta para quem é de fora: em que idioma é o encontro, se precisa falar português, se dá para pagar do exterior, interface do Player em português | — |
| Média | Horário só em BRT, sem conversão para o fuso do visitante | `app/en/schedule/page.tsx:218` |
| Média | ES: "abierto a toda LATAM" × "cualquier lugar del mundo" | `app/es/agenda/page.tsx:41,129,166` |
| Média | Teaser da Flórida como parceria do ETT, sem datas e sem dizer que o programa é em português | `app/en/page.tsx:525-544` |
| Média | Links do rodapé levam ao pt mesmo havendo versão traduzida; "Read the full method (in Portuguese)" vai para /ff/ embora /en/method/ exista | `components/Footer.tsx:21-42`, `app/en/page.tsx:312` |
| Média | O seletor de idioma sempre volta para a home; o menu EN/ES não tem preços nem caminho de compra | `components/Navbar.tsx:28-52,161,238` |
| Média | Botão do WhatsApp e aria-labels em português | `components/WhatsappFloat.tsx:5,15,27` |
| Média | /en/method/ promete legenda PT+EN na aula (não confirmado no app) e "no signup required" | `app/en/method/page.tsx:339,393,406` |
| Média | JSON-LD `Service` com `price 0 USD` apontando para o Google Form | `app/en/page.tsx:65-71` |
| Baixa | hreflang par a par com conteúdo oposto; 404 EN diz "only the homepage in English is ready"; "Fluent Formula" × "Fórmula Fluente"; keywords de curso para tech | — |

**Recomendação da revisão:** não corrigir ponto a ponto. Tirar EN/ES do ar já (noindex, fora do sitemap e do hreflang, ou redirecionar para uma página curta por idioma) e reescrever depois a partir do pt atual, lendo as mesmas fontes únicas. A página curta diria: o que é o ETT; que o encontro online de segunda é aberto a qualquer pessoa, no Speak e sem cadastro, com horário no fuso do visitante; que o resto do site está em português; e como pagar e em que idioma é o encontro.

---

## 6. Ordem sugerida de correção

1. **Onda 1 — o que contradiz a cobrança nova** (texto, sem decisão de produto):
   - A3, A4 e A5;
   - M1, M3, M4 e M5;
   - A16 (e-mail do convite);
   - A8 (material para lead).
2. **Onda 2 — landings de encontro:**
   - A6, A7 e A9 em /online/, /conversacao/ e /curitiba/;
   - M8 (pausa), M9, M10 e M11.
3. **Onda 3 — vencidos e SEO:**
   - A11 (locais antigos, inclusive o post de Curitiba) e A12 (JSON-LD das imersões);
   - A14 (post do Business Meal), M16 e M17;
   - M23 (kits encerrados);
   - B1 e B2.
4. **Onda 4 — promessas:** A13, A15, M18 a M22 (blog e /ff/).
5. **Depende das suas decisões:**
   - A1 e A2 (D1, D2);
   - EN/ES (D3);
   - Termos e Política (D4);
   - botão do menu (D5).

Pendência externa (Google Forms): M15 (formulário das imersões) e o formulário do lançamento ainda aberto (M23).
