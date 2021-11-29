import React from "react";
import "./styles.scss";

function index() {
  return (
    <div className="trainer-profile-header-container">
      <div className="profile__black-area">
        <div className="profile-picture"></div>
        <div className="profile-info">
          <div className="trainer-name">Leanna Brittis</div>
          <div className="trainer-expertise">
            PILATES, STRENGTH & HIIT, YOGA, BOXING
          </div>
        </div>
        <div className="back-button">
          <div className="back-button--symbol">&#8249;</div>
          <div className="back-button--txt">Back to Results</div>
        </div>
      </div>
    </div>
  );
}

export default index;
