"use client";

import { useState } from "react";
import { solutions } from "@/data/solutions";
import type { Solution } from "@/data/types";
import { SolutionCard } from "./SolutionCard";
import { SolutionModal } from "./SolutionModal";

export function Solutions() {
  const [active, setActive] = useState<Solution | null>(null);

  return (
    <section id="solutions" aria-labelledby="solutions-title" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 id="solutions-title" className="sr-only">
        AI solutions
      </h2>
      <div className="grid gap-5 lg:grid-cols-2">
        {solutions.map((s) => (
          <SolutionCard key={s.id} solution={s} onOpen={setActive} />
        ))}
      </div>
      <SolutionModal solution={active} onClose={() => setActive(null)} />
    </section>
  );
}
