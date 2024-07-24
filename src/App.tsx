import React from 'react';
import './assets/ui/index.css';
import SelectInput from './modules/inputs/SelectInput';


function App() {
  const options = [
    { value: '6', label: 'Victor Díaz' },
    { value: '2', label: 'Max Mendex' },
    { value: '1', label: 'Jesús Millán' },
    { value: '3', label: 'Nicholas Yepes' },
    { value: '4', label: 'Santiago Aceves' },
    { value: '5', label: 'Sebastian' },
  ];
  return (
    <div className="w-full min-h-screen px-10 py-10 bg-gray-50">
      <div className="w-1/2">
        <SelectInput options={options} />
      </div>
      <div className="w-1/3 my-4">
        <SelectInput options={options} />
      </div>
    </div>
  );
}

export default App;
