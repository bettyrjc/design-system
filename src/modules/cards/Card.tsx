import clsx from 'clsx';
import React, { FC } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'normal' | 'large';
  center?: boolean;
  onClick?: () => void;
  bordered?: boolean;
};

const Card: FC<CardProps> = ({ padding = 'normal', center = false, className, onClick, bordered, children }) => {
  return (
    <div
      className={clsx(
        'rounded-lg bg-white shadow-md',
        padding === 'small' && 'p-2',
        padding === 'normal' && 'p-4',
        padding === 'large' && 'p-8',
        center && 'flex flex-col items-center justify-center',
        !!onClick && 'cursor-pointer',
        bordered && 'border border-zinc-50',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

