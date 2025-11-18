import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text as TextComponent } from './Text';

const meta = {
  title: 'Components/Texts',
  component: TextComponent,
  argTypes: {
    color: { control: 'color' },
  }
} satisfies Meta<typeof TextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: 'A little bottle of text',
  },
};