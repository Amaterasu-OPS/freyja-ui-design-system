import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea as TextareaComponent } from './Textarea';

const meta = {
  title: 'Components/Inputs',
  component: TextareaComponent,
  argTypes: {
  }
} satisfies Meta<typeof TextareaComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Textarea: Story = {
  args: {
    id: 'textarea-storybook',
    label: 'Textarea Label',
    disabled: false,
  },
};
