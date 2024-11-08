/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import UserRoundedIcon from '../../assets/icons/UserRoundedIcon';
import CheckIncon from '../../assets/icons/CheckIncon';
import { DropdownSelectorProps, OptionsType, SelectingItem } from '../../assets/types/options.types';

const SearchDropdown = ({
  options,
  formGroupWidth,
  selectedOption,
  setSelectedOption,
  labelText,
  hintText,
  emptyMessage = "No hay opciones disponibles",
  isDisabled = false,
  isError = false
}: DropdownSelectorProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortedOptions, setSortedOptions] = useState<OptionsType[]>([]);
  const [selectingItem, setSelectingItem] = useState<SelectingItem | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<Number | null>(null);
  const [defaultValue, setDefaultValue] = useState<OptionsType | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleIconInput = isDropdownOpen ? 'rotate-0' : 'rotate-180 text-gray-600'
  const inputStyles = isDisabled ? ' input--disabled' : isError ? ' input--error' : ' input--default';
  const labelStyles = isError ? ' label label--error' : ' label label--default';
  const hintStyles = isError ? 'text-error' : 'text-gray-600';

  const handleSelect = (value: string, label: string) => {
    setSelectingItem({ isSelecting: true, value });  //set the selecting item to animate the selection
    setSelectedOption({ value, label }); //set the selected option
    setInputValue(label); // set the input value to the selected option label
    //close the options after the 400 ms
    setTimeout(() => {
      setSelectingItem(null);
      setHoveredItemValue(null);
      setIsDropdownOpen(false);
      setDefaultValue({ value, label });
    }, 400);
  };

  // Sort the options alphabetically and handle the selected option
  const sortOptions = () => {
    let sortedList = [...options].sort((a, b) => a.label.localeCompare(b.label));
    if (defaultValue) {
      const index = sortedList.findIndex(option => option.label === defaultValue.label);
      if (index > -1) {
        const [selectedItem] = sortedList.splice(index, 1);
        sortedList.unshift(selectedItem);
      }
    }
    setSortedOptions(sortedList);
  };

  // Filter the options based on the input value
  const filterOptions = (inputValue: string) => {
    return sortedOptions.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  //handle click outside the container
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  }
  useEffect(() => {
    //add listerner on mount
    document.addEventListener('mousedown', handleClickOutside);
    //clean listerner on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    if (isDropdownOpen && defaultValue) {
      sortOptions(); //only puts the selected item at the top of the list when the dropdown is open again
    } else {
      setSortedOptions([...options].sort((a, b) => a.label.localeCompare(b.label)));
    }
  }, [options, isDropdownOpen, defaultValue]);

  useEffect(() => {
    // if the options are closed, blur the input to delete all :focus styles
    if (!isDropdownOpen) {
      inputRef.current?.blur();
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    // if the dropdown is closed and the selected option is not null, set the input value to the selected option label
    if (selectedOption && !isDropdownOpen) {
      setInputValue(selectedOption.label);
    }
  }, [isDropdownOpen]);

  return (
    <div className={`relative px-2 mt-5 bg-white ${formGroupWidth}`} ref={containerRef} >
      <div className="form--group" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <input
          type="text"
          className={`input ${inputStyles}`}
          placeholder=" "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update the input value on change
          id="custom-dropdown"
          ref={inputRef}
          disabled={isDisabled}
        />
        {labelText && <label className={labelStyles} htmlFor="custom-dropdown">{labelText}</label>}
        <div className={`right-2.5 absolute-center-y`}>
          <ChevronUpIcon className={`${toggleIconInput} w-4 h-4 cursor-pointer`} />
        </div>
      </div>
      {hintText && !isDropdownOpen && <span className={`mt-1 ml-1 | ${hintStyles} text-xs`}>{hintText}</span>}
      {isDropdownOpen && (
        <ul className="options scrollbar-hide">
          {filterOptions(inputValue).length > 0
            ? filterOptions(inputValue)?.map((option, index) => {
              const optionValue = option.value
              const optionLabel = option.label
              const isHoveredItem = hoveredItemValue === index //validate if the item by index is hover
              const isCurrentItem = optionValue === selectedOption?.value && !selectingItem; //selected item by value 
              const isSelectingItem = selectingItem?.value === optionValue && selectingItem.isSelecting; // selecting item, the current action of the user is doing
              const isHoveringItem = isHoveredItem || isCurrentItem ? '3' : '2' //stroke width of the icon is the item is hovered or selected
              const selectedItemStyles = isCurrentItem || isSelectingItem
                ? `options__item--hovered  options__item justify-between ${option?.value && 'cursor-pointer'}`
                : `options__item justify-between ${option?.value && 'cursor-pointer'}`;
              const checkIconStyles = isCurrentItem || isSelectingItem // only show when item have been selected
                ? 'w-4 h-4 text-green-600'
                : 'hidden ';
              return (
                <li
                  className={selectedItemStyles}
                  key={`${optionValue}-${index}`}
                  onClick={optionValue ? () => handleSelect(optionValue, optionLabel) : undefined} //handle the selection of the item and option value is not null
                  onMouseEnter={() => setHoveredItemValue(index)}
                  onMouseLeave={() => setHoveredItemValue(null)}
                >
                  <div className='justify-start'>
                    <UserRoundedIcon className="w-4 h-4" strokeWidth={isHoveringItem} />
                    <span className="text-gray-900">{optionLabel}</span>
                  </div>

                  <CheckIncon className={checkIconStyles} />
                </li>
              )
            })
            : <li className='text-gray-300 flex-centered'>{emptyMessage}</li>}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
