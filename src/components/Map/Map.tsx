import { color } from "@/styles/color";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

type Props = {
  address: string;
  index: string;
};

function MapComponent({ address, index }: Props) {
  const mapScript = document.createElement("script");
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false&libraries=services`;
  document.head.appendChild(mapScript);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        // 지도 생성
        const mapContainer = document.getElementById(`${address}` + index), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        if (index === "modal") {
          map.relayout();
          map.setCenter(new window.kakao.maps.LatLng(33.450701, 126.570667));
        }

        // 주소-좌표 변환 객체를 생성합니다
        let geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            let marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
            setVisible(false);
          }
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
      {visible ? (
        <div
          style={{ width: "100%", height: "100%" }}
          id={`${address}` + index}
        />
      ) : (
        <div
          id='load'
          style={{
            width: "100%",
            height: "100%",
            background: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 16,
            fontWeight: "bold",
            color: color.main.green,
          }}
        >
          지도 준비중
        </div>
      )}
    </>
  );
}

export default MapComponent;
