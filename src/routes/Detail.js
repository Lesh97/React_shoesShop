import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../App.css";

function Detail(props) {
  let { id } = useParams();
  let findProd = props.shoes.find(function (f) {
    return f.id == id;
  });

  let [countdown, setCountdown] = useState(true);
  //useEffect : 업데이트, 마운트시 작동
  useEffect(() => {
    //html이 랜더링되고 나서 실행됨. 복잡한 연산을 뒤로 미뤄 효율성 증가
    let timeSale = setTimeout(() => {
      setCountdown(false);
    }, 10000);
    return () => {
      clearTimeout(timeSale);
    };
  }, []);

  let [warning, setWarning] = useState("");
  useEffect(() => {
    if (isNaN(warning) == true) {
      alert("숫자만 입력하세요");
    }
  }, [warning]);

  let [tab, setTab] = useState(0);
  let [detailFade, setDetailFade] = useState("");
  useEffect(() => {
    setDetailFade("end");
    return () => {
      setDetailFade("");
    };
  }, []);

  return (
    <div className={"container start " + detailFade}>
      {countdown === true ? (
        <div className="alert alert-warning">10초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (findProd.id + 1) +
              ".jpg"
            }
            width="100%"
            alt=""
            key={props.shoes.i}
          />
        </div>
        <div className="col-md-6 mt-4">
          <input
            onChange={(e) => {
              setWarning(e.target.value);
            }}
          ></input>
          <h4 className="pt-5">{findProd.title}</h4>
          <p>{findProd.content}</p>
          <p>{findProd.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabComponent shoes={props.shoes} tab={tab} />
    </div>
  );
}
function TabComponent({ tab, shoes }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let aniTime = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(aniTime);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
export default Detail;
