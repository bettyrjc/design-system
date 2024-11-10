import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import clsx from 'clsx';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

type ExposedNativeInputProps = 'placeholder' | 'value' | 'disabled' | 'readOnly' | 'onFocus';

export type InputProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  isInvalid?: boolean;
  label?: string;
  error?: string;
  hint?: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  { 
    fullWidth = false, 
    isInvalid, 
    disabled,
    label,
    error,
    hint,
    placeholder, 
    ...props 
  },
  ref
) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <div className={clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full')}>
      <div className="form--group">
        <input
          type={hiddenPassword ? 'password' : 'text'}
          ref={ref}
          className={clsx(
            'input',
            {
              'input--disabled': disabled,
              'input--error': isInvalid || error,
              'input--default': !disabled && !isInvalid && !error
            }
          )}
          placeholder=" "
          disabled={disabled}
          {...props}
        />

        {label && (
          <label 
            className={clsx(
              'label',
              {
                'label--error': isInvalid || error,
                'label--default': !isInvalid && !error
              }
            )}
          >
            {label}
          </label>
        )}

        <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
          <div 
            className={clsx(
              'flex items-center justify-center w-14',
              {
                'cursor-pointer': !disabled,
                'cursor-not-allowed': disabled,
                'text-gray-400': disabled,
                'text-gray-500': !disabled
              }
            )}
            onClick={() => !disabled && setHiddenPassword(!hiddenPassword)}
          >
            {hiddenPassword ? (
              <HiOutlineEyeOff className="w-6 h-6" />
            ) : (
              <HiOutlineEye className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>

      {(hint && !error) && (
        <span className="mt-1 ml-1 text-xs text-gray-600">
          {hint}
        </span>
      )}

      {error && (
        <div className="mt-1 ml-1 text-xs text-danger">
          {error}
        </div>
      )}
    </div>
  );
});

export default PasswordInput;