import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://englishtalktime.com.br'
const CONTACT_EMAIL = 'binhara@azuris.com.br'

export const metadata: Metadata = {
  title: 'Termos de Uso | English Talk Time — ETT',
  description:
    'Termos e condições gerais de uso do site English Talk Time (ETT) e participação nos encontros gratuitos de conversação em inglês.',
  alternates: { canonical: '/termos-uso/' },
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
      name: 'Termos de Uso',
      item: `${SITE_URL}/termos-uso/`,
    },
  ],
}

export default function TermosUsoPage() {
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
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-tech-blue/30 text-tech-blue bg-tech-blue/5 mb-5">
                Documento legal
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Termos de Uso
              </h1>
              <p className="text-gray-400 text-base">
                Última atualização: 14 de maio de 2026.
              </p>
            </div>
          </div>
        </header>

        <article className="bg-dark-secondary border-y border-dark-border">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl mx-auto prose-blog">
              <p>
                Estes Termos de Uso (&quot;Termos&quot;) regulam o acesso e uso do site{' '}
                <Link href="/">englishtalktime.com.br</Link> e a participação nas atividades
                gratuitas oferecidas pelo <strong>English Talk Time (ETT)</strong>, programa
                do ecossistema <strong>DSSBR &amp; GUBigData IA</strong>. Ao acessar o site
                ou se inscrever no programa, você concorda com estes Termos.
              </p>

              <h2>1. Sobre o ETT</h2>
              <p>
                O ETT é um programa gratuito de conversação em inglês, treino de fala e
                ferramentas de apoio com IA para profissionais e estudantes de Tecnologia,
                Dados, IA, BI e Cloud. Inclui:
              </p>
              <ul>
                <li>Encontros online semanais (toda segunda, 20h–21h30).</li>
                <li>
                  Encontros presenciais em Curitiba/PR, em rotação por venues parceiros
                  (IEP, UTFPR, Hard Rock Cafe, Habitat).
                </li>
                <li>Ferramentas digitais de apoio (algumas em beta, outras em construção).</li>
                <li>
                  Acesso a uma comunidade de prática (ecossistema DSSBR &amp; GUBigData IA).
                </li>
              </ul>

              <h2>2. Aceitação dos Termos</h2>
              <p>
                Ao se inscrever, navegar no site ou participar de um encontro, você declara
                ter lido, compreendido e aceito estes Termos e a{' '}
                <Link href="/politica-privacidade/">Política de Privacidade</Link>. Se não
                concordar com qualquer item, por favor não use o site nem o programa.
              </p>

              <h2>3. Inscrição e participação</h2>
              <ul>
                <li>
                  A inscrição é gratuita e voluntária. O ETT pode, a seu critério, recusar
                  ou cancelar inscrições que violem estes Termos ou que tenham caráter
                  abusivo, comercial ou ofensivo.
                </li>
                <li>
                  Os encontros são abertos a maiores de 16 anos. Menores de 18 anos precisam
                  de ciência dos responsáveis.
                </li>
                <li>
                  O ETT não garante vaga em encontro presencial — alguns venues têm
                  capacidade limitada e a confirmação ocorre na ordem de inscrição.
                </li>
              </ul>

              <h2>4. Conduta esperada nos encontros</h2>
              <p>
                Esperamos que todos os participantes:
              </p>
              <ul>
                <li>Respeitem o tempo de fala, o nível e o ritmo dos demais.</li>
                <li>
                  Não usem os encontros para promoção comercial direta de produtos/serviços
                  alheios à comunidade.
                </li>
                <li>
                  Não pratiquem nenhuma forma de assédio, discriminação ou comportamento
                  ofensivo (por raça, gênero, orientação sexual, religião, origem etc.).
                </li>
                <li>
                  Não gravem ou compartilhem o conteúdo dos encontros sem consentimento
                  explícito dos demais participantes.
                </li>
              </ul>
              <p>
                Violações podem resultar em remoção da comunidade sem aviso prévio.
              </p>

              <h2>5. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo do site (textos, imagens, código, marcas, metodologia
                Fórmula Fluente, ferramentas, materiais didáticos) é de propriedade do ETT,
                do ecossistema DSSBR &amp; GUBigData IA ou licenciado a eles, e está
                protegido pela legislação brasileira de direitos autorais (Lei 9.610/98) e
                de propriedade industrial (Lei 9.279/96).
              </p>
              <p>
                Você não pode copiar, reproduzir, modificar, distribuir comercialmente ou
                criar obras derivadas a partir do conteúdo sem autorização prévia por
                escrito. Está permitido o compartilhamento de links e citações com
                atribuição clara à fonte.
              </p>

              <h2>6. Materiais de parceiros</h2>
              <p>
                Materiais cedidos por parceiros (Cherry Top, BeeTools, Coders, Frank
                Florida etc.) permanecem propriedade dos respectivos titulares. O ETT
                oferece acesso conforme acordo de parceria — eventual uso fora do ETT segue
                as condições do parceiro original.
              </p>

              <h2>7. Limitação de responsabilidade</h2>
              <p>
                O ETT é um programa gratuito de melhor esforço. Não garantimos:
              </p>
              <ul>
                <li>
                  Atingimento de qualquer nível específico de fluência em qualquer prazo —
                  resultado depende da dedicação do participante e de fatores individuais.
                </li>
                <li>
                  Disponibilidade ininterrupta do site, das ferramentas ou dos encontros —
                  eventuais cancelamentos ou ajustes de agenda são possíveis e serão
                  comunicados quando possível.
                </li>
                <li>
                  Empregabilidade ou aprovação em entrevistas, processos seletivos ou
                  programas internacionais.
                </li>
              </ul>
              <p>
                Os parceiros do ETT (Cherry Top, Coders, BeeTools, etc.) são empresas
                independentes; suas ofertas, valores e garantias são regidos pelos próprios
                termos comerciais — o ETT não responde por obrigações dos parceiros.
              </p>

              <h2>8. Imersões e atividades pagas</h2>
              <p>
                Imersões com a Cherry Top (Curitiba, Belo Horizonte, Flórida), mentoria de
                carreira com a Coders, materiais pagos da BeeTools e outras atividades pagas
                são <strong>contratadas diretamente com os respectivos parceiros</strong>,
                seguindo os termos comerciais deles. O ETT atua como facilitador da
                divulgação e do contato — pagamentos, garantias e obrigações contratuais
                são entre você e o parceiro.
              </p>

              <h2>9. Cancelamento e exclusão</h2>
              <p>
                Você pode sair do programa a qualquer momento, sem ônus, enviando um e-mail
                para{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. A exclusão dos seus
                dados pessoais segue o disposto na{' '}
                <Link href="/politica-privacidade/">Política de Privacidade</Link>.
              </p>

              <h2>10. Alterações nestes Termos</h2>
              <p>
                Podemos atualizar estes Termos periodicamente. A versão vigente sempre
                estará nesta página, com a data da última atualização no topo. Mudanças
                relevantes serão comunicadas por e-mail aos inscritos com pelo menos 15
                dias de antecedência. O uso continuado após a notificação implica aceitação
                dos novos termos.
              </p>

              <h2>11. Lei aplicável e foro</h2>
              <p>
                Estes Termos são regidos pela legislação da República Federativa do Brasil.
                Fica eleito o foro da Comarca de Curitiba, Paraná, para dirimir quaisquer
                controvérsias, com renúncia a qualquer outro, por mais privilegiado que
                seja.
              </p>

              <h2>12. Contato</h2>
              <p>
                Dúvidas sobre estes Termos? Escreva para{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>

              <hr />
              <p>
                <em>
                  Veja também a{' '}
                  <Link href="/politica-privacidade/">Política de Privacidade</Link>.
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
