import React from 'react';
import './assets/ui/index.css';
import SelectInput from './modules/inputs/SelectInput';


function App() {
  const [selectedOption, setSelectedOption] = React.useState<{ value: string; label: string; } | null>(null);

  const options = [
    { value: '6', label: 'Victor Díaz' },
    { value: '2', label: 'Max Mendex' },
    { value: '1', label: 'Jesús Millán' },
    { value: '3', label: 'Nicholas Yepes' },
    { value: '4', label: 'Santiago Aceves' },
    { value: '5', label: 'Sebastian' },
  ];
  return (
    <div className="w-full min-h-screen bg-white ">
      <SelectInput
        options={options}
        setSelectedOption={setSelectedOption}
        value={selectedOption}
        label="Elige un usuario"
        // hintText="hint text"
      />

    </div>
  );
}

export default App;
