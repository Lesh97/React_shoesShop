import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainProd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

//남자 메인 상품
export const MenMainProd = styled.div`
  width: 50%;
  height: 500px;
  background-color: blue;
`;

//판매 페이지 통합 그리드
export const ProdGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-template-rows: repeat(4, minmax(auto, 1fr));
  margin: 50px 120px;
  grid-gap: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

//판매 페이지 상품 낱개
export const GridBox = styled.div`
  height: 300px;
  background-color: red;
`;
