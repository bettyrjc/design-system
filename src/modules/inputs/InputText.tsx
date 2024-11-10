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
  endIcon?: ReactElement;
  isInvalid?: boolean;
  isError?: boolean;
  error?: string | any;
  label?: string;
  placeholder?: string;
  type?: string;
  hint?: string;
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
      <div className={clsx('relative px-2 mt-5 bg-white', fullWidth && 'w-full', width && width)}>
        <div className="form--group">
          <input
            type={type}
            ref={ref}
            {...props}
            placeholder=" "
            className={clsx(
              'input',
              {
                'input--disabled': disabled || readOnly,
                'input--error': (error || isError) || isInvalid,
                'input--default': !disabled && !readOnly && !error && !isError && !isInvalid
              }
            )}
            defaultValue={defaultValue}
            readOnly={disabled || readOnly}
          />

          {label && (
            <label
              className={clsx(
                'label',
                {
                  'label--error': error || isError || isInvalid,
                  'label--default': !error && !isError && !isInvalid
                }
              )}
            >
              {label}
            </label>
          )}
          <div className="flex absolute right-2.5 top-1/2 -translate-y-1/2">
            {!!endIcon && !hint && (
              <div className="flex">
                <div
                  className="flex justify-center pr-3 text-xl text-gray-500 cursor-pointer"
                  onClick={onClickEndICon}
                >
                  {endIcon}
                </div>
              </div>
            )}
            {showIconAction && (
              <div
                className="flex justify-center pr-3 text-xl text-gray-500 cursor-pointer"
                onClick={onActionEndIcon}
              >
                {actionEndIcon}
              </div>
            )}
          </div>
        </div>
        {(hint && !error) && (
          <span className={clsx('mt-1 ml-1 text-xs text-gray-600')}>
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
  }
);

export default Input;