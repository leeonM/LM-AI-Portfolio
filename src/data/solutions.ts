import type { Solution } from "./types";

// Source of truth: prompt.md and the infographics in /workflow-diagrams.
// Do not add figures, controls or integrations that are not in those materials.

export const solutions: Solution[] = [
  {
    id: "pl-calculator",
    number: "01",
    category: "Royalty Operations",
    title: "AI-Powered P&L Calculator",
    description:
      "Standardising complex royalty calculations through AI-assisted reasoning, structured deal data and human verification.",
    accent: "blue",
    metrics: [{ before: "2–3 hours", after: "30 minutes", caption: "per range (est.)" }],
    workflow: [
      { icon: "sheet", label: "Deal details", sub: "Template sheet", tone: "green" },
      { icon: "database", label: "Royalty database", sub: "Centralised in Sheets", tone: "blue" },
      { icon: "gpt", label: "Custom GPT plugin", sub: "Calculates P&L", tone: "purple" },
      { icon: "chart", label: "P&L output", sub: "Figures + rationale", tone: "blue" },
    ],
    role: "Identified the time-consuming calculation process, designed the workflow, configured the custom GPT plugin and structured royalty data integration, and supported UAT and rollout.",
    governance:
      "Data sensitivity, access controls, human verification of every output and monthly performance reviews.",
    tech: ["ChatGPT", "Custom GPT Plugin", "Google Sheets"],
    image: {
      src: "/workflows/pl-calculator.png",
      alt: "Infographic of the AI-Powered P&L Calculator workflow: deal details, centralised royalty database, custom GPT plugin, calculation with rationale, and human QA.",
      width: 1774,
      height: 887,
    },
    details: {
      problem: {
        paragraphs: [
          "Royalty P&L calculations were done by hand for each product range. Each deal can carry its own royalty rate, rights restrictions, territories, minimum guarantees, recoupment terms or tiered rates. Working through these took 2–3 hours per range, and the results depended on who did them.",
        ],
        placeholders: [
          "How many ranges are calculated per month, and who performs them.",
          "The downstream impact of slow or inconsistent calculations (e.g. delayed decisions).",
        ],
      },
      architecture: [
        {
          icon: "sheet",
          label: "Enter deal details",
          tone: "green",
          text: "The user fills in a standardised Google Sheets template with the key deal information.",
        },
        {
          icon: "database",
          label: "Centralised royalty database",
          tone: "blue",
          text: "Royalty rates and rules, deal structures and exceptions, territory and product mappings and other deal context are maintained in Google Sheets.",
        },
        {
          icon: "gpt",
          label: "Run custom GPT plugin",
          tone: "purple",
          text: "The template and royalty data are processed by a custom ChatGPT plugin. The user uploads the sheet and runs the plugin, with no separate prompt required.",
        },
        {
          icon: "chart",
          label: "Calculate and explain",
          tone: "blue",
          text: "The AI applies deterministic calculation rules and returns P&L figures with a clear calculation rationale and summary.",
        },
        {
          icon: "shield",
          label: "Human QA and verification",
          tone: "purple",
          text: "The user checks outputs for accuracy and completeness before relying on them.",
        },
      ],
      implementation: {
        bullets: [
          "Designed a standardised deal-details template so every calculation starts from the same structured inputs.",
          "Structured the royalty rules, deal exceptions and territory/product mappings into a centralised Google Sheets database the plugin reads from.",
          "Configured the custom GPT plugin to combine the template with the royalty data and apply the calculation rules. Users don't need to write prompts.",
          "Specified the output format: P&L figures plus a line-by-line rationale (e.g. which royalty rate and recoupment terms were applied) so results can be checked.",
        ],
        placeholders: [
          "Key technical decisions, e.g. how calculation rules were encoded and how edge cases are handled.",
        ],
      },
      governance: {
        implemented: [
          "Human-in-the-loop verification: users review every output before relying on it.",
          "Access controls and user management.",
          "Process guidance for users.",
          "Monthly review of performance and user feedback.",
        ],
        assessed: ["Sensitivity of royalty and deal data as part of the risk assessment and process design stage."],
        placeholders: ["Any approval required before rollout, and who gave it."],
      },
      adoption: {
        bullets: [
          "Process scoping and impact analysis.",
          "Risk assessment and process design.",
          "User acceptance testing and integration.",
          "1-month pilot across 4 projects.",
          "Full rollout with user guidance, human-in-the-loop controls, access management and monthly review.",
        ],
        placeholders: ["Feedback received during the pilot and the changes made as a result."],
      },
      results: [
        { kind: "Estimate", text: "P&L calculations reduced from 2–3 hours to 30 minutes per range (75–83% less time)." },
        { kind: "Outcome", text: "Standardised calculations with a documented rationale for every output." },
      ],
      lessons: {
        placeholders: ["Two or three lessons learned from building and rolling out the calculator."],
      },
    },
  },

  {
    id: "reporting-automation",
    number: "02",
    category: "Reporting & Insights",
    title: "AI-Powered Reporting Automation",
    description: "Two custom GPT workflows designed to standardise reporting and reduce manual preparation.",
    accent: "purple",
    metrics: [
      { before: "8 hrs", after: "2 hrs", caption: "weekly, 4 managers (est.)" },
      { before: "1 day", after: "1–2 hrs", caption: "per exec report (est.)" },
    ],
    workflow: [
      { icon: "sheet", label: "Forecast data", sub: "Planning sheets", tone: "green" },
      { icon: "gpt", label: "Custom GPT", sub: "Report templates", tone: "purple" },
      { icon: "python", label: "Python", sub: "Transform data", tone: "blue" },
      { icon: "search", label: "QA review", sub: "Check outputs", tone: "green" },
      { icon: "slides", label: "Reports", sub: "Ready to use", tone: "amber" },
    ],
    useCases: [
      {
        key: "A",
        title: "Weekly Trade Reporting",
        audience: "Merchandise campaign managers",
        points: [
          "2 hours → 30 minutes per manager per week",
          "Four managers",
          "8 hours → 2 hours per week in total",
        ],
      },
      {
        key: "B",
        title: "Monthly Executive Reporting",
        audience: "Senior leadership",
        points: ["1 day → 1–2 hours per report", "Supports monthly and ad hoc executive reports"],
      },
    ],
    role: "Mapped the reporting process, assessed stakeholder risks, built and tested two custom GPTs, supported the pilot and rollout, and developed user guidance and QA processes.",
    governance:
      "Data handling, output accuracy, user access, a QA review step, user guidance and ongoing monitoring.",
    tech: ["ChatGPT", "Custom GPTs", "Google Sheets", "Excel", "Python", "PowerPoint / Google Slides"],
    image: {
      src: "/workflows/reporting-automation.png",
      alt: "Infographic of the AI-Powered Reporting Automation workflow shared by the weekly trade and monthly executive reporting GPTs.",
      width: 1774,
      height: 887,
    },
    details: {
      problem: {
        paragraphs: [
          "Managers built recurring reports by hand from range-planning sheets and Excel forecasts. Weekly trade reports took each of four merchandise campaign managers about two hours a week. Monthly executive reports took about a day each, and formats varied between authors.",
        ],
        placeholders: ["What the reports are used for and what slow or inconsistent reporting cost the business."],
      },
      architecture: [
        {
          icon: "sheet",
          label: "Upload forecast breakdown",
          tone: "green",
          text: "The user uploads range-planning sheets or Excel forecast data.",
        },
        {
          icon: "gpt",
          label: "Apply custom GPT template",
          tone: "purple",
          text: "The relevant report template and instructions are built into the custom GPT.",
        },
        {
          icon: "python",
          label: "Transform data",
          tone: "blue",
          text: "ChatGPT uses Python to convert the raw data into the required reporting format.",
        },
        {
          icon: "search",
          label: "QA and refine",
          tone: "green",
          text: "The user reviews the generated output (around 20 minutes), with ongoing weekly testing and prompt iteration to improve quality.",
        },
        {
          icon: "slides",
          label: "Export ready-to-use report",
          tone: "amber",
          text: "A standardised report, ready to share or edit further in PowerPoint or Google Slides.",
        },
      ],
      implementation: {
        bullets: [
          "Built two custom GPTs that share one workflow: one for weekly trade reporting (merchandise campaign managers) and one for monthly executive reporting (senior leadership).",
          "Embedded report templates and instructions in each GPT so users only upload the source data.",
          "Used ChatGPT's Python capability to clean and reshape forecast data into the reporting structure.",
          "Designed a QA step where the user reviews and refines the output before it is shared.",
        ],
        placeholders: ["Notable technical decisions, e.g. how templates were structured or how data inconsistencies are handled."],
      },
      governance: {
        implemented: [
          "QA review of every generated report by the user before it is shared.",
          "Usage guide and walkthrough for users.",
          "Ongoing monitoring and weekly testing with prompt iteration.",
        ],
        assessed: ["Stakeholder risk assessment covering data handling, output accuracy and user access."],
        placeholders: ["Specific access restrictions applied to the GPTs, if any, and any approval required."],
      },
      adoption: {
        bullets: [
          "Process mapping.",
          "Stakeholder risk assessment.",
          "2-week build and testing.",
          "1-month pilot.",
          "Rollout with usage guide, walkthrough, QA and ongoing monitoring.",
        ],
        placeholders: ["Pilot feedback and the improvements made afterwards."],
      },
      results: [
        { kind: "Estimate", text: "Weekly trade reporting: 2 hours → 30 minutes per manager (75% less). 8 → 2 hours per week across four managers, saving 6 hours per week." },
        { kind: "Estimate", text: "Executive reporting: 1 day → 1–2 hours per report, over 70% less preparation time (documented estimate)." },
        { kind: "Outcome", text: "Flexibility to prepare ad hoc executive reports on request." },
      ],
      lessons: {
        placeholders: ["Two or three lessons learned from piloting and rolling out the GPTs."],
      },
    },
  },

  {
    id: "survey-coding",
    number: "03",
    category: "Research & Insights",
    title: "AI Survey Response Coding",
    description:
      "Automating the classification of open-ended survey responses using AI-assisted coding and human quality assurance.",
    accent: "green",
    metrics: [{ before: "Days", after: "Minutes", caption: "coding time (assessment est.)" }],
    workflow: [
      { icon: "survey", label: "Responses", sub: "Survey data", tone: "blue" },
      { icon: "list", label: "Coding list", sub: "Codes + keywords", tone: "green" },
      { icon: "code", label: "Apps Script + ChatGPT", sub: "Run coding script", tone: "purple" },
      { icon: "sheet", label: "Coded sheet", sub: "New code column", tone: "green" },
      { icon: "search", label: "QA review", sub: "Validate codes", tone: "amber" },
      { icon: "chart", label: "Analysis", sub: "Themes & summary", tone: "blue" },
    ],
    role: "Scoped AI opportunities, evaluated accuracy, speed and cost using dummy data, and built the Google Sheets and Apps Script integration. Supported implementation planning, QA and stakeholder enablement.",
    governance:
      "Assessed output accuracy and potential bias, human review of coded responses, data-handling controls and use of approved tools.",
    tech: ["ChatGPT", "Google Sheets", "Google Apps Script"],
    image: {
      src: "/workflows/survey-coding.png",
      alt: "Infographic of the AI Survey Response Coding workflow using illustrative dummy responses: responses, coding list, Apps Script and ChatGPT, coded sheet, QA and analysis.",
      width: 1774,
      height: 887,
    },
    details: {
      problem: {
        paragraphs: [
          "Open-ended survey responses had to be coded into themes before they could be analysed. This was done manually or by an external vendor, which took days and added cost to each study.",
        ],
        placeholders: ["How often surveys are run and how the coding delay affected research timelines."],
      },
      architecture: [
        {
          icon: "survey",
          label: "Survey responses collected",
          tone: "blue",
          text: "Open-ended responses are added to a Google Sheet, exported from a survey tool or uploaded manually.",
        },
        {
          icon: "list",
          label: "Provide coding list",
          tone: "green",
          text: "The user researcher supplies the list of codes and their descriptions/keywords.",
        },
        {
          icon: "code",
          label: "Run the script",
          tone: "purple",
          text: "A Google Apps Script sends each response and the coding list to ChatGPT, which identifies the closest code.",
        },
        {
          icon: "sheet",
          label: "Coded responses added",
          tone: "green",
          text: "The closest code for each response is written back to a new column in the sheet.",
        },
        {
          icon: "search",
          label: "Quality assurance",
          tone: "amber",
          text: "The user researcher reviews and updates codes where needed, or shares the coded sheet with a third-party vendor for QA.",
        },
        {
          icon: "chart",
          label: "Analyse and summarise",
          tone: "blue",
          text: "Coded data feeds pivot tables, charts and other analysis to identify key themes.",
        },
      ],
      implementation: {
        bullets: [
          "Scoped where AI could replace manual coding and defined the evaluation criteria: accuracy, processing speed and cost.",
          "Evaluated the approach using dummy data only.",
          "Built the Google Sheets and Apps Script integration: the script loops through responses, calls ChatGPT with the response and the coding list, and writes the matched code back to the sheet.",
          "Kept the workflow inside Google Sheets so researchers could run it without new tools.",
        ],
        placeholders: ["How the API connection and credentials are managed, and any prompt design decisions."],
      },
      governance: {
        assessed: [
          "Output accuracy and potential bias in AI-assigned codes.",
          "The level of human review needed (researcher review or third-party vendor QA).",
          "Data-handling controls and use of approved tools only.",
        ],
        placeholders: [
          "Which of these controls were put in place versus recommended, and any approval received.",
        ],
      },
      adoption: {
        bullets: [
          "Supported implementation planning with stakeholders.",
          "Designed the QA process: researcher review or third-party vendor review.",
          "Stakeholder enablement on how to run the script and check outputs.",
        ],
        placeholders: ["Current status (pilot, planned or live) and any feedback received."],
      },
      results: [
        { kind: "Assessment estimate", text: "75% reduction in external survey coding costs (documented implementation assessment)." },
        { kind: "Assessment estimate", text: "Coding time reduced from days to minutes (documented implementation assessment)." },
      ],
      lessons: {
        placeholders: ["What the dummy-data evaluation showed about accuracy, and what you would change."],
      },
    },
  },

  {
    id: "events-discovery",
    number: "04",
    category: "Personal Project",
    title: "AI-Powered Events Discovery",
    project: "WeOutside.ai",
    description:
      "An AI-powered events discovery project combining an events database, AI search and automated personalised email recommendations.",
    accent: "purple",
    metrics: [{ after: "10+", caption: "personalised emails a month no longer written by hand (est.)" }],
    workflow: [
      { icon: "user", label: "Visitor signup", sub: "City & interests", tone: "blue" },
      { icon: "sheet", label: "Mailing list", sub: "Google Sheets", tone: "green" },
      { icon: "workflow", label: "n8n", sub: "Automation", tone: "amber" },
      { icon: "agent", label: "AI agent", sub: "Searches events DB", tone: "purple" },
      { icon: "mail", label: "Personalised email", sub: "Via SMTP", tone: "blue" },
    ],
    role: "Designed and built the end-to-end workflow, connected lead capture and the events database, configured the AI agent to find relevant events, integrated email delivery and iterated on the workflow.",
    governance: "Personal data handling, access permissions, email deliverability and appropriate handling of user information.",
    tech: ["n8n", "ChatGPT", "AI Agents", "Google Sheets", "SMTP"],
    liveUrl: "https://weoutside.ai",
    image: {
      src: "/workflows/events-discovery.png",
      alt: "Infographic of the WeOutside.ai workflow: visitor signup, lead captured in Google Sheets, n8n automation, AI agent selecting events, personalised email.",
      width: 1774,
      height: 887,
    },
    details: {
      problem: {
        paragraphs: [
          "Each new subscriber should get recommendations that match their city, travel plans and interests. Writing these emails by hand doesn't scale and delays the first contact with each new subscriber.",
        ],
      },
      architecture: [
        {
          icon: "user",
          label: "Visitor shares preferences",
          tone: "blue",
          text: "The landing page asks for city, travel dates and event preferences.",
        },
        {
          icon: "sheet",
          label: "Lead captured",
          tone: "green",
          text: "Name, email and preferences are stored in a Google Sheets mailing list.",
        },
        {
          icon: "workflow",
          label: "n8n automation triggered",
          tone: "amber",
          text: "A workflow runs every hour to check for new entries, then reads and aggregates the events database (244 entries) with a JavaScript step to prepare it for the agent.",
        },
        {
          icon: "agent",
          label: "AI agent finds events",
          tone: "purple",
          text: "An AI agent backed by an OpenAI chat model searches the events database, filters by city and interests and selects 2–3 relevant events.",
        },
        {
          icon: "mail",
          label: "Personalised email sent",
          tone: "blue",
          text: "SMTP sends a tailored welcome email with event recommendations and blog updates.",
        },
      ],
      implementation: {
        paragraphs: ["The n8n workflow is built from these nodes:"],
        bullets: [
          "Get mailing list recipients: Google Sheets trigger on new rows.",
          "Get all events in database: Google Sheets read.",
          "Code in JavaScript: aggregates event data and prepares the agent input.",
          "AI Agent with an OpenAI Chat Model: selects the matching events and drafts the email content.",
          "Send an Email: delivers the personalised email over SMTP.",
        ],
        placeholders: ["How the agent's prompt is structured and how duplicate or failed sends are handled."],
      },
      governance: {
        implemented: ["Security measures across the webpage, events database and mailing list to protect personal data."],
        considerations: [
          "Collecting only the data needed for recommendations (name, email, city, preferences).",
          "Limiting who can access the mailing list and automation credentials.",
          "Email deliverability and user consent to receive emails.",
          "Accuracy of AI-selected event details before they reach subscribers.",
        ],
        placeholders: ["The specific safeguards in place (e.g. sheet sharing settings, credential storage, unsubscribe handling)."],
      },
      adoption: {
        paragraphs: ["Built and iterated as a personal project, refining the workflow and agent behaviour over time."],
        placeholders: ["Notable iterations made and what prompted them."],
      },
      results: [
        { kind: "Outcome", text: "Automated journey from signup to personalised recommendations." },
        { kind: "Estimate", text: "Removes the need to manually write 10+ personalised emails per month (current documented estimate)." },
      ],
      lessons: {
        placeholders: ["What building an agent-based workflow end-to-end taught you."],
      },
    },
  },
];
