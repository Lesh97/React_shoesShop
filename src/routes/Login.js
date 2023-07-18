import { NavLink } from "react-router-dom";
import {
  Wrapper,
  LoginTitle,
  LoginBox,
  InputBox,
  LoginId,
  LoginPw,
  LoginP,
  LoginBtn,
} from "../styled/LoginSignUpStyled";

export default function Login() {
  return (
    <>
      <Wrapper>
        <LoginBox>
          <LoginTitle>로그인</LoginTitle>
          <InputBox>
            <LoginP>아이디</LoginP>
            <LoginId></LoginId>
            <LoginP>패스워드</LoginP>
            <LoginPw></LoginPw>
          </InputBox>
          <LoginBtn>로그인</LoginBtn>
          <div>
            회원이 아니신가요 ?{" "}
            <p>
              <NavLink to="/signup">회원가입 하러가기</NavLink>
            </p>
          </div>
        </LoginBox>
      </Wrapper>
    </>
  );
}
