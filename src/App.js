import { jsx as _jsx } from "preact/jsx-runtime";
import "@styles/index.css";
import { Layout } from "@layouts/layout";
import { Home } from "@pages/Home";
export const App = () => {
    return (_jsx(Layout, { children: _jsx(Home, {}) }));
};
