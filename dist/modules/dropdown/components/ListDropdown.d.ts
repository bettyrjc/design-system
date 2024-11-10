import { OptionsType } from '../../../assets/types/options.types';
interface ListDropdownProps {
    setSelectedOption: any;
    selectedOption: any;
    options: OptionsType[];
    inputRef: any;
    emptyMessage: string;
    isDropdownOpen: boolean;
    setIsDropdownOpen: any;
    searchTerm: string;
}
declare const ListDropdown: ({ setSelectedOption, options, inputRef, selectedOption, emptyMessage, isDropdownOpen, setIsDropdownOpen, searchTerm }: ListDropdownProps) => import("react/jsx-runtime").JSX.Element | null;
export default ListDropdown;
