import React, { useState, useEffect } from "react";
import Datatable from "../datatable/index";
import CommonPagination from "component/common/CommonPagination";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { Input } from "reactstrap";
import "./styles.scss";
import { getAllUsersLists } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MainClass = ({ getAllUsersListsApi }) => {
  const [userList, setUserList] = React.useState([]);
  const [pageMetaData, setpageMetaData] = useState({});
  const [loading, setLoading] = useState(false);

  const [q, setQ] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchAllTrainers(1);
  }, []);

  function fetchAllTrainers(page) {
    getAllUsersListsApi(page).then((data) => {
      setUserList(data.list);
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
          <h2>Admin User's Data</h2>
          <div className="trainer_admin">
            <div className="views_trainer">
              <p>No of</p>
              <h3>
                User: <span>{pageMetaData.total}</span>
              </h3>
            </div>
          </div>
          <Input
            style={{ width: "20%" }}
            type="text"
            placeholder="Search for User's"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mb-1"
          />

          <Datatable userList={search(userList)} loading={loading} />
          <CommonPagination
            pageMetaData={pageMetaData}
            totalPosts={userList.length}
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
      getAllUsersListsApi: getAllUsersLists,
    },
    dispatch
  );
};

const Main = connect(null, mapDispatchToProps)(MainClass);

export default Main;
