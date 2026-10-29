import { site } from "@/config/site";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 rounded-md sm:gap-5">
          <span className="text-xl font-extrabold tracking-tight text-navy">{site.initials}</span>
          <span className="hidden text-[13px] font-semibold uppercase tracking-[0.16em] text-navy sm:inline">
            AI Solutions <span className="text-slate-400">Portfolio</span>
          </span>
          <span className="sr-only">Back to top</span>
        </a>
        <ul className="flex items-center text-sm font-medium text-slate-700 sm:gap-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-2 py-1.5 hover:text-blue-700 sm:px-3">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
