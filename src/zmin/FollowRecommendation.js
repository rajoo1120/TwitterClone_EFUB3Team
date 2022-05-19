import GrayBox from "./GrayBox";
import FollowItem from "./FollowItem";

const FollowRecommendation = () => {
  return (
    <GrayBox title='팔로우 추천'>
      <FollowItem name='박퍼비' id='park'/>
      <FollowItem name='최퍼비' id='choi'/>
      <FollowItem name='이퍼비' id='leelee'/>
    </GrayBox>
  );
};

export default FollowRecommendation;