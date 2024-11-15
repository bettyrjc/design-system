import React from 'react';

import clsx from 'clsx';
import { ButtonProps } from './Button';
import { Loader } from 'lucide-react';

type OutlinedButtonProps = ButtonProps;

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  color = 'primary',
  icon,
  endIcon,
  full,
  roundedFull,
  children,
  size = 'normal',
  extraPadding,
  loading,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'flex px-2 items-center justify-center  text-sm font-medium shadow-md hover:shadow-lg lg:text-base  ',
        !!icon || !!endIcon ? 'flex' : 'inline-flex',
        extraPadding && size === 'small' && 'px-4',
        extraPadding && size === 'normal' && 'px-6',
        extraPadding && size === 'large' && 'px-8',
        !extraPadding && size === 'small' && 'px-2',
        !extraPadding && size === 'normal' && 'px-4',
        !extraPadding && size === 'large' && 'px-6',
        color === 'primary' && "text-primary  border-primary border-2 ",
        color === 'secondary' && `text-secondary  border-secondary border-2 `,
        color === 'info' && 'border-blue-600 text-blue-600 border-2 ',
        color === 'error' && 'border-danger text-danger border-2',
        color === 'gray' && 'border-gray-400 text-gray-700 border-2',
        size === 'small' && 'py-1 text-sm',
        size === 'normal' && 'text-normal py-2',
        size === 'medium' && 'flex items-center justify-center py-3 text-base',
        size === 'large' && 'flex w-full items-center justify-center py-4 text-lg',
        full && 'h-full w-full',
        roundedFull && 'rounded-full',
        !roundedFull && 'rounded-md'
      )}
      {...props}
    >
      {!!icon && <div className="mr-1">{icon}</div>}

      <div >
        {children}
      </div>

      {loading && (
        <div className="ml-1">
          <Loader className="w-6 h-6 animate-spin" />
        </div>
      )}
    </button>
  );
};

export default OutlinedButton;
