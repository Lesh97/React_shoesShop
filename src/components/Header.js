import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useTransition, useDeferredValue } from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

function Header() {
  let navigate = useNavigate();

  let result = useQuery(["user"], async () => {
    const response = await axios.get(
      "https://codingapple1.github.io/userdata.json"
    );
    return response.data;
  });
  let [prodName, setProdName] = useState("");
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(prodName);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              회원가입
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              로그인
            </Nav.Link>
          </Nav>
          <div>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              신상품
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              남성
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              여성
            </Nav.Link>
            |
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              키즈
            </Nav.Link>
          </div>
          <input
            onChange={(e) => {
              startTransition(() => {
                setProdName(e.target.value);
              });
            }}
          ></input>
          {isPending ? "로딩중입니다..." : <div>{state}</div>}
          <Nav className="ms-auto">
            {result.isLoading && "로딩중"}
            {result.error && "에러발생"}
            {result.data && result.data.name} 님
          </Nav>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            찜하기 아이콘
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            장바구나 아이콘콘
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
