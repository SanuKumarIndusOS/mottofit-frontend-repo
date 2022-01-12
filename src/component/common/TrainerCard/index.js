import React from "react";
import "./styles.scss";

import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import useNameEncoder from "../Hooks/useNameEncoder";
import { Link } from "react-router-dom";

import { history } from "helpers";
import useCalcCardPrice from "../Hooks/useCalcCardPrice";

function TrainerCard({ data }) {
  const encodedName = useNameEncoder(data?.firstName, data?.lastName);

  const cardPrice = useCalcCardPrice(
    data?.oneOnOnePricing,
    data?.socialSessionPricing,
    data?.classSessionPricing
  );

  const loadTrainer = () => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("paymentred", `/trainer/profile/${data?.id}/${encodedName}` )
      history.push({
        pathname: "/mobile/login",
        // search: `?nextpath=/trainer/profile/${data?.id}/${encodedName}`,
      });
    } else {
      history.push(`/trainer/profile/${data?.id}/${encodedName}`);
    }
  };

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={
        !localStorage.getItem("token")
          ? null
          : `/trainer/profile/${data?.id}/${encodedName}`
      }
    >
      <div className="trainer-card-container" onClick={loadTrainer}>
        <div className="trainer-card--profile-picture">
          <div className="check-me-out">
            <p>
              {" "}
              Check <br /> Me Out <br /> <span>&#10094; </span>{" "}
            </p>
          </div>
          <img src={data?.profilePicture}></img>
        </div>

        <div className="trainer-card--profile-brief">
          <div className="trainer-card__name">
            {data?.firstName + " " + data?.lastName[0]} .
          </div>
          <div className="trainer-card__activity">
            {String(data?.areaOfExpertise).replace(/,/g, ", ")}
          </div>
          <div className="trainer-card__desc">
            {data?.description?.substring(0, 100)}
          </div>
        </div>

        <div className="trainer-card--cta">
          <div className="trainer-card--cta-action">
            BOOK A SESSION <BlackCircleButton />
          </div>
          <div className="trainer-card--cta-price">
            <span>from </span>${cardPrice}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrainerCard;
