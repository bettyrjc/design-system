import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputCheckbox from './InputCheckbox';

const meta: Meta<typeof InputCheckbox> = {
  title: "Input/Checkbox",
  component: InputCheckbox,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderInputText = (args: ComponentProps<typeof InputCheckbox>) => {
  return (
    <InputCheckbox
      {...args}
    />

  );
};

export const CheckboxDefault: Story = {
  args: {
    label: "check",
    centerCheckbox: false,
    full: false,
    hideCheckbox: false,
    hint: "",
    color: "primary",
  },
  render: renderInputText,
};


