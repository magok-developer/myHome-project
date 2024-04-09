"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const router = [
  {
    path: "/apt",
    label: "아파트",
  },
  {
    path: "/etc",
    label: "아파트 외",
  },
];

const Header = () => {
  const path = usePathname();
  const [visible, setVisible] = useState(false);

  const handleClickMenu = () => {
    setVisible(!visible);
  };

  const handleClickOther = () => {
    setVisible(false);
  };

  return (
    <Container isHomePage={path === "/"}>
      <Link href='/'>
        <Image
          src={
            path === "/"
              ? "images/icons/home-smile-white.svg"
              : "/images/icons/home-smile.svg"
          }
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
          {router.map((item, index) => (
            <Link href={item.path} key={`${item.path}_${index}`}>
              <div onClick={handleClickOther} className='label'>
                {item.label}
              </div>
            </Link>
          ))}
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

const Container = styled.div<{ isHomePage: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  z-index: 3;

  background: ${({ isHomePage }) =>
    isHomePage ? "#526D80" : color.secondary.white};
  color: ${({ isHomePage }) =>
    isHomePage ? color.secondary.white : color.secondary.black};
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
  color: ${color.secondary.black};

  font-size: 14px;

  border: 1px solid ${color.blue.blue};
  background-color: ${color.secondary.white};
  border-radius: 4px;
  .label:hover {
    color: ${color.blue.blue};
  }
`;
