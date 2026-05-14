import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Methodology from '@/components/Methodology'
import Tools from '@/components/Tools'
import Partners from '@/components/Partners'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'
import { homeFaqs } from '@/lib/home-faqs'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Tools />
      <Partners />
      <HowItWorks />
      <Results />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
