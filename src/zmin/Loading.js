import {LoadingIcon} from "./Icon";
import styled, {keyframes} from "styled-components";

const spinIcon = keyframes`
  0% {
    transform: rotate(-45deg) translateZ(0);
  }
  100% {
    transform: rotate(315deg) translateZ(0);
  }
`;

const LoadingBackground = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  align-content: center;
  
  padding: 40px 0;
`;

const LoadingArea = styled.div`
  width: 30px;
  animation: ${spinIcon} 2s 1s infinite linear;
`;

const Loading = ({isLoading}) => {
  return (
    <LoadingBackground>
      <LoadingArea>
        <LoadingIcon/>
      </LoadingArea>
    </LoadingBackground>
  );
};

export default Loading;