import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Island from "./components/Island";
import ProjectCard from "./components/ProjectCard";
import { PROFILE, content, type Lang } from "./content";

const STORAGE_KEY = "gd-portfolio-lang";

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* el storage puede estar bloqueado: se ignora */
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

const btnPrimary =
  "rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-onaccent transition-colors hover:bg-teal-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const btnGhost =
  "rounded-lg border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignorado */
    }
  }, [lang]);

  return (
    <>
      <Island t={t} lang={lang} onLang={setLang} />

      <main>
        {/* Portada */}
        <header className="relative overflow-hidden">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-48 left-1/2 h-[26rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-accent"
            >
              <span aria-hidden="true" className="text-muted">
                {">"}{" "}
              </span>
              {t.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl"
            >
              {t.hero.title}
              <span
                aria-hidden="true"
                className="cursor ml-1 inline-block h-[0.85em] w-[0.12em] translate-y-[0.1em] bg-accent"
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            >
              {t.hero.lead}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#proyectos" className={btnPrimary}>
                {t.hero.ctaProjects}
              </a>
              <a href="#contacto" className={btnGhost}>
                {t.hero.ctaContact}
              </a>
            </motion.div>
          </div>
        </header>

        {/* Proyectos */}
        <Section id="proyectos" index="01" title={t.projects.title}>
          <p className="mt-3 max-w-2xl text-muted">{t.projects.sub}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {t.projects.items.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </Section>

        {/* Sobre mí */}
        <Section id="sobre-mi" index="02" title={t.about.title}>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <p className="max-w-2xl text-[1.05rem] leading-8 text-ink/90">{t.about.body}</p>
            <div>
              <h3 className="font-mono text-xs tracking-wide text-muted uppercase">
                {t.about.skillsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.about.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-card px-3 py-1.5 font-mono text-xs"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contacto */}
        <Section id="contacto" index="03" title={t.contact.title}>
          <p className="mt-3 max-w-xl text-muted">{t.contact.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`} className={btnPrimary}>
              {t.contact.email}
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener" className={btnGhost}>
              LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className={btnGhost}>
              GitHub
            </a>
          </div>
          <p className="mt-6 font-mono text-sm text-muted">{PROFILE.email}</p>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-8 font-mono text-xs text-muted sm:px-8">
          <span>© 2026 {PROFILE.name}</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  );
}
