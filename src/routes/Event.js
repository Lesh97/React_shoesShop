import { Outlet } from "react-router-dom";

export default function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <a href="/event/one">첫번째 이벤트</a>
      <a href="/event/two">두번째 이벤트</a>
      <Outlet></Outlet>
    </div>
  );
}
