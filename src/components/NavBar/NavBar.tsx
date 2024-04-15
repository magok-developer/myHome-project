"use client";

import styled from "@emotion/styled";
import { color } from "@/styles/color";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuData = [
  {
    label: "분양 정보",
    path: "/info",
    height: 125,
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
    height: 20,
    subMenu: [
      {
        label: "아파트",
        path: "/aptCompetition",
      },
    ],
  },
];

const AdminSidebar = () => {
  const path = usePathname();
  const route = useRouter();
  const [activeMenu, setActiveMenu] = useState(path);
  const [openMenu, setOpenMenu] = useState(path);

  const handleClickMenu = (path: string) => {
    setActiveMenu(path);
    setOpenMenu("");
  };

  const handleClickOpen = (path: string) => {
    setOpenMenu(path);
  };

  const isSubActive = (submenuPath: string) => {
    return path.includes(submenuPath);
  };

  return (
    <Container>
      <div className='wrap'>
        <Link href={"/"}>
          <Image
            className='logo'
            src={"/images/icons/home-smile.svg"}
            alt='logo'
            width={40}
            height={40}
          />
        </Link>

        <MenuContainer>
          {menuData.map((item) => {
            const { subMenu } = item;
            const isActive = item.path;
            const openSub = item.path === openMenu;

            const arrowPath = `/images/icons/${
              isActive ? (openSub ? "arrow_up_green" : "arrow_down_green") : ""
            }.svg`;

            return (
              <li
                key={item.path}
                onClick={
                  subMenu
                    ? () => handleClickOpen(item.path)
                    : () => handleClickMenu(item.path)
                }
              >
                <MenuWrap>
                  <span className='menuLabel'>{item.label}</span>
                  <Image src={arrowPath} alt={"arrow"} width={16} height={16} />
                </MenuWrap>

                {subMenu && (
                  <StyledMenu height={item.height} openSub={openSub}>
                    {subMenu?.map((subMenu) => {
                      const isSubMenuItemActive = isSubActive(
                        item.path + subMenu.path
                      );

                      return (
                        <Link
                          href={item.path + subMenu.path}
                          key={subMenu.path}
                        >
                          <li
                            className={
                              isSubMenuItemActive ? "active" : "common"
                            }
                          >
                            {subMenu.label}
                          </li>
                        </Link>
                      );
                    })}
                  </StyledMenu>
                )}
              </li>
            );
          })}
        </MenuContainer>
      </div>
    </Container>
  );
};

export default AdminSidebar;

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

  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    z-index: 1;
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 30px;

  margin-top: 61px;

  .menuLabel {
    color: ${color.main.deepGreen};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  .active {
    color: ${color.main.green};
    font-weight: bold;
  }
  .common {
    color: #909090;
    &:hover {
      color: ${color.main.green};
    }
  }
`;

const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledMenu = styled.ul<{ openSub: boolean; height: number }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;

  height: ${({ height, openSub }) => (openSub ? height + 13 : 0)}px;
  overflow: hidden;
  transition: height 0.2s ease-in;
  transition-property: display 0.2s ease-in;

  li {
    color: ${color.main.green};
    font-size: 14px;
    font-weight: 400;

    box-sizing: border-box;
  }
`;
