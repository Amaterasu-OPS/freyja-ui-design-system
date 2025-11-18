import { motion } from 'motion/react';
import { useEffect } from 'react';
import styled from 'styled-components';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  color?: string;
  opacity?: number;
  stopBodyScroll?: boolean;
  children?: React.ReactNode;
  durationSeconds?: number;
  onDismiss?: () => void;
}

const StyledOverlay = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['isVisible', 'color', 'opacity'].includes(prop),
})<OverlayProps>`
  ${props => `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${props.isVisible ? 'flex' : 'none'};
    z-index: 1000;
    transition: opacity 3s ease-in-out;
    background: color-mix(
      in srgb,
      ${props.color || 'rgb(0, 0, 0)'} ${(1 - (props.opacity || 0)) * 100}%,
      transparent ${(props.opacity || 0) * 100}%
    );
  `}
`;

export const Overlay = ({
  isVisible,
  color = 'rgb(0, 0, 0)',
  opacity = 0.5,
  stopBodyScroll = true,
  durationSeconds = .3,
  children,
  onDismiss = () => {},
  ...props
}: OverlayProps) => {
  useEffect(() => {
    if (stopBodyScroll) {
      if (isVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, [isVisible, stopBodyScroll]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isVisible) {
      e.stopPropagation();
      return;
    }

    if (e.target === e.currentTarget) {
      onDismiss();
    }
  };

  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isVisible) {
      e.preventDefault();
      onDismiss();
    }
  });

  return (
    <StyledOverlay
      isVisible={isVisible}
      color={color}
      opacity={Math.min(Math.max(opacity, 0), 1)}
      animate={{
        opacity: isVisible ? 1 : 0,
        display: isVisible ? 'flex' : 'none',
      }}
      transition={{ duration: durationSeconds }}
      onClick={handleOverlayClick}
      {...props}
    >
      <div className='overlay-content'>
        {children}
      </div>
    </StyledOverlay>
  );
};
