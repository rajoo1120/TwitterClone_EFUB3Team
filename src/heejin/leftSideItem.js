import React from "react";
import "./leftSideItem.css";

function LeftSideItem({ Icon, text }) {
  return (
    <div className="leftSideBar_item">
      <Icon className="leftSideBar_icon" />
      <h2 className="leftSideBar_text">{text}</h2>
    </div>
  );
}

export default LeftSideItem;
