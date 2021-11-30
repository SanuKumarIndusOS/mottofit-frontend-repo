import React from "react";
import "./styles.scss";
import { history } from "helpers";

import CircularProgress from "@material-ui/core/CircularProgress";

function ProfileHeader({
  trainerFirstName,
  profilePicture,
  trainerExpertise,
  trainerLastName,
}) {
  const [profilePicLoader, setprofilePicLoader] = React.useState(true);
  const imageLoader = () => {
    setprofilePicLoader(false);
  };

  return (
    <div className="trainer-profile-header-container">
      <div className="profile__black-area">
        <div
          className="profile-picture"
          style={{ display: !profilePicLoader ? "none" : "flex" }}
        >
          <CircularProgress />
        </div>

        <img
          className="profile-picture"
          style={{ display: profilePicLoader ? "none" : "block" }}
          src={profilePicture}
          onLoad={imageLoader}
        ></img>
        <div className="profile-info">
          <div className="trainer-name">
            {trainerFirstName + " " + trainerLastName}
          </div>
          <div className="trainer-expertise">
            {String(trainerExpertise).replace(/,/g, ", ")}
          </div>
        </div>
        <div className="back-button">
          <div className="back-button--symbol">&#8249;</div>
          <div
            className="back-button--txt"
            onClick={() => {
              history.push("/trainer/find");
            }}
          >
            Back to Results
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
