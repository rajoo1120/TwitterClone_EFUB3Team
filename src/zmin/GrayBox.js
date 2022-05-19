import styled from "styled-components";

const RoundGrayBox = styled.div`
  width: 100%;
  
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 16px;
  background-color: rgb(247, 249, 249);
  overflow: hidden;
  
  color: rgb(15, 20, 25);
`;

const Header = styled.div`
  padding: 12px 16px;
  font-size: 20px;
  line-height: 24px;
  
  font-weight: 700;
`;

const More = styled.div`
  cursor: pointer;
  padding: 16px 16px;
  
  color: rgb(29, 155, 240);
  font-size: 15px;
  line-height: 20px;

  transition-property: background-color;
  transition-duration: 0.2s;
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const GrayBox = ({title, children}) => {
  return (
    <RoundGrayBox>
      <Header>{title}</Header>
      {children}
      <More>더 보기</More>
    </RoundGrayBox>
  );
};

export default GrayBox;