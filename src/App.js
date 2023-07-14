import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data";
import { lazy, Suspense, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Product from "./components/Product";
import axios from "axios";
import Header from "./components/Header";

const Detail = lazy(() => import("./routes/Detail"));
const Cart = lazy(() => import("./routes/Cart"));

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  function countDown() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Header></Header>
      <Suspense fallback={<div>로딩중입니다 ...</div>}>
        <Routes>
          <Route
            path="/React_shoesShop"
            element={
              <>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Product shoes={shoes[i]} i={i} />;
                    })}
                  </div>
                  <button
                    onClick={() => {
                      countDown();
                      console.log(count);
                      count === 0
                        ? axios
                            .get(
                              "https://codingapple1.github.io/shop/data2.json"
                            )
                            .then((newShoes) => {
                              let updateShoes = [...shoes, ...newShoes.data];
                              setShoes(updateShoes);
                            })
                            .catch(() => {
                              console.log("통신실패");
                            })
                        : count === 1
                        ? axios
                            .get(
                              "https://codingapple1.github.io/shop/data3.json"
                            )
                            .then((newShoes) => {
                              let updateShoes = [...shoes, ...newShoes.data];
                              setShoes(updateShoes);
                            })
                            .catch(() => {
                              console.log("통신실패");
                            })
                        : alert("상품정보를 모두 불러왔습니다.");
                    }}
                  >
                    상품 더보기
                  </button>
                </div>
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버</div>} />
            <Route path="location" element={<div>위치정보</div>} />
          </Route>

          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <a href="/about/member">멤버</a>
      <a href="/about/location">위치</a>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <a href="/event/one">첫번째 이벤트</a>
      <a href="/event/two">두번째 이벤트</a>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
