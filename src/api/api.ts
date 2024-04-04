import { API } from "./axiosConfig";
import { APT_DETAIL_REQUEST, APT_DETAIL_RESPONSE } from "./model";
import { rest } from "./rest";

export const getAptSalesInfoDetail = async (
  params: APT_DETAIL_REQUEST
): Promise<APT_DETAIL_RESPONSE[]> => {
  const response = await API.get(
    `${rest.get.aptSalesInfoDetail}?page=${params.page}&perPage=${params.perPage}&serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return response.data;
};
