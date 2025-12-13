import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox as CheckboxComponent } from './Checkbox';

const meta = {
  title: 'Components/Inputs',
  component: CheckboxComponent,
  argTypes: {
  }
} satisfies Meta<typeof CheckboxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  decorators: [
    (_, ctx) => {
      return <form>
        <CheckboxComponent {...ctx.args} /><br />
        <CheckboxComponent {...ctx.args} /><br />
        <CheckboxComponent {...ctx.args} /><br />
        <CheckboxComponent {...ctx.args} /><br />
        <CheckboxComponent {...ctx.args} /><br />
      </form>;
    },
  ],
  args: {
    id: 'input-storybook',
    label: 'Input Label',
    name: 'checkbox-storybook',
    disabled: false,
    onChange: (e) => {
      console.log('Checkbox changed', e.target.checked);
    }
  },
};
