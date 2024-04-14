import { color } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuData = [
  {
    label: "분양 정보",
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
    subMenu: [
      {
        label: "아파트",
        path: "/aptCompetition",
      },
    ],
  },
];

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClickMenu = (index: any) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    <Container>
      <Link href='/'>
        <Image
          src='images/icons/home-smile.svg'
          width={30}
          height={30}
          alt='home'
        />
      </Link>

      <Menu>
        {menuData.map((item, index) => (
          <MenuWrap
            key={index}
            className='main-menu'
            onClick={() => handleClickMenu(index)}
          >
            {item.label}
            <div className={`sub-menu ${activeMenu === index ? "active" : ""}`}>
              {item.subMenu.map((sub, subIndex) => (
                <Link key={subIndex} href={sub.path}>
                  <div className='sub-menu-label'>{sub.label}</div>
                </Link>
              ))}
            </div>
          </MenuWrap>
        ))}
      </Menu>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  position: fixed;
  top: 10px;
  height: 97vh;
  z-index: 999;
  margin-left: 20px;
  background: rgba(43, 174, 102, 0.2);
  border-radius: 8px;
  padding-top: 30px;
  box-sizing: border-box;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  .sub-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .sub-menu.active {
    display: flex;
  }

  .sub-menu-label {
    font-size: 12px;
    cursor: pointer;
    color: black;

    &:hover {
      color: ${color.main.deepGreen};
    }
  }
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  &:hover {
    color: ${color.main.deepGreen};
  }
`;
