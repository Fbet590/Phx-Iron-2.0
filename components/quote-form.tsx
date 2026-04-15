"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { trackFBEvent } from "@/components/facebook-pixel"

type FormStep = 1 | 2 | 3

interface FormData {
  name: string
  email: string
  phone: string
}

export function QuoteForm() {
  const [step, setStep] = useState<FormStep>(1)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Remove all non-numeric characters and check if we have 10 digits
    const cleaned = phone.replace(/\D/g, "")
    return cleaned.length >= 10
  }

  const handleNext = () => {
    if (step < 3) setStep((step + 1) as FormStep)
  }

  const handlePrev = () => {
    if (step > 1) setStep((step - 1) as FormStep)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const webhookUrl = "https://services.leadconnectorhq.com/hooks/GRbuCAmd9IkPektkc5IA/webhook-trigger/ae743574-7596-4d47-acf8-82d5c7cade70"

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Track Facebook Lead conversion event
      trackFBEvent("Lead", {
        content_category: "Quote Request",
      })

      setSubmitted(true)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name !== ""
      case 2:
        if (formData.email === "") return false
        if (!validateEmail(formData.email)) {
          return false
        }
        return true
      case 3:
        if (formData.phone === "") return false
        if (!validatePhone(formData.phone)) {
          return false
        }
        return true
      default:
        return true
    }
  }

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value })
    // Only show error if they've typed something that looks like an attempt at an email (contains @)
    if (value && value.includes("@") && !validateEmail(value)) {
      setErrors({ ...errors, email: "Please enter a valid email address" })
    } else {
      setErrors({ ...errors, email: undefined })
    }
  }

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value })
    // Only show error if they've entered some digits but not enough
    const digits = value.replace(/\D/g, "")
    if (digits.length > 0 && digits.length < 10) {
      setErrors({ ...errors, phone: "Please enter a valid 10-digit phone number" })
    } else {
      setErrors({ ...errors, phone: undefined })
    }
  }

  if (submitted) {
    return (
      <section id="quote-form" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 text-center bg-card">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg">
              We&apos;ve received your request and will contact you within 24 hours to discuss your project.
            </p>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider mb-2">
            Get Started Today
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tell Us About Your Project
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Answer a few quick questions and we&apos;ll provide a custom quote
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s < step ? <Check className="w-4 h-4" /> : s}
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        <Card className="max-w-xl mx-auto p-5 md:p-6 bg-foreground border-foreground/80">
          {/* Step 1: Name */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background text-center mb-4">
                What&apos;s your name?
              </h3>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="py-5 bg-background/10 text-background placeholder:text-background/50 border-background/30"
              />
            </div>
          )}

          {/* Step 2: Email */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background text-center mb-4">
                What&apos;s your email address?
              </h3>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className={cn(
                    "py-5 bg-background/10 text-background placeholder:text-background/50",
                    errors.email ? "border-red-500" : "border-background/30"
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Phone */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background text-center mb-4">
                Best phone number to reach you?
              </h3>
              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={cn(
                    "py-5 bg-background/10 text-background placeholder:text-background/50",
                    errors.phone ? "border-red-500" : "border-background/30"
                  )}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <Button
                variant="ghost"
                onClick={handlePrev}
                className="gap-2 text-foreground/50 hover:text-background hover:bg-background/10"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
            ) : (
              <div />
            )}
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            )}
          </div>

          {submitError && (
            <p className="text-red-400 text-sm text-center mt-4">{submitError}</p>
          )}
        </Card>
      </div>
    </section>
  )
}
