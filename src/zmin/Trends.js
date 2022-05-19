import TrendItem from "./TrendItem";
import GrayBox from "./GrayBox";

const Trends = () => {
  const trendKeywords = ['피자','김밥','치킨','팝콘','제로콜라','미역국','커피','즉석우동'];

  return (
    <GrayBox title='트렌드'>
      {trendKeywords.map((keyword, idx) =>
        <TrendItem rank={idx+1} keyword={keyword} tweetAmount='1,886' field='음식'/>
      )}
      <TrendItem rank='9' keyword='맛있겠다' tweetAmount='52'/>
    </GrayBox>
  );
};

export default Trends;