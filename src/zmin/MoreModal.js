import styled from "styled-components";
import {ReplyIcon, TrashIcon} from "./Icon";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  z-index: 101;
`;

const WhiteBox = styled.div`
  position: absolute;
  right: 12px;
  width: fit-content ;
  
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  border-radius: 4px;
  overflow: hidden;

  z-index: 102;
`;

const ModalElement = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  color: rgb(26, 26, 26);
  transition-property: background-color;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const ModalIcon = styled.div`
  width: 1.25rem;
  display:flex;
  justify-content: center;
  align-content: center;
  
  margin-right: 12px;
`;

const ModalText = styled.div`  
  font-size: 15px;
  line-height: 20px;
`;

const MoreModal = ({openModal, deleteTweet ,idx}) => {
  return(
    <>
      <Background onClick={()=>openModal(false)}/>
      <WhiteBox onClick={()=>openModal(false)}>
        <ModalElement onClick={()=>deleteTweet(idx)}>
          <ModalIcon>
            <TrashIcon/>
          </ModalIcon>
          <ModalText style={{'color':'rgb(244, 33, 46)'}}>
            삭제
          </ModalText>
        </ModalElement>
        <ModalElement>
          <ModalIcon>
            <ReplyIcon/>
          </ModalIcon>
          <ModalText>
            답글을 달 수 있는 사람 변경하기
          </ModalText>
        </ModalElement>
      </WhiteBox>
    </>
  );
};

export default MoreModal;