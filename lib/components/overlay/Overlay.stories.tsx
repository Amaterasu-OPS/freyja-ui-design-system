import type { Meta, StoryObj } from '@storybook/react-vite';

import { Overlay as OverlayComponent } from './Overlay';

const meta = {
  title: 'Components/Overlays',
  component: OverlayComponent,
  argTypes: {
    isVisible: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  }
} satisfies Meta<typeof OverlayComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overlay: Story = {
  args: {
    isVisible: false,
    children: 'Overlay content',
  },
};