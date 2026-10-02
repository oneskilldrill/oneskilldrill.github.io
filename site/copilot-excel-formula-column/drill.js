/* Drill data: Add a formula column with Copilot in Excel.
   Every fact traces to a public Microsoft Support page listed in `sources`. Checked 2026-10-02. */
window.DRILL = {
  id: "copilot-excel-formula-column",
  kicker: "One Skill Drill · for Microsoft 365 Copilot",
  title: "Add a formula column with Copilot in Excel",
  intro: "Five real-world spreadsheet moments. Pick the best move, get instant feedback, and see your score. Takes about 3 minutes.",
  meta: ["5 questions", "About 3 min", "Instant feedback"],
  questions: [
    {
      label: "Scenario 1 · Ask for the column",
      scenario: "You keep the order sheet for a small parts shop. You want a **Total** for every order, without typing a formula into each row.",
      visual: {
        type: "sheet",
        header: ["Order ID", "Item", "Units", "Unit Price", "?"],
        rows: [
          ["1041", "Hinge", "12", "$3.50", ""],
          ["1042", "Bracket", "4", "$8.25", ""],
          ["1043", "Gasket", "30", "$0.90", ""],
          ["1044", "Valve", "2", "$24.00", ""]
        ],
        colMark: { col: 4, cls: "new" },
        tabs: ["Orders"],
        alt: "Orders sheet with Order ID, Item, Units, Unit Price and an empty new column"
      },
      ask: "Which prompt is most likely to get the right column on the first try?",
      optionStyle: "prompt",
      options: [
        { text: "Add a column named Total that multiplies Units by Unit Price for each order.", correct: true },
        { text: "Calculate totals.", note: "Too vague: you might get a total row instead of a per-order column." },
        { text: "Add a row at the bottom that sums Units.", note: "That gives one summary row, not a Total for each order." },
        { text: "Fix the Unit Price column.", note: "Nothing in that column needs fixing, and it doesn't ask for a new column." }
      ],
      why: "Microsoft's tips: be specific, and name the columns you want Copilot to work with. Copilot can add a new column that calculates values from your existing data.",
      practice: "Write specific prompts that **name the exact columns** to use.",
      sources: [2, 1]
    },
    {
      label: "Scenario 2 · Pull a value from another sheet",
      scenario: "Your **Orders** sheet needs to show how many of each item are in stock. The stock counts live on a separate **Inventory** sheet.",
      visual: {
        type: "sheet",
        header: ["Item", "Units ordered", "In stock"],
        rows: [
          ["Hinge", "12", "?"],
          ["Bracket", "4", "?"],
          ["Gasket", "30", "?"]
        ],
        colMark: { col: 2, cls: "new" },
        tabs: ["Orders", "Inventory"],
        activeTab: 0,
        alt: "Orders sheet with an empty In stock column; an Inventory tab exists"
      },
      ask: "What should you ask Copilot?",
      optionStyle: "prompt",
      options: [
        { text: "Create a column that looks up the quantity in stock for each item from the Inventory sheet.", correct: true },
        { text: "Copy the Inventory sheet into this sheet.", note: "That duplicates data instead of matching each item." },
        { text: "Sort Orders by Item.", note: "Sorting reorders rows; it doesn't bring in stock counts." },
        { text: "Add a row that averages Units ordered.", note: "That's a summary row, not a lookup." }
      ],
      why: "Copilot can build a lookup column: it recommends a formula such as XLOOKUP and adds a new column for the results.",
      practice: "Use a **lookup prompt** to pull matching values from another sheet.",
      sources: [1]
    },
    {
      label: "Scenario 3 · Check it before you trust it",
      scenario: "Copilot just added a **Margin** column. Your manager will see this sheet today.",
      visual: {
        type: "sheet",
        formulaRef: "D2",
        formula: "=(B2-C2)/B2",
        header: ["Product", "Revenue", "Cost", "Margin"],
        rows: [
          ["Starter kit", "$1,200", "$780", "35%"],
          ["Refill pack", "$640", "$512", "20%"],
          ["Pro bundle", "$2,900", "$1,595", "45%"]
        ],
        marks: { "1,3": "sel" },
        colMark: { col: 3, cls: "new" },
        tabs: ["Products"],
        alt: "Products sheet with a new Margin column; cell D2 selected showing its formula"
      },
      ask: "What's the best way to confirm what the new formula actually does?",
      options: [
        { text: "Select a Margin cell and ask Copilot to explain the formula in the selected cell.", correct: true },
        { text: "Assume it's right and send the sheet.", note: "Microsoft's guidance is the opposite: review and verify." },
        { text: "Delete the column and retype it by hand.", note: "You'd lose the work without learning whether it was right." },
        { text: "Ask Copilot to make the column look nicer.", note: "Formatting doesn't check the math." }
      ],
      why: "Microsoft says to review, edit, and verify anything Copilot creates. You can select a cell and ask Copilot to explain the formula in it.",
      practice: "**Verify** new columns: ask Copilot to explain the formula in the selected cell.",
      sources: [1]
    },
    {
      label: "Scenario 4 · Preview before it edits",
      scenario: "It's a shared budget workbook. You want Copilot to lay out its step-by-step approach for adding three calculated columns, and you want to **review and confirm** before it starts.",
      visual: {
        type: "pane",
        title: "Copilot",
        subtitle: "Choose a mode",
        modes: ["Edit", "Plan", "Chat"],
        messages: [{ who: "you", text: "Add Profit, Margin %, and Variance columns to the Budget table." }],
        placeholder: "Describe a task…"
      },
      ask: "Which mode fits best?",
      options: [
        { text: "Plan mode", correct: true },
        { text: "Edit mode (the default)", note: "Edit mode changes the workbook directly." },
        { text: "Chat mode", note: "Chat mode keeps responses in the chat and doesn't make changes, so your columns wouldn't get built." },
        { text: "It doesn't matter; every mode edits right away.", note: "The modes behave differently." }
      ],
      why: "Plan mode creates a plan you can review and confirm before Copilot starts. Edit mode, the default, changes the workbook directly, and chat mode doesn't change it.",
      practice: "Use **plan mode** when you want to review the steps before anything changes.",
      sources: [3]
    },
    {
      label: "Scenario 5 · Not quite right? Refine.",
      scenario: "You asked for each region's percentage of total sales. The new column was built from **Units** instead of **Sales**.",
      visual: [
        {
          type: "pane",
          title: "Copilot",
          messages: [
            { who: "you", text: "Add a column that shows each region's percentage of total sales." },
            { who: "reply", text: "Added **% of total** to your table." }
          ]
        },
        {
          type: "sheet",
          header: ["Region", "Units", "Sales", "% of total"],
          rows: [
            ["North", "50", "$9,000", "50%"],
            ["South", "30", "$3,000", "30%"],
            ["West", "20", "$8,000", "20%"]
          ],
          colMark: { col: 3, cls: "bad" },
          caption: "The % column matches Units (50/30/20), not Sales.",
          tabs: ["Regions"],
          alt: "Regions sheet where the percent column was calculated from Units instead of Sales"
        }
      ],
      ask: "What's the best next move?",
      options: [
        { text: "Follow up with more detail: \u201cUse the Sales column, not Units, for each region's percentage of total sales.\u201d", correct: true },
        { text: "Send the exact same prompt again, word for word.", note: "Same words, same ambiguity." },
        { text: "Start over in a brand-new workbook.", note: "Overkill: a follow-up fixes it in place." },
        { text: "Leave it; percentages are percentages.", note: "The numbers are wrong for the question you asked." }
      ],
      why: "Microsoft's tip: start broad, then refine. If a result isn't quite right, add more detail and ask again, and build on results with follow-ups. You can also undo changes or view previous versions.",
      practice: "**Refine** with a follow-up that names the right column. Undo if you need to.",
      sources: [2]
    }
  ],
  bands: [
    { min: 0, title: "Good start", text: "Run it again. The recap below shows exactly what to work on." },
    { min: 3, title: "Solid", text: "You've got the core of it. Tighten up the items below." },
    { min: 5, title: "Perfect score", text: "You're ready to use this at work today." }
  ],
  takeaway: "The pattern: **name the columns → check the formula → refine with a follow-up.**",
  sources: [
    { short: "Data insights", title: "Get data insights with Copilot in Excel (Microsoft Support)", url: "https://support.microsoft.com/en-us/excel/copilot/data-insights-with-copilot-in-excel" },
    { short: "Tips", title: "Copilot in Excel tips (Microsoft Support)", url: "https://support.microsoft.com/en-us/excel/copilot/copilot-in-excel-tips" },
    { short: "Get started", title: "Get started with Copilot in Excel (Microsoft Support)", url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel" }
  ],
  sourcesNote: "Based on Microsoft's public documentation as of October 2026. Features and availability vary by license, platform, and admin settings.",
  moreUrl: "../",
  moreLabel: "More drills",
  footer: [
    "Independent practice drill for Microsoft 365 Copilot. Not affiliated with, sponsored by, or endorsed by Microsoft.",
    "Microsoft 365, Copilot, and Excel are trademarks of the Microsoft group of companies. Sample data is fictional."
  ]
};
