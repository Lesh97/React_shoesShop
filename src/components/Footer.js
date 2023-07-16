import { styled } from "styled-components";

export const FooterDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
  margin-top: 50px;
`;

function Footer() {
  return (
    <FooterDiv>
      <div>신발 상점</div>
      <div>Copyright &copy; 저작권은 없습니다.</div>
    </FooterDiv>
  );
}

export default Footer;
