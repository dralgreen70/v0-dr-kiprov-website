import { ExternalLink } from "lucide-react"

const studies = [
  {
    id: 1,
    year: "2013 / 2020",
    journal: "J Clin Apheresis / Aging",
    title: "Parabiosis to Human Translation",
    summary:
      "Dr. Kiprov hypothesized that intermittent heterochronic plasma exchange could delay cellular senescence, then co-authored the landmark study proving rejuvenation of three germ layer tissues by exchanging old blood plasma with saline-albumin.",
    authors: "Mehdipour M, Skinner C, Wong N, ... Kiprov D, Conboy MJ, Conboy IM",
    citation:
      "Aging (Albany NY). 12, 8790-8819 (2020)",
    highlight: "First human translation of parabiosis research",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jca.21286",
  },
  {
    id: 2,
    year: "2020",
    journal: "Alzheimer's & Dementia",
    title: "AMBAR Trial: Plasma Exchange for Alzheimer's",
    summary:
      "A randomized controlled clinical trial demonstrating 52-71% slowing of Alzheimer's disease progression with plasma exchange and albumin replacement -- superior to any FDA-approved drug at the time.",
    authors: "Boada M, Lopez O, ... Kiprov D, ... Paez A",
    citation:
      "Alzheimer's and Dementia: June 4, 2020. DOI:10.1002/alz.12137",
    highlight: "52-71% slowing of Alzheimer's progression",
    link: "https://pubmed.ncbi.nlm.nih.gov/32715623/",
  },
  {
    id: 3,
    year: "2022",
    journal: "GeroScience",
    title: "Old Plasma Dilution Reduces Biological Age",
    summary:
      "The first clinical proof that therapeutic plasma exchange reduces human biological age by 1-3 years, measured by validated epigenetic clocks and biomarker panels.",
    authors: "Kim D, Kiprov DD, Luellen C, et al.",
    citation:
      "GeroScience 44, 2701-2720 (2022). doi:10.1007/s11357-022-00645-w",
    highlight: "First proof: TPE reduces biological age by 1-3 years",
    link: "https://pubmed.ncbi.nlm.nih.gov/35999337/",
  },
  {
    id: 4,
    year: "2025",
    journal: "Aging Cell",
    title: "Multi-Omics Analysis of TPE with Aging Clocks",
    summary:
      "A single-blinded, randomized, placebo-controlled study with the Buck Institute analyzing multi-omic biomarkers that contribute to biological age rejuvenation in response to therapeutic plasma exchange.",
    authors: "Fuentealba M, Kiprov D, Schneider K, ... Furman D",
    citation:
      "Aging Cell. 2025 Aug;24(8):e70103. doi:10.1111/acel.70103",
    highlight: "Buck Institute partnership - placebo-controlled RCT",
    link: "https://pubmed.ncbi.nlm.nih.gov/40424097/",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            The Research That Changed Everything
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Landmark Studies: From Discovery to Clinical Application
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Four decades of research translating laboratory discoveries into
            evidence-based clinical treatments.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <article
              key={study.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {study.highlight}
                </span>
                <span className="shrink-0 text-sm font-medium text-muted-foreground">
                  {study.year}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-xl font-bold text-card-foreground">
                {study.title}
              </h3>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                {study.journal}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {study.summary}
              </p>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground/70">
                  {study.authors}
                </p>
                <p className="mt-1 text-xs italic text-muted-foreground/60">
                  {study.citation}
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline"
                >
                  Read Publication <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
