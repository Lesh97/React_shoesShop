import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const SearchInput = styled.div`
  width: 500px;
  margin-left: 50px;
  input {
    border: none;
    border-bottom: solid #000 1px;
    width: 300px;
    margin-left: 10px;
    background-color: #f8f9fa;
  }
`;

export const HeaderCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Slash = styled.div`
  margin: 0px 20px;
`;

export const UserInterface = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 20px;
  div {
    margin-right: 15px;
  }
  a {
    margin-right: 15px;
  }
`;
