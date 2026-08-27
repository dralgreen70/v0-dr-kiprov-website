import { ExternalLink, BookOpen } from "lucide-react"

type ThemeIssueArticle = {
  order: string
  type: string
  title: string
  authors: string
  articleNumber: string
  doi: string
  /** True for the two articles Dr. Kiprov co-authored. */
  byKiprov?: boolean
}

const articles: ThemeIssueArticle[] = [
  {
    order: "01",
    type: "Editorial",
    title:
      "Therapeutic apheresis in transition: New indications and the emergence of precision apheresis",
    authors: "Green AP, Kiprov DD",
    articleNumber: "104480",
    doi: "10.1016/j.transci.2026.104480",
    byKiprov: true,
  },
  {
    order: "02",
    type: "Review",
    title:
      "Therapeutic plasma exchange in Alzheimer's disease: From clinical trial to real-world evidence",
    authors: "Khatri BO",
    articleNumber: "104481",
    doi: "10.1016/j.transci.2026.104481",
  },
  {
    order: "03",
    type: "Review",
    title:
      "Therapeutic plasma exchange and immunomodulatory strategies in post-infectious syndromes: A review of immune dysregulation in PTLDS, long COVID, ME/CFS, and PANS/PANDAS",
    authors: "Kaplan G",
    articleNumber: "104482",
    doi: "10.1016/j.transci.2026.104482",
  },
  {
    order: "04",
    type: "Review",
    title:
      "Lipoprotein apheresis: From familial hypercholesterolemia and elevated lipoprotein(a) to emerging roles in peripheral arterial and renal disease",
    authors: "Nadim M, Akgun Y",
    articleNumber: "104483",
    doi: "10.1016/j.transci.2026.104483",
  },
  {
    order: "05",
    type: "Review",
    title:
      "Technological advances in selective plasma adsorption: The MTx.100 column and the emergence of subtractive precision medicine",
    authors: "Kiprov DD, Green AP, Boyinapalli P",
    articleNumber: "104484",
    doi: "10.1016/j.transci.2026.104484",
    byKiprov: true,
  },
]

export function ThemeIssueSection() {
  return (
    <section
      id="theme-issue"
      className="border-t border-border bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Guest Editor &mdash; 2026
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            A Theme Issue on Precision Apheresis
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Dr. Kiprov served as co-guest editor of a 2026 theme issue of{" "}
            <em>Transfusion and Apheresis Science</em>, convened with Dr. Allen
            Green. The issue maps the field&apos;s shift from non-selective
            plasma exchange toward selective, component-targeted apheresis
            across neurodegeneration, post-infectious immune dysregulation,
            cardiovascular and renal disease, and emerging column technology. He
            co-authored the opening editorial and a review of selective
            adsorption technology.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-3 border-b border-border px-6 py-5">
            <BookOpen className="h-5 w-5 shrink-0 text-accent" />
            <span className="font-serif text-lg font-semibold text-card-foreground">
              Transfusion and Apheresis Science, Vol. 65, Issue 4
            </span>
          </div>

          <ol className="divide-y divide-border">
            {articles.map((article) => (
              <li
                key={article.doi}
                className="flex gap-4 px-6 py-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  {article.order}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {article.type}
                    </span>
                    {article.byKiprov && (
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                        Co-authored by Dr. Kiprov
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1.5 text-sm font-semibold leading-snug text-card-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {article.authors}.{" "}
                    <span className="italic">Transfus Apher Sci.</span>{" "}
                    2026;65(4):{article.articleNumber}.
                  </p>
                  <a
                    href={`https://doi.org/${article.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    DOI: {article.doi}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
