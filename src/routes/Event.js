import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { EventWrapper, EventTitle, EventLink } from "../styled/SellingStyled";

export default function Event() {
  return (
    <>
      <EventWrapper>
        <EventTitle>오늘의 이벤트</EventTitle>
        <EventLink href="/event/one">할인쿠폰 이벤트</EventLink>
        <EventLink href="/event/two">타임행사 이벤트</EventLink>
        <Outlet></Outlet>
      </EventWrapper>
      <Footer></Footer>
    </>
  );
}
