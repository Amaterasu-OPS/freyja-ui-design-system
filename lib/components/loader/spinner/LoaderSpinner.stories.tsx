import type { Meta, StoryObj } from '@storybook/react-vite';

import { LoaderSpinner as LoaderSpinnerComponent } from './LoaderSpinner';

const meta = {
  title: 'Components/Loaders',
  component: LoaderSpinnerComponent,
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: '#fff',
    },
    isBackgroundColor: {
      control: 'boolean',
      defaultValue: true,
    },
  }
} satisfies Meta<typeof LoaderSpinnerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderSpinner: Story = {
  decorators: [
    (Story, ctx) => (
      <div style={{
        width: ctx.args.size.width + 'px',
        height: ctx.args.size.height + 'px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: ctx.args.isBackgroundColor ? ctx.args.color : 'transparent',
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