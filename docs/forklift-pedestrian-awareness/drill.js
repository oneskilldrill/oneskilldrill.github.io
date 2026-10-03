/* Drill data: Forklift pedestrian awareness.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "forklift-pedestrian-awareness",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Workplace safety",
  title: "Forklift pedestrian awareness",
  intro: "Seven calls where forklifts and people share the floor, from the operator's seat and on foot: blind corners, blocked views, reversing, walkways, raised forks, riders and close calls. Pick the best answer, get instant feedback with the OSHA source, and see your score. Takes about 4 minutes.",
  meta: ["7 decisions", "About 4 min", "Based on OSHA forklift eTool + 1910.178"],
  questions: [
    {
      label: "Scenario 1 · Blind intersection",
      scenario: "You're driving a loaded forklift toward a **cross aisle** where racking blocks your view of foot traffic.",
      visual: {
        type: "checklist",
        title: "Approaching cross aisle",
        subtitle: "Operator view",
        items: [
          { label: "View of cross traffic", status: "bad", value: "Blocked by racking", hl: true },
          { label: "Convex mirror", status: "ok", value: "Installed" },
          { label: "Pedestrians nearby", status: "warn", value: "Likely" }
        ]
      },
      ask: "What do you do at the intersection?",
      options: [
        { text: "Slow down, sound the horn, check the mirror, and proceed only when it's clear", correct: true },
        { text: "Keep your speed; pedestrians should be watching for you", note: "Operators slow down and warn at obstructed locations." },
        { text: "Flash your lights and go", note: "Slow down and sound the horn where vision is obstructed." },
        { text: "Speed up to clear the intersection quickly", note: "Faster means a longer stopping distance." }
      ],
      why: "29 CFR 1910.178(n)(4): slow down and sound the horn at cross aisles and other places where vision is obstructed. OSHA's pedestrian-traffic eTool recommends convex mirrors at blind aisle intersections.",
      practice: "Blind corner → **slow down, sound the horn, check the mirror.**",
      sources: [3, 1]
    },
    {
      label: "Scenario 2 · Load blocks your view",
      scenario: "You pick up a **tall stack of empty cartons** that blocks your forward view.",
      visual: {
        type: "checklist",
        title: "Travel check",
        subtitle: "Bulky load",
        items: [
          { label: "Forward view", status: "bad", value: "Blocked", hl: true },
          { label: "Route", status: "warn", value: "Busy main aisle" }
        ]
      },
      ask: "How do you travel?",
      options: [
        { text: "Travel in reverse with the load trailing, looking in the direction of travel", correct: true },
        { text: "Drive forward and lean out to see around the load", note: "Leaning out puts you outside the truck's protection and still leaves blind spots." },
        { text: "Drive forward slowly and rely on the horn", note: "You still can't see where you're going." },
        { text: "Raise the load high so you can see under it", note: "That leaves a raised load over a busy aisle. Travel with the load trailing instead." }
      ],
      why: "29 CFR 1910.178(n)(4): if the load blocks the forward view, travel with the load trailing. 1910.178(n)(6): look in the direction of travel and keep a clear view of the path. OSHA's eTool says to use a spotter if the view is obstructed.",
      practice: "Load blocks the view → **travel with the load trailing**, looking where you're going.",
      sources: [3, 2]
    },
    {
      label: "Scenario 3 · Reversing in a loud area",
      scenario: "You need to back out of a bay in the **press room**, where it's loud. Your truck has a back-up alarm.",
      visual: {
        type: "checklist",
        title: "Reversing",
        subtitle: "Press room",
        items: [
          { label: "Back-up alarm", status: "ok", value: "Working" },
          { label: "Noise level", status: "bad", value: "High", hl: true },
          { label: "Rear visibility", status: "warn", value: "Limited" }
        ]
      },
      ask: "What's the safe way to reverse?",
      options: [
        { text: "Look behind you, use the horn or warning light, and use a spotter or mirrors if visibility is limited", correct: true },
        { text: "Trust the back-up alarm; that's what it's for", note: "Don't assume people can hear it in a noisy area." },
        { text: "Reverse quickly so you're in the aisle for less time", note: "Speed cuts your reaction time." },
        { text: "Watch the forks in front of you as you back up", note: "Look in the direction of travel: behind you." }
      ],
      why: "OSHA eTool (traveling and maneuvering): use a horn or warning light to warn pedestrians when reversing, look behind you, and consider ground guides, mirrors or spotters. Don't assume pedestrians can hear a back-up alarm.",
      practice: "Reversing → **look back, horn or light, spotter or mirrors**; don't rely on the alarm.",
      sources: [2]
    },
    {
      label: "Scenario 4 · On foot",
      scenario: "Now you're **on foot**, heading to the shipping office. The marked walkway takes a longer route; the main forklift aisle is shorter.",
      visual: {
        type: "checklist",
        title: "Route choice",
        subtitle: "Pedestrian",
        items: [
          { label: "Marked walkway", status: "ok", value: "Longer" },
          { label: "Main forklift aisle", status: "bad", value: "Shorter, busy", hl: true },
          { label: "Forklifts operating", status: "warn", value: "3 in area" }
        ]
      },
      ask: "Which way do you go?",
      options: [
        { text: "Use the marked walkway (or stay to one side of the aisle) and stand clear of trucks in operation", correct: true },
        { text: "The main aisle, since forklifts can stop on a dime", note: "Lift trucks can't stop suddenly." },
        { text: "Walk down the center of the aisle so drivers can see you", note: "Use walkways or stay to one side." },
        { text: "The main aisle, wearing earbuds to block the noise", note: "You need to hear horns and alarms." }
      ],
      why: "OSHA eTool (pedestrian traffic): use pedestrian walkways or stay to one side of the equipment aisle, stand clear of lift trucks in operation, and remember that lift trucks can't stop suddenly. They're designed to stop slowly to protect the load and stay stable.",
      practice: "On foot → **walkways or one side of the aisle**; forklifts can't stop fast.",
      sources: [1]
    },
    {
      label: "Scenario 5 · Under the forks",
      scenario: "A forklift is holding a pallet **raised to the second rack level**. A coworker wants to duck under it to grab a clipboard.",
      visual: {
        type: "checklist",
        title: "Raised load",
        subtitle: "Rack level 2",
        items: [
          { label: "Forks", status: "warn", value: "Raised ~8 ft" },
          { label: "Person heading under", status: "bad", value: "Yes", hl: true }
        ]
      },
      ask: "What's the rule?",
      options: [
        { text: "No one stands or passes under raised forks or a load. Stop them and wait", correct: true },
        { text: "It's fine if they're quick", note: "Loads can fall without warning." },
        { text: "It's fine if the operator holds the controls still", note: "The rule applies whether the truck is loaded or empty." },
        { text: "It's fine if they wear a hard hat", note: "A hard hat won't stop a falling pallet." }
      ],
      why: "29 CFR 1910.178(m)(2): no person is allowed to stand or pass under the elevated portion of any truck, loaded or empty. OSHA's eTool: don't allow anyone under the load or lifting mechanism, and stay out of the path where a load could fall.",
      practice: "**Never under raised forks or a load**, loaded or empty.",
      sources: [3, 1]
    },
    {
      label: "Scenario 6 · A ride",
      scenario: "At break, a coworker asks for a **ride on the forks** to the other end of the building.",
      visual: {
        type: "checklist",
        title: "Rider request",
        subtitle: "Sit-down truck",
        items: [
          { label: "Seats on truck", status: "warn", value: "1 (operator)" },
          { label: "Passenger request", status: "bad", value: "On the forks", hl: true }
        ]
      },
      ask: "What do you say?",
      options: [
        { text: "No. Forklifts never carry passengers, on the forks or anywhere else", correct: true },
        { text: "OK, if you drive slowly", note: "No passengers, at any speed." },
        { text: "OK, but they have to stand on the step instead", note: "Still a passenger." },
        { text: "OK, on a pallet on the forks", note: "A pallet doesn't make it a work platform." }
      ],
      why: "29 CFR 1910.178(m)(3): unauthorized personnel are not permitted to ride on powered industrial trucks. OSHA's eTool says it plainly: never carry passengers.",
      practice: "**No riders.** Ever.",
      sources: [3, 2]
    },
    {
      label: "Scenario 7 · Close call",
      scenario: "You're driving down an aisle. A worker is **restocking with their back to you** and there isn't enough room to pass safely.",
      visual: {
        type: "checklist",
        title: "Aisle ahead",
        subtitle: "Operator view",
        items: [
          { label: "Pedestrian aware of you", status: "bad", value: "No", hl: true },
          { label: "Room to pass", status: "bad", value: "Not enough" }
        ]
      },
      ask: "What do you do?",
      options: [
        { text: "Stop, yield, and get their attention (horn, then ask them to move), making eye contact before you go", correct: true },
        { text: "Squeeze past slowly; they'll hear you", note: "Without safe clearance, don't pass." },
        { text: "Drive closer so they notice you", note: "Keep a safe distance from people on foot." },
        { text: "Sound a long horn blast and keep rolling", note: "Warning isn't enough without safe clearance. Yield." }
      ],
      why: "OSHA eTool (pedestrian traffic): yield the right of way to pedestrians, and if there isn't enough safe clearance, warn them by asking them to move. Warn of your approach by horn, hand signal or light, keep a safe distance, and make eye contact when possible.",
      practice: "Not enough room → **stop, yield, warn, ask them to move, make eye contact.**",
      sources: [1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 4, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 7, title: "Perfect score", text: "Sharp awareness. Keep it up every shift, on the truck and on foot." }
  ],
  takeaway: "The pattern: **slow and sound at blind spots → see where you're going → yield to people on foot → nobody under the forks, nobody riding.**",
  sources: [
    { short: "OSHA eTool: Pedestrian traffic", title: "OSHA eTool: Powered Industrial Trucks (Forklift), Understanding the Workplace, Pedestrian Traffic", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/pedestrian-traffic" },
    { short: "OSHA eTool: Traveling and maneuvering", title: "OSHA eTool: Powered Industrial Trucks (Forklift), Operating the Forklift, Traveling and Maneuvering", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" },
    { short: "29 CFR 1910.178", title: "OSHA 29 CFR 1910.178: Powered industrial trucks", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. Follow your site's traffic plan and the truck manufacturer's manual.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own floor layout, traffic rules and equipment? See how a customized version works.", url: "../contact/", label: "Get this customized for your SOP" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program. Forklift operators also need the training and evaluation required by 29 CFR 1910.178(l)."
  ]
};
