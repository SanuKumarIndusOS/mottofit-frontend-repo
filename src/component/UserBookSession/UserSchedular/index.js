import React from "react";
import "./style.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
// import UserScheduler from "../../UserScheduler/Scheduler";
import UserScheduler from "component/TrainerProfile/UserScheduler/UserScheduler";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { getFormatDate } from "service/helperFunctions";
import { history } from "helpers/index";

const UserEventSchedularFC = (props) => {
  const [trainerName, setTrainerName] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [trainerstartSlot, settrainerstartSlot] = React.useState();
  const [trainerEndSlot, settrainerEndSlot] = React.useState();
  const [userSelectedData, setUserSelectedData] = React.useState({});
  const [DateSlot, setDateSlot] = React.useState();
  console.log(trainerName, "trainerName");

  React.useEffect(() => {
    if (!location["trainerId"]) return history.push("/trainer/find");

    setTrainerName(location["trainerData"]);

    console.log(location["trainerData"]);

    console.log(localStorage.getItem("trainertime"), "ee");

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

    // let selectedStartTime = getFormatDate(
    //   props.bookingData?.start_slot,
    //   "hh:mm AYYYY-MM-DD"
    // );
    // let selectedEndTime = "";
  }, []);

  const callbackFunction = (ts, tss, date) => {
    console.log(ts, tss, "Callback");
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

    console.log(reduxData);

    props.updateUserDetails(reduxData);
  };

  console.log(location);
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
                  <p>
                    Please select a preferable date and time slot to schedule
                    your training session. All the listed timings are in your
                    local timezone (GMT + 5:30)
                  </p>
                </div>
                <div className="user_profile_details">
                  {/* {trainerName &&
                                    trainerName.profilePicture ? (
                                        <img
                                            src={trainerName.profilePicture}
                                            alt="profile"
                                            style={{ objectFit: "cover" }}
                                        />
                                    ) : (
                                        "dj"
                                    )} */}
                  <img
                    src={Profile}
                    alt="profile"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="user_content">
                    <h2
                      style={{
                        textTransform: "capitalize",
                        fontFamily: "Cormorant Garamond",
                      }}
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
                      {activity}
                    </p>
                  </div>
                </div>
                {/* <div className="container"> */}
                <UserScheduler
                  id={location["trainerId"]}
                  parentCallback={callbackFunction}
                  startTime={userSelectedData?.startDate}
                  endTime={userSelectedData?.endDate}
                  updateUserDetails={props.updateUserDetails}
                  selectedTimes={props.selectedTimes}
                />
                <BottomSection trainerName={trainerName} />
                {/* </div> */}

                <Link
                  className="submit_user"
                  onClick={handleContinue}
                  to={{
                    pathname: "/user/session-type",
                    state: {
                      slotDetails: {
                        Name: trainerName,
                        start_slot: trainerstartSlot,
                        end_slot: trainerEndSlot,
                        date: DateSlot,
                        activity: activity,
                        id: location["trainerId"],
                      },
                    },
                  }}
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
            Learn more about {trainerName?.firstName}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedTrainerData: state.userReducer.selectedTrainerData,
  bookingData: state.userReducer.bookingData,
  selectedTimes: state.userReducer.selectedTimes,
  query: state.trainerReducer.query,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const UserEventSchedular = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEventSchedularFC);

export default UserEventSchedular;
