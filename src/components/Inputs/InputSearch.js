import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
export const InputSearch = ({ id = "txtSearch", placeholder = "Ej. Agumon, 001...", classNameContent = "", classNameInput = "", textLabel = "Nombre o ID", onChange, }) => {
    const handleOnChangeInputSearch = (e) => {
        onChange?.(e?.target?.value?.trim());
    };
    return (_jsxs("div", { className: `flex flex-wrap ${classNameContent}`, children: [_jsx("label", { className: "sr-only", htmlFor: id, children: textLabel }), _jsxs("div", { className: "relative w-full group focus-within:outline-none", children: [_jsx("div", { className: "flex absolute md:inset-y-0 pt-1.5 md:pt-0 left-0 items-center pl-3 pointer-events-none", children: _jsx("svg", { "aria-hidden": "true", className: "w-5 h-5 text-gray-400 group-focus-within:text-teal-400 z-10 transition-colors", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) }), _jsx("input", { id: id, placeholder: placeholder, onChange: handleOnChangeInputSearch, className: `text-gray-400 border rounded-md text-sm focus:outline-none focus:text-teal-400 w-full md:p-2.5 !pl-10 p-1 backdrop-blur-lg ${classNameInput}` })] })] }));
};
