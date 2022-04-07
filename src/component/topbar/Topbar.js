import React, { useContext } from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="link">
          <span className="logo">SanjivSocial</span>
        </Link>
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
        <span className="rightbarLogout" onClick={handleLogout}>
          Logout
        </span>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
