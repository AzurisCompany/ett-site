/**
 * Desafio de 7 dias (desde 09/11/2026) — isca gratuita de geração de lead com
 * compromisso: a pessoa chama o Miguel no WhatsApp, testa UMA ferramenta do
 * ETT Player por dia (à escolha dela), conta pro Miguel o que fez, e termina
 * no encontro de conversação de segunda (gratuito).
 *
 * Não é curso nem promessa de resultado. Ferramentas citadas só as que existem
 * e estão disponíveis no Player (lib/ferramentas.ts). Roteiro de mensagens do
 * Miguel: novoConteudo/desafio-7-dias/ROTEIRO-MIGUEL.md.
 */
import { ferramentas } from '@/lib/ferramentas'

/** WhatsApp do Miguel Donizete (atendimento diário). */
export const WHATSAPP_MIGUEL = '5513991511656'

export const MENSAGEM_DESAFIO = 'Olá, Miguel! Quero participar do desafio de 7 dias do English Talk Time.'

export const DESAFIO_WHATSAPP = `https://wa.me/${WHATSAPP_MIGUEL}?text=${encodeURIComponent(MENSAGEM_DESAFIO)}`

/** Ferramentas que entram no cardápio do desafio: disponíveis e de prática individual
 *  (Speak e Meet são a sala e a agenda dos encontros, não entram). */
export const ferramentasDesafio = ferramentas.filter(
  (f) => f.status === 'disponivel' && f.id !== 'speak' && f.id !== 'meet'
)
