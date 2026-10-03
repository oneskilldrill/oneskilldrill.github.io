/* Drill data: PPE selection.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "ppe-selection",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Workplace safety",
  title: "PPE selection",
  intro: "Eight PPE calls on a shop floor: where selection starts, grinding, chemical splash, sharp edges, prescription glasses, heavy loads, a dropped hard hat, and new-hire training. Pick the best answer, get instant feedback with the OSHA source, and see your score. Takes about 5 minutes.",
  meta: ["8 decisions", "About 5 min", "Based on 29 CFR 1910 Subpart I"],
  questions: [
    {
      label: "Scenario 1 · Where to start",
      scenario: "Your shop is adding a new parts-cleaning station. The manager asks you to \"just order some PPE for it.\"",
      visual: {
        type: "checklist",
        title: "New cleaning station",
        subtitle: "Before ordering",
        items: [
          { label: "Hazards identified", status: "todo", value: "Not yet", hl: true },
          { label: "Engineering controls considered", status: "todo", value: "Not yet" },
          { label: "PPE order", status: "warn", value: "Requested" }
        ]
      },
      ask: "What comes first?",
      options: [
        { text: "A hazard assessment of the task, then select PPE for the hazards found (after other controls)", correct: true },
        { text: "Order the standard kit: glasses, gloves, earplugs", note: "PPE is selected for the hazards that are actually present." },
        { text: "Let each worker buy whatever they like", note: "The employer selects PPE based on a hazard assessment." },
        { text: "Wait until someone gets hurt, then decide", note: "The assessment happens before the work starts." }
      ],
      why: "29 CFR 1910.132(d)(1): the employer assesses the workplace for hazards that need PPE, then selects PPE that protects against them; (d)(2) requires a written certification of that assessment. OSHA 3151: PPE is used when engineering, work practice and administrative controls aren't feasible or don't give enough protection.",
      practice: "**Hazard assessment first**, other controls next, then PPE matched to the hazards.",
      sources: [1, 5]
    },
    {
      label: "Scenario 2 · Grinding",
      scenario: "You're deburring steel brackets on a bench grinder. Sparks and **metal chips fly** toward you and to the side.",
      visual: {
        type: "checklist",
        title: "Bench grinder",
        subtitle: "Hazards",
        items: [
          { label: "Flying chips (front)", status: "bad", value: "Yes" },
          { label: "Flying chips (side)", status: "bad", value: "Yes", hl: true },
          { label: "Liquid splash", status: "ok", value: "No" }
        ]
      },
      ask: "What eye and face protection fits?",
      options: [
        { text: "Impact-rated safety glasses with side protection (or goggles); add a face shield over them for extra protection", correct: true },
        { text: "A face shield by itself", note: "Face shields alone don't give adequate impact protection." },
        { text: "Your everyday prescription glasses", note: "Ordinary glasses aren't safety eyewear." },
        { text: "Nothing, if the grinder has a guard", note: "The guard helps, but chips still fly." }
      ],
      why: "29 CFR 1910.133(a)(1)-(2): use eye or face protection for flying particles, with side protection where there's a hazard from flying objects. OSHA 3151: face shields don't provide adequate protection against impact; use them with safety glasses or goggles.",
      practice: "Flying chips → **impact-rated eyewear with side protection**; a face shield goes over it, not instead of it.",
      sources: [2, 5]
    },
    {
      label: "Scenario 3 · Chemical splash",
      scenario: "You're **pouring a corrosive cleaner** from a 5-gallon jug into the parts washer.",
      visual: {
        type: "checklist",
        title: "Transfer task",
        subtitle: "Corrosive liquid",
        items: [
          { label: "Splash to eyes and face", status: "bad", value: "Likely", hl: true },
          { label: "Skin contact on hands", status: "bad", value: "Likely" },
          { label: "Product label / SDS", status: "ok", value: "On hand" }
        ]
      },
      ask: "What's the best eye, face and hand setup?",
      options: [
        { text: "Splash goggles plus a face shield, and chemical-resistant gloves rated for that chemical", correct: true },
        { text: "Safety glasses and cotton work gloves", note: "Glasses leave gaps for splash, and cotton soaks up chemicals." },
        { text: "A face shield and leather gloves", note: "Leather isn't chemical-resistant, and a shield alone leaves gaps." },
        { text: "Any disposable glove; they're all the same", note: "Glove materials resist different chemicals. Check the SDS and glove data." }
      ],
      why: "29 CFR 1910.133(a)(1): eye and face protection for liquid chemicals, acids and caustics. 1910.138(b): select hand protection for the task, the conditions and the hazards. OSHA 3151: a face shield combined with goggles adds splash and impact protection; choose chemical-resistant gloves (e.g. butyl, nitrile, neoprene) by checking the manufacturer's data against the chemical.",
      practice: "Corrosive splash → **goggles + face shield, and gloves rated for that chemical.**",
      sources: [2, 3, 5]
    },
    {
      label: "Scenario 4 · Sharp edges",
      scenario: "You're unloading **sheet metal blanks with sharp, rough edges**. The bin has thin cotton gloves.",
      visual: {
        type: "checklist",
        title: "Material handling",
        subtitle: "Sheet metal",
        items: [
          { label: "Cuts / lacerations", status: "bad", value: "High", hl: true },
          { label: "Chemical contact", status: "ok", value: "None" },
          { label: "Cotton gloves", status: "warn", value: "In bin" }
        ]
      },
      ask: "Which gloves fit the hazard?",
      options: [
        { text: "Cut-resistant gloves: leather, metal mesh or a cut-rated material", correct: true },
        { text: "The thin cotton gloves", note: "Fabric gloves aren't enough for rough, sharp or heavy materials." },
        { text: "Thin disposable nitrile gloves", note: "Nitrile disposables are for light splash, not cuts." },
        { text: "No gloves, so you can grip better", note: "1910.138(a) requires hand protection for cut hazards." }
      ],
      why: "29 CFR 1910.138(a): hand protection is required when hands are exposed to hazards such as severe cuts or lacerations. OSHA 3151: sturdy leather, canvas or metal mesh gloves protect against cuts; fabric gloves don't give enough protection with rough, sharp or heavy materials.",
      practice: "Sharp edges → **cut-resistant gloves**, not cotton or disposables.",
      sources: [3, 5]
    },
    {
      label: "Scenario 5 · Prescription glasses",
      scenario: "A coworker wears **prescription glasses** and says they're good enough for the grinding station.",
      visual: {
        type: "checklist",
        title: "Eye protection",
        subtitle: "Corrective lenses",
        items: [
          { label: "Their everyday prescription glasses", status: "todo", value: "Option" },
          { label: "Prescription safety glasses", status: "todo", value: "Option" },
          { label: "Over-the-glasses goggles", status: "todo", value: "Option" }
        ]
      },
      ask: "What's the right fix?",
      options: [
        { text: "Prescription safety eyewear, or protection designed to fit over their glasses", correct: true },
        { text: "Their regular glasses are fine", note: "Ordinary prescription lenses don't protect against most workplace eye hazards." },
        { text: "Take the glasses off and wear standard safety glasses", note: "Then they can't see the work, which creates new hazards." },
        { text: "Keep them off the grinder permanently", note: "There's a simple PPE fix." }
      ],
      why: "29 CFR 1910.133(a)(3): employees who wear prescription lenses must wear eye protection that incorporates the prescription, or eye protection that fits over the prescription lenses without disturbing them. OSHA 3151: ordinary prescription lenses don't provide adequate protection.",
      practice: "Prescription glasses → **Rx safety eyewear or over-the-glasses protection.**",
      sources: [2, 5]
    },
    {
      label: "Scenario 6 · Feet",
      scenario: "You'll be moving **steel drums on a hand truck** and handling heavy castings all shift. You're in running shoes.",
      visual: {
        type: "checklist",
        title: "Foot hazards",
        subtitle: "Shipping dock",
        items: [
          { label: "Falling / rolling objects", status: "bad", value: "Yes", hl: true },
          { label: "Sharp objects on floor", status: "warn", value: "Possible" },
          { label: "Current footwear", status: "bad", value: "Running shoes" }
        ]
      },
      ask: "What's required?",
      options: [
        { text: "Protective footwear (e.g. safety-toe shoes) because of falling and rolling objects", correct: true },
        { text: "Running shoes are fine if you're careful", note: "Care doesn't stop a dropped casting." },
        { text: "Only needed on the forklift aisles", note: "The hazard here is the drums and castings themselves." },
        { text: "Thick socks", note: "Not protective footwear." }
      ],
      why: "29 CFR 1910.136(a): each affected employee uses protective footwear when working where there's a danger of foot injuries from falling or rolling objects, objects piercing the sole, or electrical hazards.",
      practice: "Falling or rolling objects → **protective (safety-toe) footwear.**",
      sources: [4]
    },
    {
      label: "Scenario 7 · Dropped hard hat",
      scenario: "A wrench falls from a mezzanine and **hits your hard hat**. You're fine and the shell looks undamaged.",
      visual: {
        type: "checklist",
        title: "Hard hat check",
        subtitle: "After impact",
        items: [
          { label: "Visible cracks or dents", status: "ok", value: "None seen" },
          { label: "Sustained an impact", status: "bad", value: "Yes", hl: true }
        ]
      },
      ask: "What do you do with the hard hat?",
      options: [
        { text: "Replace it; it took an impact even if no damage shows", correct: true },
        { text: "Keep wearing it; no visible damage means it's fine", note: "Damage from an impact may not be visible." },
        { text: "Tape over the spot where it was hit", note: "Tape doesn't restore protection." },
        { text: "Just replace the suspension", note: "Suspensions can be replaced when worn, but an impacted shell gets replaced." }
      ],
      why: "OSHA 3151: always replace a hard hat if it sustains an impact, even if damage isn't noticeable. 29 CFR 1910.132(e): defective or damaged PPE shall not be used.",
      practice: "Hard hat took a hit → **replace it**, even if it looks fine.",
      sources: [5, 1]
    },
    {
      label: "Scenario 8 · New hire",
      scenario: "A new hire gets a box of PPE on day one and is sent straight to the grinding station.",
      visual: {
        type: "checklist",
        title: "New hire PPE",
        subtitle: "Day one",
        items: [
          { label: "PPE issued", status: "ok", value: "Yes" },
          { label: "PPE training", status: "bad", value: "None", hl: true },
          { label: "Shown they understand it", status: "todo", value: "?" }
        ]
      },
      ask: "What's missing?",
      options: [
        { text: "Training on when, what, how to wear, limits and care, and showing they understand it before working", correct: true },
        { text: "Nothing; handing out PPE is enough", note: "Employees must be trained before they work with PPE." },
        { text: "A signature saying they got the box", note: "Training content and demonstrated understanding are required." },
        { text: "Training after the first month", note: "Training comes before the work that needs PPE." }
      ],
      why: "29 CFR 1910.132(f)(1): each employee who must use PPE is trained on when it's necessary, what PPE is necessary, how to put it on, take it off, adjust and wear it, its limitations, and its care. (f)(2): they demonstrate understanding before doing work that requires PPE. (f)(3): retrain when things change.",
      practice: "PPE needs **training plus demonstrated understanding before the work.**",
      sources: [1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 5, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 8, title: "Perfect score", text: "Sharp PPE judgment. Keep matching gear to the hazard." }
  ],
  takeaway: "The pattern: **assess the hazard → match the PPE to it (eyes, face, hands, feet, head) → damaged gear is out → train before use.**",
  sources: [
    { short: "29 CFR 1910.132", title: "OSHA 29 CFR 1910.132: Personal protective equipment, general requirements", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.132" },
    { short: "29 CFR 1910.133", title: "OSHA 29 CFR 1910.133: Eye and face protection", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.133" },
    { short: "29 CFR 1910.138", title: "OSHA 29 CFR 1910.138: Hand protection", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.138" },
    { short: "29 CFR 1910.136", title: "OSHA 29 CFR 1910.136: Foot protection", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.136" },
    { short: "OSHA 3151", title: "OSHA 3151: Personal Protective Equipment", url: "https://www.osha.gov/sites/default/files/publications/osha3151.pdf" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. Check the chemical's SDS and the PPE manufacturer's data for your exact task.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own hazard assessment, PPE list and site rules? Rebranded with your company name, if you like. See how it works.", url: "../contact/", label: "Get this customized for your SOP", email: "oneskilldrill@outlook.com" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program."
  ]
};
