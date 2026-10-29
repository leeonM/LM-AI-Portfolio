import { ArrowRight, ArrowUpRight, Clock, Mail, ShieldCheck, UserRound, Wrench } from "lucide-react";
import type { Metric, Solution } from "@/data/types";
import { toneStyles } from "./icons";
import { TechTagList } from "./TechTag";
import { WorkflowDiagram } from "./WorkflowDiagram";

type Props = {
  solution: Solution;
  onOpen: (solution: Solution) => void;
};

export function SolutionCard({ solution, onOpen }: Props) {
  const tone = toneStyles[solution.accent];
  const headingId = `${solution.id}-title`;
  const MetricIcon = solution.id === "events-discovery" ? Mail : Clock;

  return (
    <article
      aria-labelledby={headingId}
      className="flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(30,41,99,0.18)] sm:p-6"
    >
      <header className="flex flex-col gap-4">
        <div className="flex gap-4">
          <span
            className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ring-1 ${tone.badge}`}
            aria-hidden
          >
            {solution.number}
          </span>
          <div className="min-w-0">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${tone.text}`}>
              <span className="sr-only">Solution {solution.number}: </span>
              {solution.category}
              {solution.project && <span className="text-slate-500"> · {solution.project}</span>}
            </p>
            <h3 id={headingId} className="mt-1 text-xl font-bold tracking-tight text-navy">
              {solution.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{solution.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Impact</p>
          <dl className="flex flex-wrap gap-x-7 gap-y-3">
            {solution.metrics.map((m) => (
              <MetricBlock key={m.caption} metric={m} Icon={MetricIcon} />
            ))}
          </dl>
        </div>
      </header>

      <WorkflowDiagram steps={solution.workflow} label={`${solution.title} workflow`} />

      {solution.useCases && (
        <div className="grid gap-3 sm:grid-cols-2">
          {solution.useCases.map((u) => (
            <section
              key={u.key}
              aria-label={u.title}
              className="rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50/60 to-white p-3.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white" aria-hidden>
                  {u.key}
                </span>
                <div>
                  <h4 className="text-sm font-semibold leading-tight text-navy">{u.title}</h4>
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">{u.audience}</p>
                </div>
              </div>
              <ul className="mt-2.5 space-y-1 text-[13px] text-slate-700">
                {u.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-violet-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <div className="grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-3 sm:gap-5">
        <InfoBlock icon={<UserRound className="size-4" />} title="My role">
          <p>{solution.role}</p>
        </InfoBlock>
        <InfoBlock icon={<ShieldCheck className="size-4" />} title="Risk & governance">
          <p>{solution.governance}</p>
        </InfoBlock>
        <InfoBlock icon={<Wrench className="size-4" />} title="Technology">
          <TechTagList tags={solution.tech} />
        </InfoBlock>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2">
        <button
          type="button"
          onClick={() => onOpen(solution)}
          className="group inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-blue-700 hover:text-blue-900"
          aria-haspopup="dialog"
        >
          View full details<span className="sr-only">: {solution.title}</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        {solution.liveUrl && (
          <a
            href={solution.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-violet-700 hover:text-violet-900"
          >
            View live project
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}

function MetricBlock({ metric, Icon }: { metric: Metric; Icon: typeof Clock }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon aria-hidden className="size-7 shrink-0 text-emerald-600" strokeWidth={1.75} />
      <div>
        <dt className="sr-only">Impact</dt>
        <dd className="text-lg font-bold leading-tight text-emerald-700">
          {metric.before && (
            <>
              <span className="text-slate-500 line-through decoration-slate-300 decoration-1">{metric.before}</span>
              <span aria-hidden> → </span>
              <span className="sr-only"> reduced to </span>
            </>
          )}
          {metric.after}
        </dd>
        <dd className="text-xs leading-snug text-slate-500">{metric.caption}</dd>
      </div>
    </div>
  );
}

function InfoBlock({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0">
      <h4 className="flex items-center gap-1.5 text-[13px] font-semibold text-navy">
        <span aria-hidden className="text-blue-600">
          {icon}
        </span>
        {title}
      </h4>
      <div className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}
