import { defaultTheme, Theme } from '@ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={defaultTheme}>
      <App />
    </Theme>
  </StrictMode>,
);
