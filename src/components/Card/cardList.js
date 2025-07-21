import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
const cards = [
    {
        label: "Github",
        icon: (_jsx("svg", { viewBox: "0 0 496 512", className: "w-10 h-10 fill-white", children: _jsx("path", { d: "M165.9 397.4c0 2..." }) })),
        rotation: "-rotate-15",
    },
    {
        label: "Code",
        icon: (_jsx("svg", { viewBox: "0 0 640 512", className: "w-10 h-10 fill-white", children: _jsx("path", { d: "M392.8 1.2c-17-4.9..." }) })),
        rotation: "rotate-5",
    },
    {
        label: "Earn",
        icon: (_jsx("svg", { viewBox: "0 0 576 512", className: "w-10 h-10 fill-white", children: _jsx("path", { d: "M64 64C28.7 64..." }) })),
        rotation: "rotate-15",
    },
];
export const CardList = () => {
    return (_jsx("div", { className: "relative flex justify-center items-center group container-card rotate-1", children: cards.map((card, index) => (_jsxs("div", { "data-text": card.label, className: `relative w-[180px] h-[200px] bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-[0_25px_25px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-500 rounded-[10px] mx-[-45px] backdrop-blur-[10px] group-hover:rotate-0 group-hover:mx-[10px] ${card.rotation}`, children: [card.icon, _jsx("div", { className: "absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white text-sm", children: card.label })] }, index))) }));
};
