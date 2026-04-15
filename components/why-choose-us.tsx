"use client"

import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  Award, 
  MessageSquare, 
  Hammer, 
  FileCheck, 
  Users 
} from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. Get a detailed quote upfront with clear breakdowns.",
  },
  {
    icon: Award,
    title: "Certified Craftsmanship",
    description: "AWS certified welders with proven expertise and stunning portfolio of work.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Stay informed every step of the way with regular updates and responsive support.",
  },
  {
    icon: Hammer,
    title: "Premium Materials",
    description: "We use only the highest quality steel, aluminum, and specialty metals.",
  },
  {
    icon: FileCheck,
    title: "Permits & Compliance",
    description: "We handle all necessary permits and ensure code compliance for your project.",
  },
  {
    icon: Users,
    title: "Family-Owned Values",
    description: "Professional service with the personal touch of a family-run business.",
  },
]

export function WhyChooseUs() {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Why Phoenix Iron Design?
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            No More Guesswork, Hidden Costs, or Delays
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s why Arizona homeowners and businesses trust us with their metalwork projects:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToQuote}
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
