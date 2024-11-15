import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Eye } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: "Button/Button outlined",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderOutlinedButton = (args: ComponentProps<typeof Button>) => {
  return (
    <Button
      onClick={() => { }}
      variant="outlined"
      {...args}
    >
      Click me
    </Button>
  );
};
export const Small: Story = {
  args: {
    size: "small",
    color: "primary",
    extraPadding: true,
  },
  render: renderOutlinedButton,
};
export const LargeButton: Story = {
  args: {
    size: "large",
    color: "primary"
  },
  render: renderOutlinedButton,
};
export const IconButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    icon: <Eye />,
  },
  render: renderOutlinedButton,
};

export const LoadingButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    loading: true,
  },
  render: renderOutlinedButton,
};

export const RoundedFullButton: Story = {
  args: {
    size: "small",
    color: "primary",
    roundedFull: true,
  },
  render: renderOutlinedButton,
};
export const Disabled: Story = {
  args: {
    disabled: true,
    size: "normal",
  },
  render: renderOutlinedButton,
};

