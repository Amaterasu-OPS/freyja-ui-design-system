import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button as ButtonComponent } from './Button';

const meta = {
  title: 'Components/Buttons',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'regular', 'large', 'extra-large'],
      defaultValue: 'medium',
    },
    rounded: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'regular', 'large', 'extra-large', 'none', 'full'],
      defaultValue: 'medium',
    },
    loaderVariant: {
      control: 'radio',
      options: ['spinner', 'fadeDots', 'jumpingDots'],
      defaultValue: 'jumpingDots',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  }
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    color: '#e7002a',
    rounded: 'medium',
    fullWidth: false,
    isLoading: false,
    align: 'center',
    children: 'Click me!',
  },
};