import styled from "styled-components";
import React from 'react';
import {MoreIcon} from './Icon';
import IconButton from "./IconButton";

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
        <IconButton float><MoreIcon/></IconButton>
      </div>
    </ItemBox>
  );
};

export default TrendItem;