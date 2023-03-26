export type EmployeesRenderArr = {
    title: string;
    text: string;
    image: string;
    list?: string[];
    extList?: {
        label?: string;
        itemsList?: string[];
    }[];
}[];

export type EmployeesRender = {
    title: string;
    text: string;
    image: string;
    list?: string[];
    extList?: {
        label?: string;
        itemsList?: string[];
    }[];
};