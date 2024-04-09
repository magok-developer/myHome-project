import { AREA_CODE, HOUSE_CODE } from "./enum";

export const formatForAreaCode = (status: AREA_CODE): string => {
  const returnStatus = new Map([
    [AREA_CODE.SEOUL, "서울"],
    [AREA_CODE.GANGWON, "강원"],
    [AREA_CODE.DAEJEON, "대전"],
    [AREA_CODE.CHUNGNAM, "충남"],
    [AREA_CODE.SEJONG, "세종"],
    [AREA_CODE.CHUNGBUK, "충북"],
    [AREA_CODE.INCHEON, "인천"],
    [AREA_CODE.GYEONGGI, "경기"],
    [AREA_CODE.GWANGJU, "광주"],
    [AREA_CODE.JEONNAM, "전남"],
    [AREA_CODE.JEONBUK, "전북"],
    [AREA_CODE.BUSAN, "부산"],
    [AREA_CODE.GYEONGNAM, "경남"],
    [AREA_CODE.ULSAN, "울산"],
    [AREA_CODE.JEJU, "제주"],
    [AREA_CODE.DEAGU, "대구"],
    [AREA_CODE.GYEONGBUK, "경북"],
  ]);

  return returnStatus.get(status) ?? "";
};

export const formatForHouseCode = (status: string): string => {
  const returnStatus = new Map([
    [HOUSE_CODE.HOUSE, "도시형 생활 주택"],
    [HOUSE_CODE.OFFICETEL, "오피스텔"],
    [HOUSE_CODE.PRIVATE_RENTAL, "민간 임대"],
    [HOUSE_CODE.PUBLIC_RENTAL, "공공 지원 민간 임대"],
  ]);

  return returnStatus.get(status as HOUSE_CODE) ?? "";
};
