import React from "react";
import "./share.css";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareTopImg" />
          <input
            type="text"
            placeholder="What's in your mind sanjiv?"
            className="shareTopInput"
          />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareSocial">
            <PhotoLibraryIcon htmlColor="tomato" className="shareSocialIcon" />
            <span className="shareSocialText">Photo or Video</span>
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
          <button className="shareSocialButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
