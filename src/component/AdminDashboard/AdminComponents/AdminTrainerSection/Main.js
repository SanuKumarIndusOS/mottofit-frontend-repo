import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import CommonPagination from "component/common/CommonPagination";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { Input } from "reactstrap";
import { fetchTrainersLists } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";

const MainClass = ({ fetchTrainersListsApi }) => {
  const [trainerList, setTrainerList] = useState([]);
  const [pageMetaData, setpageMetaData] = useState({});
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchAllTrainers(1);
  }, []);

  function fetchAllTrainers(page = 1) {
    fetchTrainersListsApi(page).then((data) => {
      setTrainerList(data.list);
      setpageMetaData(data.pageMetaData);
      setLoading(false);
    });
  }

  function search(rows) {
    return rows.filter(
      (row) =>
        row.email.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
        row.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
  }
  return (
    <div className="outter_container_AD container">
      {loading ? (
        <CommonPageLoader />
      ) : (
        <>
          <h2>Admin Trainer's Data </h2>
          <div className="trainer_admin">
            <div className="views_trainer">
              <p>No of</p>
              <h3>
                Trainer's :<span> {pageMetaData.total}</span>
              </h3>
            </div>
            <Input className="admin_trainer_input"
              type="text"
              placeholder="Search for Trainer's"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <Datatable
            trainerList={search(trainerList)}
            loading={loading}
            fetchAllTrainers={() => fetchAllTrainers()}
          />
          <CommonPagination
            pageMetaData={pageMetaData}
            totalPosts={trainerList.length}
            pageChange={(e) => fetchAllTrainers(e)}
          />
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchTrainersListsApi: fetchTrainersLists,
    },
    dispatch
  );
};

const Main = connect(null, mapDispatchToProps)(MainClass);

export default Main;
