import React from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGlobalSearchResults } from "action/trainerAct";

const GloabalSearchResults = ({fetchGlobalSearchResults})=> {

  React.useEffect(() => {
    fetchGlobalSearchResults().then(data => {console.log(data);})
  }, [])
  return (
    <div className="results_container">
      <h1>Results</h1>

      <div className="results_grid">
        <div className="row">
            <div className="card">
                
            </div>
      
        </div>
      </div>
    </div>
  );
}

// export default GloabalSearchResults;

// // const mapStateToProps = (state) => ({
// //   trainerQueryData: state.trainerReducer.query,
// // });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchGlobalSearchResults
    },
    dispatch
  );
};

const GlobalSearch = connect(null, mapDispatchToProps)(GloabalSearchResults);

export default GlobalSearch;
