"use client";

import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";
import dotenv from "dotenv";
import AptItem from "@/components/Item/AptItem";
import styled from "@emotion/styled";
import SelectBox from "@/components/SelectBox/SelectBox";
import { AREA_CODE_OPTIONS } from "../../../public/static/static";
import useChangeSelect from "@/components/hook/useChangeSelect";
import Image from "next/image";
import Input from "@/components/Input/Input";
import { formatForAreaCode } from "../../../public/lib/formatForEnum";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
  cond: { "SUBSCRPT_AREA_CODE_NM::EQ": null },
  serviceKey: decodeURIComponent(process.env.NEXT_PUBLIC_API_KEY ?? ""),
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { select, onChange: onChangeSelect, setSelect } = useChangeSelect(null);

  const { data } = useQuery({
    queryKey: [rest.get.aptSalesInfoDetail, params],
    queryFn: ({ queryKey }) =>
      getAptSalesInfoDetail(queryKey[1] as APT_DETAIL_REQUEST),
  });

  useEffect(() => {
    setParams({
      ...params,
      cond: {
        "SUBSCRPT_AREA_CODE_NM::EQ": select,
      },
    });
  }, [select]);

  return (
    <Container>
      <Title>
        <Image
          src='/images/icons/building.svg'
          width={24}
          height={24}
          alt='icon'
        />
        아파트 분양 정보
      </Title>
      <FilterWrap>
        <Input placeholder='아파트 검색' />
        <div style={{ display: "flex", gap: "20px" }}>
          <SelectBox
            options={AREA_CODE_OPTIONS}
            value={select}
            onChange={onChangeSelect}
          />
        </div>
      </FilterWrap>

      {data?.map((item, index) => (
        <AptItem id={item.HOUSE_MANAGE_NO} data={item} />
      ))}
    </Container>
  );
};

export default Page;

const Container = styled.div`
  padding: 0 20px 20px 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 50px 0;
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0;

  gap: 8px;
`;
