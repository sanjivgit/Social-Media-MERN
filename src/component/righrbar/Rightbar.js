import React, { useContext, useEffect, useState } from "react";
import OnlineFriend from "../online/OnlineFriend";
import "./rightbar.css";
import { Users } from "../../dummyData";
import axios from "../../axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Rightbar({ user, username }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarBirthday">
          <img className="rightbarBirthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="rightbarBirthdayText">
            <b>Sanjiv Kumar</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
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
    const [friends, setFriends] = useState([]);
    const [followed, setFollowed] = useState(false);

    useEffect(() => {
      setFollowed(currentUser.followings.includes(user?._id));
    }, [user?._id]);

    useEffect(() => {
      const getFriends = async () => {
        const res = await axios.get("/users/friends/" + username);
        setFriends(res.data);
      };
      getFriends();
    }, [username]);

    const handleFollow = async () => {
      try {
        if (followed) {
          await axios.put("/users/" + user._id + "/unfollow", {
            userId: currentUser._id,
          });
          dispatch({ type: "UNFOLLOW", payload: user._id });
        } else {
          await axios.put("/users/" + user._id + "/follow", {
            userId: currentUser._id,
          });
          dispatch({ type: "FOLLOW", payload: user._id });
        }
      } catch (err) {
        console.log(err);
      }
      setFollowed(!followed);
    };

    return (
      <>
        {username !== currentUser.username && (
          <button className="rightbarFollow" onClick={handleFollow}>
            {followed ? "unfollow" : "follow"}
            {followed ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <div className="profileRightbarInfoList">
          <h3 className="profileRightbarInfoTitle">User Information</h3>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">Country:</span>
            <span className="profileInfoAnswer">{user.country}</span>
          </div>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">City:</span>
            <span className="profileInfoAnswer">{user.city}</span>
          </div>
          <div className="profileRightbarInfo">
            <span className="profileInfoQuestion">Relationship:</span>
            <span className="profileInfoAnswer">
              {user.relationship === 1
                ? "single"
                : user.relationship === 2
                ? "married"
                : "complicated"}
            </span>
          </div>
          <h3 className="profileRightbarFollowingTitle">User Friends</h3>

          <div className="followingFriendsList">
            {friends.map((friend) => (
              <Link
                to={`/profile/${friend.username}`}
                className="link"
                key={friend._id}
              >
                <div className="followingFriend">
                  <img
                    src={
                      friend.profilePicture
                        ? friend.profilePicture
                        : PF + "/person/noAvatar.png"
                    }
                    alt=""
                    className="followingFriendImg"
                  />
                  <span className="followingFriendName">{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
