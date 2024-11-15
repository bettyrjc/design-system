import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import ListDropdown from './components/ListDropdown';
import { DropdownSelectorProps } from '../../assets/types/options.types';
import { ChevronUp } from 'lucide-react';

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
  const [inputValue, setInputValue] = useState<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
    }
  };

  const handleDropdownSelect = () => {
    if (!isDisabled) {
      setIsDropdownOpen(!isDropdownOpen);
    }
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

  useEffect(() => {
    if (!isDropdownOpen && selectedOption) {
      setInputValue(selectedOption.label || '');
    }
  }, [isDropdownOpen, selectedOption]);

  return (
    <div 
      className={clsx(
        'relative px-2 mt-5 bg-white',
        formGroupWidth
      )} 
      ref={containerRef}
    >
      <div className="form--group">
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
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleDropdownSelect}
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
          <ChevronUp 
            className={clsx(
              'w-4 h-4',
              {
                'rotate-0': isDropdownOpen,
                'rotate-180': !isDropdownOpen,
                'cursor-pointer': !isDisabled,
                'cursor-not-allowed': isDisabled,
                'text-gray-400': isDisabled,
                'text-gray-600': !isDisabled
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
        searchTerm={inputValue}
      />
    </div>
  );
};

export default DropdownSelector;