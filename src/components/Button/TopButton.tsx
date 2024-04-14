import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopButton = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  // window 객체에서 scrollY 값을 받아옴
  // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return toggleBtn ? (
    <Container onClick={goToTop}>
      <Image src='images/icons/arrow-up.svg' width={20} height={20} alt='up' />
    </Container>
  ) : null;
};

export default TopButton;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 214, 98, 0.5);
  bottom: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 214, 98, 0.8);
  }
`;
