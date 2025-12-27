import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Heart,
  Users,
  Stethoscope,
  Activity,
  Dumbbell,
  Sparkles,
  Hotel,
  UtensilsCrossed,
  Building,
  PartyPopper,
} from "lucide-react"

export default function ServicesPage() {
  const homeCareServices = [
    {
      icon: Users,
      title: "Elderly Care",
      description:
        "Compassionate care for seniors with daily living assistance, companionship, and medication management.",
      image: "/elderly-care-caregiver-helping-senior-citizen.jpg",
    },
    {
      icon: Stethoscope,
      title: "Nursing Care",
      description:
        "Professional nursing services including wound care, medication administration, and health monitoring.",
      image: "/professional-nurse-providing-medical-care-at-home.jpg",
    },
    {
      icon: Heart,
      title: "Patient Attendant",
      description: "Dedicated attendants for post-surgery care, bedridden patients, and hospital accompaniment.",
      image: "/patient-attendant-caring-for-bedridden-patient.jpg",
    },
    {
      icon: Activity,
      title: "Physiotherapy at Home",
      description: "Expert physiotherapy services for rehabilitation, pain management, and mobility improvement.",
      image: "/physiotherapist-providing-therapy-session-at-home.jpg",
    },
    {
      icon: Dumbbell,
      title: "Medical Equipment Support",
      description: "Assistance with medical equipment setup, maintenance, and training for home use.",
      image: "/medical-equipment-oxygen-cylinder-wheelchair-at-ho.jpg",
    },
  ]

  const hospitalityServices = [
    {
      icon: Sparkles,
      title: "Housekeeping Staff",
      description:
        "Professional housekeeping services for residential and commercial properties with attention to detail.",
      image: "/professional-housekeeper-cleaning-modern-home.jpg",
    },
    {
      icon: Hotel,
      title: "Hotel Cleaning Services",
      description: "Comprehensive cleaning solutions for hotels, guest houses, and lodging facilities.",
      image: "/hotel-room-cleaning-service-professional-hospitali.jpg",
    },
    {
      icon: UtensilsCrossed,
      title: "Pantry & Kitchen Staff",
      description: "Skilled kitchen staff for food preparation, pantry management, and culinary services.",
      image: "/professional-chef-kitchen-staff-preparing-food.jpg",
    },
    {
      icon: Building,
      title: "Facility Management",
      description: "Complete facility management services including maintenance, security, and operations.",
      image: "/facility-management-building-maintenance-services.jpg",
    },
    {
      icon: PartyPopper,
      title: "Event Support Staff",
      description: "Experienced event staff for conferences, weddings, and corporate functions.",
      image: "/event-staff-serving-at-professional-conference.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive care and hospitality solutions designed to meet your unique needs
          </p>
        </div>
      </section>

      {/* Home Care Services */}
      <section id="home-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Home Care Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Professional medical and personal care services delivered with compassion and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeCareServices.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Hospitality Services */}
      <section id="hospitality" className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Hospitality Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Expert hospitality and facility management solutions for businesses and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalityServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <service.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/book">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Book your service today and experience professional care delivered by trained experts.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/book">Book a Service</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
