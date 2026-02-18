"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Global Apheresis", href: "#practice" },
  { label: "Media", href: "#media" },
  { label: "Publications", href: "#publications" },
  { label: "For Physicians", href: "#affiliate" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="font-serif text-lg font-semibold tracking-tight text-primary"
        >
          Dr. Dobri Kiprov
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.globalapheresis.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-light"
          >
            Schedule Consultation
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.globalapheresis.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-navy-light"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
