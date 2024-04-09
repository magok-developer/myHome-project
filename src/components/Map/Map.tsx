import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

declare global {
  interface Window {
    kakao: any;
  }
}
type Props = {
  address: string;
};

const MapComponent = ({ address }: Props) => {
  const [centerPosition, setCenterPosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 33.450701, lng: 126.570667 }); // 기본 중앙 좌표

  useEffect(() => {
    if (window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 주소를 좌표로 변환한 결과를 중앙 좌표로 설정
          const lat = result[0].y;
          const lng = result[0].x;
          setCenterPosition({ lat, lng });
        } else {
          console.error("주소를 찾을 수 없습니다.");
        }
      });
    }
  }, [address]);

  return (
    <Map
      center={centerPosition}
      style={{
        width: "100%",
        height: "450px",
      }}
      level={3} // 적절한 레벨 설정
    >
      {centerPosition && <MapMarker position={centerPosition} />}
    </Map>
  );
};

export default MapComponent;
