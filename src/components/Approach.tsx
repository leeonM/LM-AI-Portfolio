import { ChevronRight, ClipboardCheck, Puzzle, Scale, Search, TrendingUp, type LucideIcon } from "lucide-react";
import { approachStages } from "@/data/approach";

const icons: Record<(typeof approachStages)[number]["key"], LucideIcon> = {
  identify: Search,
  assess: Scale,
  build: Puzzle,
  enable: ClipboardCheck,
  improve: TrendingUp,
};

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-blue-50/40 p-6 sm:p-8">
        <h2 id="approach-title" className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          How I approach AI implementation
        </h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {approachStages.map((stage, i) => {
            const Icon = icons[stage.key];
            return (
              <li key={stage.key} className="relative flex gap-3 lg:flex-col">
                <div className="flex items-center gap-2">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm ring-1 ring-slate-200">
                    <Icon aria-hidden className="size-5" strokeWidth={1.8} />
                  </span>
                  {i < approachStages.length - 1 && (
                    <ChevronRight aria-hidden className="hidden size-4 text-slate-300 lg:ml-auto lg:mr-2 lg:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    <span className="mr-1 text-blue-600">{i + 1}.</span>
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-slate-600">{stage.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
