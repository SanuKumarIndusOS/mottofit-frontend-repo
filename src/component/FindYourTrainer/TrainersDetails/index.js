import React, { useState, useEffect } from "react";
import "./trainer.sass";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { COMMON_URL } from "helpers/baseURL";
const TrainerCards = (props) => {
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

  return (
    <>
      <div className="container">
        <HeadingTrainer />
        {no_match}
        <div className="row" style={{ alignleft: "auto" }}>
          {Object.keys(bestMatchData).map((data, index) => {
            let imgdb = `${COMMON_URL}${bestMatchData[data]["profilePicture"]}`;

            return (
              <div className="card" key={index}>
                <img
                  className="card-img-top"
                  src={imgdb}
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
                    {bestMatchData[data]["firstName"]}&nbsp;
                    {bestMatchData[data]["lastName"]}
                  </h3>
                  <h6>
                    {bestMatchData[data]["areaOfExpertise"][0]}
                    {bestMatchData[data]["areaOfExpertise"][1] ? "," : ""}
                    &nbsp;
                    {bestMatchData[data]["areaOfExpertise"][1]}
                    {bestMatchData[data]["areaOfExpertise"][2] ? "," : ""}
                    &nbsp;
                    {bestMatchData[data]["areaOfExpertise"][2]}
                    &nbsp;
                    {bestMatchData[data]["areaOfExpertise"][3]}
                  </h6>
                  <p>
                    {bestMatchData[data]["description"]}
                    &nbsp;
                    <button
                      onClick={() => {
                        history.push({
                          pathname: `/trainer/profile/${bestMatchData[data]["id"]}`,
                          state: {
                            trainerId: bestMatchData[data]["id"],
                            trainerData: bestMatchData[data],
                          },
                        });
                      }}
                    >
                      Read More
                    </button>
                  </p>
                </div>
                <div className="card-button">
                  <button
                    style={{
                      backgroundColor: "#53BFD2",
                    }}
                    onClick={() => {
                      // if (localStorage.getItem("token")) {
                      history.push({
                        pathname: "/user/scheduler",
                        state: {
                          trainerId: bestMatchData[data]["id"],
                          trainerData: bestMatchData[data],
                        },
                      });
                      // } else {
                      //     alert("Please Login");
                      // }
                    }}
                  >
                    book a session
                    <BlackCircleButton />
                    <p>
                      from{" "}
                      <span>
                        {
                          bestMatchData[data]["oneOnOnePricing"][
                            "inPersonAtClientLocation"
                          ]
                        }
                      </span>
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

const HeadingTrainer = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper_heading">
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

export default TrainerCards;
