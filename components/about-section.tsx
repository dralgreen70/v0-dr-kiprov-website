import { AlertTriangle, CheckCircle, MapPin, FlaskConical, Globe } from "lucide-react"

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

              <h4 className="font-serif text-lg font-semibold text-card-foreground pt-2">
                The Risks of Inadequate Training
              </h4>
              <ul className="space-y-3">
                {[
                  "Practitioners performing procedures without formal apheresis certification",
                  "Lack of understanding of proper anticoagulation protocols",
                  "Inadequate patient screening and contraindication knowledge",
                  "Missing safety monitoring and adverse event management",
                  "Exaggerated claims not supported by published research",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="pt-2">
                Without decades of clinical experience and published research to
                guide treatment protocols, patients are essentially
                participating in uncontrolled experiments—paying premium prices
                for procedures that may not follow evidence-based guidelines.
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
                He completed fellowship training in Clinical Immunology and
                Immunopathology at Massachusetts General Hospital and Harvard
                Medical School (NIH-sponsored) and became the first physician in
                the United States to pass the Hemapheresis Practitioner Exam
                (ASCP). He serves on the Board of Directors of the International
                Society for Apheresis and holds the position of Chief of the
                Division of Immunotherapy, Emeritus at California Pacific
                Medical Center. He served two terms on the American Society for
                Apheresis (ASFA) Board of Directors and created the first ASFA
                educational video program. He is the recipient of three major
                ASFA honors: the Presidential Award for pioneering work and
                numerous contributions to the field, the Lecturers Award, and
                the Francis Morrison Memorial Award.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <h4 className="font-serif text-lg font-semibold text-card-foreground">
                Building the Infrastructure of Modern Apheresis
              </h4>
              <div className="mt-5 space-y-0">
                {[
                  {
                    year: "1985",
                    icon: MapPin,
                    title: "Founded Bay Area Mobile Apheresis",
                    description:
                      "First mobile therapeutic apheresis program in the United States",
                  },
                  {
                    year: "1992",
                    icon: FlaskConical,
                    title: "Founded Center for Apheresis and Immunology",
                    description:
                      "Advanced clinical protocols and physician training",
                  },
                  {
                    year: "2021",
                    icon: Globe,
                    title: "Founded Global Apheresis",
                    description:
                      "Evidence-based therapeutic apheresis network",
                  },
                ].map((item, index) => (
                  <div key={item.year} className="relative flex gap-4">
                    {/* Vertical connector line */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
                        <item.icon className="h-4 w-4 text-accent" />
                      </div>
                      {index < 2 && (
                        <div className="w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">
                        {item.year}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-card-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-base leading-relaxed text-muted-foreground">
              <p>
                Many of {"today's"} practitioners learned therapeutic apheresis in
                programs Dr. Kiprov created. He and his team, including{" "}
                <a href="https://allenpgreenmd.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">Dr. Allen Green</a>, represent true
                expertise in evidence-based therapeutic {"apheresis\u2014combining"} decades
                of clinical practice with rigorous published research.
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
                Aging, Long COVID, and the first placebo-controlled trial of TPE{" "}
                {"in Alzheimer's disease."} He has also been involved in
                pioneering immunotherapy trials, including early CAR-T cell
                therapy research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
