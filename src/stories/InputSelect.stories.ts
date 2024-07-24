import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectInput from "../modules/inputs/SelectInput";
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
    label: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
  },
};

export const Responsive: Story = {
  args: {
    options: [
      { value: "1", label: "Victor Díaz" },
      { value: "", label: "Max Mendex" },
      { value: "", label: "Jesús Millan" },
    ],
    label: "Elige un usuario",
    hintText: "Solo podrás elegir a Victor para continuar",
    formGroupWidth: "w-1/2",
  },
};
