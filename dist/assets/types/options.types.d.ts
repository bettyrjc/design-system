export type OptionsType = {
    value: number | string | null;
    label: string;
};
export type SelectingItem = {
    isSelecting: boolean;
    value: string | number;
};
export type DropdownSelectorProps = {
    name?: string;
    options: OptionsType[];
    labelText?: string;
    hintText?: string;
    formGroupWidth?: string;
    emptyMessage?: string;
    isDisabled?: boolean;
    isError?: boolean;
    selectedOption: any;
    setSelectedOption: any;
};
