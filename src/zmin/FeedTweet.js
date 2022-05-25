import styled from "styled-components";
import {HeartIcon, MoreIcon, ReplyIcon, RetweetIcon, ShareIcon} from "./Icon";
import IconButton from "./IconButton";
import {useState} from "react";
import MoreModal from "./MoreModal";

const TweetBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 12px 16px;

  color: rgb(15, 20, 25);
  border-bottom: 1px solid rgb(239, 243, 244);

  transition-property: background-color;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;


const TweetProfileImg = styled.div`
  position: relative;
  border-radius: 9999px;
  overflow: hidden;
  
  width: 48px;
  height: 48px;
  
  margin-right: 12px;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    max-width: 48px;
    max-height: 48px;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 26, 26, 0);

    transition-property: background-color;
    transition-duration: 0.2s;
  }
  div:hover {
    background-color: rgba(26, 26, 26, 0.15);
  }
`;

const TweetContent = styled.div`
  position: relative;
  width: calc(100% - 60px);
`;

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const TweetWriterName = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  
  margin-right:3px;
`;

const TweetWriterId = styled.div`
  color: rgb(83, 100, 113);
  font-size: 15px;
  line-height: 20px;
`;

const TweetArticle = styled.div`  
  width: 500px;
  overflow: hidden;
  white-space: pre-wrap;
  word-wrap:break-word;
  line-height: 20px;
`;

const TweetMenu = styled.div`
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;



const FeedTweet = ({tweetId, writerName, writerId, date, tweet, deleteTweet}) => {

  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  return(
    <>
      <TweetBox>
        {moreMenuOpen? <MoreModal openModal={setMoreMenuOpen} deleteTweet={deleteTweet} tweetId={tweetId}/> : null}
        <TweetProfileImg>
          <img
            alt='profile'
            src='https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1519730490919747584%2FaBNirN8-_400x400.jpg'
          />
          <div/>
        </TweetProfileImg>
        <TweetContent>
          <TweetInfo>
            <TweetWriterName>
              {writerName}
            </TweetWriterName>
            <TweetWriterId>
              @{writerId} · {date}
            </TweetWriterId>
          </TweetInfo>
          <TweetArticle>
            {tweet}
          </TweetArticle>
          <TweetMenu>
            <IconButton><ReplyIcon/></IconButton>
            <IconButton customColor='green'><RetweetIcon/></IconButton>
            <IconButton customColor='red'><HeartIcon/></IconButton>
            <IconButton><ShareIcon/></IconButton>
          </TweetMenu>
          <IconButton float onClick={()=>setMoreMenuOpen(true)}><MoreIcon/></IconButton>
        </TweetContent>
      </TweetBox>
    </>

  );
};

export default FeedTweet;