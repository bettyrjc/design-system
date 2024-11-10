import { Meta, StoryObj } from '@storybook/react';
import NumberInput from './NumberInput';
declare const meta: Meta<typeof NumberInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const InputNumber: Story;
export declare const InputNumberError: Story;
