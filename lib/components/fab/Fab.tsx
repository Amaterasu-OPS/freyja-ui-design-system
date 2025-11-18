import styled from 'styled-components';

import { isLightColor } from '../utils';

export interface FabProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  disabled?: boolean;
  size ?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const sizes = {
  small: '40px',
  medium: '56px',
  large: '72px',
};

const fontSizes = {
  small: '16px',
  medium: '22px',
  large: '26px',
};

const paddingSizes = {
  small: '10px',
  medium: '16px',
  large: '22px',
};

const TopLeft = () => `
  top: 16px;
  left: 16px;
`;

const TopRight = () => `
  top: 16px;
  right: 16px;
`;

const BottomLeft = () => `
  bottom: 16px;
  left: 16px;
`;

const BottomRight = () => `
  bottom: 16px;
  right: 16px;
`;

const StyledFab = styled.div.withConfig({
  shouldForwardProp: (prop) => !['color', 'position', 'size', 'disabled'].includes(prop),
})<FabProps>`
  ${props => `
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${sizes[props.size || 'medium']};
    height: ${sizes[props.size || 'medium']};
    border-radius: 50rem;
    padding: 0 ${paddingSizes[props.size || 'medium']};
    background-color: ${props.color || props.theme.colors.primary};
    color: ${isLightColor(props.color || props.theme.colors.primary) ? '#000' : '#fff'};
    font-size: ${fontSizes[props.size || 'medium']};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border: none;
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props.disabled ? 0.3 : 1};
    outline: none;
    transition: all 0.3s ease-in-out;
    position: fixed;
    ${props.position === 'top-left' ? TopLeft() : ''}
    ${props.position === 'top-right' ? TopRight() : ''}
    ${props.position === 'bottom-left' ? BottomLeft() : ''}
    ${props.position === 'bottom-right' ? BottomRight() : ''}

    &:hover {
      filter: brightness(80%);
      transform: scale(1.03);
    }

    &:active {
      filter: brightness(78%);
      transform: scale(0.98);
    }

    * {
      box-sizing: border-box;
      height: min-content;
      width: min-content;
      font-variant-numeric: tabular-nums;
    }
  `}
`;

export const Fab = ({
  color = undefined,
  position = 'bottom-right',
  disabled = false,
  size = 'medium',
  children,
  ...props
}: FabProps) => {
  return (
    <StyledFab
      color={color}
      position={position}
      disabled={disabled}
      size={size}
      {...props}
    >
      {children}
    </StyledFab>
  );
};