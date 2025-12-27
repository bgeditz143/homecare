import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Clock, BadgeCheck, Users, Stethoscope, Hotel, Star, Quote } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Professional Care at Your Doorstep
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience compassionate home care and hospitality services delivered by trained professionals.
                Available 24/7 for your peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/book">Book a Service</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-nurse-caring-for-elderly-patient-at-h.jpg"
                alt="Professional care services"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">About SevaSadan Services</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We are dedicated to providing exceptional home care and hospitality services across India. Our mission is
              to ensure comfort, safety, and professional care for patients, families, and businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 10 years of experience, we've helped thousands of families with compassionate care and
              hospitality solutions. Our team of trained professionals is committed to delivering excellence in every
              service.
            </p>
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Trained Staff</div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img src="/professional-indian-nurse-with-elderly-patient.jpg" alt="Professional care" className="object-cover w-full h-full" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img src="/indian-healthcare-team-smiling.jpg" alt="Healthcare team" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img src="/home-care-service-india.jpg" alt="Home care service" className="object-cover w-full h-full" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/hotel-housekeeping-staff-india.jpg"
                  alt="Hospitality service"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Service Categories</h2>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive solutions tailored to meet your healthcare and hospitality needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Home Care Services */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary to-accent relative">
                <img
                  src="/home-healthcare-nursing-elderly-care.jpg"
                  alt="Home Care Services"
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Home Care Services</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Professional medical and personal care services for patients and elderly individuals at home. Our
                  trained caregivers provide compassionate support with dignity and respect.
                </p>
                <Button asChild className="w-full">
                  <Link href="/services#home-care">Explore Home Care</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hospitality Services */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary to-accent relative">
                <img
                  src="/hotel-housekeeping-professional-cleaning-service.jpg"
                  alt="Hospitality Services"
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute inset-0 bg-secondary/20" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Hotel className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Hospitality Services</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Expert housekeeping, facility management, and hospitality staff for hotels, guest houses, and events.
                  Ensuring cleanliness and professional service standards.
                </p>
                <Button asChild className="w-full">
                  <Link href="/services#hospitality">Explore Hospitality</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Choose SevaSadan?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your trusted partner for professional care and hospitality solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Trained Staff</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All our professionals are thoroughly trained, verified, and experienced in their respective fields.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Round-the-clock availability to address your needs and provide immediate assistance whenever required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BadgeCheck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Affordable Pricing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Competitive rates without compromising on quality. Flexible packages to suit your budget.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Trusted Care</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Verified professionals with background checks ensuring safety and reliability you can trust.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">What Our Clients Say</h2>
            <p className="text-muted-foreground leading-relaxed">
              Real experiences from families and businesses we've served
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "SevaSadan provided exceptional care for my elderly mother. The nurses were professional,
                  compassionate, and always on time. Highly recommended!"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-semibold">RS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Rajesh Sharma</div>
                    <div className="text-sm text-muted-foreground">Delhi</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "We hired SevaSadan for housekeeping at our hotel. Their staff is well-trained and maintains the
                  highest standards. Our guests are very happy!"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-semibold">PK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Priya Kapoor</div>
                    <div className="text-sm text-muted-foreground">Mumbai</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "After my surgery, SevaSadan's physiotherapist helped me recover quickly. Professional service and
                  affordable pricing. Thank you!"
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-semibold">AV</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Amit Verma</div>
                    <div className="text-sm text-muted-foreground">Bangalore</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
              Need Care at Home? Book Now
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Let our experienced professionals take care of your needs. Available 24/7 for your convenience.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
