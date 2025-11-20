import { HTMLMotionProps } from 'motion/react';

import { LoaderFadeDots } from '../fadeDots/LoaderFadeDots';
import { LoaderJumpingDots } from '../jumpingDots/LoaderJumpingDots';
import { LoaderSpinner } from '../spinner/LoaderSpinner';
import { BaseLoaderType } from '../types';

export interface LoaderProps<T extends Record<string, string | number> | null = null> extends BaseLoaderType, HTMLMotionProps<'div'> {
  variant?: 'jumpingDots' | 'spinner' | 'fadeDots';
  extras?: T
}

export const Loader = <T extends Record<string, string | number> | null>({
  size = {
    width: 8,
    height: 8,
  },
  isBackgroundColor = true,
  color = undefined,
  variant = 'jumpingDots',
  extras,
  ...props
}: LoaderProps<T>) => {
  return <>
    {variant === 'jumpingDots' && <LoaderJumpingDots
      size={size}
      isBackgroundColor={isBackgroundColor}
      color={color}
      {...props}
      {...extras}
    />}
    {variant === 'spinner' && <LoaderSpinner
      size={size}
      isBackgroundColor={isBackgroundColor}
      color={color}
      {...props}
      {...extras}
    />}
    {variant === 'fadeDots' && <LoaderFadeDots
      size={size}
      isBackgroundColor={isBackgroundColor}
      color={color}
      {...props}
      {...extras}
    />}
  </>;
};
