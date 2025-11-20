import styled from '@emotion/styled';
import { Color, Fonts, StyledTheme } from '@ui';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: keyof typeof TextSize;
  weight?: keyof typeof TextWeight;
  as?: keyof typeof Tags;
  type?: keyof typeof TextTypes;
  decoration?: keyof typeof TextDecorations;
  color?: Color;
  fontFamily?: keyof typeof Fonts;
  children?: React.ReactNode;
}

const TextSize = {
  '6xlarge': '3.75rem',
  '5xlarge': '3rem',
  '4xlarge': '2.25rem',
  '3xlarge': '1.875rem',
  '2xlarge': '1.5rem',
  xlarge: '1.25rem',
  large: '1.125rem',
  body: '1rem',
  small: '0.875rem',
  tiny: '0.75rem',
};

const TextLineHeight = {
  '6xlarge': '1',
  '5xlarge': '1',
  '4xlarge': 'calc(2.5 / 2.25)',
  '3xlarge': 'calc(2.25 / 1.875)',
  '2xlarge': 'calc(2 / 1.5)',
  xlarge: 'calc(1.75 / 1.25)',
  large: 'calc(1.75 / 1.125)',
  body: 'calc(1.5 / 1)',
  small: 'calc(1.25 / 0.875)',
  tiny: 'calc(1 / 0.75)',
};

const TextWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
};

const Tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  paragraph: 'p',
  body: 'span',
};

const TextDecorations = {
  underline: 'underline',
  strikethrough: 'line-through',
  overline: 'overline',
  none: 'none',
};

const TextTypes = {
  normal: 'normal',
  italic: 'italic',
};

const BaseStyle = (props: TextProps, theme: StyledTheme) => `
    font-size: ${TextSize[props.size || 'body']};
    font-style: ${props.type ? TextTypes[props.type] : 'normal'};
    text-decoration: ${props.decoration ? TextDecorations[props.decoration] : 'none'};
    color: ${props.color || theme.colors.text};
    font-family: ${Fonts[props.fontFamily || 'default']};
    line-height: ${TextLineHeight[props.size || 'body']};
    font-weight: ${
      props.weight ? TextWeight[props.weight] :
        props.size && props.size.startsWith('title') ? 'bold' : 'normal'
    };
`;

const StyledSpan = styled.span<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH1 = styled.h1<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH2 = styled.h2<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH3 = styled.h3<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH4 = styled.h4<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH5 = styled.h5<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledH6 = styled.h6<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

const StyledParagraph = styled.p<TextProps>`
  ${(props) => BaseStyle(props, props.theme)}
`;

export const Text = ({
  size = 'body',
  as = 'body',
  type = 'normal',
  decoration = 'none',
  color = undefined,
  fontFamily = 'default',
  weight,
  children,
  ...props
}: TextProps) => {
  const opts = Object.keys(Tags);

  return (
    <>
      {as === 'h1' && <StyledH1 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH1>}
      {as === 'h2' && <StyledH2 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH2>}
      {as === 'h3' && <StyledH3 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH3>}
      {as === 'h4' && <StyledH4 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH4>}
      {as === 'h5' && <StyledH5 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH5>}
      {as === 'h6' && <StyledH6 size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledH6>}
      {as === 'paragraph' && <StyledParagraph size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledParagraph>}
      {(opts.every(opt => opt !== as) || as === 'body') && <StyledSpan size={size} type={type} decoration={decoration} color={color} fontFamily={fontFamily} weight={weight} {...props}>{children}</StyledSpan>}
    </>
  );
};
