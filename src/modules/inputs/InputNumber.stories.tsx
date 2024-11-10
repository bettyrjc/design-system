import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NumberInput from './NumberInput';
import { RiLockLine } from 'react-icons/ri';
// import { RiLockLine } from 'react-icons/ri';

const meta: Meta<typeof NumberInput> = {
  title: "Input/NumberInput",
  component: NumberInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderInputText = (args: ComponentProps<typeof NumberInput>) => {
  return (
    <NumberInput
      onChange={() => { }}
      variant="normal"
      label="Input number"
      placeholder="Input number placeholder"
      {...args}
    />

  );
};

export const InputNumber: Story = {
  args: {
    variant: "normal",
    fullWidth: true,
    disabled: false,
    isError: false,
    isInvalid: false,
    error: "",
  },
  render: renderInputText,
};



export const InputNumberError: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    isError: true,
    isInvalid: true,
    error: "Error message",
  },
  render: renderInputText,
};

export const InputNumberStartIcon: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    startIcon: <RiLockLine />,
  },
  render: renderInputText,
};



