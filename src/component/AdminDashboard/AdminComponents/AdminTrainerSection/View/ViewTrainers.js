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
                    // Authorization: localStorage.getItem("admin-token"),
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyYWYxZDY0LWZhZmUtNGE4YS05YzUyLWRmMDViOWNkMDBkMyIsInR5cGUiOiJ0cmFpbmVyIiwiaWF0IjoxNjIxOTU0OTgyLCJleHAiOjE2MjE5NjIxODJ9._5HHnrdtJcz17uCk74bn6QNHWsLW3C6G7AwLFIeP3yY",
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
                                                        {TrainerViewData.oneOnOnePricing
                                                            ? TrainerViewData[
                                                                  "oneOnOnePricing"
                                                              ][
                                                                  "inPersonAtClientLocation"
                                                              ]
                                                            : "0"}
                                                        &nbsp;
                                                        <span>
                                                            (Virtual Session)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $
                                                        {TrainerViewData.oneOnOnePricing
                                                            ? TrainerViewData[
                                                                  "oneOnOnePricing"
                                                              ][
                                                                  "inPersonAtClientLocation"
                                                              ]
                                                            : "0"}
                                                        &nbsp;
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
                                                        $65{" "}
                                                        <span>
                                                            / Session (For 2
                                                            People)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $50{" "}
                                                        <span>
                                                            / Session (For 3
                                                            People)
                                                        </span>
                                                    </h6>
                                                    <h6>
                                                        $25{" "}
                                                        <span>
                                                            / Session (For 4
                                                            People)
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
                                                        $200{" "}
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
                                                        : "Not Added"}
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
                                                        : "Not Added"}
                                                </p>

                                                <div className="profile_images">
                                                    <ImageGrid />
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
                                            <div className="profile_right_item3 mb-5 pb-5">
                                                <h2>Previous Experience</h2>
                                                <div className="profile_item3_inner">
                                                    {/* <h6>
                                                        {" "}
                                                        Job Title: &nbsp;
                                                        {TrainerViewData.previousExperience
                                                            ? TrainerViewData
                                                                  .previousExperience[0]
                                                                  .jobTitle
                                                            : "Not Added"}
                                                    </h6> */}
                                                    {/* {TrainerViewData &&
                                                    TrainerViewData.previousExperience ? (
                                                        <h6>
                                                            Job Title: &nbsp;
                                                            {
                                                                TrainerViewData
                                                                    .previousExperience[0]
                                                                    .jobTitle
                                                            }
                                                        </h6>
                                                    ) : (
                                                        <h6>Not Added</h6>
                                                    )}
                                                    {TrainerViewData &&
                                                    TrainerViewData.previousExperience ? (
                                                        <h6>
                                                            Job Title: &nbsp;
                                                            {
                                                                TrainerViewData
                                                                    .previousExperience[0]
                                                                    .workMode
                                                            }
                                                        </h6>
                                                    ) : (
                                                        <h6>Not Added</h6>
                                                    )}
                                                    {TrainerViewData &&
                                                    TrainerViewData.previousExperience ? (
                                                        <h6>
                                                            Job Title: &nbsp;
                                                            {
                                                                TrainerViewData
                                                                    .previousExperience[0]
                                                                    .yearsOfExperience
                                                            }
                                                        </h6>
                                                    ) : (
                                                        <h6>Not Added</h6>
                                                    )} */}

                                                    {/* <h6>
                                                        {" "}
                                                        Work Mode: &nbsp;
                                                        {TrainerViewData.previousExperience
                                                            ? TrainerViewData
                                                                  .previousExperience[0]
                                                                  .workMode
                                                            : "Not Added"}
                                                    </h6>
                                                    <h6>
                                                        {" "}
                                                        Years Of Experience:
                                                        &nbsp;
                                                        {TrainerViewData.previousExperience
                                                            ? TrainerViewData
                                                                  .previousExperience[0]
                                                                  .yearsOfExperience
                                                            : "Not Added"}
                                                    </h6> */}

                                                    <div className="inner_items">
                                                        {/* <h6>
                                                            {TrainerViewData[
                                                                "previousExperience"
                                                            ]
                                                                ? TrainerViewData[
                                                                      "previousExperience"
                                                                  ][1][
                                                                      "jobTitle"
                                                                  ]
                                                                : "Not Added"}
                                                        </h6> */}
                                                    </div>
                                                    <div className="inner_items">
                                                        {/* <h6>
                                                            {TrainerViewData[
                                                                "previousExperience"
                                                            ]
                                                                ? TrainerViewData[
                                                                      "previousExperience"
                                                                  ][2][
                                                                      "jobTitle"
                                                                  ]
                                                                : "Not Added"}
                                                        </h6> */}
                                                    </div>
                                                    <div className="inner_items">
                                                        {/* <h6> */}
                                                        {/* <h6>
                                                            {TrainerViewData[
                                                                "previousExperience"
                                                            ]
                                                                ? TrainerViewData[
                                                                      "previousExperience"
                                                                  ][3][
                                                                      "jobTitle"
                                                                  ]
                                                                : "Not Added"}
                                                        </h6> */}
                                                        {/* </h6> */}
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
const ImageGrid = () => {
    const [imageView, setImageView] = useState([
        {
            image: Profile,
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
                        <div className="profile_images_container">
                            <div className="profile_images_card box1">
                                <img
                                    src={images.image}
                                    alt="picture"
                                    className="box1"
                                />
                            </div>
                            <div className="flex-try-2">
                                <div className="profile_images_card box2">
                                    <img
                                        src={images.image}
                                        alt="picture"
                                        className="box2"
                                    />
                                </div>

                                <div className="flex-try-3">
                                    <div className="profile_images_card box3">
                                        <img
                                            src={images.image}
                                            alt="picture"
                                            className="box3"
                                        />
                                    </div>

                                    <div className="profile_images_card box4">
                                        <img
                                            src={images.image}
                                            alt="picture"
                                            className="box4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="image_more" onClick={() => handleViewImages()}>
                <h5>View More Images</h5>
                <img src={ArrowNext} ali="icon" />
            </div>
        </>
    );
};

export default ViewTrainers;
