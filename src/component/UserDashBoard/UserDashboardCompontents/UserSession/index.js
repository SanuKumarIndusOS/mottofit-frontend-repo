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
import {
  userSession,
  cancelSession,
  updateUserDetails,
  invitationSession,
  getAllMottoPassesAct,
} from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";
import { Toast } from "../../../../service/toast";
import { api } from "service/api";
import { PaymentApi } from "service/apiVariables";
import { UserAvatar } from "component/common/UserAvatar";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { useLocation } from "react-router-dom";
import { MottoPassSection } from "component/MottoPass";
const UserSessionClass = (props) => {
  const [userData, setUserData] = React.useState({
    upcomingSessions: [],
    pastSessions: [],
    onGoingSessions: [],
    invitedSessions: [],
  });

  const [mottoPassData, setMottoPassData] = useState([]);

  const [pageData, setPageData] = useState({
    upcoming: 0,
    past: 0,
    invited: 0,
    pass: 0,
  });
  const [totalData, setTotalData] = useState({
    upcoming: 0,
    past: 0,
    invited: 0,
    pass: 0,
  });

  const [isDefaultCardPresent, setDefaultCard] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("upcoming");
  let location = useLocation();

  useEffect(() => {
    getUserPaymentDetails();
    window.scrollTo(0, 0);
    if (location.state?.from === "invite") {
      _userSession("invited");
    }
  }, []);
  const _userSession = (type, isPagination = false) => {
    if (type === "pass") return getAllPasses();

    props
      .userSession(type, pageData[currentTab])
      .then(({ data: tempData, documentCount: tempDocumentCount }) => {
        let data = tempData || [];
        let documentCount = tempDocumentCount || 0;
        let sessionTypeData = {
          invited: "invitedSessions",
          upcoming: "upcomingSessions",
          past: "pastSessions",
        };
        setTotalData((prevData) => ({ ...prevData, [type]: documentCount }));

        setUserData((prevData) => {
          // console.log(prevData.invitedSessions);
          let replaceData = [...prevData[sessionTypeData[type]], ...data];
          return {
            ...prevData,
            [sessionTypeData[type]]: !isPagination ? [...data] : replaceData,
          };
        });

        setLoading(false);
      })
      .catch((error) => {
        Toast({ type: "error", message: error.message || "Error" });
        setLoading(false);
      });
  };

  const getUserPaymentDetails = () => {
    const { getPaymentMethods } = PaymentApi;

    api({ ...getPaymentMethods }).then(({ data }) => {
      const { default: defaultCard } = data[0] || {};

      setDefaultCard(defaultCard);
    });
  };

  const handleChange = (tab, data) => {
    let sessionTypeData = {
      invited: "invitedSessions",
      upcoming: "upcomingSessions",
      past: "pastSessions",
    };

    let currentSession = sessionTypeData[tab];

    // console.log(tab);

    setCurrentTab(tab);

    setUserData((prevData) => {
      // console.log();

      if (prevData[currentSession]?.length > 0) {
        setLoading(false);
        // console.log("Hii");

        return prevData;
      }
      setLoading(true);
      console.log(tab);

      _userSession(tab);

      return prevData;
    });
  };

  const handlePagination = () => {
    setPageData((prevPageData) => ({
      ...prevPageData,
      [currentTab]: prevPageData[currentTab] + 1 || 0,
    }));
  };

  const getAllPasses = async () => {
    const passData = await props.getAllMottoPassesAct();

    // console.log(passData);

    setMottoPassData(passData);
  };

  useEffect(() => {
    _userSession(currentTab, true);
    // console.log(userData.invitedSessions);
  }, [pageData]);

  return (
    <div className="outter_user_container">
      <div className="container">
        <div className="inner_user_container ">
          <div className="userSession_heading">
            <h2>My Session</h2>
          </div>
          <div className="US_tabs_wrapper">
            <Tabs
              defaultTab={
                location.state?.from === "invite" ? "invited" : "upcoming"
              }
              onChange={(tab) => {
                handleChange(tab, userData);
              }}
            >
              <TabList>
                <Tab tabFor="upcoming">Upcoming</Tab>
                <Tab tabFor="invited">Invited</Tab>

                <Tab tabFor="pass">Motto pass</Tab>
                <Tab tabFor="past">Previous</Tab>
                {/* <Tab tabFor="ongoing">Ongoing</Tab> */}
              </TabList>
              <div className="tabPanel_outter">
                <TabPanel tabId="invited">
                  {isLoading ? (
                    <CommonPageLoader />
                  ) : (
                    <TabOne
                      tabname={"Invited"}
                      tabData={userData.invitedSessions}
                      prevData={userData.pastSessions}
                      cancelSessionApi={props.cancelSession}
                      invitationApi={props.invitationSession}
                      handleChange={() => _userSession("invited")}
                      isDefaultCardPresent={isDefaultCardPresent}
                      handlePagination={handlePagination}
                      pageSize={pageData["invited"]}
                      documentSize={totalData["invited"]}
                      {...props}
                    />
                  )}
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="upcoming">
                  {isLoading ? (
                    <CommonPageLoader />
                  ) : (
                    <TabOne
                      tabname={"Upcoming"}
                      tabData={userData.upcomingSessions}
                      prevData={userData.pastSessions}
                      cancelSessionApi={props.cancelSession}
                      handleChange={() => _userSession("upcoming")}
                      handlePagination={handlePagination}
                      pageSize={pageData["upcoming"]}
                      documentSize={totalData["upcoming"]}
                      {...props}
                    />
                  )}
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="pass">
                  <MottoPassSection
                    handlePagination={handlePagination}
                    mottoPassData={mottoPassData}
                  />
                  {/* <TabOne
                    tabname={"Moto Pass"}
                    tabData={userData.pastSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    {...props}
                  /> */}
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="past">
                  {isLoading ? (
                    <CommonPageLoader />
                  ) : (
                    <TabOne
                      tabname={"Previous"}
                      tabData={userData.pastSessions}
                      prevData={userData.pastSessions}
                      cancelSessionApi={props.cancelSession}
                      handleChange={() => _userSession("past")}
                      handlePagination={handlePagination}
                      pageSize={pageData["past"]}
                      documentSize={totalData["past"]}
                      {...props}
                    />
                  )}
                </TabPanel>
              </div>
              <div className="tabPanel_outter">
                <TabPanel tabId="ongoing">
                  <TabOne
                    tabname={"OnGoing"}
                    tabData={userData.onGoingSessions}
                    prevData={userData.pastSessions}
                    cancelSessionApi={props.cancelSession}
                    handleChange={() => _userSession()}
                    handlePagination={handlePagination}
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
  invitationApi,
  handleChange = {},
  isDefaultCardPresent,
  handlePagination,
  pageSize,
  documentSize,
  ...restProps
}) => {
  const [visible, setVisible] = useState([10]);
  const [isLoading, setisLoading] = useState(false);
  const setViewMore = () => {
    // setVisible((prevValue) => prevValue + 1);
  };

  const handleCancel = (sessionId) => {
    let payload = {
      sessionId,
      sessionStatus: "cancelled",
    };
    setisLoading(true);
    console.log(sessionId);

    // Toast({ type: "success", message: "success" });

    cancelSessionApi(payload)
      .then((data) => {
        setisLoading(false);
        // console.log(message);

        Toast({ type: "success", message: "Session cancelled" || "Session cancelled" });
        handleChange();
      })
      .catch((err) => {
        setisLoading(false);

        console.log(err);
      });
  };

  const handleInvitation = (sessionId, action, paidByUser) => {
    let payload = {
      sessionId,
      acceptance: action,
    };
    setisLoading(true);

    if (!isDefaultCardPresent && action && !paidByUser) {
      let reduxData = {
        currentAcceptedInvitationId: sessionId,
      };

      restProps?.updateUserDetails(reduxData);
      history.push({ pathname: "/users/dashboard/settings/profile" });
      return Toast({
        type: "info",
        message: "User needs to add default card to proceed futher",
      });
    }

    invitationApi(payload)
      .then(() => {
        setisLoading(false);
        handleChange();
        Toast({ type: "success", message: "success" });
      })
      .catch((err) => {
        setisLoading(false);
        Toast({ type: "error", message: err.message || "Error" });
      });
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

  const handleTrainerRoute = (trainerId) => {
    let urlPath = "trainer/profile/";

    let host = `${window.location.host}`;

    let protocol = `${window.location.protocol}`;

    let fullURLPath = `${protocol}//${host}/${urlPath}${trainerId}`;

    trainerId && window.open(fullURLPath);
  };

  // const TotalsizeData = Math.ceil(documentSize / 10);

  return (
    <div className="tabPanel_overview">
      <div className="tabPanel_overview_left">
        <div className="TP_overview_wrapper">
          <h3 style={{ textTransform: "capitalize" }}>{tabname} Sessions</h3>
          <div className="TP_US_overview">
            <div className="TP_US_overview_inner">
              {tabData.length > 0 ? (
                tabData?.map((data, index) => {
                  //  console.log(data, "datadata");

                  const isSessionExpired = moment(
                    moment.tz("America/New_York").format("YYYY MM DD HH:MM")
                  ).isAfter(
                    moment
                      .tz(data.sessionStartTime, "America/New_York")
                      .format("YYYY MM DD HH:MM")
                  );

                  const isMottoPassAvailed =
                    tabname === "Upcoming" &&
                    parseInt(data.mottoPassAvailed) === 1;

                  let mottoPassData = {};

                  let mottoPassExpiryDate = "";

                  let isMottoPassExpired = false;

                  let totalMottoPass = "";

                  let noOfMottoPassesUsed = "";

                  if (isMottoPassAvailed && data.mottoPass) {
                    mottoPassData = data.mottoPass;

                    isMottoPassExpired = moment(
                      moment.tz("America/New_York").format("YYYY MM DD")
                    ).isAfter(
                      moment
                        .tz(data?.mottoPass?.expiresIn, "America/New_York")
                        .format("YYYY MM DD")
                    );

                    mottoPassExpiryDate = moment(
                      data?.mottoPass?.expiresIn
                    ).format("MMMM Do, YYYY");

                    totalMottoPass = parseInt(mottoPassData?.totalPassCount);

                    noOfMottoPassesUsed = Math.abs(
                      totalMottoPass - parseInt(mottoPassData?.remains)
                    );
                  }

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
                            {data?.activity}&nbsp;
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
                              {data?.trainerDetail?.firstName}
                            </h2>
                          </h2>
                          <div className="TP_USession_data_icons">
                            <h5>
                              <img src={AvailabilityIcon} alt="icon" />
                              {getFormatDate(data.sessionStartTime, "LT", true)}
                            </h5>
                            <h5>
                              <img src={LocationIcon} alt="icon" />
                              {(
                                data?.venue.charAt(0).toUpperCase() +
                                data?.venue.slice(1)
                              )
                                .replace(/([A-Z])/g, " $1")
                                .trim()}
                            </h5>
                          </div>
                          {tabname !== "OnGoing" && (
                            <div className="TP_USession_data_buttons">
                              {tabname === "Invited" ? (
                                <>
                                  {isSessionExpired ? (
                                    <div>Expired Session</div>
                                  ) : (
                                    <>
                                      {data.acceptance ? (
                                        <>
                                          <span className="text-black mr-4">
                                            {/* {data.sessionStatus === "cancelled" ? (<div style={{color:"red"}}><u>Cancelled</u></div>):<div> Invited session</div>} */}
                                            {data.sessionStatus ===
                                            "completed" ? (
                                              <div style={{ color: "red" }}>
                                                <u>Completed</u>
                                              </div>
                                            ) : data.sessionStatus ===
                                              "cancelled" ? (
                                              <div style={{ color: "red" }}>
                                                <u>Cancelled</u>
                                              </div>
                                            ) : (
                                              <div> Invited session</div>
                                            )}
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          {data.sessionStatus !==
                                          "cancelled" ? (
                                            <>
                                              {tabname !== "Previous" ? (
                                                <>
                                                  <button
                                                    disabled={isLoading}
                                                    onClick={() =>
                                                      handleInvitation(
                                                        data.id,
                                                        false
                                                      )
                                                    }
                                                  >
                                                    Decline
                                                  </button>
                                                  <button
                                                    disabled={isLoading}
                                                    onClick={() =>
                                                      handleInvitation(
                                                        data.id,
                                                        true,
                                                        data.paidByUser
                                                      )
                                                    }
                                                    className="text-success"
                                                  >
                                                    Accept
                                                  </button>
                                                </>
                                              ) : null}
                                            </>
                                          ) : data.sessionStatus ===
                                            "completed" ? (
                                            <div style={{ color: "red" }}>
                                              <u>Completed</u>
                                            </div>
                                          ) : data.sessionStatus ===
                                            "cancelled" ? (
                                            <div style={{ color: "red" }}>
                                              <u>Cancelled</u>
                                            </div>
                                          ) : (
                                            <div> Invited session</div>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}

                                  <button
                                    disabled={isLoading}
                                    onClick={() =>
                                      handleTrainerRoute(data.trainerId)
                                    }
                                    className="text-primary"
                                  >
                                    View Trainer
                                  </button>
                                </>
                              ) : (
                                <>
                                  {data.sessionStatus === "completed" ? (
                                    <button
                                      className="text-primary"
                                      disabled={true}
                                    >
                                      Completed
                                    </button>
                                  ) : (
                                    <>
                                      {!data.asFriend ? (
                                        <>
                                          {data.sessionStatus !==
                                          "cancelled" ? (
                                            <>
                                              {tabname !== "Previous" ? (
                                                <button
                                                  disabled={isLoading}
                                                  onClick={() =>
                                                    handleCancel(data.id)
                                                  }
                                                >
                                                  Cancel
                                                </button>
                                              ) : (
                                                ""
                                              )}
                                            </>
                                          ) : (
                                            <button
                                              className="text-danger"
                                              disabled={true}
                                            >
                                              Cancelled
                                            </button>
                                          )}
                                        </>
                                      ) : (
                                        <div className="d-flex align-items-center">
                                          <span className="text-black mr-4">
                                            Invited session
                                          </span>
                                          <button
                                            disabled={isLoading}
                                            onClick={() =>
                                              handleTrainerRoute(data.trainerId)
                                            }
                                            className="text-primary"
                                          >
                                            View Trainer
                                          </button>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </>
                              )}

                              {/* </>
                          )} */}

                              {data?.participantsCount === 0
                                ? data.trainingType !== "1on1" &&
                                  !data.asFriend &&
                                  tabname !== "Previous" && (
                                    <div className="button_boarder">
                                      <button
                                        onClick={() => handleAddFriends(data)}
                                      >
                                        Add Friends{" "}
                                      </button>
                                      <img src={ArrowNext} alt="icon" />
                                    </div>
                                  )
                                : null}
                            </div>
                          )}
                        </div>
                      </div>

                      {isMottoPassAvailed && (
                        <div className="motto-pass-section d-flex">
                          <span className="motto-pass-ribbon mr-3">
                            Motto Pass
                          </span>
                          <div className="motto-pass-details d-flex align-items-center w-100">
                            {totalMottoPass && noOfMottoPassesUsed && (
                              <div className="session-count">{`Session ${noOfMottoPassesUsed} of ${totalMottoPass}`}</div>
                            )}

                            <div className="session-location-details d-flex align-items-center ml-3 mr-3">
                              {mottoPassData?.passType && (
                                <div className="session-location mr-3 d-flex align-items-center text-capitalize">
                                  <img
                                    src={LocationIcon}
                                    alt="icon"
                                    className="mr-1"
                                  />
                                  <p className="mb-0">
                                    {mottoPassData?.passType}
                                  </p>
                                </div>
                              )}
                              {mottoPassExpiryDate && (
                                <div className="motto-pass-valid-duration d-flex align-items-center">
                                  <img
                                    src={AvailabilityIcon}
                                    alt="icon"
                                    className="mr-1"
                                  />
                                  <p className="mb-0">
                                    {`${
                                      !isMottoPassExpired
                                        ? `Valid until ${mottoPassExpiryDate}`
                                        : `Expired on ${mottoPassExpiryDate}`
                                    }`}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      <hr />
                    </React.Fragment>
                  );
                })
              ) : (
                <h3 className="my-5 py-5 text-center">{`No  ${tabname} Session`}</h3>
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
                {prevData?.map((data, index) => {
                  let userProps = {
                    profilePicture: data?.trainerDetail?.profilePicture,
                    userName: `${data?.trainerDetail?.firstName || ""} ${
                      data?.trainerDetail?.lastName || ""
                    }`,
                  };
                  return (
                    <>
                      <div className="row_previous_data" key={index}>
                        <div className="row_previous_avater ml-2">
                          <UserAvatar {...userProps} className="img-md-2" />
                          {/* <img src={Jenny} alt="profile" /> */}
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
                              {data?.trainerDetail?.firstName}
                            </h2>
                          </h2>

                          <p>{`${data?.sessionDate?.substr(8, 2)} ${
                            datamonth[data?.sessionDate?.substr(5, 2)]
                          } ${data?.sessionDate?.substr(0, 4)}`}</p>
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
      invitationSession,
      updateUserDetails,
      getAllMottoPassesAct,
    },
    dispatch
  );
};

const UserSession = connect(null, mapDispatchToProps)(UserSessionClass);

export default UserSession;
