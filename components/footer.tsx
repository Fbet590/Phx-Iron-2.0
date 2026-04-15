"use client"

import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export function Footer() {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-card">
      {/* CTA Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
            Contact us today for a free consultation and quote. Let&apos;s build something great together.
          </p>
          <Button 
              size="lg" 
              variant="secondary"
              className="bg-card text-foreground hover:bg-card/90"
              onClick={scrollToQuote}
            >
              Get a Free Quote
            </Button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-card">
                  PHOENIX <span className="text-primary">IRON</span> DESIGN
                </span>
              </div>
              <p className="text-card/70 mb-4">
                Arizona&apos;s premier welding and metal fabrication company. Serving Phoenix and surrounding areas since 2009.
              </p>
              
            </div>

            

            {/* Hours */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
              <ul className="space-y-2 text-card/70">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Monday – Friday: 7am – 5pm</span>
                </li>
                <li className="pl-7">Saturday: 8am – 2pm</li>
                <li className="pl-7">Sunday: Closed</li>
              </ul>
              <p className="mt-4 text-sm text-card/60">
                Emergency services available 24/7 for existing customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-card/10 py-6">
        <div className="container mx-auto px-4 text-center text-card/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Phoenix Iron Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
