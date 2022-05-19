import styled from "styled-components";
import React from 'react';
import {MoreIcon} from './Icon';

const ItemBox = styled.div`
  cursor: pointer;
  padding: 12px 16px;
  
  
  transition-property: background-color;
  transition-duration: 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`
const ItemHeader = styled.div`
  color: rgb(83, 100, 113);
  
  font-size: 13px;
`;

const ItemKeyWord = styled.div`
  font-size:15px;
  font-weight: 700;
  margin-top: 2px;
  line-height: 20px;
`;

const ItemFooter = styled.div`
  color: rgb(83, 100, 113);  
  font-size: 13px;
  
  margin-top: 4px;
`;

const ItemMore = styled.div`
  position: absolute;
  top: 1px;
  right:0px;
  width: 1.25rem;
  display:flex;
  justify-content: center;
  align-content: center;
  
  padding:8px;
  margin:-8px;
  border-radius: 9999px;
  transition-property: background-color;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(29, 155, 240, 0.1);
  }
  
  svg {
    transition-property: fill;
    transition-duration: 0.2s;
  }
  &:hover svg{
    fill: rgb(29, 155, 240);
  }
`;

const TrendItem = ({rank, field=null, keyword, tweetAmount}) => {
  return (
    <ItemBox>
      <div style={{'position': 'relative'}}>
        <ItemHeader>
          { field?
            rank + ' · '+ field +' · 실시간 트렌드'
          :
            rank + ' · 트렌드'
          }
        </ItemHeader>
        <ItemKeyWord>
          { keyword }
        </ItemKeyWord>
        <ItemFooter>
          { tweetAmount } 트윗
        </ItemFooter>
        <ItemMore>
          <MoreIcon/>
        </ItemMore>
      </div>
    </ItemBox>
  );
};

export default TrendItem;