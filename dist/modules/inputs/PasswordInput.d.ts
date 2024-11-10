import React, { InputHTMLAttributes } from 'react';
type ExposedNativeInputProps = 'placeholder' | 'value' | 'disabled' | 'readOnly' | 'onFocus';
export type InputProps = {
    disabled?: boolean;
    fullWidth?: boolean;
    isInvalid?: boolean;
    label?: string;
    error?: string;
    hint?: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;
declare const PasswordInput: React.ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    fullWidth?: boolean | undefined;
    isInvalid?: boolean | undefined;
    label?: string | undefined;
    error?: string | undefined;
    hint?: string | undefined;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps> & React.RefAttributes<HTMLInputElement>>;
export default PasswordInput;
