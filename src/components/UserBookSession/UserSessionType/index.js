import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import TrainerIcon from "../../../assets/UserOnboard/UserSessionAsset/training1on1.svg";
import Social from "../../../assets/UserOnboard/UserSessionAsset/social.svg";
import ClassIcon from "../../../assets/UserOnboard/UserSessionAsset/class.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import QMark from "../../../assets/FindTrainer/Q Mark.svg";
import Footer from "../../common/Footer";
import ArrowBack from "../../../assets/SVG/Arrow Back.svg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "../../../assets/FindTrainer/Cross.svg";

const options = [
    { value: "nyw", label: "New York" },
    { value: "maimi", label: "Maimi" },
    { value: "hampton", label: "Hampton" },
    { value: "plam", label: "Plam Beach" },
];

const closeIcon = <img src={CloseIcon} alt="close" />;
const UserBookSession = () => {
    const [selectedOption, setSelectedOption] = useState([]);

    const [open, setOpen] = useState(false);
    const myRef = useRef(null);
    const [openClassModel, setOpenClassModel] = useState(false);

    return (
        <>
            <div className="session_outter_container">
                <div className="container">
                    <div className="seesion_inner_container">
                        <div className="link_wrapper">
                            <img src={ArrowBack} alt="icon" />
                            <div className="inner_links">
                                <Link to="/user-onboard/schedule">
                                    Change your Slot
                                </Link>
                                <div></div>
                            </div>
                        </div>
                        <div className="session_inner_wrapper">
                            <div className="session_heading">
                                <h2>Choose your Session Type</h2>
                                <p>
                                    Please select a preferable training location
                                    along with the class size in order to book
                                    your training session.
                                </p>
                            </div>
                            <div className="session_tabs">
                                <div className="session_tabs_inner">
                                    <Tabs
                                        defaultTab="virtual"
                                        onChange={(tabId) => {
                                            console.log(tabId);
                                        }}
                                    >
                                        <div className="sesstion_tabslist container">
                                            <TabList>
                                                <Tab tabFor="virtual">
                                                    <button>Virtual</button>
                                                </Tab>
                                                <Tab tabFor="inPerson">
                                                    <button>In Person</button>
                                                </Tab>
                                            </TabList>
                                            <div className="session_location_dd">
                                                <div className="session_location">
                                                    <Select
                                                        defaultValue={
                                                            selectedOption
                                                        }
                                                        onChange={
                                                            setSelectedOption
                                                        }
                                                        options={options}
                                                        className="session_location_select"
                                                    />
                                                </div>
                                                <div className="session_venue">
                                                    <div className="session_location">
                                                        <Select
                                                            defaultValue={
                                                                selectedOption
                                                            }
                                                            onChange={
                                                                setSelectedOption
                                                            }
                                                            options={options}
                                                            className="session_location_select"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="session_view_location">
                                                <Link to="">
                                                    View Trainer’s Location
                                                </Link>
                                            </div>
                                        </div>
                                        <TabPanel tabId="virtual">
                                            <div className="inPerson_tab_inner">
                                                <div className="inPerson_tab_wrapper">
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                1 ON 1 TRAINING
                                                            </h2>
                                                            <p>
                                                                Train
                                                                individually
                                                                with a top
                                                                trainer for the
                                                                highest quality
                                                                of training and
                                                                a personalized
                                                                experience.
                                                            </p>
                                                        </div>
                                                        {open ? (
                                                            <Modal
                                                                open={open}
                                                                onClose={() =>
                                                                    setOpen(
                                                                        false
                                                                    )
                                                                }
                                                                center
                                                                closeIcon={
                                                                    closeIcon
                                                                }
                                                                container={
                                                                    myRef.current
                                                                }
                                                                styles={{
                                                                    boaderRadius:
                                                                        "10px",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        textAlign:
                                                                            "center",
                                                                        height:
                                                                            "300px",
                                                                        width:
                                                                            "600px",
                                                                        padding:
                                                                            "2em",
                                                                    }}
                                                                    className="model_styles"
                                                                >
                                                                    <h2>
                                                                        Want to
                                                                        Train
                                                                        with
                                                                        Friends?
                                                                    </h2>
                                                                    <p>
                                                                        Make
                                                                        your
                                                                        workout
                                                                        social &
                                                                        fun,
                                                                        while
                                                                        saving
                                                                        money!
                                                                        Complete
                                                                        your
                                                                        payment
                                                                        and add
                                                                        friends
                                                                        to your
                                                                        session
                                                                        simply
                                                                        by
                                                                        sending
                                                                        them an
                                                                        invite.
                                                                        Once
                                                                        they
                                                                        accept
                                                                        your
                                                                        invite,
                                                                        your
                                                                        session
                                                                        rate
                                                                        will
                                                                        automatically
                                                                        be
                                                                        adjusted.
                                                                    </p>
                                                                </div>
                                                            </Modal>
                                                        ) : null}
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $20
                                                                <span>
                                                                    / Session{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                        onClick={() =>
                                                                            setOpen(
                                                                                true
                                                                            )
                                                                        }
                                                                    />
                                                                </span>
                                                            </h6>

                                                            <img
                                                                src={
                                                                    TrainerIcon
                                                                }
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                SOCIAL SESSION
                                                            </h2>
                                                            <p>
                                                                Add up to 3
                                                                friends to your
                                                                session. Get
                                                                personal
                                                                attention, while
                                                                you enjoy a
                                                                social
                                                                experience at
                                                                lower costs.
                                                            </p>
                                                        </div>
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $15
                                                                <span>
                                                                    / 5 People{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                        onClick={() =>
                                                                            setOpen(
                                                                                true
                                                                            )
                                                                        }
                                                                    />
                                                                </span>
                                                            </h6>
                                                            <img
                                                                src={Social}
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                CREATE A CLASS
                                                            </h2>
                                                            <p>
                                                                Design your very
                                                                own workout
                                                                party. Choose a
                                                                top trainer, and
                                                                add up to 14
                                                                more friends to
                                                                split the cost
                                                                evenly.
                                                            </p>
                                                        </div>
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $20
                                                                <span>
                                                                    / 12 People{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                        onClick={() =>
                                                                            setOpen(
                                                                                true
                                                                            )
                                                                        }
                                                                    />
                                                                </span>
                                                            </h6>
                                                            <img
                                                                src={ClassIcon}
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel tabId="inPerson">
                                            <div className="inPerson_tab_inner">
                                                <div className="inPerson_tab_wrapper">
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                1 ON 1 TRAINING
                                                            </h2>
                                                            <p>
                                                                Train
                                                                individually
                                                                with a top
                                                                trainer for the
                                                                highest quality
                                                                of training and
                                                                a personalized
                                                                experience.
                                                            </p>
                                                        </div>
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $125
                                                                <span>
                                                                    / Session{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </h6>

                                                            <img
                                                                src={
                                                                    TrainerIcon
                                                                }
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                SOCIAL SESSION
                                                            </h2>
                                                            <p>
                                                                Add up to 3
                                                                friends to your
                                                                session. Get
                                                                personal
                                                                attention, while
                                                                you enjoy a
                                                                social
                                                                experience at
                                                                lower costs.
                                                            </p>
                                                        </div>
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $20
                                                                <span>
                                                                    / 4 People{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </h6>
                                                            <img
                                                                src={Social}
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                    <div className="session_cards">
                                                        <div className="session_card_content">
                                                            <h2>
                                                                CREATE A CLASS
                                                            </h2>
                                                            <p>
                                                                Design your very
                                                                own workout
                                                                party. Choose a
                                                                top trainer, and
                                                                add up to 14
                                                                more friends to
                                                                split the cost
                                                                evenly.
                                                            </p>
                                                        </div>
                                                        <div className="session_card_inner">
                                                            <h6>
                                                                $30
                                                                <span>
                                                                    / 15 People{" "}
                                                                    <img
                                                                        src={
                                                                            QMark
                                                                        }
                                                                        alt="icon"
                                                                    />
                                                                </span>
                                                            </h6>
                                                            <img
                                                                src={ClassIcon}
                                                                alt="icon"
                                                            />
                                                        </div>
                                                        <button>
                                                            BOOK YOUR SESSION{" "}
                                                            <ArrowHoverBlacked />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserBookSession;
