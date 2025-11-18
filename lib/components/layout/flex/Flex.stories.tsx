import type { Meta, StoryObj } from '@storybook/react-vite';

import { primaryColor } from '../../utils';
import { Flex as FlexComponent } from './Flex';

const meta = {
  title: 'Components/Layouts',
  component: FlexComponent,
} satisfies Meta<typeof FlexComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Flex: Story = {
  args: {
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    wrap: 'nowrap',
    gap: '10px',
    children: [
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 1</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 2</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 3</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 4</div>,
    ],
  },
};