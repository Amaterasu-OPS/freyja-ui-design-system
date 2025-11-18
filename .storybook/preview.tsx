import '../lib/index.scss';

import { Preview } from '@storybook/react-vite';

import { Theme } from '../lib/components';

const preview: Preview = {
  decorators: (Story) => {
    return <Theme><Story/></Theme>;
  },
  parameters: {
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;