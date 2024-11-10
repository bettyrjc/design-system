import React from 'react';
import { OptionsType } from '../../../assets/types/options.types';
interface ListDropdownProps {
    setSelectedOption: (option: OptionsType) => void;
    selectedOption: OptionsType | null;
    options: OptionsType[];
    inputRef: React.RefObject<HTMLInputElement>;
    emptyMessage: string;
    isDropdownOpen: boolean;
    setIsDropdownOpen: (isOpen: boolean) => void;
    searchTerm: string;
}
declare const ListDropdown: ({ setSelectedOption, options, inputRef, selectedOption, emptyMessage, isDropdownOpen, setIsDropdownOpen, searchTerm }: ListDropdownProps) => import("react/jsx-runtime").JSX.Element | null;
export default ListDropdown;
