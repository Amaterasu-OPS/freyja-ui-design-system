import { StyledTheme } from '../types';

export const primaryColor = '#E7002A';
export const bodyColor = '#282C34';

export const defaultTheme: StyledTheme = {
  colors: {
    primary: primaryColor,
    error: primaryColor,
    text: bodyColor,

    select: {
      option: {
        background: '#f0f0f0',
        hover: '#e0e0e0',
        selected: '#d0d0d0',
      }
    },

    input: {
      border: bodyColor,
      label: bodyColor,
      contrast: '#fff',

      disabled: {
        background: '#d8d8d8',
        border: '#b0b0b0',
        label: '#999999',
      },
    }
  },
};