import { AREA_CODE, HOUSE_CODE, LEFTOVER_HOUSE_CODE } from "../lib/enum";

export const AREA_CODE_OPTIONS = [
  {
    value: null,
    label: "전체",
  },
  {
    value: AREA_CODE.SEOUL,
    label: "서울",
  },
  {
    value: AREA_CODE.GANGWON,
    label: "강원",
  },
  {
    value: AREA_CODE.DAEJEON,
    label: "대전",
  },
  {
    value: AREA_CODE.CHUNGNAM,
    label: "충남",
  },
  {
    value: AREA_CODE.SEJONG,
    label: "세종",
  },
  {
    value: AREA_CODE.CHUNGBUK,
    label: "충북",
  },
  {
    value: AREA_CODE.INCHEON,
    label: "인천",
  },
  {
    value: AREA_CODE.GYEONGGI,
    label: "경기",
  },
  {
    value: AREA_CODE.GWANGJU,
    label: "광주",
  },
  {
    value: AREA_CODE.JEONNAM,
    label: "전남",
  },
  {
    value: AREA_CODE.JEONBUK,
    label: "전북",
  },
  {
    value: AREA_CODE.BUSAN,
    label: "부산",
  },
  {
    value: AREA_CODE.GYEONGNAM,
    label: "경남",
  },
  {
    value: AREA_CODE.ULSAN,
    label: "울산",
  },
  {
    value: AREA_CODE.JEJU,
    label: "제주",
  },
  {
    value: AREA_CODE.DEAGU,
    label: "대구",
  },
  {
    value: AREA_CODE.GYEONGBUK,
    label: "경북",
  },
];

export const HOUSE_CODE_OPTIONS = [
  {
    value: null,
    label: "전체",
  },
  {
    value: HOUSE_CODE.HOUSE,
    label: "도시형생활주택",
  },
  {
    value: HOUSE_CODE.OFFICETEL,
    label: "오피스텔",
  },
  {
    value: HOUSE_CODE.PRIVATE_RENTAL,
    label: "민간임대",
  },
  {
    value: HOUSE_CODE.PUBLIC_RENTAL,
    label: "공공지원민간임대",
  },
];

export const LEFTOVER_HOUSE_CODE_OPTIONS = [
  {
    value: null,
    label: "전체",
  },
  {
    value: LEFTOVER_HOUSE_CODE.LEFTOVER,
    label: "무순위/잔여세대",
  },
  {
    value: LEFTOVER_HOUSE_CODE.CANCEL,
    label: "계약취소주택",
  },
];
