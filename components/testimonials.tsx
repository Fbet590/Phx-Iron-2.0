"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "Scottsdale, AZ",
    text: "Phoenix Iron Design built custom gates for our home and the quality is outstanding. They were professional, on time, and the craftsmanship exceeded our expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    location: "Phoenix, AZ",
    text: "We had a beautiful iron entry door installed at our home. The team was knowledgeable, efficient, and kept us informed every step of the way. Great communication throughout the entire process.",
    rating: 5,
  },
  {
    name: "David Martinez",
    location: "Mesa, AZ",
    text: "Best ironwork service in Arizona! They fabricated custom railings for our backyard patio. Beautiful work and fair pricing. Will definitely use them again.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    location: "Gilbert, AZ",
    text: "We needed an RV gate for our side yard and Phoenix Iron Design delivered exactly what we wanted. The design is both functional and beautiful. Neighbors keep asking who did the work!",
    rating: 5,
  },
  {
    name: "Robert Garcia",
    location: "Tempe, AZ",
    text: "Absolutely thrilled with our new pool fence. Safety was our priority and they made sure we got a design that was secure while still looking elegant. Professional team from start to finish.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    location: "Chandler, AZ",
    text: "Our front entry door is now the highlight of our home. The craftsmanship is incredible and it has completely transformed our curb appeal. Worth every penny!",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    location: "Peoria, AZ",
    text: "Had them install a custom side gate and stair railing. Both pieces match perfectly and look like they were always meant to be part of our home. Excellent attention to detail.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    location: "Glendale, AZ",
    text: "From the initial consultation to the final installation, everything was seamless. Our iron entry door is stunning and the quality is top-notch. Highly recommend Phoenix Iron Design!",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Don&apos;t Just Take Our Word For It
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground text-balance">
            See What Our Customers Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="p-8 bg-card">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-lg text-center mb-6 leading-relaxed">
              &quot;{currentTestimonial.text}&quot;
            </p>
            <div className="text-center border-t border-border pt-4">
              <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToQuote}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  )
}
