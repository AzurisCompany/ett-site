import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/BlogLayout'
import { getBlogPost } from '@/lib/blog-posts'
import { getProfessor } from '@/lib/professores'

const SLUG = 'professor-parceiro-jg-franklin'
const SITE_URL = 'https://englishtalktime.com.br'
const ORG_ID = `${SITE_URL}/#organization`
const post = getBlogPost(SLUG)!
// Fonte única dos dados do professor (foto, encontro, links de inscrição e contato).
const jg = getProfessor('jg-franklin')!
const encontro = jg.encontro!
const PERFIL = `/parceiros/${jg.slug}/`

export const metadata: Metadata = {
  title: `${post.title} | Blog ETT`,
  description: post.description,
  keywords: [
    'professor nativo de inglês',
    'professor norte-americano',
    'J.G. Franklin',
    'encontro de conversação em inglês',
    'conversação em inglês online sábado',
    'English Talk Time professor parceiro',
  ],
  alternates: { canonical: `/blog/${SLUG}/` },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    title: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${SLUG}/`,
    publishedTime: `${post.date}T09:00:00-03:00`,
    authors: ['English Talk Time'],
    images: [{ url: jg.fotoOg, alt: `Foto de ${jg.nome}` }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.category,
          item: `${SITE_URL}/blog/${SLUG}/`,
        },
      ],
    },
    {
      '@type': 'BlogPosting',
      '@id': `${SITE_URL}/blog/${SLUG}/#post`,
      headline: post.title,
      description: post.description,
      datePublished: `${post.date}T09:00:00-03:00`,
      dateModified: `${post.date}T09:00:00-03:00`,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}/blog/${SLUG}/`,
      url: `${SITE_URL}/blog/${SLUG}/`,
      inLanguage: 'pt-BR',
      keywords: post.tags.join(', '),
      image: `${SITE_URL}${jg.fotoOg}`,
      about: { '@type': 'Person', name: jg.nome, url: `${SITE_URL}${PERFIL}` },
      wordCount: 600,
      articleSection: post.category,
    },
  ],
}

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout post={post}>
        <figure className="mb-8 mx-auto max-w-sm overflow-hidden rounded-2xl border border-surface-line">
          <Image
            src={jg.foto}
            alt={`Foto de ${jg.nome}, professor parceiro do ETT`}
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </figure>

        <p>
          O English Talk Time tem um novo parceiro, e é o primeiro de uma categoria nova: a dos{' '}
          <strong>professores parceiros</strong>. Quem chega é o <strong>{jg.nome}</strong>,
          professor de inglês <strong>nativo, norte-americano</strong>, que a partir de{' '}
          <strong>5 de dezembro</strong> passa a conduzir um encontro de conversação online{' '}
          <strong>aos sábados de manhã, das 9h às 10h</strong>.
        </p>

        <h2>Quem é o J.G. Franklin</h2>
        <p>
          John Gerard Franklin, o J.G., nasceu em <strong>Tacoma, no estado de Washington, nos
          Estados Unidos</strong>. O inglês é a língua materna dele, e é com ela que trabalha há{' '}
          <strong>18 anos</strong> como professor. Hoje mora em Belo Horizonte, o que significa
          que conhece de perto o português e os pontos em que o brasileiro costuma tropeçar ao
          falar inglês.
        </p>
        <p>
          Além de professor, o J.G. é <strong>ator</strong>, com quase 100 créditos entre
          comerciais regionais e nacionais, curtas e longas-metragens nacionais e internacionais e
          teatro. Entre eles estão um papel coadjuvante em quatro episódios da série{' '}
          <em>Passaporte para Liberdade</em> (Sony/Globo), dois comerciais nacionais da Garoto, um
          papel de destaque na série <em>O Hóspede Americano</em> (HBO), o longa nacional{' '}
          <em>10 Segundos para Vencer</em> e o longa internacional <em>Soundtrack</em>.
        </p>
        <p>
          A experiência de palco e de set aparece no jeito de trabalhar a língua: entonação,
          ritmo e pronúncia são assunto central nas aulas dele, junto com as nuances do inglês do
          dia a dia, aquelas que o livro não explica.
        </p>

        <h2>Especialidades</h2>
        <ul>
          {jg.especialidades.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <p>
          Ele atende <strong>{jg.niveis.toLowerCase()}</strong>, online, em aulas individuais e em
          grupo.
        </p>

        <h2>O Encontro ETT com o J.G.: sábado de manhã</h2>
        <p>
          A novidade principal é um encontro de conversação conduzido por ele dentro do ETT:
        </p>
        <ul>
          <li>
            <strong>Quando:</strong> todo sábado, das 9h às 10h (horário de Brasília), a partir de
            5 de dezembro de 2026
          </li>
          <li>
            <strong>Onde:</strong> {encontro.formato.toLowerCase()}
          </li>
          <li>
            <strong>Grupo:</strong> {encontro.limite.toLowerCase()}, com participantes de nível
            parecido
          </li>
          <li>
            <strong>Foco:</strong> {encontro.foco.toLowerCase()}, falar inglês com um falante
            nativo
          </li>
        </ul>
        <p>
          O encontro é <strong>gratuito para quem está no{' '}
          <Link href="/desafio/">Desafio de 7 dias</Link> ou é participante regular do
          programa</strong>. As vagas são poucas, então a inscrição é feita direto com o Miguel,
          pelo WhatsApp.
        </p>
        <p>
          <a href={encontro.inscricaoUrl} target="_blank" rel="noopener noreferrer">
            Quero participar do encontro de sábado
          </a>
        </p>
        <p>
          O encontro de segunda, às 20h, continua aberto a qualquer pessoa, sem cadastro. Todos
          os horários estão na <Link href="/agenda/">agenda</Link>.
        </p>

        <h2>Aulas com o J.G.</h2>
        <p>
          Quem quiser aulas individuais ou em grupo com ele pode entrar em contato pela página do
          professor. As aulas são do J.G., nas condições dele. O ETT divulga e faz a ponte.
        </p>
        {jg.contatoUrl && (
          <p>
            <a href={jg.contatoUrl} target="_blank" rel="noopener noreferrer">
              Entrar em contato com o J.G. Franklin
            </a>
          </p>
        )}

        <h2>Por que um professor parceiro?</h2>
        <p>
          O ETT é uma plataforma de apoio à prática do inglês: ferramentas, encontros de
          conversação e parceiros. Faltava uma peça, que é conversar com quem tem o inglês como
          língua materna e ouvir de perto como a língua soa de verdade. Com o J.G., essa peça
          entra na rotina de quem pratica com a gente, toda semana.
        </p>
        <p>
          Veja o <Link href={PERFIL}>perfil completo do J.G. Franklin</Link> e os{' '}
          <Link href="/parceiros/">outros parceiros do ETT</Link>.
        </p>
      </BlogLayout>
    </>
  )
}
