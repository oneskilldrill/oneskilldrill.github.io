/* Drill data: Forklift pre-shift inspection.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "forklift-pre-shift-inspection",
  kicker: "One Skill Drill · Workplace safety",
  title: "Forklift pre-shift inspection",
  intro: "Five quick calls an operator makes before the first lift of the shift. Pick the best answer, get instant feedback, and see your score. Takes about 3 minutes.",
  meta: ["5 questions", "About 3 min", "Based on OSHA guidance"],
  questions: [
    {
      label: "Scenario 1 · How often?",
      scenario: "Your warehouse runs three shifts. Truck #7 is in use **around the clock**.",
      visual: {
        type: "checklist",
        title: "Truck #7 · Sit-down counterbalance",
        subtitle: "Electric",
        items: [
          { label: "1st shift · 06:00–14:00", status: "ok", value: "In use" },
          { label: "2nd shift · 14:00–22:00", status: "ok", value: "In use" },
          { label: "3rd shift · 22:00–06:00", status: "ok", value: "In use" }
        ]
      },
      ask: "How often must Truck #7 be examined?",
      options: [
        { text: "After each shift", correct: true },
        { text: "Once a day, at the start of 1st shift", note: "Once a day is the minimum, but round-the-clock trucks need more." },
        { text: "Once a week", note: "Far too seldom. The minimum is daily." },
        { text: "Only after a repair or breakdown", note: "Exams are routine, not just after problems." }
      ],
      why: "29 CFR 1910.178(q)(7): trucks are examined before being placed in service, at least daily. Trucks used round-the-clock are examined after each shift.",
      practice: "Daily exam minimum; **after each shift** for round-the-clock trucks.",
      sources: [1, 2]
    },
    {
      label: "Scenario 2 · What comes first?",
      scenario: "You're starting your pre-shift inspection on a sit-down truck.",
      visual: {
        type: "checklist",
        title: "Pre-shift inspection",
        subtitle: "Order?",
        items: [
          { label: "Visual check: fluids, leaks, tires, forks, chains, decals", status: "todo", value: "Step ?" },
          { label: "Operational check: brakes, steering, controls, horn, lights", status: "todo", value: "Step ?" }
        ]
      },
      ask: "Which order does OSHA's eTool recommend?",
      options: [
        { text: "Key-off visual check first, then an operational check with the engine running", correct: true },
        { text: "Drive a lap first, then do the visual check", note: "You'd be operating before checking for leaks, cracks, or damage." },
        { text: "Operational check only. If it drives, it's fine", note: "Driving won't show a cracked fork or a missing decal." },
        { text: "Visual check only, at the end of the shift", note: "The check is done before the truck goes into service." }
      ],
      why: "OSHA's eTool: do a pre-start visual check with the key off, then an operational check with the engine running. Don't put the truck in service if either check shows it may be unsafe.",
      practice: "**Key off, look first**; then run the operational check.",
      sources: [2, 3]
    },
    {
      label: "Scenario 3 · Mast chains",
      scenario: "During the key-off check you get to the lift chains and want to check their tension.",
      visual: {
        type: "checklist",
        title: "Key-off checks",
        subtitle: "In progress",
        items: [
          { label: "Fluid levels: oil, water, hydraulic", status: "ok", value: "OK" },
          { label: "Tires: condition and pressure", status: "ok", value: "OK" },
          { label: "Forks: top clip retaining pin and heel", status: "ok", value: "OK" },
          { label: "**Mast chains: tension**", status: "warn", value: "Checking", hl: true },
          { label: "Hydraulic hoses: leaks, cracks", status: "todo", value: "Next" }
        ]
      },
      ask: "How should you check chain tension?",
      options: [
        { text: "Use a stick or other device. Never put your hands inside the mast.", correct: true },
        { text: "Reach in and press the chain by hand. The key's off, so it's safe.", note: "OSHA says operators should not place their hands inside the mast." },
        { text: "Raise the forks and look up at the chain from underneath", note: "Never stand under raised forks [1910.178(m)(2)]." },
        { text: "Skip it. Chains are a mechanic's job.", note: "Chains are on the operator's pre-operation list." }
      ],
      why: "OSHA's eTool lists mast chains on the pre-operation check and notes that operators should not place their hands inside the mast. Use a stick or other device to check chain tension.",
      practice: "Check chain tension **with a stick or other device**, never by hand inside the mast.",
      sources: [2, 1]
    },
    {
      label: "Scenario 4 · Brake check",
      scenario: "Operational check, engine running. You press the service brake and the **pedal goes all the way to the floor**.",
      visual: {
        type: "checklist",
        title: "Operational checks",
        subtitle: "Engine running",
        items: [
          { label: "Steering", status: "ok", value: "OK" },
          { label: "**Service brake: pedal to the floor**", status: "bad", value: "Problem", hl: true },
          { label: "Horn", status: "todo", value: "—" },
          { label: "Lights", status: "todo", value: "—" }
        ]
      },
      ask: "What do you do?",
      options: [
        { text: "Take it out of service, record the problem, and report it to your supervisor right away", correct: true },
        { text: "Drive slowly and use the parking brake until your break", note: "An unsafe truck shouldn't be driven at all." },
        { text: "Adjust or bleed the brakes yourself", note: "Repairs are made by authorized personnel only [1910.178(q)(1)]." },
        { text: "Finish the shift, then report it", note: "Defects are reported immediately, not at end of shift." }
      ],
      why: "OSHA's sample checklist calls a pedal that goes to the floor the first sign the brakes are bad. Under 1910.178(p)(1) and (q)(7), an unsafe truck is taken out of service and defects are reported right away. The eTool says to record the problem and tell a supervisor.",
      practice: "Defect found → **out of service, record it, report it now**; authorized repairs only.",
      sources: [3, 1, 2]
    },
    {
      label: "Scenario 5 · Propane truck",
      scenario: "Key-off check on a liquid propane (LP) truck. Near the tank you **smell propane**.",
      visual: {
        type: "checklist",
        title: "LP tank checks",
        subtitle: "Key off",
        items: [
          { label: "Tank properly mounted; restraint brackets locked", status: "ok", value: "OK" },
          { label: "Pressure relief valve pointing up", status: "ok", value: "OK" },
          { label: "**Hose and connectors: propane odor**", status: "bad", value: "Odor", hl: true }
        ]
      },
      ask: "What's the right first move?",
      options: [
        { text: "Turn off the tank valve and report the problem", correct: true },
        { text: "Start the engine to see whether the smell clears", note: "Never run a truck with a fuel-system leak [1910.178(p)(4)]." },
        { text: "Use a lighter to find the leak", note: "Open flames are prohibited for checking fuel [1910.178(p)(5)]." },
        { text: "Keep working if the smell fades", note: "A leak has to be corrected before the truck runs." }
      ],
      why: "OSHA's sample checklist: if you smell propane, turn off the tank valve and report the problem. 1910.178(p)(4): no truck runs with a fuel-system leak until it's corrected.",
      practice: "Propane odor → **close the tank valve and report**; don't run it, no open flames.",
      sources: [3, 1, 2]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 3, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 5, title: "Perfect score", text: "Sharp pre-shift habits. Keep them up every shift." }
  ],
  takeaway: "The pattern: **check before service → key off, then running → anything unsafe is out of service and reported now.**",
  sources: [
    { short: "29 CFR 1910.178", title: "OSHA 29 CFR 1910.178: Powered industrial trucks", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" },
    { short: "OSHA eTool: Pre-Operation", title: "OSHA eTool: Powered Industrial Trucks (Forklift), Operating the Forklift, Pre-Operation", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" },
    { short: "OSHA sample checklists", title: "OSHA Sample Daily Checklists for Powered Industrial Trucks", url: "https://www.osha.gov/training/library/powered-industrial-trucks/checklist-0" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. OSHA notes its sample checklists are a guide only; use your truck's manufacturer manual and your site's procedures.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own trucks, checklists and site rules? See how a customized version works.", url: "../contact/", label: "Get this customized for your SOP" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Practice and refresher aid only. It does not replace the operator training, evaluation, and certification an employer must provide under 29 CFR 1910.178(l). Follow your site's procedures and the truck manufacturer's manual."
  ]
};
