import React from 'react';
import styled, {css} from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';
  value?: string | number;
  disabled?: boolean;
  error?: boolean;
}

const disabledInputCSS = css`
    background-color: ${props => props.theme.colors.input.disabled.background} !important;
    cursor: not-allowed;
    border-color: ${props => props.theme.colors.input.disabled.border} !important;

    label, input {
        color: ${props => props.theme.colors.input.disabled.label};
    }
`;

const errorLabelCSS = css`
    color: ${props => props.theme.colors.error} !important;
    font-weight: 600;
`;

const errorInputCSS = css`
    border-color: ${props => props.theme.colors.error} !important;
`;

const StyledDivInput = styled.div.withConfig({
  shouldForwardProp: (prop) => !['disabled'].includes(prop),
})<{ disabled?: boolean, error?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid color-mix(in srgb, ${props => props.theme.colors.input.border} 100%, ${props => props.theme.colors.input.contrast} 80%);
    border-radius: 8px;
    position: relative;
    transition: all 0.2s ease-in-out;
    margin-top: 8px;

    ${(props) => props.disabled ? disabledInputCSS: ''}
    ${(props) => props.error && errorInputCSS}

    &:has(> input:focus), &:has(> input:not(:placeholder-shown)) {
        border-color: ${props => props.theme.colors.input.border};
    }
`;

const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'error'].includes(prop),
})<{ disabled?: boolean, error?: boolean }>`
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 14px;
    background-color: transparent;

    ${(props) => props.disabled && 'pointer-events: none;'}

    & ~ label {
        ${(props) => props.error && errorLabelCSS}
        font-weight: 500;
    }

    &:focus ~ label, &:not(:placeholder-shown) ~ label {
        top: -1px;
        font-size: 10px;
        background-color: ${props => props.theme.colors.input.contrast};
        padding: 0 4px;
        border-radius: 4rem;
        ${(props) => props.error && errorLabelCSS}
    }
`;

const StyledLabel = styled.label`
    font-size: 14px;
    color: ${props => props.theme.colors.input.label};
    position: absolute;
    left: 11px;
    transform: translateY(-50%);
    top: 50%;
    cursor: text;
    transition: all 0.1s ease-in-out;
    pointer-events: none;
`;

export const Input = ({
  label,
  type = 'text',
  disabled = false,
  error = false,
  ...props
}: InputProps) => {
  const uuid = crypto.randomUUID();

  return (
    <StyledDivInput disabled={disabled} error={error}>
      <StyledInput
        type={type}
        placeholder=" "
        className="input-field"
        id={uuid}
        disabled={disabled}
        error={error}
        {...props}
      />
      <StyledLabel htmlFor={uuid}>{label}</StyledLabel>
    </StyledDivInput>
  );
};