"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import styled from "styled-components";

const Page = () => {
  return (
    <Container>
      <Image src='/images/House.png' width={200} height={200} alt='main' />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          복잡한 청약 정보는
        </div>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: color[5] }}>
          My Home
        </div>
      </div>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
