import React, { forwardRef } from 'react';
import InputText, { InputProps } from './InputText';

type LetterInputProps = InputProps & {
  allowSpaces?: boolean;
};

const LetterInput = forwardRef<HTMLInputElement, LetterInputProps>(function InputWithRef(
  { allowSpaces, ...props },
  ref
) {
  const onKeyPress = (event: { key: string; preventDefault: () => void; }) => {
    if ((!allowSpaces || event.key !== ' ') && !/[ñÑa-zA-Z]/.test(event.key as string)) {
      event.preventDefault();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allowSpaces) {
      const newValue = e.target.value.replace(/ +/g, ' ');

      if (newValue !== e.target.value) e.target.value = newValue;
    }

    props.onChange?.(e);
  };

  const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = event.clipboardData.getData('Text');

    if (!/^[ñÑa-zA-Z\s]/.test(pastedValue)) {
      event.preventDefault();
    }

    return false;
  };

  return <InputText ref={ref} {...props} onChange={onChange} onKeyPress={onKeyPress} onPaste={onPaste} />;
});

export default LetterInput;
