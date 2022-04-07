import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/righrbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopImg">
              <img
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : `${PF}person/noCover.jpg`
                }
                alt=""
                className="profileCover"
              />
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : `${PF}person/noAvatar.png`
                }
                alt=""
                className="profileImg"
              />
            </div>
            <div className="profileRightInfo">
              <h3 className="profileRightTopUsername">{user.username}</h3>
              <span className="profileRightTopDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar username={username} user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
