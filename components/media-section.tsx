import { ExternalLink, Mic } from "lucide-react"

const videos = [
  {
    id: "hzfan33ho-s",
    title: "Dr. Kiprov on Therapeutic Plasma Exchange and Aging",
  },
  {
    id: "UJxPmcEgUUw",
    title: "The Science Behind Plasma Exchange",
  },
  {
    id: "Ucr8OEyFdW0",
    title: "Clinical Applications of TPE",
  },
]

export function MediaSection() {
  return (
    <section id="media" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            In the Media & Speaking
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Podcasts, Conferences & Press
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Dr. Kiprov is a sought-after speaker on therapeutic plasma exchange,
            biological aging, and evidence-based preventative medicine.
          </p>
        </div>

        {/* YouTube Embeds */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-card-foreground leading-snug">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Press */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-xl font-bold text-foreground">
            Press Coverage
          </h3>
          <div className="mx-auto mt-8 max-w-2xl flex flex-col gap-4">
            <a
              href="https://sfstandard.com/2024/10/05/plasma-exchange-longevity-treatment/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <span className="font-serif text-lg font-bold text-primary">SF</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  The San Francisco Standard
                </p>
                <h4 className="mt-1 text-base font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  Plasma Exchange as a Longevity Treatment
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  An in-depth look at Dr. {"Kiprov's"} pioneering work in therapeutic
                  plasma exchange and its implications for longevity and
                  age-related disease.
                </p>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://www.krqe.com/business/press-releases/ein-presswire/825390972/human-study-reveals-therapeutic-plasma-exchange-tpe-reverses-biological-aging/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <span className="font-serif text-sm font-bold text-primary">KRQE</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  KRQE News / EIN Presswire
                </p>
                <h4 className="mt-1 text-base font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  Human Study Reveals Therapeutic Plasma Exchange (TPE) Reverses Biological Aging
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Press release covering the landmark clinical study demonstrating
                  that therapeutic plasma exchange can reverse biological aging markers
                  in human subjects.
                </p>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://www.tallahassee.com/press-release/story/25771/kaplan-center-to-offer-outpatient-therapeutic-plasma-exchange-tpe-to-treat-chronic-illness-cognitive-health-and-aging/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <span className="font-serif text-sm font-bold text-primary">KC</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Tallahassee Democrat / Kaplan Center
                </p>
                <h4 className="mt-1 text-base font-semibold text-card-foreground group-hover:text-accent transition-colors">
                  Kaplan Center to Offer Outpatient Therapeutic Plasma Exchange (TPE) to Treat Chronic Illness, Cognitive Health and Aging
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  The Kaplan Center announces outpatient TPE services for patients with
                  chronic illness, cognitive decline, and age-related conditions, expanding
                  access to this evidence-based therapy.
                </p>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>

        {/* Speaking CTA */}
        <div className="mt-16 rounded-xl border border-border bg-secondary p-8 text-center">
          <Mic className="mx-auto h-8 w-8 text-accent" />
          <p className="mt-4 font-serif text-lg font-semibold text-foreground">
            Available for Speaking Engagements
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Dr. Kiprov is available for speaking engagements, media interviews,
            and podcast appearances.
          </p>
          <a
            href="mailto:info@globalapheresis.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-light"
          >
            Media Inquiries
          </a>
        </div>
      </div>
    </section>
  )
}
