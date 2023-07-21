import { useState } from "react";
import {
  Wrapper,
  SignUpBox,
  SignUpTitle,
  SignUpInputBox,
  SignUpP,
  SignUpId,
  SignUpPw,
  SignUpPwConfirm,
  SignUpBtn,
  SignUpName,
  SignUpCP,
  SignUpEmail,
  ValidDiv,
} from "../styled/LoginSignUpStyled";

export default function SignUp() {
  const [form, setForm] = useState({
    password: "",
    passwordConfirm: "",
  });

  return (
    <>
      <Wrapper>
        <SignUpBox>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpInputBox>
            <SignUpP>아이디</SignUpP>
            <SignUpId placeholder="아이디를 입력하세요" type="email"></SignUpId>
            <SignUpP>패스워드</SignUpP>
            <SignUpPw
              placeholder="비밀번호를 입력하세요"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            ></SignUpPw>
            <ValidDiv></ValidDiv>
            <SignUpP>패스워드 확인</SignUpP>
            <SignUpPwConfirm
              placeholder="비밀번호를 한번 더 입력하세요"
              type="password"
              value={form.passwordConfirm}
              onChange={(e) =>
                setForm({ ...form, passwordConfirm: e.target.value })
              }
            ></SignUpPwConfirm>
            <ValidDiv></ValidDiv>
            <SignUpP>이름</SignUpP>
            <SignUpName placeholder="이름을 입력하세요"></SignUpName>
            <SignUpP>전화번호</SignUpP>
            <SignUpCP placeholder="전화번호를 입력하세요"></SignUpCP>
            <SignUpP>이메일</SignUpP>
            <SignUpEmail placeholder="이메일을 입력하세요"></SignUpEmail>
          </SignUpInputBox>
          <SignUpBtn>회원가입</SignUpBtn>
        </SignUpBox>
      </Wrapper>
    </>
  );
}
