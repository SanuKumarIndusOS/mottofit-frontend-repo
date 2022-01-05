import React, { useState, useEffect } from "react";
import AdminTrainerSection from "../AdminTrainerSection";
import "./styles.scss";
import { getStatsData } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CommonPageLoader } from "component/common/CommonPageLoader";

const AdminDashboardClass = ({ getStatsDataApi }) => {
  const [loading, setLoading] = useState(false);
  const [statsData, setStatsData] = useState({});
  useEffect(() => {
    setLoading(true);
    fetchStatsData();
  }, []);

  function fetchStatsData() {
    getStatsDataApi()
      .then((data) => {
        setStatsData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
                    User's :<span> {statsData.userCount}</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <p>No of</p>
                  <h3>
                    Trainer's :<span> {statsData.trainerCount}</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <p>No of</p>
                  <h3>
                    Page Views : <span>{statsData.pageViews}</span>
                  </h3>
                </div>
                <div className="views_AD">
                  <h3>
                    Revenue : <span>${statsData.totalRevenue}</span>
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
      getStatsDataApi: getStatsData,
    },
    dispatch
  );
};

const AdminDashboard = connect(null, mapDispatchToProps)(AdminDashboardClass);

export default AdminDashboard;
