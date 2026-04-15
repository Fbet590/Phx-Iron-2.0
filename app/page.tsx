import { Hero } from "@/components/hero"
import { TrustIndicators } from "@/components/trust-indicators"
import { QuoteForm } from "@/components/quote-form"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustIndicators />
      <QuoteForm />
      <Gallery />
      <Testimonials />
      <Services />
      <FAQ />
      <Footer />
    </main>
  )
}
