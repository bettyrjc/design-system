
import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: "Loader/Loader",
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderLoader = (args: ComponentProps<typeof Loader>) => {
  return (
    <Loader
      {...args}
    />
  );
};

export const LoaderDefault: Story = {
  args: {
    label: "Loading...",
  },
  render: renderLoader,
};
