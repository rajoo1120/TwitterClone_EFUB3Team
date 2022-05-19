import styled from "styled-components";
import {SearchIcon} from "./Icon";

const WhiteBackground = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  
  padding: 0.3rem 0;
  
  width: inherit;
`;

const CustomInput = styled.input`
  width: 100%;
  color: rgb(15, 20, 25);
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  
  font-size: 15px;
  
  margin-bottom: 0.1rem;
  
  &::placeholder{
    color: rgb(83, 100, 113);
  }
`;

const SearchArea = styled.div`
  background-color: rgb(239, 243, 244);
  padding: 10px 20px;
  border-radius: 9999px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid rgb(239, 243, 244);

  &:focus-within {
    background-color: rgba(0, 0, 0, 0);
    border-color:rgb(29, 155, 240);
    svg {
      fill: rgb(29, 155, 240);
    }
  }
`;

const SearchIconBox = styled.div`
  width: 1.4rem;
  margin-top: 2px;
  margin-right: 1rem;
`;

const Search = () => {
  return (
    <WhiteBackground>
      <SearchArea>
        <SearchIconBox>
          <SearchIcon/>
        </SearchIconBox>
        <CustomInput type='text' placeholder='트위터 검색'/>
      </SearchArea>
    </WhiteBackground>    
  );
};

export default Search;