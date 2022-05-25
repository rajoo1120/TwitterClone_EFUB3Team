import React, { useState } from "react";
import "./TweetBox.css";
import TweetBoxItem from "./TweetBoxItem";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = async () => {
    console.log(tweetMessage);
    const response = await axios
      .post("/tweets", {
        userId: 1,
        contents: tweetMessage,
      })
      .catch((e) => console.log(response));
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <div className="tweetBox_img">
        <img
          className="img"
          alt="profile"
          src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1519730490919747584%2FaBNirN8-_400x400.jpg"
        />
      </div>

      <div className="tweetBox_text">
        <form>
          <div className="tweetBox_input">
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="무슨 일이 일어나고 있나요?"
              type="text"
            />
          </div>

          <div className="tweetBoxOptions_wrap">
            <div className="tweetBoxOptions_left">
              <TweetBoxItem Icon={ImageOutlinedIcon} />
              <TweetBoxItem Icon={GifBoxOutlinedIcon} />
              <TweetBoxItem Icon={BarChartOutlinedIcon} />
              <TweetBoxItem Icon={SentimentSatisfiedOutlinedIcon} />
              <TweetBoxItem Icon={CalendarTodayOutlinedIcon} />
              <TweetBoxItem Icon={LocationOnOutlinedIcon} />
            </div>
            <div className="tweetBoxOptions_right">
              <button
                onClick={sendTweet}
                type="submit"
                className="tweetBox_btn"
              >
                트윗하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
