import React from "react";
import "./onlineFriend.css";

function OnlineFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const PF = "http://localhost:8800/images/";
  return (
    <div>
      <li className="rightbarFriends">
        <div className="rightbarFriendsStatus">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="rightbarFriendsImg"
          />
          <span className="rightbarStatus"></span>
        </div>
        <span className="rightbarFriendsName">{user.username}</span>
      </li>
    </div>
  );
}

export default OnlineFriend;
