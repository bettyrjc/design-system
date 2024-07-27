import React from 'react';
import './assets/ui/index.css';
import DropdownSelector from './modules/dropdown/DropdownSelector';
import SearchDropdown from './modules/search-dropdown/SearchDropdown';
import { userDataMock } from './assets/mocks/userDataMock';
import { OptionsType } from './assets/types/options.types';

function App() {
  const [selectedOption, setSelectedOption] = React.useState<OptionsType | null>(null);
  return (
    <div className="container">
      <DropdownSelector
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={userDataMock}
        labelText='Elige un usuario'
        hintText="Solo podrás elegir a Victor para continuar"
        isError={false}
        isDisabled={false}
        formGroupWidth=""
      />
      <SearchDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={userDataMock}
        labelText='Elige un usuario'
        hintText="Solo podrás elegir a Victor para continuar"
        isError={false}
        isDisabled={false}
        formGroupWidth=""
      />
    </div>
  );
}

export default App;
