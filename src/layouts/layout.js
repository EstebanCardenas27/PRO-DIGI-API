import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { Header } from "@components/Page/Header";
import { Footer } from "@components/Page/Footer";
import { useIsSmallScreen } from "@hooks/useSmallScreen";
import { getRandom } from "@utils/getRandom";
export const Layout = ({ children }) => {
    const isSmallScreen = useIsSmallScreen();
    return (_jsxs("div", { className: "flex flex-col bg-cover md:bg-auto", style: { backgroundImage: !isSmallScreen ? `url("${import.meta.env.BASE_URL}Digimons/wall.webp")` : `url("${import.meta.env.BASE_URL}Digimons/s${Math.floor(getRandom(1, 7))}.webp")`, }, children: [_jsx(Header, {}), _jsx("main", { className: "relative flex flex-grow flex-row h-screen  overflow-y-auto md:h-[calc(100dvh-3.55rem)] bg-black/60", children: children }), _jsx(Footer, {})] }));
};
