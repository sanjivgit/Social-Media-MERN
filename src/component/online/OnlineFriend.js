import React from "react";
import "./onlineFriend.css";

function OnlineFriend({ user }) {
  return (
    <div>
      <li className="rightbarFriends">
        <div className="rightbarFriendsStatus">
          <img
            src={user.profilePicture}
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
