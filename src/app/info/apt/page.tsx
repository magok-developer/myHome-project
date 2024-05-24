"use client";

import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";
import dotenv from "dotenv";
import styled from "@emotion/styled";
import SelectBox from "@/Components/SelectBox/SelectBox";
import useChangeSelect from "@/Components/hook/useChangeSelect";
import Image from "next/image";
import AptItem from "./Components/AptItem";
import TopButton from "@/Components/Button/TopButton";
import { color } from "@/styles/color";
import { AREA_CODE_OPTIONS } from "../../../../public/static/static";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
  cond: {
    "SUBSCRPT_AREA_CODE_NM::EQ": null,
  },
  serviceKey: decodeURIComponent(process.env.NEXT_PUBLIC_API_KEY ?? ""),
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { select, onChange: onChangeSelect } = useChangeSelect(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [rest.get.aptSalesInfoDetail, params],
      queryFn: ({ pageParam = initialParams.page }) =>
        getAptSalesInfoDetail({
          ...params,
          page: pageParam,
        } as APT_DETAIL_REQUEST),
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
        "SUBSCRPT_AREA_CODE_NM::EQ": select,
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
            src='/images/icons/building.svg'
            width={24}
            height={24}
            alt='icon'
          />
          아파트
        </div>
      </Title>

      <FilterWrap>
        <div className='wrap'>
          <h5>공급 지역</h5>
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
            <AptItem
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
  position: relative;
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
