import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  title: "Radio/Radio",
  component: Radio,
  argTypes: {
    centerRadio: { control: 'boolean' },
    full: { control: 'boolean' },
    hideRadio: { control: 'boolean' },
    label: { control: 'text' },
    hint: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Radio>;

const RadioGroup = () => {
  const [selected, setSelected] = useState<string>('option1');

  return (
    <div className="flex flex-col gap-4">
      <Radio
        label="Option 1"
        name="radioGroup"
        value="option1"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
        color='primary'
      />
      <Radio
        label="Option 2"
        name="radioGroup"
        value="option2"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
        color='secondary'
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    label: "Radio",
    centerRadio: false,
    full: false,
    hideRadio: false,
    hint: "",
  },
  render: (args: ComponentProps<typeof Radio>) => <Radio {...args} />
};

export const InteractiveGroup: Story = {
  render: () => <RadioGroup />
};


