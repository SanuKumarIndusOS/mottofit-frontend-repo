import React, { useState, useEffect } from "react";
import "./trainer.sass";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { connect } from "react-redux";
import { updateUserDetails } from "action/userAct";
import { bindActionCreators } from "redux";
const TrainerCardsFC = (props) => {
  const [bestMatchData, setbestMatchData] = useState([]);

  useEffect(() => {
    setbestMatchData(props.content);
  });
  const [visible, setVisible] = useState(3);
  const showMoreItems = () => {
    setVisible((showCard) => showCard + 3);
  };

  let no_match = <div></div>;
  if (bestMatchData.length === 0) {
    no_match = <h1 className="no_match">No Matches found</h1>;
  }

  const handleClick = (data, isReadMore = false) => {
    let reduxData = {
      selectedTrainerData: {
        trainerId: bestMatchData[data]["id"],
        trainerData: bestMatchData[data],
      },
    };
    props.updateUserDetails(reduxData);

    if (!isReadMore) {
      history.push({
        pathname: "/user/scheduler",
      });
    } else {
      history.push({
        pathname: `/trainer/profile/${bestMatchData[data]["id"]}`,
      });
    }
  };

  return (
    <>
      <div className="container">
        <HeadingTrainer bestMatchRef={props.bestMatchRef} />
        {no_match}
        <div className="row" style={{ alignleft: "auto" }}>
          {Object.keys(bestMatchData).map((data, index) => {
            const areaOfExpertise = bestMatchData[
              data
            ]?.areaOfExpertise?.toString();

            const oneOnOnePricingValues = Object.values(
              bestMatchData[data]?.oneOnOnePricing || {}
            );

            const socialSessionPricingValues = Object.values(
              bestMatchData[data]?.socialSessionPricing || {}
            );
            const classSessionPricingValues = Object.values(
              bestMatchData[data]?.classSessionPricing || {}
            );

            const allSessionPricing = [
              ...oneOnOnePricingValues,
              ...socialSessionPricingValues,
              ...classSessionPricingValues,
            ]
              .map((price) => parseFloat(price))
              .filter((price) => !isNaN(price) && price > 0);

            const sortedPricingList = allSessionPricing.sort((a, b) => a - b);

            return (
              <div
                className="card cursor-pointer"
                key={index}
                onClick={() => handleClick(data, true)}
              >
                <img
                  className="card-img-top"
                  src={
                    bestMatchData[data].profilePicture ||
                    "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"
                  }
                  style={{ objectFit: "cover" }}
                  alt="Profile Picture Not Found "
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                  }}
                />

                <div className="card-body">
                  <h3 style={{ textTransform: "capitalize" }}>
                    {bestMatchData[data]?.firstName}&nbsp;
                    {bestMatchData[data]?.lastName}
                  </h3>
                  <h6>{areaOfExpertise}</h6>
                  <p>
                    {bestMatchData[data]?.description}
                    &nbsp;
                    <button onClick={() => handleClick(data, true)}>
                      Read More
                    </button>
                  </p>
                </div>
                <div className="card-button">
                  <button
                    style={{
                      backgroundColor: "#53BFD2",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleClick(data);
                    }}
                  >
                    book a session
                    <BlackCircleButton />
                    <p>
                      from <span>${sortedPricingList[0] || ""}</span>
                    </p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="showmore">
          <button className="showmore_btn" onClick={showMoreItems}>
            {visible ? "View More Trainers " : null}
            <img src={Arrow} alt="icon" />
          </button>
        </div>
      </div>
    </>
  );
};

const HeadingTrainer = ({ bestMatchRef }) => {
  return (
    <>
      <div className="container">
        <div className="wrapper_heading" ref={bestMatchRef}>
          <h2>Your Motto Matches</h2>
          <p>
            These matches are the perfect fit based on your filters. The prices
            shown are for 1:1 sessions. Click on the trainer profile for group
            rates!
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const TrainerCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerCardsFC);

export default TrainerCards;
