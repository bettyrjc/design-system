/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
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
  searchTerm: string;
}

const ListDropdown = ({
  setSelectedOption,
  options,
  inputRef,
  selectedOption,
  emptyMessage,
  isDropdownOpen,
  setIsDropdownOpen,
  searchTerm
}: ListDropdownProps) => {
  const [sortedOptions, setSortedOptions] = useState<OptionsType[]>([]);
  const [selectingItem, setSelectingItem] = useState<SelectingItem | null>(null);
  const [hoveredItemValue, setHoveredItemValue] = useState<Number | null>(null);
  const [defaultValue, setDefaultValue] = useState<OptionsType | null>(null);

  const sortAndFilterOptions = () => {
    let sortedList = [...options]
      .sort((a, b) => a.label.localeCompare(b.label))
      .filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );

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
    setSelectingItem({ isSelecting: true, value });
    setSelectedOption((prev: any[]) => {
      if (!Array.isArray(prev)) {
        return [{ value, label }];
      }
      return [...prev, { value, label }];
    });

    setTimeout(() => {
      setSelectingItem(null);
      setHoveredItemValue(null);
      setIsDropdownOpen(false);
      setDefaultValue({ value, label });
    }, 400);
  };

  useEffect(() => {
    if (isDropdownOpen && defaultValue) {
      sortAndFilterOptions();
    } else {
      setSortedOptions(
        [...options]
          .sort((a, b) => a.label.localeCompare(b.label))
          .filter(option => 
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }
  }, [options, isDropdownOpen, defaultValue, searchTerm]);

  useEffect(() => {
    if (!isDropdownOpen) {
      inputRef.current?.blur();
    }
  }, [isDropdownOpen]);

  if (!isDropdownOpen) return null;

  return (
    <ul className="options scrollbar-hide">
      {sortedOptions.length > 0 ? (
        sortedOptions.map((option, index) => {
          const optionValue = option.value;
          const optionLabel = option.label;
          const isHoveredItem = hoveredItemValue === index;
          const isCurrentItem = optionValue === selectedOption?.value && !selectingItem;
          const isSelectingItem = selectingItem?.value === optionValue && selectingItem.isSelecting;
          const isHoveringItem = isHoveredItem || isCurrentItem ? '3' : '2';

          return (
            <li
              className={clsx(
                'options__item justify-between',
                {
                  'options__item--hovered': isCurrentItem || isSelectingItem,
                  'cursor-pointer': option?.value
                }
              )}
              key={`${optionValue}-${index}`}
              onClick={optionValue ? () => handleSelect(optionValue, optionLabel) : undefined}
              onMouseEnter={() => setHoveredItemValue(index)}
              onMouseLeave={() => setHoveredItemValue(null)}
            >
              <div className="justify-start">
                <UserRoundedIcon className="w-4 h-4" strokeWidth={isHoveringItem} />
                <span className="text-gray-900">{optionLabel}</span>
              </div>
              <CheckIncon 
                className={clsx(
                  'w-4 h-4',
                  {
                    'text-green-600': isCurrentItem || isSelectingItem,
                    'hidden': !isCurrentItem && !isSelectingItem
                  }
                )} 
              />
            </li>
          );
        })
      ) : (
        <li className="text-gray-300 flex-centered">{emptyMessage}</li>
      )}
    </ul>
  );
};

export default ListDropdown;