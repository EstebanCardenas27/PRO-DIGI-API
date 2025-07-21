interface Props {
    text?: string[];
    color?: string;
    qty?: number;
    velocity?: [number, number];
    size?: [number, number];
}
export declare const useParticles: ({ text, color, qty, velocity, size, }: Props) => import("preact").RefObject<HTMLCanvasElement>;
export {};
