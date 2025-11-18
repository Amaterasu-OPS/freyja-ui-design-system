import { motion, Variants } from 'motion/react';
import styled from 'styled-components';

import { isLightColor } from '../../utils';
import { BaseLoaderType } from '../types';

export interface LoaderSpinnerProps extends BaseLoaderType, React.HTMLAttributes<HTMLDivElement> {
  numberOfDots?: number;
}

const StyledSpinnerContainer = styled(motion.div)<LoaderSpinnerProps>`
    position: relative;
    width: ${props => props.size?.width}px;
    height: ${props => props.size?.height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledSpinnerDotAfter = styled(motion.div)<LoaderSpinnerProps>`
    ${props => `
        width: ${Math.round(Math.min(props.size?.width || 0, props.size?.height || 0))}px;
        height: ${Math.round(Math.min(props.size?.width || 0, props.size?.height || 0))}px;
        position: absolute;
        border-radius: 50%;

        &::after {
            content: '';
            position: absolute;
            display: block;
            width: ${Math.min(props.size?.width || 0, props.size?.height || 0) * 0.15}px;
            height: ${Math.min(props.size?.width || 0, props.size?.height || 0) * 0.15}px;
            background-color: ${
              props.isBackgroundColor
                ? isLightColor(props.color || props.theme.colors.primary) ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
                : props.color || props.theme.colors.primary
            };
            border-radius: 50%;
            top: calc(100% - ${Math.round(Math.min(props.size?.width || 0, props.size?.height || 0) * 0.15)}px);
            left: calc(50% - ${Math.round(Math.min(props.size?.width || 0, props.size?.height || 0) * 0.15)}px);
            z-index: -1;
        }
    `};
`;

export const LoaderSpinner = ({
  isBackgroundColor = true,
  color = undefined,
  numberOfDots = 6,
  size = {
    width: 40,
    height: 40,
  },
  ...props
}: LoaderSpinnerProps) => {
  const animation: Variants = {
    visible: (i: number) => ({
      rotate: [0, 360],
      transition: {
        duration: 1.5,
        delay: i * 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    })
  };

  return (
    <>
      <StyledSpinnerContainer
        initial="hidden"
        animate="visible"
        size={size}
        {...props}
      >
        {
          new Array(numberOfDots).fill(null).map((_, index) => (
            <StyledSpinnerDotAfter
              key={index}
              size={size}
              color={color}
              isBackgroundColor={isBackgroundColor}
              variants={animation}
              custom={index + 1}
            />
          ))
        }
      </StyledSpinnerContainer>
    </>
  );
};
