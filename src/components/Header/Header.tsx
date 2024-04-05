"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleClickMenu = () => {
    setVisible(!visible);
  };

  const handleClickOther = () => {
    setVisible(false);
  };

  return (
    <Container>
      <Link href='/'>
        <Image
          src='/images/icons/home-smile.svg'
          width={30}
          height={30}
          alt='home'
        />
      </Link>

      <Wrap>
        <div onClick={handleClickMenu} style={{ cursor: "pointer" }}>
          분양 정보
        </div>
        <Menu visible={visible}>
          <Link href='/apt'>
            <div onClick={handleClickOther}>아파트</div>
          </Link>
          <div>오피스텔</div>
          <div>도시형</div>
        </Menu>
        <div>경쟁률 조회</div>
        <div>메뉴</div>
        <div>메뉴</div>
      </Wrap>
      <div></div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  box-sizing: border-box;
`;

const Wrap = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  font-weight: bold;
`;
const Menu = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 30px;
  left: -10px;
  padding: 16px;

  box-sizing: border-box;

  font-size: 14px;

  background-color: ${color[4]};
`;
