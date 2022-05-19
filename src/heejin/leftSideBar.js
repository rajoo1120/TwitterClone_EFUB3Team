import React from "react";
import "./leftSideBar.css";
import LeftSideItem from "./leftSideItem";
import LeftSideProfile from "./leftSideProfile";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <TwitterIcon className="leftSideBar_icon" />
      <LeftSideItem Icon={HomeIcon} text="홈" active={true} />
      <LeftSideItem Icon={SearchIcon} text="탐색하기" />
      <LeftSideItem Icon={NotificationsNoneIcon} text="알림" />
      <LeftSideItem Icon={MailOutlineIcon} text="쪽지" />
      <LeftSideItem Icon={BookmarkBorderIcon} text="북마크" />
      <LeftSideItem Icon={ListAltIcon} text="리스트" />
      <LeftSideItem Icon={PermIdentityIcon} text="프로필" />
      <LeftSideItem Icon={MoreHorizIcon} text="더보기" />

      <button className="leftSidebar_btn">트윗하기</button>
      <div className="leftSidebar_profile">
        <LeftSideProfile />
      </div>
    </div>
  );
}

export default LeftSideBar;
