import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import path from "path";
export default defineConfig({
    base: "/PRO-DIGI-API/",
    plugins: [preact(), tsconfigPaths(), tailwindcss(),],
    resolve: {
        alias: {
            "@styles": path.resolve(__dirname, "src/styles"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@typings": path.resolve(__dirname, "src/typings"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@services": path.resolve(__dirname, "src/services"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@constants": path.resolve(__dirname, "src/constants"),
        },
    },
});
