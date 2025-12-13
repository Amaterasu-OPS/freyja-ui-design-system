import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Radio as RadioComponent } from './Radio';

const meta = {
  title: 'Components/Inputs',
  component: RadioComponent,
  argTypes: {
  }
} satisfies Meta<typeof RadioComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
  decorators: [
    (_, ctx) => {
      const [value, setValue] = useState('option1');

      return <form>
        <RadioComponent {...ctx.args} value="option1" checked={value === 'option1'} onChange={(e) => setValue(e.target.value)} /><br />
        <RadioComponent {...ctx.args} value="option2" checked={value === 'option2'} onChange={(e) => setValue(e.target.value)} /><br />
        <RadioComponent {...ctx.args} value="option3" checked={value === 'option3'} onChange={(e) => setValue(e.target.value)} /><br />
        <RadioComponent {...ctx.args} value="option4" checked={value === 'option4'} onChange={(e) => setValue(e.target.value)} /><br />
        <RadioComponent {...ctx.args} value="option5" checked={value === 'option5'} onChange={(e) => setValue(e.target.value)} /><br />
      </form>;
    },
  ],
  args: {
    id: 'input-storybook',
    label: 'Input Label',
    disabled: false,
    value: 'option1',
    name: 'radio-storybook',
    onChange: (e) => {
      console.log('Radio changed', e.target.value);
    }
  },
};
