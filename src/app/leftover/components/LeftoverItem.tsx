"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";
import Modal from "../../../components/Modal/Modal";
import { LEFTOVER_DETAIL_RESPONSE } from "@/api/model";
import MapComponent from "../../../components/Map/Map";
import { APPLICATION_STATUS } from "../../../../public/lib/enum";
import Button from "../../../components/Button/Button";
import Link from "next/link";
import { formatForLeftoverCode } from "../../../../public/lib/formatForEnum";

type Props = {
  id: string;
  data: LEFTOVER_DETAIL_RESPONSE;
};
const LeftoverItem = ({
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

  const getApplicationStatus = (): APPLICATION_STATUS => {
    const today = new Date();
    const startDate = new Date(data.SUBSCRPT_RCEPT_BGNDE);
    const endDate = new Date(data.SUBSCRPT_RCEPT_ENDDE);

    if (today < startDate) {
      return APPLICATION_STATUS.UPCOMING;
    } else if (today >= startDate && today <= endDate) {
      return APPLICATION_STATUS.OPEN;
    } else {
      return APPLICATION_STATUS.CLOSED;
    }
  };

  const status = getApplicationStatus();

  let textColor;
  switch (status) {
    case APPLICATION_STATUS.UPCOMING:
      textColor = color.blue.blue;
      break;
    case APPLICATION_STATUS.OPEN:
      textColor = color.secondary.green;
      break;
    case APPLICATION_STATUS.CLOSED:
      textColor = color.secondary.red;
      break;
  }

  return (
    <>
      <Container>
        <div style={{ width: "550px", height: "350px" }}>
          <MapComponent address={data.HSSPLY_ADRES} />
        </div>
        <Content>
          <div
            style={{
              color: textColor,
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image
              src='/images/icons/flag.svg'
              width={16}
              height={16}
              alt='flag'
            />
            {status}
          </div>
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
              fontSize: "14px",
              color: color.secondary.green,
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Image
              src='/images/icons/home.svg'
              width={16}
              height={16}
              alt='icon'
            />
            {data.HOUSE_SECD_NM}
          </div>

          <DateWrap>
            <div className='title'>
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
          </DateWrap>

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
              {data.SUBSCRPT_RCEPT_BGNDE} ~ {data.SUBSCRPT_RCEPT_ENDDE}
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

              <div style={{ width: "90%", height: "70%" }}>
                <MapComponent address={data.HSSPLY_ADRES} />
              </div>
            </LeftSection>
            <div className='line' />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <RightSection>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: color.secondary.green,
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Image
                      src='/images/icons/home.svg'
                      width={16}
                      height={16}
                      alt='icon'
                    />
                    {data.HOUSE_SECD_NM}
                  </div>

                  <div className='wrap'>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
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
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
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
                      {data.SUBSCRPT_RCEPT_BGNDE} ~ {data.SUBSCRPT_RCEPT_ENDDE}
                    </div>
                  </div>
                </RightSection>
                <RightSection>
                  <div className='wrap'>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
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
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
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
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
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
              </div>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <Link href={data.PBLANC_URL} target='_blank'>
                    <Button text='청약홈으로 이동' variant='secondary' />
                  </Link>
                  <Button text='경쟁률 보러가기' variant='primary' />
                </div>
              </div>
            </div>
          </ModalContainer>
        </Modal>
      </Container>
      <div
        style={{ height: "1px", width: "100%", background: color.blue.skyBlue }}
      />
    </>
  );
};

export default LeftoverItem;

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const Content = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
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
    height: 500px;
    background: ${color.yellow.yellow};
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
