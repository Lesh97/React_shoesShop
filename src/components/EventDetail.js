import { FirstEventDiv, SecondEventDiv } from "../styled/SellingStyled";
import Coupon1 from "../img/saleCouponten.jpg";
import Coupon2 from "../img/saleCoupontwenty.jpg";
import { useEffect, useState } from "react";

export function FirstEvent() {
  return (
    <>
      <div>
        <FirstEventDiv>
          <h2 style={{ margin: "30px" }}>할인쿠폰 이벤트</h2>
          <div>
            <p>10% 할인 쿠폰</p>
            <img src={Coupon1} alt="coupon1"></img>

            <p>20% 할인 쿠폰</p>
            <img src={Coupon2} alt="coupon2"></img>
          </div>
        </FirstEventDiv>
      </div>
    </>
  );
}

export function SecondEvent(props) {
  const [hours, setHours] = useState(parseInt(props.hh));
  const [minutes, setMinutes] = useState(parseInt(props.mm));
  const [seconds, setSeconds] = useState(parseInt(props.ss));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        setMinutes(parseInt(minutes) - 1);
        setSeconds(59);
      }
      if (parseInt(minutes) < 0) {
        setHours(parseInt(hours) - 1);
        setMinutes(parseInt(59));
      }
      if (parseInt(hours) === 0) {
        setHours(0);
      }

      if (
        parseInt(hours) === 0 &&
        parseInt(minutes) === 0 &&
        parseInt(seconds) === 0
      ) {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [hours, minutes, seconds]);

  return (
    <>
      <div>
        <SecondEventDiv>
          <h2 style={{ margin: "30px" }}>타임행사 이벤트</h2>
          <h4>오늘의 타임행사</h4>
          <h4>
            {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h4>
        </SecondEventDiv>
      </div>
    </>
  );
}
