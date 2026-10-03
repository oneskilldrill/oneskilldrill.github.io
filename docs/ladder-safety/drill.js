/* Drill data: Ladder safety.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "ladder-safety",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Workplace safety",
  title: "Ladder safety",
  intro: "Seven real-world ladder calls: inspection, setup angle, roof access, power lines, carrying tools, stepladders and overreaching. Pick the best answer, get instant feedback with the OSHA source, and see your score. Takes about 4 minutes.",
  meta: ["7 decisions", "About 4 min", "Based on OSHA ladder rules"],
  questions: [
    {
      label: "Scenario 1 · Pre-use inspection",
      scenario: "You grab the 24 ft extension ladder from the rack. During your quick check you find a **cracked rung** about halfway up.",
      visual: {
        type: "checklist",
        title: "Extension ladder · pre-use check",
        subtitle: "24 ft fiberglass",
        items: [
          { label: "Side rails", status: "ok", value: "No cracks" },
          { label: "Feet / safety shoes", status: "ok", value: "Present" },
          { label: "Rung locks and rope", status: "ok", value: "Working" },
          { label: "Rung 9", status: "bad", value: "Cracked", hl: true }
        ]
      },
      ask: "What do you do with this ladder?",
      options: [
        { text: "Tag it \"Do Not Use\" and remove it from service until it's repaired or discarded", correct: true },
        { text: "Use it, but step over the cracked rung", note: "Any damage means the ladder is out of service, not worked around." },
        { text: "Wrap the rung in tape and climb carefully", note: "Tape is not a repair. Defective ladders are withdrawn from service." },
        { text: "Put it back on the rack and grab another one", note: "Untagged, the next person may climb it." }
      ],
      why: "OSHA's Portable Ladder QuickCard: inspect before use, and remove any ladder with defects from service and tag it until it's repaired or discarded. 1926.1053(b)(16) and 1910.23(b)(10) say the same: mark or tag it \"Do Not Use\" and withdraw it.",
      practice: "Damaged ladder → **tag it \"Do Not Use\" and remove it from service.**",
      sources: [1, 4, 5]
    },
    {
      label: "Scenario 2 · Setup angle",
      scenario: "You're leaning the extension ladder against a wall. The **working length** (from the base to the top support point) is **16 ft**.",
      visual: {
        type: "checklist",
        title: "Ladder setup",
        subtitle: "Non-self-supporting",
        items: [
          { label: "Working length", status: "ok", value: "16 ft" },
          { label: "Ground", status: "ok", value: "Firm, level" },
          { label: "Base distance from wall", status: "todo", value: "? ft", hl: true }
        ]
      },
      ask: "About how far from the wall should the base be?",
      options: [
        { text: "About 4 ft (one quarter of the working length)", correct: true },
        { text: "About 1 ft, as close to the wall as possible", note: "Too steep. The ladder can tip backward." },
        { text: "About 8 ft, so it's extra stable", note: "Too shallow. The base can kick out from under you." },
        { text: "It doesn't matter if someone holds the base", note: "The angle still matters. Set it right first." }
      ],
      why: "29 CFR 1926.1053(b)(5)(i): set non-self-supporting ladders so the horizontal distance from the top support to the foot is about one-quarter of the working length. OSHA's extension ladder fact sheet uses the same 4-to-1 rule.",
      practice: "**4-to-1 rule:** 1 ft out for every 4 ft of working length.",
      sources: [4, 2]
    },
    {
      label: "Scenario 3 · Roof access",
      scenario: "You need to **step off the ladder onto a flat roof** to check a rooftop unit.",
      visual: {
        type: "checklist",
        title: "Access to upper landing",
        subtitle: "Flat roof",
        items: [
          { label: "Ladder secured at top", status: "warn", value: "Not yet" },
          { label: "Side rails above roof edge", status: "todo", value: "? ft", hl: true }
        ]
      },
      ask: "How should the ladder be set up for this?",
      options: [
        { text: "Side rails extend at least 3 ft above the roof edge (or the top is secured with a grab device)", correct: true },
        { text: "Rails even with the roof edge, so you can step straight across", note: "With nothing to hold, the step-off is where people fall." },
        { text: "Rails 1 ft above the edge is plenty", note: "OSHA's minimum is 3 ft." },
        { text: "Any height works if a coworker foots the ladder", note: "Footing the base doesn't give you a handhold at the top." }
      ],
      why: "29 CFR 1926.1053(b)(1) and 1910.23: when a portable ladder is used to reach an upper landing, the side rails extend at least 3 ft above it, or the ladder is secured at the top with a grasping device. OSHA's QuickCard repeats the 3 ft rule.",
      practice: "Stepping onto a roof → **rails 3 ft above the landing**, or secured with a grab device.",
      sources: [4, 5, 1]
    },
    {
      label: "Scenario 4 · Overhead lines",
      scenario: "The job is under the eave, near the building's **overhead service line**. The truck has an aluminum ladder and a fiberglass one.",
      visual: {
        type: "checklist",
        title: "Site check",
        subtitle: "Exterior wall",
        items: [
          { label: "Overhead power line", status: "bad", value: "Nearby", hl: true },
          { label: "Aluminum extension ladder", status: "todo", value: "Available" },
          { label: "Fiberglass extension ladder", status: "todo", value: "Available" }
        ]
      },
      ask: "What's the right call?",
      options: [
        { text: "Use the fiberglass ladder, and keep the ladder and yourself at least 10 ft from the line", correct: true },
        { text: "Use the aluminum ladder because it's lighter to move", note: "Metal conducts. Avoid metal ladders near power lines." },
        { text: "Either ladder is fine if you work fast", note: "Contact with a line takes an instant." },
        { text: "Aluminum is fine because the feet are rubber", note: "Rubber feet don't make a metal ladder safe near energized lines." }
      ],
      why: "OSHA's QuickCard: look for overhead power lines before handling a ladder, and avoid metal ladders near power lines or exposed energized equipment. OSHA's extension ladder fact sheet: keep ladders at least 10 ft from power lines. 1926.1053(b)(12): use nonconductive side rails where the ladder could contact energized equipment.",
      practice: "Near power lines → **nonconductive ladder, and 10 ft of clearance.**",
      sources: [1, 2, 4]
    },
    {
      label: "Scenario 5 · Carrying materials",
      scenario: "You need a **25 lb box of fittings** at the top of the ladder.",
      visual: {
        type: "checklist",
        title: "Climb plan",
        subtitle: "Materials",
        items: [
          { label: "Box of fittings", status: "warn", value: "25 lb" },
          { label: "Tool belt", status: "ok", value: "On" },
          { label: "Hand line / rope", status: "ok", value: "In truck" }
        ]
      },
      ask: "How do you get it up there?",
      options: [
        { text: "Climb with 3 points of contact, then raise the box with a hand line", correct: true },
        { text: "Hold the box in one arm and climb with the other hand", note: "That's only two points of contact, with an off-balance load." },
        { text: "Climb fast so you're on the ladder for less time", note: "Speed doesn't replace contact and balance." },
        { text: "Rest the box on the rungs and push it up ahead of you", note: "Both hands end up on the box, not the ladder." }
      ],
      why: "OSHA's QuickCard: keep 3 points of contact (two hands and a foot, or two feet and a hand) and face the ladder. 29 CFR 1926.1053(b)(22): don't carry any object or load that could cause loss of balance. The extension ladder fact sheet says to use a tool belt or hand line.",
      practice: "**3 points of contact**; loads go up by **tool belt or hand line**.",
      sources: [1, 4, 2]
    },
    {
      label: "Scenario 6 · Stepladder reach",
      scenario: "You're on a 6 ft stepladder changing a light fixture, and you're **about a foot short**.",
      visual: {
        type: "checklist",
        title: "6 ft stepladder",
        subtitle: "Spreaders locked",
        items: [
          { label: "Spreaders", status: "ok", value: "Locked" },
          { label: "Highest standing step", status: "ok", value: "Reached" },
          { label: "Reach needed", status: "warn", value: "+1 ft", hl: true }
        ]
      },
      ask: "What do you do?",
      options: [
        { text: "Climb down and get a taller ladder", correct: true },
        { text: "Step onto the top cap for just a moment", note: "The top cap and top step are not for standing." },
        { text: "Stand on the pail shelf", note: "The pail shelf is not a step." },
        { text: "Fold the stepladder and lean it on the wall like a straight ladder", note: "A closed stepladder isn't made to be used as a single ladder." }
      ],
      why: "29 CFR 1926.1053(b)(13) and 1910.23(c)(8): don't use the top or top step of a stepladder as a step. OSHA's stepladder fact sheet and QuickCard: don't use a folded or partly closed stepladder as a single ladder. If you can't reach, get the right ladder.",
      practice: "Can't reach → **taller ladder**; never the top cap or a folded stepladder.",
      sources: [4, 5, 3]
    },
    {
      label: "Scenario 7 · Overreaching",
      scenario: "Halfway through, the next anchor point is **about 3 ft to your right**, outside the ladder's side rails.",
      visual: {
        type: "checklist",
        title: "On the ladder",
        subtitle: "Work position",
        items: [
          { label: "Body between the side rails", status: "ok", value: "Now" },
          { label: "Next work point", status: "warn", value: "3 ft right", hl: true }
        ]
      },
      ask: "What's the safe move?",
      options: [
        { text: "Climb down, move the ladder, and climb back up", correct: true },
        { text: "Lean out with one hand on the rail", note: "Leaning past the rails shifts your weight and tips the ladder." },
        { text: "Ask a coworker to slide the ladder over while you stay on it", note: "Never move a ladder with someone on it." },
        { text: "\"Walk\" the ladder sideways by rocking it", note: "That's moving a ladder with a person on it." }
      ],
      why: "OSHA's extension ladder fact sheet: keep your body near the middle of the step and don't lean out past the side rails. OSHA's QuickCard: don't move or shift a ladder while a person or equipment is on it.",
      practice: "Out of reach → **climb down and move the ladder**; stay between the rails.",
      sources: [2, 1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 4, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 7, title: "Perfect score", text: "Sharp ladder habits. Keep them up on every climb." }
  ],
  takeaway: "The pattern: **inspect → set it right (4-to-1, 3 ft above, away from lines) → 3 points of contact → stay inside the rails.**",
  sources: [
    { short: "OSHA Portable Ladder QuickCard", title: "OSHA QuickCard: Portable Ladder Safety", url: "https://www.osha.gov/sites/default/files/publications/PORTABLE_LADDER_QC.pdf" },
    { short: "OSHA 3660", title: "OSHA Fact Sheet 3660: Reducing Falls When Using Extension Ladders", url: "https://www.osha.gov/sites/default/files/publications/OSHA3660.pdf" },
    { short: "OSHA 3662", title: "OSHA Fact Sheet 3662: Reducing Falls When Using Stepladders", url: "https://www.osha.gov/sites/default/files/publications/OSHA3662.pdf" },
    { short: "29 CFR 1926.1053", title: "OSHA 29 CFR 1926.1053: Ladders (construction)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
    { short: "29 CFR 1910.23", title: "OSHA 29 CFR 1910.23: Ladders (general industry)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.23" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. Follow the ladder manufacturer's labels and your site's procedures.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own procedures, equipment and site rules? Rebranded with your company name, if you like. See how it works.", url: "../contact/", label: "Get this customized for your SOP" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program."
  ]
};
