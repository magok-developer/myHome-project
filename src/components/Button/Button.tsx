import { color } from "@/styles/color";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  return (
    <Container>
      <div>{text}</div>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 200px;
  height: 50px;
  background-color: ${color.blue.skyBlue};
  color: ${color.secondary.white};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${color.blue.blue};
    transition: 0.2s;
  }
`;
