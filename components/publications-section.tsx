"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText, ExternalLink } from "lucide-react"
import { publications, type Publication } from "@/lib/publications-data"

const HOMEPAGE_CATEGORIES = [
  "Biological Aging & Longevity",
  "Alzheimer's Disease & Neurodegeneration",
  "COVID-19 & Post-Acute Sequelae",
  "Autoimmune & Immunological Conditions",
] as const

function groupByCategory(pubs: Publication[]) {
  const grouped: Record<string, Publication[]> = {}
  for (const cat of HOMEPAGE_CATEGORIES) {
    grouped[cat] = pubs
      .filter((p) => p.category === cat)
      .sort((a, b) => b.year - a.year)
  }
  return grouped
}

const categoryGroups = groupByCategory(publications)

function formatCitation(pub: Publication) {
  return `${pub.authors}. ${pub.title}. ${pub.journal}.`
}

export function PublicationsSection() {
  const [expanded, setExpanded] = useState<string | null>(
    "Biological Aging & Longevity"
  )

  return (
    <section id="publications" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Selected Publications
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Peer-Reviewed Research
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Key publications from over 100 peer-reviewed works spanning four
            decades of advancing therapeutic apheresis medicine.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {HOMEPAGE_CATEGORIES.map((category) => {
            const pubs = categoryGroups[category]
            const isOpen = expanded === category
            return (
              <div
                key={category}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : category)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="font-serif text-lg font-semibold text-card-foreground">
                      {category}
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {pubs.length}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-border px-6 pb-6 pt-4">
                    <div className="space-y-6">
                      {pubs.map((pub, idx) => (
                        <div key={idx} className="flex gap-4">
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                            {idx + 1}
                          </span>
                          <div>
                            {pub.note && (
                              <span className="mb-1 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                                {pub.note}
                              </span>
                            )}
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {formatCitation(pub)}
                            </p>
                            {pub.doi && (
                              <a
                                href={`https://doi.org/${pub.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                              >
                                DOI: {pub.doi}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/full-bibliography"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            View Complete Bibliography (100+ Publications)
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
