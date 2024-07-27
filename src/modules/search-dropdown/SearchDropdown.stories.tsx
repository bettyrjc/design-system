import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchDropdown from "./SearchDropdown";
import { userDataMock } from '../../assets/mocks/userDataMock';
import { OptionsType } from '../../assets/types/options.types';
// import { fn } from "@storybook/test";

const meta: Meta<typeof SearchDropdown> = {
  title: "SearchDropdown",
  component: SearchDropdown,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderDropdown = (args: ComponentProps<typeof SearchDropdown>) => {
  const [selectedOption, setSelectedOption] = useState<OptionsType | null>(null);
  return (
    <SearchDropdown {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
  );
};

export const Default: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
  },
  render: renderDropdown,
};

export const CustomParentWidth: Story = {
  args: {
    options: userDataMock,
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
    formGroupWidth: "w-full lg:w-1/2",
  },
  render:renderDropdown,
};

export const CustomEmptyMessage: Story = {
  args: {
    options: [],
    labelText: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
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
    hintText: "Solo podrás elegir a Victor para continuar",
    isError: true,
  },
  render: renderDropdown,
};