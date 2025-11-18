import styled from 'styled-components';

import { Size } from '../../types';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gap?: Size;
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  children?: React.ReactNode;
}

const StyledGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => !['gridTemplateColumns', 'gridTemplateRows', 'gridArea', 'gap', 'direction', 'justifyContent', 'alignItems', 'wrap'].includes(prop),
})<GridProps>`
    ${props => `
        display: grid;
        ${props.gridTemplateColumns ? `grid-template-columns: ${props.gridTemplateColumns};` : ''}
        ${props.gridTemplateRows ? `grid-template-rows: ${props.gridTemplateRows};` : ''}
        gap: ${props.gap || '0px'};
        grid-auto-flow: ${props.direction === 'column' ? 'column' : 'row'};
        ${props.alignItems ? `align-items: ${props.alignItems};` : ''}
        ${props.wrap ? `flex-wrap: ${props.wrap};` : ''}
    ` }
`;

export const Grid = ({
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  wrap,
  gap = '0px',
  direction = 'row',
  children,
  ...props
}: GridProps) => {
  return (
    <StyledGrid
      gridTemplateColumns={gridTemplateColumns}
      gridTemplateRows={gridTemplateRows}
      gap={gap}
      direction={direction}
      alignItems={alignItems}
      wrap={wrap}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};
