import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropdownSelector, { OptionsType } from "./DropdownSelector";
import { userDataMock } from '../../assets/mocks/userDataMock';
// import { fn } from "@storybook/test";

const meta: Meta<typeof DropdownSelector> = {
  title: "DropdownSelector",
  component: DropdownSelector,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
    return (
      <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};

export const CustomParentWidth: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
    formGroupWidth: "w-full lg:w-1/2",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
    return (
      <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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
    const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
    return (
      <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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
    const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
    return (
      <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};
export const Error: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    isError: true,
    hintText: "Solo podrás elegir a Victor para continuar",
  },
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
    return (
      <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    );
  },
};