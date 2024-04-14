import { color } from "@/styles/color";
import styled from "@emotion/styled";
import React from "react";

type BUTTON_STYLE_PROPS = {
  variant?: "primary" | "secondary";
};

type Props = BUTTON_STYLE_PROPS & {
  text: string;
  variant: string;
};
const Button = ({ text, variant }: Props) => {
  return (
    <Container variant={variant}>
      <div>{text}</div>
    </Container>
  );
};

export default Button;

const COLOR_TYPE = {
  ["primary"]: {
    backgroundColor: `${color.main.green}`,
    color: `${color.main.white}`,
  },
  ["secondary"]: {
    backgroundColor: `${color.yellow.lemonYellow}`,
    color: `${color.main.green}`,
  },
};

const Container = styled.div<BUTTON_STYLE_PROPS>`
  ${({ variant }) => COLOR_TYPE[variant as "primary"]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ variant }) =>
      variant?.includes("primary")
        ? color.main.deepGreen
        : color.yellow.yellow};
    transition: 0.2s;
  }
`;
