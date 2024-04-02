"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { rest } from "@/api/rest";
import { getAptSalesInfoDetail } from "@/api/api";
import { APT_DETAIL_REQUEST } from "@/api/model";

const initialParams = {
  page: 1,
  perPage: 10,
};

const MyComponent = () => {
  const [params, setParams] = useState(initialParams);
  // const [data, setData] = useState<any>(null);

  // const { data } = useQuery<APT_DETAIL_REQUEST>({
  //   queryKey: [rest.get.aptSalesInfoDetail, params],
  //   queryFn: ({ queryKey }) =>
  //     getAptSalesInfoDetail(queryKey[1] as APT_DETAIL_REQUEST),
  // });

  return (
    <div>
      <pre id='data'>{}</pre>
    </div>
  );
};

export default MyComponent;
