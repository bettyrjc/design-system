import React from 'react';
import './assets/ui/index.css';
import SelectInput from './modules/inputs/SelectInput';


function App() {
  const [selectedOption, setSelectedOption] = React.useState<{ value: string; label: string; } | null>(null);

  const options = [
    { value: '1', label: 'Victor Díaz' },
    { value: '', label: 'Max Mendex' },
    { value: '', label: 'Jesús Millán' },
    { value: '', label: 'Nicholas Yepes' },
    { value: '', label: 'Santiago Aceves' },
    { value: '', label: 'Sebastian' },
    { value: '', label: 'Axel rose' },
  ];
  return (
    <div className="w-full min-h-screen bg-white ">
      <SelectInput
        options={options}
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
        label="Elige un usuario"
        hintText="Solo podrás elegir a Victor para continuar"
      />

    </div>
  );
}

export default App;
