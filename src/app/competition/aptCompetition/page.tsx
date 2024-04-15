"use client";

import styled from "@emotion/styled";

const page = () => {
  return (
    <Container>
      <div className='text'>준비중입니다.</div>
    </Container>
  );
};

export default page;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
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
