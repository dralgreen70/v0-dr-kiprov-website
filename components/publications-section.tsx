"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText } from "lucide-react"

type Publication = {
  citation: string
  note?: string
}

type Category = {
  name: string
  publications: Publication[]
}

const categories: Category[] = [
  {
    name: "Biological Aging",
    publications: [
      {
        citation:
          'Kiprov D, "Intermittent Heterochronic Plasma Exchange as a Modality for Delaying Cellular Senescence \u2013 A Hypothesis." J Clin Apheresis 28:387-389 (2013)',
        note: "First hypothesis paper on TPE and aging",
      },
      {
        citation:
          "Mehdipour M, Skinner C, Wong N, Lieb M, Liu C, Etienne J, Kato C, Kiprov D, Conboy MJ, Conboy IM. Rejuvenation of three germ layers tissues by exchanging old blood plasma with saline-albumin. Aging (Albany NY). 12, 8790\u20138819 (2020).",
        note: "Landmark parabiosis-to-human translation",
      },
      {
        citation:
          "Kim D, Kiprov DD, Luellen C, et al. Old plasma dilution reduces human biological age: a clinical study. GeroScience 44, 2701\u20132720 (2022). doi:10.1007/s11357-022-00645-w",
        note: "First proof TPE reduces biological age",
      },
      {
        citation:
          "Fuentealba M, Kiprov D, Schneider K, Mu WC, Kumaar PA, Kasler H, Burton JB, Watson M, Halaweh H, King CD, Y\u00FCksel ZS, Roska-Pamaong C, Schilling B, Verdin E, Furman D. Multi-Omics Analysis Reveals Biomarkers That Contribute to Biological Age Rejuvenation in Response to Single-Blinded Randomized Placebo-Controlled Therapeutic Plasma Exchange. Aging Cell. 2025 Aug;24(8):e70103. doi:10.1111/acel.70103.",
        note: "Buck Institute partnership \u2013 placebo-controlled RCT",
      },
    ],
  },
  {
    name: "Alzheimer's Disease",
    publications: [
      {
        citation:
          "Boada M, Lopez O, Nunez L, Olazaran J, Pfeffer M, Paricio M, Lorites J, Pinol G, Gamez J, Anaya F, Ortiz P, Kiprov D, Grifols C, Torres M, Costa M, Bozzo J, Szczepiorkowski Z, Hendrix S, Paez A. A Randomized Controlled Clinical Trial of Plasma Exchange with Albumin replacement for Alzheimer's Disease: Primary Results of the AMBAR Study. Alzheimer's and Dementia: June 4, 2020. DOI:10.1002/alz.12137",
        note: "52-71% slowing of disease progression",
      },
    ],
  },
  {
    name: "COVID-19",
    publications: [
      {
        citation:
          "Kiprov D, Conboy MJ, Conboy IM. Immunomodulation for the management of corona virus disease (COVID-19). Transfus. Apher. Sci. 59, 102856 (2020).",
      },
      {
        citation:
          "Kiprov DD, Herskowitz A, Kim D, Lieb M, Liu C, Watanabe E, Hoffman JC, Rohe R, Conboy MJ, Conboy IM. Case Report: Therapeutic and immunomodulatory effects of plasmapheresis in long-haul COVID. F1000Res. 2021 Nov 24;10:1189. doi:10.12688/f1000research.74534.2. PMID: 35464182.",
        note: "First publication on TPE for Long COVID",
      },
    ],
  },
  {
    name: "Autoimmune & Immunological Conditions",
    publications: [
      {
        citation:
          "Kiprov D, Morand P. The effect of plasmapheresis and immunosuppressive drug therapy on T-cell subsets as defined by monoclonal antibodies. J Clin Aphere 1-57, 1983.",
        note: "First recognition that plasmapheresis affects cellular immunity",
      },
      {
        citation:
          "Kiprov D, Anderson RE, Morand P, Simpson D, Chermann JC, Levy J, Moss A. Antilymphocyte antibodies and seropositivity for retroviruses in high risk groups for AIDS. N Engl J Med 312:1517, 1985.",
        note: "First recognition of anti-lymphocyte factors in HIV",
      },
      {
        citation:
          "Kiprov D, Miller R. Polymyositis associated with benign monoclonal gammopathy. Lancet II:1183-1186, 1984.",
        note: "First description of new immunologically-mediated muscle syndrome",
      },
      {
        citation:
          "Kiprov DD, Golden P, Rohe R, Smith S, Hofmann J, Hunnicutt J. Adverse Reactions Associated with Mobile Therapeutic Apheresis: Analysis of 17,940 Procedures. J Clin Apheresis 16:130-133, 2001.",
        note: "Most comprehensive safety study in therapeutic apheresis",
      },
    ],
  },
]

export function PublicationsSection() {
  const [expanded, setExpanded] = useState<string | null>("Biological Aging")

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
            A curated selection from over 100 peer-reviewed publications spanning
            four decades.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {categories.map((category) => {
            const isOpen = expanded === category.name
            return (
              <div
                key={category.name}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isOpen ? null : category.name)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="font-serif text-lg font-semibold text-card-foreground">
                      {category.name}
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {category.publications.length}
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
                      {category.publications.map((pub, idx) => (
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
                              {pub.citation}
                            </p>
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
