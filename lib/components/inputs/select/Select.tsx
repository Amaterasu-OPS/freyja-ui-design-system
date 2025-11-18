import { Input, InputProps } from '@ui';
import { motion } from 'motion/react';
import React from 'react';
import styled from 'styled-components';

type SelectKV = { value: string | number; label: string };

export interface SelectProps extends InputProps {
  options: SelectKV[];
  limit?: number;
  onSelectItem?: (_: SelectKV | null) => void;
}

const StyledSelect = styled.div`
  position: relative;
`;

const StyledSelectOptions = styled(motion.div)`
  position: absolute;
  z-index: 1;
  background: white;
  border-top: none;
  width: 100%;
  background-color: ${props => props.theme.colors.select.option.background};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  ul li {
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    grow: 1;

    &.selected-li {
      background-color: ${props => props.theme.colors.select.option.selected};
      font-weight: 600;
    }

    &:hover {
      background-color: ${props => props.theme.colors.select.option.hover};
      font-size: 14.5px;
    }
}
`;

const StyleMark = styled.div`
  margin-right: 8px;
  display: block;
  width: 10px;
  height: 5px;
  border-radius: 1px;
  border-left: 2px solid ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  transform: rotate(-45deg);
`;

export const Select = ({
  label,
  options = [],
  disabled = false,
  error = false,
  limit = 5,
  onSelectItem = () => {},
  ...props
}: SelectProps) => {
  const [search, setSearch] = React.useState<string>('');
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<SelectKV | null>(null);

  const lastSearch = React.useRef<string>('');
  const searchValue = React.useRef<string>('');

  const filteredOptions = options.filter(e => e.label.toLowerCase().includes(searchValue.current)).slice(0, limit);

  const onBlur = () => {
    setTimeout(() => {
      searchValue.current = '';
      setSearch(lastSearch.current);
      setIsFocused(false);
    }, 200);
  };

  const onFocus = () => {
    lastSearch.current = search;
    setSearch('');
    setIsFocused(true);
  };

  const onOptionClick = (option: SelectKV) => {
    if (selected && selected.value === option.value) {
      lastSearch.current = '';
      setSelected(null);
      setSearch('');
      setIsFocused(false);
      onSelectItem(null);
      return;
    }

    lastSearch.current = option.label;
    setSearch(option.label);
    setSelected(option);
    setIsFocused(false);
    onSelectItem(option);
  };

  const animate = {
    opacity: isFocused ? 1 : 0,
    height: isFocused ? 'auto' : 0,
  };

  return (
    <StyledSelect>
      <Input
        {...props}
        label={label}
        onChange={(e) => {
          setSearch(e.target.value);
          searchValue.current = e.target.value.trim().toLowerCase();
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        error={error}
        value={search}
        type="text"
      />
      <StyledSelectOptions animate={animate} initial={{ opacity: 0, height: 0 }} transition={{ duration: .3 }}>
        <ul>
          {filteredOptions.map((option) => (
            <li
              className={selected?.value === option.value ? 'selected-li' : ''}
              key={option.value}
              onClick={() => onOptionClick(option)}
            >
              {option.value === selected?.value && <StyleMark/>}
              {option.label}
            </li>
          ))}
        </ul>
      </StyledSelectOptions>
    </StyledSelect>
  );
};