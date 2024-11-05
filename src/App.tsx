import React from 'react';
import './assets/ui/index.css';
import DropdownSelector from './modules/dropdown/DropdownSelector';
import SearchDropdown from './modules/search-dropdown/SearchDropdown';
import { userDataMock } from './assets/mocks/userDataMock';
import { OptionsType } from './assets/types/options.types';
import Button from './modules/buttons/Button';

function App() {
  const [selectedOption, setSelectedOption] = React.useState<OptionsType | null>(null);
  return (
    <div className="container">
      <DropdownSelector
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={userDataMock}
        labelText='Elige un usuario'
        hintText="Elige cualquier nombre para continuar"
        isError={false}
        isDisabled={false}
        formGroupWidth=""
      />
      <SearchDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={userDataMock}
        labelText='Elige un usuario'
        hintText="Elige cualquier nombre para continuar"
        isError={false}
        isDisabled={false}
        formGroupWidth=""
      />
      <Button
        variant="outlined"
        onClick={() => console.log('Button clicked')} >
        Click me
      </Button>
    </div>
  );
}

export default App;
