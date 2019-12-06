export interface TableAction {
    type: string;

    fn(any: any): any;

    text: string;
}
