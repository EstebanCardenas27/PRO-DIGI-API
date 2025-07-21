import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useEffect, useState } from "preact/hooks";
export const Filter = ({ handleGetList, attributes: attributes = [], level: levels = [] }) => {
    const [attribute, setAttributes] = useState("All");
    const [level, setLevel] = useState("All");
    const [xAntibody, setXAntibody] = useState(false);
    useEffect(() => {
        const auxJson = {
            xAntibody: xAntibody,
        };
        if (attribute !== "All") {
            auxJson["attribute"] = attribute;
        }
        if (level !== "All") {
            auxJson["level"] = level;
        }
        handleGetList?.(auxJson);
    }, [attribute, level, xAntibody]);
    return (_jsxs("div", { className: "relative w-full", children: [_jsx("div", { className: "absolute rounded-lg w-full border border-teal-400 bottom-[calc(10%-1px)]" }), _jsxs("details", { className: `relative z-10 rounded-lg group backdrop-blur-lg open:border-b-0 text-white border open:border-teal-400 text-center cursor-pointer py-3 open:[clip-path:polygon(0_90%,0_0,100%_0,100%_90%,80%_90%,75%_100%,25%_100%,20%_90%)] md:open:[clip-path:polygon(0_90%,0_0,100%_0,100%_90%,70%_90%,65%_100%,35%_100%,30%_90%)] text-xs flex flex-col-reverse justify-center`, children: [_jsxs("summary", { className: "list-none cursor-pointer select-none font-semibold", children: [_jsx("span", { className: "group-open:hidden", children: "\u25BC Mostrar b\u00FAsqueda avanzada" }), _jsx("span", { className: "hidden group-open:inline", children: "\u25B2 Ocultar b\u00FAsqueda avanzada" })] }), _jsxs("div", { className: "text-sm select-text py-5 pb-8 flex justify-center md:gap-45 gap-5", children: [_jsx(ListFilters, { id: "attributes", list: attributes, value: attribute, setValue: setAttributes }), _jsx(ListFilters, { id: "level", list: levels, value: level, setValue: setLevel }), _jsx("div", { className: "flex flex-col text-start", children: _jsxs("label", { htmlFor: `cbxxAntibody`, className: "w-full flex items-center gap-5", children: [_jsx("input", { type: "checkbox", id: "cbxxAntibody", className: "accent-teal-400", onChange: (event) => setXAntibody(event.target.checked) }), "xAntibody"] }) })] })] })] }));
};
const ListFilters = ({ id, list, value, setValue }) => (_jsx("div", { className: "flex flex-col text-start", children: list.map(({ id: idElement = "", name, }) => (_jsxs("label", { htmlFor: `cbx${id}-${idElement}`, className: "w-full flex items-center gap-5", children: [_jsx("input", { type: "radio", checked: value === name, name: `cbx${id}`, id: `cbx${id}-${idElement}`, value: name, className: "accent-teal-400", onChange: (event) => setValue?.(event?.target?.value) }), name] }, `${id}-${idElement}`))) }));
