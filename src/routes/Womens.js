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
import WomenMainImg from "../img/womenboots.jpg";

export default function Womens() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const clientID = "AUV7CwG2zS8l0H9eAJ_N";
    const clientSecret = "b4QgvJwMmy";

    await axios
      .get(URL, {
        params: { query: "여성신발", display: 20 },
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
            <img src={WomenMainImg} alt="womenMainImg" />
          </MainProdBox>
          <MainTitle>부츠를 꼭 신고 싶은 날, 오늘이 바로 그런 날.</MainTitle>
          <MainP>이번 시즌에 새롭게 부츠가 추가되었습니다.</MainP>
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
