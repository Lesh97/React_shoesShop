import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  Wrapper,
  MainProd,
  MainProdBox,
  ProdGrid,
} from "../styled/SellingStyled";
import SellingProd from "../components/SellingProd";

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

  console.log(data);
  return (
    <>
      <Wrapper>
        <MainProd>
          <MainProdBox>크게 한개의 상품</MainProdBox>
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
