import React from "react";
import { useEffect, useRef } from "react";
import {
  MapContainer,
  MapDiv,
  MapP,
  MemberTitle,
  MemberH3,
} from "../styled/AboutStyled";

export function Member() {
  return (
    <>
      <MemberTitle>
        기획
        <MemberH3>기획 : 이수현</MemberH3>
      </MemberTitle>
      <MemberTitle>
        개발
        <MemberH3>개발한 사람 : 이수현</MemberH3>
      </MemberTitle>
      <MemberTitle>
        디자인
        <MemberH3>디자인 : 이수현</MemberH3>
      </MemberTitle>
    </>
  );
}

export function Location() {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(36.071402, 128.391322);

    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 12,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);

    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  return (
    <>
      <MapContainer>
        <MapDiv ref={mapElement} style={{ minHeight: "600px" }}></MapDiv>
      </MapContainer>
      <MapP>회사 위치 : 칠곡군 남율리 어딘가. </MapP>
    </>
  );
}
