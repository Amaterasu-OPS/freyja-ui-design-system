import styled from '@emotion/styled';
import { isLightColor } from '@ui';
import { HTMLMotionProps, motion,Variants } from 'motion/react';

import { BaseLoaderType } from '../types';

export interface LoaderJumpingDotsProps extends BaseLoaderType, HTMLMotionProps<'div'> {
  numberOfDots?: number;
}

type dimensions = {
  ballSize: number;
  gapSize: number;
};

const StyledDot = styled(motion.div)<LoaderJumpingDotsProps & dimensions>`
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

const StyledLoaderDots = styled(motion.div)<LoaderJumpingDotsProps & dimensions>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.gapSize}px;
`;

export const LoaderJumpingDots = ({
  size = {
    width: 8,
    height: 8,
  },
  isBackgroundColor = true,
  color = undefined,
  numberOfDots = 3,
  ...props
}: LoaderJumpingDotsProps) => {
  const distance = (size.height || 40) * 0.13;
  const positions = [0, -distance, 0, distance, 0];

  const animation: Variants = {
    visible: (i: number) => ({
      y: positions,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        delay: i * 0.1,
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
        new Array(numberOfDots).fill(null).map((_, index) => (
          <StyledDot
            key={index}
            variants={animation}
            custom={index}
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
