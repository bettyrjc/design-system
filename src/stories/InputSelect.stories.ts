import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "../modules/inputs/SelectInput"; // Adjust the import path
import { fn } from '@storybook/test';

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
      { value: "2", label: "Max Mendex" },
      { value: "3", label: "Jesús Millan" },
    ],
    setSelectedOption: fn,
    label: "Select an option",
    hintText: "Solo victor dias",
  },
};

