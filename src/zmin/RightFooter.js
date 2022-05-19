import styled from "styled-components";

const FooterBox = styled.div`
  font-size: 13px;
  color: rgb(83, 100, 113);
  padding-left: 16px;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  
  color: rgb(83, 100, 113);
  padding-right: 13px;
  line-height: 20px;
  height: 20px;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const RightFooter = () => {
  return (
    <FooterBox>
      <Item>이용약관</Item>
      <Item>개인정보 처리방침</Item>
      <Item>쿠키 정책</Item>
      <Item>접근성</Item>
      <Item>광고 정보</Item>
      <Item>더보기</Item>
      <div>© 2022 Twitter, Inc.</div>
    </FooterBox>
  );
};

export default RightFooter;