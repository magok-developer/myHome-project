/**
 * [지역 코드]
 * 서울 100
 * 강원 200
 * 대전 300
 * 충남 312
 * 세종 338
 * 충북 360
 * 인천 400
 * 경기 410
 * 광주 500
 * 전남 513
 * 전북 560
 * 부산 600
 * 경남 621
 * 울산 680
 * 제주 690
 * 대구 700
 * 경북 712
 */

export enum AREA_CODE {
  SEOUL = "서울",
  GANGWON = "강원",
  DAEJEON = "대전",
  CHUNGNAM = "충남",
  SEJONG = "세종",
  CHUNGBUK = "충북",
  INCHEON = "인천",
  GYEONGGI = "경기",
  GWANGJU = "광주",
  JEONNAM = "전남",
  JEONBUK = "전북",
  BUSAN = "부산",
  GYEONGNAM = "경남",
  ULSAN = "울산",
  JEJU = "제주",
  DEAGU = "대구",
  GYEONGBUK = "경북",
}

/**
 * 도시형생활주택 0201
 * 오피스텔 0202
 * 민간임대 0203
 * 공공지원민간임대 0303
 */

export enum HOUSE_CODE {
  HOUSE = "0201",
  OFFICETEL = "0202",
  PRIVATE_RENTAL = "0203",
  PUBLIC_RENTAL = "0303",
}

export enum APPLICATION_STATUS {
  UPCOMING = "청약 접수 예정",
  OPEN = "청약 접수 중",
  CLOSED = "청약 접수 마감",
}

export enum LEFTOVER_HOUSE_CODE {
  LEFTOVER = "04",
  CANCEL = "06",
}
