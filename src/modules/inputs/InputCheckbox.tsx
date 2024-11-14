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
              'appearance-none h-4 w-4 cursor-pointer rounded border-2 bg-white focus:ring-2 checked:bg-no-repeat checked:bg-center',
              hideCheckbox && 'hidden',
              color === 'primary' && 'checked:bg-primary checked:border-primary focus:ring-primary ',
              color === 'secondary' && 'checked:bg-secondary checked:border-secondary focus:ring-secondary ',
            )}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '14px'
            }}
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
