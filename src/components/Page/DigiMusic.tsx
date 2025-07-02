import { useEffect, useRef } from "preact/hooks";

export const DigimonMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

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

  return (
    <audio
      ref={audioRef}
      src="/Sounds/digivice.mp3"
      loop
      hidden
    />
  );
};