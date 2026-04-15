"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How long does a typical welding project take?",
    answer: "Project timelines vary based on complexity and scope. Simple repairs might be completed in a day, while custom gates typically take 2-3 weeks. Structural projects may require 4-6 weeks. We'll provide a detailed timeline during your free consultation.",
  },
  {
    question: "Do you offer financing or payment plans?",
    answer: "Yes, we offer flexible financing options to accommodate your budget. We work with multiple lenders to find the best rates for qualified customers. Ask about our 0% interest options on qualifying projects.",
  },
  
  {
    question: "Do I need a permit for my project?",
    answer: "Permit requirements depend on the project type and location. Many structural projects and large gates require permits. Don't worry — we handle all permit applications and inspections as part of our full-service approach.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Phoenix metropolitan area including Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria, and surrounding communities. For larger projects, we're available throughout Arizona.",
  },
  {
    question: "Can you work from my design or drawings?",
    answer: "Yes! We can work from your sketches, blueprints, or existing designs. We also offer design consultation services if you need help bringing your vision to life. Our team can create detailed CAD drawings for approval before fabrication begins.",
  },
]

export function FAQ() {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
