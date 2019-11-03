export interface TableCell {
    text: string;
    href?: string;
}

export interface TableRow {
    cells: TableCell[];
    id: string;
}
