import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer id="about" aria-labelledby="about-title" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">About</p>
          <h2 id="about-title" className="mt-3 text-2xl font-bold tracking-tight text-navy">
            Practical AI, implemented end to end.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            I work where business operations meet AI. I find the processes that cost teams time, build solutions
            that connect to the tools they already use, and stay involved through testing, rollout and improvement
            so the solution keeps getting used.
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-3">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
            >
              <Mail aria-hidden className="size-4" /> {site.email}
            </a>
          </li>
          {site.linkedinUrl && (
            <li>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-navy hover:border-blue-300 hover:text-blue-700"
              >
                LinkedIn <ArrowUpRight aria-hidden className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          )}
          <li>
            <a
              href={site.weoutsideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-navy hover:border-violet-300 hover:text-violet-700"
            >
              WeOutside.ai <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-slate-100">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {site.name}. Workflows shown use sanitised, illustrative data. Employer names are
          withheld.
        </p>
      </div>
    </footer>
  );
}
