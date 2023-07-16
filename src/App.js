import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data";
import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import axios from "axios";
import Header from "./components/Header";
import firstVideoBg from "./videos/firstplayer.mp4";
import secondVideoBg from "./videos/secondplayer.mp4";
import Sandal from "./img/sandal1.jpg";
import Soccer from "./img/soccershoes1.jpg";
import {
  MemberDayDiv,
  MemberDayDetail,
  MemberDaySignUp,
  WorkerHolicDiv,
  WorkerHolicDetail,
  SandalAndSoccer,
  SandalAndSoccerFirst,
  SandalAndSoccerSecond,
  BuyBtn,
  Steady,
  SteadyBtn,
} from "./styled/HomeStyled";
import Footer from "./components/Footer";
import About from "./routes/About";
import Event from "./routes/Event";
import NewProd from "./routes/NewProd";
import Mens from "./routes/Mens";
import Womens from "./routes/Womens";
import Kids from "./routes/Kids";

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
                <div className="firstVideo">
                  <video src={firstVideoBg} autoPlay muted></video>
                  <div>
                    <h4>07.14(금) - 07.20(목)</h4>
                    <h1>Member Days</h1>
                    <p>
                      신발상점이 멤버데이즈에 여러분을 초대합니다. 오직
                      신발상점에서 멤버들을 위한 다양한 제품과 혜택으로 여름
                      스포츠와 함께 일상을 즐겨보세요.
                    </p>
                    <MemberDayDiv>
                      <MemberDayDetail>자세히 보기</MemberDayDetail>
                      <MemberDaySignUp>
                        멤버 가입 & 마케팅 수신동의
                      </MemberDaySignUp>
                    </MemberDayDiv>
                  </div>
                </div>
                <div className="secondVideo">
                  <video src={secondVideoBg} autoPlay muted></video>
                  <div>
                    <h4>09.14(목) - 10.20(수)</h4>
                    <h1>워커 홀릭</h1>
                    <p>
                      신발상점의 워커홀릭. 오직 신발상점에서 워커홀러들을 위한
                      다양한 제품과 혜택으로 가을과 겨울의 패션을 뽐내보세요.
                    </p>
                    <WorkerHolicDiv>
                      <WorkerHolicDetail>자세히 보기</WorkerHolicDetail>
                    </WorkerHolicDiv>
                  </div>
                </div>
                <SandalAndSoccer>
                  <SandalAndSoccerFirst>
                    <img src={Sandal}></img>
                    <BuyBtn>
                      <div>구매하기</div>
                    </BuyBtn>
                  </SandalAndSoccerFirst>
                  <SandalAndSoccerSecond>
                    <img src={Soccer}></img>
                    <BuyBtn>
                      <div>구매하기</div>
                    </BuyBtn>
                  </SandalAndSoccerSecond>
                  <div></div>
                </SandalAndSoccer>
                <div className="container">
                  <Steady>Steady Seller</Steady>
                  <div className="row">
                    {shoes.map((a, i) => {
                      return <Product shoes={shoes[i]} i={i} />;
                    })}
                  </div>
                  <SteadyBtn
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
                  </SteadyBtn>
                </div>
                <Footer></Footer>
              </>
            }
          />
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>이수현</div>} />
            <Route path="location" element={<div>내 컴퓨터</div>} />
          </Route>

          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path="/newprod" element={<NewProd />}></Route>
          <Route path="/mens" element={<Mens />}></Route>
          <Route path="/womens" element={<Womens />}></Route>
          <Route path="/kids" element={<Kids />}></Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
