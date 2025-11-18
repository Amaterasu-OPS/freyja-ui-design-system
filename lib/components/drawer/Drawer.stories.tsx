import type { Meta, StoryObj } from '@storybook/react-vite';

import { Drawer as DrawerComponent } from './Drawer';

const meta = {
  title: 'Components/Drawers',
  component: DrawerComponent,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  }
} satisfies Meta<typeof DrawerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  args: {
    isOpen: true,
    size: '300px',
    children: 'Drawer content',
  },
};