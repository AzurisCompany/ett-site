/**
 * Conteúdo das páginas individuais das ferramentas (`/ferramentas/<id>/`).
 *
 * ⚠️ Escrito a partir de uma varredura do CÓDIGO de cada app em 01/11/2026 —
 * ver `novoConteudo/ferramentas/LEVANTAMENTO-FERRAMENTAS-2026-11-01.md`. Regra:
 * só entra o que está implementado e no ar. O que está documentado nos repos
 * ou nos slides do lançamento mas não existe (flashcards automáticos, IA que
 * personaliza, repetição espaçada, sincronização entre apps…) NÃO entra.
 *
 * Decisões do Alessandro (01/11/2026):
 * - texto neutro onde há dúvida de direitos: não citar o deck do Flashcards
 *   nem as séries das Legendas pelo nome, nem logos das rádios;
 * - Voice Agent Lab (modo demonstração) e ShadowDaily (em breve) ficam só no
 *   índice `/ferramentas/`, sem página;
 * - o texto curto de `lib/ferramentas.ts` (home, /detalhes/, /conversacao/)
 *   NÃO foi alterado nesta rodada, mesmo onde diverge daqui.
 *
 * O `id` é o mesmo de `lib/ferramentas.ts` (nome, grupo e status vêm de lá).
 * O botão "Abrir" leva ao ETT Player, que é a porta de entrada das ferramentas
 * (decisão #3 de 01/08) — a exceção é o Speak, cuja sala o site já linka.
 */

export type RecursoFerramenta = { titulo: string; texto: string }

export type PaginaFerramenta = {
  id: string
  /** Título da página (h1) — o que a ferramenta faz, não slogan. */
  titulo: string
  /** Meta description (até ~155 caracteres). */
  descricao: string
  /** Parágrafo de abertura. */
  resumo: string
  paraQuem: string
  comoFunciona: string[]
  recursos: RecursoFerramenta[]
  /** O que tem dentro (catálogo, base de palavras, cenários). */
  conteudo: string[]
  /** Limitações e avisos honestos. */
  bomSaber: string[]
  imagem: string
  alt: string
  /** Link direto quando faz sentido; senão o botão vai pro ETT Player. */
  linkDireto?: { url: string; rotulo: string }
  /** Link interno relacionado. */
  relacionado?: { href: string; rotulo: string }
}

const DADOS_NO_APARELHO =
  'Não tem conta: o progresso fica salvo no navegador do aparelho. Trocar de aparelho ou limpar os dados do navegador apaga o histórico.'

export const paginasFerramentas: PaginaFerramenta[] = [
  {
    id: 'level-check',
    titulo: 'Level Check: descubra quais palavras frequentes do inglês você ainda não conhece',
    descricao:
      'Teste de vocabulário do ETT baseado nas cerca de 3.000 palavras mais frequentes do inglês, com nível estimado, lista do que falta e plano de estudo.',
    resumo:
      'O Level Check mostra quanto do vocabulário mais frequente do inglês você já domina. Você percorre uma lista de cerca de 3.000 palavras, marca as que não conhece e recebe um painel com o resultado, a lista do que falta e um plano de estudo para ela.',
    paraQuem:
      'Para quem quer um ponto de partida concreto: saber quais palavras de uso diário ainda faltam, em vez de estudar listas genéricas.',
    comoFunciona: [
      'Antes do teste, você informa nome e contato.',
      'A lista aparece em etapas de 350 palavras. Você marca só as que não conhece, e o progresso é salvo a cada etapa.',
      'No fim, um painel mostra a porcentagem de palavras conhecidas, o nível estimado e as palavras que faltam, organizadas por classe gramatical.',
      'Você escolhe o ritmo do plano de estudo (10, 20 ou 30 palavras por dia) e exporta o resultado.',
    ],
    recursos: [
      {
        titulo: 'Base de alta frequência',
        texto:
          'A lista vem do Longman Communication 3000, com a indicação de quais palavras são mais comuns na fala e na escrita.',
      },
      {
        titulo: 'Painel de resultado',
        texto:
          'Porcentagem de vocabulário, nível estimado na escala do Quadro Europeu (A1 a C2), gráfico por classe gramatical e lista de prioridade.',
      },
      {
        titulo: 'Plano de estudo',
        texto:
          'Distribui as palavras que faltam em 10, 20 ou 30 por dia, com revisões marcadas nos dias 2, 4, 7, 14 e 30.',
      },
      {
        titulo: 'Exportação e histórico',
        texto:
          'Relatório em PDF, lista das palavras desconhecidas em CSV e histórico dos testes que você já fez.',
      },
    ],
    conteudo: [
      'Cerca de 3.160 palavras, cada uma com classe gramatical e frequência na fala e na escrita.',
      'O nível mostrado é uma estimativa calculada a partir da porcentagem de palavras conhecidas. Serve como referência para orientar o estudo, não como certificação.',
    ],
    bomSaber: [
      'Já está disponível, em versão de teste (alfa), e pode mudar.',
      'Feito para computador ou notebook: o próprio app avisa que não é otimizado para celular.',
      'A interface abre em inglês, com opção de português.',
    ],
    imagem: '/images/ferramentas/level-check.webp',
    alt: 'Tela inicial do ETT Level Check com os botões para começar o teste',
  },
  {
    id: 'learning-dna',
    titulo: 'Learning DNA: um questionário rápido sobre como você prefere estudar',
    descricao:
      'Questionário do ETT com 30 afirmações que mostra se você prefere estudar vendo, ouvindo ou fazendo, com sugestões de estratégia para cada perfil.',
    resumo:
      'O Learning DNA é um questionário curto sobre preferências de estudo. Em 4 a 6 minutos, você responde 30 afirmações e vê qual canal você usa mais (visual, auditivo ou cinestésico), qual vem em segundo lugar e qual vale a pena exercitar.',
    paraQuem:
      'Para quem está começando a montar uma rotina e quer pensar sobre o tipo de atividade que mais combina com você: ler, ouvir ou praticar.',
    comoFunciona: [
      'Você abre o teste, sem cadastro e sem e-mail.',
      'As 30 afirmações aparecem em 3 blocos de 10, embaralhadas. Você marca as que combinam com você.',
      'O resultado mostra os três canais em ordem, com o predominante, o secundário e o canal a fortalecer.',
      'Para cada canal, o app lista características e cinco estratégias de estudo. Dá para refazer quando quiser.',
    ],
    recursos: [
      {
        titulo: '30 afirmações do dia a dia',
        texto:
          'Frases escritas para o ETT sobre situações de estudo, como "gosto de anotar novas palavras em listas".',
      },
      {
        titulo: 'Resultado em ordem',
        texto:
          'Barras com o peso de cada canal. Quando dois ficam muito próximos, os dois aparecem como predominantes.',
      },
      {
        titulo: 'Estratégias por canal',
        texto: 'Sugestões práticas de como estudar para cada perfil, inclusive para o canal menos usado.',
      },
    ],
    conteudo: [
      'O teste avalia preferência sensorial no modelo visual, auditivo e cinestésico.',
      'O próprio app explica que é uma ferramenta pedagógica, não um diagnóstico.',
    ],
    bomSaber: [
      'Preferência não é limite. Todo mundo aprende por todos os canais, e o resultado é um ponto de partida para escolher atividades, não uma regra.',
      'Sem cadastro: o resultado fica salvo só no aparelho em que você fez o teste.',
    ],
    imagem: '/images/ferramentas/learning-dna.webp',
    alt: 'Tela inicial do ETT Learning DNA com o convite para fazer o teste',
  },
  {
    id: 'daily',
    titulo: 'Daily: o planner de prática do ETT, em que você fala em vez de escrever',
    descricao:
      'Versão digital do Participant’s Planner do ETT: diário de 30 dias, cartões "Tell me about…", pitch cronometrado e frases úteis, com ditado por voz.',
    resumo:
      'O Daily é a versão digital do Participant’s Planner, o caderno de prática do ETT. Cada página traz um exercício, e você responde falando: o app transcreve sua fala sobre as linhas do caderno. Também dá para digitar.',
    paraQuem:
      'Para quem quer uma rotina de fala com roteiro, sozinho, em poucos minutos por dia, e para quem já usa o planner impresso.',
    comoFunciona: [
      'Você abre o planner e escolhe um dos blocos no sumário.',
      'Em cada página, aperta o microfone e responde em inglês. A transcrição aparece sobre as linhas, e o áudio fica disponível para você ouvir de novo.',
      'Tudo é salvo automaticamente, no próprio aparelho.',
      'Quem usa o caderno impresso pode sincronizar uma página pelo QR Code ou fotografando o que escreveu à mão.',
    ],
    recursos: [
      {
        titulo: 'Diário de 30 dias',
        texto: 'Uma página por dia para falar sobre o que você fez, o que vai fazer e como foi.',
      },
      {
        titulo: 'Cartões "Tell me about…"',
        texto:
          '16 temas, 8 pessoais e 8 profissionais, com cronômetro que vai aumentando o tempo de fala de 1 a 21 minutos.',
      },
      {
        titulo: 'Pitch cronometrado',
        texto: 'Roteiros de apresentação de 1, 3 e 5 minutos, com a estrutura STAR para contar uma experiência.',
      },
      {
        titulo: 'Self-tapes e frases úteis',
        texto:
          'Três gravações em vídeo para você comparar sua fala ao longo do tempo, 36 frases para usar em conversa e páginas para anotar os encontros.',
      },
    ],
    conteudo: [
      'O conteúdo é o mesmo do Participant’s Planner do ETT, um caderno de 80 páginas organizado em blocos: abertura, motivação, self-tapes, rotina de prática, cartões de conversa, diário, encontros, frases, pitch e reflexão.',
    ],
    bomSaber: [
      'A interface é toda em inglês.',
      'Feito para celular e pode ser instalado na tela inicial.',
      'Sem conta: textos e áudios ficam no aparelho. Trocar de aparelho ou limpar os dados do navegador apaga o que você gravou.',
    ],
    imagem: '/images/ferramentas/daily.webp',
    alt: 'Sumário do ETT Daily com os blocos do planner: Opening, My North, Mechanics e cartões Tell me about',
  },
  {
    id: 'flashcards',
    titulo: 'Flashcards: vocabulário com áudio, imagem e exemplo, em sessões curtas',
    descricao:
      'Flashcards do ETT: cada palavra tem pronúncia, imagem, significado e frase de exemplo com áudio, meta diária e revisão das palavras que você errou.',
    resumo:
      'O ETT Flashcards treina vocabulário em sessões curtas. Cada cartão traz a palavra com a pronúncia; ao virar, aparecem imagem, significado e uma frase de exemplo, todos com áudio.',
    paraQuem:
      'Para quem quer aumentar o vocabulário com alguns minutos por dia, ouvindo cada palavra em contexto.',
    comoFunciona: [
      'Você entra com seu e-mail, que serve só para identificar seu progresso no aparelho.',
      'Na frente do cartão aparece a palavra. Você responde se conhece ou não.',
      'O cartão vira e o app lê a palavra, o significado e o exemplo, nessa ordem.',
      'As palavras que você não sabia vão para a revisão. Cada uma só sai de lá depois de você acertar em dois dias seguidos.',
    ],
    recursos: [
      {
        titulo: 'Cartão completo com áudio',
        texto: 'Palavra, transcrição fonética, imagem, significado e frase de exemplo, cada parte com áudio.',
      },
      {
        titulo: 'Meta diária',
        texto: 'Você define quantas palavras novas quer ver por sessão e por dia, e pode continuar depois da meta.',
      },
      {
        titulo: 'Revisão do que você errou',
        texto: 'As palavras desconhecidas voltam até você acertar duas vezes, em dias seguidos.',
      },
      {
        titulo: 'Estatísticas',
        texto: 'Palavras estudadas, taxa de acerto, sequência de dias e tempo total de estudo.',
      },
    ],
    conteudo: [
      'Cerca de 3.900 cartões de vocabulário essencial do inglês, com áudio e imagem.',
      'As palavras novas de cada sessão são sorteadas entre as que você ainda não viu.',
    ],
    bomSaber: [
      'Funciona no celular e pode ser instalado na tela inicial.',
      DADOS_NO_APARELHO,
      'A interface mistura inglês e português.',
    ],
    imagem: '/images/ferramentas/flashcards.webp',
    alt: 'Cartão do ETT Flashcards mostrando a palavra nonetheless, a fonética e os botões Unknown e Known',
  },
  {
    id: 'formula-fluente',
    titulo: 'Fórmula Fluente: as aulas do método, com transcrição, dentro do ETT Player',
    descricao:
      'As 83 aulas em vídeo do Farol da Fluência, de Frank Florida, sobre como aprender idiomas, com transcrição sincronizada e retomada de onde você parou.',
    resumo:
      'Dentro do ETT Player, a Fórmula Fluente aparece como as aulas em vídeo do Farol da Fluência, de Frank Florida, sobre como aprender um idioma: escolher as palavras certas, criar o hábito, organizar o tempo. As aulas são em português e vêm com a transcrição sincronizada.',
    paraQuem:
      'Para quem quer entender o método antes de montar a rotina, ou rever um tema específico, como vocabulário, pronúncia ou produtividade.',
    comoFunciona: [
      'Você abre a lista de aulas, organizada em módulos.',
      'Escolhe uma aula: o vídeo toca com a transcrição acompanhando a fala.',
      'Pode repetir um trecho, mudar a velocidade e salvar frases favoritas.',
      'Na próxima vez, o app retoma a aula de onde você parou e marca as que você já assistiu.',
    ],
    recursos: [
      {
        titulo: 'Transcrição sincronizada',
        texto: 'O texto da aula acompanha o vídeo e dá para tocar a partir de qualquer frase.',
      },
      {
        titulo: 'Repetição e velocidade',
        texto: 'Loop de um trecho (1, 3, 5 vezes ou sem parar) e velocidade de 0,5× a 2×.',
      },
      {
        titulo: 'Continue de onde parou',
        texto: 'Retoma a última aula no ponto em que você parou e marca as assistidas.',
      },
    ],
    conteudo: [
      '83 aulas em vídeo, em português, agrupadas em módulos. Exemplos de temas: a jornada de um poliglota, as primeiras 1.000 palavras, a estrutura da gramática, como melhorar a pronúncia e administração do tempo.',
      'Os vídeos são exibidos pelo player do YouTube.',
    ],
    bomSaber: [
      'As aulas são faladas em português: o foco é o método de estudo, não a prática de escuta em inglês.',
      DADOS_NO_APARELHO,
    ],
    imagem: '/images/ferramentas/formula-fluente.webp',
    alt: 'Tela de estudo com a lista de aulas do Farol da Fluência e o player do episódio',
    relacionado: { href: '/ff/', rotulo: 'Conheça a Fórmula Fluente' },
  },
  {
    id: 'audiobook',
    titulo: 'AudioBook: clássicos da literatura em inglês, com o texto acompanhando o áudio',
    descricao:
      'Audiolivros clássicos em inglês com o texto sincronizado frase a frase: 16 livros, 410 capítulos, marcação de palavras e acompanhamento do tempo de escuta.',
    resumo:
      'O ETT AudioBook junta leitura e escuta: o áudio do livro toca e a frase que está sendo lida fica em destaque na tela. Clique numa palavra que não conhece e ela fica salva no seu vocabulário.',
    paraQuem:
      'Para quem quer treinar a escuta com uma narração clara e ao mesmo tempo ler, com livros que vão do mais fácil ao mais difícil.',
    comoFunciona: [
      'Você escolhe um livro na biblioteca e um capítulo.',
      'O áudio toca e a frase atual fica em destaque, com o texto rolando sozinho.',
      'Clique numa palavra para salvá-la. Ela aparece destacada sempre que voltar, em qualquer livro.',
      'Troque o modo de leitura quando quiser: texto corrido, estilo legenda ou uma frase por vez.',
    ],
    recursos: [
      {
        titulo: 'Texto sincronizado com o áudio',
        texto: 'Cada frase acende no momento em que é lida. Dá para voltar ou avançar 10 segundos, mudar a velocidade e repetir uma frase.',
      },
      {
        titulo: 'Suas palavras em destaque',
        texto: 'As palavras que você salva ficam marcadas em todos os livros.',
      },
      {
        titulo: 'Quatro modos de leitura',
        texto: 'Estudo, leitura contínua como num livro de papel, legenda e foco, com uma frase por vez.',
      },
      {
        titulo: 'Seu tempo de escuta',
        texto: 'Minutos ouvidos, dias seguidos, recorde e um mapa das últimas 12 semanas, registrados sozinhos.',
      },
    ],
    conteudo: [
      '16 livros e 410 capítulos de clássicos em domínio público, como Alice’s Adventures in Wonderland, Peter Pan, The Secret Garden, Frankenstein, Dracula, The Adventures of Sherlock Holmes, The Adventures of Tom Sawyer e The Time Machine.',
      'A biblioteca mostra o nível de leitura de cada livro, o gênero e o país de origem.',
      'Narração do Lit2Go, da University of South Florida.',
    ],
    bomSaber: ['Funciona no celular.', DADOS_NO_APARELHO],
    imagem: '/images/ferramentas/audiobook.webp',
    alt: 'ETT AudioBook tocando o capítulo 1 de Alice’s Adventures in Wonderland com o texto sincronizado',
  },
  {
    id: 'legendas',
    titulo: 'Legendas: pratique escuta e vocabulário com vídeos e legenda interativa',
    descricao:
      'Vídeos do YouTube com legenda em inglês sincronizada: clique numa palavra para salvar, veja o nível de cada uma, repita trechos e pratique shadowing.',
    resumo:
      'Nas Legendas, o vídeo toca com a legenda em inglês sincronizada, e cada palavra da legenda é clicável. A cor mostra o nível da palavra, a tradução aparece ao passar o mouse e um clique salva a palavra no seu vocabulário.',
    paraQuem:
      'Para quem já entende um pouco de inglês e quer treinar a escuta com conversas reais, montando a própria lista de palavras.',
    comoFunciona: [
      'Você escolhe uma série e um episódio no catálogo.',
      'O vídeo toca com a legenda acompanhando a fala.',
      'Clique nas palavras que não conhece para salvar. A cor indica se a palavra é básica ou avançada.',
      'Repita uma fala quantas vezes quiser, ou ligue o shadowing para repetir em voz alta junto com o ator.',
      'Exporte sua lista de palavras quando quiser.',
    ],
    recursos: [
      {
        titulo: 'Legenda clicável',
        texto: 'Cada palavra da legenda tem nível (A1 a C2) indicado por cor e tradução para o português.',
      },
      {
        titulo: 'Repetição e velocidade',
        texto: 'Toque uma fala só ou todas em sequência, em loop (1, 3, 5 vezes ou sem parar), de 0,5× a 2×.',
      },
      {
        titulo: 'Shadowing',
        texto: 'O app toca a fala e deixa um silêncio do mesmo tamanho para você repetir em voz alta, três vezes.',
      },
      {
        titulo: 'Vocabulário e frases',
        texto: 'Salve palavras e frases favoritas e exporte a lista em PDF ou CSV.',
      },
      {
        titulo: 'Continue de onde parou',
        texto: 'O app lembra o episódio e o minuto em que você parou e marca os episódios assistidos.',
      },
    ],
    conteudo: [
      'Mais de 500 vídeos em inglês de séries clássicas e programas de TV, exibidos pelo player oficial do YouTube.',
      'Os níveis das palavras seguem uma lista de cerca de 3.000 palavras classificadas de A1 a C2.',
    ],
    bomSaber: [
      'No celular, o app abre sozinho uma versão própria para tela pequena.',
      DADOS_NO_APARELHO,
    ],
    imagem: '/images/ferramentas/legendas.webp',
    alt: 'Tela de boas-vindas das Legendas listando o que dá para fazer: tocar numa palavra, ver o nível, repetir a pronúncia e exportar',
  },
  {
    id: 'radio',
    titulo: 'Radio: rádios americanas ao vivo para ouvir inglês ao longo do dia',
    descricao:
      'Quatro rádios americanas ao vivo, entre talk show, notícias, música e rádio pública, num player simples para deixar o inglês tocando no dia a dia.',
    resumo:
      'O ETT Radio reúne quatro rádios americanas transmitindo ao vivo, num player simples. É para deixar o inglês tocando enquanto você faz outra coisa: no carro, cozinhando, na academia.',
    paraQuem:
      'Para quem quer aumentar o tempo de contato com o inglês sem reservar um horário para isso.',
    comoFunciona: [
      'Você escolhe uma das rádios.',
      'Aperta o play (ou a barra de espaço) e ajusta o volume.',
    ],
    recursos: [
      {
        titulo: 'Ao vivo',
        texto: 'As rádios tocam pela transmissão pública das próprias emissoras, em tempo real.',
      },
      {
        titulo: 'Estilos diferentes',
        texto: 'Talk show, notícias, música e programação de rádio pública, para escolher conforme o momento.',
      },
    ],
    conteudo: [
      'Quatro emissoras dos Estados Unidos: uma rádio de talk show e música de Minneapolis, um canal de notícias, uma rádio de rock alternativo de Nova York e a programação da rádio pública americana.',
    ],
    bomSaber: [
      'É a transmissão ao vivo das emissoras, então inclui os comerciais delas.',
      'Funciona no celular. Não tem cadastro nem histórico.',
    ],
    imagem: '/images/ferramentas/radio.webp',
    alt: 'Tela inicial do ETT Radio com a rádio em destaque e o botão para ouvir',
  },
  {
    id: 'speak',
    titulo: 'Speak: a sala dos encontros de conversação do ETT',
    descricao:
      'O ETT Speak é a sala online onde acontecem os encontros de conversação do ETT: salas menores, cartões de tema, jogo em inglês e moderador. Nada a instalar.',
    resumo:
      'O ETT Speak é a sala de videoconferência dos encontros de conversação do ETT, com um moderador conduzindo. É lá que acontece o encontro online de segunda, às 20h. Funciona no navegador, sem instalar nada.',
    paraQuem:
      'Para quem vai participar de um encontro de conversação. Não é uma ferramenta para praticar sozinho.',
    comoFunciona: [
      'Você abre a sala e informa nome, e-mail, cargo e, se quiser, seu nível de inglês.',
      'Entra na sala principal com vídeo, microfone e chat.',
      'O moderador divide o grupo em salas menores, para cada um falar mais, e envia cartões com o tema e o tempo da conversa.',
      'No fim, você responde um bilhete de saída rápido: como foi sua confiança e qual palavra nova levou.',
    ],
    recursos: [
      {
        titulo: 'Salas menores',
        texto:
          'Grupos pequenos montados por nível ou em rodízio, para você conversar com várias pessoas. O áudio de cada sala é separado.',
      },
      {
        titulo: 'Cartões de tema',
        texto:
          'Temas pessoais e profissionais, de "Tell me about your weekend" a uma simulação de entrevista de emprego, com contagem regressiva.',
      },
      {
        titulo: 'SpyTalk',
        texto: 'Um jogo de espião em inglês, com 25 lugares (aeroporto, banco, hotel, restaurante…), para soltar a fala.',
      },
      {
        titulo: 'Equilíbrio de fala',
        texto: 'O moderador vê quanto cada pessoa falou e pode puxar quem está mais quieto.',
      },
      {
        titulo: '"Como falo…?"',
        texto: 'Um espaço para perguntar como se diz algo em inglês sem interromper a conversa.',
      },
    ],
    conteudo: [
      'Dois baralhos de cartões de tema, Personal e Professional.',
      'O encontro online de segunda é gratuito e aberto a qualquer pessoa, sem cadastro prévio.',
    ],
    bomSaber: [
      'Funciona melhor no computador. No celular a sala abre, com um aviso.',
      'É uma sala com moderador: o Speak não corrige sua fala automaticamente.',
    ],
    imagem: '/images/ferramentas/speak.webp',
    alt: 'Tela de entrada do ETT Speak com o formulário para entrar na reunião',
    linkDireto: { url: 'https://ett-speak.vercel.app/', rotulo: 'Abrir a sala do Speak' },
    relacionado: { href: '/conversacao/', rotulo: 'Como funcionam os encontros' },
  },
  {
    id: 'meet',
    titulo: 'Meet: a agenda dos encontros de conversação da comunidade',
    descricao:
      'No ETT Meet a comunidade propõe encontros extras de conversação em inglês, confirma presença e acompanha a agenda deles.',
    resumo:
      'O ETT Meet é a agenda dos encontros de conversação. Você vê os encontros marcados e também pode propor o seu: quando gente suficiente confirma presença, o encontro é confirmado no Meet. Os encontros fixos do ETT (online às segundas e IEP Talks aos sábados) ficam na agenda do site.',
    paraQuem:
      'Para quem quer achar um encontro de conversação, online ou presencial, ou reunir pessoas para conversar em inglês num horário que funciona para você.',
    comoFunciona: [
      'Você vê no calendário os encontros marcados e o status de cada um.',
      'Para propor um encontro, cria uma conta, escolhe tema, data e formato e convida duas pessoas novas.',
      'Os convidados confirmam pelo link que recebem por e-mail.',
      'Com 4 confirmações (online) ou 6 (presencial), ou com a aprovação do ETT, o encontro proposto é confirmado no Meet.',
    ],
    recursos: [
      {
        titulo: 'Calendário por status',
        texto: 'Aguardando confirmações, quórum atingido e confirmado, em visão de mês ou de semana.',
      },
      {
        titulo: 'Avisos por e-mail',
        texto: 'Você recebe um e-mail a cada mudança no encontro que propôs ou confirmou.',
      },
      {
        titulo: 'Temas sugeridos',
        texto: 'Ideias prontas para o encontro, como situações de viagem, simulação de entrevista e reunião de equipe.',
      },
      {
        titulo: 'Check-in',
        texto: 'Presença registrada por QR Code nos encontros.',
      },
    ],
    conteudo: [
      'A conversa acontece fora do Meet: numa sala online ou num local presencial, informados no encontro.',
    ],
    bomSaber: [
      'Para propor ou confirmar um encontro é preciso criar uma conta.',
      'Os encontros fixos do ETT (online às segundas, 20h, e o IEP Talks aos sábados, 10h, em Curitiba) estão sempre na agenda do site.',
    ],
    imagem: '/images/ferramentas/meet.webp',
    alt: 'Tela inicial do ETT Meet com o título Encontros gratuitos pra praticar inglês conversando',
    relacionado: { href: '/agenda/', rotulo: 'Ver a agenda de encontros' },
  },
]

export function getPaginaFerramenta(id: string) {
  return paginasFerramentas.find((p) => p.id === id)
}

export const idsComPagina = new Set(paginasFerramentas.map((p) => p.id))
