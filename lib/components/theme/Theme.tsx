import { ThemeProvider } from '@emotion/react';
import { defaultTheme,StyledTheme } from '@ui';

import { GlobalStyles } from '../globalStyle';

export interface ThemeProps {
  theme?: StyledTheme;
  children: React.ReactNode;
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends StyledTheme {}
}
export const Theme = ({
  theme = defaultTheme,
  children,
}: ThemeProps) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {children}
  </ThemeProvider>;
};
