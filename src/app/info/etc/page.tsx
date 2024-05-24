"use client";

import { rest } from "@/api/rest";
import SelectBox from "@/Components/SelectBox/SelectBox";
import useChangeSelect from "@/Components/hook/useChangeSelect";
import styled from "@emotion/styled";
import { useInfiniteQuery } from "@tanstack/react-query";
import dotenv from "dotenv";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getEtcSalesInfoDetail } from "@/api/api";
import { ETC_DETAIL_REQUEST } from "@/api/model";
import TopButton from "@/Components/Button/TopButton";
import { color } from "@/styles/color";
import { HOUSE_CODE_OPTIONS } from "../../../../public/static/static";
import EtcItem from "./Components/EtcItem";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
  cond: { "SEARCH_HOUSE_SECD::EQ": null },
  serviceKey: decodeURIComponent(process.env.NEXT_PUBLIC_API_KEY ?? ""),
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
    setParams({
      ...params,
      cond: {
        "SEARCH_HOUSE_SECD::EQ": select,
      },
    });
  }, [select]);

  const handleScroll = () => {
    // 스크롤 이벤트 핸들러
    const scrollHeight =
      window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;
    if (scrollHeight < documentHeight) {
      return;
    }
    if (isLoading || isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  useEffect(() => {
    // 스크롤 이벤트 추가
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, isFetchingNextPage]);

  return (
    <Container>
      <Title>
        <h2 className='sales-info'>분양 정보</h2>
        <div className='title-wrap'>
          <Image
            src='/images/icons/home.svg'
            width={24}
            height={24}
            alt='icon'
          />
          오피스텔 / 도시형생활주택 / 민간임대 분양 정보
        </div>
      </Title>

      <FilterWrap>
        <div className='wrap'>
          <h5>주택 구분</h5>
          <SelectBox
            options={HOUSE_CODE_OPTIONS}
            value={select}
            onChange={onChangeSelect}
          />
        </div>
      </FilterWrap>

      {data?.pages.map((pageData, index) => (
        <React.Fragment key={index}>
          {pageData.map((item, index) => (
            <EtcItem
              key={`${item.HOUSE_MANAGE_NO}_${index}`}
              id={item.HOUSE_MANAGE_NO}
              data={item}
            />
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <div>Loading...</div>}
      {!hasNextPage && !isLoading && <div>더이상 데이터가 없습니다.</div>}
      <TopButton />
    </Container>
  );
};

export default Page;

const Container = styled.div`
  padding: 0 20px 20px 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 30px 0;

  .sales-info {
    color: ${color.main.deepGreen};
  }

  .title-wrap {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0;

  .wrap {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;
