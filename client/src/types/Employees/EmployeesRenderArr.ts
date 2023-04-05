export interface EmployeesRender {
    title: string;
    text: string;
    image: string;
    list?: string[];
    extList?: {
        label?: string;
        itemsList?: string[] | string;
    }[];
}
