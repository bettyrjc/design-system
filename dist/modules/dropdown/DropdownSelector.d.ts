export type OptionsType = {
    value: string | null;
    label: string;
};
type DropdownSelectorProps = {
    name?: string;
    options: OptionsType[];
    labelText?: string;
    hintText?: string;
    formGroupWidth?: string;
    emptyMessage?: string;
    isDisabled?: boolean;
    isError?: boolean;
    selectedOption: OptionsType | null;
    setSelectedOption: (value: OptionsType | null) => void;
};
declare const DropdownSelector: ({ options, formGroupWidth, selectedOption, setSelectedOption, labelText, hintText, emptyMessage, isDisabled, isError }: DropdownSelectorProps) => import("react/jsx-runtime").JSX.Element;
export default DropdownSelector;
