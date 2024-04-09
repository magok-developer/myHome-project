"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
  children?: any;
  style?: React.CSSProperties;
};

export type ModalPageProps = Pick<ModalProps, "onClose" | "visible">;

const Modal = ({ visible, onClose, children, style }: ModalProps) => {
  return (
    <Container visible={visible}>
      <div onClick={onClose} className='close'>
        <Image width={20} height={20} src='/images/icons/x.svg' alt='close' />
      </div>
      <Content style={style} onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  left: 0px;
  top: 0px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  background: rgba(245, 246, 247, 0.8);
  backdrop-filter: blur(20px);
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
    z-index: 9999;
  }
`;

const Content = styled.div`
  position: relative;

  width: 100%;
`;
