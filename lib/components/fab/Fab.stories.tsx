import type { Meta, StoryObj } from '@storybook/react-vite';

import { Fab as FabComponent } from './Fab';

const meta = {
  title: 'Components/Buttons',
  component: FabComponent,
} satisfies Meta<typeof FabComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fab: Story = {
  args: {
    color: '#e7002a',
    children: [
      <>&#9842;</>
    ],
  },
};