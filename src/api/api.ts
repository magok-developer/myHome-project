import { API } from "./axiosConfig";
import {
  APT_COMPETITION_REQUEST,
  APT_COMPETITION_RESPONSE,
  APT_DETAIL_REQUEST,
  APT_DETAIL_RESPONSE,
  ETC_DETAIL_REQUEST,
  ETC_DETAIL_RESPONSE,
  LEFTOVER_DETAIL_REQUEST,
  LEFTOVER_DETAIL_RESPONSE,
  PUBLIC_DETAIL_REQUEST,
  PUBLIC_DETAIL_RESPONSE,
} from "./model";
import { rest } from "./rest";

export const getAptSalesInfoDetail = async (
  params: APT_DETAIL_REQUEST
): Promise<APT_DETAIL_RESPONSE[]> => {
  const response = await API.get(`${rest.get.aptSalesInfoDetail}`, {
    params: params,
  });

  return response.data.data;
};

export const getEtcSalesInfoDetail = async (
  params: ETC_DETAIL_REQUEST
): Promise<ETC_DETAIL_RESPONSE[]> => {
  const response = await API.get(`${rest.get.etcSalesInfoDetail}`, {
    params: params,
  });

  return response.data.data;
};

export const getLeftoverSalesInfoDetail = async (
  params: LEFTOVER_DETAIL_REQUEST
): Promise<LEFTOVER_DETAIL_RESPONSE[]> => {
  const response = await API.get(`${rest.get.leftoverSalesInfoDetail}`, {
    params: params,
  });

  return response.data.data;
};

export const getPublicSalesInfoDetail = async (
  params: PUBLIC_DETAIL_REQUEST
): Promise<PUBLIC_DETAIL_RESPONSE[]> => {
  const response = await API.get(`${rest.get.publicSalesInfoDetail}`, {
    params: params,
  });

  return response.data.data;
};

export const getAptCompetitionInfo = async (
  params: APT_COMPETITION_REQUEST
): Promise<APT_COMPETITION_RESPONSE[]> => {
  const response = await API.get(`${rest.get.aptCompetitionInfo}`, {
    params: params,
  });

  return response.data.data;
};
