import React, { FC } from 'react';
import clsx from 'clsx';

type Color = 'primary' | 'secondary' | 'tertiary';

type Variant = 'filled';

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  color?: Color;
  size?: 'small' | 'normal';
  variant?: Variant;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  color = 'secondary',
  size = 'normal',
  variant = 'transparent',
}) => {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-full  text-white',
        variant === 'filled' && color === 'primary' && 'bg-primary',
        variant === 'filled' && color === 'secondary' && 'bg-secondary',
        variant === 'filled' && color === 'tertiary' && 'bg-yellow-500',
        size === 'small' && 'h-8 w-8  text-xs p-2.5',
        size === 'normal' && 'h-12 w-12  text-xl p-3.5',
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
