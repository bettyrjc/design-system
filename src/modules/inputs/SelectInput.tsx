import React, { useEffect, useRef, useState } from 'react';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import UserRoundedIcon from '../../assets/icons/UserRoundedIcon';
import CheckIncon from '../../assets/icons/CheckIncon';

type OptionsType = {
  value: string;
  label: string;
}
type SelectInputProps = {
  options: OptionsType[];
  setSelectedOption:
  (option: OptionsType) => void;
  value: OptionsType | null
  label?: string;
  hintText?: string;
}
const SelectInput = ({ options, setSelectedOption, value, label, hintText }: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);
  const [hoveredItemValue, setHoveredItemValue] = useState<String | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: string, label: string) => {
    setIsSelecting(true);
    setSelectedOption({
      value,
      label,
    });
    setIsSelecting(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  const toggleInput = isOpen ? 'rotate-0' : 'rotate-180'
  // Filters the selected item from the original list
  const selectedOptionItem = options.find(option => option.label === value?.label);
  // Sorts the rest of the items alphabetically, excluding the selected item
  const sortedOptions = options
    .filter(option => option.label !== value?.label)
    .sort((a, b) => a.label.localeCompare(b.label));
  // If there is a selected item, it places it at the beginning of the sorted list
  if (selectedOptionItem) {
    sortedOptions.unshift(selectedOptionItem);
  }

  useEffect(() => {
    //handle click outside the container
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    //add listerner on mount
    document.addEventListener('mousedown', handleClickOutside);
    //clean listerner on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);


  return (
    <div className='relative px-2 mt-5 bg-white' ref={containerRef} >
      <div className="form--group">
        <input
          type="text"
          className="input input--default"
          placeholder=" "
          value={value?.label}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          id="custom-select"
        />
        {label && <label className='label label--default' htmlFor="custom-select">{label}</label>}
        <div className={`right-2.5 absolute-center-y ${toggleInput}`}>
          <ChevronUpIcon />
        </div>
        {hintText && !isOpen && <span className='mt-1 ml-1 leading-4 text-gray-600 font-xs'>{hintText}</span>}
      </div>

      {isOpen && (
        <ul
          className=" options scrollbar-hide"
        >
          {sortedOptions.map((option) => {
            const isCurrentItem = option.label === value?.label;
            const isHoveredItem = hoveredItemValue === option.value;

            const selectedItemStyles = isCurrentItem
              ? 'options__item--hovered  options__item justify-between'
              : 'options__item';

            const selectedIconStyles = isCurrentItem
              ? 'options__item--icon text-green-600'
              : 'hidden ';
            return (
              <li
                className={selectedItemStyles} //this could be a separate component
                key={option.value}
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
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;

