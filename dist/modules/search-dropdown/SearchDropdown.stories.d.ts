import { Meta, StoryObj } from '@storybook/react';
import SearchDropdown from "./SearchDropdown";
declare const meta: Meta<typeof SearchDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomParentWidth: Story;
export declare const CustomEmptyMessage: Story;
export declare const Disabled: Story;
export declare const Error: Story;
