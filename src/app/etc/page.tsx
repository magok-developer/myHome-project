"use client";

import { rest } from "@/api/rest";
import SelectBox from "@/components/SelectBox/SelectBox";
import useChangeSelect from "@/components/hook/useChangeSelect";
import styled from "@emotion/styled";
import { useInfiniteQuery } from "@tanstack/react-query";
import dotenv from "dotenv";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AREA_CODE_OPTIONS } from "../../../public/static/static";
import OffItem from "@/components/Item/EtcItem";
import { getEtcSalesInfoDetail } from "@/api/api";
import { ETC_DETAIL_REQUEST } from "@/api/model";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { select, onChange: onChangeSelect, setSelect } = useChangeSelect(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [rest.get.etcSalesInfoDetail, params],
      queryFn: ({ pageParam = initialParams.page }) =>
        getEtcSalesInfoDetail({
          ...params,
          page: pageParam,
        } as ETC_DETAIL_REQUEST),
      getNextPageParam: (lastPage, allPages) => {
        // 마지막 페이지가 모든 페이지 중 마지막 페이지인지 확인
        if (lastPage.length < initialParams.perPage) {
          return null; // 더 이상 데이터가 없음
        }
        return allPages.length + 1; // 다음 페이지 번호 반환
      },
      initialPageParam: initialParams.page, // 초기 페이지 매개변수 설정
    });

  useEffect(() => {
    // 새로운 지역 코드가 선택되면 params 초기화
    setParams(initialParams);
  }, [select]);

  const handleScroll = () => {
    // 스크롤 이벤트 핸들러
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (isLoading || isFetchingNextPage) {
      return;
    }
    fetchNextPage(); // 다음 페이지 데이터 가져오기
  };

  useEffect(() => {
    // 스크롤 이벤트 추가
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, isFetchingNextPage]);

  return (
    <Container>
      <Title>
        <Image src='/images/icons/home.svg' width={24} height={24} alt='icon' />
        오피스텔 / 도시형생활주택 / 민간임대 분양 정보
      </Title>
      <FilterWrap>
        <div>인풋</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <SelectBox
            options={AREA_CODE_OPTIONS}
            value={select}
            onChange={onChangeSelect}
          />
        </div>
      </FilterWrap>
      {data?.pages.map((pageData, index) => (
        <React.Fragment key={index}>
          {pageData.map((item, index) => (
            <OffItem
              key={`${item.HOUSE_MANAGE_NO}_${index}`}
              id={item.HOUSE_MANAGE_NO}
              data={item}
            />
          ))}
        </React.Fragment>
      ))}
      {isLoading && <div>로딩중</div>}
      {!hasNextPage && !isLoading && <div>더이상 데이터가 없습니다.</div>}
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
  justify-content: space-between;
  margin: 40px 0;
`;