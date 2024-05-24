"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { ETC_DETAIL_RESPONSE } from "@/api/model";
import { APPLICATION_STATUS } from "../../../../../public/lib/enum";
import MapComponent from "@/Components/Map/Map";
import { formatForHouseCode } from "../../../../../public/lib/formatForEnum";
import Modal from "@/Components/Modal/Modal";
import Button from "@/Components/Button/Button";

type Props = {
  id: string;
  data: ETC_DETAIL_RESPONSE;
};
const EtcItem = ({ data }: Props) => {
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

          <div className='house-info'>
            <Image
              src='/images/icons/home.svg'
              width={16}
              height={16}
              alt='icon'
            />
            {formatForHouseCode(data.SEARCH_HOUSE_SECD)}
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
            <span className='date'>{data.RCRIT_PBLANC_DE}</div>
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
              {data.SUBSCRPT_RCEPT_BGNDE} ~ {data.SUBSCRPT_RCEPT_ENDDE}
            </div>
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
                  </p>
                </div>

                <div style={{ width: "90%", height: "70%" }}>
                  <MapComponent address={data.HSSPLY_ADRES} index='modal' />
                </div>
              </LeftSection>
              <div className='line' />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  <RightSection>
                    <div className='house-info'>
                      <Image
                        src='/images/icons/home.svg'
                        width={16}
                        height={16}
                        alt='icon'
                      />
                      {formatForHouseCode(data.SEARCH_HOUSE_SECD)}
                    </div>

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
                      <span className='period'>{data.RCRIT_PBLANC_DE}</div>
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
                        {data.SUBSCRPT_RCEPT_BGNDE} ~{" "}
                        {data.SUBSCRPT_RCEPT_ENDDE}
                      </div>
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
                        <h5>당첨자 발표일</h5>
                      </div>
                      <span className='period'>{data.PRZWNER_PRESNATN_DE}</div>
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
                      </div>
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
                      <span className='period'>{data.MVN_PREARNGE_YM}</div>
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

export default EtcItem;

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

  .house-info {
    font-weight: bold;
    font-size: 14px;
    color: ${color.main.green};
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
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

  .house-info {
    font-weight: bold;
    font-size: 14px;
    color: ${color.main.green};
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

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
