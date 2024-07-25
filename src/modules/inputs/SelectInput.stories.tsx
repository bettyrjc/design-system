import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SelectInput from "./SelectInput";
// import { fn } from "@storybook/test";



const meta: Meta<typeof SelectInput> = {
  title: "Example/SelectInput",
  component: SelectInput,
};

export default meta;

type Story = StoryObj<typeof meta>;




export const Default: Story = {
  args: {
    options: [
      { value: "1", label: "Victor Díaz" },
      { value: "", label: "Max Mendex" },
      { value: "", label: "Jesús Millán" },
      { value: "", label: "Nicholas Yepes" },
      { value: "", label: "Santiago Aceves" },
      { value: "", label: "Sebastian" },
      { value: "", label: "Axel rose" },
    ],
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
    return (
      <SelectInput {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};

export const customParentWidth: Story = {
  args: {
    options: [
      { value: "1", label: "Victor Díaz" },
      { value: "", label: "Max Mendex" },
      { value: "", label: "Jesús Millán" },
    ],
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
    formGroupWidth: "w-full lg:w-1/2",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
    return (
      <SelectInput {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    options: [],
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
    emptyMessage: "No hay usuarios disponibles",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
    return (
      <SelectInput {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};

export const Disabled: Story = {
  args: {
    options: [],
    labelText: "Elige un usuario",
    isDisabled: true,
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
    return (
      <SelectInput {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};
export const Error: Story = {
  args: {
    options: [
      { value: "1", label: "Victor Díaz" },
      { value: "", label: "Max Mendex" },
      { value: "", label: "Jesús Millán" },
    ],
    labelText: "Elige un usuario",
    isError: true,
    hintText: "Solo podrás elegir a Victor para continuar",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<{ value: string; label: string; } | null>(null);
    return (
      <SelectInput {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};