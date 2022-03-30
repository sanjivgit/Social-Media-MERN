import React from "react";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/righrbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopImg">
              <img src="/assets/post/3.jpeg" alt="" className="profileCover" />
              <img src="/assets/person/3.jpeg" alt="" className="profileImg" />
            </div>
            <div className="profileRightInfo">
              <h3 className="profileRightTopUsername">Sanjiv Kumar</h3>
              <span className="profileRightTopDesc">Hey this is sanjiv.</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
