import React, { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData.js";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopContainer">
            <div className="postTopDetails">
              <img
                src={Users.filter((u) => u.id == post.userId)[0].profilePicture}
                alt=""
                className="postTopImg"
              />
              <span className="postTopUsername">
                {Users.filter((u) => u.id == post.userId)[0].username}
              </span>
              <span className="postTopTime">{post.date}</span>
            </div>
            <MoreVertIcon className="postTopIcon" />
          </div>
          <span className="postTopMessage">{post?.desc}</span>
        </div>
        <div className="postCenter">
          <img src={post.photo} alt="" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              alt=""
              className="postBottomLike"
              onClick={handleLike}
            />
            <img
              src="/assets/like.png"
              alt=""
              className="postBottomLike"
              onClick={handleLike}
            />
            <span className="postBottomText">{like} people liked it</span>
          </div>
          <span className="postBottomRight">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
