import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useTransition, useDeferredValue } from "react";
import axios from "axios";
import {
  Wrapper,
  TopHeader,
  HeaderCategory,
  Slash,
  UserInterface,
  SearchInput,
} from "../styled/HeaderStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
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
          <Wrapper>
            <TopHeader>
              <Navbar.Brand href="/React_shoesShop">Shoe Shop</Navbar.Brand>
              <SearchInput>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                  onChange={(e) => {
                    startTransition(() => {
                      setProdName(e.target.value);
                    });
                  }}
                ></input>
              </SearchInput>
              <div>
                <Nav className="me-auto">
                  <Nav.Link
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    About
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    회원가입
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    로그인
                  </Nav.Link>
                </Nav>
              </div>
            </TopHeader>
            <HeaderCategory>
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
              >
                Event
              </Nav.Link>
              <Slash>|</Slash>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                신상품
              </Nav.Link>
              <Slash>|</Slash>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                남성
              </Nav.Link>
              <Slash>|</Slash>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                여성
              </Nav.Link>
              <Slash>|</Slash>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                키즈
              </Nav.Link>
            </HeaderCategory>
            <UserInterface>
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
                <FontAwesomeIcon icon={faHeart} />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
            </UserInterface>
          </Wrapper>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
