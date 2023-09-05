import { keyframes, styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainProd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const move = keyframes`
0%{
top: 150px;
opacity: 0;
}
100%{
  top: 500px;
  opacity: 1;
}
`;

//메인 상품
export const MainProdBox = styled.div`
  height: 800px;
  margin-bottom: 40px;
  img {
    width: 1000px;
    height: 800px;
    animation: ${move} 2s linear;
  }
`;
//메인 상품 타이틀
export const MainTitle = styled.h2`
  font-weight: 800;
`;
//메인 상품 설명
export const MainP = styled.p`
  font-size: 20px;
`;

//판매 페이지 통합 그리드
export const ProdGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-template-rows: repeat(4, minmax(auto, 1fr));
  margin-top: 50px;
  grid-gap: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProdWrapper = styled.div`
  img {
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
  }
`;

export const ProdTitle = styled.h3`
  width: 300px;
  font-weight: 800;
  text-overflow: clip;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
`;

export const ProdBrand = styled.p`
  width: 300px;
  text-align: center;
  font-size: 20px;
`;

export const ProdPrice = styled.p`
  width: 300px;
  text-align: center;
  font-size: 28px;
`;

// 이벤트 css

export const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const EventTitle = styled.h2`
  margin: 30px 0px;
  font-weight: 800;
  font-size: 40px;
`;

export const EventLink = styled.a`
  margin: 0px 30px;
`;

// 첫번째 이벤트

export const FirstEventDiv = styled.div`
  margin: 30px 0px;
`;

// 두번째 이벤트

export const SecondEventDiv = styled.div`
  margin: 30px 0px;
`;
