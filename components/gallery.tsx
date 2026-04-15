"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%209%2C%202026%20at%2001_52_37%20PM-aWRLuabnOBIIhD4bbfMxL3d6fsNmZq.png", alt: "Modern black horizontal slat driveway gate" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_17_07%20PM-aZeg9U4erTLNWw0F6eobOcfCSO77Be.png", alt: "Black iron French doors with sunset reflection" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%209%2C%202026%20at%2001_54_37%20PM-Kv2FJDhHkCBOxQWSEry42h748XnzTj.png", alt: "Arched iron and wood pedestrian gate" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_20_37%20PM-3lsxD9B0cwxCEpEev534aleN7ABDAt.png", alt: "Black iron French doors on brick exterior" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_32_02%20PM-ovsNeVOfqrbsIaXNIjUQUVIfbRZfNP.png", alt: "Arched wood and iron driveway gate" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_36_12%20PM-wOwmRQoCp4jOlMtFsii1DPIVou75yB.png", alt: "Rolling wood and iron gate" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_15_16%20PM-f8pgQhyWj4QRB1DjBUEW8FwcxS0q8J.png", alt: "Iron patio doors on Arizona home" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_29_27%20PM-UcAlqDuTz6WRjtpI1tFhmb3uxFuyNA.png", alt: "Black iron sliding gate with decorative circles" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_36_31%20PM-Fzs2c99Bwtx2ZkvAUQSgnLaYgMvVcm.png", alt: "Southwest style iron and glass entry door" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_38_30%20PM-00oWskWotDW9RAIg85khf0f6V0VcpB.png", alt: "Modern black woven pattern gate" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_34_37%20PM-mPpIPXL7G2tbDYYt86DiDRJys2RIfw.png", alt: "Ornate iron entry gate with scrollwork" },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            See Our Work
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Explore Our Recent Projects
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Imagine the possibilities for your own home or business
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </button>
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

        {/* Lightbox Modal */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-5xl w-[95vw] p-0 bg-foreground/95 border-none" aria-describedby={undefined}>
            <VisuallyHidden>
              <DialogTitle>Project Gallery</DialogTitle>
            </VisuallyHidden>
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-background" />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-background" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-background/20 hover:bg-background/40 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-background" />
            </button>

            {selectedIndex !== null && (
              <div className="relative aspect-[4/3] md:aspect-video">
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
