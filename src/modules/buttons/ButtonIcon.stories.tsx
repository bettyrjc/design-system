import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';
import { HiTrash } from 'react-icons/hi2';

const meta: Meta<typeof IconButton> = {
  title: "Icon Button",
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderIconButton = (args: ComponentProps<typeof IconButton>) => {
  return (
    <IconButton
      variant="filled"
      // onClick={() => console.log("Clicked")}
      {...args}
      icon={<HiTrash  />}
    />
  );
};

export const NormalIconButton: Story = {
  args: {
    color: "primary",
    size: "normal",
  },
  render: renderIconButton,
};

export const SmallIconButton: Story = {
  args: {
    color: "primary",
    size: "small",
  },
  render: renderIconButton,
};




