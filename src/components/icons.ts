import {
  Braces,
  BrainCircuit,
  ChartColumn,
  Database,
  FileCode,
  FileSpreadsheet,
  ListChecks,
  Mail,
  MessageSquareText,
  Presentation,
  SearchCheck,
  Sheet,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconKey, Tone } from "@/data/types";

export const stepIcons: Record<IconKey, LucideIcon> = {
  sheet: FileSpreadsheet,
  excel: Sheet,
  database: Database,
  gpt: Sparkles,
  chart: ChartColumn,
  python: FileCode,
  search: SearchCheck,
  slides: Presentation,
  survey: MessageSquareText,
  list: ListChecks,
  code: Braces,
  user: UserPlus,
  workflow: Workflow,
  agent: BrainCircuit,
  mail: Mail,
  shield: ShieldCheck,
};

// Full class strings so Tailwind can detect them.
export const toneStyles: Record<Tone, { node: string; icon: string; badge: string; text: string }> = {
  blue: {
    node: "bg-blue-50/70 border-blue-100",
    icon: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 ring-blue-100",
    text: "text-blue-700",
  },
  purple: {
    node: "bg-violet-50/70 border-violet-100",
    icon: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 ring-violet-100",
    text: "text-violet-700",
  },
  green: {
    node: "bg-emerald-50/70 border-emerald-100",
    icon: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    text: "text-emerald-700",
  },
  amber: {
    node: "bg-orange-50/70 border-orange-100",
    icon: "text-orange-600",
    badge: "bg-orange-50 text-orange-700 ring-orange-100",
    text: "text-orange-700",
  },
  slate: {
    node: "bg-slate-50 border-slate-200",
    icon: "text-slate-600",
    badge: "bg-slate-100 text-slate-700 ring-slate-200",
    text: "text-slate-700",
  },
};
