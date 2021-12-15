import React, { useState, useEffect, useRef } from "react";

import "./find.scss";

import BlueHoverButton from "../../common/BlueArrowButton";
import TrainerCards from "../TrainersDetails/index";
import TrainerCardOutside from "../TrainerOutsideTime/index";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrainerDetails, searchBestMatch } from "action/trainerAct";
import { updateUserDetails } from "action/userAct";

import SearchFilter from "component/common/SearchFilter/index";

const FindTrainerFC = ({ trainerSearchFilterData, searchBestMatch }) => {
  const search_filter_action = (payload) => {
    // console.log("mi2", payload, trainerSearchFilterData);

    searchBestMatch(payload, 1, "match").then((data) => {
      console.log(data);
      setTempBestMatch(data.list);
    });

    searchBestMatch(payload, 1, "unmatch").then((data) => {
      console.log(data.list);
      setTempOtherMatch(data.list);
    });
  };

  //DESKTOP
  const [tempBestMatch, setTempBestMatch] = useState([]);
  const [tempOtherMatch, setTempOtherMatch] = useState([]);
  const [loader, setloader] = useState(true);
  const [loaderUnMatch, setloaderUnMatch] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPageMatch, settotalPageMatch] = useState(0);
  const [pageUnmatch, setpageUnmatch] = useState(1);
  const [totalPageUnMatch, settotalPageUnMatch] = useState(0);

  const bestMatchRef = useRef(null);
  const otherRef = useRef(null);

  useEffect(() => {
    console.log(trainerSearchFilterData);
    if (Object.keys(trainerSearchFilterData).length === 0) {
      console.log(
        JSON.parse(localStorage.getItem("persistFilters")),
        "persist"
      );

      if (JSON.parse(localStorage.getItem("persistFilters")) !== null) {
        searchBestMatch(
          JSON.parse(localStorage.getItem("persistFilters")),
          page,
          "match"
        ).then((data) => {
          console.log(data, "unmatch");
          setTempBestMatch(data.list);
          settotalPageMatch(data.totalCount);
          setloader(false);
        });

        searchBestMatch(
          JSON.parse(localStorage.getItem("persistFilters")),
          pageUnmatch,
          "unmatch"
        ).then((data) => {
          console.log(data.list);
          setTempOtherMatch(data.list);
          settotalPageUnMatch(data.totalCount);
          setloaderUnMatch(false);
        });
      }
    } else {
      searchBestMatch(trainerSearchFilterData, page, "match").then((data) => {
        console.log(data);
        setTempBestMatch(data.list);
        settotalPageMatch(data.totalCount);
        setloader(false);
      });

      searchBestMatch(trainerSearchFilterData, pageUnmatch, "unmatch").then(
        (data) => {
          console.log(data.list);
          setTempOtherMatch(data.list);
          settotalPageUnMatch(data.totalCount);
          setloaderUnMatch(false);
        }
      );
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(page);
    if (page !== 1) {
      searchBestMatch(trainerSearchFilterData, page, "match").then((data) => {
        console.log(data);
        setTempBestMatch((tempBestMatch) => [...tempBestMatch, ...data.list]);
        setloader(false);
      });
    }
  }, [page]);

  useEffect(() => {
    console.log(pageUnmatch);
    if (pageUnmatch !== 1) {
      searchBestMatch(trainerSearchFilterData, pageUnmatch, "unmatch").then(
        (data) => {
          console.log(data);
          setTempOtherMatch((tempOtherMatch) => [
            ...tempOtherMatch,
            ...data.list,
          ]);
          setloaderUnMatch(false);
        }
      );
    }
  }, [pageUnmatch]);

  const ViewMoreTrainers = () => {
    setloader(true);
    setPage(page + 1);
  };
  return (
    <div className="find_wrapper">
      <div className="find_trainer">
        <SearchFilter
          type="find"
          searchAction={search_filter_action}
          activeQuery={trainerSearchFilterData}
        />
      </div>

      <TrainerCards
        content={tempBestMatch}
        bestMatchRef={bestMatchRef}
        loader={loader}
        nextApi={ViewMoreTrainers}
        page={page}
        totalPageMatch={totalPageMatch}
      />
      {Object.keys(tempBestMatch || [])?.length < totalPageMatch && (
        <button className="view_more" onClick={ViewMoreTrainers}>
          View More Trainers &ensp; <BlueHoverButton />
        </button>
      )}

      {loader ? (
        <div className="load_p">
          <div className="loaders"></div>
        </div>
      ) : null}

      {trainerSearchFilterData.availability === "[]" &&
      trainerSearchFilterData.trainingType === "[]" &&
      trainerSearchFilterData.date === "" ? null : (
        <div>
          <TrainerCardOutside
            content={tempOtherMatch}
            otherRef={otherRef}
            nextApi={() => {
              setpageUnmatch(pageUnmatch + 1);
              setloaderUnMatch(true);
            }}
            page={pageUnmatch}
            totalPageMatch={totalPageUnMatch}
          />

          {Object.keys(tempOtherMatch || [])?.length < totalPageUnMatch && (
            <button
              onClick={() => {
                setpageUnmatch(pageUnmatch + 1);
                setloaderUnMatch(true);
              }}
              className="view_more"
            >
              View More Trainers &ensp;
              <BlueHoverButton />
            </button>
          )}
          {loaderUnMatch ? (
            <div className="load_p">
              <div className="loaders"></div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trainerQueryData: state.trainerReducer.query,
  trainerSearchFilterData: state.trainerReducer.searchFilterParams,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
      updateTrainerDetails,
      searchBestMatch,
    },
    dispatch
  );
};

const FindTrainer = connect(mapStateToProps, mapDispatchToProps)(FindTrainerFC);

export default FindTrainer;
