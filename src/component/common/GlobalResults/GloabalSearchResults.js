import React, { useEffect, useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGlobalSearchResults } from "action/trainerAct";
import Pagination from "react-js-pagination";
import { history } from "helpers";

const GloabalSearchResults = ({ fetchGlobalSearchResults }) => {
  const [searchResults, setSearchResults] = useState();
  const [activePage, setactivePage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    let payload = {
      key: localStorage.getItem("searchKey"),
      page: activePage,
    };
    fetchGlobalSearchResults(payload).then((data) => {
      console.log(data.list);
      setTotalPage(data.totalCount);
      setSearchResults(data.list);
    });
  }, []);

  useEffect(() => {
    let payload = {
      key: localStorage.getItem("searchKey"),
      page: activePage,
    };
    fetchGlobalSearchResults(payload).then((data) => {
      console.log(data.totalCount);
      setTotalPage(data.totalCount);
      setSearchResults(data.list);
    });
  }, [activePage]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setactivePage(pageNumber);
  };
  return (
    <div className="results_container">
      <h1>Results</h1>

      <div className="results_grid">
        <div className="row">
          {searchResults?.map((item) => {
            return (
              <div className="cardd">
                {item.profilePicture !== null ? (
                  <img className="card_image" src={item.profilePicture}></img>
                ) : (
                  <div className="card_image">{item.firstName[0]}</div>
                )}

                <div className="card_content">
                  <div className="name">
                    {item.firstName}&ensp;{item.lastName}
                  </div>
                  <div className="vertical">
                    {item.areaOfExpertise?.map((vertical) => {
                      return `${vertical}, `;
                    })}
                  </div>
                  <div className="_content">{item.description}</div>
                </div>
                <div
                  className="card_view_profile"
                  onClick={() => {
                    history.push({
                      pathname: `/trainer/profile/${item.id}`,
                    });
                  }}
                >
                  VIEW PROFILE
                </div>
              </div>
            );
          })}
        </div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={totalPage}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
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
