import { AlertTriangle, CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why This Matters
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Decades of Expertise vs. Unproven Claims
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* The Problem */}
          <div className="rounded-xl border border-border bg-card p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-card-foreground">
                The Problem
              </h3>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most practitioners offering plasma exchange for longevity lack
                formal training in therapeutic apheresis. The field is
                increasingly filled with unproven approaches and exaggerated
                claims.
              </p>
              <p>
                Without rigorous clinical protocols, patients face unnecessary
                risk and may not receive the evidence-based treatment that
                published research supports.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="rounded-xl border border-accent/20 bg-card p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-card-foreground">
                The Solution
              </h3>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dr. Kiprov has worked in the field of Therapeutic Apheresis for
                more than 40 years and has published extensively on the subject.
                He served two terms on the American Society for Apheresis (ASFA)
                Board of Directors and created the first ASFA educational video
                program.
              </p>
              <p>
                He is the recipient of the ASFA Presidential Award, the ASFA
                Lecturers Award, and the Francis Morrison Memorial Award. He
                trained most physicians currently practicing TPE. He and his
                team represent true expertise in evidence-based therapeutic
                apheresis.
              </p>
            </div>

            {/* Key achievements */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { stat: "40+", label: "Years of Research" },
                { stat: "100+", label: "Publications" },
                { stat: "17,940+", label: "Procedures Analyzed" },
                { stat: "2x", label: "ASFA Board Terms" },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-secondary p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-primary">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional expertise areas */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center font-serif text-xl font-bold text-foreground">
            Areas of Expertise
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Therapeutic Apheresis
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pioneer of the field with 40+ years of clinical practice,
                research, and the most comprehensive study of adverse reactions
                in therapeutic apheresis ever published.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Immunotherapy
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Among the first physicians to complete a formal fellowship in
                Clinical Immunology. Involved in early trials of cell therapies
                including CAR-T cell therapies and cell vaccines.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg font-semibold text-foreground">
                Innovation
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                First to publish on the effect of Therapeutic Plasma Exchange on
                Aging, Long COVID, and the first placebo-controlled trial of TPE
                {"in Alzheimer's disease."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
