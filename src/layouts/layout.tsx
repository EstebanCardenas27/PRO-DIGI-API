import type { ComponentChildren } from "preact";
import { Header } from "@components/Page/Header";
import { Footer } from "@components/Page/Footer";
import { useIsSmallScreen } from "@hooks/useSmallScreen";
import { getRandom } from "@utils/getRandom";

interface Props {
  children?: ComponentChildren;
}

export const Layout = ({ children }: Props) => {
  const isSmallScreen = useIsSmallScreen();
  return (
    <div className="flex flex-col bg-cover md:bg-auto"style={{backgroundImage:
       !isSmallScreen ? `url("${import.meta.env.BASE_URL}Digimons/wall.webp")` : `url("${import.meta.env.BASE_URL}Digimons/s${Math.floor(getRandom(1, 7))}.webp")`,}}>
      <Header />
      <main className="relative flex flex-grow flex-row h-screen  overflow-y-auto md:h-[calc(100dvh-3.55rem)] bg-black/60">
        {children}
      </main>
      <Footer />
    </div>
  );
};
