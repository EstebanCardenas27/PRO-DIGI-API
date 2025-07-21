import { jsx as _jsx } from "preact/jsx-runtime";
import { useEffect, useRef } from "preact/hooks";
export const DigimonMusic = () => {
    const audioRef = useRef(null);
    useEffect(() => {
        const playMusic = () => {
            audioRef.current?.play().catch((e) => {
                console.log("Autoplay bloqueado:", e);
            });
        };
        document.addEventListener("click", playMusic, { once: true });
        return () => {
            document.removeEventListener("click", playMusic);
        };
    }, []);
    return (_jsx("audio", { ref: audioRef, src: `${import.meta.env.BASE_URL}Sounds/digivice.mp3`, loop: true, hidden: true }));
};
