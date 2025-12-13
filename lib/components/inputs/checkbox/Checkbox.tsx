import styled from '@emotion/styled';
import { StyledTheme } from '@ui';
import React, { useEffect, useRef } from 'react';

export interface CheckboxProps {
  label: string;
  id: string;
  name: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledCheckbox = styled.div<{ checked?: boolean, disabled?: boolean, error?: boolean }>`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${(props: { theme: StyledTheme }) => props.theme.colors.input.border};
  border-radius: 0.3rem;
  transition: all 0.2s ease-in-out;

  ${(props) =>
      props.error
        ? `
      border-color: ${props.theme.colors.error} !important;
    `
        : ''
  }

  ${(props) =>
      props.checked
        ? `
        background-color: ${props.theme.colors.primary} !important;
        border-color: ${props.theme.colors.primary} !important;
      `
        : ''
  }

  ${(props) =>
      props.disabled
        ? `
        background-color: ${props.theme.colors.input.disabled.background} !important;
        border-color: ${props.theme.colors.input.disabled.border} !important;
        cursor: not-allowed;
      `
        : ''
  }
`;

const StyledCheckboxContent = styled.div<{ labelPosition?: 'left' | 'right' | 'top' | 'bottom' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  ${(props) => {
    switch (props.labelPosition) {
      case 'left':
        return 'flex-direction: row-reverse;';
      case 'right':
        return 'flex-direction: row;';
      case 'top':
        return `
          flex-direction: column-reverse;
          align-items: start;
        `;
      case 'bottom':
        return `
          flex-direction: column;
          align-items: start;
        `;
      default:
        return 'flex-direction: row;';
    }
  }}
`;

const StyledLabel = styled.label<{ error?: boolean }>`
    font-size: 14px;
    color: ${props => props.theme.colors.input.label};
    cursor: text;
    transition: all 0.1s ease-in-out;
    pointer-events: none;

    ${(props) => props.error ? `
      color: ${props.theme.colors.error} !important;
      font-weight: 600;
    ` : ''}
`;

export const Checkbox = ({
  label,
  id,
  name,
  labelPosition = 'right',
  checked = false,
  disabled = false,
  error = false,
  onChange = () => {},
}: CheckboxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = React.useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <StyledCheckboxContent labelPosition={labelPosition}>
      <input name={name} type="checkbox" id={id} disabled={disabled} onChange={(e) => { setIsChecked(e.target.checked); onChange(e); }} ref={ref} hidden />
      <StyledCheckbox checked={isChecked} disabled={disabled} error={error} onClick={() => ref.current?.click()} />
      <StyledLabel htmlFor={id} error={error} onClick={() => ref.current?.click()}>{label}</StyledLabel>
    </StyledCheckboxContent>
  );
};
