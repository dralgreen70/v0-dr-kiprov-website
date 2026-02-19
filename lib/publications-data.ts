export type Publication = {
  title: string
  authors: string
  journal: string
  year: number
  doi?: string
  summary?: string
  note?: string
  category: string
}

export const CATEGORIES = [
  "Biological Aging & Longevity",
  "Alzheimer's Disease & Neurodegeneration",
  "COVID-19 & Post-Acute Sequelae",
  "Autoimmune & Immunological Conditions",
  "Immunotherapy & IVIG Protocols",
  "Therapeutic Apheresis Protocols & Safety",
  "Early Career & Foundational Work",
] as const

export type CategoryName = (typeof CATEGORIES)[number]

export const publications: Publication[] = [
  // ── BIOLOGICAL AGING & LONGEVITY ────────────────────────────────
  {
    title:
      "Multi-Omics Analysis Reveals Biomarkers That Contribute to Biological Age Rejuvenation in Response to Single-Blinded Randomized Placebo-Controlled Therapeutic Plasma Exchange",
    authors:
      "Fuentealba M, Kiprov D, Schneider K, Mu WC, Kumaar PA, Kasler H, Burton JB, Watson M, Halaweh H, King CD, Yuksel ZS, Roska-Pamaong C, Schilling B, Verdin E, Furman D",
    journal: "Aging Cell. 2025 Aug;24(8):e70103",
    year: 2025,
    doi: "10.1111/acel.70103",
    summary:
      "A single-blinded, randomized, placebo-controlled study with the Buck Institute analyzing multi-omic biomarkers that contribute to biological age rejuvenation in response to therapeutic plasma exchange.",
    note: "Buck Institute partnership - placebo-controlled RCT",
    category: "Biological Aging & Longevity",
  },
  {
    title: "Old Plasma Dilution Reduces Human Biological Age: A Clinical Study",
    authors: "Kim D, Kiprov DD, Luellen C, et al.",
    journal: "GeroScience 44, 2701-2720, 2022",
    year: 2022,
    doi: "10.1007/s11357-022-00645-w",
    summary:
      "The first clinical proof that therapeutic plasma exchange reduces human biological age by 1-3 years, measured using validated epigenetic clocks and biomarker panels.",
    note: "First proof TPE reduces biological age",
    category: "Biological Aging & Longevity",
  },
  {
    title:
      "Rejuvenation of Three Germ Layers Tissues by Exchanging Old Blood Plasma with Saline-Albumin",
    authors:
      "Mehdipour M, Skinner C, Wong N, Lieb M, Liu C, Etienne J, Kato C, Kiprov D, Conboy MJ, Conboy IM",
    journal: "Aging (Albany NY). 12, 8790-8819, 2020",
    year: 2020,
    doi: "10.18632/aging.103418",
    summary:
      "Landmark parabiosis-to-human translation study proving that diluting and replacing old plasma with albumin rejuvenates tissues across multiple organ systems.",
    note: "Landmark parabiosis-to-human translation",
    category: "Biological Aging & Longevity",
  },
  {
    title:
      "Intermittent Heterochronic Plasma Exchange as a Modality for Delaying Cellular Senescence - A Hypothesis",
    authors: "Kiprov D",
    journal: "J Clin Apheresis 28:387-389, 2013",
    year: 2013,
    doi: "10.1002/jca.21268",
    summary:
      "The first hypothesis paper proposing that therapeutic plasma exchange could be used as an intervention for delaying cellular senescence and aging - predicting the research that would follow.",
    note: "First hypothesis paper on TPE and aging",
    category: "Biological Aging & Longevity",
  },

  // ── ALZHEIMER'S DISEASE & NEURODEGENERATION ─────────────────────
  {
    title:
      "A Randomized Controlled Clinical Trial of Plasma Exchange with Albumin Replacement for Alzheimer's Disease: Primary Results of the AMBAR Study",
    authors:
      "Boada M, Lopez O, Nunez L, Olazaran J, Pfeffer M, Paricio M, Lorites J, Pinol G, Gamez J, Anaya F, Ortiz P, Kiprov D, Grifols C, Torres M, Costa M, Bozzo J, Szczepiorkowski Z, Hendrix S, Paez A",
    journal: "Alzheimer's and Dementia, June 4, 2020",
    year: 2020,
    doi: "10.1002/alz.12137",
    summary:
      "Randomized controlled clinical trial demonstrating 52-71% slowing of Alzheimer's disease progression with plasma exchange and albumin replacement - superior effect size to FDA-approved monoclonal antibodies with better safety profile.",
    note: "52-71% slowing of disease progression",
    category: "Alzheimer's Disease & Neurodegeneration",
  },

  // ── COVID-19 & POST-ACUTE SEQUELAE ──────────────────────────────
  {
    title:
      "Immunomodulation for the Management of Corona Virus Disease (COVID-19)",
    authors: "Kiprov D, Conboy MJ, Conboy IM",
    journal: "Transfus. Apher. Sci. 59, 102856, 2020",
    year: 2020,
    doi: "10.1016/j.transci.2020.102856",
    summary:
      "Early paper proposing immunomodulation approaches including therapeutic plasma exchange for managing COVID-19 inflammatory cascade.",
    category: "COVID-19 & Post-Acute Sequelae",
  },
  {
    title:
      "Case Report: Therapeutic and Immunomodulatory Effects of Plasmapheresis in Long-Haul COVID",
    authors:
      "Kiprov DD, Herskowitz A, Kim D, Lieb M, Liu C, Watanabe E, Hoffman JC, Rohe R, Conboy MJ, Conboy IM",
    journal: "F1000Res. 2021 Nov 24;10:1189",
    year: 2021,
    doi: "10.12688/f1000research.74534.2",
    summary:
      "First published case studies demonstrating efficacy of therapeutic plasma exchange for treating persistent long COVID symptoms.",
    note: "First publication on TPE for Long COVID",
    category: "COVID-19 & Post-Acute Sequelae",
  },

  // ── AUTOIMMUNE & IMMUNOLOGICAL CONDITIONS ───────────────────────
  {
    title:
      "Focal and Segmental Glomerulosclerosis and Proteinuria Associated with Unilateral Renal Agenesis",
    authors: "Kiprov D, Colvin R, McCluskey R",
    journal: "Lab Invest 46:275, 1982",
    year: 1982,
    summary:
      "Description of previously unrecognized syndrome of focal segmental glomerulosclerosis prevalence in people born with a single kidney, advancing understanding of FSG pathogenesis.",
    note: "First description of FSG in unilateral renal agenesis",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "The Effect of Plasmapheresis and Immunosuppressive Drug Therapy on T-Cell Subsets as Defined by Monoclonal Antibodies",
    authors: "Kiprov D, Morand P",
    journal: "J Clin Aphere 1-57, 1983",
    year: 1983,
    summary:
      "The first recognition that plasmapheresis affects not only the humoral but also the cellular immune system.",
    note: "First recognition of cellular immune effects of plasmapheresis",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Polymyositis Associated with Benign Monoclonal Gammopathy",
    authors: "Kiprov D, Miller R",
    journal: "Lancet II: 1183-1186, 1984",
    year: 1984,
    summary:
      "First publication describing a new immunologically-mediated syndrome affecting striated muscles, establishing novel diagnostic criteria.",
    note: "First description of new immunologically-mediated muscle syndrome",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Antilymphocyte Antibodies and Seropositivity for Retroviruses in High Risk Groups for AIDS",
    authors:
      "Kiprov D, Anderson RE, Morand P, Simpson D, Chermann JC, Levy J, Moss A",
    journal: "N Engl J Med 312:1517, 1985",
    year: 1985,
    summary:
      "First recognition of distinctive anti-lymphocyte factors in sera from patients with HIV infection, contributing to understanding of AIDS pathogenesis.",
    note: "NEJM - first recognition of anti-lymphocyte factors in HIV",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Extracorporeal Perfusion of Plasma over Immobilized Protein A in a Patient with Kaposi's Sarcoma and Acquired Immunodeficiency",
    authors: "Kiprov D, Lippert R, Jones RF, et al.",
    journal: "J Biol Response Modifiers 3:330-346, 1985",
    year: 1985,
    summary:
      "Performed the first treatment in humans with the Prosorba immunoadsorption column, which was subsequently approved by the FDA.",
    note: "First human Prosorba immunoadsorption treatment",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Inflammatory Neuropathy in Homosexual Men with Lymphadenopathy",
    authors: "Lipkin I, Parry G, Kiprov D, et al.",
    journal: "Neurology 35:1479-1483, 1985",
    year: 1985,
    summary:
      "The first description of an auto-immune neurologic syndrome in patients with predisposition for AIDS.",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Antibody-Mediated Peripheral Neuropathies Associated with ARC and AIDS: Successful Treatment with Plasmapheresis",
    authors: "Kiprov D, Pfaeffl W, Parry G, Lang W, Miller R",
    journal: "J Clin Aphere 4:3-7, 1988",
    year: 1988,
    summary:
      "Description of a novel auto-immune neurologic syndrome in HIV-positive patients and successful treatment with plasmapheresis combined with IVIG.",
    note: "Novel treatment: plasmapheresis + IVIG combination",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Isolated Thrombocytopenia in Homosexual Men - Longitudinal Follow-up",
    authors: "Abrams D, Kiprov D, Volberding P",
    journal:
      "AIDS-Associated Syndromes: Advances in Experimental Medicine and Biology 187:117-122, 1985",
    year: 1985,
    summary:
      "First description of an auto-immune hematologic syndrome in AIDS and its treatment.",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title:
      "Treatment of Patients with HIV Thrombocytopenia and Hemolytic Uremic Syndrome with Protein A (Prosorba Column) Immunoadsorption",
    authors:
      "Mitterman A, Bertram D, Snyder H, Messerschmidt G, Diavarella D, Ainsworth S, Kiprov D, Arlin Z",
    journal: "Seminars in Hematology, 1989, 26:15-18",
    year: 1989,
    summary:
      "Treatment of auto-immune hematologic syndrome in AIDS with Protein A immunoadsorption.",
    category: "Autoimmune & Immunological Conditions",
  },
  {
    title: "Alloimmunization to Prevent AIDS?",
    authors: "Kiprov D, Hanson C, Sheppard H",
    journal: "Science, vol. 263, p. 737, February 1994",
    year: 1994,
    summary:
      "Experiments suggesting that alloimmunization may prevent AIDS.",
    note: "Published in Science",
    category: "Autoimmune & Immunological Conditions",
  },

  // ── IMMUNOTHERAPY & IVIG PROTOCOLS ──────────────────────────────
  {
    title:
      "Response to Plasmapheresis Following Failure of Intravenous Gammaglobulin in Patients with Myasthenia Gravis and Guillain-Barre Syndrome",
    authors: "Stricker R, Kwiatkowska B, Habis J, MacLeod D, Kiprov D",
    journal: "Journal of Clinical Apheresis, Vol 8, No 1, 1993",
    year: 1993,
    summary:
      "Demonstrated that patients who failed to respond to IVIG therapy could be successfully rescued with plasmapheresis, establishing combination therapy protocols still used today.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "Treatment of HIV Neuropathy with Plasmapheresis and Intravenous Gammaglobulin",
    authors: "Kiprov D",
    journal:
      "Therapeutic Plasmapheresis (XII), pp. 277-282, T. Agishi et al (Eds), VSP 1993",
    year: 1993,
    summary:
      "Early pioneering work combining plasmapheresis with IVIG for treating antibody-mediated peripheral neuropathy in HIV-positive patients.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "New Trends in Immunotherapy - Intravenous Gammaglobulin (IVIG)",
    authors: "Kiprov D",
    journal: "J. Clinical Apheresis, 1993",
    year: 1993,
    summary:
      "Review article examining emerging applications of IVIG therapy and its role in immunomodulation across multiple disease states.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "Intravenous Gammaglobulin (IVIG) Treatment of Recurrent Spontaneous Abortion Associated with Combined Alloimmune and Autoimmune Abnormalities",
    authors:
      "Kiprov D, Stricker R, Nachtigall R, Main E, Smith S, Dumlao C, Jacobson A, Garovoy M, Levinson C",
    journal: "J Immunol Immunopharmocology, 12:108, 1992",
    year: 1992,
    summary:
      "Groundbreaking application of IVIG in reproductive immunology, demonstrating efficacy for immune-mediated recurrent pregnancy loss.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "Intravenous Immunoglobulin for In-Vitro Fertilization Failure in Patients with Autoimmune Abnormalities",
    authors: "Kiprov D, Weckstein L, Jacobson A, Galen D, Weaver R",
    journal: "Am J Reprod Immune, 1996",
    year: 1996,
    summary:
      "Extended IVIG applications to IVF failure in patients with autoimmune markers, expanding understanding of immune factors in reproductive medicine.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "The Use of Intravenous Immunoglobulin in Recurrent Pregnancy Loss Associated with Combined Alloimmune and Autoimmune Abnormalities",
    authors:
      "Kiprov DD, Nachtigall RD, Weaver RC, Jacobson A, Main EK, Garovoy MR",
    journal:
      "Am J Reprod Immunol. 1996 Oct;36(4):228-34",
    year: 1996,
    doi: "10.1111/j.1600-0897.1996.tb00168.x",
    summary:
      "Clinical study demonstrating the efficacy of IVIG for treating recurrent pregnancy loss in patients with combined alloimmune and autoimmune abnormalities.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title:
      "Autoimmune Retinopathy: Treatment with Plasma Exchange and/or Intravenous Immunoglobulin",
    authors: "Hofmann J, Kiprov D",
    journal: "Journal of Clinical Apheresis, 21:20-21, 2006",
    year: 2006,
    summary:
      "Demonstrated efficacy of combined immunotherapy approaches for treating autoimmune retinopathy, a rare and challenging condition.",
    category: "Immunotherapy & IVIG Protocols",
  },
  {
    title: "Myasthenic Crisis",
    authors: "Stricker R, Kwiatkowska B, Kiprov D",
    journal: "Arch Neurol, Vol 50:1:8, 1993",
    year: 1993,
    summary:
      "Clinical protocols for managing myasthenic crisis using combination IVIG and plasmapheresis approaches.",
    category: "Immunotherapy & IVIG Protocols",
  },

  // ── THERAPEUTIC APHERESIS PROTOCOLS & SAFETY ────────────────────
  {
    title:
      "Adverse Reactions Associated with Mobile Therapeutic Apheresis: Analysis of 17,940 Procedures",
    authors:
      "Kiprov DD, Golden P, Rohe R, Smith S, Hofmann J, Hunnicutt J",
    journal: "J Clin Apheresis 16:130-133, 2001",
    year: 2001,
    doi: "10.1002/jca.1023",
    summary:
      "The most comprehensive study of adverse reactions in therapeutic apheresis, establishing safety benchmarks for the field based on nearly 18,000 procedures.",
    note: "Most comprehensive safety study in therapeutic apheresis",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title: "Therapeutic Apheresis",
    authors: "Kiprov D, Sanchez A, Pusey C",
    journal: "Handbook of Dialysis, Fifth Edition, 18:333, 2015",
    year: 2015,
    summary:
      "Authoritative textbook chapter on therapeutic apheresis techniques, indications, and protocols used in medical education.",
    note: "Handbook of Dialysis textbook chapter",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title: "Apheresis Instrumentation",
    authors: "Kiprov D, Burgstaler E, Sanchez A",
    journal:
      "ASFA Principles of Apheresis Technology, Fifth Edition 2:23-41, 2014",
    year: 2014,
    summary:
      "Comprehensive chapter on apheresis instrumentation for the ASFA official textbook.",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title:
      "Exclusive Therapeutic Apheresis Delivery System",
    authors: "Kiprov D, Rohe R, Hofmann J",
    journal: "Transfusion and Apheresis Science, 2003:28:173-179",
    year: 2003,
    summary:
      "Innovative therapeutic apheresis delivery model for outpatient and mobile settings.",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title:
      "Plasmapheresis in Immunologically Mediated Polyneuropathies",
    authors: "Kiprov D, Hofmann J",
    journal: "Therapeutic Apheresis and Dialysis 2003;7(2):189-196",
    year: 2003,
    summary:
      "Protocol for plasmapheresis in treating immunologically mediated polyneuropathies.",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title:
      "Therapeutic Apheresis and Managed Care - Clinical Outcome versus Adverse Effects and Cost in 10,290 Procedures",
    authors: "Kiprov D, Rohe R, Smith S, Weaver R",
    journal: "J Clin Apheresis, 1996; 36:228-234",
    year: 1996,
    summary:
      "Cost-effectiveness analysis of therapeutic apheresis in managed care settings across over 10,000 procedures.",
    category: "Therapeutic Apheresis Protocols & Safety",
  },
  {
    title:
      "Delivery of Therapeutic Apheresis Services in the United States",
    authors: "Kiprov D",
    journal: "Journal of Clinical Apheresis 20:123-125, 2005",
    year: 2005,
    summary:
      "Overview of the therapeutic apheresis delivery infrastructure in the United States.",
    category: "Therapeutic Apheresis Protocols & Safety",
  },

  // ── EARLY CAREER & FOUNDATIONAL WORK ────────────────────────────
  {
    title: "Inverted Meckel's Diverticulum",
    authors: "Kiprov D, Griffel B",
    journal: "Arch Surg. 110:1154, 1975",
    year: 1975,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Immunologically Mediated Glomerular and Tubular Diseases",
    authors: "Kiprov D",
    journal:
      "Harvard Course of Immunology for Non-Immunologists. Harvard University Press, Boston, 1980",
    year: 1980,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Lymphocyte Subpopulations and Mitogenic Response Studies in Homosexuals with Acquired Immunodeficiency Syndrome",
    authors: "Kiprov D, Morand P",
    journal: "Immunobiology 163:377, 1982",
    year: 1982,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Immune Complex Disease in a Patient with Myasthenia Gravis",
    authors: "Kradin R, Kiprov D",
    journal: "Arch Pathol 105:582, 1981",
    year: 1981,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Effect of Plasmapheresis on Cellular Immunity in Patients with Immunogenic Disorders",
    authors: "Kiprov D, Dau P, Morand P",
    journal: "Immunobiology 163:377, 1982",
    year: 1982,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Influences of Plasmapheresis on Cellular Immunity",
    authors: "Kiprov D",
    journal:
      "In: Plasma Separation and Plasma Fractionation. Eds. Lysaght MJ, Gurland HJ, Karger S, Basel AG, 1983",
    year: 1983,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Antilymphocyte Factors in the Acquired Immune Deficiency Syndrome",
    authors: "Kiprov D, Busch D, Simpson D, et al.",
    journal:
      "In: The Acquired Immune Deficiency Syndrome. Eds. Gottlieb MS, Groopman JE, Liss AR, New York, pp. 299-301, 1984",
    year: 1984,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Use of Plasmapheresis in the Treatment of Polymyositis-like Syndrome and Peripheral Neuropathies Associated with Monoclonal Serum Paraproteins",
    authors: "Kiprov D, Miller R",
    journal: "Artificial Organs 8(1):123, 1984",
    year: 1984,
    category: "Early Career & Foundational Work",
  },
  {
    title: "An Overview of Therapeutic Apheresis",
    authors: "Kiprov D",
    journal: "Dial Transplantation 14:195-200, 1985",
    year: 1985,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "T-cell CLL with Unusual Immunologic Phenotype and Function",
    authors: "Simpkins H, Kiprov D, Davis BJ, et al.",
    journal: "Blood 65:127-133, 1985",
    year: 1985,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Use of Plasmapheresis, Lymphocytapheresis and Staph Protein A Immunoadsorption as an Immunomodulatory Therapy in Patients with AIDS and AIDS-Related Conditions",
    authors: "Kiprov D, Lippert R, Miller R, et al.",
    journal: "J Clin Apere 3:133-139, 1986",
    year: 1986,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "AIDS-Related Inflammatory Polyradiculoneuropathy: Successful Treatment with Plasma Exchange",
    authors: "Miller R, Parry G, Lang W, Lippert R, Kiprov D",
    journal: "Neurol 36:206, 1986",
    year: 1986,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "AIDS and Apheresis Procedures - Therapeutic and Safety Considerations",
    authors: "Kiprov D, Simpson D, Pfaeffl W, Romanick-Schmiedl S, Abrams D, Miller R",
    journal: "Blood Purification. 5:51-56, 1987",
    year: 1987,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Risk of AIDS Transmission Through Therapeutic Apheresis",
    authors: "Kiprov D, Simpson D, Romanick-Schmiedl S, Lippert R, Spira T, Busch D",
    journal: "J Clin Apher 3:143-6, 1987",
    year: 1987,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Impact of AIDS Epidemic on Therapeutic Hemapheresis",
    authors: "Kiprov D, Romanick-Schmiedl S",
    journal: "Plasma Ther Transfus Technol 8:23-29, 1987",
    year: 1987,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "HIV Related Peripheral Neuropathies",
    authors: "Miller R, Kiprov D, Parry G, Bredesen DE",
    journal:
      "In: The Nervous System, in AIDS Chapter 4. Eds. Rosenbaum et al. Raven Press, New York, 1988",
    year: 1988,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "The Spectrum of Peripheral Neuropathy Associated with ARC and AIDS",
    authors: "Miller R, Parry G, Pfaeffl W, Lang W, Lippert R, Kiprov D",
    journal: "Muscle and Nerve 11:857-863, 1988",
    year: 1988,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Therapeutic Apheresis as a Treatment Modality in AIDS and AIDS-Related Conditions",
    authors: "Kiprov D, Conant M, Lippert R, Pfaeffl W, Miller R, Abrams D",
    journal: "AIDS, Principles, Practices and Politics, 9:113-117, 1988",
    year: 1988,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Hemapheresis and the Acquired Immunodeficiency Syndrome",
    authors: "Kiprov D, Simpson D, Busch M",
    journal: "In: Donor Hemapheresis, ed. Pineda A, Wichtig Editore, Milan, 1989, p. 135-140",
    year: 1989,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Therapeutic Apheresis in HIV-Related Syndromes",
    authors: "Kiprov D, Kwiatkowska B, Miller R",
    journal:
      "In: Therapeutic Hemapheresis in the 1990's, ed. Nydeger U, Curr Stud Nematol Blood Transus, Basel, Karger, 1990",
    year: 1990,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Protein A Immunoadsorption: Immunomodulatory Effects",
    authors: "Kiprov D",
    journal: "Apheresis, ed. Rock G, Alan R, Liss Inc, 1990, p. 449-452",
    year: 1990,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Extraneurologic Manifestations of Chronic Inflammatory Demyelinating Peripheral Neuropathy - Response to Therapeutic Plasmapheresis",
    authors: "Romanick-Schmiedl S, Miller R, Kiprov D",
    journal: "Am J Med. 89:531-534, 1990",
    year: 1990,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Combined Use of Plasmapheresis and Intravenous Gammaglobulin in the Treatment of HIV-Positive and HIV-Negative Autoimmune Syndromes",
    authors: "Stricker R, Kiprov D",
    journal:
      "Immunotherapy with Intravenous Immunoglobulins. Ed. Imbach P. Academic Press, London, 1991",
    year: 1991,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Repeat Thymectomy in Chronic Refractory Myasthenia Gravis",
    authors: "Miller R, Kiprov D, Roan R",
    journal: "Neurology, June 1991;41-923-924",
    year: 1991,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Use of Protein A Immunoadsorption as a Treatment for Thrombocytopenia in HIV-Infected Homosexual Men: A Retrospective Evaluation of 37 Cases",
    authors: "Snyder J, Bertman H, Henry D, Kiprov D",
    journal: "AIDS 1991, 5:1257-1260",
    year: 1991,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Impact of the HIV Epidemic on Therapeutic Apheresis: Nursing Considerations",
    authors: "Penton R, MacLeod D, Stricker R, Kiprov D",
    journal: "Journal of Clinical Apheresis 6:124-126, 1991",
    year: 1991,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Intravenous Gammaglobulin (IVIG) Treatment of Recurrent Spontaneous Abortion (RSA) Associated with Combined Alloimmune and Autoimmune Abnormalities",
    authors:
      "Kiprov D, Stricker R, Nachtigall R, Main E, Smith S, Dumlao C, Jacobson A, Garovoy M, Levinson C",
    journal: "J Immunol Immunopharmacology 1992; 12:108",
    year: 1992,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Severe Postpartum Eclampsia: Response to Plasma Exchange",
    authors:
      "Stricker R, Main E, Kronfield J, Kallas G, Gerson L, Autry A, Kiprov D",
    journal: "Journal of Clinical Apheresis, 7:1-3, 1992",
    year: 1992,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Mononeuritis Multiplex Associated with Cryoglobulinemia in HIV Infection",
    authors: "Stricker R, Sanders KA, Owen MF, Kiprov D, Miller RG",
    journal: "Neurology, 1992; 42:2103-2105",
    year: 1992,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Thrombotic Thrombocytopenic Purpura Complicating Systemic Lupus Erythematosus",
    authors: "Stricker R, Davis A, Gyershow J, Yamamoto K, Kiprov D",
    journal: "J Rheumatol 1992;19:1469-73",
    year: 1992,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Quality Assurance and Improvement in Therapeutic Plasmapheresis - ACD Reactions in Patients with Myasthenia Gravis",
    authors: "Smith S, Smith J, Leiva J, Rohe-Penton R, Stricker R, Kiprov D",
    journal: "Journal of Clinical Apheresis 1993, V 8 No. 1",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Response to Plasmapheresis Following Failure of Intravenous Gammaglobulin in Patients with Myasthenia Gravis and Guillain-Barre Syndrome",
    authors: "Stricker R, Kwiatkowska B, Habis J, MacLeod D, Kiprov D",
    journal: "Journal of Clinical Apheresis 1993, V.8 No 1",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "New Trends in Immunotherapy - Intravenous Gammaglobulin (IVIG)",
    authors: "Kiprov D",
    journal: "J Clinical Apheresis, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "An Overview of Current Management",
    authors: "Strauss R, Ciavarella D, Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis, 8:189-194, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Management of Autoimmune Disorders",
    authors: "Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis, 8:195-210, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Management of Hematological Disorders and Cancer",
    authors: "McLeod D, Strauss R, Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis 8:211-230, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Management of Metabolic and Miscellaneous Disorders",
    authors: "Kasprisin D, Strauss R, Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis 8:231-241, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Management of Neurologic Disorders",
    authors: "Ciavarella D, Wuest D, Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis 8:242-257, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Management of Renal Disorders",
    authors: "Gilcher R, Strauss R, Kiprov D, et al.",
    journal: "Journal of Clinical Apheresis 8:258-269, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Treatment of HIV Neuropathy with Plasmapheresis and Intravenous Gammaglobulin",
    authors: "Kiprov D, Stricker R",
    journal: "Therapeutic Plasmapheresis (XII), pp. 277-282. T. Agishi et al (Eds) VSP 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title: "Myasthenic Crisis",
    authors: "Stricker R, Kwiatkowska B, Kiprov D",
    journal: "Arch Neurol, Vol 50: 1:8, 1993",
    year: 1993,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Demyelinating Polyneuropathy after Gastric Bypass Surgery: Response to Plasma Exchange",
    authors: "Hofmann J, Reynolds S, Kiprov D",
    journal: "Journal of Clinical Apheresis 18:75-97, 2003",
    year: 2003,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Postpartum TTP-HUS: Better Response to Early Plasma Exchange",
    authors: "Hofmann J, Costello G, Kiprov D",
    journal: "Journal of Clinical Apheresis 18:9-10, 2005",
    year: 2005,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Autoimmune Retinopathy: Treatment with Plasma Exchange and/or Intravenous Immunoglobulin",
    authors: "Hofmann J, Smith S, Kiprov D",
    journal: "Journal of Clinical Apheresis 21:20-21, 2006",
    year: 2006,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Acute Humoral Renal Transplant Rejection: Successful Rescue Therapy with Plasmapheresis with or without Intravenous Immunoglobulin",
    authors: "Hofmann J, Kiprov D",
    journal: "Journal of Clinical Apheresis 21:34-35, 2006",
    year: 2006,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Hepatitis C Associated Cryoglobulinemia: Successful Response to Plasma Exchange",
    authors: "Hofmann J, Kiprov D",
    journal: "Journal of Clinical Apheresis 22:65, 2007",
    year: 2007,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Gemcitabine Associated TTP-HUS: Response to Plasmapheresis",
    authors: "Hofmann J, Kiprov D",
    journal: "Journal of Clinical Apheresis 22:84-85, 2007",
    year: 2007,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Antibody Mediated Cardiac Transplant Rejection: Successful Graft Rescue with Immunotherapy",
    authors: "Hofmann J, Weisshaar D, Pham M, Kiprov D",
    journal: "J Clin Apheresis 2008; 23(1): 9-10",
    year: 2008,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Successful Allograft Salvage with Immunotherapy in Acute Humoral Renal Transplant Rejection",
    authors: "Hofmann J, Warvariv V, Kiprov D",
    journal: "J Clin Apheresis 2008; 23(1): 15-16",
    year: 2008,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Leukocytapheresis Treatment for Patients with Acute Leukemia and Blast Crisis Enables a High Percentage of Patients to Undergo Induction Chemotherapy",
    authors: "Hofmann JC, Smith SJ, Kiprov DD",
    journal: "J Clin Apheresis 2010; 25(1): 4-5",
    year: 2010,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Uncovering Complement-Mediated Thrombotic Microangiopathy in the Setting of Sepsis, Colitis, and Progressive Renal Failure",
    authors: "Hofmann JC, Kiprov DD",
    journal: "Ther Apher Dial 2015; 19(2): 101-102",
    year: 2015,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Utility of a Novel Genetic Assay to Confirm the Diagnosis of Complement-Mediated Thrombotic Microangiopathy",
    authors: "Hofmann JC, Kiprov DD, Lewis BH",
    journal: "Transfusion 2016; 56; suppl. S4: 275A",
    year: 2016,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Therapeutic Plasma Exchange in Patients with Hypertriglyceridemic Pancreatitis: When Is It Indicated?",
    authors: "Hofmann JC, Kiprov DD",
    journal: "J Clin Apher 2016; 31(1): 103-104",
    year: 2016,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Cytoreductive Therapy for Cellular Hyperviscosity: Utility of Cytapheresis Treatment for CML and Essential Thrombocythemia",
    authors: "Hofmann JC, Kiprov DD",
    journal: "Transfusion 2017; 57; suppl. S3: 49A-50A",
    year: 2017,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Therapeutic Plasma Exchange in Patients with Acute Transverse Myelitis: Is It Efficacious?",
    authors: "Hofmann JC, Kiprov DD",
    journal: "J Clin Apher 2017; 32(2): 112",
    year: 2017,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Antibody-Mediated Diffuse Alveolar Hemorrhage in Pulmonary-Renal Vasculitides: Enhanced Resolution with Emergent Adjunctive Plasma Exchange",
    authors: "Hofmann JC, Kiprov DD",
    journal: "Transfusion 2018; 58(suppl. S2): 96A",
    year: 2018,
    category: "Early Career & Foundational Work",
  },
  {
    title:
      "Utility of Therapeutic Plasma Exchange in the Treatment of Catastrophic Antiphospholipid Syndrome: A 15-Year Retrospective Review",
    authors: "Hofmann JD, Kiprov DD",
    journal: "Apher Transfus Sci 2019; 33(2)",
    year: 2019,
    category: "Early Career & Foundational Work",
  },
]
