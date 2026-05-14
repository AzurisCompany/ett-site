import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'
const CONTACT_EMAIL = 'binhara@azuris.com.br'

export const metadata: Metadata = {
  title: 'Política de Privacidade | English Talk Time — ETT',
  description:
    'Como o English Talk Time (ETT) coleta, usa, armazena e protege seus dados pessoais. Conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).',
  alternates: { canonical: '/politica-privacidade/' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Política de Privacidade',
      item: `${SITE_URL}/politica-privacidade/`,
    },
  ],
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="bg-dark min-h-screen pt-16">
        <header className="relative section-padding hero-grid">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-green/30 text-neon-green bg-neon-green/5 mb-5">
                Documento legal
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Política de Privacidade
              </h1>
              <p className="text-gray-400 text-base">
                Última atualização: 14 de maio de 2026 · Conforme LGPD (Lei 13.709/2018).
              </p>
            </div>
          </div>
        </header>

        <article className="bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose-blog">
              <p>
                Esta Política de Privacidade descreve como o{' '}
                <strong>English Talk Time (ETT)</strong>, parte do ecossistema{' '}
                <strong>DSSBR &amp; GUBigData IA</strong>, coleta, usa, armazena, compartilha
                e protege os dados pessoais dos usuários do site{' '}
                <Link href="/">englishtalktime.com.br</Link>. O documento segue a Lei Geral de
                Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).
              </p>

              <h2>1. Quem somos (Controlador dos dados)</h2>
              <p>
                O ETT é um programa gratuito de conversação em inglês e treino de fala
                operado pelo ecossistema DSSBR &amp; GUBigData IA, com base operacional em
                Curitiba/PR, Brasil. Para qualquer assunto relacionado a esta Política, ao
                tratamento dos seus dados ou ao exercício dos seus direitos como titular,
                entre em contato em{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>

              <h2>2. Dados pessoais que coletamos</h2>

              <h3>2.1. Dados que você nos fornece diretamente</h3>
              <p>
                Quando você se inscreve no programa ou demonstra interesse por meio do
                formulário do site (componente &quot;LeadForm&quot;), coletamos:
              </p>
              <ul>
                <li>
                  <strong>Nome completo</strong> — para identificação e comunicação
                  personalizada.
                </li>
                <li>
                  <strong>E-mail</strong> — para envio da agenda, materiais, link dos
                  encontros e comunicações sobre o programa.
                </li>
                <li>
                  <strong>Empresa</strong> — para contextualizar o seu perfil profissional.
                </li>
                <li>
                  <strong>Telefone (com DDD)</strong> — para contato eventual via ligação ou
                  WhatsApp.
                </li>
                <li>
                  <strong>LinkedIn</strong> — para entendermos sua trajetória profissional e
                  alinhar conteúdo do programa.
                </li>
                <li>
                  <strong>Nível de inglês (autodeclarado)</strong> — para nivelamento e
                  direcionamento de materiais.
                </li>
              </ul>
              <p>
                O preenchimento do formulário é totalmente opcional e baseado no seu{' '}
                <strong>consentimento explícito</strong> (LGPD, Art. 7º, I).
              </p>

              <h3>2.2. Dados coletados automaticamente (cookies e analytics)</h3>
              <p>
                Quando você navega no site, coletamos, mediante seu consentimento via banner
                de cookies, dados de uso agregados através do{' '}
                <strong>Google Analytics 4</strong>:
              </p>
              <ul>
                <li>Endereço IP anonimizado e localização aproximada (cidade/estado).</li>
                <li>Tipo de dispositivo, navegador e sistema operacional.</li>
                <li>Páginas visitadas, tempo de permanência e fluxo de navegação.</li>
                <li>Origem do acesso (referrer, campanhas).</li>
              </ul>
              <p>
                Esses dados são agregados e não identificam você individualmente. Você pode
                recusar o uso desses cookies no banner ao entrar no site, sem prejuízo da
                navegação.
              </p>

              <h2>3. Para que usamos seus dados (finalidade)</h2>
              <ul>
                <li>
                  Enviar a agenda dos encontros online e presenciais, o link da sala (Google
                  Meet) e materiais de apoio das ferramentas do ETT.
                </li>
                <li>
                  Comunicar novidades sobre o programa, imersões com parceiros e o blog ETT.
                </li>
                <li>
                  Avaliar nivelamento, perfil profissional e direcionar conteúdo
                  personalizado.
                </li>
                <li>
                  Analisar uso do site de forma agregada para melhorar conteúdo, navegação e
                  experiência.
                </li>
                <li>
                  Cumprir obrigações legais e responder a solicitações de autoridades quando
                  exigido.
                </li>
              </ul>

              <h2>4. Base legal do tratamento</h2>
              <p>
                Tratamos seus dados com fundamento nas seguintes bases legais da LGPD (Art.
                7º):
              </p>
              <ul>
                <li>
                  <strong>Consentimento (Art. 7º, I)</strong> — para coleta via formulário de
                  inscrição e para cookies de analytics.
                </li>
                <li>
                  <strong>Legítimo interesse (Art. 7º, IX)</strong> — para análise agregada
                  de uso do site (sem identificar individualmente).
                </li>
                <li>
                  <strong>Cumprimento de obrigação legal (Art. 7º, II)</strong> — quando
                  aplicável.
                </li>
              </ul>

              <h2>5. Com quem compartilhamos seus dados</h2>
              <p>
                Não vendemos seus dados pessoais. Compartilhamos com prestadores de serviços
                estritamente necessários ao funcionamento do programa:
              </p>
              <ul>
                <li>
                  <strong>RD Station Marketing (Resultados Digitais S.A., Brasil)</strong> —
                  CRM e ferramenta de relacionamento. Para onde são enviados os dados do
                  formulário de inscrição.
                </li>
                <li>
                  <strong>Google LLC</strong> — Google Forms (formulários de interesse em
                  imersões), Google Meet (encontros online) e Google Analytics 4 (análise
                  agregada de uso do site).
                </li>
                <li>
                  <strong>Hospedagem do site</strong> — provedor responsável por servir os
                  arquivos estáticos do site.
                </li>
                <li>
                  <strong>Parceiros do programa</strong> — Cherry Top, Coders, BeeTools, IEP,
                  UTFPR, Habitat: dados são compartilhados apenas com seu consentimento
                  específico para uma ação específica (ex.: pré-inscrição em imersão Cherry
                  Top transfere seu nome/email/telefone à Cherry Top).
                </li>
              </ul>

              <h2>6. Quanto tempo guardamos seus dados</h2>
              <ul>
                <li>
                  <strong>Dados de inscrição (formulário):</strong> mantidos enquanto você
                  estiver ativo na comunidade ou por até 5 anos após a última interação,
                  prazo prescricional padrão do Código Civil.
                </li>
                <li>
                  <strong>Dados de analytics (GA4):</strong> retenção padrão de 14 meses no
                  Google Analytics.
                </li>
                <li>
                  Você pode solicitar exclusão imediata a qualquer momento — veja seção 8.
                </li>
              </ul>

              <h2>7. Segurança dos dados</h2>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger seus
                dados contra acesso não autorizado, alteração, divulgação ou destruição —
                incluindo transmissão por HTTPS, controles de acesso aos sistemas dos
                operadores (RD Station, Google) e revisão periódica de permissões.
              </p>
              <p>
                Nenhum sistema é 100% seguro. Em caso de incidente de segurança que afete
                seus dados pessoais, notificaremos você e a ANPD nos termos da LGPD.
              </p>

              <h2>8. Seus direitos como titular (LGPD, Art. 18)</h2>
              <p>Você pode, a qualquer momento, solicitar:</p>
              <ul>
                <li>Confirmação da existência de tratamento dos seus dados.</li>
                <li>Acesso aos dados que temos sobre você.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos
                  ou tratados em desconformidade.
                </li>
                <li>Portabilidade dos dados a outro fornecedor.</li>
                <li>Eliminação dos dados tratados com base no seu consentimento.</li>
                <li>
                  Informação sobre entidades públicas e privadas com as quais compartilhamos
                  seus dados.
                </li>
                <li>
                  Revogação do consentimento a qualquer momento, sem prejuízo da
                  legalidade do tratamento realizado antes da revogação.
                </li>
              </ul>
              <p>
                Para exercer qualquer desses direitos, envie um e-mail para{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Responderemos em até
                15 dias úteis.
              </p>

              <h2>9. Cookies</h2>
              <p>
                O site usa dois tipos de cookies:
              </p>
              <ul>
                <li>
                  <strong>Cookies estritamente necessários</strong> — para funcionamento
                  básico do site (não rastreiam você).
                </li>
                <li>
                  <strong>Cookies de analytics (Google Analytics 4)</strong> — só são
                  carregados após o seu consentimento explícito no banner de cookies. Você
                  pode aceitar ou rejeitar ao entrar no site, e mudar a sua escolha
                  posteriormente limpando os cookies do navegador.
                </li>
              </ul>

              <h2>10. Crianças e adolescentes</h2>
              <p>
                O programa ETT é direcionado a profissionais e estudantes maiores de 16
                anos. Não coletamos intencionalmente dados de crianças menores de 12 anos.
                Caso identifique tratamento indevido, entre em contato para remoção
                imediata.
              </p>

              <h2>11. Transferência internacional</h2>
              <p>
                Alguns dos operadores que usamos (Google LLC, em especial) processam dados
                fora do Brasil. A transferência segue as bases legais previstas na LGPD e
                medidas adequadas de proteção do nível de privacidade.
              </p>

              <h2>12. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política periodicamente. Mudanças relevantes serão
                comunicadas por e-mail aos inscritos com pelo menos 15 dias de antecedência.
                A data da última atualização sempre constará no topo do documento.
              </p>

              <h2>13. Encarregado de Proteção de Dados (DPO) e contato</h2>
              <p>
                Para qualquer dúvida, solicitação ou reclamação sobre o tratamento dos seus
                dados pessoais:
              </p>
              <ul>
                <li>
                  <strong>E-mail:</strong>{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <strong>Site:</strong>{' '}
                  <Link href="/">englishtalktime.com.br</Link>
                </li>
              </ul>
              <p>
                Você também pode apresentar reclamação à Autoridade Nacional de Proteção de
                Dados (ANPD) por meio de{' '}
                <a href="https://www.gov.br/anpd/" target="_blank" rel="noopener noreferrer">
                  gov.br/anpd
                </a>
                .
              </p>

              <hr />
              <p>
                <em>
                  Veja também os{' '}
                  <Link href="/termos-uso/">Termos de Uso</Link> do site.
                </em>
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
