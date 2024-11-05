import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropdownSelector from "./DropdownSelector";
import { userDataMock } from '../../assets/mocks/userDataMock';
import { OptionsType } from '../../assets/types/options.types';
// import { fn } from "@storybook/test";

const meta: Meta<typeof DropdownSelector> = {
  title: "DropdownSelector",
  component: DropdownSelector,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderDropdown = (args: ComponentProps<typeof DropdownSelector>) => {
  const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
  return (
    <DropdownSelector {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
  );
};

export const Default: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Elige cualquier nombre para continuar",
  },
  render: renderDropdown,
};

export const CustomParentWidth: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Elige cualquier nombre para continuar",
    formGroupWidth: "w-full lg:w-1/2",
  },
  render:renderDropdown,
};

export const CustomEmptyMessage: Story = {
  args: {
    options: [],
    labelText: "Elige un usuario",
    hintText: "Elige cualquier nombre para continuar",
    emptyMessage: "No hay usuarios disponibles",
  },
  render: renderDropdown,
};

export const Disabled: Story = {
  args: {
    options: [],
    labelText: "Elige un usuario",
    isDisabled: true,
  },
  render: renderDropdown,
};
export const Error: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Elige cualquier nombre para continuar",
    isError: true,
  },
  render: renderDropdown,
};