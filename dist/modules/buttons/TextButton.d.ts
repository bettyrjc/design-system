import React, { ButtonHTMLAttributes } from 'react';
import { TypographyProps } from '../Typography';
type TextButtonProps = Omit<TypographyProps, 'children'> & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'type'> & {
    styled?: boolean;
    hoverColor?: 'primary' | 'none';
    buttonClassName?: string;
    children?: React.ReactNode;
};
declare const TextButton: React.FC<TextButtonProps>;
export default TextButton;
