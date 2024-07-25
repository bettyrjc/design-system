/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from 'react';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import UserRoundedIcon from '../../assets/icons/UserRoundedIcon';
import CheckIncon from '../../assets/icons/CheckIncon';

type OptionsType = {
  value: string;
  label: string;
}
type SelectInputProps = {
  name?: string;
  options: OptionsType[];
  labelText?: string;
  hintText?: string;
  formGroupWidth?: string;
  emptyMessage?: string;
  isDisabled?: boolean;
  isError?: boolean;
}
const SelectInput = ({ options, formGroupWidth, labelText, hintText, emptyMessage = "No hay opciones disponibles", isDisabled = false, isError = false }: SelectInputProps) => {
  //! this should be in parent component
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [sortedOptions, setSortedOptions] = useState<OptionsType[]>([]);
  const [selectingItem, setSelectingItem] = useState<{ isSelecting: boolean; value: string } | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<String | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const toggleIconInput = isOpenOptions ? 'rotate-0' : 'rotate-180 text-gray-600'

  const handleSelect = (value: string, label: string) => {
    //if value is empty, reset the selected option
    if (!value) {
      setSelectedOption({
        value: '',
        label: '',
      })
      setIsOpenOptions(false);
      return;
    }
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

  const inputStyles = isDisabled ? ' input--disabled' : isError ? ' input--error' : ' input--default';
  const labelStyles = isError ? ' label--error' : ' label--default';
  const hintStyles = isError ? 'text-red-500' : 'text-gray-600';
  return (
    <div className={`relative  px-2 mt-5 bg-white ${formGroupWidth}`} ref={containerRef} >
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
          className=" options scrollbar-hide"
        >
          {sortedOptions.length > 0 ? sortedOptions?.map((option, index) => {
            const isCurrentItem = option.label === selectedOption?.label && !selectingItem;
            const isHoveredItem = hoveredItemValue === option.value

            const isSelectingItem = selectingItem?.value === option.value && selectingItem.isSelecting;
            const selectedItemStyles = isCurrentItem || isSelectingItem
              ? 'options__item--hovered  options__item justify-between'
              : 'options__item justify-between';
            const selectedIconStyles = isCurrentItem || isSelectingItem
              ? 'options__item--icon text-green-600'
              : 'hidden ';

            return (
              <li
                className={selectedItemStyles}
                key={`${option.value}-${index}`}
                onClick={() => handleSelect(option.value, option.label)}
                onMouseEnter={() => setHoveredItemValue(option.value)}
                onMouseLeave={() => setHoveredItemValue(null)}
              >
                <div className='justify-start '>
                  <UserRoundedIcon
                    className="options__item--icon"
                    strokeWidth={isHoveredItem || isCurrentItem ? '3' : '2'}
                  />
                  <span>
                    {option.label}
                  </span>
                </div>

                <CheckIncon className={selectedIconStyles} />
              </li>
            )
          }) : <li className='text-gray-300 flex-centered'>{emptyMessage}</li>}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;

