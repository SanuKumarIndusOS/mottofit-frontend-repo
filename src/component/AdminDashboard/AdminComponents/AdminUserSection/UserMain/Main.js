import React, { useState, useEffect } from "react";
import Datatable from "../datatable/index";
import CommonPagination from "component/common/CommonPagination";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { Input } from "reactstrap";
import "./styles.scss";
import {
  getAllUsersLists,
  AddorRemoveUser,
  createDirectMessage,
} from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MainClass = ({
  getAllUsersListsApi,
  AddorRemoveUser,
  createDirectMessageApi,
}) => {
  const [userList, setUserList] = React.useState([]);
  const [pageMetaData, setpageMetaData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [loadingDatas, setLoadingDatas] = useState([]);

  const [q, setQ] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchAllTrainers(1);
  }, []);

  useEffect(() => {
    console.log(pageMetaData["page"], "page");
    setCurrentPage(pageMetaData["page"]);
  }, [pageMetaData]);

  function addOrRemove(id, type) {
    console.log(id, type, currentPage);
    AddorRemoveUser(id, type)
      .then(() => {
        fetchAllTrainers(currentPage);
        console.log("s");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const toggleLoading = (id, isClose = false) => {
    console.log(loadingDatas.includes(id), "SES", loadingDatas);

    if (!isClose) {
      let tempDatas = [...loadingDatas, id];

      console.log(tempDatas, "SES");

      setLoadingDatas(tempDatas);

      setUserList([]);
      setTimeout(() => {
        setUserList([...userList]);
      }, 100);
    } else {
      let tempDatas = [...loadingDatas].filter((userid) => userid !== id);

      console.log(tempDatas, "SES");

      setLoadingDatas(tempDatas);
      setUserList([]);
      setTimeout(() => {
        setUserList([...userList]);
      }, 100);
    }
  };

  function fetchAllTrainers(page) {
    console.log(currentPage);
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

          <Datatable
            userList={search(userList)}
            loading={loading}
            addOrRemove={addOrRemove}
            createDirectMessageApi={createDirectMessageApi}
            loadingDatas={loadingDatas}
            toggleLoading={toggleLoading}
          />
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
      createDirectMessageApi: createDirectMessage,
      AddorRemoveUser,
    },
    dispatch
  );
};

const Main = connect(null, mapDispatchToProps)(MainClass);

export default Main;
