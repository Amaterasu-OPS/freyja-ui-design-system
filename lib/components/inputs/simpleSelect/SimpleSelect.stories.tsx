import type { Meta, StoryObj } from '@storybook/react-vite';

import { SimpleSelect as SelectComponent } from './SimpleSelect';

const meta = {
  title: 'Components/Inputs',
  component: SelectComponent,
  argTypes: {
  }
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleSelect: Story = {
  args: {
    id: 'simple-select-storybook',
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
