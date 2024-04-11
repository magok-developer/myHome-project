export type APT_DETAIL_RESPONSE = {
  BSNS_MBY_NM: string;
  CNSTRCT_ENTRPS_NM: string;
  CNTRCT_CNCLS_BGNDE: string;
  CNTRCT_CNCLS_ENDDE: string;
  GNRL_RNK1_CRSPAREA_ENDDE: string;
  GNRL_RNK1_CRSPAREA_RCPTDE: string;
  GNRL_RNK1_ETC_AREA_ENDDE: string;
  GNRL_RNK1_ETC_AREA_RCPTDE: string;
  GNRL_RNK1_ETC_GG_ENDDE: null;
  GNRL_RNK1_ETC_GG_RCPTDE: null;
  GNRL_RNK2_CRSPAREA_ENDDE: string;
  GNRL_RNK2_CRSPAREA_RCPTDE: string;
  GNRL_RNK2_ETC_AREA_ENDDE: string;
  GNRL_RNK2_ETC_AREA_RCPTDE: string;
  GNRL_RNK2_ETC_GG_ENDDE: null;
  GNRL_RNK2_ETC_GG_RCPTDE: null;
  HMPG_ADRES: string;
  HOUSE_DTL_SECD: string;
  HOUSE_DTL_SECD_NM: string;
  HOUSE_MANAGE_NO: string;
  HOUSE_NM: string;
  HOUSE_SECD: string;
  HOUSE_SECD_NM: string;
  HSSPLY_ADRES: string;
  HSSPLY_ZIP: string;
  IMPRMN_BSNS_AT: string;
  LRSCL_BLDLND_AT: string;
  MDAT_TRGET_AREA_SECD: string;
  MDHS_TELNO: string;
  MVN_PREARNGE_YM: string;
  NPLN_PRVOPR_PUBLIC_HOUSE_AT: string;
  PARCPRC_ULS_AT: string;
  PBLANC_NO: string;
  PBLANC_URL: string;
  PRZWNER_PRESNATN_DE: string;
  PUBLIC_HOUSE_EARTH_AT: string;
  RCEPT_BGNDE: string;
  RCEPT_ENDDE: string;
  RCRIT_PBLANC_DE: string;
  RENT_SECD: string;
  RENT_SECD_NM: string;
  SPECLT_RDN_EARTH_AT: string;
  SPSPLY_RCEPT_BGNDE: string;
  SPSPLY_RCEPT_ENDDE: string;
  SUBSCRPT_AREA_CODE: string;
  SUBSCRPT_AREA_CODE_NM: string;
  TOT_SUPLY_HSHLDCO: number;
};

export type APT_DETAIL_REQUEST = {
  page: number;
  perPage: number;
  serviceKey: string;
  cond: {
    "SUBSCRPT_AREA_CODE_NM::EQ": null | string;
  };
};

export type ETC_DETAIL_RESPONSE = {
  HOUSE_MANAGE_NO: string;
  PBLANC_NO: string;
  HOUSE_NM: string;
  HOUSE_SECD: string;
  HOUSE_SECD_NM: string;
  HOUSE_DTL_SECD: string;
  HOUSE_DTL_SECD_NM: string;
  SEARCH_HOUSE_SECD: string;
  HSSPLY_ZIP: string;
  HSSPLY_ADRES: string;
  TOT_SUPLY_HSHLDCO: number;
  RCRIT_PBLANC_DE: string;
  SUBSCRPT_RCEPT_BGNDE: string;
  SUBSCRPT_RCEPT_ENDDE: string;
  PRZWNER_PRESNATN_DE: string;
  CNTRCT_CNCLS_BGNDE: string;
  CNTRCT_CNCLS_ENDDE: string;
  HMPG_ADRES: string;
  BSNS_MBY_NM: string;
  MDHS_TELNO: string;
  MVN_PREARNGE_YM: string;
  PBLANC_URL: string;
};

export type ETC_DETAIL_REQUEST = {
  page: number;
  perPage: number;
};
