import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from './LetterInput';
import { RiLockLine } from 'react-icons/ri';

const meta: Meta<typeof Input> = {
  title: "Input/LetterInput",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderInputText = (args: ComponentProps<typeof Input>) => {
  return (
    <Input
      onChange={() => { }}
      variant="normal"
      label="Input label"
      placeholder="Input placeholder"
      {...args}
    />

  );
};

export const InputText: Story = {
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

export const InputTextError: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    isError: true,
    isInvalid: true,
    error: "Error message",
  },
  render: renderInputText,
};

export const InputTextEndIcon: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    endIcon: <RiLockLine />,
  },
  render: renderInputText,
};

