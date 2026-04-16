"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  // Image 1
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ccf4i5ccf4i5ccf4.png-l6PrCqltE3Wo9J7ECF9lV7YkxINGot.jpeg", alt: "Arched side gate with wood grain panels and diamond accents in bronze finish" },
  // Image 2
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_s338ejs338ejs338.png-5FMFi8j7E4UB4gwYst8Uu8iAfxO6bD.jpeg", alt: "Modern black horizontal slat RV gate with clean lines" },
  // Image 3
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_n6dbx2n6dbx2n6db.png-50xIBb7j3Z3SoHkcfyxQ0w7ta0fRPw.jpeg", alt: "Arched side gate with natural cedar wood and decorative scrollwork" },
  // Image 4
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_k0fzsek0fzsek0fz.png-UAA8rvGq0xeVEQlFS8F3fem3NrDS88.jpeg", alt: "Double RV gate with wood grain panels and diamond accents in black frame" },
  // Image 5
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_wxnqt6wxnqt6wxnq.png-2ZxGjl2QwmmYSHwOKpOga6oREV5W21.jpeg", alt: "Elegant arched side gate with rich wood grain finish and bronze hardware" },
  // Image 6
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_cy0ve9cy0ve9cy0v.png-q6TJmQ1VOBNNUU1OPp4w9Xoz40OFcQ.jpeg", alt: "Double RV gate with mahogany wood panels and diamond accents" },
  // Image 7
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_kdgrfvkdgrfvkdgr.png-lfhNEqutmBoFWN4vft5zYb3uZjFGvt.jpeg", alt: "Large ornate double RV gate with scrollwork and dark walnut wood grain" },
  // Image 8
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_vvlgosvvlgosvvlg.png-40pfkloEfwOjkWY2Kb9qp15th2kVfo.jpeg", alt: "Modern black horizontal bar railing with scenic view" },
  // Image 9
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_oas6l2oas6l2oas6.png-xfMwayOq1Xu0eN9nXu0CCmNmkjjheH.jpeg", alt: "Courtyard entry gate with bronze scrollwork between stone pillars" },
  // Image 10
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_9rgfhn9rgfhn9rgf.png-MEk6gAXJq2FvKcVYi3dscRtROndRid.jpeg", alt: "Arched side gate with vertical bars and diamond accents in matte black" },
  // Image 11
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_1mhhoa1mhhoa1mhh.png-ZFbv4Gssdx1icat7vHkIuipeaJ2iV2.jpeg", alt: "Double RV gate with natural wood panels and black metal frame" },
  // Image 12
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_stosdvstosdvstos.png-1OrwBaQhi2obK876zFbd6yfokgjYfE.jpeg", alt: "Modern geometric pattern double gate in matte black finish" },
  // Image 13
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_dghckrdghckrdghc.png-kmErIhS5NW7RpZ8auBQF5VdUrTwZw9.jpeg", alt: "Double RV gate with dark espresso wood panels and black frame" },
  // Image 14
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_cfi95wcfi95wcfi9.png-M3H9C89meiIDbYqpjmSeODXLCJLVen.jpeg", alt: "Elegant arched side gate with bronze finish and decorative scrollwork" },
  // Image 15
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_fs3sssfs3sssfs3s.png-IeldeSmuR8aVrtNNH88ozgyPrGll80.jpeg", alt: "Black security fence with spear top finials" },
  // Image 16
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8azfve8azfve8azf.png-URvEn2fypjLlwywS6gmi6LCbrwqAnj.jpeg", alt: "Double gate with matching side gate featuring wood grain panels on paver driveway" },
  // Image 17
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5yt7ba5yt7ba5yt7.png-xMvkNqu3enMqw1HAAB5LjdR5YAoZfn.jpeg", alt: "Ornate double RV gate with copper scrollwork design" },
  // Image 18
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ba9eggba9eggba9e.png-3hhJQ9cUlRd2u1VGhCwVxzFd51WIds.jpeg", alt: "Modern privacy fence panels in charcoal finish with scenic backdrop" },
  // Image 19
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_sfmgrdsfmgrdsfmg.png-DLts148x91vm0RJtVkNHfk0HOoooDE.jpeg", alt: "Large arched double RV gate with orange wood panels and black frame with diamond accents" },
  // Image 20
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_7mo547mo547mo547.png-x1fNMIq9P1Ou8hzIrYMquayGcylG2y.jpeg", alt: "Modern woven basket pattern double RV gate with matching side gate in charcoal finish" },
  // Image 21
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_18126s18126s1812.png-GPn6juLuG4f2vwB51l37PgnG73zWjr.jpeg", alt: "Woven basket pattern side gate in matte black between cinder block walls" },
  // Image 22
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_4hdp6y4hdp6y4hdp.png-6juAHBs9TseYFwGySP1O7Gr7eToFwD.jpeg", alt: "Double entry gate with woven basket pattern between decorative breeze block walls" },
  // Image 23
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%209%2C%202026%20at%2001_52_37%20PM-aWRLuabnOBIIhD4bbfMxL3d6fsNmZq.png", alt: "Modern black horizontal slat driveway gate" },
  // Image 24
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_17_07%20PM-aZeg9U4erTLNWw0F6eobOcfCSO77Be.png", alt: "Black iron French doors with sunset reflection" },
  // Image 25
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%209%2C%202026%20at%2001_54_37%20PM-Kv2FJDhHkCBOxQWSEry42h748XnzTj.png", alt: "Arched iron and wood pedestrian gate" },
  // Image 26
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_20_37%20PM-3lsxD9B0cwxCEpEev534aleN7ABDAt.png", alt: "Black iron French doors on brick exterior" },
  // Image 27
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_32_02%20PM-ovsNeVOfqrbsIaXNIjUQUVIfbRZfNP.png", alt: "Arched wood and iron driveway gate" },
  // Image 28
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_36_12%20PM-wOwmRQoCp4jOlMtFsii1DPIVou75yB.png", alt: "Rolling wood and iron gate" },
  // Image 29
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_15_16%20PM-f8pgQhyWj4QRB1DjBUEW8FwcxS0q8J.png", alt: "Iron patio doors on Arizona home" },
  // Image 30
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_29_27%20PM-UcAlqDuTz6WRjtpI1tFhmb3uxFuyNA.png", alt: "Black iron sliding gate with decorative circles" },
  // Image 31
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2004_36_31%20PM-Fzs2c99Bwtx2ZkvAUQSgnLaYgMvVcm.png", alt: "Southwest style iron and glass entry door" },
  // Image 32
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%207%2C%202026%20at%2003_38_30%20PM-00oWskWotDW9RAIg85khf0f6V0VcpB.png", alt: "Modern black woven pattern gate" },
  // Image 33
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
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] md:aspect-video">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-background text-sm md:text-base">{galleryImages[selectedIndex].alt}</p>
                  <p className="text-background/60 text-xs mt-1">{selectedIndex + 1} / {galleryImages.length}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
