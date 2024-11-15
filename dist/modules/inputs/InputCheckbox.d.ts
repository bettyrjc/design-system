import { InputHTMLAttributes, ReactElement } from 'react';
export interface InputRatioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string | ReactElement;
    centerCheckbox?: boolean;
    full?: boolean;
    hideCheckbox?: boolean;
    hint?: string;
    endIcon?: ReactElement;
    color?: 'primary' | 'secondary';
}
declare const Checkbox: import("react").ForwardRefExoticComponent<InputRatioProps & import("react").RefAttributes<HTMLInputElement>>;
export default Checkbox;
