import { ArrowRight, GraduationCap, FlaskConical, Megaphone, Users } from "lucide-react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Training from the Pioneer",
    description:
      "Comprehensive training directly from Dr. Kiprov, who has trained most physicians currently practicing TPE.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Protocols",
    description:
      "Clinical protocols proven in peer-reviewed research across four decades and thousands of procedures.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Operations Support",
    description:
      "Complete operational guidance and marketing support to help you build a successful TPE practice.",
  },
  {
    icon: Users,
    title: "Professional Network",
    description:
      "Join a growing network of physicians delivering evidence-based therapeutic apheresis nationwide.",
  },
]

export function AffiliateSection() {
  return (
    <section id="affiliate" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            For Physicians
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Join the Only Evidence-Based Therapeutic Apheresis Network
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Partner with Global Apheresis to offer your patients treatment
            protocols backed by over 100 peer-reviewed publications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="mailto:info@globalapheresis.com?subject=Affiliate%20Partnership%20Inquiry"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-light"
          >
            Learn About Affiliate Opportunities
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
