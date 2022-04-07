import React from "react";
import "./closeFriend.css";

function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const PF = "http://localhost:8800/images/";
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendText">{user.username}</span>
      </li>
    </div>
  );
}

export default CloseFriend;
