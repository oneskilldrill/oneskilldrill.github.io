/* Drill data: Spot the scam (credit union member drill).
   ------------------------------------------------------------------
   REBRAND HERE: this one object controls the credit union's name, logo,
   colors and contact details used across the whole drill. "Sample CU" is
   fictional. Every number in the scenarios is a fictional 555-01xx number
   and every web address uses example.com.
   ------------------------------------------------------------------ */
window.CU_BRAND = Object.assign({
  name: "Sample CU",                 // credit union name shown in the header and the messages
  logoText: "SCU",                   // badge text used when there's no logo image
  logoUrl: "",                       // optional: "logo.png" next to this file, an https:// URL, or a data:image/... URI
  colors: { accent: "#1f4e9c", accentInk: "#ffffff", accentSoft: "#e7eefa" },
  website: "sample-cu.example.com",  // the real website members should type in themselves
  phone: "555-0100",                 // the real member service number (as printed on the card)
  tagline: "Member fraud awareness",
  fictional: true                    // true = show the "Sample CU is fictional" notes
}, window.CU_BRAND || {});

(function (B) {
  var slug = String(B.website).split(".")[0].replace(/[^a-z0-9-]/gi, "").toLowerCase() || "sample-cu";
  var fakeLink = slug + "-secure.example.com/login";
  window.DRILL = {
    id: "spot-the-scam",
    brand: "One Skill Drill",
    kicker: B.name + " · Spot the scam",
    title: "Spot the scam",
    intro: "Eleven calls, texts and messages like the ones scammers really send. For each one, pick the safest thing to do. You'll see why right away, with the warning sign and where the advice comes from. Scammers are good at this. Slowing down is the win.",
    meta: ["11 situations", "About 6 min", "Practice only"],
    largeText: true,
    header: { name: B.name, logoText: B.logoText, logoUrl: B.logoUrl, tag: B.tagline },
    theme: { "accent": B.colors.accent, "accent-ink": B.colors.accentInk, "accent-soft": B.colors.accentSoft },
    questions: [
      {
        label: "1 of 11 · A family emergency call",
        scenario: "Your phone rings late in the evening.",
        visual: {
          type: "message", channel: "call", from: "Unknown caller", fromDetail: "555-0163", time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "Grandma, it's me. I'm in jail. Please don't tell Mom." },
            { who: "them", label: "\"Lawyer\"", text: "I represent your grandson. Bail is $2,500. You can pay with gift cards or I'll send someone to pick up cash." }
          ],
          note: "The voice sounds a lot like your grandson."
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Hang up and call your grandson, or another relative, at a number you already know", correct: true },
          { text: "Pay quickly. It's family, and it's an emergency", note: "Rushing you is the scammer's main tool." },
          { text: "Keep it secret, like he asked", note: "Secrecy keeps you from checking with family." },
          { text: "Buy the gift cards, since you'd rather not hand over cash", note: "Paying with gift cards is a sign of a scam." }
        ],
        why: "The FTC says fake emergency scams share a pattern: it's urgent, it's secret, and they want money fast by cash, gift card, wire, payment app or cryptocurrency. Voices can be faked with voice-cloning programs.",
        rule: [
          { cite: "FTC: Scammers Use Fake Emergencies", text: "The scammer might tell you it's important to keep it secret." },
          { cite: "FTC: Scammers Use Fake Emergencies", text: "Use a phone number you know is right to call or message the family member or friend who (supposedly) contacted you." }
        ],
        practice: "Emergency + secret + gift cards or cash → **hang up and call them yourself.**",
        sources: [1]
      },
      {
        label: "2 of 11 · A call from the \"fraud department\"",
        scenario: "Someone calls saying they're from your credit union.",
        visual: {
          type: "message", channel: "call", from: B.name + " Fraud Dept", fromDetail: "555-0148", time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "This is Pat with " + B.name + " fraud. We see a $640 charge at SAMPLE-MART #0417. Was that you?" },
            { who: "you", text: "No!" },
            { who: "them", label: "Caller", text: "I'll block it. I just texted you a code. Read it to me so I can confirm it's you." }
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Don't share the code. Hang up and call the number on your card or statement", correct: true },
          { text: "Read the code. They already know about the charge", note: "Scammers make up charges, and some already know details about you." },
          { text: "Share the code but not your password", note: "The code is the key. With it they can get into your account." },
          { text: "Ask them to text the code again so you can be sure", note: "Any request for your code is the warning sign." }
        ],
        why: "The code we text you is only for you to type in yourself. Anyone who asks for it, even someone who says they're from your credit union, is a scammer.",
        rule: [
          { cite: "FTC: Got a call about fraud activity on your bank account?", text: "No caller — especially someone from your bank or investment company's fraud department — will ever ask for the verification code. That's always a scam." },
          { cite: "FTC: What's a verification code?", text: "Anyone who asks you for your account verification code is a scammer." },
          { cite: "NCUA (MyCreditUnion.gov): Frauds and Scams", text: "If you receive such a call, note the department they claim to be from and return the call using the number you have for your credit union on file." }
        ],
        practice: "Anyone asking for the code we text you → **hang up and call the number on your card.**",
        sources: [3, 2, 4]
      },
      {
        label: "3 of 11 · Caller ID says it's us",
        scenario: "Your phone shows **" + B.name + "** as the caller.",
        visual: {
          type: "message", channel: "call", from: B.name, fromDetail: B.phone, time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "Your debit card has been locked for your protection. To unlock it, please confirm your full card number and your PIN." }
          ],
          note: "The name and number on your screen match " + B.name + "."
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Caller ID can be faked. Hang up and call back at a number you look up yourself", correct: true },
          { text: "It's safe, because caller ID matches", note: "Scammers can make any name or number show up." },
          { text: "Give the card number but not the PIN", note: "Don't give card details to someone who called you." },
          { text: "Ask them to stay on the line while you check", note: "Hang up first. Then call the number on your card." }
        ],
        why: "Caller ID can show a real name and number even when it's a scammer calling.",
        rule: [
          { cite: "FTC: Phone Scams", text: "The scammer can even have a fake name or number show up on your caller ID to convince you." },
          { cite: "FTC: How To Avoid a Government Impersonation Scam", text: "Don't trust your caller ID." }
        ],
        practice: "Caller ID looks right → **still hang up and call back yourself.**",
        sources: [6, 5]
      },
      {
        label: "4 of 11 · A warning on your computer",
        scenario: "You're reading the news online when this fills the screen:",
        visual: {
          type: "message", channel: "popup", from: "Browser warning", fromDetail: "support-alert.example.com", time: "",
          body: [
            "VIRUS DETECTED",
            "Your computer may be infected. Call Support at 555-0187 now. Do not shut down your computer."
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Don't call. Close the browser (or restart) and ask someone you trust. Never let a stranger take control of your computer", correct: true },
          { text: "Call the number so they can fix it", note: "The number on a pop-up leads to the scammer." },
          { text: "Call, but don't let them in remotely", note: "Don't call the number at all." },
          { text: "Leave it on, like the warning says", note: "Closing the browser or restarting is fine." }
        ],
        why: "A warning that pushes you to call a phone number right away is the red flag.",
        rule: [
          { cite: "FTC: Tech Support Scams", text: "Tech support scams often start with a bogus warning about a problem with your computer." },
          { cite: "FBI IC3: Tech/Customer Support and Government Impersonation", text: "Do not contact the telephone number provided in a pop-up, text, or email." },
          { cite: "FBI IC3: Tech/Customer Support and Government Impersonation", text: "Do not allow an unknown individual who contacted you to have control of your devices or accounts." }
        ],
        practice: "Pop-up with a phone number → **don't call; close it.**",
        sources: [7, 8]
      },
      {
        label: "5 of 11 · Someone you met online",
        scenario: "You've been chatting for weeks with Michael, a match from a dating site. You've never met in person.",
        visual: {
          type: "message", channel: "chat", from: "Michael", fromDetail: "Dating app message", time: "8:05 PM",
          body: [
            "I can't wait to finally meet you. I'm stuck on the oil rig until my pay clears.",
            "Could you send $900 for my plane ticket? I'll pay you back the day I land."
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Don't send money to someone you haven't met in person. Talk it over with someone you trust", correct: true },
          { text: "Send it, since he promised to pay you back", note: "Once the money is sent, it's usually gone." },
          { text: "Send a smaller amount first to test him", note: "Any amount goes to the scammer." },
          { text: "Send a gift card instead of cash", note: "Gift cards are a favorite way for scammers to get paid." }
        ],
        why: "The FTC says romance scammers often claim they're overseas, on an oil rig or in the military, and then ask for money. The FBI adds that some of these \"relationships\" lead into an investment pitch.",
        rule: [
          { cite: "FTC: What To Know About Romance Scams", text: "Never send money or gifts to a sweetheart you haven't met in person." },
          { cite: "FBI IC3: Investment Fraud", text: "Once trust is established with victims, criminals introduce the topic of investing." }
        ],
        practice: "Online sweetheart asks for money → **don't send it; talk to someone you trust.**",
        sources: [9, 10]
      },
      {
        label: "6 of 11 · Pay with gift cards",
        scenario: "A caller says he's from your power company.",
        visual: {
          type: "message", channel: "call", from: "Sample Power Co.", fromDetail: "555-0179", time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "Your account is past due. Your power will be shut off in one hour unless you buy gift cards and read me the numbers on the back." }
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Hang up. Only scammers ask for payment with gift cards", correct: true },
          { text: "Buy the cards so the power stays on", note: "No real company asks you to pay with gift cards." },
          { text: "Read them just one card's numbers", note: "Once they have the numbers, the money is gone." },
          { text: "Ask to pay with a different kind of gift card", note: "Any gift card payment demand is a scam." }
        ],
        why: "If you're worried about your bill, call the number on your paper bill or the company's real website.",
        rule: [{ cite: "FTC: Avoiding and Reporting Gift Card Scams", text: "No real business or government agency will ever tell you to buy a gift card to pay them." }],
        practice: "Asked to pay with gift cards → **hang up. It's a scam.**",
        sources: [11]
      },
      {
        label: "7 of 11 · \"Send the money to yourself\"",
        scenario: "A caller says she's from " + B.name + ".",
        visual: {
          type: "message", channel: "call", from: B.name + " Member Services", fromDetail: "555-0152", time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "To reverse that fraud charge, send the money to yourself through your payment app. I'll walk you through it step by step." }
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Hang up and call " + B.name + " yourself. Your credit union won't tell you to move money to \"protect\" or \"reverse\" it", correct: true },
          { text: "Follow the steps. Sending money to yourself is safe", note: "The \"account in your name\" really belongs to the scammer." },
          { text: "Send a small test amount first", note: "Any amount you send goes to the scammer." },
          { text: "Stay on the line while you open the app", note: "Hang up first, then call the number on your card." }
        ],
        why: "Money sent through a payment app is like cash and very hard to get back. Related trick: if a stranger \"accidentally\" pays you and asks for it back, don't send a new payment. Contact your credit union or the app instead.",
        rule: [
          { cite: "FTC: Do you use payment apps?", text: "To \"protect\" your account, the scammer tells you step-by-step instructions to transfer money from your bank account into a new account in your name. But that new account really belongs to the scammer, so after you make the transfer, your money will be gone." },
          { cite: "FTC: Got a call about fraud activity on your bank account?", text: "Someone who says you have to move your money to protect it is a scammer." },
          { cite: "FTC (MilitaryConsumer.gov): Payment Apps", text: "Don't create a new payment to return the money." }
        ],
        practice: "Told to move money to fix fraud → **hang up and call your credit union yourself.**",
        sources: [12, 3, 13]
      },
      {
        label: "8 of 11 · A text with a link",
        scenario: "This text arrives:",
        visual: {
          type: "message", channel: "sms", from: "Text message", fromDetail: "From 555-0191", time: "Today 9:12 AM",
          body: [B.name + ": Your card is locked. Verify now:"],
          link: fakeLink,
          note: "The real " + B.name + " website is " + B.website + "."
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Don't tap it. Open your " + B.name + " app, type the address you know, or call the number on your card", correct: true },
          { text: "Tap it, since it has the credit union's name in it", note: "Anyone can put a real name in a fake web address." },
          { text: "Reply and ask if it's real", note: "Replying goes to the scammer." },
          { text: "Tap it, but don't type your password", note: "Don't open links in unexpected texts at all." }
        ],
        why: "Look closely: the link is " + fakeLink.split("/")[0] + ", not " + B.website + ". Fake addresses often add a word or change one letter.",
        rule: [
          { cite: "FTC: How To Recognize and Report Spam Text Messages", text: "Legitimate companies won't ask for information about your account by text. If you think the message might be real, contact the company using a phone number or website you know is real." },
          { cite: "NCUA: Heightened Risk of Social Engineering and Phishing Attacks", text: "some web addresses may also look official but include a subtle change, for example, 0 instead of O" }
        ],
        practice: "Unexpected text with a link → **don't tap; go to the app or call the number on your card.**",
        sources: [14, 15]
      },
      {
        label: "9 of 11 · The \"IRS\" calls",
        scenario: "A caller says he's from the government.",
        visual: {
          type: "message", channel: "call", from: "Unknown caller", fromDetail: "555-0135", time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "This is the IRS. You owe back taxes. Pay today with a prepaid card or a warrant will be issued for your arrest." }
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Hang up. Government agencies don't call to demand money or threaten arrest", correct: true },
          { text: "Pay today to avoid arrest", note: "Threats and deadlines are pressure tactics." },
          { text: "Give your Social Security number so they can look it up", note: "Don't give personal information to someone who called you." },
          { text: "Ask for a badge number, then pay", note: "Scammers can make up any badge number." }
        ],
        why: "If you're worried, contact the agency at a number you know is correct, not one the caller gives you.",
        rule: [
          { cite: "FTC: How To Avoid a Government Impersonation Scam", text: "Government agencies will never call, email, text, or message you on social media to ask for money or personal information. Only a scammer will do that." },
          { cite: "FBI IC3: Tech/Customer Support and Government Impersonation", text: "The US Government and Law Enforcement will never request you send money via wire transfer to foreign accounts, cryptocurrency, cryptocurrency ATMs, gift/prepaid cards, or by shipping/mailing cash or precious metals." }
        ],
        practice: "\"Government\" call demanding money → **hang up.**",
        sources: [5, 8]
      },
      {
        label: "10 of 11 · A check for too much",
        scenario: "You're selling a used bike online for $300. A buyer mails you a check.",
        visual: {
          type: "message", channel: "chat", from: "Buyer", fromDetail: "Marketplace message", time: "Yesterday",
          body: [
            "Oops, I sent a check for $1,800 by mistake. Please deposit it and send me back the extra $1,500 today."
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Don't send any money back. Money showing in your account doesn't mean the check is good. Ask " + B.name + " first", correct: true },
          { text: "Deposit it and send the difference once the money shows up", note: "Funds can show up before the check is found to be fake." },
          { text: "Send the extra back with a payment app", note: "When the check bounces, you'd owe the money." },
          { text: "Wait one day, then send it back", note: "A fake check can take weeks to be discovered." }
        ],
        why: "When a fake check bounces, you're the one who owes the money back.",
        rule: [
          { cite: "FTC: Fake Check Scams", text: "It's usually for more than they owe you, and it's sometimes for several thousand dollars. They tell you to send some of the money back to them or to another person." },
          { cite: "FTC: Fake Check Scams", text: "Even if you see the funds in your account, that doesn't mean it's a good check. Fake checks can take weeks to be discovered and untangled." }
        ],
        practice: "Overpaid by check and asked to send money back → **don't. It's a scam.**",
        sources: [16]
      },
      {
        label: "11 of 11 · A \"sure thing\" investment",
        scenario: "A friend of a friend messages you.",
        visual: {
          type: "message", channel: "chat", from: "Rick", fromDetail: "Social media message", time: "2:40 PM",
          body: [
            "Guaranteed 20% a month, low risk. Just move your savings into this crypto app. My whole family is in!"
          ]
        },
        ask: "What's the safest thing to do?",
        options: [
          { text: "Walk away. Nobody can guarantee profits, and promised returns are a sign of a scam", correct: true },
          { text: "Try it with a small amount first", note: "Small amounts are often used to build trust before a bigger loss." },
          { text: "Invest, since a friend recommended it", note: "Scammers often use personal connections." },
          { text: "Invest if the app looks professional", note: "Fake apps and websites can look very real." }
        ],
        why: "There's nothing low-risk about a promise like this.",
        rule: [
          { cite: "FTC: What To Know About Cryptocurrency and Scams", text: "if a company or person promises you'll make a profit, that's a scam. Even if there's a celebrity endorsement or testimonials from happy investors." },
          { cite: "FBI IC3: Investment Fraud", text: "There is no such thing as a guaranteed return on investment." }
        ],
        practice: "Guaranteed profits → **walk away.**",
        sources: [17, 10]
      }
    ],
    bands: [
      { min: 0, title: "Good start", text: "Scammers are good at this. Run it again; the recap below shows the warning signs." },
      { min: 7, title: "Solid", text: "You caught most of them. Review the items below." },
      { min: 11, title: "Perfect score", text: "Great job. Share these habits with family and friends." }
    ],
    takeaway: "The pattern: **unexpected + urgent + asks for a code, a login, or money = stop.** Check it yourself in the " + B.name + " app, at **" + B.website + "**, or with the number on the back of your card.",
    help: {
      title: "If it already happened to you",
      intro: "It can happen to anyone. You're not to blame, and getting help quickly matters.",
      items: [
        { text: "Call your credit union using the number on the back of your card." + (B.fictional ? " (In this demo that's " + B.name + ", a fictional credit union.)" : "") },
        { text: "**DOJ National Elder Fraud Hotline:**", tel: "+1-833-372-8311", telLabel: "1‑833‑FRAUD‑11 (1‑833‑372‑8311)", after: "Monday–Friday, 10 a.m.–6 p.m. Eastern.", source: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope", sourceLabel: "U.S. DOJ Office for Victims of Crime" },
        { text: "**Report fraud to the FTC:**", url: "https://reportfraud.ftc.gov/", urlLabel: "reportfraud.ftc.gov" }
      ]
    },
    sources: [
      { short: "FTC: fake emergencies", title: "FTC: Scammers Use Fake Emergencies To Steal Your Money", url: "https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money" },
      { short: "FTC: verification codes", title: "FTC Consumer Alert: What's a verification code and why would someone ask me for it?", url: "https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it" },
      { short: "FTC: fraud calls", title: "FTC Consumer Alert: Got a call about fraud activity on your bank account? It could be a scammer", url: "https://consumer.ftc.gov/consumer-alerts/2024/06/got-call-about-fraud-activity-your-bank-account-it-could-be-scammer" },
      { short: "NCUA: frauds and scams", title: "NCUA MyCreditUnion.gov: Frauds and Scams", url: "https://mycreditunion.gov/protect-your-money/prevention/frauds-scams" },
      { short: "FTC: government impostors", title: "FTC: How To Avoid a Government Impersonation Scam", url: "https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam" },
      { short: "FTC: phone scams", title: "FTC: Phone Scams", url: "https://consumer.ftc.gov/articles/phone-scams" },
      { short: "FTC: tech support scams", title: "FTC: How To Spot, Avoid, and Report Tech Support Scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" },
      { short: "FBI IC3: tech support", title: "FBI IC3: Tech/Customer Support and Government Impersonation", url: "https://www.ic3.gov/CrimeInfo/TechSupportGovImpersonation" },
      { short: "FTC: romance scams", title: "FTC: What To Know About Romance Scams", url: "https://consumer.ftc.gov/articles/what-know-about-romance-scams" },
      { short: "FBI IC3: investment fraud", title: "FBI IC3: Investment Fraud", url: "https://www.ic3.gov/CrimeInfo/Investment" },
      { short: "FTC: gift card scams", title: "FTC: Avoiding and Reporting Gift Card Scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" },
      { short: "FTC: payment apps", title: "FTC Consumer Alert: Do you use payment apps like Venmo, Cash App, or Zelle? Read this.", url: "https://consumer.ftc.gov/consumer-alerts/2023/08/do-you-use-payment-apps-venmo-cashapp-or-zelle-read" },
      { short: "FTC: payment app refunds", title: "FTC MilitaryConsumer.gov: Payment Apps", url: "https://www.militaryconsumer.gov/spend/getting-started/payment-apps" },
      { short: "FTC: spam texts", title: "FTC: How To Recognize and Report Spam Text Messages", url: "https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages" },
      { short: "NCUA: phishing", title: "NCUA: Heightened Risk of Social Engineering and Phishing Attacks", url: "https://ncua.gov/regulation-supervision/letters-credit-unions-other-guidance/heightened-risk-social-engineering-and-phishing-attacks" },
      { short: "FTC: fake checks", title: "FTC: How To Spot, Avoid, and Report Fake Check Scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" },
      { short: "FTC: crypto scams", title: "FTC: What To Know About Cryptocurrency and Scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams" }
    ],
    sourcesNote: "Warning signs and quotes come from public FTC, FBI (IC3) and NCUA consumer pages (checked October 2026). " +
      (B.fictional ? B.name + " and every name, number, link and message in the scenarios are fictional. Scenario numbers use 555-01xx and web addresses use example.com. " : "") +
      "Branded versions should go through the credit union's own compliance review.",
    disclaimer: "**Practice / education only, not financial or legal advice.** " + (B.fictional ? B.name + " is a fictional credit union, and the messages in this drill are made up. " : "") +
      "Real scams change constantly. When in doubt, contact your credit union using the number on your card or its official website.",
    cta: { title: "Get this customized for your SOP", text: "Credit unions: want this drill under your own name, logo and colors, with your real contact channels and fraud policies? See how it works.", url: "../contact/", label: "Get this customized for your SOP", email: "oneskilldrill@outlook.com" },
    moreUrl: "../#members",
    moreLabel: "More drills",
    footer: [
      "Independent practice drill. Not affiliated with or endorsed by the FTC, the FBI, the NCUA, the U.S. Department of Justice, or any financial institution, payment app or phone carrier.",
      B.fictional ? B.name + " is fictional. Any resemblance to a real institution is coincidental." : "Educational practice for members."
    ]
  };
})(window.CU_BRAND);
