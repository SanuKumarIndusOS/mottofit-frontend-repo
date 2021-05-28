import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../../../../assets/files/FindTrainer/Profile Picture.png";
import { Link } from "react-router-dom";
import Tick from "../../../../../assets/files/FindTrainer/Tick 1.svg";
import Share from "../../../../../assets/files/FindTrainer/share.svg";
import ArrowHoverBlacked from "../../../../common/BlackCircleButton/ArrowHoverBlacked";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
// import "./model.scss";
import CloseIcon from "../../../../../assets/files/FindTrainer/Cross.svg";
import QMark from "../../../../../assets/files/FindTrainer/Q Mark.svg";
import Quote from "../../../../../assets/files/FindTrainer/Quote Icon.svg";
import ArrowNext from "../../../../../assets/files/SVG/Arrow Next.svg";
import ArrowBack from "../../../../../assets/files/SVG/Arrow Back.svg";
import NotFoundImage from "../../../../../assets/files/FindTrainer/NoImageFound.png";

// `http://doodlebluelive.com:2307/v1/trainer/id?trainerId=8052bef4-5b88-4a56-a9b1-5262bc7b9cf8`,

import "./styles.scss";

const closeIcon = <img src={CloseIcon} alt="close" />;

const ViewTrainers = () => {
    const [open, setOpen] = useState(false);
    const myRef = useRef(null);
    const [openClassModel, setOpenClassModel] = useState(false);
    const [TrainerViewData, setTraierViewData] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(TrainerViewData);

    useEffect(() => {
        setLoading(true);
        fetchViewTrainer();
    }, []);

    const { id } = useParams();
    function fetchViewTrainer() {
        setLoading(true);
        fetch(
            `http://doodlebluelive.com:2307/v1/trainer/id?trainerId=${id}`,
            // `http://doodlebluelive.com:2307/v1/admin/trainers`,

            {
                method: "get",
                headers: new Headers({
                    Authorization: localStorage.getItem("admin-token"),
                    // Authorization:
                    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyYWYxZDY0LWZhZmUtNGE4YS05YzUyLWRmMDViOWNkMDBkMyIsInR5cGUiOiJ0cmFpbmVyIiwiaWF0IjoxNjIxOTU0OTgyLCJleHAiOjE2MjE5NjIxODJ9._5HHnrdtJcz17uCk74bn6QNHWsLW3C6G7AwLFIeP3yY",
                    "Content-Type": "application/x-www-form-urlencoded",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setTraierViewData(data["data"]);
                setLoading(false);
            });
    }
    return (
        <>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <div className="profile_main">
                        <div className="profile_outter_container">
                            {/* <div className="profile"> */}
                            <div className="profile_wrapper_container ">
                                <div className="profile_header">
                                    <div className="inner_profile container">
                                        <img
                                            src={TrainerViewData.profilePicture}
                                            alt="No Image Found"
                                        />
                                        <div className="profile_header_inner">
                                            <h2>
                                                {TrainerViewData["firstName"]}
                                                &nbsp;
                                                {TrainerViewData["lastName"]}
                                            </h2>
                                            <p>
                                                {TrainerViewData &&
                                                TrainerViewData.areaOfExpertise &&
                                                TrainerViewData
                                                    .areaOfExpertise[0] ? (
                                                    <label>
                                                        {
                                                            TrainerViewData
                                                                .areaOfExpertise[0]
                                                        }
                                                    </label>
                                                ) : (
                                                    ""
                                                )}
                                                {/* &nbsp; */}
                                                {TrainerViewData &&
                                                TrainerViewData.areaOfExpertise &&
                                                TrainerViewData
                                                    .areaOfExpertise[1] ? (
                                                    <label>
                                                        {","}&nbsp;
                                                        {
                                                            TrainerViewData
                                                                .areaOfExpertise[1]
                                                        }
                                                    </label>
                                                ) : (
                                                    ""
                                                )}
                                                {/* &nbsp; */}
                                                {TrainerViewData &&
                                                TrainerViewData.areaOfExpertise &&
                                                TrainerViewData
                                                    .areaOfExpertise[2] ? (
                                                    <label>
                                                        {","}&nbsp;
                                                        {
                                                            TrainerViewData
                                                                .areaOfExpertise[2]
                                                        }
                                                    </label>
                                                ) : (
                                                    ""
                                                )}
                                                {/* &nbsp; */}
                                                {TrainerViewData &&
                                                TrainerViewData.areaOfExpertise &&
                                                TrainerViewData
                                                    .areaOfExpertise[3] ? (
                                                    <label>
                                                        {","}&nbsp;
                                                        {
                                                            TrainerViewData
                                                                .areaOfExpertise[3]
                                                        }
                                                    </label>
                                                ) : (
                                                    ""
                                                )}
                                                {/* &nbsp; */}
                                            </p>
                                        </div>
                                        <div className="profile_header_link">
                                            <img src={ArrowBack} alt="icon" />
                                            <Link to="/admins/trainer">
                                                Back to Trainer List
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile_main_contents container">
                                    <div className="profile_aside">
                                        <div className="profile_aside_link">
                                            <Link to="/">View Calender</Link>
                                            <img src={ArrowNext} alt="icon" />
                                        </div>
                                        <div className="profile_aside_items">
                                            <div className="profile_aside_item">
                                                <h2>
                                                    1 ON 1 INDIVIDUAL TRAINING
                                                </h2>
                                                <hr />
                                                <div className="profile_aside_inner_item">
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.oneOnOnePricing
                                                            ? TrainerViewData
                                                                  .oneOnOnePricing
                                                                  .virtualSession
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            (Virtual Session)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.oneOnOnePricing
                                                            ? TrainerViewData
                                                                  .oneOnOnePricing
                                                                  .inPersonAtClientLocation
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            (In Person Session)
                                                        </span>
                                                    </h6>
                                                    <h5>
                                                        See package rates during
                                                        checkout
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="profile_aside_item">
                                                <h2>
                                                    SOCIAL SESSIONS{" "}
                                                    <img
                                                        src={QMark}
                                                        alt="icon"
                                                        onClick={() =>
                                                            setOpen(true)
                                                        }
                                                        className="model_Qmark"
                                                    />
                                                </h2>
                                                <hr />
                                                {/* model */}
                                                {open ? (
                                                    <Modal
                                                        open={open}
                                                        onClose={() =>
                                                            setOpen(false)
                                                        }
                                                        center
                                                        closeIcon={closeIcon}
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
                                                                height: "300px",
                                                                width: "600px",
                                                                padding: "2em",
                                                            }}
                                                            className="model_styles"
                                                        >
                                                            <h2>
                                                                Want to Train
                                                                with Friends?
                                                            </h2>
                                                            <p>
                                                                Make your
                                                                workout social &
                                                                fun, while
                                                                saving money!
                                                                Complete your
                                                                payment and add
                                                                friends to your
                                                                session simply
                                                                by sending them
                                                                an invite. Once
                                                                they accept your
                                                                invite, your
                                                                session rate
                                                                will
                                                                automatically be
                                                                adjusted.
                                                            </p>
                                                        </div>
                                                    </Modal>
                                                ) : null}
                                                <div className="profile_aside_inner_item">
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.socialSessionPricing
                                                            ? TrainerViewData
                                                                  .socialSessionPricing
                                                                  .virtualSessionfor2People
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            / Session (Virtual
                                                            For 2 People)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.socialSessionPricing
                                                            ? TrainerViewData
                                                                  .socialSessionPricing
                                                                  .virtualSessionfor3People
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            / Session (Virtual
                                                            For 3 People)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.socialSessionPricing
                                                            ? TrainerViewData
                                                                  .socialSessionPricing
                                                                  .virtualSessionfor4People
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            / Session (Virtual
                                                            For 4 People)
                                                        </span>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="profile_aside_item">
                                                <h2>
                                                    CREATE A CLASS
                                                    <img
                                                        src={QMark}
                                                        alt="icon"
                                                        onClick={() =>
                                                            setOpenClassModel(
                                                                true
                                                            )
                                                        }
                                                        className="model_Qmark"
                                                    />
                                                </h2>
                                                <hr />
                                                {/* model */}
                                                {openClassModel ? (
                                                    <Modal
                                                        open={openClassModel}
                                                        onClose={() =>
                                                            setOpenClassModel(
                                                                false
                                                            )
                                                        }
                                                        center
                                                        closeIcon={closeIcon}
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
                                                                height: "300px",
                                                                width: "600px",
                                                                padding: "2em",
                                                            }}
                                                            className="model_styles"
                                                        >
                                                            <h2>
                                                                Want to Create a
                                                                Class?
                                                            </h2>
                                                            <p>
                                                                Design your very
                                                                own workout
                                                                party with the
                                                                vertical &
                                                                location of your
                                                                choice. Create a
                                                                class by paying
                                                                a flat rate and
                                                                adding up to 19
                                                                friends. You
                                                                will be notified
                                                                once they accept
                                                                your invite.
                                                            </p>
                                                        </div>
                                                    </Modal>
                                                ) : null}
                                                <div className="profile_aside_inner_item">
                                                    <h6>
                                                        $
                                                        {TrainerViewData &&
                                                        TrainerViewData.classSessionPricing
                                                            ? TrainerViewData
                                                                  .classSessionPricing
                                                                  .virtualSessionfor15People
                                                            : "N/A"}
                                                        &ensp;
                                                        <span>
                                                            Flat Rate Class (For
                                                            5-15 People)
                                                        </span>
                                                    </h6>
                                                    <h5>
                                                        If trainer offers
                                                        Virtual Social Sessions
                                                        and Classes they will be
                                                        at a discount to in
                                                        person rates above. You
                                                        will see these prior to
                                                        checkout.
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="profile_aside_item">
                                                <h2>TRAINING LOCATIONS</h2>

                                                <hr />
                                                <div className="profile_aside_inner_item">
                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
                                                        <h4>
                                                            {TrainerViewData.preferedTrainingMode
                                                                ? TrainerViewData[
                                                                      "preferedTrainingMode"
                                                                  ]
                                                                : "Not Added"}
                                                        </h4>
                                                    </div>
                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
                                                        <h4>
                                                            {" "}
                                                            Servicable Location:{" "}
                                                            {TrainerViewData.servicableLocation
                                                                ? TrainerViewData[
                                                                      "servicableLocation"
                                                                  ]
                                                                : "Not Added"}
                                                        </h4>
                                                    </div>

                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
                                                        <h4>
                                                            Trainer Location:{" "}
                                                            {TrainerViewData.location
                                                                ? TrainerViewData[
                                                                      "location"
                                                                  ]
                                                                : "Not Added"}
                                                        </h4>
                                                    </div>
                                                    <div className="profile_share">
                                                        <img
                                                            src={Share}
                                                            alt="icon"
                                                        />
                                                        <Link to="/">
                                                            Share Profile
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <button>
                                                Book a session{" "}
                                                <ArrowHoverBlacked />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="profile_trainer_data">
                                        <div className="profile_right_data">
                                            <div className="profile_right_item1">
                                                <img src={Quote} alt="qoute" />
                                                <h6>
                                                    {TrainerViewData
                                                        ? TrainerViewData[
                                                              "myMotto"
                                                          ]
                                                        : "My Motto, Not Added"}
                                                </h6>
                                            </div>
                                            <div className="profile_right_item2">
                                                <h4>
                                                    About{" "}
                                                    {TrainerViewData.firstName
                                                        ? TrainerViewData[
                                                              "firstName"
                                                          ]
                                                        : "Not Added"}
                                                </h4>
                                                <p>
                                                    {TrainerViewData.description
                                                        ? TrainerViewData[
                                                              "description"
                                                          ]
                                                        : " Description Not Added"}
                                                </p>

                                                <div className="profile_images">
                                                    <ImageGrid
                                                        TrainerViewData={
                                                            TrainerViewData
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="profile_right_item3 mb-5 pb-5">
                                                <h2>Certifications</h2>
                                                <div className="profile_item3_inner">
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        {TrainerViewData &&
                                                        TrainerViewData.certification &&
                                                        TrainerViewData
                                                            .certification[0] &&
                                                        TrainerViewData
                                                            .certification[0]
                                                            .certification ? (
                                                            <h6>
                                                                {
                                                                    TrainerViewData
                                                                        .certification[0]
                                                                        .certification
                                                                }
                                                            </h6>
                                                        ) : (
                                                            <h6>Not Added</h6>
                                                        )}
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        {TrainerViewData &&
                                                        TrainerViewData.certification &&
                                                        TrainerViewData
                                                            .certification[1] &&
                                                        TrainerViewData
                                                            .certification[1]
                                                            .certification ? (
                                                            <h6>
                                                                {
                                                                    TrainerViewData
                                                                        .certification[1]
                                                                        .certification
                                                                }
                                                            </h6>
                                                        ) : (
                                                            <h6>Not Added</h6>
                                                        )}
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        {TrainerViewData &&
                                                        TrainerViewData.certification &&
                                                        TrainerViewData
                                                            .certification[2] &&
                                                        TrainerViewData
                                                            .certification[2]
                                                            .certification ? (
                                                            <h6>
                                                                {
                                                                    TrainerViewData
                                                                        .certification[2]
                                                                        .certification
                                                                }
                                                            </h6>
                                                        ) : (
                                                            <h6>Not Added</h6>
                                                        )}
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        {TrainerViewData &&
                                                        TrainerViewData.certification &&
                                                        TrainerViewData
                                                            .certification[3] &&
                                                        TrainerViewData
                                                            .certification[3]
                                                            .certification ? (
                                                            <h6>
                                                                {
                                                                    TrainerViewData
                                                                        .certification[3]
                                                                        .certification
                                                                }
                                                            </h6>
                                                        ) : (
                                                            <h6>Not Added</h6>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile_personal_data mb-5 pb-5">
                                                <h2>Previous Experience</h2>
                                                <div className="profile_personal_data_inner">
                                                    <div
                                                        className="previousExperience"
                                                        style={{
                                                            fontFamily:
                                                                "Montserrat",
                                                            color: "#53bfd2",
                                                            fontSize: "28px",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {TrainerViewData &&
                                                        TrainerViewData.previousExperience ? (
                                                            <h6>
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[0] ? (
                                                                    <h6>
                                                                        Job
                                                                        Title:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[0]
                                                                                .jobTitle
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[0] ? (
                                                                    <h6>
                                                                        Work
                                                                        Mode:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[0]
                                                                                .workMode
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[0] ? (
                                                                    <h6>
                                                                        Year of
                                                                        Experience:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[0]
                                                                                .yearsOfExperience
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[1] ? (
                                                                    <h6>
                                                                        Job
                                                                        Title:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[1]
                                                                                .jobTitle
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[1] ? (
                                                                    <h6>
                                                                        Work
                                                                        Mode:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[1]
                                                                                .workMode
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[1] ? (
                                                                    <h6>
                                                                        Year of
                                                                        Experience:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[1]
                                                                                .yearsOfExperience
                                                                        }
                                                                    </h6>
                                                                ) : null}

                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[2] ? (
                                                                    <h6>
                                                                        Job
                                                                        Title:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[2]
                                                                                .jobTitle
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[2] ? (
                                                                    <h6>
                                                                        Work
                                                                        Mode:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[2]
                                                                                .workMode
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[2] ? (
                                                                    <h6>
                                                                        Year of
                                                                        Experience:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[2]
                                                                                .yearsOfExperience
                                                                        }
                                                                    </h6>
                                                                ) : null}

                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[3] ? (
                                                                    <h6>
                                                                        Job
                                                                        Title:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[3]
                                                                                .jobTitle
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[3] ? (
                                                                    <h6>
                                                                        Work
                                                                        Mode:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[3]
                                                                                .workMode
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                                {TrainerViewData &&
                                                                TrainerViewData.previousExperience &&
                                                                TrainerViewData
                                                                    .previousExperience[3] ? (
                                                                    <h6>
                                                                        Year of
                                                                        Experience:
                                                                        &nbsp;
                                                                        {
                                                                            TrainerViewData
                                                                                .previousExperience[3]
                                                                                .yearsOfExperience
                                                                        }
                                                                    </h6>
                                                                ) : null}
                                                            </h6>
                                                        ) : (
                                                            "Experience Not Added"
                                                        )}
                                                    </div>
                                                    <div className="profile_personal_data1">
                                                        <h2
                                                            style={{
                                                                textTransform:
                                                                    "capitalize",
                                                            }}
                                                        >
                                                            {
                                                                TrainerViewData.firstName
                                                            }
                                                            <span
                                                                style={{
                                                                    textTransform:
                                                                        "none",
                                                                }}
                                                            >
                                                                's
                                                            </span>{" "}
                                                            Personal Infomation
                                                        </h2>
                                                        <div className="personal_data_container">
                                                            <div className="personal_data_inner1">
                                                                <h4>
                                                                    DOB:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.DOB
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Email:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.email
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Gender:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.gender
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Phone
                                                                    Number:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.phoneNumber
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Servicable
                                                                    Location:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.servicableLocation
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Servicable
                                                                    City:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.serviceableCity
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Virtual
                                                                    Meeting:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.virtualMeetingLink
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Instagram
                                                                    handle:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.instagramProfile
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Website:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.websiteLink
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Hours per
                                                                    week:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.hoursPerWeek
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Created at:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.createdAt
                                                                        }
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Updated at:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.updatedAt
                                                                        }
                                                                    </span>
                                                                </h4>

                                                                <h4>
                                                                    Signup Type:{" "}
                                                                    <span>
                                                                        {
                                                                            TrainerViewData.signUpType
                                                                        }
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="profile_personal_data1">
                                                        <h2
                                                            style={{
                                                                textTransform:
                                                                    "capitalize",
                                                            }}
                                                        >
                                                            {
                                                                TrainerViewData.firstName
                                                            }
                                                            <span
                                                                style={{
                                                                    textTransform:
                                                                        "none",
                                                                }}
                                                            >
                                                                's
                                                            </span>{" "}
                                                            Payments and
                                                            Security Infomation
                                                        </h2>
                                                        <div className="personal_data_container">
                                                            <div className="personal_data_inner1">
                                                                <h3>
                                                                    Identity
                                                                    Infromation
                                                                </h3>
                                                                <br />
                                                                <h4>
                                                                    Identity:{" "}
                                                                    <img
                                                                        style={{
                                                                            height: "200px",
                                                                            width: "200px",
                                                                        }}
                                                                        src={
                                                                            TrainerViewData &&
                                                                            TrainerViewData.identityInfromation
                                                                                ? TrainerViewData
                                                                                      .identityInfromation
                                                                                      .identity
                                                                                : "Not Added"
                                                                        }
                                                                        alt="identity"
                                                                    />
                                                                </h4>
                                                                <h4>
                                                                    Identity
                                                                    Name:{" "}
                                                                    <span>
                                                                        {TrainerViewData &&
                                                                        TrainerViewData.identityInfromation
                                                                            ? TrainerViewData
                                                                                  .identityInfromation
                                                                                  .identityName
                                                                            : "Not Added"}
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Identity
                                                                    Number:{" "}
                                                                    <span>
                                                                        {TrainerViewData &&
                                                                        TrainerViewData.identityInfromation
                                                                            ? TrainerViewData
                                                                                  .identityInfromation
                                                                                  .identityNumber
                                                                            : "Not Added"}
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div className="personal_data_inner1">
                                                                <h3>
                                                                    Insurance
                                                                    Information
                                                                </h3>
                                                                <br />
                                                                <h4>
                                                                    Insurance
                                                                    Name:{" "}
                                                                    <img
                                                                        style={{
                                                                            height: "200px",
                                                                            width: "200px",
                                                                        }}
                                                                        src={
                                                                            TrainerViewData &&
                                                                            TrainerViewData.insuranceInformation
                                                                                ? TrainerViewData
                                                                                      .insuranceInformation
                                                                                      .insuranceName
                                                                                : "Not Added"
                                                                        }
                                                                        alt="identity"
                                                                    />
                                                                </h4>
                                                                <h4>
                                                                    Insurance
                                                                    Name:{" "}
                                                                    <span>
                                                                        {TrainerViewData &&
                                                                        TrainerViewData.insuranceInformation
                                                                            ? TrainerViewData
                                                                                  .insuranceInformation
                                                                                  .insuranceName
                                                                            : "Not Added"}
                                                                    </span>
                                                                </h4>
                                                                <h4>
                                                                    Insurance
                                                                    Amount:{" "}
                                                                    <span>
                                                                        {TrainerViewData &&
                                                                        TrainerViewData.insuranceInformation
                                                                            ? TrainerViewData
                                                                                  .insuranceInformation
                                                                                  .insuranceAmount
                                                                            : "Not Added"}
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
const ImageGrid = ({ TrainerViewData }) => {
    const [imageView, setImageView] = useState([
        {
            image: NotFoundImage,
        },
    ]);
    const handleViewImages = () => {
        setImageView([...imageView, { image: Profile }]);
    };
    return (
        <>
            <div className="profile_images_grid">
                {imageView.map((images, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                fontFamily: "Montserrat",
                                color: "#53bfd2",
                                fontSize: "28px",
                                textAlign: "center",
                            }}
                        >
                            {TrainerViewData && TrainerViewData.images ? (
                                <div className="profile_images_container">
                                    <div className="profile_images_card box1">
                                        <img
                                            src={
                                                TrainerViewData &&
                                                TrainerViewData.images &&
                                                TrainerViewData.images[1]
                                                    ? TrainerViewData.images[1]
                                                    : images.image
                                            }
                                            alt="picture"
                                            className="box1"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="flex-try-2">
                                        <div className="profile_images_card box2">
                                            <img
                                                src={
                                                    TrainerViewData &&
                                                    TrainerViewData.images &&
                                                    TrainerViewData.images[1]
                                                        ? TrainerViewData
                                                              .images[1]
                                                        : images.image
                                                }
                                                alt="picture"
                                                className="box2"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </div>

                                        <div className="flex-try-3">
                                            <div className="profile_images_card box3">
                                                <img
                                                    src={
                                                        TrainerViewData &&
                                                        TrainerViewData.images &&
                                                        TrainerViewData
                                                            .images[2]
                                                            ? TrainerViewData
                                                                  .images[2]
                                                            : images.image
                                                    }
                                                    alt="Not Added"
                                                    className="box3"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>

                                            <div className="profile_images_card box4">
                                                <img
                                                    src={
                                                        TrainerViewData &&
                                                        TrainerViewData.images &&
                                                        TrainerViewData
                                                            .images[3]
                                                            ? TrainerViewData
                                                                  .images[3]
                                                            : images.image
                                                    }
                                                    alt="picture"
                                                    className="box4"
                                                    style={{
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                "Image's Not Found"
                            )}
                        </div>
                    );
                })}
            </div>
            {TrainerViewData &&
            TrainerViewData.images &&
            TrainerViewData.images[4] ? (
                <div className="image_more" onClick={() => handleViewImages()}>
                    <h5>View More Images</h5>

                    <img
                        src={ArrowNext}
                        alt="icon"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            ) : null}
        </>
    );
};

export default ViewTrainers;