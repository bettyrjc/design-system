import React from 'react';
declare const LetterInput: React.ForwardRefExoticComponent<{
    variant?: "normal" | undefined;
    disabled?: boolean | undefined;
    fullWidth?: boolean | undefined;
    endIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    isInvalid?: boolean | undefined;
    isError?: boolean | undefined;
    error?: any;
    label?: string | undefined;
    placeholder?: string | undefined;
    type?: string | undefined;
    hint?: string | undefined;
    actionEndIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    onClickEndICon?: (() => void) | undefined;
    onActionEndIcon?: (() => void) | undefined;
    showIconAction?: boolean | undefined;
    width?: string | undefined;
    padding?: string | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "type" | "placeholder" | "onChange" | "disabled" | "name" | "onPaste" | "onKeyDown" | "onKeyPress" | "pattern" | "readOnly" | "maxLength" | "min" | "autoComplete" | "required"> & {
    allowSpaces?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export default LetterInput;
