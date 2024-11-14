import React, { forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import clsx from 'clsx';

export interface InputRatioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactElement;
  centerRadio?: boolean;
  full?: boolean;
  hideRadio?: boolean;
  hint?: string;
}

const Radio = forwardRef<HTMLInputElement, InputRatioProps>(function InputWithRef(
  { label = '', full = false, id, hint, name, value, onChange, centerRadio = false, hideRadio = false, ...props },
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
            className="w-4 h-4 bg-gray-100 border-2 cursor-pointer checked:rounded-full form-radio border-primary text-primary "
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
