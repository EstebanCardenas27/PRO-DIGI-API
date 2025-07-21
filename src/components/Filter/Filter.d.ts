export interface ItemProps {
    id: string;
    name: string;
    href: string;
}
export interface Props {
    handleGetList?: (props?: any) => void;
    attributes?: ItemProps[];
    level?: ItemProps[];
}
export declare const Filter: ({ handleGetList, attributes: attributes, level: levels }: Props) => import("preact").JSX.Element;
