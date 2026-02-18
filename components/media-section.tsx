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
          <div className="mx-auto mt-8 max-w-2xl">
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
