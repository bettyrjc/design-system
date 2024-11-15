/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { OptionsType, SelectingItem } from '../../../assets/types/options.types';
import { Check, CircleUserRound } from 'lucide-react';

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

  const handleSelect = (value: string | number, label: string) => {
    setSelectingItem({ isSelecting: true, value });
    setSelectedOption({ value, label });

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
                <CircleUserRound className="w-4 h-4" strokeWidth={isHoveringItem} />
                <span className="text-gray-900">{optionLabel}</span>
              </div>

              <Check
                size={12}
                color={isCurrentItem || isSelectingItem ? 'var(--color-success)' : 'var(--color-white)'}
              />

              {/* <HiCheck
                className={clsx(
                  'w-4 h-4',
                  {
                    'text-success': isCurrentItem || isSelectingItem,
                    'hidden': !isCurrentItem && !isSelectingItem
                  }
                )}
              /> */}
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