import React from "react";
import "./TweetBoxItem.css";

function TweetBoxItem({ Icon }) {
  return (
    <div className="TweetBox_item">
      <Icon className="TweetBox_icon" />
    </div>
  );
}

export default TweetBoxItem;
