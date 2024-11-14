import { forwardRef, InputHTMLAttributes, ReactElement } from 'react';

import clsx from 'clsx';

export interface InputRatioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactElement;
  centerCheckbox?: boolean;
  full?: boolean;
  hideCheckbox?: boolean;
  hint?: string;
  endIcon?: ReactElement;
  color?: 'primary' | 'secondary';
}

const Checkbox = forwardRef<HTMLInputElement, InputRatioProps>(function InputWithRef(
  {
    label = '',
    full = false,
    id,
    hint,
    centerCheckbox = false,
    hideCheckbox = false,
    endIcon,
    color = 'primary',
    ...props
  },
  ref
) {
  return (
    <label htmlFor={id} className={clsx('inline-block cursor-pointer text-gray-900', full && 'w-full')}>
      <div className={clsx('flex gap-x-2 p-2', centerCheckbox && 'items-center')}>
        <div className="flex items-center h-6">
          <input
            ref={ref}
            {...props}
            id={id}
            type="checkbox"
            className={clsx(
              'form-checkbox h-4 w-4 cursor-pointer rounded bg-gray-100 focus:ring-2',
              hideCheckbox && 'hidden',
              color === 'primary' && 'text-primary focus:ring-primary',
              color === 'secondary' && 'text-secondary-500 focus:ring-secondary-500'
            )}
          />
        </div>

        <div className="flex items-start">
          <div>
            <div className="text-gray-700">{label}</div>
            {!!hint && !endIcon && (
              <div id="helper-checkbox-text" className="text-xs font-normal text-gray-500">
                {hint}
              </div>
            )}
          </div>
        </div>
      </div>
    </label>
  );
});

export default Checkbox;
