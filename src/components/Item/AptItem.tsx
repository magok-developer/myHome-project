"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";
import Modal from "../Modal/Modal";
import { APT_DETAIL_RESPONSE } from "@/api/model";
import MapComponent from "../Map/Map";

type Props = {
  id: string;
  data: APT_DETAIL_RESPONSE;
};
const AptItem = ({
  id,

  data,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Image src='/images/sample.jpg' width={550} height={304} alt='image' />
      <Content>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div className='house-name' onClick={openModal}>
            {data.HOUSE_NM}
          </div>

          <Image
            src='/images/icons/arrow-right.svg'
            width={20}
            height={20}
            alt='arrow'
          />
        </div>

        <div
          style={{
            fontWeight: "bold",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Image
            src='/images/icons/location.svg'
            width={16}
            height={16}
            alt='icon'
          />
          주소
        </div>
        <div className='address'>
          ({data.HSSPLY_ZIP}) {data.HSSPLY_ADRES}
        </div>

        <DateWrap>
          <div className='title'>
            <Image
              src='/images/icons/calendar.svg'
              width={16}
              height={16}
              alt='icon'
            />
            모집 공고일
          </div>
          <div className='date'>{data.RCRIT_PBLANC_DE}</div>
        </DateWrap>
        <DateWrap>
          <div className='title'>
            <Image
              src='/images/icons/calendar.svg'
              width={16}
              height={16}
              alt='icon'
            />
            청약 접수 기간
          </div>
          <div className='date'>
            {data.RCEPT_BGNDE} ~ {data.RCEPT_ENDDE}
          </div>
        </DateWrap>
      </Content>
      <Modal visible={isModalOpen} onClose={closeModal}>
        <ModalContainer>
          <LeftSection>
            <h3>{data.HOUSE_NM}</h3>
            <div
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src='/images/icons/location.svg'
                width={16}
                height={16}
                alt='icon'
                style={{ marginRight: "4px" }}
              />
              ({data.HSSPLY_ZIP}) {data.HSSPLY_ADRES}
            </div>

            <MapComponent address={data.HSSPLY_ADRES} />
          </LeftSection>
          <div className='line' />
          <RightSection>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>모집 공고일</h5>
              </div>
              <div className='period'>{data.RCRIT_PBLANC_DE}</div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>청약 접수 기간</h5>
              </div>
              <div className='period'>
                {data.SPSPLY_RCEPT_BGNDE} ~ {data.RCEPT_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>특별 공급 접수 기간</h5>
              </div>
              <div className='period'>
                {data.SPSPLY_RCEPT_BGNDE} ~ {data.SPSPLY_RCEPT_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>1순위 해당지역 접수 기간</h5>
              </div>
              <div className='period'>
                {data.GNRL_RNK1_CRSPAREA_RCPTDE} ~{" "}
                {data.GNRL_RNK1_CRSPAREA_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>1순위 기타지역 접수 기간</h5>
              </div>
              <div className='period'>
                {data.GNRL_RNK1_ETC_AREA_RCPTDE} ~{" "}
                {data.GNRL_RNK1_ETC_AREA_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>2순위 해당지역 접수 기간</h5>
              </div>
              <div className='period'>
                {data.GNRL_RNK2_CRSPAREA_RCPTDE} ~{" "}
                {data.GNRL_RNK2_CRSPAREA_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>2순위 기타지역 접수 기간</h5>
              </div>
              <div className='period'>
                {data.GNRL_RNK2_ETC_AREA_RCPTDE} ~{" "}
                {data.GNRL_RNK2_ETC_AREA_ENDDE}
              </div>
            </div>
          </RightSection>
          <RightSection>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>당첨자 발표일</h5>
              </div>
              <div className='period'>{data.PRZWNER_PRESNATN_DE}</div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>계약 기간</h5>
              </div>
              <div className='period'>
                {data.CNTRCT_CNCLS_BGNDE} ~ {data.CNTRCT_CNCLS_ENDDE}
              </div>
            </div>
            <div className='wrap'>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <Image
                  src='/images/icons/calendar.svg'
                  width={16}
                  height={16}
                  alt='icon'
                />
                <h5>입주 예정 월</h5>
              </div>
              <div className='period'>{data.MVN_PREARNGE_YM}</div>
            </div>
          </RightSection>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AptItem;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .house-name {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: ${color.blue.navy};
    }
  }
  .address {
    font-size: 14px;
  }
`;

const DateWrap = styled.div`
  margin-top: 20px;

  .title {
    font-weight: bold;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .date {
    font-size: 14px;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  padding: 50px;

  h5 {
    color: ${color.blue.navy};
  }

  .line {
    width: 1px;
    height: 600px;
    background: #bebebe;
    margin-left: 50px;
    display: flex;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 50px 50px 0 50px;

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .period {
    font-size: 12px;
    margin-left: 26px;
  }
`;
