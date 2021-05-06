import React from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import UserScheduler from "../../UserScheduler/Scheduler";
import { useLocation } from "react-router-dom";

const UserEventSchedular = () => {
  const [trainerName, setTrainerName] = React.useState("");
  const [activity, setActivity] = React.useState("Boxing");
  const [trainerstartSlot, settrainerstartSlot] = React.useState();
  const [trainerEndSlot, settrainerEndSlot] = React.useState();
  const [DateSlot, setDateSlot] = React.useState();

  React.useEffect(() => {
    setTrainerName(location.state["trainerData"]["firstName"]);
    console.log(location.state["trainerData"]);

    console.log(localStorage.getItem("trainertime"), "ee");
  }, []);

  const callbackFunction = (ts, tss, date) => {
    console.log(ts,tss, "Callback");
    settrainerstartSlot(ts);
    settrainerEndSlot(tss);
    setDateSlot(date)
  };

  const location = useLocation();
  //  console.log(location.state["trainerId"]);
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
                  <img src={Profile} alt="profile" />
                  <div className="user_content">
                    <h2 style={{ textTransform: "capitalize" }}>
                      {trainerName}
                    </h2>
                    <p>{activity}</p>
                  </div>
                </div>
                <div className="container">
                  <UserScheduler
                    trainerID={location.state["trainerId"]}
                    parentCallback={callbackFunction}
                  />
                  {/* <UserScheduler/>  */}
                </div>

                <Link
                  
                  to={{
                    pathname: "/user/session-type",
                    state: {
                      slotDetails:{
                      Name: trainerName,
                      start_slot: trainerstartSlot,
                      end_slot: trainerEndSlot,
                      date: DateSlot,
                      activity: activity,
                      id: location.state["trainerId"]
                      }
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

export default UserEventSchedular;
