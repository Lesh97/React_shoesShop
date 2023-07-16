import { Outlet } from "react-router-dom";
import { Wrapper, MapDiv } from "../styled/AboutStyled";

export default function About() {
  return (
    <Wrapper>
      <h4>회사정보</h4>
      <a href="/about/member">멤버</a>
      <a href="/about/location">위치</a>
      <Outlet></Outlet>
      <MapDiv>
        <div>hi</div>
      </MapDiv>
    </Wrapper>
  );
}
