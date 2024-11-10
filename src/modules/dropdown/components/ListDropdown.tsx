/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import { OptionsType, SelectingItem } from '../../../assets/types/options.types';
import CheckIncon from '../../../assets/icons/CheckIncon';
import UserRoundedIcon from '../../../assets/icons/UserRoundedIcon';

interface ListDropdownProps {
  setSelectedOption: any;
  selectedOption: any;
  options: OptionsType[];
  inputRef: any;
  emptyMessage: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: any;
}

const ListDropdown = ({
  setSelectedOption,
  options,
  inputRef,
  selectedOption,
  emptyMessage,
  isDropdownOpen,
  setIsDropdownOpen
}: ListDropdownProps) => {
  const [sortedOptions, setSortedOptions] = useState<OptionsType[]>([]);
  const [selectingItem, setSelectingItem] = useState<SelectingItem | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<Number | null>(null);
  const [defaultValue, setDefaultValue] = useState<OptionsType | null>(null);

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
  const handleSelect = (value: string, label: string) => {
    setSelectingItem({ isSelecting: true, value });  //set the selecting item to animate the selection
    setSelectedOption(
      (prev: any[]) => {
        // Verifica si prev es un array
        if (!Array.isArray(prev)) {
          return [{ value, label }];
        }
        return [...prev, { value, label }];
      }
    )
    //close the options after the 400 ms
    setTimeout(() => {
      setSelectingItem(null);
      setHoveredItemValue(null);
      setIsDropdownOpen(false);
      setDefaultValue({ value, label });
    }, 400);
  };

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


  return (
    <>
      {
        isDropdownOpen && (
          <ul className="options scrollbar-hide">
            {sortedOptions.length > 0
              ? sortedOptions?.map((option, index) => {
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
        )
      }
    </>
  )
}

export default ListDropdown