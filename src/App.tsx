import React from 'react';
import './assets/ui/index.css';
import SelectInput, { OptionsType } from './modules/inputs/SelectInput';
import { userDataMock } from './assets/mocks/data';


function App() {
  const [selectedOption, setSelectedOption] = React.useState<OptionsType | null>(null);
  return (
    <div className="w-full max-h-screen bg-white ">
      <SelectInput
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={userDataMock}
        hintText="Solo podrás elegir a Victor para continuar"
      />

    </div>
  );
}

export default App;
