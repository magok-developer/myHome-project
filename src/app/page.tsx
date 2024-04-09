"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import styled from "@emotion/styled";

const Page = () => {
  return (
    <Container>
      <Image src='/images/House.png' width={200} height={200} alt='main' />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          color: color.yellow.yellow,
        }}
      >
        <div
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}
        >
          복잡한 청약 정보는
        </div>
        <div className='text'>My Home</div>
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  height: 605px;
  padding-left: 10%;
  display: flex;
  align-items: center;

  background: no-repeat #526d80;
  background-image: url("/images/main.jpg");
  background-size: 60%;
  background-position: right;

  .text {
    font-size: 24px;
    font-weight: bold;
    color: ${color.secondary.white};
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
