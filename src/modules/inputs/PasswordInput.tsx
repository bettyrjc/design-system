import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

import clsx from 'clsx';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

type ExposedNativeInputProps = 'placeholder' | 'value' | 'disabled' | 'readOnly' | 'onFocus';

export type InputProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  isInvalid?: boolean;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  { fullWidth = false, isInvalid, placeholder, ...props },

  ref
) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <div
      className={clsx(
        'flex flex-row items-center rounded-md border-2 bg-white hover:border-primary',
        isInvalid && 'border-danger',
        !isInvalid && 'border-gray-300'
      )}
    >
      <input
        type={hiddenPassword ? 'password' : 'text'}
        ref={ref}
        className={clsx('w-full rounded py-2 pl-4 outline-none focus:outline-none', fullWidth && 'w-full')}
        {...props}
        placeholder={placeholder || '********'}
      />

      <div className="flex items-center justify-center w-14">
        <div className="cursor-pointer" onClick={() => setHiddenPassword(!hiddenPassword)}>
          {hiddenPassword && <HiOutlineEyeOff className="w-6 h-full text-gray-500" />}

          {!hiddenPassword && <HiOutlineEye className="w-6 h-full text-gray-5" />}
        </div>
      </div>
    </div>
  );
});

export default PasswordInput;
