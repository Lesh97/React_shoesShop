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
import KidsMainImg from "../img/kidsconverse.jpg";

export default function Kids() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const clientID = "AUV7CwG2zS8l0H9eAJ_N";
    const clientSecret = "b4QgvJwMmy";

    await axios
      .get(URL, {
        params: { query: "키즈신발", display: 20 },
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

  console.log(data);
  return (
    <>
      <Wrapper>
        <MainProd>
          <MainProdBox>
            {" "}
            <img src={KidsMainImg} alt="kidsMainImg" />
          </MainProdBox>
          <MainTitle>
            언제나 어디서나 어울리는 신발, 고민은 그만하고 데일리로 신어보세요
          </MainTitle>
          <MainP>신발에 대한 고민을 지워줄 컨버스 지금 바로 만나보세요</MainP>
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
