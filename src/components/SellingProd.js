import {
  ProdWrapper,
  ProdTitle,
  ProdBrand,
  ProdPrice,
} from "../styled/SellingStyled";

function SellingProd(props) {
  return (
    <div className="col-md-4">
      <ProdWrapper>
        <img src={`${props.data.image}`} width="80%" alt="" />
        <ProdTitle>{props.data.title}</ProdTitle>
        <ProdBrand>
          {props.data.brand === "" ? "브랜드 X" : props.data.brand}{" "}
        </ProdBrand>
        <ProdPrice>{props.data.lprice} 원</ProdPrice>
      </ProdWrapper>
    </div>
  );
}

export default SellingProd;
