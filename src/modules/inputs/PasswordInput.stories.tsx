import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';
// import { RiLockLine } from 'react-icons/ri';

const meta: Meta<typeof PasswordInput> = {
  title: "Input/PasswordInput",
  component: PasswordInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderInputText = (args: ComponentProps<typeof PasswordInput>) => {
  return (
    <PasswordInput
      placeholder="Introduce un password"
      {...args}
    />

  );
};

export const Input: Story = {
  args: {
    fullWidth: true,
    disabled: false,
    isInvalid: false,
  },
  render: renderInputText,
};

