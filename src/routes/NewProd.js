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
import NewMainImg from "../img/roffer.jpg";

export default function NewProd() {
  const [data, setData] = useState([]);
  const shoppingData = async () => {
    const URL = "v1/search/shop.json";
    const clientID = "AUV7CwG2zS8l0H9eAJ_N";
    const clientSecret = "b4QgvJwMmy";

    await axios
      .get(URL, {
        params: { query: "신발", sort: "date", display: 20 },
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
            {" "}
            <img src={NewMainImg} alt="newMainImg" />
          </MainProdBox>
          <MainTitle>로퍼의 세계로</MainTitle>
          <MainP>
            일상을 점령한 다양한 로퍼, 신발상점에 새롭게 추가되었습니다.
          </MainP>
        </MainProd>

        <ProdGrid>
          {data &&
            data.map((a, i) => {
              return <SellingProd data={data[i]} i={i} />;
            })}
        </ProdGrid>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
