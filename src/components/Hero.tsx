import { Puzzle, Search, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { capabilities } from "@/data/approach";

const icons: Record<(typeof capabilities)[number]["key"], LucideIcon> = {
  identify: Search,
  build: Puzzle,
  govern: ShieldCheck,
  enable: Users,
};

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_10%_0%,rgba(59,130,246,0.08),transparent_70%),radial-gradient(50%_70%_at_95%_10%,rgba(139,92,246,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:pb-12 lg:pt-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
            Real problems. Practical AI solutions.
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
            AI solutions that make work{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
              simpler and more impactful.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            From identifying opportunities to building and integrating AI solutions, I help teams reduce manual
            effort, improve consistency and work more effectively.
          </p>
        </div>

        <ul className="grid gap-x-6 gap-y-5 self-center sm:grid-cols-2 lg:border-l lg:border-slate-200 lg:pl-10">
          {capabilities.map((c) => {
            const Icon = icons[c.key];
            return (
              <li key={c.key} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                  <Icon aria-hidden className="size-[18px]" strokeWidth={1.9} />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-navy">{c.title}</h2>
                  <p className="mt-0.5 text-[13px] leading-snug text-slate-600">{c.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
