import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: "Alerts/Alert body",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderAlert = (args: ComponentProps<typeof Alert>) => {
  return (
    <Alert
      {...args}

    />
  );
};

export const InfoCard: Story = {
  args: {
    type: "info",
    message: "Alert informativa",
  },
  render: renderAlert,
};





