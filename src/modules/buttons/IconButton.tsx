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
        size === 'small' && 'p-2.5',
        size === 'normal' && 'p-3.5',
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
