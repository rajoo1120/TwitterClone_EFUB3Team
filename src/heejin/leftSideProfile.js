import React from "react";
import "./leftSideProfile.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function leftSideProfile() {
  return (
    <div className="leftSideBar_profile">
      <div className="leftSideBar_pro_wrap">
        <div className="leftSideBar_pro_left">
          <div className="leftSideBar_pro_img">
            <img
              className="img"
              src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1519730490919747584%2FaBNirN8-_400x400.jpg"
              alt="profile"
            />
          </div>
          <div className="leftSideBar_pro_text">
            <div className="name">퍼비</div>
            <div className="id">@efuby</div>
          </div>
        </div>
        <div className="leftSideBar_pro_right">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default leftSideProfile;
