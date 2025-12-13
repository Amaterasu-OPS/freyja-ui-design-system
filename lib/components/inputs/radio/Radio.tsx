import styled from '@emotion/styled';
import { StyledTheme } from '@ui';
import React, { use, useEffect, useRef } from 'react';

export interface RadioProps {
  label: string;
  name: string;
  value: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  id: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledRadio = styled.div<{ checked?: boolean, disabled?: boolean, error?: boolean }>`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${(props: { theme: StyledTheme }) => props.theme.colors.input.border};
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    margin: auto;
    margin-top: 0.125rem;
    margin-left: 0.125rem;
    background-color: white;
    transform: ${(props) => (props.checked ? 'scale(1)' : 'scale(0)')};
    transition: all 0.2s ease-in-out;
    background-color: ${(props: { theme: StyledTheme }) => props.theme.colors.primary};
  }

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

        &::after {
          background-color: ${props.theme.colors.input.disabled.border} !important;
        }
      `
        : ''
  }
`;

const StyledRadioContent = styled.div<{ labelPosition?: 'left' | 'right' | 'top' | 'bottom' }>`
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

export const Radio = ({
  label,
  id,
  name,
  value,
  labelPosition = 'right',
  checked = false,
  disabled = false,
  error = false,
  onChange = () => {},
}: RadioProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = React.useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <StyledRadioContent labelPosition={labelPosition}>
      <input value={value} type="radio" name={name} id={id} disabled={disabled} onChange={(e) => { setIsChecked(e.target.checked); onChange(e); }} ref={ref} hidden />
      <StyledRadio checked={isChecked} disabled={disabled} error={error} onClick={() => ref.current?.click()} />
      <StyledLabel htmlFor={id} error={error} onClick={() => ref.current?.click()}>{label}</StyledLabel>
    </StyledRadioContent>
  );
};
