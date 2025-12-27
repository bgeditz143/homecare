"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function BookPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Booking Request Sent!",
          description: "We will contact you shortly to confirm your service.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to send booking request")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Book a Service</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Service Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 90000 00000" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Select Service *</Label>
                <Select name="service" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elderly-care">Elderly Care</SelectItem>
                    <SelectItem value="nursing-care">Nursing Care</SelectItem>
                    <SelectItem value="patient-attendant">Patient Attendant</SelectItem>
                    <SelectItem value="physiotherapy">Physiotherapy at Home</SelectItem>
                    <SelectItem value="medical-equipment">Medical Equipment Support</SelectItem>
                    <SelectItem value="housekeeping">Housekeeping Staff</SelectItem>
                    <SelectItem value="hotel-cleaning">Hotel Cleaning Services</SelectItem>
                    <SelectItem value="kitchen-staff">Pantry & Kitchen Staff</SelectItem>
                    <SelectItem value="facility-management">Facility Management</SelectItem>
                    <SelectItem value="event-support">Event Support Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Describe Your Requirement</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please provide details about your service requirements..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by our team regarding your service request.
              </p>
            </form>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
