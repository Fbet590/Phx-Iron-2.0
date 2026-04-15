"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Gates",
    description: "Custom wrought iron and steel gates designed for security and curb appeal.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_38_30%20PM-00oWskWotDW9RAIg85khf0f6V0VcpB.png",
  },
  {
    title: "Entry Doors",
    description: "Elegant iron entry doors that make a statement and enhance your home.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_20_37%20PM-3lsxD9B0cwxCEpEev534aleN7ABDAt.png",
  },
]

export function Services() {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Ready to Start Your Project?
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Expert Welding & Fabrication Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our skilled team specializes in projects of all sizes, delivering precise craftsmanship, clear communication, and results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToQuote}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
