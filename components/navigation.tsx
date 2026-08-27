"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Global Apheresis", href: "#practice" },
  { label: "Media", href: "#media" },
  { label: "For Physicians", href: "#affiliate" },
]

const publicationsDropdown = [
  { label: "Featured Research", href: "#publications" },
  { label: "2026 Theme Issue", href: "#theme-issue" },
  { label: "Complete Bibliography", href: "/full-bibliography" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pubsOpen, setPubsOpen] = useState(false)
  const [mobilePubsOpen, setMobilePubsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPubsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          {/* Publications dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setPubsOpen(true)}
            onMouseLeave={() => setPubsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setPubsOpen(!pubsOpen)}
              aria-expanded={pubsOpen}
              aria-haspopup="true"
            >
              Publications
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  pubsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                pubsOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
              role="menu"
            >
              <div className="w-52 rounded-lg border border-border bg-card shadow-lg">
                {publicationsDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-secondary hover:text-primary"
                    onClick={() => setPubsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* For Physicians */}
          <a
            href="#affiliate"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            For Physicians
          </a>

          <a
            href="https://www.globalapheresis.com/free-consultation"
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
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Publications dropdown */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobilePubsOpen(!mobilePubsOpen)}
                aria-expanded={mobilePubsOpen}
              >
                Publications
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobilePubsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobilePubsOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-3 border-l-2 border-border pl-4">
                  {publicationsDropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => {
                        setMobileOpen(false)
                        setMobilePubsOpen(false)
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* For Physicians */}
            <a
              href="#affiliate"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              For Physicians
            </a>

            <a
              href="https://www.globalapheresis.com/free-consultation"
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
