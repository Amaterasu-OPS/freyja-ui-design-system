import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StyledTheme } from '@ui';
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url' | 'date' | 'time' | 'datetime-local' | 'month' | 'week';
  value?: string | number;
  disabled?: boolean;
  error?: boolean;
}

const disabledInputCSS = (theme: StyledTheme) => css`
    background-color: ${theme.colors.input.disabled.background} !important;
    cursor: not-allowed;
    border-color: ${theme.colors.input.disabled.border} !important;

    label, input {
        color: ${theme.colors.input.disabled.label};
    }
`;

const errorLabelCSS = (theme: StyledTheme) => css`
    color: ${theme.colors.error} !important;
    font-weight: 600;
`;

const errorInputCSS = (theme: StyledTheme) => css`
    border-color: ${theme.colors.error} !important;
`;

const StyledDivInput = styled.div<{ disabled?: boolean, error?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 2px solid color-mix(in srgb, ${props => props.theme.colors.input.border} 100%, ${props => props.theme.colors.input.contrast} 80%);
    border-radius: 8px;
    position: relative;
    transition: all 0.2s ease-in-out;
    margin-top: 8px;

    ${(props) => props.disabled ? disabledInputCSS(props.theme): ''}
    ${(props) => props.error && errorInputCSS(props.theme)}

    &:has(> input:focus), &:has(> input:not(:placeholder-shown)) {
        border-color: ${props => props.theme.colors.input.border};
    }
`;

const StyledInput = styled.input<{ disabled?: boolean, error?: boolean }>`
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
        ${(props) => props.error && errorLabelCSS(props.theme)}
        font-weight: 500;
    }

    &:focus ~ label, &:not(:placeholder-shown) ~ label {
        top: -1px;
        font-size: 10px;
        background-color: ${props => props.theme.colors.input.contrast};
        padding: 0 4px;
        border-radius: 4rem;
        ${(props) => props.error && errorLabelCSS(props.theme)}
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
  id,
  type = 'text',
  disabled = false,
  error = false,
  ...props
}: InputProps) => {
  return (
    <StyledDivInput disabled={disabled} error={error}>
      <StyledInput
        {...props}
        type={type}
        placeholder=" "
        className="input-field"
        id={id}
        disabled={disabled}
        error={error}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledDivInput>
  );
};
