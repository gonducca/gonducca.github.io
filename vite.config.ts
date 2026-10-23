import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" hace que el sitio funcione en gonducca.github.io y también en gonducca.github.io/<repo>
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
