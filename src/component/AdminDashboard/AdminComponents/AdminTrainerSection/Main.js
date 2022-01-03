import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import CommonPagination from "component/common/CommonPagination";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { Input } from "reactstrap";
import { fetchTrainersLists, createDirectMessage } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";
import { Toast } from "service/toast";
import { history } from "helpers";

const MainClass = ({ fetchTrainersListsApi, createDirectMessageApi }) => {
  const [trainerList, setTrainerList] = useState([]);
  const [pageMetaData, setpageMetaData] = useState({});
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [loadingDatas, setLoadingDatas] = useState([]);
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

  function search(rows) {}

  useEffect(() => {
    if (q !== "") {
      fetchTrainersListsApi(1, true, q).then((data) => {
        setTrainerList(data.list);
        setpageMetaData(data.pageMetaData);
        setLoading(false);
      });
    }
  }, [q]);

  const handleDirectRequest = (id) => {
    if (!id) return;

    if (!loadingDatas.includes(id)) {
      let tempDatas = [...loadingDatas, id];

      setLoadingDatas(tempDatas);
    }

    createDirectMessageApi(id)
      .then((data) => {
        const { channelSid } = data || {};
        Toast({ type: "success", message: data.message || "success" });
        history.push(`/admins/message/trainer?channelId=${channelSid}`);

        let tempDatas = [...loadingDatas].filter((userid) => userid !== id);

        setLoadingDatas(tempDatas);
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        let tempDatas = [...loadingDatas].filter((userid) => userid !== id);

        setLoadingDatas(tempDatas);
      });
  };
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
            <Input
              style={{ width: "20%" }}
              type="text"
              placeholder="Search for Trainer's"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <Datatable
            trainerList={trainerList}
            loading={loading}
            fetchAllTrainers={() => fetchAllTrainers()}
            handleDirectRequest={handleDirectRequest}
            loadingDatas={loadingDatas}
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
      createDirectMessageApi: createDirectMessage,
    },
    dispatch
  );
};

const Main = connect(null, mapDispatchToProps)(MainClass);

export default Main;
