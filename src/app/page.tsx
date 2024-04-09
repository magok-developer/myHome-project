"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import styled from "@emotion/styled";

const Page = () => {
  return (
    <Container>
      <Image src='/images/House.png' width={200} height={200} alt='main' />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          복잡한 청약 정보는
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: color.secondary.white,
          }}
        >
          My Home
        </div>
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
`;
