import React, { useContext, useRef, useState } from "react";
import "./share.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../axios";
import FileBase64 from "react-file-base64";
import CancelIcon from "@mui/icons-material/Cancel";

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [fileBase, setFileBase] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: fileBase,
    };

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(fileBase);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="shareTopImg"
          />
          <input
            type="text"
            placeholder={"What's in your mind " + user.username + "?"}
            className="shareTopInput"
            ref={desc}
          />
        </div>
        <hr />
        {fileBase && (
          <div className="uploadFileBaseImg">
            <CancelIcon
              className="fileBaseImgCancel"
              onClick={() => setFileBase(null)}
            />
            <img src={fileBase} alt="" className="fileBaseImg" />
          </div>
        )}
        <form onSubmit={handleSubmit} className="shareBottom">
          <div className="shareSocial">
            <PhotoLibraryIcon htmlColor="tomato" className="shareSocialIcon" />
            <div className="fileBaseStyle">
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setFileBase(base64)}
              />
            </div>
          </div>
          <div className="shareSocial">
            <LocalOfferIcon htmlColor="blue" className="shareSocialIcon" />
            <span className="shareSocialText">Tag</span>
          </div>
          <div className="shareSocial">
            <LocationOnIcon htmlColor="green" className="shareSocialIcon" />
            <span className="shareSocialText">Location</span>
          </div>
          <div className="shareSocial">
            <EmojiEmotionsIcon
              htmlColor="goldenrod"
              className="shareSocialIcon"
            />
            <span className="shareSocialText">Feeling</span>
          </div>
          <button type="submit" className="shareSocialButton">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
