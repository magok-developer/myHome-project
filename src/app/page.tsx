"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import styled from "@emotion/styled";
import Header from "@/components/Header/Header";

const Page = () => {
  return (
    <Container>
      <Header />
      <Image src='/images/House.png' width={200} height={200} alt='main' />

      <TitleWrap>
        <span className='title'>복잡한 청약 정보는</span>
        <div className='text'>My Home</div>
      </TitleWrap>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  height: 605px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${color.main.white};
  background-size: 60%;
  background-position: right;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .title {
    color: ${color.main.deepGreen};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .text {
    font-size: 24px;
    font-weight: bold;
    color: ${color.main.green};
    animation: move 2s infinite;
  }
  @keyframes move {
    from {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;
