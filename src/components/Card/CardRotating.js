import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useMask } from "@hooks/useMask";
import "@styles/cardRotating.css";
export const CardRotating = ({ list = [], onClick }) => {
    return (_jsx("div", { className: "wrapper mt-18 md:mt-0", children: _jsx("div", { className: "inner", style: {
                "--quantity": list.length,
            }, children: list.map(({ id, image, name }, index) => {
                const canvasRef = useMask({ src: image });
                return (_jsx("button", { className: "card cursor-pointer bg-cover [clip-path:polygon(10%_0,90%_0,100%_10%,100%_90%,90%_100%,10%_100%,0_90%,0_10%)]", style: {
                        "--index": index,
                        "--color-card": "252, 142, 239",
                        backgroundImage: `url("${import.meta.env.BASE_URL}Digimons/s${index + 1}.webp")`
                    }, onClick: () => onClick(`${id}`), children: _jsxs("div", { className: "relative -mt-18", children: [_jsx("img", { src: image, alt: "", className: `w-full absolute mix-blend-multiply z-30` }), _jsx("canvas", { ref: canvasRef, className: `w-full absolute inset-0 z-20 pointer-events-none` }), _jsx("canvas", { ref: canvasRef, className: `w-full absolute inset-0 z-20 pointer-events-none` }), _jsx("h2", { className: `absolute -top-8 z-40 text-md text-center text-white w-[95%] mx-1 pb-1 whitespace-nowrap bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 [clip-path:polygon(2%_0%,98%_0%,100%_15%,100%_85%,98%_100%,2%_100%,0%_80%,0%_20%)]`, children: name })] }) }, id));
            }) }) }));
};
