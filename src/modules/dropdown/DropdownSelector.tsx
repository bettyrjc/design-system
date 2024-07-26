/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import UserRoundedIcon from '../../assets/icons/UserRoundedIcon';
import CheckIncon from '../../assets/icons/CheckIncon';

export type OptionsType = {
  value: string | null;
  label: string;
}
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
}
const DropdownSelector = ({
  options,
  formGroupWidth,
  selectedOption,
  setSelectedOption,
  labelText,
  hintText,
  emptyMessage = "No hay opciones disponibles",
  isDisabled = false,
  isError = false }: DropdownSelectorProps) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [sortedOptions, setSortedOptions] = useState<OptionsType[]>([]);
  const [selectingItem, setSelectingItem] = useState<{ isSelecting: boolean; value: string | null } | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<Number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const toggleIconInput = isOpenOptions ? 'rotate-0' : 'rotate-180 text-gray-600'
  const inputStyles = isDisabled ? ' input--disabled' : isError ? ' input--error' : ' input--default';
  const labelStyles = isError ? ' label--error' : ' label--default';
  const hintStyles = isError ? 'text-error' : 'text-gray-600';
  const handleSelect = (value: string | null, label: string) => {
    //set the selecting item to animate the selection
    setSelectingItem(
      {
        isSelecting: true,
        value,
      }
    );
    //set the selected option
    setSelectedOption({
      value,
      label,
    });
    //close the options after the animation
    setTimeout(() => {
      setSelectingItem(null);
      setIsOpenOptions(false);
      setHoveredItemValue(null);
    }, 400);
  };

  useEffect(() => {
    //handle click outside the container
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpenOptions(false);
      }
    }
    //add listerner on mount
    document.addEventListener('mousedown', handleClickOutside);
    //clean listerner on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    // find the selected item in the original list
    const currentItemSelected = options.find(option => option.label === selectedOption?.label);
    // order the rest of the items alphabetically
    const optionsToSortAlphabetically = options.filter(option => option.label !== selectedOption?.label);
    // sort the items alphabetically
    const sortedAlphabetically = optionsToSortAlphabetically.sort((a, b) => a.label.localeCompare(b.label));
    //if a selected item exists, place it at the beginning of the sorted list
    if (currentItemSelected) {
      sortedAlphabetically.unshift(currentItemSelected);
    }
    //update the sorted list
    setSortedOptions(sortedAlphabetically);
  }, [options, selectedOption]);

  useEffect(() => {
    // if the options are closed, blur the input to delete all :focus styles
    if (!isOpenOptions) {
      inputRef.current?.blur();
    }
  }, [isOpenOptions]);

  return (
    <div className={`relative px-2 mt-5 bg-white ${formGroupWidth}`} ref={containerRef} >
      <div className="form--group" onClick={() => setIsOpenOptions(!isOpenOptions)}>
        <input
          type="text"
          className={`input ${inputStyles}`}
          placeholder=" "
          value={selectedOption?.label && selectedOption?.label}
          readOnly
          id="custom-select"
          ref={inputRef}
          disabled={isDisabled}
        />
        {labelText && <label className={`label ${labelStyles}`} htmlFor="custom-select">{labelText}</label>}
        <div className={`right-2.5 absolute-center-y`}>
          <ChevronUpIcon className={`${toggleIconInput} w-4 h-4 cursor-pointer`} />
        </div>
      </div>
      {hintText && !isOpenOptions && <span className={`mt-1 ml-1 | ${hintStyles} text-xs`}>{hintText}</span>}
      {isOpenOptions && (
        <ul
          className="options scrollbar-hide"
        >
          {sortedOptions.length > 0 ? sortedOptions?.map((option, index) => {
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
                <div className='justify-start '>
                  <UserRoundedIcon
                    className="w-4 h-4"
                    strokeWidth={isHoveringItem}
                  />
                  <span>
                    {option.label}
                  </span>
                </div>

                <CheckIncon className={checkIconStyles} />
              </li>
            )
          }) : <li className='text-gray-300 flex-centered'>{emptyMessage}</li>}
        </ul>
      )}
    </div>
  );
};

export default DropdownSelector;

