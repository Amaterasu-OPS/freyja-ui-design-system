import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select as SelectComponent } from './Select';

const meta = {
  title: 'Components/Inputs',
  component: SelectComponent,
  argTypes: {
  }
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    id: 'select-storybook',
    label: 'Select Label',
    options: [
      { value: 1, label: 'Apple' },
      { value: 2, label: 'Banana' },
      { value: 3, label: 'Cherry' },
      { value: 4, label: 'Date' },
      { value: 5, label: 'Elderberry' },
      { value: 6, label: 'Fig' },
      { value: 7, label: 'Grape' },
      { value: 8, label: 'Honeydew' },
      { value: 9, label: 'Indian Fig' },
      { value: 10, label: 'Jackfruit' },
    ],
    disabled: false,
  },
};
