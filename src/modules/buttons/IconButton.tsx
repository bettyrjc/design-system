import React, { FC } from 'react';
import clsx from 'clsx';

type Color = 'primary' | 'secondary' | 'tertiary' | 'transparent' | 'white';

type Variant = 'transparent' | 'filled';

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
        'cursor-pointer rounded-full p-3 text-white',
        variant === 'filled' && color === 'primary' && 'bg-violet-500',
        variant === 'filled' && color === 'secondary' && 'bg-gray-600',
        variant === 'filled' && color === 'tertiary' && 'bg-fuchsia-500',
        size === 'small' && 'h-8 w-8  text-xs',
        size === 'normal' && 'h-12 w-12  text-xl'
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
