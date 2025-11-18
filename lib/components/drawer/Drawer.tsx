import { motion, TargetAndTransition } from 'motion/react';
import styled from 'styled-components';

import { Overlay } from '../overlay';
import { Size } from '../types';

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: Size;
  children?: React.ReactNode;
  onDismiss?: () => void;
}

const StyledDrawer = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['isOpen', 'position', 'size'].includes(prop),
})<DrawerProps>`
  ${props => `
    position: fixed;
    ${props.position}: 0;
    ${props.position === 'left' || props.position === 'right' ? 'top: 0;' : 'left: 0;'}
    width: ${props.position === 'left' || props.position === 'right' ? `${props.size}` : '100%'};
    height: ${props.position === 'top' || props.position === 'bottom' ? `${props.size}` : '100%'};
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  `}
`;

export const Drawer = ({
  isOpen,
  position = 'left',
  size = '300px',
  onDismiss = () => {},
  children,
  ...props
}: DrawerProps) => {
  if (size && !/^\d+(\.\d+)?(px|rem|em|%|vw|vh)$/.test(size)) {
    throw new Error(`Invalid size prop: ${size}. Expected format is 'number' followed by a unit (px, rem, em, %, vw, vh).`);
  }

  const animate: () => TargetAndTransition = () => {
    const animate: TargetAndTransition = {
      left: `-${size}`,
      right: `-${size}`,
      top: `-${size}`,
      bottom: `-${size}`,
    };

    if (position === 'left') {
      animate.left = isOpen ? 0 : `-${size}`;
      animate.top = 0;
      animate.right = 'auto';
    }

    if (position === 'right') {
      animate.right = isOpen ? 0 : `-${size}`;
      animate.top = 0;
      animate.left = 'auto';
    }

    if (position === 'top') {
      animate.top = isOpen ? 0 : `-${size}`;
      animate.left = 0;
      animate.bottom = 'auto';
    }

    if (position === 'bottom') {
      animate.bottom = isOpen ? 0 : `-${size}`;
      animate.left = 0;
      animate.top = 'auto';
    }
    return animate;
  };

  return (
    <Overlay isVisible={isOpen} onDismiss={onDismiss}>
      <StyledDrawer
        isOpen={isOpen}
        position={position}
        animate={animate()}
        size={size}
        {...props}
      >
        {children}
      </StyledDrawer>
    </Overlay>
  );
};
