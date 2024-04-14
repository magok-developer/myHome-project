import { color } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

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

const Header = () => {
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
        {menuData.map((item) => (
          <div className='main-menu'>
            {item.label}
            <div className='sub-menu'>
              {item.subMenu.map((sub) => (
                <Link href={sub.path}>
                  <div className='sub-menu-label'>{sub.label}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Menu>

      <div />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 0;
  display: flex;

  justify-content: space-between;

  box-sizing: border-box;
  z-index: 3;
`;

const Menu = styled.div`
  display: flex;
  gap: 40px;

  .main-menu {
    position: relative;
    height: 30px;
    cursor: pointer;
    font-weight: bold;
  }
  .main-menu:hover {
    color: ${color.main.deepGreen};
    border-bottom: 2px solid ${color.main.deepGreen};
  }

  .main-menu:hover .sub-menu {
    display: flex;
  }
  .sub-menu {
    cursor: default;
    width: 200%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    border-radius: 8px;
    padding: 18px 10px;
    top: 25px;
    left: -70%;
    position: absolute;
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
