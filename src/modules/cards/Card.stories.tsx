import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: "Card/Card body",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderCard = (args: ComponentProps<typeof Card>) => {
  return (
    <Card
      {...args}
      children="Text in card"
    />
  );
};

export const CardPadding: Story = {
  args: {
    padding: "normal"
  },
  render: renderCard,
};





