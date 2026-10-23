import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PROFILE, type Copy, type Lang } from "../content";

type Props = {
  t: Copy;
  lang: Lang;
  onLang: (l: Lang) => void;
};

const SPRING = { type: "spring", bounce: 0.22, duration: 0.55 } as const;

/**
 * Barra superior inspirada en la "Dynamic Island": una píldora compacta que
 * se expande en el lugar y muestra navegación, idioma y contacto.
 */
export default function Island({ t, lang, onLang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const links = [
    { href: "#proyectos", label: t.nav.projects },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.div
        ref={ref}
        layout
        transition={SPRING}
        style={{ borderRadius: 28 }}
        className={`pointer-events-auto overflow-hidden bg-ink text-paper shadow-[0_12px_40px_-12px_rgba(15,42,67,0.55)] ${
          open ? "w-[min(92vw,26rem)]" : "w-[15.5rem]"
        }`}
      >
        <motion.button
          layout="position"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.island.close : t.island.menu}
          className="flex w-full cursor-pointer items-center gap-3 px-3 py-2.5 text-left"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent font-serif text-[0.8rem] font-semibold">
            GD
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-sm font-semibold">{PROFILE.name}</span>
            <span className="flex items-center gap-1.5 text-[0.7rem] text-paper/70">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {t.island.available}
            </span>
          </span>
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={SPRING}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 shrink-0 text-paper/70"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </motion.button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="px-3 pb-3"
            >
              <nav className="grid grid-cols-3 gap-1.5" aria-label="Principal">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-paper/10 px-3 py-2 text-center text-sm font-medium transition-colors hover:bg-paper/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-2 flex items-center gap-2">
                <div
                  role="group"
                  aria-label="Idioma / Language"
                  className="flex rounded-xl bg-paper/10 p-0.5 text-xs font-semibold"
                >
                  {(["es", "en"] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => onLang(l)}
                      aria-pressed={lang === l}
                      className={`cursor-pointer rounded-[0.65rem] px-3 py-1.5 uppercase transition-colors ${
                        lang === l ? "bg-paper text-ink" : "text-paper/75 hover:text-paper"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="ml-auto flex-1 rounded-xl bg-accent px-3 py-2 text-center text-sm font-semibold transition-colors hover:bg-teal-600"
                >
                  {t.island.mail}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
