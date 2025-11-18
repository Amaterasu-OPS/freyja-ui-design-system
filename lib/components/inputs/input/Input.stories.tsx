import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input as InputComponent } from './Input';

const meta = {
  title: 'Components/Inputs',
  component: InputComponent,
  argTypes: {
  }
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    label: 'Input Label',
    type: 'text',
    disabled: false,
  },
};