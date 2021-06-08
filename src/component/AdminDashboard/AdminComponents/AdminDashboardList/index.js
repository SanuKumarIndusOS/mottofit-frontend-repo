import React, { useState, useEffect } from "react";
import AdminTrainerSection from "../AdminTrainerSection";
import "./styles.scss";
import { getAllTrainerLists, getAllUsersLists } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CommonPageLoader } from "component/common/CommonPageLoader";

const AdminDashboardClass = ({
  getAllTrainerListsApi,
  getAllUsersListsApi,
}) => {
  const [noTrainer, setNoTrainer] = useState([]);
  const [noUser, setNoUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchNoTrainers();
    fetchNoUsers();
  }, []);

  function fetchNoTrainers() {
    getAllTrainerListsApi(1).then((data) => {
      setNoTrainer(data.pageMetaData);
      setLoading(false);
    });
  }

  function fetchNoUsers() {
    getAllUsersListsApi(1).then((data) => {
      setNoUser(data.pageMetaData);
      setLoading(false);
    });
  }
  return (
    <div className="outter_container_AD">
      {loading ? (
        <CommonPageLoader />
      ) : (
        <div className="container">
          <h2>Admin Dashboard</h2>
          <div className="inner_AD">
            <div className="wrapper_AD">
              <div className="AD_views">
                <div className="views_AD">
                  <p>No of</p>
                  <h3>
                    User's :<span> {noUser.total}</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <p>No of</p>
                  <h3>
                    Trainer's :<span> {noTrainer.total}</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <p>No of</p>
                  <h3>
                    Page Views : <span>300</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <h3>
                    Revenue : <span>$100</span>
                  </h3>{" "}
                </div>
              </div>
            </div>
            <AdminTrainerSection />
          </div>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllTrainerListsApi: getAllTrainerLists,
      getAllUsersListsApi: getAllUsersLists,
    },
    dispatch
  );
};

const AdminDashboard = connect(null, mapDispatchToProps)(AdminDashboardClass);

export default AdminDashboard;
