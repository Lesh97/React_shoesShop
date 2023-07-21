import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  Wrapper,
  MainProd,
  MainProdBox,
  ProdGrid,
  MainTitle,
  MainP,
} from "../styled/SellingStyled";
import SellingProd from "../components/SellingProd";
import MenMainImg from "../img/menrofferfix.jpg";

export default function Mens() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const clientID = process.env.REACT_APP_CLIENTID;
    const clientSecret = process.env.REACT_APP_CLIENTSECRET;

    await axios
      .get(URL, {
        params: { query: "남성신발", exclude: "female", display: 20 },
        headers: {
          "X-Naver-Client-Id": clientID,
          "X-Naver-Client-Secret": clientSecret,
        },
      })
      .then((res) => setData(res.data.items))
      .catch((e) => {});
  };
  useEffect(() => {
    shoppingData();
  }, []);

  return (
    <>
      <Wrapper>
        <MainProd>
          <MainProdBox>
            <img src={MenMainImg} alt="menMainImg" />
          </MainProdBox>
          <MainTitle>남자의 완성은 구두로 마무리한다</MainTitle>
          <MainP>이번 시즌에 남성 구두가 새롭게 추가되었습니다.</MainP>
        </MainProd>

        <ProdGrid>
          {data.map((a, i) => {
            return <SellingProd data={data[i]} i={i} />;
          })}
        </ProdGrid>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
