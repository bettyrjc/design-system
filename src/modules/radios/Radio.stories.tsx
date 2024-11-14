import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: "Radio/Radio",
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderRadio = (args: ComponentProps<typeof Radio>) => {
  return (
      <Radio
        {...args}
      />
  );
};

export const RadioDefault: Story = {
  args: {
    label: "Radio",
    centerRadio: false,
    full: false,
    hideRadio: false,
    hint: "",
  },
  render: renderRadio,
};


