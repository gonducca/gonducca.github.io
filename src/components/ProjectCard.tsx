import { motion } from "motion/react";
import type { Project } from "../content";

const TONES = {
  done: "bg-accent-soft text-accent",
  wip: "bg-amber-400/10 text-amber-300",
  improving: "bg-sky-400/10 text-sky-300",
} as const;

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/40 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance sm:text-2xl">
          {p.name}
        </h3>
        {p.status && (
          <span
            className={`mt-1 shrink-0 rounded-md px-2 py-1 font-mono text-[0.68rem] font-medium ${TONES[p.status.tone]}`}
          >
            {p.status.label}
          </span>
        )}
      </div>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.question}</p>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-line py-5 sm:grid-cols-3">
        {p.stats.map((s) => (
          <div key={s.label}>
            <dt className="font-mono text-xl leading-none font-semibold text-accent sm:text-2xl">
              {s.value}
            </dt>
            <dd className="mt-1.5 text-xs leading-snug text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>

      {p.finding && (
        <p className="mt-5 border-l-2 border-accent pl-4 text-[0.92rem] leading-relaxed">
          {p.finding}
        </p>
      )}
      {p.role && (
        <p className="mt-5 border-l-2 border-line pl-4 text-[0.92rem] leading-relaxed text-muted">
          {p.role}
        </p>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.tools.map((tool) => (
          <li
            key={tool}
            className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tool}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {p.links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              i === 0
                ? "bg-accent text-onaccent hover:bg-teal-300"
                : "border border-line text-ink hover:border-accent/60"
            }`}
          >
            {l.label}
            <ArrowIcon />
          </a>
        ))}
      </div>
    </motion.article>
  );
}
