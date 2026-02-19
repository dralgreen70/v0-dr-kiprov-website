import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Evidence-Based Preventative Medicine
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
              40 Years of Published Research in Therapeutic Plasma Exchange
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 lg:text-xl text-pretty">
              The pioneer who proved therapeutic plasma exchange can reverse
              biological age and slow disease progression. Former President of
              the American Society for Apheresis and author of 100+
              peer-reviewed publications. His research has established the
              protocols and trained most physicians practicing therapeutic
              apheresis today.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="https://www.globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#affiliate"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <BookOpen className="h-4 w-4" />
                For Physicians: Become an Affiliate
              </a>
            </div>


          </div>

          {/* Headshot */}
          <div className="relative flex-shrink-0">
            <div className="relative h-[400px] w-[340px] overflow-hidden rounded-2xl border-4 border-primary-foreground/10 shadow-2xl lg:h-[480px] lg:w-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Kiprov%20Headshot%20from%20his%20site-i84KUVGfGymdPHVCCFIBxYJXf9mC7C.jpg"
                alt="Dr. Dobri Kiprov in clinical setting with medical equipment"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card px-5 py-3 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Dobri Kiprov, M.D., H.P. (ASCP)
              </p>
              <p className="text-sm font-medium text-primary">
                Founder, Global Apheresis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
