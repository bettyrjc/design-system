import React, { ButtonHTMLAttributes } from 'react';
import ContainedButton from './ContainedButton';
import OutlinedButton from './OutlinedButton';

export type Color =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'gray'
  | 'info'
  | 'white';

export type Variant = 'contained' | 'outlined';

export type Size = 'normal' | 'small' | 'large' | 'medium';

export type ButtonProps = {
  variant?: Variant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: Color;
  extraPadding?: boolean;
  full?: boolean;
  loading?: boolean;
  roundedFull?: boolean;
  size?: Size;
  centerText?: boolean;
  shadowDisabled?: boolean;
  style?: React.CSSProperties;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'>;

const Button: React.FC<ButtonProps> = ({ variant = 'contained', onClick, type = 'button', children, style, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (props.loading || props.disabled) {
      e.preventDefault();
      return;
    }

    onClick?.(e);
  };

  if (variant === 'outlined' ) {
    return (
      <OutlinedButton type={type} {...props} onClick={handleClick}>
        {children}
      </OutlinedButton>
    );
  }

  return (
    <ContainedButton type={type} {...props} onClick={handleClick}>
      {children}
    </ContainedButton>
  );
};

export default Button;
