"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { site } from "@/config/site";
import type { DetailSection, ResultKind, Solution } from "@/data/types";
import { stepIcons, toneStyles } from "./icons";
import { TechTagList } from "./TechTag";
import { WorkflowDiagram } from "./WorkflowDiagram";

type Props = {
  solution: Solution | null;
  onClose: () => void;
};

// Native <dialog> gives us Esc-to-close, a focus trap and an inert background.
export function SolutionModal({ solution, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (solution && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.documentElement.style.overflow = "hidden";
    } else if (!solution && dialog.open) {
      dialog.close();
    }
  }, [solution]);

  const handleClose = () => {
    document.documentElement.style.overflow = "";
    onClose();
  };

  const s = solution;
  const tone = s ? toneStyles[s.accent] : toneStyles.blue;

  return (
    <dialog
      ref={ref}
      aria-labelledby="modal-title"
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-transparent p-0 backdrop:bg-navy/50 backdrop:backdrop-blur-[2px] sm:m-auto sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-4xl sm:rounded-2xl"
    >
      {s && (
        <div className="min-h-full bg-white sm:min-h-0 sm:rounded-2xl">
          <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
            <div className="min-w-0">
              <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${tone.text}`}>
                {s.number} · {s.category}
                {s.project && <span className="text-slate-500"> · {s.project}</span>}
              </p>
              <h2 id="modal-title" className="mt-1 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                {s.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="-mr-2 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-navy"
              aria-label="Close details"
              autoFocus
            >
              <X className="size-5" aria-hidden />
            </button>
          </header>

          <div className="space-y-9 px-5 py-6 sm:px-8 sm:py-8">
            <Section title="Business problem">
              <Prose section={s.details.problem} />
            </Section>

            <Section title="Solution architecture">
              {/* On phones the numbered list below already reads as a vertical flow */}
              <div className="mb-5 hidden md:block">
                <WorkflowDiagram steps={s.details.architecture} label={`${s.title} detailed architecture`} size="large" />
              </div>
              <ol className="space-y-3">
                {s.details.architecture.map((step, i) => {
                  const Icon = stepIcons[step.icon];
                  const t = toneStyles[step.tone ?? "slate"];
                  return (
                    <li key={step.label} className="flex gap-3">
                      <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ring-1 ${t.badge}`}>
                        {i + 1}
                      </span>
                      <div className="text-sm leading-relaxed">
                        <p className="flex items-center gap-1.5 font-semibold text-navy">
                          <Icon aria-hidden className={`size-4 ${t.icon}`} />
                          {step.label}
                        </p>
                        <p className="text-slate-600">{step.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <figure className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <a
                  href={s.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                  aria-label="Open the full-size workflow infographic in a new tab"
                >
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    sizes="(min-width: 896px) 832px, 100vw"
                    className="h-auto w-full"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-navy opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="size-3.5" aria-hidden /> Full size
                  </span>
                </a>
                <figcaption className="border-t border-slate-100 bg-slate-50 px-4 py-2 text-xs text-slate-500">
                  Workflow infographic, using sanitised and illustrative data.
                </figcaption>
              </figure>
            </Section>

            <Section title="Implementation">
              <Prose section={s.details.implementation} />
              <div className="mt-4">
                <TechTagList tags={s.tech} />
              </div>
            </Section>

            <Section title="Risk and governance">
              <div className="grid gap-4 sm:grid-cols-2">
                <GovList title="Safeguards in place" items={s.details.governance.implemented} tone="green" />
                <GovList title="Assessed" items={s.details.governance.assessed} tone="blue" />
                <GovList title="General considerations" items={s.details.governance.considerations} tone="slate" />
              </div>
              <Placeholders items={s.details.governance.placeholders} />
            </Section>

            <Section title="Adoption and continuous improvement">
              <Prose section={s.details.adoption} ordered />
            </Section>

            <Section title="Impact and lessons learned">
              <ul className="space-y-2.5">
                {s.details.results.map((r) => (
                  <li key={r.text} className="flex flex-col gap-1.5 text-sm leading-relaxed text-slate-700 sm:flex-row sm:items-baseline sm:gap-3">
                    <ResultBadge kind={r.kind} />
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-sm font-semibold text-navy">Lessons learned</h4>
              <Prose section={s.details.lessons} />
            </Section>

            {s.liveUrl && (
              <a
                href={s.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-950"
              >
                View live project <ArrowUpRight className="size-4" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{title}</h3>
      {children}
    </section>
  );
}

function Prose({ section, ordered = false }: { section: DetailSection; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <div className="space-y-3 text-sm leading-relaxed text-slate-700">
      {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      {section.bullets && (
        <List className={`space-y-1.5 pl-5 ${ordered ? "list-decimal marker:font-semibold marker:text-blue-600" : "list-disc marker:text-blue-400"}`}>
          {section.bullets.map((b) => (
            <li key={b} className="pl-1">
              {b}
            </li>
          ))}
        </List>
      )}
      <Placeholders items={section.placeholders} />
    </div>
  );
}

function Placeholders({ items }: { items?: string[] }) {
  if (!site.showPlaceholders || !items?.length) return null;
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((p) => (
        <li key={p} className="rounded-lg border border-dashed border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <span className="font-semibold">[Placeholder]</span> {p}
        </li>
      ))}
    </ul>
  );
}

const govTone = {
  green: "border-emerald-100 bg-emerald-50/50 marker:text-emerald-500",
  blue: "border-blue-100 bg-blue-50/50 marker:text-blue-500",
  slate: "border-slate-200 bg-slate-50 marker:text-slate-400",
};

function GovList({ title, items, tone }: { title: string; items?: string[]; tone: keyof typeof govTone }) {
  if (!items?.length) return null;
  return (
    <div className={`rounded-xl border p-4 ${govTone[tone]}`}>
      <h4 className="text-sm font-semibold text-navy">{title}</h4>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

const resultStyles: Record<ResultKind, string> = {
  Measured: "bg-emerald-100 text-emerald-800",
  Estimate: "bg-amber-100 text-amber-900",
  "Assessment estimate": "bg-amber-100 text-amber-900",
  Outcome: "bg-blue-100 text-blue-800",
};

function ResultBadge({ kind }: { kind: ResultKind }) {
  return (
    <span className={`w-fit shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${resultStyles[kind]}`}>
      {kind}
    </span>
  );
}
