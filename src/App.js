import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import Product from "./components/Product";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  function countDown() {
    setCount(count + 1);
  }

  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to={"/"}>Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Product shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

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

      <button
        onClick={() => {
          countDown();
          console.log(count);
          count === 0
            ? axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((newShoes) => {
                  let updateShoes = [...shoes, ...newShoes.data];
                  setShoes(updateShoes);
                })
                .catch(() => {
                  console.log("통신실패");
                })
            : count === 1
            ? axios
                .get("https://codingapple1.github.io/shop/data3.json")
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
