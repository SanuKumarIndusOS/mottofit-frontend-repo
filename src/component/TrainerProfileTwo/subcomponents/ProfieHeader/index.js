import React from "react";
import "./styles.scss";
import { history } from "helpers";

function ProfileHeader({ trainerFirstName, profilePicture, trainerExpertise }) {
  React.useEffect(() => {
    console.log(trainerExpertise);
  }, []);
  return (
    <div className="trainer-profile-header-container">
      <div className="profile__black-area">
        <img className="profile-picture" src={profilePicture}></img>
        <div className="profile-info">
          <div className="trainer-name">{trainerFirstName}</div>
          <div className="trainer-expertise">
            {String(trainerExpertise).replace(/,/g, ", ")}
          </div>
        </div>
        <div className="back-button">
          <div className="back-button--symbol">&#8249;</div>
          <div className="back-button--txt" onClick={()=>{history.push("/trainer/find")}}>Back to Results</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
