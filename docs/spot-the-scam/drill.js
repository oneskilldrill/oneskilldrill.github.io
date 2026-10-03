/* Drill data: Spot the scam (credit union member drill).
   ------------------------------------------------------------------
   REBRAND HERE: this one object controls the credit union's name, logo,
   colors and contact details used across the whole drill. "Sample CU" is
   fictional. Fake numbers use 555-01xx and fake web addresses use .example.
   ------------------------------------------------------------------ */
window.CU_BRAND = Object.assign({
  name: "Sample CU",                 // credit union name shown in the header and the messages
  logoText: "SCU",                   // badge text used when there's no logo image
  logoUrl: "",                       // optional: "logo.png" next to this file, an https:// URL, or a data:image/... URI
  colors: { accent: "#1f4e9c", accentInk: "#ffffff", accentSoft: "#e7eefa" },
  website: "sample-cu.example",      // the real website members should type in themselves
  phone: "555-0100",                 // the real member service number (as printed on the card)
  tagline: "Member fraud awareness",
  fictional: true                    // true = show the "Sample CU is fictional" notes
}, window.CU_BRAND || {});

(function (B) {
  var slug = String(B.website).split(".")[0].replace(/[^a-z0-9-]/gi, "").toLowerCase() || "sample-cu";
  var fake = {
    smish: "https://" + slug + "-secure.example/verify",
    email: "alerts@" + slug + "-security.example",
    login: "https://" + B.website + ".login-check.example/secure"
  };
  window.DRILL = {
    id: "spot-the-scam",
    brand: "One Skill Drill",
    kicker: B.name + " · Spot the scam",
    title: "Spot the scam",
    intro: "Eight real-looking texts, calls and emails. Some are scams and some are legit messages from " + B.name + ". Decide what each one is and what you'd do, get instant feedback on the warning signs, and see your score. Takes about 5 minutes.",
    meta: ["8 messages", "About 5 min", "Scams and legit mixed"],
    header: { name: B.name, logoText: B.logoText, logoUrl: B.logoUrl, tag: B.tagline },
    theme: { "accent": B.colors.accent, "accent-ink": B.colors.accentInk, "accent-soft": B.colors.accentSoft },
    questions: [
      {
        label: "Message 1 · Text",
        scenario: "A text arrives before work:",
        visual: {
          type: "message", channel: "sms", from: "Text message", fromDetail: "From 555-0187", time: "Today 7:42 AM",
          body: [
            B.name + " FRAUD ALERT: Did you attempt a purchase of $842.19 at SAMPLE-MART #0417? Reply YES or NO.",
            "Your card is ON HOLD. Verify your identity now to avoid account closure:"
          ],
          link: fake.smish
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Scam. Don't reply or tap the link. Check your account in the " + B.name + " app, or call the number on the back of your card", correct: true },
          { text: "Legit. Reply NO so they block the charge", note: "Replying is the hook. It tells the scammer you're real and starts the con." },
          { text: "Probably legit since it uses the credit union's name. Tap the link to check", note: "Anyone can type a name. The link isn't " + B.website + "." },
          { text: "Call 555-0187 back to ask about it", note: "Use a number you already know is real, not one from the message." }
        ],
        why: "Fake fraud alerts are a common way text scams start. The FTC says: don't reply to unexpected texts, never click links in them, and contact your bank using a phone number or website you know is real. Also look at the link: it's **" + slug + "-secure.example**, not **" + B.website + "**.",
        practice: "Unexpected \"fraud alert\" text → **don't reply or tap**; check in the app or call the number on your card.",
        sources: [1, 4]
      },
      {
        label: "Message 2 · Text",
        scenario: "You're signing in to the " + B.name + " app on your new phone. Seconds after you tap **Sign in**, this arrives:",
        visual: {
          type: "message", channel: "sms", from: B.name, fromDetail: B.phone, time: "Now",
          body: [B.name + ": Your sign-in code is 482913. It expires in 10 minutes. " + B.name + " will never call, text or email you to ask for this code."]
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Legit. You just asked for it. Type it into the app yourself, and never read it to anyone", correct: true },
          { text: "Scam. Messages with codes are always fake, so delete it", note: "Codes are normal when you start the sign-in yourself. The context is what matters." },
          { text: "Reply to the text with the code to confirm it's you", note: "Codes go into the app or website you're using, never back to a message or a person." },
          { text: "Forward it to a family member for safekeeping", note: "Never share a code with anyone." }
        ],
        why: "Sign-in codes prove you're really you, which is exactly why nobody else should ever get one. This one is fine because **you** started the sign-in a moment ago and it asks nothing of you.",
        practice: "A code you asked for → **use it yourself**; a code you didn't ask for → someone may be trying to get into your account.",
        sources: [2]
      },
      {
        label: "Message 3 · Phone call",
        scenario: "Your phone rings. Caller ID shows your credit union's **real** number.",
        visual: {
          type: "message", channel: "call", from: B.name + " Fraud Dept", fromDetail: B.phone, time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "Hi, this is Dana with the " + B.name + " fraud department. We stopped a $1,200 transfer from your checking account. Was that you?" },
            { who: "you", text: "No, it wasn't!" },
            { who: "them", label: "Caller", text: "Okay, I can reverse it right now. I'm sending a verification code to your phone. Just read it back to me so I can confirm you're the account owner." }
          ],
          note: "Caller ID shows " + B.phone + ", the number printed on your card."
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Scam. Hang up and call the number on the back of your card yourself. Never share a code, even if caller ID looks right", correct: true },
          { text: "Legit, because caller ID matches. Read her the code", note: "Caller ID can be faked to show your credit union's real number." },
          { text: "Give the code but not your password", note: "The code is the key. With it they can get in or approve a transfer." },
          { text: "Ask her to prove it by reading your address and last four digits", note: "Scammers often already have personal details like these." }
        ],
        why: "The FTC: no caller, especially someone from your bank's fraud department, will ever ask for your verification code. That's always a scam. The FBI warns that these callers use numbers that appear to match the institution's real support line.",
        practice: "Anyone asking for your code is a scammer → **hang up and call the number on your card.**",
        sources: [2, 3]
      },
      {
        label: "Message 4 · Email",
        scenario: "This lands in your inbox:",
        visual: {
          type: "message", channel: "email", from: B.name + " Security", fromDetail: fake.email, time: "9:15 AM",
          subject: "Action required: online banking access will be suspended in 24 hours",
          body: [
            "Dear Member,",
            "We detected an unusual sign-in attempt on your account. To keep access, verify your username, password and card number within 24 hours or your online banking will be suspended.",
            "Verify now:"
          ],
          link: fake.login
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Scam. Don't click. Open the app or type " + B.website + " yourself, and report the email to the credit union", correct: true },
          { text: "Legit, because the link starts with " + B.website, note: "Read the end of the web address. This one really goes to login-check.example." },
          { text: "Reply with your username only, to be safe", note: "Don't send any account details by email." },
          { text: "Click to look, but don't type your password", note: "Phishing links can load malware or capture what you type." }
        ],
        why: "This is classic phishing: a generic greeting, a deadline threat, a request for your login and card number, and a lookalike link. Read the site name from its end, just before the first single slash: it ends in **login-check.example**, so that's where the link really goes. The FTC lists \"suspicious activity\", account problems, and requests to confirm information as common phishing stories.",
        practice: "Urgent \"verify your account\" email → **don't click**; go to the site or app yourself.",
        sources: [4]
      },
      {
        label: "Message 5 · Email",
        scenario: "At the start of the month you get this email:",
        visual: {
          type: "message", channel: "email", from: B.name, fromDetail: "notices@" + B.website, time: "Oct 1",
          subject: "Your October eStatement is ready",
          body: [
            "Hi Jordan,",
            "Your October statement is now available. To view it, sign in to online banking or the " + B.name + " app as you normally do.",
            "For your security, this email doesn't contain any links."
          ]
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Looks legit: it's from the real domain, with no link, no deadline and no request. View the statement by opening the app yourself", correct: true },
          { text: "Scam. Statement emails are always fake", note: "Plenty of real notices look like this. What matters is that nothing is being asked of you." },
          { text: "Reply and ask them to attach the PDF", note: "No need. Just open the app or site yourself." },
          { text: "Call the number in your email signature to confirm", note: "There's nothing to confirm here. If you're ever unsure, use the number on your card." }
        ],
        why: "Legit notices tend to be calm, come from the real domain, and send you to sign in the usual way rather than through a link. Even with a real-looking message, the safest habit is the same: open the app or type the address yourself.",
        practice: "No link, no urgency, no request → **likely legit**; still open the app yourself.",
        sources: [4]
      },
      {
        label: "Message 6 · Text, then a call",
        scenario: "You get a text asking whether you sent a $500 instant payment to \"J. Rivera\". You reply **NO**. Two minutes later, the phone rings:",
        visual: {
          type: "message", channel: "call", from: B.name + " Fraud Specialist", fromDetail: B.phone, time: "Incoming call",
          lines: [
            { who: "them", label: "Caller", text: "I see your account ending in 4417, correct? Someone sent $500 from it using a payment app." },
            { who: "them", label: "Caller", text: "To reverse it, first remove your email from the payment app. I'll walk you through it." },
            { who: "them", label: "Caller", text: "Now send $500 **to yourself** at that email. That cancels the fraudulent payment, and the money comes right back to you." }
          ]
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Scam. Hang up. No real fraud team has you send money to reverse a payment. Call the number on your card", correct: true },
          { text: "Legit. Sending money to yourself is safe", note: "Once your email is removed, the scammer links it to their own account. The \"payment to yourself\" goes to them." },
          { text: "Legit, because they knew your account's last four digits", note: "These callers often have personal details like that." },
          { text: "Send a smaller test amount first", note: "Any amount you send goes to the scammer." }
        ],
        why: "The FBI describes this exact scheme: a fake fraud-alert text, then a call that seems to come from the institution's real number, then steps to \"reverse\" the payment that actually send money to an account the criminals control. The FTC: never move money to \"protect\" it.",
        practice: "Asked to send money (even \"to yourself\") to fix fraud → **hang up; it's a scam.**",
        sources: [3, 2]
      },
      {
        label: "Message 7 · Text",
        scenario: "You can't find your wallet, so you lock your debit card in the " + B.name + " app. Right after, this arrives:",
        visual: {
          type: "message", channel: "sms", from: B.name, fromDetail: B.phone, time: "2:14 PM",
          body: [B.name + ": Your debit card ending 4417 was locked in the app at 2:14 PM. No action is needed. If this wasn't you, call the number on the back of your card."]
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Legit. It matches what you just did and asks for nothing. No reply needed", correct: true },
          { text: "Scam. Reply STOP right away", note: "This confirms an action you just took, and it asks nothing of you." },
          { text: "Scam. Call 555-0187 to report it", note: "There's nothing to report, and 555-0187 isn't your credit union's number." },
          { text: "Reply with your card number so they can confirm it", note: "Never send a card number by text." }
        ],
        why: "A confirmation that matches something **you** just did, with no link and no request, is what a real alert looks like. If it ever didn't match, you'd use the number on your card, not one sent in a message.",
        practice: "Matches what you just did + asks nothing → **legit**. If in doubt, use the number on your card.",
        sources: [1]
      },
      {
        label: "Message 8 · Phone call",
        scenario: "Late evening, a call from an unknown number:",
        visual: {
          type: "message", channel: "call", from: "Unknown caller", fromDetail: "555-0163", time: "9:48 PM",
          lines: [
            { who: "them", label: "Caller (crying)", text: "Grandma? It's me. I was in a car accident and they took me to jail. Please don't tell Mom and Dad." },
            { who: "them", label: "Second voice", text: "Ma'am, I'm his attorney. Bail is $3,000. A courier can pick up cash tonight, or you can buy gift cards and read me the numbers." }
          ]
        },
        ask: "Scam or legit, and what do you do?",
        options: [
          { text: "Treat it as a scam. Hang up and call your grandson, or another family member, at a number you already know", correct: true },
          { text: "Pay quickly. It's family, and it's an emergency", note: "Urgency is the scammer's main tool." },
          { text: "Keep it secret, like he asked", note: "Secrecy keeps you from checking with family." },
          { text: "Pay with gift cards since you won't hand over cash", note: "Anyone who tells you to pay with gift cards is a scammer." }
        ],
        why: "The FTC: in fake emergency scams the caller says it's urgent, asks you to keep it secret, may bring in a fake \"lawyer\" or officer, and wants payment by cash, wire, crypto, payment app or gift card. Voices can be faked. Hang up and call the person back, or ask something only they would know.",
        practice: "Family emergency + secrecy + gift cards or cash → **hang up and call them back yourself.**",
        sources: [5]
      }
    ],
    bands: [
      { min: 0, title: "Good start", text: "Run it again. The recap below shows the warning signs to watch for." },
      { min: 5, title: "Solid", text: "You caught most of them. Review the items below." },
      { min: 8, title: "Perfect score", text: "Sharp eye. Share these habits with family and friends." }
    ],
    takeaway: "The pattern: **unexpected + urgent + asks for a code, a login, or money = stop.** Check it yourself in the " + B.name + " app, at **" + B.website + "**, or with the number on the back of your card.",
    sources: [
      { short: "FTC: unexpected texts", title: "FTC Consumer Alert: Is that unexpected text a scam?", url: "https://consumer.ftc.gov/consumer-alerts/2025/04/unexpected-text-scam" },
      { short: "FTC: fraud calls", title: "FTC Consumer Alert: Got a call about fraud activity on your bank account? It could be a scammer", url: "https://consumer.ftc.gov/consumer-alerts/2024/06/got-call-about-fraud-activity-your-bank-account-it-could-be-scammer" },
      { short: "FBI IC3 PSA", title: "FBI IC3 PSA: Cybercriminals Trick Victims into Transferring Funds to \"Reverse\" Instant Payments", url: "https://www.ic3.gov/PSA/2022/PSA220414" },
      { short: "FTC: phishing", title: "FTC: How To Recognize and Avoid Phishing Scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" },
      { short: "FTC: fake emergencies", title: "FTC: Scammers Use Fake Emergencies To Steal Your Money", url: "https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money" }
    ],
    sourcesNote: "Warning signs are based on public FTC and FBI consumer guidance (checked October 2026). " +
      (B.fictional ? B.name + " and every name, number, link and message in this drill are fictional. Numbers use 555-01xx and web addresses use .example." : ""),
    disclaimer: "**Practice only.** " + (B.fictional ? B.name + " is a fictional credit union, and all messages here are made up. " : "") +
      "Real scams change constantly. When in doubt, contact your credit union using the number on your card or its official website.",
    cta: { title: "Get this customized for your SOP", text: "Credit unions: want this drill under your own name, logo and colors, with your real contact channels and fraud policies? See how it works.", url: "../contact/", label: "Get this customized for your SOP" },
    moreUrl: "../#members",
    moreLabel: "More drills",
    footer: [
      "Independent practice drill. Not affiliated with or endorsed by the FTC, the FBI, or any financial institution, payment app or phone carrier.",
      B.fictional ? B.name + " is fictional. Any resemblance to a real institution is coincidental." : "Educational practice for members."
    ]
  };
})(window.CU_BRAND);
