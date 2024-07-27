export type OptionsType = {
  value: string | null;
  label: string;
}
export type SelectingItem = {
  isSelecting: boolean; value: string
}
export type DropdownSelectorProps = {
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
}