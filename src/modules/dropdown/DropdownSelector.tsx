import { useEffect, useRef, useState } from 'react';
import { HiChevronUp } from 'react-icons/hi2';
import clsx from 'clsx';

import ListDropdown from './components/ListDropdown';
import { DropdownSelectorProps, OptionsType } from '../../assets/types/options.types';

const DropdownSelector = ({
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onValueJoin = selectedOption?.length > 0 ? selectedOption.map((option: OptionsType) => option.label).join(', ') : '';

  const handleDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  return (
    <div 
      className={clsx(
        'relative px-2 mt-5 bg-white',
        formGroupWidth
      )} 
      ref={containerRef}
    >
      <div className="form--group" onClick={handleDropdownSelect}>
        <input
          type="text"
          className={clsx(
            'input',
            {
              'input--disabled': isDisabled,
              'input--error': isError,
              'input--default': !isDisabled && !isError
            }
          )}
          placeholder=" "
          value={onValueJoin}
          readOnly
          id="custom-dropdown"
          ref={inputRef}
          disabled={isDisabled}
        />
        {labelText && (
          <label 
            className={clsx(
              'label',
              {
                'label--error': isError,
                'label--default': !isError
              }
            )} 
            htmlFor="custom-dropdown"
          >
            {labelText}
          </label>
        )}
        <div className="right-2.5 absolute-center-y">
          <HiChevronUp
            className={clsx(
              'w-4 h-4 cursor-pointer',
              {
                'rotate-0': isDropdownOpen,
                'rotate-180 text-gray-600': !isDropdownOpen
              }
            )} 
          />
        </div>
      </div>
      {hintText && !isDropdownOpen && (
        <span
          className={clsx(
            'mt-1 ml-1 text-xs',
            {
              'text-error': isError,
              'text-gray-600': !isError
            }
          )}
        >
          {hintText}
        </span>
      )}

      <ListDropdown
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        options={options}
        inputRef={inputRef}
        emptyMessage={emptyMessage}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </div>
  );
};

export default DropdownSelector;