"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import useChangeSelect from "@/components/hook/useChangeSelect";
import { useInfiniteQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import {
  getLeftoverSalesInfoDetail,
  getPublicSalesInfoDetail,
} from "@/api/api";
import { LEFTOVER_DETAIL_REQUEST, PUBLIC_DETAIL_REQUEST } from "@/api/model";
import SelectBox from "@/components/SelectBox/SelectBox";
import { LEFTOVER_HOUSE_CODE_OPTIONS } from "../../../public/static/static";
import PublicItem from "./components/PublicItem";
import TopButton from "@/components/Button/TopButton";
import { color } from "@/styles/color";

dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
  serviceKey: decodeURIComponent(process.env.NEXT_PUBLIC_API_KEY ?? ""),
};

const Page = () => {
  const [params, setParams] = useState(initialParams);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [rest.get.publicSalesInfoDetail, params],
      queryFn: ({ pageParam = initialParams.page }) =>
        getPublicSalesInfoDetail({
          ...params,
          page: pageParam,
        } as PUBLIC_DETAIL_REQUEST),
      getNextPageParam: (lastPage, allPages) => {
        // 마지막 페이지가 모든 페이지 중 마지막 페이지인지 확인
        if (lastPage.length < initialParams.perPage) {
          return null; // 더 이상 데이터가 없음
        }
        return allPages.length + 1; // 다음 페이지 번호 반환
      },
      initialPageParam: initialParams.page, // 초기 페이지 매개변수 설정
    });

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
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: color.main.deepGreen,
          }}
        >
          분양 정보
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src='/images/icons/home.svg'
            width={24}
            height={24}
            alt='icon'
          />
          공공지원 민간 임대 분양 정보
        </div>
      </Title>

      {data?.pages.map((pageData, index) => (
        <React.Fragment key={index}>
          {pageData.map((item, index) => (
            <PublicItem
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
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 30px 0;
`;

const FilterWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 40px 0;
`;
