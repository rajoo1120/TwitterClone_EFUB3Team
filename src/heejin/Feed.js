import React, { useState, useEffect } from "react";
import "./Feed.css";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        <div className="feed_header_left">
          <h2 className="feed_header_font">홈</h2>
        </div>
        <div className="feed_header_right">
          <AutoAwesomeOutlinedIcon />
        </div>
      </div>

      <TweetBox />
    </div>
  );
}

export default Feed;
