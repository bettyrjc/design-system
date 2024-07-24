import React, { useState } from 'react';
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon';
import UserRoundedIcon from '../../assets/icons/UserRoundedIcon';


type OptionsType = {
  value: string;
  label: string;
}
type SelectInputProps = {
  options: OptionsType[];
  // value:string;
  // label:string;
  // errorText:string;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const SelectInput = ({ options }: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };
  const toggleInput = isOpen ? 'rotate-0' : 'rotate-180'
  //sort options A to Z
  const sortedOptions = [...options].sort((a, b) => a.label.localeCompare(b.label));
  //todo: puts in order options with selected option first and delete it from the list

  return (
    <div className="relative w-full">
      <div
        className="justify-between input--default"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0} //for keyboard accessibility
      >
        <p className='text-sm'>{selectedOption || "Elige un usuario"}</p>
        <div className={toggleInput}>
          <ChevronUpIcon />
        </div>

      </div>
      {isOpen && (
        <ul
          className="absolute z-10 options scrollbar-hide"
        >
          {sortedOptions.map((option) => (
            <li
              className='justify-start options__option'
              key={option.value}
              onClick={() => handleSelect(option.value, option.label)}

            >
              {/* //TODO: must change input because in hover is not putting bold 🥲*/}
              <UserRoundedIcon />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;

