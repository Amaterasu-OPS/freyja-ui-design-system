import type { Meta, StoryObj } from '@storybook/react-vite';
import { primaryColor } from '@ui';

import { Loader as LoaderComponent } from './Loader';

const meta = {
  title: 'Components/Loaders',
  component: LoaderComponent,
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: '#fff',
    },
    isBackgroundColor: {
      control: 'boolean',
      defaultValue: true,
    },
    variant: {
      control: 'select',
      options: ['spinner', 'fadeDots', 'jumpingDots'],
      defaultValue: 'jumpingDots',
    },
  }
} satisfies Meta<typeof LoaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loader: Story = {
  decorators: [
    (Story, ctx) => (
      <div style={{
        width: ctx.args.size.width + 'px',
        height: ctx.args.size.height + 'px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: ctx.args.isBackgroundColor ? (ctx.args.color || primaryColor) : 'transparent',
      }}>
        <Story />
      </div>
    ),
  ],
  args: {
    size: {
      width: 100,
      height: 100,
    },
    color: '#e7002a',
    isBackgroundColor: true,
  },
};