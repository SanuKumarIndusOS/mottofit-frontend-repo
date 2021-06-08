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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";

const TrainerSessionFC = ({ sessionData, getTrainerSessionDetailsApi }) => {
  const [trainerSessionData, setTrainerSessionData] = useState({
    upcomingSessions: [],
    pastSessions: [],
    onGoingSessions: [],
  });
  useEffect(() => {
    getTrainerSessionDetailsApi().then((data) => {
      const tempSessionData = {};
      Object.keys(data).forEach((sessionKey) => {
        tempSessionData[sessionKey] = data[sessionKey].map(
          ({ title, venue, sessionDate, sessionStartTime }) => ({
            date: getFormatDate(sessionDate, "D"),
            month: getFormatDate(sessionDate, "MMM"),
            heading: title,
            imgAva: AvailabilityIcon,
            avaTime: `${getFormatDate(sessionStartTime, "LT", true)} PST`,
            imgLoc: LocationIcon,
            loc: venue,
            previousImg: Jenny,
            prevHeading: "Yoga with Kane",
            prevDate: getFormatDate(sessionData, "DD MMMM YYYY"),
          })
        );
      });

      setTrainerSessionData(tempSessionData);
    });
  }, []);

  return (
    <>
      <div className="outter_user_container">
        <div className="container">
          <div className="inner_user_container ">
            <div className="userSession_heading">
              <h2>My Session</h2>
            </div>
            <div className="US_tabs_wrapper">
              <Tabs defaultTab="overview">
                <TabList>
                  <Tab tabFor="overview">Overview</Tab>
                  <Tab tabFor="upcoming">Upcoming</Tab>
                  <Tab tabFor="pass">Motto pass</Tab>
                  <Tab tabFor="previous">Previous</Tab>
                </TabList>
                <div className="tabPanel_outter">
                  <TabPanel tabId="overview">
                    <TabOne datas={trainerSessionData.upcomingSessions} />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="upcoming">
                    <TabTwo datas={trainerSessionData.upcomingSessions} />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="pass">
                    <TabThree />
                  </TabPanel>
                </div>
                <div className="tabPanel_outter">
                  <TabPanel tabId="previous">
                    <TabFour datas={trainerSessionData.pastSessions} />
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

const TabOne = ({ datas = [] }) => {
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
                          <div className="TP_USession_data_buttons">
                            <button>Reschedule</button>
                            <button>Cancel</button>
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

const TabTwo = ({ datas = [] }) => {
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
                          <div className="TP_USession_data_buttons">
                            <button>Reschedule</button>
                            <button>Cancel</button>
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
    },
    dispatch
  );
};

const TrainerSession = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerSessionFC);

export default TrainerSession;
