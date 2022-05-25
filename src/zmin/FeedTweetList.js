import FeedTweet from "./FeedTweet";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Loading from "./Loading";
import axios from "axios";

const EmptySpace = styled.div`
  height: 5px;
`;

const FeedTweetList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState([]);

  // 첫 렌더링(마운트)시 백엔드에 있는 값 불러오기
  const loadTweet = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get('/tweets');

      setTweets(res.data);

    } catch(e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  useEffect(()=>{
   loadTweet();
  },[]);


  // 트윗 삭제
  const deleteTweet = async (deleteTweetId) => {
    try{
      const temp = tweets.filter((twtOgj) => twtOgj.tweetId !== deleteTweetId);
      const res = await axios.delete('/tweets/'+deleteTweetId);
      setTweets(temp);
    } catch (e) {
      console.error(e.data.message);
    }
  };

  // 날짜 표시 형식 변경 함수
  const tweetedTime = (time) => {
    const currentTime = new Date().getTime();
    const twtTime = new Date(time);
    const btwTime = currentTime - twtTime.getTime(); // ms , 1000ms = 1s
    if(btwTime < 60000) return Math.floor(btwTime/1000)+'초'; // 0초~59초
    else if(btwTime < 3600000) return Math.floor(btwTime/60000)+'분'; // 1분~59분
    else if(btwTime < 24 * 3600000) return Math.floor(btwTime/3600000)+'시간';  // 1시간~23시간
    else //btwTime >= 24 * 3600000, 하루 이상 차이
      return (twtTime.getMonth()+1) + '월 '+ (twtTime.getDate()) + '일';  // 0월 00일
  };

  return(
    ( isLoading ? <Loading/> :
      <>
        <EmptySpace/>
        <div style={{"width": "600px"}}>
          {tweets.slice(0).reverse().map((tweet, idx)=>
            // 최신 트윗일수록 배열의 뒤쪽에 있지만 화면에는 상단에 위치해야함
            <FeedTweet
            key={idx}
            tweetId={tweet.tweetId}
            writerName={tweet.user.nickname}
            writerId={tweet.user.twitterId}
            date={tweetedTime(tweet.date)}
            tweet={tweet.contents}
            deleteTweet={deleteTweet}
            />
          )}
        </div>
      </>
    )
  );
};

export default FeedTweetList;