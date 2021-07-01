import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import AvailabilityIcon from "../../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import { Link } from "react-router-dom";
import BlueArrowButton from "../../../common/BlueArrowButton";
import Jenny from "../../../../assets/files/TrainerDashboard/Message/Jenny.png";
import BlueHoverButton from "../../../common/BlueArrowButton";
import { getTrainerSessionDetails } from "action/trainerAct";
import { cancelSession } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";
import { TrainerApi } from "../../../../service/apiVariables";
import { api } from "../../../../service/api";
import { Toast } from "../../../../service/toast";

const TrainerSessionFC = ({
  sessionData,
  getTrainerSessionDetailsApi,
  cancelSession,
}) => {
  const [trainerSessionData, setTrainerSessionData] = useState({
    upcomingSessions: [],
    pastSessions: [],
    onGoingSessions: [],
  });

  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getAllDetails();
  }, []);

  const getAllDetails = () => {
    getTrainerSessionDetailsApi().then((data) => {
      const tempSessionData = {};
      Object.keys(data).forEach((sessionKey) => {
        tempSessionData[sessionKey] = data[sessionKey].map(
          ({
            title,
            venue,
            sessionDate,
            sessionStartTime,
            id,
            sessionStatus,
          }) => ({
            date: getFormatDate(sessionDate, "D"),
            month: getFormatDate(sessionDate, "MMM"),
            heading: title,
            imgAva: AvailabilityIcon,
            avaTime: `${getFormatDate(sessionStartTime, "LT", true)} EST`,
            imgLoc: LocationIcon,
            loc: venue,
            previousImg: Jenny,
            prevHeading: "Yoga with Kane",
            prevDate: getFormatDate(sessionData, "DD MMMM YYYY"),
            sessionStatus,
            id,
          })
        );
      });

      setTrainerSessionData(tempSessionData);
    });
  };

  const handleSessionStatus = (trainerId, sessionStatus) => {
    let payload = {
      sessionId: trainerId,
      sessionStatus,
    };

    const { changeSessionStatus } = TrainerApi;

    changeSessionStatus.body = payload;

    api({ ...changeSessionStatus })
      .then(({ data }) => {
        console.log(data);
        getAllDetails();
      })
      .catch((err) => {
        console.log(err);
        Toast({ type: "error", message: err.message || "" });
      });
  };

  const handleCancel = (sessionId) => {
    let payload = {
      sessionId,
      sessionStatus: "cancelled",
    };
    // console.log(payload);

    setisLoading(true);

    cancelSession(payload)
      .then(() => {
        setisLoading(false);
        getAllDetails();
      })
      .catch(() => setisLoading(false));
  };

  return (
    <>
      <div className="outter_user_container">
        <div className="container">
          <div className="inner_user_container ">
            <div className="userSession_heading">
              <h2>My Session</h2>
            </div>
            <div className="US_tabs_wrapper">
              <Tabs defaultTab="upcoming">
                <TabList>
                  {/* <Tab tabFor="overview">Overview</Tab> */}
                  <Tab tabFor="upcoming">Upcoming</Tab>
                  {/* <Tab tabFor="pass">Motto pass</Tab> */}
                  <Tab tabFor="previous">Previous</Tab>
                </TabList>
                <div className="tabPanel_outter">
                  <TabPanel tabId="overview">
                    <TabOne
                      datas={trainerSessionData.upcomingSessions}
                      handleSessionStatus={handleSessionStatus}
                      handleCancel={handleCancel}
                      isLoading={isLoading}
                    />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="upcoming">
                    <TabTwo
                      datas={trainerSessionData.upcomingSessions}
                      handleSessionStatus={handleSessionStatus}
                      handleCancel={handleCancel}
                    />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="pass">
                    <TabThree />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="previous">
                    <TabFour
                      datas={trainerSessionData.pastSessions}
                      handleSessionStatus={handleSessionStatus}
                    />
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TabOne = ({
  datas = [],
  handleSessionStatus,
  handleCancel,
  isLoading,
}) => {
  const [visible, setVisible] = useState([3]);

  const setViewMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };
  return (
    <div className="tabPanel_overview d-flex">
      <div className="tabPanel_overview_left w-100">
        <div className="TP_overview_wrapper">
          <h3>Upcoming Sessions</h3>
          <div className="TP_US_overview">
            <div className="TP_US_overview_inner">
              {datas.length > 0 ? (
                datas.map((data, index) => {
                  return (
                    <>
                      <div className="TP_upcomeSession_overview" key={index}>
                        <div className="TP_USession_dates">
                          <h4>
                            {data.date}
                            <span>{data.month}</span>
                          </h4>
                        </div>
                        <div className="TP_USession_data">
                          <h2 className="text-capitalize">{data.heading}</h2>
                          <div className="TP_USession_data_icons">
                            <h5>
                              <img src={data.imgAva} alt="icon" />
                              {data.avaTime}
                            </h5>
                            <h5 className="text-capitalize">
                              <img src={data.imgLoc} alt="icon" />
                              {data.loc}
                            </h5>
                          </div>
                          <div className="d-flex align-items-center mt-2 TP_USession_data_buttons">
                            {data.sessionStatus !== "cancelled" ? (
                              <button
                                // disabled={true}
                                onClick={() => handleCancel(data.id)}
                                className={`mr-2`}
                              >
                                Cancel
                              </button>
                            ) : (
                              <div className="d-flex align-items-center">
                                <p className="text-danger text-underline mb-0 fs-15 fw-600 mr-2">
                                  Cancelled
                                </p>
                              </div>
                            )}
                            {data.sessionStatus !== "completed" ? (
                              <div className="TP_USession_data_buttons mt-0">
                                {/* <button>Reschedule</button> */}
                                <button
                                  className="text-primary"
                                  onClick={() =>
                                    handleSessionStatus(data.id, "completed")
                                  }
                                >
                                  Complete
                                </button>
                              </div>
                            ) : (
                              <div>
                                <p>Completed</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })
              ) : (
                <h3 className="my-5 py-5 text-center">No Data Found</h3>
              )}
            </div>
            {datas.length > 0 ? (
              <button onClick={setViewMore} className="viewMoreButton">
                View all Session <BlueHoverButton />
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="tabPanel_overview_right">
        <div className="TB_overview_right">
          {/* <div className="TB_overview_row_one">
            <div className="row_one_data">
              <h2>Want to Do More for Less?</h2>
              <p>
                Save money by purchasing multiple sessions at once, eligible for
                use within 60 days of the purchase date.
              </p>
              <Link to="/">
                Get A pass <BlueArrowButton />{" "}
              </Link>
            </div>
          </div> */}

          <div className="TB_overview_row_two">
            <div className="row_two_data">
              <h2>PREVIOUS SESSIONS</h2>
              <div className="row_two_scroll">
                {datas.length > 0 ? (
                  datas.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="row_previous_data">
                          <div className="row_previous_avater">
                            <img src={data.previousImg} alt="profile" />
                          </div>
                          <div className="row_previous_header">
                            <h2 className="text-capitalize">{data.heading}</h2>
                            <p>{data.prevDate}</p>
                          </div>
                        </div>
                        <hr />
                      </React.Fragment>
                    );
                  })
                ) : (
                  <h3 className="my-5 py-5 text-center">No Data Found</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabTwo = ({ datas = [], handleSessionStatus, handleCancel }) => {
  const [visible, setVisible] = useState([3]);

  const setViewMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };
  return (
    <div className="tabPanel_overview d-flex">
      <div className="tabPanel_overview_left w-100">
        <div className="TP_overview_wrapper">
          <h3>Upcoming Sessions</h3>
          <div className="TP_US_overview">
            <div className="TP_US_overview_inner">
              {datas.length > 0 ? (
                datas.map((data, index) => {
                  return (
                    <>
                      <div className="TP_upcomeSession_overview" key={index}>
                        <div className="TP_USession_dates">
                          <h4>
                            {data.date}
                            <span>{data.month}</span>
                          </h4>
                        </div>
                        <div className="TP_USession_data">
                          <h2 className="text-capitalize">{data.heading}</h2>
                          <div className="TP_USession_data_icons">
                            <h5>
                              <img src={data.imgAva} alt="icon" />
                              {data.avaTime}
                            </h5>
                            <h5 className="text-capitalize">
                              <img src={data.imgLoc} alt="icon" />
                              {data.loc}
                            </h5>
                          </div>
                          {data.sessionStatus !== "completed" ? (
                            <div className="TP_USession_data_buttons">
                              {/* <button>Reschedule</button> */}
                              <button onClick={() => handleCancel(data.id)}>
                                Cancel
                              </button>
                              <button
                                className="text-primary"
                                onClick={() =>
                                  handleSessionStatus(data.id, "completed")
                                }
                              >
                                Complete
                              </button>
                            </div>
                          ) : (
                            <div>
                              <p>Completed</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })
              ) : (
                <h3 className="my-5 py-5 text-center">No Data Found</h3>
              )}
            </div>
            {datas.length > 0 ? (
              <button onClick={setViewMore} className="viewMoreButton">
                View all Session <BlueHoverButton />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const TabThree = () => {
  return (
    <div className="tabPanel_overview">
      <div className="tabPanel_overview_right">
        <div className="TB_overview_right">
          <div className="TB_overview_row_one">
            <div className="row_one_data">
              <h2>Want to Do More for Less?</h2>
              <p>
                Save money by purchasing multiple sessions at once, eligible for
                use within 60 days of the purchase date.
              </p>
              <Link to="/">
                Get A pass <BlueArrowButton />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const TabFour = ({ datas = [] }) => {
  return (
    <div className="tabPanel_overview d-flex">
      <div className="tabPanel_overview_right w-100">
        <div className="TB_overview_right">
          <div className="TB_overview_row_two">
            <div className="row_two_data">
              <h2>PREVIOUS SESSIONS</h2>
              <div className="row_two_scroll">
                {datas.length > 0 ? (
                  datas.map((data, index) => {
                    return (
                      <>
                        <div className="row_previous_data" key={index}>
                          <div className="row_previous_avater">
                            <img src={data.previousImg} alt="profile" />
                          </div>
                          <div className="row_previous_header">
                            <h2 className="text-capitalize">{data.heading}</h2>
                            <p>{data.prevDate}</p>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })
                ) : (
                  <h3 className="my-5 py-5 text-center">No Data Found</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.trainerReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerSessionDetailsApi: getTrainerSessionDetails,
      cancelSession,
    },
    dispatch
  );
};

const TrainerSession = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerSessionFC);

export default TrainerSession;
