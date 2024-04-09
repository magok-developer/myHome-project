"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";
import dotenv from "dotenv";
import Item from "@/components/Item/Item";
import styled from "styled-components";
import SelectBox from "@/components/SelectBox/SelectBox";
import { AREA_CODE_OPTIONS } from "../../../public/static/static";
import useChangeSelect from "@/components/hook/useChangeSelect";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 20,
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { select, onChange: onChangeSelect, setSelect } = useChangeSelect(null);

  const { data } = useQuery({
    queryKey: [rest.get.aptSalesInfoDetail, params],
    queryFn: ({ queryKey }) =>
      getAptSalesInfoDetail(queryKey[1] as APT_DETAIL_REQUEST),
  });

  return (
    <Container>
      <Title>아파트 분양 정보</Title>
      <FilterWrap>
        <div style={{ display: "flex", gap: "20px" }}>
          <SelectBox
            options={AREA_CODE_OPTIONS}
            value={select}
            onChange={onChangeSelect}
          />
        </div>
        <div>인풋</div>
      </FilterWrap>
      {data?.map((item, index) => (
        <Item
          key={`${item.HOUSE_MANAGE_NO}_${index}`}
          id={item.HOUSE_MANAGE_NO}
          data={item}
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

const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;
