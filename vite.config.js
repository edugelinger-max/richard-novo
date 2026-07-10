import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, "index.html"),
                sobre: resolve(__dirname, "sobre.html"),
                colecoes: resolve(__dirname, "colecoes.html")
            }
        }
    }
});
