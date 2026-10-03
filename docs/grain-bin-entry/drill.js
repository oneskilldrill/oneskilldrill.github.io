/* Drill data: Grain bin entry (29 CFR 1910.272).
   Rule quotes are verbatim from 29 CFR 1910.272 (osha.gov, cross-checked against eCFR on 2026-10-02).
   Built only from public OSHA material listed in `sources`. */
window.DRILL = {
  id: "grain-bin-entry",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Grain handling safety",
  title: "Grain bin entry",
  intro: "Eight calls before and during a bin entry at a grain elevator or co-op: lockout, the entry permit, air testing, the body harness and lifeline, the observer, bridged grain, walking down grain, and what to do when grain starts to move. Every answer shows the exact rule text from **29 CFR 1910.272**. Takes about 5 minutes.",
  meta: ["8 decisions", "About 5 min", "Rule text from 29 CFR 1910.272"],
  questions: [
    {
      label: "Scenario 1 · Before anyone goes in",
      scenario: "Bin 6 has crusted grain on top and the unload is slowing down. The crew lead wants someone inside to look. The **center unload auger**, the **sweep auger**, and the **fill conveyor** are all tied to this bin.",
      visual: {
        type: "checklist",
        title: "Bin 6 · equipment status",
        subtitle: "Pre-entry",
        items: [
          { label: "Center unload auger", status: "warn", value: "Off at panel" },
          { label: "Sweep auger", status: "warn", value: "Off at panel" },
          { label: "Fill conveyor", status: "warn", value: "Off at panel" },
          { label: "Disconnects locked and tagged", status: "todo", value: "Not yet", hl: true }
        ]
      },
      ask: "What has to happen to that equipment before entry?",
      options: [
        { text: "Deenergize all of it and disconnect, lock out and tag (or block off) everything that could endanger the entrant", correct: true },
        { text: "Leave it off at the control panel and tell the crew not to touch it", note: "Off at the panel isn't locked out. Anyone can switch it back on." },
        { text: "Lock out only the unload auger, since that's what moves grain", note: "The rule covers all equipment that presents a danger: sweep augers and conveyors too." },
        { text: "Have someone stand by the panel instead of locking out", note: "A person standing guard isn't a lockout." }
      ],
      why: "Every piece of equipment that could hurt someone inside the bin has to be deenergized and locked out before entry. OSHA's fact sheet adds that grain must not be moved into or out of the bin while workers are inside, because flow creates suction that can pull a worker under in seconds.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(ii)", text: "All mechanical, electrical, hydraulic, and pneumatic equipment which presents a danger to employees inside grain storage structures shall be deenergized and shall be disconnected, locked-out and tagged, blocked-off, or otherwise prevented from operating by other equally effective means or methods." }],
      practice: "Before entry: **every** auger, sweep and conveyor deenergized and **locked out and tagged**.",
      sources: [1, 3]
    },
    {
      label: "Scenario 2 · The entry permit",
      scenario: "The superintendent who normally signs off is heading to another site for the afternoon. The crew says they'll \"just do a quick entry\" while he's gone.",
      visual: {
        type: "checklist",
        title: "Entry paperwork",
        subtitle: "Bin 6",
        items: [
          { label: "Employer rep present for whole entry", status: "bad", value: "No", hl: true },
          { label: "Written permit", status: "todo", value: "Not issued" }
        ]
      },
      ask: "What does the rule require here?",
      options: [
        { text: "A written entry permit certifying the precautions are in place, kept on file until the entry is finished", correct: true },
        { text: "A verbal OK by phone is enough", note: "Unless the employer's representative is present for the whole entry, a permit is required." },
        { text: "Fill out the permit afterwards, once everyone's out", note: "The permit certifies the precautions were done before entry." },
        { text: "No permit is needed for a quick entry", note: "There's no short-entry exception." }
      ],
      why: "If the person who would authorize the entry isn't present for the entire operation, the entry needs a permit that certifies the 1910.272(g) precautions were implemented first.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(i)", text: "The employer shall issue a permit for entering bins, silos, or tanks unless the employer or the employer's representative (who would otherwise authorize the permit) is present during the entire operation. The permit shall certify that the precautions contained in this paragraph (§ 1910.272(g)) have been implemented prior to employees entering bins, silos or tanks. The permit shall be kept on file until completion of the entry operations." }],
      practice: "No authorizing rep on site the whole time → **written permit before entry**, kept on file.",
      sources: [1]
    },
    {
      label: "Scenario 3 · The air inside",
      scenario: "The grain in Bin 6 went out of condition and smells musty. The aeration fan has been **off for two days**, and the bin was fumigated last month.",
      visual: {
        type: "checklist",
        title: "Atmosphere check",
        subtitle: "Bin 6",
        items: [
          { label: "Spoiled grain / fumigation history", status: "warn", value: "Yes" },
          { label: "Continuous ventilation", status: "bad", value: "Off" },
          { label: "Oxygen / gas test", status: "todo", value: "Not done", hl: true }
        ]
      },
      ask: "What's the call on the air?",
      options: [
        { text: "Test for oxygen and for combustible and toxic gases before entry, and ventilate if levels are unsafe", correct: true },
        { text: "Open the hatch for a few minutes and go in", note: "Without continuous ventilation the oxygen must be tested, and gases tested when there's reason to suspect them." },
        { text: "Go in and come out if you feel dizzy", note: "Bad air can cause a worker to pass out and fall into the grain." },
        { text: "Testing is only needed in concrete silos", note: "The rule covers bins, silos and tanks." }
      ],
      why: "Spoiling grain and fumigants give a reason to suspect toxic gases, and with no continuous ventilation the oxygen level must be tested too. OSHA warns that bad air can make a worker pass out and fall into the grain.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(iii)", text: "The atmosphere within a bin, silo, or tank shall be tested for the presence of combustible gases, vapors, and toxic agents when the employer has reason to believe they may be present. Additionally, the atmosphere within a bin, silo, or tank shall be tested for oxygen content unless there is continuous natural air movement or continuous forced-air ventilation before and during the period employees are inside." }],
      practice: "**Test the air** (oxygen, combustible and toxic gases) before entry; ventilate if it's unsafe.",
      sources: [1, 2]
    },
    {
      label: "Scenario 4 · Harness and lifeline",
      scenario: "Equipment is locked out, the air tests fine, and the permit is signed. The entrant will go in through the **roof hatch, above the grain surface**.",
      visual: {
        type: "checklist",
        title: "Entrant gear",
        subtitle: "Roof hatch entry",
        items: [
          { label: "Body harness", status: "ok", value: "On" },
          { label: "Lifeline length", status: "todo", value: "?", hl: true },
          { label: "Anchor outside the bin", status: "todo", value: "?" }
        ]
      },
      ask: "How should the lifeline be set up?",
      options: [
        { text: "Attached to the harness, anchored outside, and positioned with a length that keeps the entrant from sinking past waist-deep", correct: true },
        { text: "Plenty of slack so the entrant can move around the whole bin", note: "Too much slack lets the entrant sink before the line catches." },
        { text: "No lifeline needed; the grain is crusted hard", note: "Crusted grain can be a bridge over a void." },
        { text: "A rope tied around the waist", note: "The rule calls for a body harness with lifeline, or a boatswain's chair." }
      ],
      why: "Entering from a level at or above the grain, or standing on grain deep enough to engulf, requires a body harness with lifeline (or a boatswain's chair), set up so the entrant can't sink further than waist-deep.",
      rule: [{ cite: "29 CFR 1910.272(g)(2)", text: "Whenever an employee enters a grain storage structure from a level at or above the level of the stored grain or grain products, or whenever an employee walks or stands on or in stored grain of a depth which poses an engulfment hazard, the employer shall equip the employee with a body harness with lifeline, or a boatswain's chair that meets the requirements of subpart D of this part. The lifeline shall be so positioned, and of sufficient length, to prevent the employee from sinking further than waist-deep in the grain." }],
      practice: "Harness + lifeline (or boatswain's chair), rigged so you **can't sink past waist-deep**.",
      sources: [1, 3]
    },
    {
      label: "Scenario 5 · The observer",
      scenario: "The crew is short-handed. The plan is for the person on the roof to also run the scale house until the entrant is done.",
      visual: {
        type: "checklist",
        title: "Observer setup",
        subtitle: "Outside the bin",
        items: [
          { label: "Observer stationed outside", status: "warn", value: "Part-time", hl: true },
          { label: "Communication with entrant", status: "todo", value: "?" },
          { label: "Observer rescue training", status: "todo", value: "?" }
        ]
      },
      ask: "What does the observer role require?",
      options: [
        { text: "An observer stationed outside the bin, equipped to help, keeping constant contact, and trained in rescue and how to call for help", correct: true },
        { text: "Checking in by radio every 15 minutes from the scale house is fine", note: "The observer is stationed outside the bin, with communications maintained." },
        { text: "The observer goes in with the entrant to help", note: "The observer is stationed outside." },
        { text: "No observer is needed if the entrant has a phone", note: "An observer is required for every bin entry." }
      ],
      why: "Someone has to be outside the bin, equipped to help, in constant contact, and trained in rescue. OSHA's grain handling page adds that the observer's only task should be to continuously track the entrant.",
      rule: [
        { cite: "29 CFR 1910.272(g)(3)", text: "An observer, equipped to provide assistance, shall be stationed outside the bin, silo, or tank being entered by an employee. Communications (visual, voice, or signal line) shall be maintained between the observer and employee entering the bin, silo, or tank." },
        { cite: "29 CFR 1910.272(g)(5)", text: "The employee acting as observer shall be trained in rescue procedures, including notification methods for obtaining additional assistance." }
      ],
      practice: "A dedicated **observer outside**, in constant contact, **trained in rescue** and calling for help.",
      sources: [1, 2]
    },
    {
      label: "Scenario 6 · Bridged grain",
      scenario: "From the hatch you can see the surface hasn't dropped even though grain was unloaded. There's a **hollow gap** under a crusted layer near the center.",
      visual: {
        type: "checklist",
        title: "What you see",
        subtitle: "Through the roof hatch",
        items: [
          { label: "Crusted surface", status: "warn", value: "Center of bin" },
          { label: "Void beneath the crust", status: "bad", value: "Visible", hl: true },
          { label: "Grain caked on the walls above", status: "warn", value: "Some" }
        ]
      },
      ask: "What's the safe move?",
      options: [
        { text: "Don't enter on or below the bridge; break it up from outside, e.g. with a pole through the hatch, per your procedure", correct: true },
        { text: "Step onto the crust with the lifeline on and break it with a shovel", note: "Standing on a bridge can collapse it into the void." },
        { text: "Enter at the bottom door and knock it down from below", note: "Under a bridge is exactly where people get buried." },
        { text: "Run the unload auger to pull the bridge down, then go in", note: "Grain must not move while workers are in or entering the bin." }
      ],
      why: "Bridged grain can cave in under your weight, or fall unexpectedly on someone below it. OSHA's hazard alert notes that grain can sometimes be loosened from outside the bin by bumping it with a pole through an access cover.",
      rule: [{ cite: "29 CFR 1910.272(g)(6)", text: "Employees shall not enter bins, silos, or tanks underneath a bridging condition, or where a buildup of grain products on the sides could fall and bury them." }],
      practice: "Bridged or caked grain → **never on or under it**; work it loose **from outside**.",
      sources: [1, 4]
    },
    {
      label: "Scenario 7 · \"Walk it down\"",
      scenario: "Grain has stopped flowing to the sump. An old hand suggests: \"Run the auger and walk around on top to get it moving. We've always done it.\"",
      visual: {
        type: "checklist",
        title: "Proposed fix",
        subtitle: "Stuck grain",
        items: [
          { label: "Unload auger running", status: "bad", value: "Proposed" },
          { label: "Worker on the grain", status: "bad", value: "Proposed", hl: true }
        ]
      },
      ask: "What do you say?",
      options: [
        { text: "No. Walking down grain or standing on moving grain is prohibited", correct: true },
        { text: "OK, as long as he wears a harness", note: "The practice itself is prohibited, harness or not." },
        { text: "OK, if he stays near the wall", note: "Moving grain pulls toward the outlet from anywhere in the bin." },
        { text: "OK, but only for a minute", note: "Flowing grain can trap a worker in seconds." }
      ],
      why: "Moving grain acts like quicksand. OSHA's fact sheet says a worker can be trapped in about 4–5 seconds and completely covered in about 22 seconds once an auger starts.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(iv)", text: "\"Walking down grain\" and similar practices where an employee walks on grain to make it flow within or out from a grain storage structure, or where an employee is on moving grain, are prohibited." }],
      practice: "**Never walk down grain** or stand on moving grain.",
      sources: [1, 3]
    },
    {
      label: "Scenario 8 · Engulfment in progress",
      scenario: "You're the observer. The crust gives way and your entrant drops **chest-deep** in grain. He's conscious and calling out. His lifeline is attached.",
      visual: {
        type: "checklist",
        title: "Emergency",
        subtitle: "Bin 6",
        items: [
          { label: "Entrant", status: "bad", value: "Chest-deep", hl: true },
          { label: "Lifeline", status: "ok", value: "Attached" },
          { label: "Rescue equipment", status: "ok", value: "At the bin" }
        ]
      },
      ask: "What do you do?",
      options: [
        { text: "Stay outside: call for rescue help per your plan, keep talking to him, and use the lifeline and bin rescue equipment", correct: true },
        { text: "Jump in and dig him out by hand", note: "Coworkers who go in to help often become victims too." },
        { text: "Pull hard on the lifeline right away to yank him out", note: "Use the bin-specific rescue equipment and plan rather than improvising." },
        { text: "Run the unload auger to drain grain away from him", note: "Moving grain pulls him deeper." }
      ],
      why: "OSHA's fact sheet: bin incidents often turn into multiple fatalities because coworkers try to rescue and become victims. Observers are trained to call for help and use rescue equipment made for that bin.",
      rule: [
        { cite: "29 CFR 1910.272(g)(4)", text: "The employer shall provide equipment for rescue operations which is specifically suited for the bin, silo, or tank being entered." },
        { cite: "29 CFR 1910.272(g)(5)", text: "The employee acting as observer shall be trained in rescue procedures, including notification methods for obtaining additional assistance." }
      ],
      practice: "Observer **stays out**, calls for help, and uses the **bin-specific rescue equipment**.",
      sources: [1, 3]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 5, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 8, title: "Perfect score", text: "Sharp bin-entry judgment. Keep every step on every entry." }
  ],
  takeaway: "The pattern: **lock out → permit → test the air → harness and lifeline → observer outside → never on or under bridged grain, never on moving grain → observers stay out and call for rescue.**",
  sources: [
    { short: "29 CFR 1910.272", title: "OSHA 29 CFR 1910.272: Grain handling facilities", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.272" },
    { short: "OSHA: Grain Handling", title: "OSHA Safety and Health Topics: Grain Handling", url: "https://www.osha.gov/grain-handling" },
    { short: "OSHA fact sheet", title: "OSHA Fact Sheet: Worker Entry into Grain Storage Bins", url: "https://www.osha.gov/sites/default/files/publications/grainstorageFACTSHEET.pdf" },
    { short: "OSHA hazard alert", title: "OSHA Hazard Alert: Dangers of Engulfment and Suffocation in Grain Bins", url: "https://www.osha.gov/sites/default/files/publications/hazard-alert_grain_bins.pdf" }
  ],
  sourcesNote: "Rule quotes are verbatim from 29 CFR 1910.272 as published on osha.gov and eCFR (checked October 2026). 1910.272 covers grain handling facilities such as grain elevators, feed mills and similar operations. Your employer's written bin-entry procedure and permit govern the exact steps.",
  disclaimer: "**Supplement, not certification.** Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own bins, permit form and rescue plan, and rebranded with your company name? See how it works.", url: "../contact/", label: "Get this customized for your SOP" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Supplement, not certification. Not a substitute for OSHA-required training (including 1910.272(e)), certification, or your employer's written program."
  ]
};
