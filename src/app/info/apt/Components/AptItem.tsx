"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";
import { APT_DETAIL_RESPONSE } from "@/api/model";
import Link from "next/link";
import MapComponent from "@/Components/Map/Map";
import Button from "@/Components/Button/Button";
import Modal from "@/Components/Modal/Modal";
import { APPLICATION_STATUS } from "../../../../../public/lib/enum";

type Props = {
  id: string;
  data: APT_DETAIL_RESPONSE;
};
const AptItem = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getApplicationStatus = (): APPLICATION_STATUS => {
    const today = new Date();
    const startDate = new Date(data.RCEPT_BGNDE);
    const endDate = new Date(data.RCEPT_ENDDE);

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
      textColor = color.main.green;
      break;
    case APPLICATION_STATUS.CLOSED:
      textColor = color.secondary.red;
      break;
  }

  return (
    <>
      <Container>
        <div style={{ width: "450px", height: "350px" }}>
          <MapComponent address={data.HSSPLY_ADRES} index='page' />
        </div>
        <Content>
          <div className='wrap'>
            <Image
              src='/images/icons/flag.svg'
              width={16}
              height={16}
              alt='flag'
            />
            <p style={{ color: textColor }} className='status'>
              {status}
            </p>
          </div>
          <div className='wrap'>
            <p className='house-name' onClick={openModal}>
              {data.HOUSE_NM}
            </p>

            <Image
              src='/images/icons/arrow-right.svg'
              width={20}
              height={20}
              alt='arrow'
            />
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
            <span className='address'>
              ({data.HSSPLY_ZIP}) {data.HSSPLY_ADRES}
            </span>
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
            <span className='date'>{data.RCRIT_PBLANC_DE}</span>
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
            <span className='date'>
              {data.RCEPT_BGNDE} ~ {data.RCEPT_ENDDE}
            </span>
          </DateWrap>
        </Content>
        {isModalOpen && (
          <Modal visible={isModalOpen} onClose={closeModal}>
            <ModalContainer>
              <LeftSection>
                <h3>{data.HOUSE_NM}</h3>
                <div className='wrap'>
                  <Image
                    src='/images/icons/location.svg'
                    width={16}
                    height={16}
                    alt='icon'
                  />
                  <span className='address'>
                    ({data.HSSPLY_ZIP}) {data.HSSPLY_ADRES}
                  </span>
                </div>

                <div style={{ width: "90%", height: "70%" }}>
                  <MapComponent address={data.HSSPLY_ADRES} index='modal' />
                </div>
              </LeftSection>
              <div className='line' />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <RightSection>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>모집 공고일</h5>
                      </div>
                      <span className='period'>{data.RCRIT_PBLANC_DE}</span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>청약 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.SPSPLY_RCEPT_BGNDE} ~ {data.RCEPT_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>특별 공급 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.SPSPLY_RCEPT_BGNDE} ~ {data.SPSPLY_RCEPT_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>1순위 해당지역 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.GNRL_RNK1_CRSPAREA_RCPTDE} ~{" "}
                        {data.GNRL_RNK1_CRSPAREA_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>1순위 기타지역 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.GNRL_RNK1_ETC_AREA_RCPTDE} ~{" "}
                        {data.GNRL_RNK1_ETC_AREA_ENDDE}
                      </span>
                    </div>
                  </RightSection>
                  <RightSection>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>2순위 해당지역 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.GNRL_RNK2_CRSPAREA_RCPTDE} ~{" "}
                        {data.GNRL_RNK2_CRSPAREA_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>2순위 기타지역 접수 기간</h5>
                      </div>
                      <span className='period'>
                        {data.GNRL_RNK2_ETC_AREA_RCPTDE} ~{" "}
                        {data.GNRL_RNK2_ETC_AREA_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>당첨자 발표일</h5>
                      </div>
                      <span className='period'>{data.PRZWNER_PRESNATN_DE}</span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>계약 기간</h5>
                      </div>
                      <span className='period'>
                        {data.CNTRCT_CNCLS_BGNDE} ~ {data.CNTRCT_CNCLS_ENDDE}
                      </span>
                    </div>
                    <div className='wrap'>
                      <div className='icon-title-wrap'>
                        <Image
                          src='/images/icons/calendar.svg'
                          width={16}
                          height={16}
                          alt='icon'
                        />
                        <h5>입주 예정 월</h5>
                      </div>
                      <span className='period'>{data.MVN_PREARNGE_YM}</span>
                    </div>
                  </RightSection>
                </div>
                <div className='button-wrap'>
                  <Link href={data.PBLANC_URL} target='_blank'>
                    <Button text='청약홈으로 이동' variant='secondary' />
                  </Link>
                </div>
              </div>
            </ModalContainer>
          </Modal>
        )}
      </Container>
      <Line />
    </>
  );
};

export default AptItem;

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

  .wrap {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .status {
    font-size: 14px;
    font-weight: bold;
  }
  .house-name {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: ${color.main.deepGreen};
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
    color: ${color.main.deepGreen};
  }

  .line {
    width: 1px;
    height: 500px;
    background: ${color.yellow.yellow};
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  .button-wrap {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;

const LeftSection = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .wrap {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .address {
    font-size: 14px;
  }
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

  .icon-title-wrap {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .period {
    font-size: 12px;
    margin-left: 26px;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${color.main.green};
`;
