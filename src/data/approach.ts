export const capabilities = [
  {
    key: "identify",
    title: "Identify opportunity",
    text: "Analyse processes, assess business impact and evaluate potential AI use cases.",
  },
  {
    key: "build",
    title: "Build and integrate",
    text: "Configure AI solutions and connect the systems, data sources and applications required to make them work.",
  },
  {
    key: "govern",
    title: "Assess risk and govern",
    text: "Evaluate data handling, accuracy, privacy and operational risks, with appropriate safeguards and human oversight.",
  },
  {
    key: "enable",
    title: "Enable users and iterate",
    text: "Support adoption, guide end users, gather feedback and continuously improve solutions.",
  },
] as const;

export const approachStages = [
  {
    key: "identify",
    title: "Identify the opportunity",
    text: "Map the current process and find the repetitive, time-consuming steps.",
  },
  {
    key: "assess",
    title: "Assess impact and risk",
    text: "Estimate time saved, then review data sensitivity, accuracy and stakeholder risk.",
  },
  {
    key: "build",
    title: "Build and integrate",
    text: "Configure the AI and connect the sheets, scripts and automations it relies on.",
  },
  {
    key: "enable",
    title: "Test and enable users",
    text: "Run UAT and pilots, write user guidance and keep a human reviewing outputs.",
  },
  {
    key: "improve",
    title: "Measure and improve",
    text: "Track performance, gather feedback and iterate on prompts and workflows.",
  },
] as const;
