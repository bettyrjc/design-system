import React from 'react';
import './assets/ui/index.css';
import DropdownSelector, { OptionsType } from './modules/dropdown/DropdownSelector';
import { userDataMock } from './assets/mocks/userDataMock';

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
      />

    </div>
  );
}

export default App;
