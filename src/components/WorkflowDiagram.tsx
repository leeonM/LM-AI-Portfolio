import { ArrowDown, ArrowRight } from "lucide-react";
import type { WorkflowStep } from "@/data/types";
import { stepIcons, toneStyles } from "./icons";

type Props = {
  steps: WorkflowStep[];
  label: string;
  size?: "compact" | "large";
};

// Horizontal on wider screens, vertical on phones so labels never get squeezed.
export function WorkflowDiagram({ steps, label, size = "compact" }: Props) {
  const large = size === "large";

  return (
    <ol
      aria-label={label}
      className={`flex flex-col items-stretch gap-1 ${large ? "md:flex-row" : "sm:flex-row"}`}
    >
      {steps.map((step, i) => {
        const Icon = stepIcons[step.icon];
        const tone = toneStyles[step.tone ?? "slate"];
        const last = i === steps.length - 1;

        return (
          <li
            key={step.label}
            className={`flex flex-col items-center gap-1 ${large ? "md:flex-1 md:flex-row" : "sm:min-w-0 sm:flex-1 sm:flex-row"}`}
          >
            <div
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 ${tone.node} ${
                large
                  ? "md:h-full md:flex-col md:justify-center md:gap-2 md:px-2 md:py-4 md:text-center"
                  : "sm:h-full sm:flex-col sm:justify-center sm:gap-1.5 sm:px-1 sm:py-3 sm:text-center"
              }`}
            >
              <Icon aria-hidden className={`shrink-0 ${tone.icon} ${large ? "size-6" : "size-5"}`} strokeWidth={1.75} />
              <div className="min-w-0">
                <p className={`hyphens-auto font-semibold leading-tight text-navy ${large ? "text-sm" : "text-[12.5px]"}`}>
                  {step.label}
                </p>
                {step.sub && (
                  <p className={`mt-0.5 leading-tight text-slate-500 ${large ? "text-xs" : "text-[11px]"}`}>
                    {step.sub}
                  </p>
                )}
              </div>
            </div>
            {!last && (
              <span aria-hidden className="flex shrink-0 items-center justify-center text-blue-500">
                <ArrowDown className={`size-4 ${large ? "md:hidden" : "sm:hidden"}`} />
                <ArrowRight className={`hidden size-4 ${large ? "md:block" : "sm:block"}`} />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
