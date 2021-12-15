import React from "react";
import "./styles.scss";

import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import useNameEncoder from "../Hooks/useNameEncoder";

import { history } from "helpers";

function TrainerCard({ data }) {
  const encodedName = useNameEncoder(data?.firstName, data?.lastName);
  const handleBooking = () => { history.push(`/trainer/profile/${data?.id}/${encodedName}`)};

  return (
    <div className="trainer-card-container" onClick={handleBooking}>
      <img
        src={data?.profilePicture}
        className="trainer-card--profile-picture"
      ></img>

      <div className="trainer-card--profile-brief">
        <div className="trainer-card__name">
          {data?.firstName + " " + data?.lastName}
        </div>
        <div className="trainer-card__activity">
          {String(data?.areaOfExpertise).replace(/,/g, ", ")}
        </div>
        <div className="trainer-card__desc">{data?.description}</div>
      </div>

      <div className="trainer-card--cta">
        <div className="trainer-card--cta-action">
          BOOK A SESSION <BlackCircleButton />
        </div>
        <div className="trainer-card--cta-price">
          <span>from </span>$125
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
