"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";

import dotenv from "dotenv";
dotenv.config();

const initialParams = {
  page: 1,
  perPage: 10,
};

const MyComponent = () => {
  const [params, setParams] = useState(initialParams);
  // const [data, setData] = useState<any>(null);

  const { data } = useQuery({
    queryKey: [rest.get.aptSalesInfoDetail, params],
    queryFn: ({ queryKey }) =>
      getAptSalesInfoDetail(queryKey[1] as APT_DETAIL_REQUEST),
  });

  return (
    <div>
      <pre id='data'>{data?.map((item) => item.BSNS_MBY_NM)}</pre>
    </div>
  );
};

export default MyComponent;
