export interface Props {
    text: string;
    type: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?(something?: any): any;
}
