/* Drill data: Grain bin entry (29 CFR 1910.272).
   Rule quotes are verbatim from 29 CFR 1910.272 and its non-mandatory Appendix A
   (osha.gov, cross-checked against eCFR on 2026-10-02).
   Built only from public OSHA material listed in `sources`. */
window.DRILL = {
  id: "grain-bin-entry",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Grain handling safety",
  title: "Grain bin entry",
  intro: "Twelve calls at a grain elevator, feed mill or co-op facility: the entry permit, lockout, moving grain, walking down grain, air testing, the harness and lifeline, the observer, rescue, bridged grain, flat storage, and hot work. Every answer shows the exact rule text from OSHA's grain handling standard, **29 CFR 1910.272**. A practice drill that supplements your employer's bin-entry training and permit procedure.",
  meta: ["12 decisions", "About 6 min", "Rule text from 29 CFR 1910.272"],
  questions: [
    {
      label: "Scenario 1 · The entry permit",
      scenario: "Bin 6 needs a look inside. The superintendent, who normally authorizes entries, signs nothing and heads to the scale house: \"Just hop in, it's quick.\"",
      visual: {
        type: "checklist", title: "Entry paperwork", subtitle: "Bin 6",
        items: [
          { label: "Authorizing rep present for whole entry", status: "bad", value: "No", hl: true },
          { label: "Written entry permit", status: "todo", value: "Not issued" }
        ]
      },
      ask: "What's the right call?",
      options: [
        { text: "Don't enter until a written entry permit certifies the precautions are in place (unless the authorizing rep stays for the entire entry)", correct: true },
        { text: "A verbal OK is enough for a quick look", note: "Unless the employer's representative is present for the entire operation, a permit is required." },
        { text: "Go in now and fill out the permit afterwards", note: "The permit certifies the precautions were implemented before entry." },
        { text: "Permits are only needed for entries longer than 15 minutes", note: "There's no short-entry exception in the rule." }
      ],
      why: "OSHA's grain handling standard (29 CFR 1910.272) says a permit is required unless the person who would authorize it is present for the entire operation. The permit certifies the (g) precautions were done before anyone goes in, and it stays on file until the entry is complete.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(i)", text: "The employer shall issue a permit for entering bins, silos, or tanks unless the employer or the employer's representative (who would otherwise authorize the permit) is present during the entire operation. The permit shall certify that the precautions contained in this paragraph (§ 1910.272(g)) have been implemented prior to employees entering bins, silos or tanks. The permit shall be kept on file until completion of the entry operations." }],
      practice: "No authorizing rep on site the whole time → **written permit before entry**, kept on file.",
      sources: [1]
    },
    {
      label: "Scenario 2 · Before anyone goes in",
      scenario: "The **center unload auger**, the **sweep auger** and the **fill conveyor** for Bin 6 are switched off at the control panel, but nothing is locked.",
      visual: {
        type: "checklist", title: "Bin 6 · equipment status", subtitle: "Pre-entry",
        items: [
          { label: "Center unload auger", status: "warn", value: "Off at panel" },
          { label: "Sweep auger", status: "warn", value: "Off at panel" },
          { label: "Fill conveyor", status: "warn", value: "Off at panel" },
          { label: "Locked out / tagged / blocked off", status: "todo", value: "Not yet", hl: true }
        ]
      },
      ask: "What has to happen to that equipment before entry?",
      options: [
        { text: "Deenergize all of it, and disconnect, lock out and tag, block off, or otherwise prevent it from operating by an equally effective method", correct: true },
        { text: "Leave it off at the panel and tell the crew not to touch it", note: "Off at the panel isn't prevented from operating. Anyone can switch it back on." },
        { text: "Lock out only the unload auger, since that's what moves grain", note: "The rule covers all equipment that presents a danger: sweep augers and conveyors too." },
        { text: "Have someone stand by the panel instead", note: "A person standing guard isn't one of the methods the rule lists." }
      ],
      why: "The standard covers all mechanical, electrical, hydraulic and pneumatic equipment that presents a danger to people inside. Switching it off isn't enough: it has to be deenergized and prevented from operating by one of the listed methods.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(ii)", text: "All mechanical, electrical, hydraulic, and pneumatic equipment which presents a danger to employees inside grain storage structures shall be deenergized and shall be disconnected, locked-out and tagged, blocked-off, or otherwise prevented from operating by other equally effective means or methods." }],
      practice: "Before entry: **every** auger, sweep and conveyor deenergized and **locked out and tagged, or blocked off**.",
      sources: [1]
    },
    {
      label: "Scenario 3 · \"Just bump it\"",
      scenario: "You're inside Bin 6 and the grain isn't moving toward the sump. A coworker on the roof radios: \"I'll bump the unload auger for a second to get it going.\"",
      visual: {
        type: "checklist", title: "Proposed fix", subtitle: "Worker inside the bin",
        items: [
          { label: "Worker in the bin", status: "warn", value: "Yes" },
          { label: "Unload auger run \"for a second\"", status: "bad", value: "Proposed", hl: true }
        ]
      },
      ask: "What do you say?",
      options: [
        { text: "No. Nothing runs and no grain is drawn while anyone is in the bin", correct: true },
        { text: "OK, as long as it's only a few seconds", note: "OSHA says suction from moving grain can pull a worker under in seconds." },
        { text: "OK, if I move to the wall first", note: "Being on moving grain is prohibited anywhere in the bin." },
        { text: "OK, since I'm wearing a harness", note: "The harness doesn't make standing on moving grain allowed." }
      ],
      why: "OSHA's grain handling page says augers are locked out so grain isn't emptied or moving while workers are inside, because moving grain out of a bin creates suction that can pull a worker in within seconds. Being on moving grain is prohibited outright.",
      rule: [
        { cite: "OSHA, Grain Handling (osha.gov)", text: "Moving grain out of a bin while a worker is in the bin creates a suction that can pull the workers into the grain in seconds." },
        { cite: "29 CFR 1910.272(g)(1)(iv)", text: "\"Walking down grain\" and similar practices where an employee walks on grain to make it flow within or out from a grain storage structure, or where an employee is on moving grain, are prohibited." }
      ],
      practice: "Someone in the bin → **nothing runs, no grain moves.**",
      sources: [2, 1]
    },
    {
      label: "Scenario 4 · \"Walk it down\"",
      scenario: "Grain has stopped flowing to the sump. An old hand suggests: \"Get on top and walk around on it to get it moving. We've always done it.\"",
      visual: {
        type: "checklist", title: "Proposed fix", subtitle: "Stuck grain",
        items: [
          { label: "Worker walking on the grain to make it flow", status: "bad", value: "Proposed", hl: true }
        ]
      },
      ask: "What's the call?",
      options: [
        { text: "No. Walking down grain is prohibited", correct: true },
        { text: "OK, as long as he wears a harness", note: "The practice itself is prohibited, harness or not." },
        { text: "OK, if he stays near the wall", note: "The rule prohibits walking on grain to make it flow, wherever you stand." },
        { text: "OK, but only for a minute", note: "OSHA's fact sheet says a worker can be trapped in about 4–5 seconds once grain flows." }
      ],
      why: "Moving grain acts like quicksand. OSHA's fact sheet says a worker can be trapped in about 4–5 seconds and completely covered in about 22 seconds once an auger starts. Use your procedure for freeing grain from outside the bin.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(iv)", text: "\"Walking down grain\" and similar practices where an employee walks on grain to make it flow within or out from a grain storage structure, or where an employee is on moving grain, are prohibited." }],
      practice: "**Never walk down grain** or stand on moving grain.",
      sources: [1, 3]
    },
    {
      label: "Scenario 5 · The air inside",
      scenario: "The grain in Bin 6 went out of condition and smells musty, and the bin was **fumigated last week**. The aeration fan has been **off for two days**.",
      visual: {
        type: "checklist", title: "Atmosphere check", subtitle: "Bin 6",
        items: [
          { label: "Reason to suspect gases (spoilage, fumigant)", status: "warn", value: "Yes" },
          { label: "Continuous ventilation", status: "bad", value: "Off" },
          { label: "Air test", status: "todo", value: "Not done", hl: true }
        ]
      },
      ask: "What's the call on the air?",
      options: [
        { text: "Test for combustible gases, vapors and toxic agents (there's reason to suspect them) and for oxygen (there's no continuous ventilation) before entry", correct: true },
        { text: "Open the hatch for a few minutes and go in", note: "A few minutes with the hatch open isn't continuous ventilation, and there's reason to suspect gases." },
        { text: "Go in and come out if you feel dizzy", note: "Waiting for symptoms isn't a test. The rule requires testing before entry when these conditions apply." },
        { text: "Testing is only needed in concrete silos", note: "The rule covers bins, silos and tanks." }
      ],
      why: "The standard sets two triggers. Gas testing is required when there's reason to believe combustible gases, vapors or toxic agents may be present, and spoilage and a recent fumigation are that reason. Oxygen testing is required unless there's continuous natural air movement or continuous forced-air ventilation before and during the entry. If readings are bad (for example, oxygen below 19.5%), the standard requires ventilation, and a respirator if ventilation can't fix it.",
      rule: [{ cite: "29 CFR 1910.272(g)(1)(iii)", text: "The atmosphere within a bin, silo, or tank shall be tested for the presence of combustible gases, vapors, and toxic agents when the employer has reason to believe they may be present. Additionally, the atmosphere within a bin, silo, or tank shall be tested for oxygen content unless there is continuous natural air movement or continuous forced-air ventilation before and during the period employees are inside." }],
      practice: "Reason to suspect gases → **test for them**. No continuous ventilation → **test the oxygen**.",
      sources: [1, 2]
    },
    {
      label: "Scenario 6 · Harness and lifeline",
      scenario: "Equipment is locked out, the air tests fine, and the permit is signed. The entrant will go in through the **roof hatch, above the grain surface**.",
      visual: {
        type: "checklist", title: "Entrant gear", subtitle: "Roof hatch entry",
        items: [
          { label: "Body harness", status: "ok", value: "On" },
          { label: "Lifeline position and length", status: "todo", value: "?", hl: true }
        ]
      },
      ask: "How should the lifeline be set up?",
      options: [
        { text: "Body harness with lifeline (or a boatswain's chair), positioned and sized so the entrant can't sink further than waist-deep", correct: true },
        { text: "Plenty of slack so the entrant can reach the whole bin", note: "The lifeline must be positioned and of a length that stops the entrant sinking past waist-deep." },
        { text: "No lifeline needed; the grain is crusted hard", note: "Entering from above the grain triggers the requirement, crust or not. Crusted grain can also be a bridge over a void." },
        { text: "A rope tied around the waist", note: "The rule calls for a body harness with lifeline, or a boatswain's chair." }
      ],
      why: "Entering from a level at or above the grain, or walking or standing on grain deep enough to engulf, triggers the requirement. The standard's note allows disconnecting only on a surface the employer demonstrates is free from engulfment hazards, not simply because you're standing.",
      rule: [
        { cite: "29 CFR 1910.272(g)(2)", text: "Whenever an employee enters a grain storage structure from a level at or above the level of the stored grain or grain products, or whenever an employee walks or stands on or in stored grain of a depth which poses an engulfment hazard, the employer shall equip the employee with a body harness with lifeline, or a boatswain's chair that meets the requirements of subpart D of this part. The lifeline shall be so positioned, and of sufficient length, to prevent the employee from sinking further than waist-deep in the grain." },
        { cite: "Note to 29 CFR 1910.272(g)(2)", text: "When the employee is standing or walking on a surface which the employer demonstrates is free from engulfment hazards, the lifeline or alternative means may be disconnected or removed." }
      ],
      practice: "Harness + lifeline (or boatswain's chair), rigged so you **can't sink past waist-deep**.",
      sources: [1, 3]
    },
    {
      label: "Scenario 7 · The observer",
      scenario: "The crew is short-handed. The person at the hatch says he'll run to the scale house and \"check back in 10 minutes.\"",
      visual: {
        type: "checklist", title: "Observer setup", subtitle: "Outside the bin",
        items: [
          { label: "Observer stationed outside", status: "warn", value: "Leaving", hl: true },
          { label: "Communication with entrant", status: "bad", value: "None while away" }
        ]
      },
      ask: "What does the standard require?",
      options: [
        { text: "An observer stays stationed outside the bin, equipped to help, with communication maintained (visual, voice or signal line)", correct: true },
        { text: "Checking back every 10 minutes is fine", note: "The observer is stationed outside, and communication is maintained." },
        { text: "The observer goes in with the entrant to help", note: "The observer is stationed outside." },
        { text: "No observer is needed if the entrant has a phone", note: "The standard requires an observer stationed outside the bin, silo or tank." }
      ],
      why: "OSHA's grain handling page adds that the observer's only task is to continuously track the employee in the bin.",
      rule: [{ cite: "29 CFR 1910.272(g)(3)", text: "An observer, equipped to provide assistance, shall be stationed outside the bin, silo, or tank being entered by an employee. Communications (visual, voice, or signal line) shall be maintained between the observer and employee entering the bin, silo, or tank." }],
      practice: "A dedicated **observer outside**, equipped to help, in **constant contact**.",
      sources: [1, 2]
    },
    {
      label: "Scenario 8 · No answer",
      scenario: "You're the observer. You call down to the entrant and he **stops answering**.",
      visual: {
        type: "checklist", title: "Observer", subtitle: "Bin 6",
        items: [
          { label: "Entrant responding", status: "bad", value: "No", hl: true },
          { label: "Lifeline", status: "ok", value: "Attached" },
          { label: "Additional help", status: "todo", value: "Not called" }
        ]
      },
      ask: "What do you do first?",
      options: [
        { text: "Start the rescue plan and call for more help. Don't climb in alone", correct: true },
        { text: "Climb in right away to check on him", note: "OSHA's non-mandatory guidance says the observer should not enter until adequate assistance is available." },
        { text: "Wait a few minutes in case his radio is off", note: "Losing contact is the signal to start the rescue plan." },
        { text: "Run the unload auger to lower the grain around him", note: "Moving grain can pull him deeper." }
      ],
      why: "The standard requires the observer to be trained in rescue procedures, including how to get more help. Separately, OSHA's non-mandatory Appendix A guidance says the observer should not enter until adequate assistance is available. That's guidance, not a requirement, and your site's rescue plan governs.",
      rule: [
        { cite: "29 CFR 1910.272(g)(5)", text: "The employee acting as observer shall be trained in rescue procedures, including notification methods for obtaining additional assistance." },
        { cite: "Appendix A to 1910.272, section 5 (non-mandatory guidance)", text: "The observer should not enter a space until adequate assistance is available." }
      ],
      practice: "No answer → **start the rescue plan, call for help**, don't go in alone.",
      sources: [1, 5]
    },
    {
      label: "Scenario 9 · Rescue gear",
      scenario: "During the pre-entry check, the only rescue equipment at the bin is a **rope from someone's truck**.",
      visual: {
        type: "checklist", title: "Pre-entry check", subtitle: "Rescue",
        items: [
          { label: "Rescue equipment suited to this bin", status: "bad", value: "Truck rope only", hl: true }
        ]
      },
      ask: "What's the call?",
      options: [
        { text: "Stop. Get rescue equipment specifically suited to this bin before entry", correct: true },
        { text: "The rope will do for a short entry", note: "The rule requires equipment specifically suited for the bin being entered." },
        { text: "Rescue gear only matters if something goes wrong, so proceed", note: "The gear has to be provided for the entry, before anything goes wrong." },
        { text: "Call 911 if needed; no gear required on site", note: "The employer must provide rescue equipment suited to the bin." }
      ],
      why: "Rescue equipment has to match the specific bin, silo or tank being entered.",
      rule: [{ cite: "29 CFR 1910.272(g)(4)", text: "The employer shall provide equipment for rescue operations which is specifically suited for the bin, silo, or tank being entered." }],
      practice: "No bin-specific rescue equipment → **no entry**.",
      sources: [1]
    },
    {
      label: "Scenario 10 · Bridged grain",
      scenario: "From the hatch you see a **crusted surface with a hollow gap beneath it**. The plan: go in through the bottom door and break it loose from underneath.",
      visual: {
        type: "checklist", title: "What you see", subtitle: "Through the roof hatch",
        items: [
          { label: "Crusted surface", status: "warn", value: "Center of bin" },
          { label: "Void beneath the crust", status: "bad", value: "Visible", hl: true },
          { label: "Plan: break it from below", status: "bad", value: "Proposed" }
        ]
      },
      ask: "What's the safe move?",
      options: [
        { text: "Never enter beneath a bridge or below grain built up on the walls. Use your procedure to work it loose from outside", correct: true },
        { text: "Go in at the bottom door and knock it down quickly", note: "Underneath a bridging condition is exactly where the rule prohibits entry." },
        { text: "Step onto the crust with a shovel to break it", note: "OSHA says bridged grain can collapse unexpectedly if a worker stands on or near it." },
        { text: "Run the unload auger to pull the bridge down, then go in", note: "Running equipment to collapse the bridge isn't safe with anyone near or entering the bin." }
      ],
      why: "OSHA's grain handling page says bridged grain and vertical piles can collapse unexpectedly if a worker stands on or near them. OSHA's hazard alert notes grain can sometimes be loosened from outside, for example with a pole through an access cover.",
      rule: [{ cite: "29 CFR 1910.272(g)(6)", text: "Employees shall not enter bins, silos, or tanks underneath a bridging condition, or where a buildup of grain products on the sides could fall and bury them." }],
      practice: "Bridged or caked grain → **never under it**; work it loose **from outside**.",
      sources: [1, 2, 4]
    },
    {
      label: "Scenario 11 · Flat storage",
      scenario: "In a flat storage building, you need to walk across a **deep pile** to reach a spoiled spot. The reclaim auger is \"off.\" Part of the pile is a steep wall of grain.",
      visual: {
        type: "checklist", title: "Flat storage walk", subtitle: "Ground-level entry",
        items: [
          { label: "Grain deep enough to engulf", status: "warn", value: "Yes" },
          { label: "Lifeline or demonstrated alternative", status: "todo", value: "None", hl: true },
          { label: "Reclaim auger", status: "warn", value: "Off, not locked" },
          { label: "Steep grain wall", status: "warn", value: "Nearby" }
        ]
      },
      ask: "What has to be in place?",
      options: [
        { text: "A lifeline (or an alternative the employer demonstrates works) to stop sinking past waist-deep, the auger deenergized and locked out, and stay out from under the grain wall", correct: true },
        { text: "Nothing extra; flat storage isn't a bin", note: "Flat storage has its own requirements in paragraph (h)." },
        { text: "Just the auger lockout", note: "Deep grain also triggers the lifeline (or demonstrated alternative)." },
        { text: "A lifeline, and work along the base of the grain wall to stay out of the deep part", note: "The rule prohibits being anywhere grain on the sides or elsewhere could fall and engulf you." }
      ],
      why: "Entry through unrestricted ground-level openings into flat storage with no atmospheric hazards falls under paragraph (h) instead of (g). It has its own lifeline, lockout and engulfment rules.",
      rule: [
        { cite: "29 CFR 1910.272(h)(1)", text: "Each employee who walks or stands on or in stored grain, where the depth of the grain poses an engulfment hazard, shall be equipped with a lifeline or alternative means which the employer demonstrates will prevent the employee from sinking further than waist-deep into the grain." },
        { cite: "29 CFR 1910.272(h)(2)(i)", text: "Whenever an employee walks or stands on or in stored grain or grain products of a depth which poses an engulfment hazard, all equipment which presents a danger to that employee (such as an auger or other grain transport equipment) shall be deenergized, and shall be disconnected, locked-out and tagged, blocked-off, or otherwise prevented from operating by other equally effective means or methods." },
        { cite: "29 CFR 1910.272(h)(3)", text: "No employee shall be permitted to be either underneath a bridging condition, or in any other location where an accumulation of grain on the sides or elsewhere could fall and engulf that employee." }
      ],
      practice: "Deep pile in flat storage → **lifeline, auger locked out, stay clear of grain walls.**",
      sources: [1]
    },
    {
      label: "Scenario 12 · Hot work in the headhouse",
      scenario: "A bracket on a headhouse conveyor needs welding today. There's **dust on the beams**, the supervisor won't be there, and it isn't an authorized welding shop. Someone suggests blowing the dust off with compressed air while the welder sets up.",
      visual: {
        type: "checklist", title: "Hot work", subtitle: "Headhouse conveyor",
        items: [
          { label: "Hot work permit", status: "todo", value: "Not issued", hl: true },
          { label: "Dust on beams", status: "warn", value: "Yes" },
          { label: "Compressed air while equipment runs", status: "bad", value: "Proposed" }
        ]
      },
      ask: "What's the right call?",
      options: [
        { text: "Get the hot work permit first, certifying the 1910.252(a) fire precautions are in place, and don't blow dust with compressed air unless ignition sources are shut down or controlled", correct: true },
        { text: "Weld quickly; a short job doesn't need a permit", note: "The permit covers all hot work, unless one of the listed exceptions applies." },
        { text: "Blow the dust off now while the welder sets up", note: "Compressed air is only allowed when machinery that's an ignition source is shut down and other ignition sources are removed or controlled." },
        { text: "Write up the permit after the job", note: "The permit certifies the requirements were implemented before hot work begins." }
      ],
      why: "A hot work permit is required for all hot work, except when the authorizing rep is present, in an authorized welding shop, or in an authorized hot work area outside the grain handling structure. None of those applies here.",
      rule: [
        { cite: "29 CFR 1910.272(f)(2)", text: "The permit shall certify that the requirements contained in § 1910.252(a) have been implemented prior to beginning the hot work operations. The permit shall be kept on file until completion of the hot work operations." },
        { cite: "29 CFR 1910.272(j)(3)", text: "The use of compressed air to blow dust from ledges, walls, and other areas shall only be permitted when all machinery that presents an ignition source in the area is shut-down, and all other known potential ignition sources in the area are removed or controlled." }
      ],
      practice: "Hot work → **permit first**; compressed air only with **ignition sources shut down or controlled**.",
      sources: [1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 8, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 12, title: "Perfect score", text: "Sharp judgment. Keep every step on every entry." }
  ],
  takeaway: "The pattern: **permit → lock out → nothing moves while you're in → test the air when the rule calls for it → harness and lifeline → observer outside → bin-specific rescue gear → never on moving grain or under bridged grain.** Your employer's written procedure and permit govern the exact steps.",
  sources: [
    { short: "29 CFR 1910.272", title: "OSHA 29 CFR 1910.272: Grain handling facilities", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.272" },
    { short: "OSHA: Grain Handling", title: "OSHA Safety and Health Topics: Grain Handling", url: "https://www.osha.gov/grain-handling" },
    { short: "OSHA fact sheet", title: "OSHA Fact Sheet: Worker Entry into Grain Storage Bins", url: "https://www.osha.gov/sites/default/files/publications/grainstorageFACTSHEET.pdf" },
    { short: "OSHA hazard alert", title: "OSHA Hazard Alert: Dangers of Engulfment and Suffocation in Grain Bins", url: "https://www.osha.gov/sites/default/files/publications/hazard-alert_grain_bins.pdf" },
    { short: "1910.272 App. A", title: "OSHA 29 CFR 1910.272 Appendix A: Grain Handling Facilities (non-mandatory)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.272AppA" }
  ],
  sourcesNote: "Rule quotes are verbatim from 29 CFR 1910.272 as published on osha.gov and eCFR (checked October 2026). 1910.272 applies to grain elevators, feed mills, flour mills, rice mills, dust pelletizing plants, dry corn mills, soybean flaking operations, and the dry grinding operations of soycake. OSHA's non-mandatory Appendix A says the standard does not apply to on-farm storage or feed lots; on a farm, treat these as the same precautions OSHA requires at commercial grain facilities. Your employer's written bin-entry procedure and permit govern the exact steps.",
  disclaimer: "**Supplement, not certification.** A practice drill that supplements your employer's bin-entry training and permit procedure. Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own bins, permit form and rescue plan, and rebranded with your company name? See how it works.", url: "../contact/", label: "Get this customized for your SOP", email: "oneskilldrill@outlook.com" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Supplement, not certification. Not a substitute for OSHA-required training (including 1910.272(e)), certification, or your employer's written program."
  ]
};
