import { color } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  placeholder?: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <Container>
      <StyledInput placeholder={placeholder} />
      <Image
        src='images/icons/search.svg'
        width={16}
        height={16}
        alt='icon'
        style={{ cursor: "pointer" }}
      />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 200px;
  height: 30px;
  padding: 10px;
  border: 1px solid #bebebe;
  border-radius: 6px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
`;

const StyledInput = styled.input`
  width: 87%;
  border: none;
  outline: none;
`;
