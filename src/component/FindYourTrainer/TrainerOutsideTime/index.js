import React, { useState, useEffect } from "react";
import "./styles.sass";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import "./styleCard.scss";
import { updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";

const TrainerCardOutsideFC = (props) => {
  const [outSideData, setOutSideData] = useState([]);

  const { nextApi, totalPageMatch } = props || {};

  useEffect(() => {
    setOutSideData(props.content);
  }, []);

  useEffect(() => {
    setOutSideData(props.content);
    console.log(totalPageMatch, outSideData);
  }, [props.content]);

  const handleClick = (data, isReadMore = false) => {
    let reduxData = {
      selectedTrainerData: {
        trainerId: outSideData[data]["id"],
        trainerData: outSideData[data],
      },
    };
    props.updateUserDetails(reduxData);

    if (!isReadMore) {
      history.push({
        pathname: `/user/scheduler/${outSideData[data]["id"]}`,
      });
    } else {
      history.push({
        pathname: `/trainer/profile/${outSideData[data]["id"]}`,
      });
    }
  };

  let mql = window.matchMedia("(max-width: 700px)");

  const sectionHeight = mql.matches ? 3170 : 1170;

  return (
    <>
      <div className="container">
        <HeadingTrainer otherRef={props.otherRef} />

        <div
          id="scrollableDiv2"
          style={{ height: sectionHeight, overflow: "auto" }}
        >
          <InfiniteScroll
            dataLength={Object.keys(outSideData).length}
            next={nextApi}
            hasMore={Object.keys(outSideData).length < totalPageMatch}
            scrollableTarget="scrollableDiv2"
            loader={
              <div className="load_p">
                <div className="loaders"></div>
              </div>
            }
          >
            <div className="row mb-0">
              {Object.keys(outSideData).map((data, index) => {
                const areaOfExpertise = outSideData[
                  data
                ]?.areaOfExpertise?.toString();

                const oneOnOnePricingValues = Object.values(
                  outSideData[data]?.oneOnOnePricing || {}
                );

                const socialSessionPricingValues = Object.values(
                  outSideData[data]?.socialSessionPricing || {}
                );
                const classSessionPricingValues = Object.values(
                  outSideData[data]?.classSessionPricing || {}
                );

                const allSessionPricing = [
                  ...oneOnOnePricingValues,
                  ...socialSessionPricingValues,
                  ...classSessionPricingValues,
                ]
                  .map((price) => parseFloat(price))
                  .filter((price) => !isNaN(price) && price > 0);

                const sortedPricingList = allSessionPricing.sort(
                  (a, b) => a - b
                );
                return (
                  <div
                    className="card"
                    key={index}
                    // onClick={() => handleClick(data, true)}
                  >
                    <div className="inner_card">
                      <img
                        className="card-img-top card-img"
                        src={
                          outSideData[data].profilePicture ||
                          "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd"
                        }
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                        }}
                      />

                      <div
                        className="overlay_card"
                        onClick={() => handleClick(data, true)}
                      >
                        <div className="content_card">
                          <div className="circle_hover_card">
                            <p>check me out</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body">
                      <h3 style={{ textTransform: "capitalize" }}>
                        {outSideData[data]?.firstName}&nbsp;
                        {outSideData[data]?.lastName}
                      </h3>
                      <h6>{areaOfExpertise}</h6>
                      <p>
                        {outSideData[data]?.description}

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
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

const HeadingTrainer = ({ otherRef }) => {
  return (
    <>
      <div className="container">
        <div className="wrapper_headings" ref={otherRef}>
          <h2>Just Outside Your Time</h2>
          <p>
            These trainers are in your area. Browse their profiles to message
            them to find a time that works for you.
          </p>
        </div>
      </div>
    </>
  );
};

const ReadMore = ({ children, maxChar = 110 }) => {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxChar) : text;
  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

  return (
    <>
      <p className="has-text-left">
        {resultString}
        <span onClick={toggleIsTruncated} className="readmore">
          {isTruncated ? "Read more" : "Read less"}
        </span>
      </p>
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

const TrainerCardOutside = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerCardOutsideFC);

export default TrainerCardOutside;
