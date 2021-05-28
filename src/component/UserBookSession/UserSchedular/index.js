import React from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
// import UserScheduler from "../../UserScheduler/Scheduler";
import UserScheduler2 from "component/TrainerProfile/UserScheduler/UserScheduler";
import { useLocation } from "react-router-dom";

const UserEventSchedular = () => {
    const [trainerName, setTrainerName] = React.useState("");
    const [activity, setActivity] = React.useState("Boxing");
    const [trainerstartSlot, settrainerstartSlot] = React.useState();
    const [trainerEndSlot, settrainerEndSlot] = React.useState();
    const [DateSlot, setDateSlot] = React.useState();
    console.log(trainerName, "trainerName");

    React.useEffect(() => {
        setTrainerName(location.state["trainerData"]);

        console.log(location.state["trainerData"]);

        console.log(localStorage.getItem("trainertime"), "ee");
    }, []);

    const callbackFunction = (ts, tss, date) => {
        console.log(ts, tss, "Callback");
        settrainerstartSlot(ts);
        settrainerEndSlot(tss);
        setDateSlot(date);
    };

    const location = useLocation();

    return (
        <>
            <div className="event_outter_container">
                <div className="container">
                    <div className="event_inner_container">
                        <div className="link_wrapper">
                            <img src={ArrowBack} alt="icon" />
                            <div className="inner_links">
                                <Link to="/trainer/find">
                                    Choose another Trainer
                                </Link>
                                <div></div>
                            </div>
                        </div>
                        <div className="event_wrapper">
                            <div className="event_wrapper_inner">
                                <div className="event_header">
                                    <h2>Schedule your Training Time</h2>
                                    <p>
                                        Please select a preferable date and time
                                        slot to schedule your training session.
                                        All the listed timings are in your local
                                        timezone (GMT + 5:30)
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
                                                fontFamily:
                                                    "Cormorant Garamond",
                                            }}
                                        >
                                            {trainerName.firstName}
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
                                {/* <UserScheduler
                                        trainerID={location.state["trainerId"]}
                                        parentCallback={callbackFunction}
                                    /> */}
                                <UserScheduler2
                                    id={location.state["trainerId"]}
                                    parentCallback={callbackFunction}
                                />
                                <ButtonSection trainerName={trainerName} />
                                {/* </div> */}

                                <Link
                                    to={{
                                        pathname: "/user/session-type",
                                        state: {
                                            slotDetails: {
                                                Name: trainerName,
                                                start_slot: trainerstartSlot,
                                                end_slot: trainerEndSlot,
                                                date: DateSlot,
                                                activity: activity,
                                                id: location.state["trainerId"],
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

const ButtonSection = ({ trainerName }) => {
    return (
        <div className="schedular_slots_user">
            <div className="items_slots">
                <div className="item_slot1">
                    <div className="indicator"></div>
                    <h5>AVAILABLE</h5>
                </div>
                <div className="item_slot2">
                    <div className="indicator2"></div>
                    <h5>UNAVAILABLE</h5>{" "}
                </div>
                <div className="item_slot3">
                    <div className="indicator3"></div>
                    <h5>BOOKED SLOT</h5>{" "}
                </div>
                <div className="item_slot5">
                    <Link to={`/trainer/profile/${trainerName.id}`}>
                        Learn more about {trainerName.firstName}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default UserEventSchedular;
