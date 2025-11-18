import type { Meta, StoryObj } from '@storybook/react-vite';

import { primaryColor } from '../../utils';
import { Grid as GridComponent } from './Grid';

const meta = {
  title: 'Components/Layouts',
  component: GridComponent,
} satisfies Meta<typeof GridComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: {
    gap: '10px',
    children: [
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 1</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 2</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 3</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 4</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 5</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 6</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 7</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 8</div>,
      <div style={{ backgroundColor: primaryColor, color: 'white', padding: '10px' }}>Item 9</div>,
    ],
  },
};