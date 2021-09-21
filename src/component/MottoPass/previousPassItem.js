import React from "react";
import { UserAvatar } from "component/common/UserAvatar";

//styles
import "./previousPassItem.scss";

//icons

import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";
import DollarIcon from "assets/files/SVG/dollar Icon.svg";
import ArrowNext from "assets/files/SVG/Arrow Next.svg";
import { Link } from "react-router-dom";

export const PreviousPassItem = () => {
  return (
    <div className="previous-pass-item w-100 ">
      <div className="w-100 d-flex align-items-center previous-pass-block ">
        <UserAvatar className="img-md user-pic" />
        <div className="w-100 d-flex align-items-center flex-wrap mt-3 mt-lg-0">
          <div className="pass-details-section  d-flex align-items-center flex-wrap">
            <div className="pass-details">
              <p className="pass-description fs-20 mb-3 mb-lg-1 text-left">
                Your 3 session motto pass with Jane Doe has now expired.
              </p>
              <div className="pass-indetail d-flex align-items-center flex-wrap">
                <div className="mottopass-type-restriction d-flex align-items-center">
                  <img src={LocationIcon} alt="location icon" />
                  <p className="fs-15 mb-0">Virtual</p>
                </div>
                <div className="mottopass-expiration d-flex align-items-center">
                  <img src={AvailabilityIcon} alt="time icon" />
                  <p className="fs-15 mb-0">Bought on March 12th, 2021</p>
                </div>
                <div className="mottopass-discount-rate d-flex align-items-center">
                  <img src={DollarIcon} alt="dollar icon" />
                  <p className="fs-15 mb-0">Priced at $90/Session</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pass-action-btn ml-auto">
            <div className="profile_aside_link ml-auto">
              <button className="btn btn-transparent">
                <Link>Buy it Again</Link>
                <img src={ArrowNext} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};
