"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";
import dotenv from "dotenv";
import Item from "@/components/Item/Item";
import styled from "styled-components";
import Link from "next/link";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 20,
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  // const [data, setData] = useState<any>(null);

  const { data } = useQuery({
    queryKey: [rest.get.aptSalesInfoDetail, params],
    queryFn: ({ queryKey }) =>
      getAptSalesInfoDetail(queryKey[1] as APT_DETAIL_REQUEST),
  });

  return (
    <Container>
      <Title>아파트 분양 정보</Title>
      {data?.map((item, index) => (
        <Item
          key={`${item.HOUSE_MANAGE_NO}_${index}`}
          id={item.HOUSE_MANAGE_NO}
          name={item.HOUSE_NM}
          address={item.HSSPLY_ADRES}
          recruitDate={item.RCRIT_PBLANC_DE}
          appStartDate={item.RCEPT_BGNDE}
          appEndDate={item.RCEPT_ENDDE}
        />
      ))}
    </Container>
  );
};

export default Page;

const Container = styled.div`
  padding: 0 20px 20px 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`;
