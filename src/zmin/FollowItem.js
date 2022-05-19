import styled from "styled-components";
import React from 'react';

const ItemBox = styled.div`
  cursor: pointer;
  padding: 12px 16px;

  display: flex;
  flex-direction: row;
  
  transition-property: background-color;
  transition-duration: 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const HorizonBox = styled.div`
  width: calc(100% - 48px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImg = styled.div`
  position: relative;
  border-radius: 9999px;
  overflow: hidden;
  
  width: 48px;
  height: 48px;
  
  margin-right: 10px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
  }
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
`;

const ProfileId = styled.div`
  color: rgb(83, 100, 113);
  font-size: 15px;
  line-height: 20px;
`;

const FollowButton = styled.div`
  width: 75px;
  height: 30px;
  border-radius: 9999px;
  background-color: rgb(0,0,0);
  
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  color:rgb(255, 255, 255);

  transition-property: background-color;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(39, 44, 48);
  }
`;

const FollowItem = ({name, id, imgSrc = null}) => {
  if(!imgSrc) imgSrc = 'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png';

  return (
    <ItemBox>
      <ProfileImg>
        <img src={imgSrc}/>
      </ProfileImg>
      <HorizonBox>
        <ProfileInfo>
          <ProfileName>{name}</ProfileName>
          <ProfileId>@{id}</ProfileId>
        </ProfileInfo>
        <FollowButton>팔로우</FollowButton>
      </HorizonBox>
    </ItemBox>
  );
};

export default FollowItem;