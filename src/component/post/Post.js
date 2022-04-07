import React, { useEffect, useState, useContext } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "../../axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

function Post({ post }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  // Here currentUser is neack name of user because *user* variable is already userd
  const [postChanges, setPostChanges] = useState(false);
  const [postUpdate, setPostUpdate] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  const handleLike = async () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    try {
      await axios.put("/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + post._id, {
        data: { userId: currentUser._id },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }

    setPostChanges(false);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopContainer">
            <div className="postTopDetails">
              <Link to={`/profile/${user.username}`}>
                <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="postTopImg"
                />
              </Link>
              <span className="postTopUsername">{user.username}</span>
              <span className="postTopTime">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
            <MoreVertIcon
              className="postTopIcon"
              onClick={() => setPostChanges(!postChanges)}
            />
            {currentUser._id === post.userId && (
              <>
                {postChanges && (
                  <div className="postEditing">
                    <span className="postDeletion" onClick={handleDelete}>
                      Delete
                    </span>
                    <hr className="postEditingLine" />
                    <span
                      className="postUpdation"
                      onClick={() => setPostUpdate(true)}
                    >
                      Update
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
          <span className="postTopMessage">{post.desc}</span>
        </div>
        <div className="postCenter">
          <img
            src={post.img ? post.img : PF + "person/noCover.jpg"}
            alt=""
            className="postCenterImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}heart.png`}
              alt=""
              className="postBottomLike"
              onClick={handleLike}
            />
            <img
              src={`${PF}like.png`}
              alt=""
              className="postBottomLike"
              onClick={handleLike}
            />
            <span className="postBottomText">{like} people liked it</span>
          </div>
          <span className="postBottomRight">{post.comment || 0} comments</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
