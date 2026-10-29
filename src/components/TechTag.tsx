export function TechTag({ label }: { label: string }) {
  return (
    <li className="rounded-full border border-blue-100 bg-blue-50/60 px-2.5 py-0.5 text-xs font-medium text-blue-800">
      {label}
    </li>
  );
}

export function TechTagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technology">
      {tags.map((t) => (
        <TechTag key={t} label={t} />
      ))}
    </ul>
  );
}
