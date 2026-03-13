import { MapPin, Phone, Mail } from "lucide-react"

const navSections = [
  {
    title: "Navigate",
    links: [
      { label: "Research", href: "#research" },
      { label: "About", href: "#about" },
      { label: "Media", href: "#media" },
      { label: "Publications", href: "#publications" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Global Apheresis", href: "https://www.globalapheresis.com", external: true },
      { label: "Schedule Consultation", href: "https://www.globalapheresis.com/free-consultation", external: true },
      { label: "Affiliate Program", href: "#affiliate" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dobri-kiprov-2963ab31/", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@GlobalApheresis", external: true },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <p className="font-serif text-lg font-bold text-primary-foreground">
              Dr. Dobri Kiprov
            </p>
            <p className="mt-1 text-sm text-primary-foreground/60">
              M.D., H.P. (ASCP)
            </p>

            <div className="mt-6 space-y-3">
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
                  href="mailto:DK@globalapheresis.com"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  DK@globalapheresis.com
                </a>
              </div>
            </div>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                {section.title}
              </p>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Dr. Dobri Kiprov. All rights
            reserved. The information on this site is for educational purposes
            and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
