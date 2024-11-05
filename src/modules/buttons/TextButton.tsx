import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import Typography, { TypographyProps } from '../Typography';

type TextButtonProps = Omit<TypographyProps, 'children'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'type'> & {
    styled?: boolean; // Add button style to the component
    hoverColor?: 'primary' | 'none';
    buttonClassName?: string;
    children?: React.ReactNode;
  };

const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
  disabled,
  type = 'button',
  styled = false,
  className,
  hoverColor = 'none',
  buttonClassName,
  ...props
}) => {
  const buttonProps = {
    onClick,
    disabled,
    type,
  };

  return (
    <button
      {...buttonProps}
      className={clsx(
        styled && 'flex items-center rounded-md px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100',
        styled && disabled && 'cursor-not-allowed',
        buttonClassName
      )}
    >
      <Typography {...props} className={clsx(className, hoverColor !== 'none' && `hover:text-${hoverColor}`)}>
        {children}
      </Typography>
    </button>
  );
};

export default TextButton;
