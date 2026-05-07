import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Methodology from '@/components/Methodology'
import Tools from '@/components/Tools'
import Partners from '@/components/Partners'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Tools />
      <Partners />
      <HowItWorks />
      <Results />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  )
}
