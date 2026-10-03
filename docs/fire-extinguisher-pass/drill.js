/* Drill data: Fire extinguisher PASS + fight or flee.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "fire-extinguisher-pass",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Workplace safety",
  title: "Fire extinguisher: PASS, and when not to fight",
  intro: "Eight calls on a small workplace fire: first moves, when to walk away, where to stand, **P**ull, **A**im, **S**queeze, **S**weep, and what to do when it's out (or not). Pick the best answer, get instant feedback with the OSHA source, and see your score. Takes about 5 minutes.",
  meta: ["8 decisions", "About 5 min", "Based on OSHA eTool + 1910.157"],
  questions: [
    {
      label: "Scenario 1 · First moves",
      scenario: "In the break room you spot a **wastebasket on fire**. Flames are knee-high. There's an extinguisher on the wall by the door.",
      visual: {
        type: "checklist",
        title: "Break room",
        subtitle: "Incipient fire?",
        items: [
          { label: "Fire size", status: "warn", value: "Wastebasket" },
          { label: "Alarm raised", status: "todo", value: "Not yet", hl: true },
          { label: "Way out identified", status: "todo", value: "Not yet", hl: true },
          { label: "Extinguisher", status: "ok", value: "By the door" }
        ]
      },
      ask: "What do you do before you approach the fire?",
      options: [
        { text: "Sound the alarm (and call the fire department if appropriate) and pick a safe evacuation path", correct: true },
        { text: "Grab the extinguisher and rush the fire; seconds count", note: "Raise the alarm and know your way out first." },
        { text: "Try to carry the wastebasket outside", note: "Carrying a burning container spreads fire and burns you." },
        { text: "Open windows to let the smoke out", note: "That doesn't put the fire out. Alarm and exit path come first." }
      ],
      why: "OSHA eTool (using an extinguisher): sound the fire alarm and call the fire department if appropriate, and identify a safe evacuation path before approaching the fire. 29 CFR 1910.157(g): where extinguishers are provided for employee use, employees get education on their use at hire and at least annually.",
      practice: "Before approaching: **alarm, then a safe way out.**",
      sources: [1, 3]
    },
    {
      label: "Scenario 2 · Solvent fire",
      scenario: "In the paint room, a **solvent spill is burning** and has spread across a big section of the floor, roughly 10 ft × 8 ft and growing.",
      visual: {
        type: "checklist",
        title: "Risk check",
        subtitle: "Fight or flee?",
        items: [
          { label: "Flammable solvents involved", status: "bad", value: "Yes", hl: true },
          { label: "Area burning", status: "bad", value: "~80 sq ft", hl: true },
          { label: "Extinguisher nearby", status: "ok", value: "Yes" }
        ]
      },
      ask: "Fight it or flee?",
      options: [
        { text: "Evacuate, sound the alarm, and leave it to the fire department", correct: true },
        { text: "Fight it; you have an extinguisher right there", note: "Having an extinguisher doesn't make this fire small enough." },
        { text: "Throw water on it", note: "A solvent fire this size is past what you should take on. Get out and raise the alarm." },
        { text: "Fight it if a coworker backs you up", note: "This fire is past what a portable extinguisher should take on." }
      ],
      why: "OSHA eTool (fight or flee): don't fight a fire that involves flammable solvents, has spread over more than 60 sq ft, is partly hidden behind a wall or ceiling, or can't be reached standing up. Those are beyond the incipient stage.",
      practice: "Solvents, **over 60 sq ft**, hidden or out of reach → **evacuate.**",
      sources: [2]
    },
    {
      label: "Scenario 3 · Heat and smoke",
      scenario: "A fire in a storage closet is pushing **thick smoke** into the hallway. You'd have to **crouch below the smoke** to get close, and you can feel the heat from 15 ft away.",
      visual: {
        type: "checklist",
        title: "Atmosphere check",
        subtitle: "Fight or flee?",
        items: [
          { label: "Smoke filling the area", status: "bad", value: "Quickly", hl: true },
          { label: "Radiant heat at 15 ft", status: "bad", value: "Strong" },
          { label: "Respiratory protection needed", status: "bad", value: "Yes" }
        ]
      },
      ask: "What's the call?",
      options: [
        { text: "Don't fight it. Evacuate and raise the alarm", correct: true },
        { text: "Crawl in low and spray from the floor", note: "Having to crawl because of heat or smoke is a reason not to fight." },
        { text: "Hold your breath and make one quick pass", note: "If it needs respiratory protection, it's not a fire to fight." },
        { text: "Prop the closet door open so you can see", note: "That lets more smoke into the hallway. This one isn't yours to fight." }
      ],
      why: "OSHA eTool (fight or flee): don't fight if smoke means it can't be fought without respiratory protection, if radiated heat makes it hard to get within 10–15 ft (the extinguisher's effective range), if you'd have to crawl because of heat or smoke, or if smoke is quickly filling the room.",
      practice: "Heavy smoke, strong heat, or having to crawl → **don't fight; get out.**",
      sources: [2]
    },
    {
      label: "Scenario 4 · Where to stand",
      scenario: "Back to the break-room wastebasket fire. It's small and contained, and you've decided to fight it.",
      visual: {
        type: "checklist",
        title: "Your position",
        subtitle: "Break room",
        items: [
          { label: "Fire", status: "warn", value: "Back corner" },
          { label: "Door / exit", status: "ok", value: "Front wall" },
          { label: "Where you stand", status: "todo", value: "?", hl: true }
        ]
      },
      ask: "Where should your exit be while you fight it?",
      options: [
        { text: "Behind you, with nothing between you and the door", correct: true },
        { text: "On the far side of the fire, so you can see the door", note: "Then the fire is between you and your way out." },
        { text: "It doesn't matter for a small fire", note: "Small fires grow fast. Keep your way out clear." },
        { text: "Close the door behind you so the smoke stays in", note: "That shuts your own exit." }
      ],
      why: "OSHA eTool: don't let fire, heat or smoke come between you and your evacuation path. Fight or flee: there should be a clear evacuation path behind you as you fight the fire.",
      practice: "Fight only with **your exit behind you.**",
      sources: [1, 2]
    },
    {
      label: "Scenario 5 · PASS",
      scenario: "You have the extinguisher in hand, about 8 ft from the wastebasket.",
      visual: {
        type: "checklist",
        title: "Using the extinguisher",
        subtitle: "P.A.S.S.",
        items: [
          { label: "P", status: "todo", value: "?" },
          { label: "A", status: "todo", value: "?" },
          { label: "S", status: "todo", value: "?" },
          { label: "S", status: "todo", value: "?" }
        ]
      },
      ask: "What does P.A.S.S. stand for, in order?",
      options: [
        { text: "Pull the pin → Aim low → Squeeze the handle → Sweep side to side", correct: true },
        { text: "Point → Activate → Spray → Stop", note: "Close, but the real steps are Pull, Aim, Squeeze, Sweep." },
        { text: "Squeeze → Pull the pin → Aim → Sweep", note: "The handle won't discharge until the pin is pulled." },
        { text: "Pull the pin → Squeeze → Aim at the flames → Spray", note: "Aim before you squeeze, and aim at the base." }
      ],
      why: "OSHA eTool: Pull the pin (this also breaks the tamper seal). Aim low at the base of the fire. Squeeze the handle to release the agent. Sweep from side to side at the base until it appears to be out.",
      practice: "**P**ull, **A**im low, **S**queeze, **S**weep.",
      sources: [1]
    },
    {
      label: "Scenario 6 · Aim",
      scenario: "Pin's out. Flames are licking up the side of the wastebasket.",
      visual: {
        type: "checklist",
        title: "Aim point",
        subtitle: "Wastebasket fire",
        items: [
          { label: "Tips of the flames", status: "todo", value: "Option" },
          { label: "Middle of the flames", status: "todo", value: "Option" },
          { label: "Base of the fire", status: "todo", value: "Option" }
        ]
      },
      ask: "Where do you aim the nozzle?",
      options: [
        { text: "Low, at the base of the fire, sweeping side to side", correct: true },
        { text: "At the tips of the flames", note: "The fuel is at the base. Spraying the flames wastes agent." },
        { text: "Straight down into the middle", note: "Aim low at the base and sweep across it." },
        { text: "At the ceiling above, to cool it", note: "Agent at the ceiling does nothing to the fuel." }
      ],
      why: "OSHA eTool: aim low, pointing the nozzle (or horn or hose) at the base of the fire, then sweep side to side at the base. (On CO2 extinguishers, don't touch the plastic horn; it gets very cold.)",
      practice: "Aim **low, at the base**, and sweep.",
      sources: [1]
    },
    {
      label: "Scenario 7 · Out of agent",
      scenario: "You've swept the base for several seconds. The extinguisher **sputters empty**, and the fire is smaller but **still burning**.",
      visual: {
        type: "checklist",
        title: "Status",
        subtitle: "Mid-fight",
        items: [
          { label: "Extinguisher", status: "bad", value: "Empty", hl: true },
          { label: "Fire", status: "warn", value: "Still burning" }
        ]
      },
      ask: "Now what?",
      options: [
        { text: "Evacuate immediately and make sure the alarm is raised", correct: true },
        { text: "Run down the hall for another extinguisher and come back", note: "Once your extinguisher is empty and the fire isn't out, get out." },
        { text: "Smother it with your jacket", note: "Getting that close puts you in the fire's path." },
        { text: "Stay and watch it until help arrives", note: "Don't stay in the room with a fire that's still burning." }
      ],
      why: "OSHA eTool: evacuate immediately if the extinguisher is empty and the fire is not out, or if the fire grows beyond the incipient stage. Portable extinguishers hold limited agent and can empty in seconds. If you have the slightest doubt, evacuate.",
      practice: "Empty extinguisher and fire not out → **evacuate immediately.**",
      sources: [1]
    },
    {
      label: "Scenario 8 · It looks out",
      scenario: "A different day, a different small fire: your sweep knocks it down and **it appears to be out**.",
      visual: {
        type: "checklist",
        title: "After the knockdown",
        subtitle: "Watch",
        items: [
          { label: "Visible flames", status: "ok", value: "None" },
          { label: "Smoldering / hot material", status: "warn", value: "Possible", hl: true }
        ]
      },
      ask: "What do you do next?",
      options: [
        { text: "Back away, keep watching it, and repeat aim, squeeze, sweep if it flares up", correct: true },
        { text: "Walk over and poke through the trash to make sure", note: "Back away in case it flames up again." },
        { text: "Turn your back and go report it", note: "Keep watching the area; fires can re-ignite." },
        { text: "Put the empty extinguisher back on the wall", note: "Not yet. Keep watching the area in case the fire re-ignites." }
      ],
      why: "OSHA eTool: back away from an extinguished fire in case it flames up again. Watch the area; if the fire re-ignites, repeat steps 2–4 (aim, squeeze, sweep).",
      practice: "Looks out → **back away and watch**; re-ignites → aim, squeeze, sweep again.",
      sources: [1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 5, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 8, title: "Perfect score", text: "Sharp fire judgment. Remember: when in doubt, get out." }
  ],
  takeaway: "The pattern: **alarm and exit path first → fight only small, contained fires with the exit behind you → P.A.S.S. → back away and watch.** If you have the slightest doubt, **evacuate.**",
  sources: [
    { short: "OSHA eTool: Using a fire extinguisher", title: "OSHA eTool: Evacuation Plans and Procedures, Portable Fire Extinguishers, Use", url: "https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/use" },
    { short: "OSHA eTool: Fight or flee", title: "OSHA eTool: Evacuation Plans and Procedures, Fight or Flee", url: "https://www.osha.gov/etools/evacuation-plans-procedures/eap/fight-or-flee" },
    { short: "29 CFR 1910.157", title: "OSHA 29 CFR 1910.157: Portable fire extinguishers", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.157" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. Follow your workplace's emergency action plan. Only fight a fire if your employer has trained you and expects you to.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own emergency action plan, extinguisher locations and site rules? See how a customized version works.", url: "../contact/", label: "Get this customized for your SOP" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program."
  ]
};
