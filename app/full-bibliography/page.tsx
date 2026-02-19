"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import Link from "next/link"
import {
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
  ArrowUp,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import {
  publications,
  CATEGORIES,
  type Publication,
  type CategoryName,
} from "@/lib/publications-data"
import { BibliographyNav } from "@/components/bibliography-nav"

const DECADE_FILTERS = [
  { label: "All Years", value: "all" },
  { label: "2020s", value: "2020" },
  { label: "2010s", value: "2010" },
  { label: "2000s", value: "2000" },
  { label: "1990s", value: "1990" },
  { label: "1980s", value: "1980" },
  { label: "1970s", value: "1970" },
]

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
]

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 text-foreground rounded-sm px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

function PublicationCard({
  pub,
  index,
  query,
}: {
  pub: Publication
  index: number
  query: string
}) {
  return (
    <div className="flex gap-4 py-5 first:pt-0 last:pb-0 border-b border-border/50 last:border-0">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        {pub.note && (
          <span className="mb-1.5 inline-block rounded bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
            {pub.note}
          </span>
        )}
        <h4 className="text-sm font-semibold leading-snug text-card-foreground">
          {highlightMatch(pub.title, query)}
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">
          {highlightMatch(pub.authors, query)}
        </p>
        <p className="mt-0.5 text-xs italic text-muted-foreground/80">
          {highlightMatch(pub.journal, query)}
        </p>
        {pub.summary && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {pub.summary}
          </p>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            DOI: {pub.doi}
          </a>
        )}
      </div>
    </div>
  )
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Immunotherapy & IVIG Protocols":
    "Dr. Kiprov was among the first physicians in the United States to complete formal fellowship training in Clinical Immunology and Immunopathology at Massachusetts General Hospital, sponsored by the NIH. His pioneering work with intravenous immunoglobulin (IVIG) therapy spans multiple decades and disease states, including early trials of cell therapies including CAR-T cell therapies and cell vaccines. His research combining IVIG with therapeutic plasma exchange has demonstrated superior outcomes across multiple conditions. Most notably, the Buck Institute study (2025) showed that TPE combined with IVIG produced the greatest biological age reduction, validating decades of his clinical experience with combination immunotherapy approaches.",
  "Early Career & Foundational Work":
    "During the 1980s through 2010s, Dr. Kiprov published extensively on autoimmune disease, HIV-related conditions, immunology, and fundamental apheresis protocols. This work established core principles that remain foundational to therapeutic apheresis practice today.",
}

export default function FullBibliographyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [decadeFilter, setDecadeFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("newest")
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["Biological Aging & Longevity"])
  )
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 600)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleCategory = useCallback((name: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }, [])

  const filtered = useMemo(() => {
    let items = [...publications]

    // search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q) ||
          (p.summary && p.summary.toLowerCase().includes(q))
      )
    }

    // decade
    if (decadeFilter !== "all") {
      const start = parseInt(decadeFilter)
      items = items.filter((p) => p.year >= start && p.year < start + 10)
    }

    // category
    if (categoryFilter !== "all") {
      items = items.filter((p) => p.category === categoryFilter)
    }

    // sort
    items.sort((a, b) =>
      sortOrder === "newest" ? b.year - a.year : a.year - b.year
    )

    return items
  }, [searchQuery, categoryFilter, decadeFilter, sortOrder])

  const groupedByCategory = useMemo(() => {
    const groups: Record<string, Publication[]> = {}
    for (const cat of CATEGORIES) {
      const items = filtered.filter((p) => p.category === cat)
      if (items.length > 0) {
        groups[cat] = items
      }
    }
    return groups
  }, [filtered])

  const isSearchActive = searchQuery.trim() !== ""

  // When searching, expand all categories
  useEffect(() => {
    if (isSearchActive) {
      setExpandedCategories(new Set(Object.keys(groupedByCategory)))
    }
  }, [isSearchActive, groupedByCategory])

  const totalFiltered = filtered.length

  return (
    <>
      <BibliographyNav />
      <main className="pt-[73px]">
        {/* Hero */}
        <section className="bg-secondary py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="h-3 w-3" />
                </li>
                <li className="font-medium text-foreground">
                  Full Bibliography
                </li>
              </ol>
            </nav>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Complete Bibliography
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Over 100 peer-reviewed publications spanning four decades of
              advancing therapeutic apheresis medicine and preventative care.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground/80 max-w-2xl">
              {"Dr. Kiprov's"} research spans biological aging, {"Alzheimer's"}{" "}
              disease, autoimmune conditions, and the fundamental science of
              therapeutic plasma exchange. This comprehensive list represents a
              career dedicated to evidence-based medicine.
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="sticky top-[73px] z-40 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-6 py-4 lg:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by keyword, author, or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Filter by category"
                >
                  <option value="all">All Categories</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <select
                  value={decadeFilter}
                  onChange={(e) => setDecadeFilter(e.target.value)}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Filter by decade"
                >
                  {DECADE_FILTERS.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
                </select>

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Sort order"
                >
                  {SORT_OPTIONS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="mt-2 text-xs text-muted-foreground">
              Showing {totalFiltered} of {publications.length} publications
              {isSearchActive && (
                <>
                  {" "}
                  matching{" "}
                  <span className="font-semibold text-foreground">
                    {"\u201C"}{searchQuery}{"\u201D"}
                  </span>
                </>
              )}
            </p>
          </div>
        </section>

        {/* Publications */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {totalFiltered === 0 ? (
              <div className="py-16 text-center">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground/30" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  No publications found
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {Object.entries(groupedByCategory).map(([category, pubs]) => {
                  const isOpen = expandedCategories.has(category)
                  const description =
                    CATEGORY_DESCRIPTIONS[category as CategoryName]
                  return (
                    <div
                      key={category}
                      className="rounded-xl border border-border bg-card overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleCategory(category)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-secondary/50"
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
                          {description && (
                            <p className="mb-5 text-sm leading-relaxed text-muted-foreground italic">
                              {description}
                            </p>
                          )}
                          <div className="divide-y-0">
                            {pubs.map((pub, idx) => (
                              <PublicationCard
                                key={`${pub.title}-${pub.year}`}
                                pub={pub}
                                index={idx}
                                query={searchQuery}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}

            {/* Complete CV CTA */}
            <div className="mt-16 rounded-xl border border-border bg-secondary p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Complete Publication Record
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-lg mx-auto">
                Dr. Kiprov has authored or co-authored over 100 peer-reviewed
                publications, book chapters, abstracts, and review articles. For
                a complete CV including all publications, abstracts,
                presentations, and book chapters, please contact us.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="mailto:info@globalapheresis.com?subject=Request%20for%20Complete%20CV"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-light"
                >
                  <Mail className="h-4 w-4" />
                  Request Complete CV
                </a>
                <a
                  href="https://www.globalapheresis.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-serif text-lg font-bold text-primary-foreground">
                Dr. Dobri Kiprov
              </p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                M.D., H.P. (ASCP)
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm text-primary-foreground/70">
                    655 Redwood Highway, Suite 370
                    <br />
                    Mill Valley, CA 94941
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <a
                    href="tel:4159281352"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    (415) 928-1352
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <a
                    href="mailto:info@globalapheresis.com"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    info@globalapheresis.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#research"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Featured Research
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.globalapheresis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Global Apheresis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                Connect
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://www.globalapheresis.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    Schedule Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dobri-kiprov-2963ab31/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@GlobalApheresis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/10 pt-6">
            <p className="text-center text-xs text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Dr. Dobri Kiprov. All rights
              reserved. The information on this site is for educational purposes
              and does not constitute medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
