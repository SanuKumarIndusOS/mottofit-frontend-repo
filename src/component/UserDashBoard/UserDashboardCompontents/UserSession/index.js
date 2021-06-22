import React, { useState } from "react";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import AvailabilityIcon from "../../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import { Link } from "react-router-dom";
import BlueArrowButton from "../../../common/BlueArrowButton";
import Jenny from "../../../../assets/files/TrainerDashboard/Message/Jenny.png";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";
import { history } from "helpers";
import { useEffect } from "react";
import moment from "moment";
import { userSession, cancelSession, updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";
const UserSessionClass = (props) => {
  const [userData, setUserData] = React.useState({
    upcomingSessions: [],
    pastSessions: [],
    onGoingSessions: [],
  });

  useEffect(() => {
    _userSession();
    window.scrollTo(0, 0);
  }, []);
  const _userSession = () => {
    props
      .userSession()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
                  <TabOne
                    tabname={"Overview"}
                    tabData={userData.upcomingSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    {...props}
                  />
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="upcoming">
                  <TabOne
                    tabname={"Upcoming"}
                    tabData={userData.upcomingSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    {...props}
                  />
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="pass">
                  <TabOne
                    tabname={"Moto Pass"}
                    tabData={userData.pastSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    {...props}
                  />
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="previous">
                  <TabOne
                    tabname={"Previous"}
                    tabData={userData.pastSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    {...props}
                  />
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabOne = ({
  tabname,
  tabData,
  prevData,
  cancelSessionApi,
  handleChange = {},
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
        handleChange();
      })
      .catch(() => setisLoading(false));
  };

  const handleAddFriends = (data) => {
    // console.log(data);

    let trainingType = "";

    if (data.trainingType === "social") {
      trainingType = "SOCIAL SESSION";
    } else if (data.trainingType === "class") {
      trainingType = "CREATE A CLASS";
    } else if (data.trainingType === "1on1") {
      trainingType = "1 ON 1 TRAINING";
    }

    let sessionData = {
      location: { label: data?.city || "", value: data?.city || "" },
      trainingVenue: {
        label:
          data.venue === "clientLocation"
            ? "Your Location"
            : "Trainer's Location",
        value: data?.venue || "",
      },
      preferedTrainingMode: data?.sessionType || "",
      price: data.price || "",
      sessionType: trainingType || "",
      trainingType: {
        label: data?.activity || "",
        value: data?.activity || "",
      },
    };

    let bookingData = {
      start_slot: data.sessionStartTime,
      end_slot: data.sessionEndTime,
      date: data.sessionDate,
    };

    let selectedTrainerData = {
      ...data.trainerDetail,
    };
    let reduxData = {
      bookingData,
      sessionData,
      selectedTrainerData,
      submittedData: { ...data },
    };

    restProps?.updateUserDetails(reduxData);

    // console.log(reduxData);

    history.push({
      pathname: "/user/with-friends",
    });
  };

  return (
    <div className="tabPanel_overview">
      <div className="tabPanel_overview_left">
        <div className="TP_overview_wrapper">
          <h3 style={{ textTransform: "capitalize" }}>{tabname} Sessions</h3>
          <div className="TP_US_overview">
            <div className="TP_US_overview_inner">
              {tabData.slice(0, visible).map((data, index) => {
                // console.log(data, "datadata");
                return (
                  <React.Fragment key={index}>
                    <div className="TP_upcomeSession_overview">
                      <div className="TP_USession_dates">
                        <h4>
                          {data.sessionDate.substr(8, 2)}
                          <span>
                            {datamonth[data.sessionDate.substr(5, 2)]}
                          </span>
                        </h4>
                      </div>
                      <div className="TP_USession_data">
                        <h2
                          style={{
                            textTransform: "capitalize",
                          }}
                        >
                          {data.activity}&nbsp;
                          <span
                            style={{
                              textTransform: "lowerCase",
                            }}
                          >
                            with
                          </span>{" "}
                          &nbsp;
                          <h2
                            style={{
                              textTransform: "capitalize",
                            }}
                          >
                            {data.trainerDetail.firstName}
                          </h2>
                        </h2>
                        <div className="TP_USession_data_icons">
                          <h5>
                            <img src={AvailabilityIcon} alt="icon" />
                            {getFormatDate(data.sessionStartTime, "LT", true)}
                          </h5>
                          <h5>
                            <img src={LocationIcon} alt="icon" />
                            {Data[0].loc}
                          </h5>
                        </div>
                        <div className="TP_USession_data_buttons">
                          <button>Reschedule</button>
                          {data.sessionStatus !== "cancelled" ? (
                            <button
                              disabled={isLoading}
                              onClick={() => handleCancel(data.id)}
                            >
                              Cancel
                            </button>
                          ) : (
                            <button className="text-danger" disabled={true}>
                              Cancelled
                            </button>
                          )}

                          <div className="button_boarder">
                            <button onClick={() => handleAddFriends(data)}>
                              Add Friends{" "}
                            </button>
                            <img src={ArrowNext} alt="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                );
              })}
            </div>
            <button onClick={setViewMore} className="viewMoreButton">
              View all Session <BlueHoverButton />
            </button>
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
                {prevData.map((data, index) => {
                  return (
                    <>
                      <div className="row_previous_data" key={index}>
                        <div className="row_previous_avater">
                          <img src={Jenny} alt="profile" />
                        </div>
                        <div className="row_previous_header">
                          <h2
                            className="d-flex flex-wrap"
                            style={{
                              textTransform: "capitalize",
                            }}
                          >
                            {data.activity}&nbsp;
                            <span
                              style={{
                                textTransform: "lowerCase",
                              }}
                            >
                              with
                            </span>{" "}
                            &nbsp;
                            <h2
                              className="d-flex flex-wrap"
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              {data.trainerDetail.firstName}
                            </h2>
                          </h2>
                          {/* <h2>{`${data.activity} with ${data.trainerDetail["firstName"]}`}</h2> */}
                          <p>{`${data.sessionDate.substr(8, 2)} ${
                            datamonth[data.sessionDate.substr(5, 2)]
                          } ${data.sessionDate.substr(0, 4)}`}</p>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Data = [
  {
    date: "14",
    month: "Feb",
    heading: "Strength & HIIT with John Doe",
    imgAva: AvailabilityIcon,
    avaTime: "  5:00 PM PST",
    imgLoc: LocationIcon,
    loc: "Trainer GYM",
    previousImg: Jenny,
    prevHeading: "Yoga with Kane",
    prevDate: "02 May 2021",
  },
  {
    date: "25",
    month: "May",
    heading: "Yoga with Kane",
    imgAva: AvailabilityIcon,
    avaTime: "  5:00 PM PST",
    imgLoc: LocationIcon,
    loc: "Trainer GYM",
    previousImg: Jenny,
    prevHeading: "Yoga with John Doe",
    prevDate: "02 May 2021",
  },
  {
    date: "20",
    month: "Apr",
    heading: "Boxing with John Doe",
    imgAva: AvailabilityIcon,
    avaTime: "  5:00 PM PST",
    imgLoc: LocationIcon,
    loc: "Trainer GYM",
    previousImg: Jenny,
    prevHeading: "Yoga with Kane ",
    prevDate: "02 May 2021",
  },
  {
    date: "20",
    month: "Apr",
    heading: "Boxing with John Doe",
    imgAva: AvailabilityIcon,
    avaTime: "  5:00 PM PST",
    imgLoc: LocationIcon,
    loc: "Trainer GYM",
    previousImg: Jenny,
    prevHeading: "Yoga with Ananaya ",
    prevDate: "02 May 2021",
  },
  {
    date: "20",
    month: "Apr",
    heading: "Boxing with John Doe",
    imgAva: AvailabilityIcon,
    avaTime: "  5:00 PM PST",
    imgLoc: LocationIcon,
    loc: "Trainer GYM",
    previousImg: Jenny,
    prevHeading: "Yoga with Kane ",
    prevDate: "02 May 2021",
  },
];

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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userSession,
      cancelSession,
      updateUserDetails,
    },
    dispatch
  );
};

const UserSession = connect(null, mapDispatchToProps)(UserSessionClass);

export default UserSession;
