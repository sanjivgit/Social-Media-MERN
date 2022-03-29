import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SanjivSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for frient, post"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="searchbarLink">
          <span className="searchbarLinkItem">Homepage</span>
          <span className="searchbarLinkItem">Timeline</span>
        </div>
        <div className="topbarNotification">
          <div className="topbarNotificationItem">
            <PersonIcon className="topbarIcon" />
            <span className="topbarCount">1</span>
          </div>
          <div className="topbarNotificationItem">
            <ChatIcon className="topbarIcon" />
            <span className="topbarCount">2</span>
          </div>
          <div className="topbarNotificationItem">
            <NotificationsIcon className="topbarIcon" />
            <span className="topbarCount">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
