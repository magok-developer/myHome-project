"use client";

import { color } from "@/styles/color";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";

type Props = {
  id: string;
  name: string;
  address: string;
  recruitDate: string;
  appStartDate: string;
  appEndDate: string;
};
const Item = ({
  id,
  name,
  address,
  recruitDate,
  appStartDate,
  appEndDate,
}: Props) => {
  const route = useRouter();

  return (
    <Container>
      <Image src='/images/sample.jpg' width={550} height={304} alt='image' />
      <Content>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href={`/detail/${id}`}>
            <div className='house-name'>{name}</div>
          </Link>
          <Image
            src='/images/icons/arrow-right.svg'
            width={20}
            height={20}
            alt='arrow'
          />
        </div>

        <div style={{ fontWeight: "bold", marginTop: "30px" }}>주소</div>
        <div className='address'>{address}</div>

        <DateWrap>
          <div className='title'>모집 공고일</div>
          <div className='date'>{recruitDate}</div>
        </DateWrap>
        <DateWrap>
          <div className='title'>청약 접수 기간</div>
          <div className='date'>
            {appStartDate} ~ {appEndDate}
          </div>
        </DateWrap>
      </Content>
    </Container>
  );
};

export default Item;

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
  }
  .date {
    font-size: 14px;
  }
`;
