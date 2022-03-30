import React from "react";
import OnlineFriend from "../online/OnlineFriend";
import "./rightbar.css";
import { Users } from "../../dummyData";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarBirthday">
          <img className="rightbarBirthdayImg" src="/assets/gift.png" alt="" />
          <span className="rightbarBirthdayText">
            <b>Sanjiv Kumar</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h3 className="rightbarFriends">Online Friends</h3>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="profileRightbarInfoList">
          <h3 className="profileRightbarInfoTitle">User Information</h3>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">Country:</span>
            <span className="profileInfoAnswer">India</span>
          </div>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">City:</span>
            <span className="profileInfoAnswer">Hazaribagh</span>
          </div>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">Relationship:</span>
            <span className="profileInfoAnswer">Single</span>
          </div>
          <h3 className="profileRightbarFollowingTitle">User Friends</h3>
          <div className="followingFriendsList">
            <div className="followingFriend">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
            <div className="followingFriend">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
            <div className="followingFriend">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
            <div className="followingFriend">
              <img
                src="/assets/person/4.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
            <div className="followingFriend">
              <img
                src="/assets/person/5.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
            <div className="followingFriend">
              <img
                src="/assets/person/6.jpeg"
                alt=""
                className="followingFriendImg"
              />
              <span className="followingFriendName">Sanjiv Kumar</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
