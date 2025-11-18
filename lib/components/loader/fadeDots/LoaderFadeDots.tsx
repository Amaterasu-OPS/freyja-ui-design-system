import { isLightColor } from '@ui';
import { motion, Variants } from 'motion/react';
import styled from 'styled-components';

import { BaseLoaderType } from '../types';

export interface LoaderFadeDotsProps extends BaseLoaderType, React.HTMLAttributes<HTMLDivElement> {
  numberOfDots?: number;
}

type dimensions = {
  ballSize: number;
  gapSize: number;
};

const StyledDot = styled(motion.div)<LoaderFadeDotsProps & dimensions>`
    ${props => `
        width: ${props.ballSize}px;
        height: ${props.ballSize}px;
        border-radius: 100%;
        background-color: ${
          props.isBackgroundColor
            ? isLightColor(props.color || props.theme.colors.primary) ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'
            : props.color || props.theme.colors.primary
        };
    ` }
`;

const StyledLoaderDots = styled(motion.div)<LoaderFadeDotsProps & dimensions>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.gapSize}px;
`;

export const LoaderFadeDots = ({
  size = {
    width: 8,
    height: 8,
  },
  isBackgroundColor = true,
  color = undefined,
  numberOfDots = 3,
  ...props
}: LoaderFadeDotsProps) => {
  const opacity = [1, 0.75, .5];
  const scale = [1.5, 1.1, .9];

  const animation: Variants = {
    visible: (i: number) => ({
      opacity: opacity,
      scale: scale,
      transition: {
        duration: 1,
        repeat: Infinity,
        delay: i * (1 / numberOfDots),
      },
    }),
  };

  let ballSize = Math.round(Math.min(size?.width || 0, size?.height || 0) * 0.45);
  let gapSize = Math.min(size?.width || 0, size?.height || 0) / numberOfDots;

  const total = ballSize * numberOfDots + gapSize * (numberOfDots - 1);

  if (total > (size?.width || 0)) {
    ballSize = Math.min(total / (numberOfDots + 0.5)) / numberOfDots;
    gapSize = ballSize / (numberOfDots - 1);
  }

  return (
    <StyledLoaderDots
      size={size}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true }}
      ballSize={ballSize}
      gapSize={gapSize}
      {...props}
    >
      {
        new Array(numberOfDots).fill(0).map((_, i) => (
          <StyledDot
            key={i}
            variants={animation}
            custom={i}
            size={size}
            color={color}
            isBackgroundColor={isBackgroundColor}
            ballSize={ballSize}
            gapSize={gapSize}
          />
        ))
      }
    </StyledLoaderDots>
  );
};
