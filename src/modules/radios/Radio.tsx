import React, { forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import clsx from 'clsx';

export interface InputRatioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactElement;
  centerRadio?: boolean;
  full?: boolean;
  hideRadio?: boolean;
  hint?: string;
  color?: 'primary' | 'secondary';
}

const Radio = forwardRef<HTMLInputElement, InputRatioProps>(function InputWithRef(
  { label = '', full = false, id, hint, name, value, onChange, centerRadio = false, hideRadio = false,
    color = 'primary',
    ...props },
  ref
) {
  return (
    <label htmlFor={id} className={clsx('inline-block cursor-pointer font-medium text-gray-900', full && 'w-full')}>
      <div className={clsx('flex gap-x-2 p-2', centerRadio && 'items-center')}>
        <div className="flex items-center h-6">
          <input
            ref={ref}
            {...props}
            id={id}
            type="radio"
            name={name}
            value={value}
            className={clsx(
              'appearance-none h-4 w-4  rounded-full cursor-pointer border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center',
              hideRadio && 'hidden',
              color === 'primary' && 'focus:ring-primary focus:ring-offset-2 checked:border-primary checked:bg-primary',
              color === 'secondary' && 'focus:ring-secondary focus:ring-offset-2 checked:border-secondary checked:bg-secondary checked:ring-secondary',
            )}
            onChange={(event) => {
              if (onChange) onChange(event);
            }}
          />
        </div>

        <div>
          <div className="text-gray-700">{label}</div>

          {!!hint && (
            <div id="helper-radio-text" className="text-xs font-normal text-gray-500">
              {hint}
            </div>
          )}
        </div>
      </div>
    </label>
  );
});

export default Radio;
