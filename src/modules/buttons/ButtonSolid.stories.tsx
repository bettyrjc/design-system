import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { RiEye2Line } from 'react-icons/ri';

const meta: Meta<typeof Button> = {
  title: "Button solid",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderSolidButton = (args: ComponentProps<typeof Button>) => {
  return (
    <Button
      onClick={() => { }}
      variant="contained"
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
  render: renderSolidButton,
};
export const LargeButton: Story = {
  args: {
    size: "large",
    color: "primary"
  },
  render: renderSolidButton,
};
export const IconButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    icon: <RiEye2Line />,
  },
  render: renderSolidButton,
};
export const EndIconButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    endIcon: <RiEye2Line />,
  },
  render: renderSolidButton,
};
export const RoundedButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    roundedFull: true,
  },
  render: renderSolidButton,
};
export const LoadingButton: Story = {
  args: {
    size: "medium",
    color: "primary",
    loading: true,
  },
  render: renderSolidButton,
};
export const Disabled: Story = {
  args: {
    disabled: true,
    size: "normal",
  },
  render: renderSolidButton,
};


