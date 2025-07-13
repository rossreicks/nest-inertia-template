import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

const appName = "Nest Inertia Template";

createInertiaApp({
    progress: {
        color: "#6B48E5",
    },
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        console.log("resolve", name);

        const pages = import.meta.glob("./pages/**/*.page.tsx", {
            eager: false, // Change to false for lazy loading
        });

        const path = `./pages/${name}.page.tsx`;
        const page = pages[path];

        if (!page) {
            throw new Error(`Page ${name} not found.`);
        }

        return page(); // Returns a Promise that resolves to the module
    },
    setup({ el, App, props }) {
        console.log("setup");

        createRoot(el).render(<App {...props} />);
    },
}).catch((err) => {
    console.log("some error", err);
});
