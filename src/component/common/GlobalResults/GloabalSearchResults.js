import React, { useEffect, useState } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGlobalSearchResults } from "action/trainerAct";

const GloabalSearchResults = ({ fetchGlobalSearchResults }) => {
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    
    fetchGlobalSearchResults(localStorage.getItem("searchKey")).then((data) => {
      console.log(data);
      setSearchResults(data.list);
    });
  }, []);
  return (
    <div className="results_container">
      <h1>Results</h1>

      <div className="results_grid">
        <div className="row">
          {searchResults?.map((item) => {
            return <div className="card"></div>;
          })}
        </div>
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
