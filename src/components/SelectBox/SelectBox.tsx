"use client";

import { color } from "@/styles/color";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

export type OPTION_TYPE<T> = { label: string; value: any };

export type SelectBoxProps<T> = {
  options: { label: string; value: T | any }[];
  value: T;
  name?: string;
  onChange?: (name: string, value: T | any) => void;
  style?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  placeholder?: string;
  optionWrapperStyle?: React.CSSProperties;
};

const SelectBox = <T,>({
  value,
  name,
  options,
  onChange,
  style,
  optionStyle,
  placeholder,
  optionWrapperStyle,
}: SelectBoxProps<T>) => {
  const [visible, setVisible] = useState(false);

  const handleClickSelect = () => {
    setVisible(!visible);
  };

  const handleClick = (value: T) => {
    if (onChange) {
      onChange(name as string, value);
      setVisible(false);
    }
  };

  const handleBlur = () => {
    setVisible(false);
  };

  const selected = options.filter((option) => option.value === value);

  return (
    <Container onClick={handleClickSelect} tabIndex={0} onBlur={handleBlur}>
      <StyledSelect value={value} name={name} style={style}>
        <div className={selected.length === 0 ? "choice-value" : "value"}>
          {selected.length === 0 ? placeholder : selected[0].label}
        </div>

        <Image
          src='/images/icons/arrow-down.svg'
          width={16}
          height={16}
          alt='arrow'
          style={{ position: "absolute", right: "4px", cursor: "pointer" }}
        />
      </StyledSelect>
      {visible && (
        <OptionWrapper style={optionWrapperStyle}>
          {options?.map((option, index) => (
            <li
              onClick={() => handleClick(option.value)}
              style={optionStyle}
              key={`${option.value}_${index}`}
              value={option.label}
            >
              {option.label}
            </li>
          ))}
        </OptionWrapper>
      )}
    </Container>
  );
};

export default SelectBox;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledSelect = styled.div<any>`
  width: 152px;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 6px;

  border: 1px solid ${color.yellow.lemonYellow};
  color: ${color.secondary.black};

  background: ${color.yellow.yellow};
  .value {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const OptionWrapper = styled.ul<any>`
  position: absolute;
  top: 29px;
  box-sizing: border-box;
  border-radius: 6px;

  z-index: 3;

  overflow: hidden;
  border: 1px solid ${color.yellow.yellow};

  &:first-child {
    border-radius: 6px 6px 0 0;
  }

  li {
    width: 150px;
    height: 30px;
    display: flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-sizing: border-box;
    cursor: pointer;

    background-color: ${color.main.white};
  }
  li:hover {
    background: ${color.yellow.yellow};
    border-bottom: 1px solid ${color.yellow.lemonYellow};
    border-top: 1px solid ${color.yellow.lemonYellow};

    &:first-child {
      border-radius: 5px 5px 0 0;
      border-top: none;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;
