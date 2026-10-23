export type Lang = "es" | "en";

export type Project = {
  id: string;
  name: string;
  status?: { label: string; tone: "done" | "wip" | "improving" };
  question: string;
  stats: { value: string; label: string }[];
  finding?: string;
  role?: string;
  tools: string[];
  links: { label: string; href: string }[];
};

export type Copy = {
  nav: { projects: string; about: string; contact: string };
  island: { available: string; menu: string; close: string; mail: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
  };
  projects: { title: string; sub: string; items: Project[]; viewCode: string };
  about: { title: string; body: string; skillsTitle: string; skills: string[] };
  contact: { title: string; body: string; email: string };
  footer: string;
};

export const PROFILE = {
  name: "Gonzalo Ducca",
  email: "gonzaloducca@gmail.com",
  github: "https://github.com/gonducca",
  linkedin: "https://www.linkedin.com/in/gonzalo-ducca-b079011b2/",
};

export const content: Record<Lang, Copy> = {
  es: {
    nav: { projects: "Proyectos", about: "Sobre mí", contact: "Contacto" },
    island: {
      available: "Abierto a propuestas",
      menu: "Abrir menú",
      close: "Cerrar menú",
      mail: "Escribime",
    },
    hero: {
      eyebrow: "Data Scientist · Buenos Aires",
      title: "Datos con rigor estadístico, contados con claridad.",
      lead: "Soy profesor de matemática y científico de datos. Trabajo con Python, SQL y Power BI, y me importa que cada número responda una pregunta de negocio y tenga un margen de error que se pueda defender.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
    },
    projects: {
      title: "Proyectos",
      sub: "Cada proyecto parte de una pregunta concreta. El detalle técnico y el código están en GitHub.",
      viewCode: "Ver código",
      items: [
        {
          id: "bcra",
          name: "Tablero del sistema financiero argentino",
          status: { label: "Completo", tone: "done" },
          question:
            "¿Fue atractivo ofrecer plazos fijos en pesos? Medí la tasa real contra la inflación y la crucé con la evolución de las reservas del BCRA.",
          stats: [
            { value: "41 de 59", label: "meses con tasa real negativa" },
            { value: "4 de 12", label: "últimos meses con ganancia real" },
            { value: "7", label: "consultas SQL para validar las medidas DAX" },
          ],
          finding:
            "No hay un patrón simple entre tasa real y reservas: el 71 % de los meses con caída de reservas tuvo tasa real negativa, contra el 69 % de todos los meses.",
          tools: ["Power BI", "DAX", "SQL", "API del BCRA"],
          links: [
            { label: "GitHub", href: "https://github.com/gonducca/BCRA-PowerBI" },
          ],
        },
        {
          id: "readmission",
          name: "Alerta de reinternación a 30 días",
          status: { label: "Con app en vivo", tone: "done" },
          question:
            "¿Qué pacientes diabéticos tienen más riesgo de volver al hospital dentro de los 30 días? Un modelo de alerta temprana para priorizar el seguimiento antes del alta.",
          stats: [
            { value: "0,67", label: "ROC-AUC (±0,005, validación cruzada de 5 folds)" },
            { value: "101.766", label: "internaciones, 1999–2008" },
            { value: "11,2 %", label: "tasa de reinternación (clase minoritaria)" },
          ],
          finding:
            "El AUC está dentro del rango que reporta la literatura para este dataset (0,63–0,72). Lo que importa es entender qué mide y por qué no es más alto con datos administrativos.",
          tools: ["Python", "scikit-learn", "XGBoost", "SHAP", "Streamlit"],
          links: [
            { label: "App en vivo", href: "https://readmission-alert-project.streamlit.app/" },
            { label: "GitHub", href: "https://github.com/gonducca/readmission-alert" },
          ],
        },
        {
          id: "observatorio",
          name: "Observatorio macro-financiero: Colombia vs. Argentina",
          status: { label: "En construcción", tone: "wip" },
          question:
            "¿Cómo se comportan la inflación, el tipo de cambio y las tasas de interés en dos economías con regímenes tan distintos? Pipeline con datos oficiales, base común en PostgreSQL y dashboards.",
          stats: [
            { value: "6", label: "fuentes oficiales (DANE, FMI, BCRA, INDEC y más)" },
            { value: "2017–hoy", label: "series mensuales" },
            { value: "2", label: "dashboards: Power BI y Streamlit" },
          ],
          role: "Proyecto en equipo con Simón Bedoya Montiel. Mi parte: los datos de Argentina y el dashboard en Streamlit.",
          tools: ["Python", "pandas", "PostgreSQL", "Power BI", "Streamlit"],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/SimonBedoyaMontiel/observatorio-macro-colombia-argentina",
            },
          ],
        },
        {
          id: "pi2",
          name: "Siniestros viales en Buenos Aires",
          status: { label: "En mejora", tone: "improving" },
          question:
            "¿Cómo evolucionaron los siniestros viales en la Ciudad de Buenos Aires y dónde conviene actuar? Limpieza, exploración y dashboard con tres KPI de reducción.",
          stats: [
            { value: "3", label: "KPI definidos (homicidios, motociclistas, peatones)" },
            { value: "2020 → 2021", label: "salto en accidentes de motociclistas" },
          ],
          finding:
            "La reducción de siniestros no sigue un patrón claro y haría falta más información para optimizar el análisis.",
          tools: ["Python", "Power BI", "EDA"],
          links: [{ label: "GitHub", href: "https://github.com/gonducca/PI2" }],
        },
      ],
    },
    about: {
      title: "Sobre mí",
      body: "Data Scientist con background en profesorado de matemática y Teaching Assistant que me ayudaron a desarrollar el liderazgo de equipos y la resolución de problemas. Conocimientos en metodologías ágiles, flujos de trabajo, estructura de datos, evaluación de modelos, machine learning, MySQL y dashboard (Power BI). Con flexibilidad, resolución de problemas, comunicativo y liderazgo. Nivel de inglés: C1, avanzado. Incorporo herramientas de IA generativa (LLMs, prompt engineering) tanto en mi práctica docente como en mi flujo de trabajo técnico, explorando su aplicación en tareas de análisis y automatización.",
      skillsTitle: "Herramientas y temas",
      skills: [
        "Python",
        "SQL / MySQL",
        "Power BI",
        "DAX",
        "Machine learning",
        "Evaluación de modelos",
        "Streamlit",
        "Metodologías ágiles",
        "IA generativa",
        "Inglés C1",
      ],
    },
    contact: {
      title: "Hablemos",
      body: "Si estás armando un equipo de datos o tenés una pregunta que los números podrían responder, escribime.",
      email: "Escribir por mail",
    },
    footer: "Hecho con React y Tailwind.",
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    island: {
      available: "Open to work",
      menu: "Open menu",
      close: "Close menu",
      mail: "Email me",
    },
    hero: {
      eyebrow: "Data Scientist · Buenos Aires",
      title: "Statistical rigor, explained clearly.",
      lead: "I'm a mathematics teacher turned data scientist. I work with Python, SQL and Power BI, and I care that every number answers a business question and comes with an error margin I can defend.",
      ctaProjects: "See projects",
      ctaContact: "Contact",
    },
    projects: {
      title: "Projects",
      sub: "Each project starts from a concrete question. Technical detail and code live on GitHub.",
      viewCode: "View code",
      items: [
        {
          id: "bcra",
          name: "Argentine financial system dashboard",
          status: { label: "Complete", tone: "done" },
          question:
            "Was offering peso time deposits attractive? I measured the real interest rate against inflation and crossed it with the evolution of the central bank's reserves.",
          stats: [
            { value: "41 of 59", label: "months with a negative real rate" },
            { value: "4 of 12", label: "recent months with a real gain" },
            { value: "7", label: "SQL queries used to validate the DAX measures" },
          ],
          finding:
            "There is no simple pattern between real rates and reserves: 71% of the months with falling reserves had a negative real rate, versus 69% of all months.",
          tools: ["Power BI", "DAX", "SQL", "BCRA API"],
          links: [
            { label: "GitHub", href: "https://github.com/gonducca/BCRA-PowerBI" },
          ],
        },
        {
          id: "readmission",
          name: "30-day readmission early warning",
          status: { label: "Live app", tone: "done" },
          question:
            "Which diabetic patients are most likely to return to the hospital within 30 days? An early-warning model to prioritize follow-up before discharge.",
          stats: [
            { value: "0.67", label: "ROC-AUC (±0.005, 5-fold cross-validation)" },
            { value: "101,766", label: "hospital encounters, 1999–2008" },
            { value: "11.2%", label: "readmission rate (minority class)" },
          ],
          finding:
            "The AUC sits inside the range reported in the literature for this dataset (0.63–0.72). What matters is understanding what it measures and why administrative data caps it.",
          tools: ["Python", "scikit-learn", "XGBoost", "SHAP", "Streamlit"],
          links: [
            { label: "Live app", href: "https://readmission-alert-project.streamlit.app/" },
            { label: "GitHub", href: "https://github.com/gonducca/readmission-alert" },
          ],
        },
        {
          id: "observatorio",
          name: "Macro-financial observatory: Colombia vs. Argentina",
          status: { label: "In progress", tone: "wip" },
          question:
            "How do inflation, exchange rates and interest rates behave in two economies with very different regimes? A pipeline on official data, a shared PostgreSQL database and dashboards.",
          stats: [
            { value: "6", label: "official sources (DANE, IMF, BCRA, INDEC and more)" },
            { value: "2017–today", label: "monthly series" },
            { value: "2", label: "dashboards: Power BI and Streamlit" },
          ],
          role: "Team project with Simón Bedoya Montiel. My part: the Argentine data and the Streamlit dashboard.",
          tools: ["Python", "pandas", "PostgreSQL", "Power BI", "Streamlit"],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/SimonBedoyaMontiel/observatorio-macro-colombia-argentina",
            },
          ],
        },
        {
          id: "pi2",
          name: "Road accidents in Buenos Aires",
          status: { label: "Being improved", tone: "improving" },
          question:
            "How did road accidents evolve in Buenos Aires City and where should action focus? Cleaning, exploration and a dashboard with three reduction KPIs.",
          stats: [
            { value: "3", label: "KPIs defined (homicides, motorcyclists, pedestrians)" },
            { value: "2020 → 2021", label: "jump in motorcyclist accidents" },
          ],
          finding:
            "The reduction in accidents shows no clear pattern, and more information would be needed to sharpen the analysis.",
          tools: ["Python", "Power BI", "EDA"],
          links: [{ label: "GitHub", href: "https://github.com/gonducca/PI2" }],
        },
      ],
    },
    about: {
      title: "About me",
      body: "Data Scientist with a background in mathematics teaching and as a Teaching Assistant, which helped me develop team leadership and problem-solving skills. Knowledge of agile methodologies, workflows, data structures, model evaluation, machine learning, MySQL and dashboards (Power BI). Flexible, communicative, a problem solver and a leader. English level: C1, advanced. I use generative AI tools (LLMs, prompt engineering) in both my teaching practice and my technical workflow, exploring how they apply to analysis and automation tasks.",
      skillsTitle: "Tools and topics",
      skills: [
        "Python",
        "SQL / MySQL",
        "Power BI",
        "DAX",
        "Machine learning",
        "Model evaluation",
        "Streamlit",
        "Agile methods",
        "Generative AI",
        "English C1",
      ],
    },
    contact: {
      title: "Let's talk",
      body: "If you are building a data team or have a question the numbers could answer, write to me.",
      email: "Send an email",
    },
    footer: "Built with React and Tailwind.",
  },
};
