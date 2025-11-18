import styled from 'styled-components';

import { Size } from '../../types';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: Size;
  children?: React.ReactNode;
}

const StyledFlex = styled.div.withConfig({
  shouldForwardProp: (prop) => !['direction', 'justifyContent', 'alignItems', 'wrap', 'gap'].includes(prop),
})<FlexProps>`
    ${props => `
        display: flex;
        flex-direction: ${props.direction || 'row'};
        justify-content: ${props.justifyContent || 'flex-start'};
        align-items: ${props.alignItems || 'stretch'};
        flex-wrap: ${props.wrap || 'nowrap'};
        gap: ${props.gap || '0px'};
    ` }
`;

export const Flex = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  wrap = 'nowrap',
  gap = '0px',
  children,
  ...props
}: FlexProps) => {
  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      gap={gap}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};