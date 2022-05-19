import Trends from "./Trends";
import styled from "styled-components";
import FollowRecommendation from "./FollowRecommendation";
import RightFooter from "./RightFooter";
import Search from "./Search";

const EmptySpace = styled.div`
  height: 70px;
`;

const RightContent = styled.div`
  width: 350px;
  padding-left: 30px; 
`;

const RightSideBar = () => {
  return (
    <RightContent>
      <Search/>
      <EmptySpace/>
      <Trends/>
      <FollowRecommendation/>
      <RightFooter/>
      <EmptySpace/>
    </RightContent>
  );
};

export default RightSideBar;