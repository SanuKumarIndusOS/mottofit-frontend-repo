import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGlobalSearchResults, trainerDetail } from "action/trainerAct";
import Pagination from "react-js-pagination";
import { history } from "helpers";

import TrainerCards from "component/FindYourTrainer/TrainersDetails/index";
import TrainerCard from "component/common/TrainerCard";
import { load } from "dotenv";
import Trainer from "component/Home/trainer";
import CircularProgress from "@material-ui/core/CircularProgress";
const GloabalSearchResults = ({ fetchGlobalSearchResults }) => {
  const [searchResults, setSearchResults] = useState();
  const [activePage, setactivePage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [loader, setLoader] = useState(true);
  let location = useLocation();

  // useEffect(() => {
  //   let payload = {
  //     key: location.state?.key,
  //     page: activePage,
  //   };
  //   fetchGlobalSearchResults(payload).then((data) => {
  //     console.log(data.list);
  //     setTotalPage(data.totalCount);
  //     setSearchResults(data.list);
  //   });
  // }, []);

  useEffect(() => {
    console.log("change");
    let payload = {
      key: location.state?.key,
      page: activePage,
    };
    fetchGlobalSearchResults(payload).then((data) => {
      setTotalPage(data.totalCount);
      setSearchResults(data.list);
      console.log(data.list);
      setLoader(false);
    });
  }, [location.state?.key, activePage]);

  // useEffect(() => {
  //   let payload = {
  //     key: localStorage.getItem("searchKey"),
  //     page: activePage,
  //   };
  //   fetchGlobalSearchResults(payload).then((data) => {
  //     console.log(data.totalCount);
  //     setTotalPage(data.totalCount);
  //     setSearchResults(data.list);
  //   });

  //   window.addEventListener("storage", () => { });
  // }, [activePage]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setactivePage(pageNumber);
  };
  return (
    <div className="results_container">
      <h1>Results</h1>

      {/* <TrainerCard/> */}

      {/* <TrainerCards
        content={searchResults}
      
        // loader={loader}
      /> */}
      {loader ? (
        <div
          style={{
            height: "80vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <CircularProgress size={60} />{" "}
        </div>
      ) : (
        <div className="results_grid">
          <div style={{ marginBottom: "500px" }}>
            {searchResults?.length === 0 ? (
              <h1>No Results Found</h1>
            ) : (
              <div className="trainer-card__grid">
                {searchResults.map((item) => {
                  return <TrainerCard data={item} />;
                })}
              </div>

              // <div className="row">
              //   <TrainerCards
              //     content={searchResults || []}
              //     type="globalSearch"
              //   />
              // </div>
            )}

            {searchResults?.length !== 0 ? (
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
              />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchGlobalSearchResults,
    },
    dispatch
  );
};

const GlobalSearch = connect(null, mapDispatchToProps)(GloabalSearchResults);

export default GlobalSearch;
