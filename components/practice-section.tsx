import {
  ArrowRight,
  MapPin,
  Stethoscope,
  Brain,
  ShieldCheck,
  HeartPulse,
} from "lucide-react"

const services = [
  {
    icon: HeartPulse,
    title: "Biological Age Optimization",
    description:
      "TPE protocols proven to reduce biological age by 1-3 years, measured by validated epigenetic clocks.",
  },
  {
    icon: Brain,
    title: "Alzheimer's Disease",
    description:
      "Evidence-based plasma exchange with albumin replacement, proven to slow cognitive decline by 52-71%.",
  },
  {
    icon: ShieldCheck,
    title: "Long COVID",
    description:
      "Immunomodulatory therapeutic plasma exchange protocols for managing long COVID symptoms.",
  },
  {
    icon: Stethoscope,
    title: "Autoimmune Conditions",
    description:
      "Comprehensive therapeutic apheresis for a broad range of immunologically-mediated disorders.",
  },
]

export function PracticeSection() {
  return (
    <section id="practice" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Global Apheresis
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
            Where Science Meets Clinical Practice
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
            Founded by Dr. Kiprov, Global Apheresis delivers therapeutic plasma
            exchange based on 40 years of published research. Every protocol is
            grounded in peer-reviewed evidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <service.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-primary-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
          <MapPin className="h-4 w-4" />
          <span>
            655 Redwood Highway, Suite 370, Mill Valley, CA 94941 | Growing
            affiliate network
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.globalapheresis.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            Schedule Your Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#affiliate"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Physicians: Join Our Affiliate Network
          </a>
        </div>
      </div>
    </section>
  )
}
