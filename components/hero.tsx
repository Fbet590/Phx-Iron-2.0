"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 bg-card/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold tracking-tight text-foreground">
                PHOENIX <span className="text-primary">IRON</span> DESIGN
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={scrollToQuote}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors text-left py-2"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors text-left py-2"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors text-left py-2"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors text-left py-2"
                >
                  FAQ
                </button>
                <Button 
                  onClick={scrollToQuote}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Custom black iron French doors with glass panes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center py-16">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold tracking-wider uppercase rounded">
              Arizona&apos;s Trusted Metal Experts
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[45px] md:text-5xl lg:text-6xl font-black text-card mb-6 leading-tight text-balance">
            Bring Your Dream Gate or Door to Life with
            <span className="block text-primary">Expert Design & Craftsmanship</span>
          </h1>

          <p className="text-lg md:text-xl text-card/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Custom iron entry doors and gates crafted to elevate your home&apos;s 
            style, security, and curb appeal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToQuote}
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-card/10 border-card border-2 text-card font-semibold hover:bg-card hover:text-foreground"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-card/60 flex items-start justify-center p-1.5 mx-auto">
              <div className="w-1 h-2.5 bg-card/80 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
