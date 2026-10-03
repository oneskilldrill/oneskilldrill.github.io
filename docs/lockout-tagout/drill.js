/* Drill data: Lockout/tagout.
   Built only from public OSHA material listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "lockout-tagout",
  brand: "One Skill Drill",
  kicker: "One Skill Drill · Workplace safety",
  title: "Lockout/tagout (LOTO)",
  intro: "Eight calls an authorized employee makes when servicing a machine: the sequence, real isolation, stored energy, verification, group work, locks vs. tags, a forgotten lock, and restart. Pick the best answer, get instant feedback with the OSHA source, and see your score. Takes about 5 minutes.",
  meta: ["8 decisions", "About 5 min", "Based on 29 CFR 1910.147"],
  questions: [
    {
      label: "Scenario 1 · The sequence",
      scenario: "A case packer jams and you're the authorized employee assigned to clear it and replace a worn belt.",
      visual: {
        type: "checklist",
        title: "Energy control steps",
        subtitle: "Order?",
        items: [
          { label: "Notify affected employees", status: "todo", value: "Step ?" },
          { label: "Shut the machine down normally", status: "todo", value: "Step ?" },
          { label: "Isolate energy and apply your lock", status: "todo", value: "Step ?" },
          { label: "Release stored energy, then verify", status: "todo", value: "Step ?" }
        ]
      },
      ask: "Which order is right?",
      options: [
        { text: "Prepare and notify → shut down → isolate and lock → release stored energy → verify", correct: true },
        { text: "Lock the disconnect → shut down → notify afterwards", note: "Shut down first, in an orderly way, and notify affected employees before you apply devices." },
        { text: "Shut down → start work → lock out if it takes longer than 10 minutes", note: "No servicing until the machine is isolated, locked and verified." },
        { text: "Notify → lock → verify → shut down", note: "Verification comes last, after shutdown, isolation and stored-energy release." }
      ],
      why: "29 CFR 1910.147(c)(9) and (d): notify affected employees, then prepare (know the energy type, magnitude and hazards), do an orderly shutdown, isolate every energy source, apply lockout devices, relieve or restrain stored energy, and verify isolation before work starts.",
      practice: "**Notify → shut down → isolate → lock → release stored energy → verify.**",
      sources: [1, 2]
    },
    {
      label: "Scenario 2 · What counts as isolation?",
      scenario: "A coworker says: \"Just hit the e-stop and the selector switch to OFF. That's locked out.\"",
      visual: {
        type: "checklist",
        title: "Case packer controls",
        subtitle: "Energy sources",
        items: [
          { label: "E-stop", status: "todo", value: "Push button" },
          { label: "Selector switch", status: "todo", value: "Rotary, OFF" },
          { label: "Main disconnect", status: "todo", value: "Lockable handle" },
          { label: "Air supply valve", status: "todo", value: "Lockable" }
        ]
      },
      ask: "What do you lock?",
      options: [
        { text: "The main disconnect and the air supply valve: every energy isolating device", correct: true },
        { text: "The e-stop, since it stops everything", note: "Push buttons and selector switches are control-circuit devices, not energy isolating devices." },
        { text: "The selector switch, with a tag on it", note: "A control circuit can fail or be bypassed. Isolate the energy itself." },
        { text: "Just the main disconnect; air doesn't count", note: "Pneumatic energy can move parts too. Isolate every source." }
      ],
      why: "29 CFR 1910.147(b), definition of energy isolating device: push buttons, selector switches and other control-circuit devices are not energy isolating devices. (d)(3): all energy isolating devices needed to control the energy are physically located and operated to isolate the machine.",
      practice: "Lock the **energy isolating devices** (disconnects, valves), not e-stops or switches.",
      sources: [1]
    },
    {
      label: "Scenario 3 · Stored energy",
      scenario: "Different job: a hydraulic press. The disconnect is locked, but the **ram is raised** and the gauge still shows **pressure in the accumulator**.",
      visual: {
        type: "checklist",
        title: "Hydraulic press",
        subtitle: "After lockout",
        items: [
          { label: "Electrical disconnect", status: "ok", value: "Locked" },
          { label: "Ram position", status: "warn", value: "Raised", hl: true },
          { label: "Accumulator pressure", status: "bad", value: "Charged", hl: true }
        ]
      },
      ask: "What's next before reaching in?",
      options: [
        { text: "Block the ram and bleed off the hydraulic pressure per the procedure", correct: true },
        { text: "Nothing; with the power locked out, the press can't move", note: "Stored pressure and gravity can still drop the ram." },
        { text: "Work quickly while the gauge bleeds down on its own", note: "Relieve or restrain stored energy before work, don't race it." },
        { text: "Hang a tag on the gauge", note: "A tag doesn't relieve pressure or hold up a ram." }
      ],
      why: "29 CFR 1910.147(d)(5)(i): after locks are applied, all potentially hazardous stored or residual energy is relieved, disconnected, restrained or otherwise made safe. (d)(5)(ii): if stored energy could build up again, keep verifying until servicing is done.",
      practice: "After locking: **relieve, block or bleed stored energy** (pressure, springs, gravity).",
      sources: [1, 2]
    },
    {
      label: "Scenario 4 · Verify",
      scenario: "Back on the case packer: everything is locked and stored energy is released. You're ready to reach into the machine.",
      visual: {
        type: "checklist",
        title: "Before hands go in",
        subtitle: "Last step",
        items: [
          { label: "Locks applied", status: "ok", value: "Done" },
          { label: "Stored energy released", status: "ok", value: "Done" },
          { label: "Isolation verified", status: "todo", value: "?", hl: true }
        ]
      },
      ask: "How do you finish?",
      options: [
        { text: "With everyone clear, try the normal start controls to confirm nothing moves, then return them to off", correct: true },
        { text: "Trust the locks; testing is redundant", note: "Verification is a required step. Wrong disconnects get locked all the time." },
        { text: "Ask the operator if it's off", note: "You verify it yourself before work starts." },
        { text: "Listen; if it's quiet, it's off", note: "A quiet machine can still be energized." }
      ],
      why: "29 CFR 1910.147(d)(6): before starting work on machines that have been locked out, the authorized employee verifies that isolation and deenergization have been accomplished. A common method is a start attempt with everyone clear, then controls back to off, following your written procedure.",
      practice: "**Verify** before work: everyone clear, try start, controls back to off.",
      sources: [1]
    },
    {
      label: "Scenario 5 · Group lockout",
      scenario: "Three mechanics are rebuilding the conveyor drive together. The supervisor offers to put **one lock** on for the whole crew.",
      visual: {
        type: "checklist",
        title: "Crew on the job",
        subtitle: "Group lockout",
        items: [
          { label: "Mechanic A", status: "todo", value: "Lock?" },
          { label: "Mechanic B", status: "todo", value: "Lock?" },
          { label: "Mechanic C (you)", status: "todo", value: "Lock?", hl: true }
        ]
      },
      ask: "How should the crew lock out?",
      options: [
        { text: "Each mechanic puts their own personal lock on the group lockout device", correct: true },
        { text: "One supervisor lock covers everyone", note: "Each person working needs their own lock, so no one can be locked in by someone else's removal." },
        { text: "Share one lock and pass the key around", note: "Your lock and key stay under your control." },
        { text: "Tags only, since the crew is all here", note: "Group work still uses personal locks." }
      ],
      why: "29 CFR 1910.147(f)(3)(ii)(D): in group lockout, each authorized employee affixes a personal lockout device to the group lockout device, group lockbox or comparable mechanism when they begin work and removes it when they stop.",
      practice: "Group job → **everyone applies their own personal lock.**",
      sources: [1]
    },
    {
      label: "Scenario 6 · Lock or tag?",
      scenario: "The disconnect **has a lockable handle**, but your lock is in your truck across the lot. There's a tag in your pocket.",
      visual: {
        type: "checklist",
        title: "Disconnect",
        subtitle: "Capable of lockout",
        items: [
          { label: "Lockable handle", status: "ok", value: "Yes", hl: true },
          { label: "Your lock", status: "warn", value: "In truck" },
          { label: "Tag", status: "warn", value: "In pocket" }
        ]
      },
      ask: "What do you do?",
      options: [
        { text: "Get your lock and lock it out; a tag alone isn't the default here", correct: true },
        { text: "Hang the tag; it's the same thing", note: "Tags are warnings, not physical restraints." },
        { text: "Tape the handle in the off position", note: "Tape isn't a lockout device." },
        { text: "Ask a coworker to stand by the disconnect", note: "A person standing guard isn't an energy control device." }
      ],
      why: "29 CFR 1910.147(c)(2): if an energy isolating device can't be locked out, use tagout. If it can be locked out, use lockout, unless the employer can show a tagout program gives full employee protection (c)(3). Tags don't physically stop someone from turning the energy on.",
      practice: "If it **can take a lock, lock it**; tags alone are the exception.",
      sources: [1]
    },
    {
      label: "Scenario 7 · Someone else's lock",
      scenario: "Next shift, the line is needed. A day-shift mechanic's **lock is still on** the disconnect and they've gone home.",
      visual: {
        type: "checklist",
        title: "Disconnect",
        subtitle: "Shift change",
        items: [
          { label: "Lock owner", status: "warn", value: "Off site", hl: true },
          { label: "Bolt cutters", status: "bad", value: "In toolroom" },
          { label: "Spare key", status: "bad", value: "Office drawer" }
        ]
      },
      ask: "Who can remove that lock, and how?",
      options: [
        { text: "Only under the employer's written procedure: verify they're off site, try to reach them, and inform them before they return", correct: true },
        { text: "Cut it off; production needs the line", note: "Cutting a lock outside the procedure defeats the whole program." },
        { text: "Use the spare key from the office drawer", note: "Same problem. Removal by someone else has strict conditions." },
        { text: "Run the line around it with the bypass switch", note: "Never bypass an applied lockout." }
      ],
      why: "29 CFR 1910.147(e)(3): each device is removed by the employee who applied it. The only exception is under a specific employer procedure: the supervisor verifies the employee isn't at the facility, makes all reasonable efforts to contact them, and ensures they know before they resume work.",
      practice: "Only the person who applied it removes it; the exception is a **written procedure** with **verify, contact, inform.**",
      sources: [1]
    },
    {
      label: "Scenario 8 · Restoring energy",
      scenario: "The belt is replaced. You're ready to remove your lock and restart the case packer.",
      visual: {
        type: "checklist",
        title: "Release from lockout",
        subtitle: "Before restart",
        items: [
          { label: "Tools and parts", status: "todo", value: "?" },
          { label: "Guards", status: "todo", value: "?" },
          { label: "People near the machine", status: "todo", value: "?" },
          { label: "Affected employees", status: "todo", value: "?" }
        ]
      },
      ask: "What has to happen?",
      options: [
        { text: "Clear tools, reinstall guards, check everyone is safely clear, remove your own lock, and notify affected employees", correct: true },
        { text: "Pull your lock and hit start; the job's done", note: "Check the machine and the people around it first." },
        { text: "Have the operator remove your lock at shift end", note: "You remove the lock you applied." },
        { text: "Restart first to test, then reinstall guards", note: "Guards and tools come first, before energy is restored." }
      ],
      why: "29 CFR 1910.147(e)(1): inspect the area so nonessential items are removed and components are intact. (e)(2): make sure employees are safely positioned or removed, and notify affected employees after lockout devices are removed and before the machine is started. (e)(3): each device is removed by the employee who applied it.",
      practice: "Before restart: **area clear, guards on, people clear, your lock off, everyone notified.**",
      sources: [1]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to review." },
    { min: 5, title: "Solid", text: "Most of the calls are right. Review the items below." },
    { min: 8, title: "Perfect score", text: "Sharp energy-control habits. Keep them up on every job." }
  ],
  takeaway: "The pattern: **notify → shut down → isolate → lock (your own) → release stored energy → verify** … and on the way out: **clear, notify, remove your own lock.**",
  sources: [
    { short: "29 CFR 1910.147", title: "OSHA 29 CFR 1910.147: The control of hazardous energy (lockout/tagout)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" },
    { short: "OSHA: Control of Hazardous Energy", title: "OSHA Safety and Health Topics: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
  ],
  sourcesNote: "Based on public OSHA material as of October 2026. Your employer's written energy control procedure for each machine governs the exact steps.",
  disclaimer: "**Training supplement only.** Not a substitute for OSHA-required training, certification, or your employer's written program.",
  cta: { title: "Get this customized for your SOP", text: "Want this drill rebuilt around your own machines, energy control procedures and site rules? Rebranded with your company name, if you like. See how it works.", url: "../contact/", label: "Get this customized for your SOP", email: "oneskilldrill@outlook.com" },
  moreUrl: "../#safety",
  moreLabel: "More safety drills",
  footer: [
    "Independent practice drill. Not affiliated with or endorsed by OSHA or the U.S. Department of Labor.",
    "Training supplement only. Not a substitute for OSHA-required training, certification, or your employer's written program."
  ]
};
