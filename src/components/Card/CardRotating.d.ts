import type { Props as PropsCard } from "@typings/card";
import "@styles/cardRotating.css";
interface Props {
    list: PropsCard[];
    onClick: (id?: string) => Promise<void>;
}
export declare const CardRotating: ({ list, onClick }: Props) => import("preact").JSX.Element;
export {};
