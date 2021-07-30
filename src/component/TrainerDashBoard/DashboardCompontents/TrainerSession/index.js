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
import { cancelSession, updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";
import { TrainerApi } from "../../../../service/apiVariables";
import { api } from "../../../../service/api";
import { Toast } from "../../../../service/toast";
import { UserAvatar } from "component/common/UserAvatar";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import moment from "moment";

const TrainerSessionFC = ({
  sessionData,
  getTrainerSessionDetailsApi,
  cancelSession,
  updateUserDetails,
}) => {
  const [trainerSessionData, setTrainerSessionData] = useState({
    upcomingSessions: [],
    pastSessions: [],
    invitedSessions: [],
  });

  const [pageData, setPageData] = useState({
    upcoming: 0,
    past: 0,
  });

  const [totalData, setTotalData] = useState({
    upcoming: 0,
    past: 0,
  });

  const [isLoading, setisLoading] = useState(false);
  const [isDataLoading, setDataLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("upcoming");
  // useEffect(() => {
  //   getAllDetails(currentTab);
  // }, []);

  const getAllDetails = (currentTab, isPaginaion = false) => {
    getTrainerSessionDetailsApi(currentTab, pageData[currentTab])
      .then(({ data: tData, documentCount: tempDocumentCount }) => {
        let data = tData || [];
        let documentCount = tempDocumentCount || 0;
        const tempSessionData = {};
        let sessionTypeData = {
          upcoming: "upcomingSessions",
          past: "pastSessions",
        };
        console.log(data);

        setTotalData((prevData) => ({
          ...prevData,
          [currentTab]: documentCount,
        }));

        // Object.keys(data).forEach((sessionKey) => {
        let tempData = data?.map(
          ({
            title,
            venue,
            sessionDate,
            sessionStartTime,
            id,
            sessionStatus,
            userDetail,
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
            prevDate: getFormatDate(sessionStartTime, "DD MMMM YYYY", true),
            sessionStatus,
            userDetail,
            sessionDate,
            sessionStartTime,
            id,
          })
        );

        // console.log(tempData [sessionTypeData[currentTab]]);

        setTrainerSessionData((prevData) => {
          let replaceData = [
            ...(prevData[sessionTypeData[currentTab]] || []),
            ...tempData,
          ];

          return {
            ...prevData,
            [sessionTypeData[currentTab]]: isPaginaion ? replaceData : tempData,
          };
        });

        setDataLoading(false);
        // });
      })
      .catch((err) => {
        setDataLoading(false);
        Toast({ type: "error", message: err.message || "Error" });
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
        getAllDetails(currentTab);
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
        getAllDetails(currentTab);
      })
      .catch(() => setisLoading(false));
  };

  const handleChange = (tab, data) => {
    let sessionTypeData = {
      upcoming: "upcomingSessions",
      past: "pastSessions",
    };

    let currentSession = sessionTypeData[tab];

    setCurrentTab(tab);

    setTrainerSessionData((prevData) => {
      // console.log(prevData);
      if (prevData[currentSession]?.length > 0) return prevData;
      setDataLoading(true);
      getAllDetails(tab);

      return prevData;
    });
  };

  const handlePagination = () => {
    setPageData((prevPageData) => ({
      ...prevPageData,
      [currentTab]: prevPageData[currentTab] + 1 || 0,
    }));
  };

  useEffect(() => {
    getAllDetails(currentTab, true);
  }, [pageData]);

  return (
    <>
      <div className="outter_user_container">
        <div className="container">
          <div className="inner_user_container ">
            <div className="userSession_heading">
              <h2>My Session</h2>
            </div>
            <div className="US_tabs_wrapper">
              <Tabs defaultTab="upcoming" onChange={handleChange}>
                <TabList>
                  {/* <Tab tabFor="overview">Overview</Tab> */}
                  <Tab tabFor="upcoming">Upcoming</Tab>
                  {/* <Tab tabFor="pass">Motto pass</Tab> */}
                  <Tab tabFor="past">Previous</Tab>
                  {/* <Tab tabFor="ongoing">OnGoing</Tab> */}
                </TabList>

                <div className="tabPanel_outter">
                  <TabPanel tabId="overview">
                    {isDataLoading ? (
                      <CommonPageLoader />
                    ) : (
                      <TabOne
                        datas={trainerSessionData.upcomingSessions}
                        handleSessionStatus={handleSessionStatus}
                        handleCancel={handleCancel}
                        isLoading={isLoading}
                        handlePagination={handlePagination}
                        currentTab={currentTab}
                      />
                    )}
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="upcoming">
                    {isDataLoading ? (
                      <CommonPageLoader />
                    ) : (
                      <TabTwo
                        datas={trainerSessionData.upcomingSessions}
                        handleSessionStatus={handleSessionStatus}
                        handleCancel={handleCancel}
                        handlePagination={handlePagination}
                        pageSize={pageData["upcoming"]}
                        documentSize={totalData["upcoming"]}
                        currentTab={currentTab}
                      />
                    )}
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="pass">
                    <TabThree />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="past">
                    {isDataLoading ? (
                      <CommonPageLoader />
                    ) : (
                      <TabPast
                        tabname={"Previous"}
                        tabData={trainerSessionData.pastSessions}
                        prevData={trainerSessionData.pastSessions}
                        handleSessionStatus={handleSessionStatus}
                        cancelSessionApi={handleCancel}
                        handleChange={() => getAllDetails(currentTab)}
                        updateUserDetails={updateUserDetails}
                        handlePagination={handlePagination}
                        pageSize={pageData["past"]}
                        documentSize={totalData["past"]}
                        currentTab={currentTab}
                      />
                    )}
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="ongoing">
                    <TabPast
                      tabname={"OnGoing"}
                      tabData={trainerSessionData.upcomingSessions}
                      prevData={trainerSessionData.pastSessions}
                      handleSessionStatus={handleSessionStatus}
                      cancelSessionApi={handleCancel}
                      handleChange={() => getAllDetails(currentTab)}
                      updateUserDetails={updateUserDetails}
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
  handlePagination,
  pageSize,
  documentSize,
}) => {
  const [visible, setVisible] = useState([3]);

  const setViewMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  const TotalsizeData = Math.ceil(documentSize / 10);
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
            {datas?.length < documentSize && (
              <button onClick={handlePagination} className="viewMoreButton">
                View all Session <BlueHoverButton />
              </button>
            )}
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

const TabTwo = ({
  datas = [],
  handleSessionStatus,
  handleCancel,
  handlePagination,
  pageSize,
  documentSize,
}) => {
  const [visible, setVisible] = useState([3]);

  const setViewMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  const TotalsizeData = Math.ceil(documentSize / 10);
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
                              <button onClick={() => handleCancel(data.id)}>
                                Cancel
                              </button>
                              {moment(
                                moment
                                  .tz("America/New_York")
                                  .format("YYYY MM DD HH:MM")
                              ).isAfter(
                                moment
                                  .tz(data.sessionStartTime, "America/New_York")
                                  .format("YYYY MM DD HH:MM")
                              ) ? (
                                <button
                                  className="text-primary"
                                  onClick={() =>
                                    handleSessionStatus(data.id, "completed")
                                  }
                                >
                                  Complete
                                </button>
                              ) :  <button
                              className="text-primary"
                              onClick={() =>
                                handleSessionStatus(data.id, "completed")
                              }
                            >
                              Complete
                            </button>}
                              {/* 
                              <button
                                className="text-primary"
                                onClick={() =>
                                  handleSessionStatus(data.id, "completed")
                                }
                              >
                                Complete
                              </button> */}
                            </div>
                          ) : (
                            <div>
                              <p>Completed</p>
                            </div>
                          )}
                          {/* <button
                                  className="text-primary"
                                  onClick={() =>
                                    handleSessionStatus(data.id, "completed")
                                  }
                                >
                                  Complete
                                </button> */}
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })
              ) : (
                <h3 className="my-5 py-5 text-center">No Upcoming Session</h3>
              )}
            </div>

            {datas?.length < documentSize && (
              <button onClick={handlePagination} className="viewMoreButton">
                View all Session <BlueHoverButton />
              </button>
            )}
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
const TabFour = ({ datas = [], handlePagination }) => {
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

const TabPast = ({
  tabname,
  tabData,
  prevData,
  cancelSessionApi,
  invitationApi,
  handleChange = {},
  isDefaultCardPresent,
  handleSessionStatus,
  handlePagination,
  pageSize,
  documentSize,
  currentTab,
  ...restProps
}) => {
  const [visible, setVisible] = useState([3]);
  const [isLoading, setisLoading] = useState(false);
  const setViewMore = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  const handleCancel = (sessionId) => {
    let payload = {
      sessionId,
      sessionStatus: "cancelled",
    };

    setisLoading(true);
    cancelSessionApi(payload)
      .then(() => {
        setisLoading(false);
        handleChange(currentTab);
      })
      .catch(() => setisLoading(false));
  };

  const TotalsizeData = Math.ceil(documentSize / 10);

  // console.log(documentSize);

  return (
    <div className="tabPanel_overview">
      <div className="tabPanel_overview_left">
        <div className="TP_overview_wrapper">
          <h3 style={{ textTransform: "capitalize" }}>{tabname} Sessions</h3>
          <div className="TP_US_overview">
            <div className="TP_US_overview_inner">
              {tabData.length > 0 ? (
                tabData?.map((data, index) => {
                  // console.log(data, "datadata");
                  return (
                    <React.Fragment key={index}>
                      <div className="TP_upcomeSession_overview">
                        <div className="TP_USession_dates">
                          <h4>
                            {data.date}
                            <span>{data.month}</span>
                          </h4>
                        </div>
                        <div className="TP_USession_data">
                          <h2
                            style={{
                              textTransform: "capitalize",
                            }}
                          >
                            {data?.heading}
                          </h2>
                          <div className="TP_USession_data_icons">
                            <h5>
                              <img src={AvailabilityIcon} alt="icon" />
                              {data.avaTime}
                            </h5>
                            <h5>
                              <img src={LocationIcon} alt="icon" />
                              {data.loc}
                            </h5>
                          </div>
                          {tabname !== "Ongoing" && (
                            <div className="TP_USession_data_buttons">
                              {data.sessionStatus !== "completed" ? (
                                <div className="TP_USession_data_buttons">
                                  {/* <button>Reschedule</button> */}

                                  {data.sessionStatus !== "cancelled" ? (
                                    <>
                                      <button
                                        onClick={() => handleCancel(data.id)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="text-primary"
                                        onClick={() =>
                                          handleSessionStatus(
                                            data.id,
                                            "completed"
                                          )
                                        }
                                      >
                                        Complete
                                      </button>
                                    </>
                                  ) : (
                                    <div>
                                      <p className="text-danger text-underline">
                                        Cancelled
                                      </p>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <p>Completed</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                })
              ) : (
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <h4>No Data Found</h4>
                </div>
              )}
            </div>

            {tabData?.length < documentSize && (
              <button onClick={handlePagination} className="viewMoreButton">
                View all Session <BlueHoverButton />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="tabPanel_overview_right">
        <div className="TB_overview_right">
          <div className="TB_overview_row_two">
            <div className="row_two_data">
              <h2>PREVIOUS SESSIONS</h2>
              <div className="row_two_scroll">
                {prevData.length > 0 ? (
                  prevData.map((data, index) => {
                    let userProps = {
                      profilePicture: data?.userDetail?.profilePicture,
                      userName: `${data?.userDetail?.firstName || ""} ${
                        data?.userDetail?.lastName || ""
                      }`,
                    };
                    return (
                      <>
                        <div className="row_previous_data" key={index}>
                          <div className="row_previous_avater ml-2">
                            <UserAvatar {...userProps} className="img-md-2" />
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

const datamonth = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const mapStateToProps = (state) => ({
  sessionData: state.trainerReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerSessionDetailsApi: getTrainerSessionDetails,
      cancelSession,
      updateUserDetails,
    },
    dispatch
  );
};

const TrainerSession = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerSessionFC);

export default TrainerSession;
