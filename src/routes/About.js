import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Wrapper, AboutTitle, AboutLink } from "../styled/AboutStyled";

export default function About() {
  return (
    <>
      <Wrapper>
        <AboutTitle>회사 정보</AboutTitle>
        <div style={{ margin: "30px" }}>
          자바스크립트 실력 향상 및 리액트 스킬 향상을 위한 신발상점 만들기
          (쇼핑몰사이트)
        </div>
        <AboutLink href="/about/member">멤버</AboutLink>
        <AboutLink href="/about/location">위치</AboutLink>
        <Outlet></Outlet>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
