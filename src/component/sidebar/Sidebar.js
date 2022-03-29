import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrap">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarListIcon" />
            <span className="sidebarListText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarListIcon" />
            <span className="sidebarListText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <VideocamIcon className="sidebarListIcon" />
            <span className="sidebarListText">Video</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarListIcon" />
            <span className="sidebarListText">Group</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarListIcon" />
            <span className="sidebarListText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarListIcon" />
            <span className="sidebarListText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className="sidebarListIcon" />
            <span className="sidebarListText">Job</span>
          </li>
          <li className="sidebarListItem">
            <CalendarTodayIcon className="sidebarListIcon" />
            <span className="sidebarListText">Event</span>
          </li>
          <li className="sidebarListItem">
            <AutoStoriesIcon className="sidebarListIcon" />
            <span className="sidebarListText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendText">Sanjiv Kumar</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
