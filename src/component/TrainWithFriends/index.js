import React, { useState } from "react";
import "./styles.scss";
import Mail from "../../assets/files/SignUp/Email Icon.svg";
import Person from "../../assets/files/SignUp/Person Icon.svg";
import Phone from "../../assets/files/SignUp/Phone Icon.svg";
import Jenny from "../../assets/files/TrainerDashboard/Message/Jenny.png";
import StrengthIcon from "../../assets/files/UserOnboard/PaymentAsset/Strength Icon.svg";
import SheduleIcon from "../../assets/files/UserOnboard/PaymentAsset/Shedule Icon.svg";
import LocationIcon from "../../assets/files/UserOnboard/PaymentAsset/Location Icon.svg";
import ArrowHoverBlacked from "../common/BlackCircleButton/ArrowHoverBlacked";
import "../HowItWork/TrainerMotto/styles.scss";
import BlueHoverButton from "../common/BlueArrowButton";
import { Link } from "react-router-dom";
import { history } from 'helpers'

const accordionData = [
    {
        title: "Social Session",
        session: "1 Session / 2 Session",
        session1: "1 Session / 2 Session",
        session2: "1 Session / 2 Session",
        price: "$65.00 / Person",
        price1: "$65.00 / Person",
        price2: "$65.00 / Person",
    },
    {
        title: "Class Session",
        session: "Class (5-15 People)",
        price: "$15.00 / Person",
    },
    {
        title: "Cancellation Session",
        session: "Cancellation Fee",
        price: "Free upto 48 hours",
    },
];

const TrainWithFriends = () => {
    const [friendsInput, setFriendsInput] = useState([
        {
            friendName: "",
            friendEmail: "",
            friendPhone: "",
        },
    ]);

    let trainingType = localStorage.getItem('sessionTrainingType');
    const handleChangeFriendInput = (index, event) => {
        const values = [...friendsInput];
        values[index][event.target.name] = event.target.value;
        setFriendsInput(values);
    };

    const handleAddFriendFields = () => {
        console.log(history);

        setFriendsInput([
            ...friendsInput,
            { friendName: "", friendEmail: "", friendPhone: "" },
        ]);

    }


    const updateSessionApi = () => {
        let sessionId = localStorage.getItem('sessionId');

        fetch("http://doodlebluelive.com:2337/v1/session/update", {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            method: "PUT",
            body: JSON.stringify(
                {
                    "friends":
                        [
                            { "email": "stageuser001@doodleblue.com", "firstName": "John", "lastName": "Doe 001", "phoneNo": "8220681305" }
                        ],
                    "sessionId": sessionId,

                }),
        })
            .then((resp) => resp.json())
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    const getUserSessions = () => {
        fetch("http://doodlebluelive.com:2337/v1/session/user", {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            method: "GET",
        })
            .then((resp) => resp.json())
            .then((res) => {
                console.log(res);
                history.push({
                    pathname: "/users/dashboard/session",
                })
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="TF_outter_container">
                <div className="container">
                    <div className="TF_inner_container">
                        <div className="TF_headers">
                            <h2>
                                Your session is booked! Start adding your
                                friends
                            </h2>
                            <p>
                                Invite as many friends as you’d like, the
                                friends that accept will automatically be added
                                in correspondence to session size! Once they
                                accept your session, your rate will
                                automatically be adjusted.
                            </p>
                        </div>
                        <div className="TF_wrapper">
                            <div className="TF_inner_wrapper">
                                <div className="TF_wrapper_left">
                                    <div className="TF_wrapper_content">
                                        <h2>Add Friends to Your Session</h2>
                                        <div className="TF_form">
                                            <form>
                                                <h3>
                                                    Enter your friend's details
                                                </h3>
                                                <div className="TF_inner_form">
                                                    {friendsInput.map(
                                                        (index, input) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className="TF_wrapper_input"
                                                                >
                                                                    <h4>
                                                                        Friend #
                                                                        {input}
                                                                    </h4>
                                                                    <div className="inner_input">
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Name"
                                                                            name="name"
                                                                            value={
                                                                                input.friendName
                                                                            }
                                                                            onChange={(
                                                                                event
                                                                            ) =>
                                                                                handleChangeFriendInput(
                                                                                    index,
                                                                                    event
                                                                                )
                                                                            }
                                                                        />
                                                                        <img
                                                                            src={
                                                                                Person
                                                                            }
                                                                            alt="icon"
                                                                        />
                                                                    </div>

                                                                    <div className="TF_input">
                                                                        <div className="inner_input">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Email"
                                                                                name="email"
                                                                                value={
                                                                                    input.friendEmail
                                                                                }
                                                                                onChange={(
                                                                                    event
                                                                                ) =>
                                                                                    handleChangeFriendInput(
                                                                                        index,
                                                                                        event
                                                                                    )
                                                                                }
                                                                            />
                                                                            <img
                                                                                src={
                                                                                    Mail
                                                                                }
                                                                                alt="icon"
                                                                            />

                                                                            <input
                                                                                type="text"
                                                                                placeholder="Phone Number"
                                                                                name="phone"
                                                                                value={
                                                                                    input.friendPhone
                                                                                }
                                                                                onChange={(
                                                                                    event
                                                                                ) =>
                                                                                    handleChangeFriendInput(
                                                                                        index,
                                                                                        event
                                                                                    )
                                                                                }
                                                                            />
                                                                            <img
                                                                                src={
                                                                                    Phone
                                                                                }
                                                                                alt="icon"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                    <div className="TF_remember_left">
                                                        <input
                                                            className="TF_check"
                                                            type="checkbox"
                                                            value="lsRememberMe"
                                                            id="rememberMe"
                                                        />{" "}
                                                        <label>
                                                            I will pay for all
                                                            the people that I
                                                            will be inviting to
                                                            my social session or
                                                            class
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="TF_button">
                                                    <button onClick={updateSessionApi}>
                                                        Invite Friends{" "}
                                                        <ArrowHoverBlacked />{" "}
                                                    </button>
                                                    {
                                                        ((trainingType === 'social' && friendsInput.length < 3) ||
                                                            (trainingType === 'class' && friendsInput.length < 12)) ?
                                                            <h5
                                                                onClick={
                                                                    handleAddFriendFields
                                                                }
                                                            >
                                                                + Add More Friends
                                                    </h5> : ''
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="TF_wrapper_right">
                                    <div className="TF_right">
                                        <div className="TF_profile">
                                            <img src={Jenny} alt="icon" />
                                            <div className="TF_name">
                                                <h2>John Doe</h2>
                                                <p>BOXING, STRENGTH & HIIT</p>
                                            </div>
                                        </div>
                                        <div className="TF_wrapper">
                                            <div className="TF_details">
                                                <h3>I WANT TO TRAIN IN</h3>
                                                <div className="TF_data_inner">
                                                    <img
                                                        src={StrengthIcon}
                                                        alt="icon"
                                                    />
                                                    <h4>Strength & HIIT</h4>
                                                </div>
                                            </div>
                                            <div className="TF_details">
                                                <h3>I want to train on</h3>
                                                <div className="TF_data_inner">
                                                    <img
                                                        src={SheduleIcon}
                                                        alt="icon"
                                                    />
                                                    <h4>
                                                        February 16th, 2021 at
                                                        5:00 A.M.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="TF_details">
                                                <h3>I WANT TO TRAIN AT</h3>
                                                <div className="TF_data_inner">
                                                    <img
                                                        src={LocationIcon}
                                                        alt="icon"
                                                    />
                                                    <h4>The Trainer’s Gym</h4>
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="TF_service_details">
                                                <div className="TF_service_wrapper">
                                                    <div className="TF_service_left">
                                                        <div className="TF_service_header">
                                                            <div className="TF_inner_header">
                                                                <h3>
                                                                    Service
                                                                    Details
                                                                </h3>
                                                                <h3>
                                                                    Price / Hour
                                                                </h3>
                                                            </div>
                                                            <AccordationService />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="TF_skip">
                                <h2>Not right now? </h2>
                                <Link onClick={getUserSessions}>
                                    CONTINUE TO ACCOUNT <BlueHoverButton />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const AccordationService = () => {
    const [selected, setSelected] = useState(0);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }

        setSelected(index);
    };
    return (
        <>
            {accordionData.map((item, index) => (
                <div className="TF_data_item" key={index}>
                    <div
                        className="TF_data_title"
                        onClick={() => toggle(index)}
                    >
                        <h3>{item.title}</h3>
                        <div
                            className={
                                selected === index ? "line show" : "line"
                            }
                        ></div>
                    </div>
                    <div className="TF_DT_grid">
                        <div className="TF_DT_left">
                            <div
                                className={
                                    selected === index
                                        ? "TF_DT_contentshow"
                                        : "TF_DT_content"
                                }
                            >
                                <p>{item.session}</p>
                                <p>{item.session1}</p>
                                <p>{item.session2}</p>
                            </div>
                        </div>
                        <div className="TF_DT_right">
                            <div
                                className={
                                    selected === index
                                        ? "TF_DT_contentshow"
                                        : "TF_DT_content"
                                }
                            >
                                <p>{item.price}</p>
                                <p>{item.price1}</p>
                                <p>{item.price2}</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            ))}
        </>
    );
};

export default TrainWithFriends;
