import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { useState, useRef } from "preact/hooks";
export const Header = () => {
    const audioRef = useRef(null);
    const [index, setIndex] = useState(0);
    const songs = [
        `${import.meta.env.BASE_URL}Sounds/digivice.mp3`,
        `${import.meta.env.BASE_URL}Sounds/op.mp3`,
        `${import.meta.env.BASE_URL}Sounds/evolution.mp3`,
        null,
    ];
    const handleClick = () => {
        const next = (index + 1) % songs.length;
        setIndex(next);
        if (songs[next]) {
            audioRef.current.src = songs[next];
            audioRef.current.muted = false;
            audioRef.current.play().catch(console.log);
        }
        else {
            audioRef.current.pause();
            audioRef.current.muted = true;
            audioRef.current.src = "";
        }
    };
    return (_jsxs("header", { className: "fixed top-0 left-0 w-full z-50 backdrop-blur-lg p-4 flex justify-center text-2xl font-bold", children: [_jsx("img", { src: `${import.meta.env.BASE_URL}Digimons/digivice.webp`, alt: "Logo Digivice", className: "h-12 md:ml-34 items-start cursor-pointer", onClick: handleClick }), _jsx("h1", { className: "flex-1 hidden md:block text-gray-400 text-4xl font-bold mb-0 text-center md:pr-34", children: "\u00A1Bienvenido a la DigiDex!" }), _jsx("h1", { className: "md:hidden flex-1 text-gray-400 text-4xl font-bold mb-0 text-center", children: "DigiDex" }), _jsx("audio", { ref: audioRef, hidden: true })] }));
};
