// index.d.ts
declare module 'musa-design-system' {
  import * as React from 'react';

  export interface OptionsType {
    value: string | null;
    label: string;
  }

  interface DropdownSelectorProps {
    selectedOption: OptionsType | null;
    setSelectedOption: (option: OptionsType | null) => void;
    options: OptionsType[];
    labelText: string;
    hintText: string;
  }

  const DropdownSelector: React.FC<DropdownSelectorProps>;

  export default DropdownSelector;
}