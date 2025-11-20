import styled from '@emotion/styled';
import { StyledTheme } from '@ui';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { Loader } from '../loader/loader/Loader';
import { isLightColor, sizes } from '../utils';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'extra-small' | 'small' | 'medium' | 'regular' | 'large' | 'extra-large';
  rounded?: 'extra-small' | 'small' | 'medium' | 'regular' | 'large' | 'extra-large' | 'none' | 'full';
  align?: 'left' | 'center' | 'right';
  loaderVariant?: 'jumpingDots' | 'spinner' | 'fadeDots';
  disabled?: boolean;
  color?: string
  fullWidth?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const padding = {
  'extra-small': `${sizes.sizeRem.size1} ${sizes.sizeRem.size2}`,
  small: `0.375rem ${sizes.sizeRem.size3}`,
  medium: `${sizes.sizeRem.size2} ${sizes.sizeRem.size4}`,
  regular: `0.625rem ${sizes.sizeRem.size5}`,
  large: `${sizes.sizeRem.size3} ${sizes.sizeRem.size6}`,
  'extra-large': `${sizes.sizeRem.size4} ${sizes.sizeRem.size8}`,
};

const fontSize = {
  'extra-small': '9pt',
  small: '10pt',
  medium: '12pt',
  regular: '16pt',
  large: '20pt',
  'extra-large': '24pt',
};

const rounded = {
  'extra-small': '3px',
  small: '5px',
  medium: '6px',
  regular: '8px',
  large: '10px',
  'extra-large': '12px',
  none: '0',
  full: '9999px',
};

const PrimaryButtonStyles = (props: ButtonProps, theme: StyledTheme) => `
  color: ${isLightColor(props.color || theme.colors.primary) ? 'black' : 'white'};
  background-color: ${props.color || theme.colors.primary};
`;

const SecondaryButtonStyles = (props: ButtonProps, theme: StyledTheme) => `
  color: ${props.color || theme.colors.primary};
  background-color: color-mix(in srgb, ${props.color || theme.colors.primary} 20%, transparent 100%);
  border-color: color-mix(in srgb, ${props.color || theme.colors.primary} 0%, transparent 100%);
`;

const TertiaryButtonStyles = (props: ButtonProps, theme: StyledTheme) => `
  color: ${props.color || theme.colors.primary};
  background-color: transparent;
`;

const QuaternaryButtonStyles = (props: ButtonProps, theme: StyledTheme) => `
  color: ${props.color || theme.colors.primary};
  background-color: transparent;
  border-color: transparent;
  text-decoration: underline;
`;

const StyledButton = styled.button<ButtonProps>`
  ${(props) => `
    padding: ${
      padding[props.size || 'medium'] || padding.medium
    };
    font-size: ${
      fontSize[props.size || 'medium'] || fontSize.medium
    };
    border: 2px solid ${props.color || props.theme.colors.primary};
    text-align: ${props.align || 'center'};
    width: ${props.fullWidth ? '100%' : 'auto'};
    border-radius: ${rounded[props.rounded || 'medium'] || rounded.medium};
    cursor: ${props.disabled || props.isLoading ? 'not-allowed' : 'pointer'};
    opacity: ${props.disabled ? 0.3 : 1};
    transition: all 0.3s ease-in-out;
    filter: ${props.isLoading ? 'brightness(70%)' : 'none'};

    ${props.variant === 'primary' ? PrimaryButtonStyles(props, props.theme) : ''}
    ${props.variant === 'secondary' ? SecondaryButtonStyles(props, props.theme) : ''}
    ${props.variant === 'tertiary' ? TertiaryButtonStyles(props, props.theme) : ''}
    ${props.variant === 'quaternary' ? QuaternaryButtonStyles(props, props.theme) : ''}

    &:hover {
      filter: brightness(80%);
      transform: scale(1.02);
    }

    &:active {
      filter: brightness(78%);
      transform: scale(0.98);
    }
  `}
`;

const Wrapper = forwardRef<HTMLDivElement, React.PropsWithChildren>((props, ref) => (
  <div ref={ref}>
    {props.children}
  </div>
));

export const Button = ({
  variant = 'primary',
  size = 'medium',
  rounded = 'medium',
  align = 'center',
  loaderVariant = 'jumpingDots',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  color = undefined,
  onClick: fn = () => {},
  children,
  ...props
}: ButtonProps) => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!ref.current) return;

      setHeight(ref.current.offsetHeight);
      setWidth(ref.current.offsetWidth);
    }, 301);
  }, [isLoading, size]);

  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      color={color}
      isLoading={isLoading}
      rounded={rounded}
      fullWidth={fullWidth}
      align={align}
      {...props}
      onClick={() => {
        if (!disabled && !isLoading) {
          fn();
        }
      }}
    >
      {
        isLoading
          ? <Loader
            variant={loaderVariant}
            size={{
              height: height || 0,
              width: width || 0,
            }}
            color={color}
            style={{ height, width }}
            isBackgroundColor={variant === 'primary'}
          />
          : <Wrapper ref={ref}>{children}</Wrapper>
      }
    </StyledButton>
  );
};
