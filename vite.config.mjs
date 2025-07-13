import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        manifest: true,
        outDir: "public",
        rollupOptions: {
            input: "./src/client/inertia.tsx",
        },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/client"),
        },
    },
});
