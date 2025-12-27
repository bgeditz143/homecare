import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Target, Eye, Heart, Star, Quote, Award, CheckCircle, BadgeCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              About SevaSadan Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Delivering compassionate care and professional hospitality services across India for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/indian-healthcare-facility-modern-compassionate.jpg" alt="SevaSadan facility" className="object-cover w-full h-full" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Founded in 2015, SevaSadan Services began with a simple mission: to provide quality home care and
              hospitality services that families can trust. What started as a small team of dedicated caregivers has
              grown into one of India's most reliable care service providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve thousands of families and businesses across major cities in India. Our commitment to
              excellence, compassion, and professionalism has made us a household name in home care and hospitality
              services. Every member of our team is carefully selected, thoroughly trained, and dedicated to making a
              positive difference in people's lives.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Certified Professionals</div>
                  <div className="text-sm text-muted-foreground">All staff verified and trained</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-foreground">24/7 Availability</div>
                  <div className="text-sm text-muted-foreground">Always here when you need us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide compassionate, professional, and affordable care services that enhance the quality of life
                  for our clients. We strive to deliver excellence in every interaction, ensuring safety, dignity, and
                  comfort for all those we serve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted and comprehensive care and hospitality service provider. We envision a
                  future where quality care is accessible to everyone, and where our services set the benchmark for
                  excellence in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
          <p className="text-muted-foreground leading-relaxed">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Compassion</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We treat every client with empathy, kindness, and respect
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We maintain the highest standards in all our services
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Integrity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We operate with honesty and transparency in everything
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <BadgeCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Reliability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We're dependable and consistent in our commitment to you
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground leading-relaxed">
              Experienced professionals dedicated to excellence in care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/indian-female-healthcare-director-professional.jpg" alt="Dr. Meera Patel" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-6 text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Dr. Meera Patel</h3>
                <p className="text-primary font-medium">Founder & CEO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MD in Internal Medicine with 15+ years of healthcare experience
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/indian-male-operations-director-professional.jpg" alt="Rajesh Kumar" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-6 text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Rajesh Kumar</h3>
                <p className="text-primary font-medium">Chief Operations Officer</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MBA with 12+ years in hospitality and facility management
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src="/indian-female-nurse-supervisor-smiling.jpg" alt="Priya Sharma" className="object-cover w-full h-full" />
              </div>
              <CardContent className="p-6 text-center space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Priya Sharma</h3>
                <p className="text-primary font-medium">Head of Nursing Services</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  BSc Nursing with 10+ years of clinical and home care experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Client Testimonials</h2>
          <p className="text-muted-foreground leading-relaxed">
            Hear from the families and businesses we've had the privilege to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="relative">
            <CardContent className="p-6 space-y-4">
              <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "SevaSadan provided exceptional care for my elderly mother. The nurses were professional, compassionate,
                and always on time. Highly recommended!"
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
                "We hired SevaSadan for housekeeping at our hotel. Their staff is well-trained and maintains the highest
                standards. Our guests are very happy!"
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

          <Card className="relative">
            <CardContent className="p-6 space-y-4">
              <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "The baby care service was outstanding. The nanny was experienced and took excellent care of our
                newborn. We felt completely at ease."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-semibold">SD</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sneha Desai</div>
                  <div className="text-sm text-muted-foreground">Pune</div>
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
                "For our corporate event, SevaSadan provided excellent hospitality staff. They were professional,
                courteous, and managed everything smoothly."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-semibold">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Arjun Mehta</div>
                  <div className="text-sm text-muted-foreground">Hyderabad</div>
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
                "The cooking service has been a blessing for our family. Fresh, healthy meals prepared daily with care
                and attention to dietary needs."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center">
                  <span className="text-primary font-semibold">NK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Neha Khanna</div>
                  <div className="text-sm text-muted-foreground">Chennai</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">10+</div>
              <div className="text-primary-foreground/90">Years of Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">5000+</div>
              <div className="text-primary-foreground/90">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">500+</div>
              <div className="text-primary-foreground/90">Trained Staff</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/90">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-muted rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who trust SevaSadan for their care and hospitality needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/book">Book a Service</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
