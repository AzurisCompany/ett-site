export interface HomeFaq {
  q: string
  a: string
}

/**
 * FAQ curta da home — só as dúvidas que travam a decisão de aparecer no
 * primeiro encontro. A lista longa (`homeFaqs`) fica em /detalhes/.
 */
export const homeFaqsCurtas: HomeFaq[] = [
  {
    q: 'O ETT é um curso de inglês?',
    a: 'Não. O ETT é uma plataforma de apoio à prática do inglês: reúne ferramentas digitais, encontros de conversação e parceiros que oferecem cursos e imersões. Não tem grade, turma nem professor próprio dando aula. Dá pra usar junto com o curso que você já faz, com um professor particular ou por conta própria.',
  },
  {
    q: 'Quanto custa para participar?',
    a: 'Os encontros de conversação — o online de segunda e o IEP Talks de sábado — são gratuitos, sem cadastro e sem cartão. Isso não muda. As ferramentas do ETT Player são abertas pra experimentar. Quem quiser orientação faz a ativação acompanhada: R$ 97, uma vez, com duas sessões individuais de 1 hora, diagnóstico, plano e material personalizados e acompanhamento por 30 dias. Depois, o acompanhamento continua na Trilha de Dedicação (R$ 37 por mês) ou na Trilha de Aceleração, que troca a mensalidade por 20 dias válidos de prática no mês.',
  },
  {
    q: 'Quem oferece os cursos e as imersões?',
    a: 'Os parceiros. A BeeTools oferece cursos, a Cherry Top oferece as imersões e a Coders, a mentoria de carreira — cada um com preços, regras e condições próprios. O ETT divulga, encaminha quem tem interesse e oferece as ferramentas e os encontros pra praticar antes, durante e depois.',
  },
  {
    q: 'Qual nível de inglês eu preciso ter?',
    a: 'Se você entende razoavelmente mas trava na hora de falar, esse é exatamente o público. Os encontros são abertos a qualquer nível: quem está começando participa junto. Rende mais a partir de um básico-intermediário (A2).',
  },
  {
    q: 'Como eu entro no encontro online?',
    a: 'É um link no navegador, sem instalar nada, toda segunda das 20h às 21h30 (horário de Brasília). Você pode entrar direto pelo botão aqui do site ou se cadastrar para receber o lembrete por e-mail.',
  },
  {
    q: 'Preciso ligar a câmera e falar na frente de todo mundo?',
    a: 'A conversa acontece em grupos pequenos, com rodízio — não é você falando para uma plateia. Câmera é bem-vinda, mas ninguém é obrigado. E ninguém corrige seu inglês em público: errar em voz alta faz parte do treino.',
  },
  {
    q: 'Onde acontecem os encontros presenciais?',
    a: 'Em Curitiba, no IEP (Instituto de Engenharia do Paraná): é o IEP Talks, todo sábado das 10h às 12h. As datas ficam na agenda, junto com qualquer edição especial que apareça em outra casa parceira.',
  },
]

/** FAQ longa — usada em /detalhes/. Revisada em 31/10/2026 (reposicionamento). */
export const homeFaqs: HomeFaq[] = [
  {
    q: 'O que é o ETT?',
    a: 'O English Talk Time é uma plataforma de apoio à prática do inglês. Reúne ferramentas digitais (no ETT Player), encontros de conversação gratuitos e uma rede de parceiros que oferecem cursos, imersões e mentoria de carreira. Não é uma escola nem um curso com grade: você combina os recursos conforme seus objetivos.',
  },
  {
    q: 'Substitui um curso ou um professor?',
    a: 'Não. O ETT complementa: dá pra usar as ferramentas e vir aos encontros enquanto faz um curso, tem aulas particulares ou estuda por conta própria. Quem precisa de base estruturada pode fazer um curso com um parceiro de ensino, como a BeeTools.',
  },
  {
    q: 'Como faço pra praticar — online ou em Curitiba?',
    a: 'Toda segunda, das 20h às 21h30, tem encontro online, aberto pra quem está em qualquer lugar. O presencial é o IEP Talks, todo sábado das 10h às 12h no IEP (Instituto de Engenharia do Paraná), em Curitiba. As datas ficam na agenda.',
  },
  {
    q: 'O que é gratuito e o que é pago?',
    a: 'Os encontros são gratuitos e abertos, sem cadastro. As ferramentas do ETT Player são abertas pra experimentar. A ativação acompanhada custa R$ 97, uma vez, com duas sessões individuais de 1 hora de orientação, plano e material personalizados. Depois, o acompanhamento continua na Trilha de Dedicação (R$ 37/mês) ou na Trilha de Aceleração, sem mensalidade pra quem mantém 20 dias válidos de prática no mês. Cursos, imersões e mentoria de carreira são dos parceiros, com preços próprios.',
  },
  {
    q: 'As sessões individuais da ativação são aulas particulares?',
    a: 'Não. São orientação de uso da plataforma: rodar o diagnóstico com você, montar o plano de prática, configurar a rotina e ativar as ferramentas com conteúdo do seu nível. Aula de inglês, se você quiser, é com um curso ou professor.',
  },
  {
    q: 'O diagnóstico é uma certificação de nível?',
    a: 'Não. O Level Check estima seu nível e seu vocabulário pra ajudar a escolher o que praticar primeiro. Não substitui um exame de proficiência.',
  },
  {
    q: 'Qual o nível mínimo pra participar dos encontros?',
    a: 'Qualquer nível pode participar; rende mais a partir de um básico-intermediário (A2). Quem está bem travado também aproveita: os encontros são feitos pra você falar, não pra ser avaliado.',
  },
  {
    q: 'Funciona pra quem trava na hora de falar mesmo entendendo bem?',
    a: 'É o perfil mais comum nos encontros: pessoas que estudaram, entendem, mas travam na hora de falar. A conversa em salas menores, sem correção em público, ajuda a ganhar confiança. O ritmo de cada um é diferente — não prometemos prazo.',
  },
  {
    q: 'Dá pra treinar entrevista e inglês de trabalho?',
    a: 'Sim. Entrevista, apresentação de projeto e conversa de trabalho são temas recorrentes nos encontros, e o Daily tem cartões de conversa e pitch cronometrado pra ensaiar sozinho. Pra mentoria de carreira (currículo, LinkedIn, entrevistas internacionais), a Coders é parceira, com condições próprias.',
  },
  {
    q: 'Como seria uma rotina de 1 hora por dia?',
    a: 'Uma sugestão: 10 a 15 minutos de flashcards, 20 a 30 de um episódio com legenda ou capítulo de audiolivro, alguns minutos falando no Daily (um exercício de fala por dia) e um pouco de revisão. É uma sugestão — a meta é sua.',
  },
]
