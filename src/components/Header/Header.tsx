"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const menuData = [
  {
    label: "분양 정보",
    path: "/apt",
    subMenu: [
      {
        label: "아파트",
        path: "/apt",
      },
      {
        label: "무순위/잔여세대",
        path: "/leftover",
      },
      {
        label: "아파트 외",
        path: "/etc",
      },
      {
        label: "공공지원 민간 임대",
        path: "/public",
      },
    ],
  },
  {
    label: "경쟁률",
    path: "/competition",
    subMenu: [
      {
        label: "아파트",
        path: "/aptCompetition",
      },
    ],
  },
];

const Header = () => {
  const path = usePathname();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleMenuClick = (index: any) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleSubMenuClick = () => {
    setOpenMenuIndex(null);
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

      <MenuList>
        {menuData.map((menu, index) => (
          <MenuItem key={index}>
            <MenuLabel
              onClick={() => handleMenuClick(index)}
              className={openMenuIndex === index ? "active" : ""}
            >
              {menu.label}
            </MenuLabel>
            {openMenuIndex === index && (
              <SubMenu>
                {menu.subMenu.map((subMenu, subIndex) => (
                  <Link href={subMenu.path} key={subIndex}>
                    <div onClick={handleSubMenuClick} className='subMenuItem'>
                      {subMenu.label}
                    </div>
                  </Link>
                ))}
              </SubMenu>
            )}
          </MenuItem>
        ))}
      </MenuList>

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

  /* 추가된 부분 */
  position: relative;
`;

const MenuList = styled.div`
  display: flex;
  gap: 30px;
`;

const MenuItem = styled.div`
  position: relative;
`;

const MenuLabel = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  &.active {
    // 활성화된 메뉴에 대한 스타일링

    color: ${color.blue.blue};
  }
`;

const SubMenu = styled.div`
  width: 120px;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: ${color.secondary.white};
  border: 1px solid ${color.blue.blue};
  border-radius: 4px;

  .subMenuItem {
    cursor: pointer;
    color: ${color.secondary.black};
    &:hover {
      color: ${color.blue.blue};
    }
  }
`;
