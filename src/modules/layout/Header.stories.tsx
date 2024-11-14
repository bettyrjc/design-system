
import { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderLoader = (args: ComponentProps<typeof Header>) => {
  return (
    <Header
      {...args}
    />
  );
};

export const HeaderDefault: Story = {
  args: {
    logo: <div>Logo</div>,
    navLinks: <>
      <a href="/" className="block py-2 hover:text-secondary">
        Experience
      </a>
      <a href="/" className="block py-2 hover:text-secondary">
        Projects
      </a>
      <a href="/" className="block py-2 hover:text-secondary" >
        About me
      </a>
    </>,
  },
  render: renderLoader,
};
