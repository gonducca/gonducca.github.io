# Portfolio · Gonzalo Ducca

Sitio de portfolio bilingüe (ES/EN) hecho con React, Vite, Tailwind CSS y Motion.
La barra superior es una píldora que se expande, inspirada en la Dynamic Island de [Cult UI](https://www.cult-ui.com/docs/components/dynamic-island).

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # revisa tipos y genera dist/
```

## Qué editar

- `src/content.ts`: todos los textos (ES y EN), proyectos, métricas y links. Es el único archivo que hace falta tocar para agregar o cambiar un proyecto.
- `src/index.css`: colores y tipografías (bloque `@theme`).

## Publicar en GitHub Pages

1. Crear un repo (por ejemplo `gonducca.github.io` para tener la URL `https://gonducca.github.io`) y subir este proyecto a la rama `main`.
2. En el repo: Settings → Pages → Source: **GitHub Actions**.
3. Cada push a `main` publica el sitio con `.github/workflows/deploy.yml`.
