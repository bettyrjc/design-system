import React, { InputHTMLAttributes, ReactElement } from 'react';
export interface InputRatioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string | ReactElement;
    centerRadio?: boolean;
    full?: boolean;
    hideRadio?: boolean;
    hint?: string;
    color?: 'primary' | 'secondary';
}
declare const Radio: React.ForwardRefExoticComponent<InputRatioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
