import React from "react";
import "./style.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Link, useParams } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
// import UserScheduler from "../../UserScheduler/Scheduler";
//import UserScheduler from "component/TrainerProfile/UserScheduler/UserScheduler";
import UserSchedulerScroll from "component/common/UserSchedulerScroll/UserScheduler";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { getFormatDate } from "service/helperFunctions";
// import { history } from "helpers/index";
import { logout } from "service/utilities";
import { UserAvatar } from "../../common/UserAvatar";
import { getTrainerDetail } from "action/adminAct";
import { useHistory } from "react-router-dom";
import { Toast } from "service/toast";
import { requestTrainerMessageAct } from "action/trainerAct";
import BlueHoverButton from "component/common/BlueArrowButton";

const UserEventSchedularFC = (props) => {
  const [trainerName, setTrainerName] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [trainerstartSlot, settrainerstartSlot] = React.useState();
  const [trainerEndSlot, settrainerEndSlot] = React.useState();
  const [userSelectedData, setUserSelectedData] = React.useState({});
  const [DateSlot, setDateSlot] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const history = useHistory();

  const { id } = useParams();

  React.useEffect(() => {
    // if (!localStorage.getItem("token")) {
    //   let reduxData = {
    //     isModelOpen: true,
    //   };
    //   props.updateUserDetails(reduxData);
    //   return history.push(
    //     `/welcome?${encodeURIComponent("nextPath=/user/scheduler")}`
    //   );
    // }

    // if (!location["trainerId"]) return history.push("/trainer/find");

    console.log(props.sessionData, "up");

    fetchViewTrainer();

    let reduxData = {
      bookingData: {},
    };

    props.updateUserDetails(reduxData);
  }, []);

  function fetchViewTrainer() {
    props.getTrainerDetail(id, false).then((data) => {
      let reduxData = {
        selectedTrainerData: {
          trainerId: id,
          trainerData: data,
        },
      };
      props.updateUserDetails(reduxData);

      setTrainerName(data);
      // setTrainerName(props.selectedTrainerData);

      props?.query?.trainingType && setActivity(props.query.trainingType);

      if (props.bookingData) {
        props.bookingData?.start_slot &&
          settrainerstartSlot(props.bookingData?.start_slot);
        props.bookingData?.end_slot &&
          settrainerEndSlot(props.bookingData?.end_slot);
        props.bookingData?.date && setDateSlot(props.bookingData?.date);

        let tempData = {
          startDate: getFormatDate(
            props.bookingData?.start_slot,
            "hh:mm AYYYY-MM-DD"
          ),
          endDate: getFormatDate(
            props.bookingData?.end_slot,
            "hh:mm AYYYY-MM-DD"
          ),
        };

        setUserSelectedData(tempData);
      }
    });
  }

  const handleRequestTrainer = () => {
    Toast({
      type: "success",
      message:
        "Login or create an account to message trainer requesting time and date of your choice",
    });
    const userId = localStorage.getItem("user-id");

    // CHECK WHETHER USER IS LOGGED IN,IF NOT REDURECT TO LOGIN PAGE

    // let callbackFunction = handleRequestTrainer;

    let reduxData = {
      nextAction: requestTrainerAct,
    };

    let redirectURL = `/mobile/login?${encodeURIComponent(
      `nextpath=/users/dashboard/message/requested`
    )}&requestSession=true`;

    if (!userId) {
      window.scrollTo(0, 0);
      updateUserDetails(reduxData);

      return history.push(redirectURL);
    }

    requestTrainerAct();
  };

  const requestTrainerAct = () => {
    const userId = localStorage.getItem("user-id");
    return new Promise((resolve, reject) => {
      let payload = {
        channelType: "directMessageTrainer",
        trainerId: id,
        userId: [userId],
      };

      setLoading(true);
      props
        .requestTrainerMessageApi(payload)
        .then((data) => {
          const { channelSid } = data || {};

          let redirectURL = `/users/dashboard/message/requested`;

          if (channelSid)
            redirectURL = `${redirectURL}?channelId=${channelSid}`;

          console.log(redirectURL);

          setLoading(false);
          Toast({ type: "success", message: "Success" });
          history.push(redirectURL);
          // resolve();
        })
        .catch((err) => {
          setLoading(false);
          Toast({ type: "error", message: err.message || "Error" });
          reject(err);
        });
    });
  };
  const callbackFunction = (ts, tss, date) => {
    console.log(ts, tss, date, "Callback");
    settrainerstartSlot(ts);
    settrainerEndSlot(tss);
    setDateSlot(date);
  };

  const location = props.selectedTrainerData;

  const handleContinue = () => {
    // let slotDetails = {

    // };

    let reduxData = {
      bookingData: {
        Name: trainerName,
        start_slot: trainerstartSlot,
        end_slot: trainerEndSlot,
        date: DateSlot,
        activity: activity,
        id: location["trainerId"],
      },
    };

    props.updateUserDetails(reduxData);

    if (!localStorage.getItem("token")) {
      // history.push(`/mobile/login`);
      // console.log(`?${encodeURIComponent("nextpath=/user/payment")}`);
      // history.push(`?nextpath=/user/payment`);
      history.push({
        pathname: "/mobile/login",
        search: "?nextpath=/user/payment",
      });
      setTimeout(() => {
        console.log("called history");
        history.goBack();
      }, 100);
    } else {
      history.push("/user/payment");
    }
  };

  let userData = {
    profilePicture:
      location?.trainerData?.profilePicture || location?.profilePicture,
    userName: `${trainerName?.firstName || ""}${trainerName?.lastName || ""}`,
  };

  // const callbackFunction = (ts, tss, date) => {
  //   console.log(ts, tss, date, "oop");
  //   settrainerstartSlot(ts);
  //   settrainerEndSlot(tss);
  //   setDateSlot(date);
  //   setDisableBooking(false);
  // };

  return (
    <>
      <div className="event_outter_container">
        <div className="container">
          <div className="event_inner_container">
            <div className="link_wrapper">
              <img src={ArrowBack} alt="icon" />
              <div className="inner_links">
                <Link to="/trainer/find">Choose another Trainer</Link>
                <div></div>
              </div>
            </div>
            <div className="event_wrapper">
              <div className="event_wrapper_inner">
                <div className="event_header">
                  <h2>Schedule your Training Time</h2>
                  {/* <p>
                    Please select a preferable date and time slot to schedule
                    your training session. All the listed timings are in your
                    local timezone (GMT + 5:30)
                  </p> */}
                </div>
                <div className="user_profile_details">
                  <UserAvatar {...userData} className="img-lg" />
                  <div className="user_content d-flex">
                    <h2
                      style={{
                        textTransform: "capitalize",
                        fontFamily: "Cormorant Garamond",
                      }}
                      className="mb-0"
                    >
                      {trainerName?.firstName}
                    </h2>
                    <p
                      style={{
                        color: "#898989",
                        fontFamily: "Montserrat",
                        textTransform: "uppercase",
                      }}
                    >
                      {activity?.value}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "#696969", textAlign: "center" }}>

                    Please select a date and training time in the calendar below.

                    If you don't see an available time, message your trainer to request a time
                    that works for you!
                    {/* Calender is not fully representative of{" "}
                    {trainerName?.firstName} availability, don't be discouraged
                    if a day & time isn't open to book below. Just request and
                    the [trainer first name] will be able to make a day and time
                    that you want work. Super Easy, click below! */}
                  </p>

                  <br></br>

                  <div style={{display:"flex", justifyContent:"center"}}>
                    {isLoading ? (
                      "Loading..."
                    ) : (
                      <div
                        className={isLoading ? "d-none" : "request_a_time_part"}
                      >
                        <button
                          className="book_session_btn d-flex align-items-center"
                          onClick={handleRequestTrainer}
                          style={{ width: "100%" }}
                          style={{ border: "none", background: "none" }}
                        >
                          {`Message ${trainerName.firstName} `}
                          <BlueHoverButton />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="container"> */}
                {/* <UserScheduler
                  id={
                    !location["trainerId"]
                      ? props.selectedTrainerData["id"]
                      : location["trainerId"]
                  }
                  parentCallback={callbackFunction}
                  startTime={userSelectedData?.startDate}
                  endTime={userSelectedData?.endDate}
                  updateUserDetails={props.updateUserDetails}
                  selectedTimes={props.selectedTimes}
                /> */}
                <UserSchedulerScroll
                  id={id}
                  tableId={"trainer-profile-table"}
                  parentCallback={callbackFunction}
                  updateUserDetails={updateUserDetails}
                />
                <BottomSection trainerName={trainerName} />
                {/* </div> */}

                <Link
                  className={`submit_user ${
                    DateSlot !== "" ? "" : "disable-btn"
                  }`}
                  onClick={handleContinue}
                  style={{ marginBottom: "500px" }}
                >
                  CONTINUE <ArrowHoverBlacked />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BottomSection = ({ trainerName }) => {
  return (
    <div className="schedular_slots_user">
      <div className="items_slots_user">
        <div className="item_slot1_user">
          <div className="indicator"></div>
          <h5>AVAILABLE</h5>
        </div>
        <div className="item_slot2_user">
          <div className="indicator2"></div>
          <h5>UNAVAILABLE</h5>{" "}
        </div>
        <div className="item_slot3_user">
          <div className="indicator3"></div>
          <h5>BOOKED SLOT</h5>{" "}
        </div>
        <div className="item_slot5_user">
          <Link to={`/trainer/profile/${trainerName?.id}`}>
            {/* Learn more about {trainerName?.firstName} */}\
            Trainer's Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
  selectedTrainerData: state.userReducer.selectedTrainerData,
  bookingData: state.userReducer.bookingData,
  selectedTimes: state.userReducer.selectedTimes,
  query: state.trainerReducer.query,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
      getTrainerDetail,
      requestTrainerMessageApi: requestTrainerMessageAct,
    },
    dispatch
  );
};

const UserEventSchedular = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEventSchedularFC);

export default UserEventSchedular;
