import { InputHTMLAttributes, forwardRef, ReactElement, ChangeEvent } from 'react';

import clsx from 'clsx';

type ExposedNativeInputProps =
  | 'placeholder'
  | 'type'
  | 'value'
  | 'disabled'
  | 'readOnly'
  | 'onPaste'
  | 'onKeyDown'
  | 'onKeyPress'
  | 'onChange'
  | 'maxLength'
  | 'min'
  | 'autoComplete'
  | 'name'
  | 'required'
  | 'defaultValue'
  | 'pattern';

type Variant = 'normal';

export type InputProps = {
  variant?: Variant;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  isInvalid?: boolean;
  isError?: boolean;
  error?: string | any;
  label?: string;
  placeholder?: string;
  type?: string;
  hint?: string;
  mask?: string;
  actionEndIcon?: ReactElement;
  onClickEndICon?: () => void;
  onActionEndIcon?: () => void;
  showIconAction?: boolean;
  width?: string;
  padding?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'normal',
      fullWidth = false,
      startIcon,
      disabled,
      endIcon,
      label,
      error,
      placeholder,
      isError,
      isInvalid,
      type = 'text',
      hint,
      readOnly,
      onClickEndICon,
      actionEndIcon,
      onActionEndIcon,
      showIconAction,
      width,
      padding,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {!!label && <label className={`ml-1 text-sm  ${disabled ? 'text-gray-300' : 'text-gray-800'}`}>{label}</label>}

        <div
          className={clsx(
            'flex flex-row items-center',
            fullWidth && 'w-full',
            variant === 'normal' && 'rounded-md border-2 text-gray-800 hover:border-primary',
            !isInvalid && variant === 'normal' && 'border-gray-300',
            isInvalid && "border border-danger",
            (disabled || readOnly) && 'border-gray-300 bg-gray-300 text-gray-400 hover:border-gray-300',
            !disabled && !readOnly && 'bg-white',
            (error || isError) && 'border-danger',
            width && width
          )}
        >
          {!!startIcon && <div className="flex justify-center px-3 text-gray-500 cursor-pointer">{startIcon}</div>}

          <input
            type={type}
            ref={ref}
            {...props}
            placeholder={placeholder}
            className={clsx(
              'w-full rounded-md border-none bg-transparent  placeholder:text-xs placeholder:text-gray-300 focus:outline-none',
              fullWidth && 'w-full',
              !startIcon && 'pl-4',
              !endIcon && 'pr-4',
              padding ? padding : 'py-2'
            )}
            defaultValue={defaultValue}
            readOnly={disabled || readOnly}
          />

          <div className="flex">
            {!!endIcon && !hint && (
              <div className="flex">
                <div className="flex justify-center pr-3 text-xl text-gray-500 cursor-pointer" onClick={onClickEndICon}>
                  {endIcon}
                </div>
              </div>
            )}

            {/* {!!hint && !!endIcon && (
              <Tooltip
                content={
                  <div className="p-4 text-sm text-white rounded-md shadow-md cursor-pointer bg-info-500"> {hint}</div>
                }
                backgroundColorArrow="rgb(59 130 246)"
                placement="bottom"
              >
                <div className="flex justify-center pt-1 pr-1 text-xl text-gray-500">{endIcon}</div>
              </Tooltip>
            )} */}

            {showIconAction && (
              <div className="flex justify-center pr-3 text-xl text-gray-500 cursor-pointer" onClick={onActionEndIcon}>
                {actionEndIcon}
              </div>
            )}
          </div>
        </div>

        {!!error && <div className="my-1 text-sm text-danger">{error}</div>}
      </>
    );
  }
);

export default Input;
