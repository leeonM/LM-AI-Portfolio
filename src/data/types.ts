export type IconKey =
  | "sheet"
  | "excel"
  | "database"
  | "gpt"
  | "chart"
  | "python"
  | "search"
  | "slides"
  | "survey"
  | "list"
  | "code"
  | "user"
  | "workflow"
  | "agent"
  | "mail"
  | "shield";

export type Tone = "blue" | "purple" | "green" | "amber" | "slate";

export type WorkflowStep = {
  icon: IconKey;
  label: string;
  sub?: string;
  tone?: Tone;
};

export type ArchitectureStep = WorkflowStep & { text: string };

export type Metric = {
  before?: string;
  after: string;
  caption: string;
};

export type UseCase = {
  key: string;
  title: string;
  audience: string;
  points: string[];
};

export type DetailSection = {
  paragraphs?: string[];
  bullets?: string[];
  placeholders?: string[];
};

export type ResultKind = "Measured" | "Estimate" | "Assessment estimate" | "Outcome";

export type Solution = {
  id: string;
  number: string;
  category: string;
  title: string;
  project?: string;
  description: string;
  accent: Tone;
  metrics: Metric[];
  workflow: WorkflowStep[];
  useCases?: UseCase[];
  role: string;
  governance: string;
  tech: string[];
  liveUrl?: string;
  image: { src: string; alt: string; width: number; height: number };
  details: {
    problem: DetailSection;
    architecture: ArchitectureStep[];
    implementation: DetailSection;
    governance: {
      implemented?: string[];
      assessed?: string[];
      considerations?: string[];
      placeholders?: string[];
    };
    adoption: DetailSection;
    results: { kind: ResultKind; text: string }[];
    lessons: DetailSection;
  };
};
