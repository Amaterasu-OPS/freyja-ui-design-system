import { defaultTheme, StyledTheme } from '@ui';
import { ThemeProvider } from 'styled-components';

export interface ThemeProps {
  theme?: StyledTheme;
  children: React.ReactNode;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends StyledTheme {}
}

export const Theme = ({
  theme = defaultTheme,
  children,
}: ThemeProps) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
};