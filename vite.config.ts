import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

// `react-router build` délègue à vite : sans ce fichier et son greffon, la commande n'a rien à
// construire (routes.ts n'est lu que par le greffon).
export default defineConfig({ plugins: [reactRouter()] });
