/**
 * Professores parceiros do ETT — fonte única de /parceiros/ e /parceiros/<slug>/.
 *
 * Base: Anexo I (Ficha do Professor Parceiro) do Termo de Parceria do Professor
 * Autônomo (contratos/parceiras/, fora do git). A Cl. 3.5 do termo diz o que
 * vai pro site: nome, foto, minibiografia, especialidades, formato de
 * atendimento, contato e os Produtos do Anexo II.
 *
 * 🚫 NUNCA trazer pra cá CPF, RG, data de nascimento, endereço, chave PIX,
 *    CNPJ, e-mail ou WhatsApp pessoal da ficha. A raiz do repo é pública.
 *    O contato do site é sempre `contatoUrl` (página fornecida pelo Alessandro).
 *
 * Regras de copy (as mesmas do resto do site):
 * - Sem promessa de resultado ou prazo; só o que o professor declarou na ficha.
 * - As aulas são DO PROFESSOR, nas condições dele; o ETT divulga e encaminha
 *   (Cl. 6.7: a Azuris não é fornecedora dos Produtos do Professor).
 * - Encontro ETT com o professor é gratuito, mas só para Participantes
 *   Habilitados (Desafio de 7 dias, ativação/trilha ativa, aluno indicado em
 *   cortesia) — diferente do encontro aberto de segunda.
 * - Perfil sai do site em até 15 dias depois do fim do termo (Cl. 9.2).
 */

export type EncontroProfessor = {
  /** Data ISO do primeiro encontro. */
  inicio: string
  formato: string
  /** Dias e horários, como combinado no Anexo I (horário de Brasília). */
  horarios: string[]
  limite: string
  nivel: string
  foco: string
}

export type Professor = {
  slug: string
  /** Nome profissional, como aparece no site. */
  nome: string
  nomeCompleto: string
  foto: string
  /** Versão JPEG da foto, pro cartão de compartilhamento (OG). */
  fotoOg: string
  /** Uma linha, pro cartão da listagem. */
  chamada: string
  origem: string
  cidade: string
  experiencia: string
  bio: string[]
  especialidades: string[]
  niveis: string
  formatos: string[]
  encontro: EncontroProfessor | null
  /**
   * Página de contato fornecida pelo Alessandro. Enquanto for null, o botão
   * "Entrar em contato" não aparece (não publicar contato inventado).
   */
  contatoUrl: string | null
}

export const professores: Professor[] = [
  {
    slug: 'jg-franklin',
    nome: 'J.G. Franklin',
    nomeCompleto: 'John Gerard Franklin',
    foto: '/images/parceiros/jg-franklin.webp',
    fotoOg: '/images/parceiros/jg-franklin.jpg',
    chamada:
      'Norte-americano, ator e professor de inglês há 18 anos. Conversação, pronúncia e as nuances do inglês nativo.',
    origem: 'Nascido em Tacoma, Washington (EUA)',
    cidade: 'Belo Horizonte, MG',
    experiencia: '18 anos ensinando inglês',
    bio: [
      'John Gerard Franklin (J.G. Franklin) nasceu em Tacoma, no estado de Washington, nos Estados Unidos. Ensina inglês há 18 anos e mora em Belo Horizonte.',
      'Como ator, soma quase 100 créditos entre comerciais regionais e nacionais, curtas e longas-metragens nacionais e internacionais, além de teatro. Entre eles: um papel coadjuvante em quatro episódios da série Passaporte para Liberdade (Sony/Globo), dois comerciais nacionais da Garoto, um papel de destaque na série O Hóspede Americano (HBO), no longa nacional 10 Segundos para Vencer e no longa internacional Soundtrack.',
    ],
    especialidades: [
      'Conversação',
      'Nuances e sutilezas do inglês nativo',
      'Gramática',
      'Entonação e pronúncia',
    ],
    niveis: 'Todos os níveis',
    formatos: ['Online', 'Aulas individuais', 'Aulas em grupo'],
    encontro: {
      inicio: '2026-12-04',
      formato: 'Online',
      horarios: ['Sextas-feiras', 'sábados'],
      limite: 'Grupos de 3 a 4 pessoas',
      nivel: 'Participantes de nível parecido no mesmo grupo',
      foco: 'Conversação',
    },
    contatoUrl: null,
  },
]

export function getProfessor(slug: string) {
  return professores.find((p) => p.slug === slug)
}
