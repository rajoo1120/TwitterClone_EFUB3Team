import FeedTweet from "./FeedTweet";
import styled from "styled-components";
import {useState} from "react";

const EmptySpace = styled.div`
  height: 5px;
`;

const FeedTweetList = () => {
  //const tweetData = ['삼겹살 맛있겠다','포케도 맛있겠다','냥냥','안\n녕\n하\n세\n요', '그러나 시간이 지나도 아물지 않는 일들이 있지 내가 날 온전히 사랑하지 못해서 맘이 가난한 밤이야 거울 속에 마주친 얼굴이 어색해서 습관처럼 조용히 눈을 감아 밤이 되면 서둘러 내일로 가고 싶어 수많은 소원 아래 매일 다른 꿈을 꾸던 아이는 그렇게 오랜 시간 겨우 내가 되려고 아팠던 걸까 쌓이는 하루만큼 더 멀어져 우리는 화해할 수 없을 것 같아 나아지지 않을 것 같아'];

  const [tweets, setTweets] = useState([
    '삼겹살 맛있겠다',
    '포케도 맛있겠다',
    '냥냥',
    '안\n녕\n하\n세\n요',
    '그러나 시간이 지나도 아물지 않는 일들이 있지 내가 날 온전히 사랑하지 못해서 맘이 가난한 밤이야 거울 속에 마주친 얼굴이 어색해서 습관처럼 조용히 눈을 감아 밤이 되면 서둘러 내일로 가고 싶어 수많은 소원 아래 매일 다른 꿈을 꾸던 아이는 그렇게 오랜 시간 겨우 내가 되려고 아팠던 걸까 쌓이는 하루만큼 더 멀어져 우리는 화해할 수 없을 것 같아 나아지지 않을 것 같아'
  ]);

  const deleteTweet = (i) => {
    const temp = tweets.filter((_,idx) => idx !== i);
    setTweets(temp);
  };

  return(
    <>
      <EmptySpace/>
      <div style={{"width": "600px"}}>
        {tweets.map((tweet, idx)=>
          <FeedTweet
            key={idx}
            id={idx}
            writerName='퍼비'
            writerId='efuby'
            date='29분'
            tweet={tweet}
            deleteTweet={deleteTweet}
          />
        )}
      </div>
    </>
  );
};

export default FeedTweetList;