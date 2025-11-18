import { HexColor } from '@ui';

export type StyledTheme = {
  colors: {
    primary: HexColor;
    error: HexColor;
    text: HexColor;

    select: {
      option: {
        background: HexColor;
        hover: HexColor;
        selected: HexColor;
      }
    };

    input: {
      border: HexColor;
      label: HexColor;
      contrast: HexColor;

      disabled: {
        background: HexColor;
        border: HexColor;
        label: HexColor;
      };
    };
  };
};