import React, { useState, useEffect } from "react";
import "./trainer.sass";
import "./trainerDetails.scss";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { connect } from "react-redux";
import { updateUserDetails } from "action/userAct";
import { bindActionCreators } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const TrainerCardsFC = (props) => {
  const [bestMatchData, setbestMatchData] = useState([]);

  const { nextApi, totalPageMatch } = props;

  console.log(totalPageMatch);

  const nextApicb = () => {
    // console.log("nextApi called");
  };

  useEffect(() => {
    setbestMatchData(props.content);
    // setbestMatchData([...new Array(3)]);
    console.log(props.content);
  }, [props.content]);
  const [visible, setVisible] = useState(3);
  const showMoreItems = () => {
    setVisible((showCard) => showCard + 3);
  };

  let no_match = <div></div>;
  if (bestMatchData?.length === 0 && props.type !== "globalSearch") {
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

    let trainerFullname = `${bestMatchData[data]["firstName"] || ""}-${
      bestMatchData[data]["lastName"] || ""
    }`;

    let encodedName = trainerFullname.toLocaleLowerCase();

    console.log(trainerFullname);

    history.push({
      pathname: `/trainer/profile/${bestMatchData[data]["id"]}/${encodedName}`,
    });

    // history.push({
    //   pathname: `/trainer/profile/${bestMatchData[data]["id"]}`,
    //   // state: { autoScroll: true },
    // });

    // if (!isReadMore) {
    //   history.push({
    //     pathname: `/user/scheduler/${bestMatchData[data]["id"]}`,
    //   });
    // } else {

    // }
  };

  let mql = window.matchMedia("(max-width: 700px)");

  const sectionHeight = mql.matches ? 3170 : 1170;

  return (
    <>
      <div className="container">
        {props.loader ? null : props.type === "globalSearch" ? null : (
          <>
            <HeadingTrainer bestMatchRef={props.bestMatchRef} />
            {no_match}{" "}
          </>
        )}

        {/* <div id="scrollableDiv" style={{ height: sectionHeight }}> */}
        {/* <InfiniteScroll
            dataLength={Object.keys(bestMatchData).length}
            next={nextApi}
            hasMore={Object.keys(bestMatchData).length < totalPageMatch}
            scrollableTarget="scrollableDiv"
            loader={
              <div className="load_p">
                <div className="loaders"></div>
              </div>
            }
          > */}
        <div className="row mb-0" style={{ alignleft: "auto" }}>
          {Object.keys(bestMatchData).map((data, index) => {
            const areaOfExpertise =
              bestMatchData[data]?.areaOfExpertise?.toString();

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

            const sortedPricingList = allSessionPricing
              .sort((a, b) => a - b)
              .filter(function (value) {
                return value > 0;
              });

            let trainerFullname = `${bestMatchData[data]["firstName"] || ""}-${
              bestMatchData[data]["lastName"] || ""
            }`;

            let encodedName = trainerFullname.toLocaleLowerCase();

            return (
              // <div
              //   className="card "
              //   key={index}
              //   // onClick={() => handleClick(data, true)}
              // >
              <Link
                to={`/trainer/profile/${bestMatchData[data]["id"]}/${encodedName}`}
                className="card-link card"
                key={`trainer_best_matches_${index}`}
                style={{ paddingBottom: "0px" }}
              >
                <div className="position-relative w-100">
                  <img
                    onClick={() => handleClick(data, true)}
                    className="card-img-top"
                    src={
                      bestMatchData[data]?.profilePicture ||
                      "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"
                    }
                    style={{ objectFit: "cover", cursor: "pointer" }}
                    alt="Profile Picture Not Found "
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                    }}
                  />
                  <div
                    className="ocard"
                    onClick={() => handleClick(data, true)}
                  >
                    <div className="circlepop">
                      Check <br /> Me Out
                      <div className={`check_me_out_icon`}>&#10094;</div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h3
                    style={{
                      textTransform: "capitalize",
                      // wordBreak: "break-all",
                    }}
                  >
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
                    className="book_session_btn"
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
              </Link>
            );
          })}
        </div>
        {/* </InfiniteScroll> */}
        {/* </div> */}

        {/* <div className="showmore">
          <button className="showmore_btn" onClick={showMoreItems}>
            {visible ? "View More Trainers " : null}
            <img src={Arrow} alt="icon" />
          </button>
        </div> */}
      </div>
    </>
  );
};

const HeadingTrainer = ({ bestMatchRef }) => {
  return (
    <>
      <div className="container">
        <div className="wrapper_heading" ref={bestMatchRef}>
          {/* <h2>Your Motto Matches</h2>
          <p>
            These matches are the perfect fit based on your filters. The prices
            shown are for 1:1 sessions. Click on the trainer profile for group
            rates!
          </p> */}
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
