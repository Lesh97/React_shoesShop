import Footer from "../components/Footer";
import {
  Wrapper,
  MainProd,
  MenMainProd,
  ProdGrid,
  GridBox,
} from "../styled/SellingStyled";
export default function Womens(props) {
  return (
    <>
      <Wrapper>
        <MainProd>
          <MenMainProd>여성 신발 크게 한개의 상품</MenMainProd>
        </MainProd>

        <ProdGrid>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
          <GridBox>상품 그리드</GridBox>
        </ProdGrid>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
