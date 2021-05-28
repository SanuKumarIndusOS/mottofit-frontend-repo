import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import { Link, useParams } from "react-router-dom";
import Tick from "../../../assets/files/FindTrainer/Tick 1.svg";
import Share from "../../../assets/files/FindTrainer/share.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./model.scss";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import QMark from "../../../assets/files/FindTrainer/Q Mark.svg";
import Quote from "../../../assets/files/FindTrainer/Quote Icon.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import NotFoundImage from "../../../assets/files/FindTrainer/NoImageFound.png";
import UserScheduler from "../UserScheduler/UserScheduler";
import BlueArrowButton from "../../common/BlueArrowButton";
import { history } from "helpers";

const closeIcon = <img src={CloseIcon} alt="close" />;

const TrainerProfile = () => {
    const [open, setOpen] = useState(false);
    const myRef = useRef(null);
    const [openClassModel, setOpenClassModel] = useState(false);
    const [trainerstartSlot, settrainerstartSlot] = React.useState();
    const [trainerEndSlot, settrainerEndSlot] = React.useState();
    const [DateSlot, setDateSlot] = React.useState();

    const [trainerProfileData, setTraierProfileData] = useState([]);
    console.log(trainerProfileData, "trainerProfileData");
    useEffect(() => {
        fetchViewTrainer();
    }, []);

    const { id } = useParams();

    function fetchViewTrainer() {
        fetch(
            // `http://doodlebluelive.com:2307/v1/trainer/id?trainerId=8052bef4-5b88-4a56-a9b1-5262bc7b9cf8`,
            `http://doodlebluelive.com:2307/v1/trainer/id?trainerId=${id}`,
            {
                method: "get",
                headers: new Headers({
                    Authorization: localStorage.getItem("token"),
                    "Content-Type": "application/x-www-form-urlencoded",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setTraierProfileData(data["data"]);
            });
    }

    const callbackFunction = (ts, tss, date) => {
        console.log(ts, tss, "Callback");
        settrainerstartSlot(ts);
        settrainerEndSlot(tss);
        setDateSlot(date);
    };

    return (
        <>
            <div className="profile_main">
                <div className="profile_outter_container">
                    <div className="profile_wrapper_container ">
                        <div className="profile_header">
                            <div className="inner_profile container">
                                {trainerProfileData &&
                                trainerProfileData.profilePicture ? (
                                    <img
                                        src={trainerProfileData.profilePicture}
                                        alt="Not Found Image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                                "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={NotFoundImage}
                                        alt="Not Found Image"
                                    />
                                )}
                                <div className="profile_header_inner">
                                    <h2>
                                        {trainerProfileData.firstName}&nbsp;
                                        {trainerProfileData.lastName}
                                    </h2>
                                    <p>
                                        {trainerProfileData &&
                                        trainerProfileData.areaOfExpertise &&
                                        trainerProfileData
                                            .areaOfExpertise[0] ? (
                                            <p>
                                                {" "}
                                                {
                                                    trainerProfileData
                                                        .areaOfExpertise[0]
                                                }
                                            </p>
                                        ) : null}
                                        {trainerProfileData &&
                                        trainerProfileData.areaOfExpertise &&
                                        trainerProfileData
                                            .areaOfExpertise[1] ? (
                                            <p>
                                                {","}&nbsp;
                                                {
                                                    trainerProfileData
                                                        .areaOfExpertise[1]
                                                }
                                            </p>
                                        ) : null}
                                        {trainerProfileData &&
                                        trainerProfileData.areaOfExpertise &&
                                        trainerProfileData
                                            .areaOfExpertise[2] ? (
                                            <p>
                                                {","}&nbsp;
                                                {
                                                    trainerProfileData
                                                        .areaOfExpertise[2]
                                                }
                                            </p>
                                        ) : null}
                                        {trainerProfileData &&
                                        trainerProfileData.areaOfExpertise &&
                                        trainerProfileData
                                            .areaOfExpertise[3] ? (
                                            <p>
                                                {","}&nbsp;
                                                {
                                                    trainerProfileData
                                                        .areaOfExpertise[3]
                                                }
                                            </p>
                                        ) : null}
                                    </p>
                                </div>
                                <div className="profile_header_link">
                                    <img src={ArrowBack} alt="icon" />
                                    <Link to="/trainer/find">
                                        Back to Search
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
                                        <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                                        <hr />
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.oneOnOnePricing
                                                    ? trainerProfileData
                                                          .oneOnOnePricing
                                                          .virtualSession
                                                    : "N/A"}
                                                &nbsp;
                                                <span>(Virtual Session)</span>
                                            </h6>
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.oneOnOnePricing
                                                    ? trainerProfileData
                                                          .oneOnOnePricing
                                                          .inPersonAtClientLocation
                                                    : "N/A"}
                                                &nbsp;
                                                <span>(In Person Session)</span>
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
                                                onClick={() => setOpen(true)}
                                                className="model_Qmark"
                                            />
                                        </h2>
                                        <hr />
                                        {/* model */}
                                        {open ? (
                                            <Modal
                                                open={open}
                                                onClose={() => setOpen(false)}
                                                center
                                                closeIcon={closeIcon}
                                                container={myRef.current}
                                                styles={{
                                                    boaderRadius: "10px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        textAlign: "center",
                                                        height: "300px",
                                                        width: "600px",
                                                        padding: "2em",
                                                    }}
                                                    className="model_styles"
                                                >
                                                    <h2>
                                                        Want to Train with
                                                        Friends?
                                                    </h2>
                                                    <p>
                                                        Make your workout social
                                                        & fun, while saving
                                                        money! Complete your
                                                        payment and add friends
                                                        to your session simply
                                                        by sending them an
                                                        invite. Once they accept
                                                        your invite, your
                                                        session rate will
                                                        automatically be
                                                        adjusted.
                                                    </p>
                                                </div>
                                            </Modal>
                                        ) : null}
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.socialSessionPricing
                                                    ? trainerProfileData
                                                          .socialSessionPricing
                                                          .virtualSessionfor2People
                                                    : "N/A"}
                                                &ensp;
                                                <span>
                                                    / Session (Virtual For 2
                                                    People)
                                                </span>
                                            </h6>
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.socialSessionPricing
                                                    ? trainerProfileData
                                                          .socialSessionPricing
                                                          .virtualSessionfor3People
                                                    : "N/A"}
                                                &ensp;
                                                <span>
                                                    / Session (Virtual For 3
                                                    People)
                                                </span>
                                            </h6>
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.socialSessionPricing
                                                    ? trainerProfileData
                                                          .socialSessionPricing
                                                          .virtualSessionfor4People
                                                    : "N/A"}
                                                &ensp;
                                                <span>
                                                    / Session (Virtual For 4
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
                                                    setOpenClassModel(true)
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
                                                    setOpenClassModel(false)
                                                }
                                                center
                                                closeIcon={closeIcon}
                                                container={myRef.current}
                                                styles={{
                                                    boaderRadius: "10px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        textAlign: "center",
                                                        height: "300px",
                                                        width: "600px",
                                                        padding: "2em",
                                                    }}
                                                    className="model_styles"
                                                >
                                                    <h2>
                                                        Want to Create a Class?
                                                    </h2>
                                                    <p>
                                                        Design your very own
                                                        workout party with the
                                                        vertical & location of
                                                        your choice. Create a
                                                        class by paying a flat
                                                        rate and adding up to 19
                                                        friends. You will be
                                                        notified once they
                                                        accept your invite.
                                                    </p>
                                                </div>
                                            </Modal>
                                        ) : null}
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $
                                                {trainerProfileData &&
                                                trainerProfileData.classSessionPricing
                                                    ? trainerProfileData
                                                          .classSessionPricing
                                                          .virtualSessionfor15People
                                                    : "N/A"}
                                                &ensp;
                                                <span>
                                                    Flat Rate Class (For 5-15
                                                    People)
                                                </span>
                                            </h6>
                                            <h5>
                                                If trainer offers Virtual Social
                                                Sessions and Classes they will
                                                be at a discount to in person
                                                rates above. You will see these
                                                prior to checkout.
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="profile_aside_item">
                                        <h2>TRAINING LOCATIONS</h2>

                                        <hr />
                                        <div className="profile_aside_inner_item">
                                            <div className="profile_location">
                                                <img src={Tick} alt="icon" />
                                                {trainerProfileData &&
                                                trainerProfileData.preferedTrainingMode &&
                                                trainerProfileData
                                                    .preferedTrainingMode[0] ? (
                                                    <h4>
                                                        {
                                                            trainerProfileData
                                                                .preferedTrainingMode[0]
                                                        }
                                                    </h4>
                                                ) : (
                                                    "N/A"
                                                )}
                                                {trainerProfileData &&
                                                trainerProfileData.preferedTrainingMode &&
                                                trainerProfileData
                                                    .preferedTrainingMode[1] ? (
                                                    <h4 className="p-0">
                                                        {","}&nbsp;
                                                        {
                                                            trainerProfileData
                                                                .preferedTrainingMode[1]
                                                        }
                                                    </h4>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                            <div className="profile_location">
                                                <img src={Tick} alt="icon" />
                                                <h4>
                                                    {trainerProfileData &&
                                                    trainerProfileData.location
                                                        ? trainerProfileData.location
                                                        : "Not Added"}
                                                    <Link to="/">
                                                        View Location
                                                    </Link>
                                                </h4>
                                            </div>
                                            <div className="profile_location">
                                                <img src={Tick} alt="icon" />
                                                <h4>
                                                    {trainerProfileData &&
                                                    trainerProfileData.servicableLocation
                                                        ? trainerProfileData.servicableLocation
                                                        : "Not Added"}
                                                </h4>
                                            </div>
                                            <div className="profile_share">
                                                <img src={Share} alt="icon" />
                                                <Link to="/">
                                                    Share Profile
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        Book a session <ArrowHoverBlacked />
                                    </button>
                                </div>
                            </div>
                            <div className="profile_trainer_data">
                                <div className="profile_right_data">
                                    <div className="profile_right_item1">
                                        <img src={Quote} alt="qoute" />
                                        <h6>
                                            {trainerProfileData.myMotto
                                                ? trainerProfileData.myMotto
                                                : "Not Added"}
                                        </h6>
                                    </div>
                                    <div className="profile_right_item2">
                                        <h4>
                                            About {trainerProfileData.firstName}
                                        </h4>
                                        <p>
                                            {trainerProfileData.description
                                                ? trainerProfileData.description
                                                : "Not Added"}
                                        </p>

                                        <div className="profile_images">
                                            <ImageGrid
                                                trainerProfileData={
                                                    trainerProfileData
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="profile_right_item3 mb-5 pb-5">
                                        <h2>Certifications</h2>
                                        <div className="profile_item3_inner">
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                {trainerProfileData &&
                                                trainerProfileData.certification &&
                                                trainerProfileData
                                                    .certification[0] ? (
                                                    <h6>
                                                        {
                                                            trainerProfileData
                                                                .certification[0]
                                                                .certification
                                                        }{" "}
                                                    </h6>
                                                ) : (
                                                    <h6>Not Added</h6>
                                                )}
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                {trainerProfileData &&
                                                trainerProfileData.certification &&
                                                trainerProfileData
                                                    .certification[1] ? (
                                                    <h6>
                                                        {
                                                            trainerProfileData
                                                                .certification[1]
                                                                .certification
                                                        }{" "}
                                                    </h6>
                                                ) : (
                                                    <h6>Not Added</h6>
                                                )}
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                {trainerProfileData &&
                                                trainerProfileData.certification &&
                                                trainerProfileData
                                                    .certification[2] ? (
                                                    <h6>
                                                        {
                                                            trainerProfileData
                                                                .certification[2]
                                                                .certification
                                                        }{" "}
                                                    </h6>
                                                ) : (
                                                    <h6>Not Added</h6>
                                                )}
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                {trainerProfileData &&
                                                trainerProfileData.certification &&
                                                trainerProfileData
                                                    .certification[3] ? (
                                                    <h6>
                                                        {
                                                            trainerProfileData
                                                                .certification[3]
                                                                .certification
                                                        }{" "}
                                                    </h6>
                                                ) : (
                                                    <h6>Not Added</h6>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_right_item4">
                                        <h2
                                            style={{
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {trainerProfileData.firstName}
                                            <span
                                                style={{
                                                    textTransform: "none",
                                                }}
                                            >
                                                's
                                            </span>{" "}
                                            Schedule{" "}
                                        </h2>

                                        <UserScheduler
                                            id={id}
                                            parentCallback={callbackFunction}
                                        />
                                        <ButtonSection />
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </>
    );
};

const ButtonSection = () => {
    return (
        <div className="schedular_slots">
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
                <div className="item_slot4">
                    <button
                        onClick={() => {
                            history.push("/user/session-type");
                        }}
                    >
                        BOOK a session <BlueArrowButton />{" "}
                    </button>{" "}
                </div>
            </div>
        </div>
    );
};

const ImageGrid = ({ trainerProfileData }) => {
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
                        <div key={index}>
                            {trainerProfileData && trainerProfileData.images ? (
                                <div className="profile_images_container">
                                    <div className="profile_images_card box1">
                                        <img
                                            src={
                                                trainerProfileData &&
                                                trainerProfileData.images &&
                                                trainerProfileData.images[1]
                                                    ? trainerProfileData
                                                          .images[1]
                                                    : images.image
                                            }
                                            alt="picture"
                                            className="box1"
                                        />
                                    </div>
                                    <div className="flex-try-2">
                                        <div className="profile_images_card box2">
                                            <img
                                                src={
                                                    trainerProfileData &&
                                                    trainerProfileData.images &&
                                                    trainerProfileData.images[1]
                                                        ? trainerProfileData
                                                              .images[1]
                                                        : images.image
                                                }
                                                alt="picture"
                                                className="box2"
                                            />
                                        </div>

                                        <div className="flex-try-3">
                                            <div className="profile_images_card box3">
                                                <img
                                                    src={
                                                        trainerProfileData &&
                                                        trainerProfileData.images &&
                                                        trainerProfileData
                                                            .images[2]
                                                            ? trainerProfileData
                                                                  .images[2]
                                                            : images.image
                                                    }
                                                    alt="Not Added"
                                                    className="box3"
                                                />
                                            </div>

                                            <div className="profile_images_card box4">
                                                <img
                                                    src={
                                                        trainerProfileData &&
                                                        trainerProfileData.images &&
                                                        trainerProfileData
                                                            .images[3]
                                                            ? trainerProfileData
                                                                  .images[3]
                                                            : images.image
                                                    }
                                                    alt="picture"
                                                    className="box4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                "Image;'s Not Added"
                            )}
                        </div>
                    );
                })}
            </div>
            {trainerProfileData &&
            trainerProfileData.images &&
            trainerProfileData.images[4] ? (
                <div className="image_more" onClick={() => handleViewImages()}>
                    <h5>View More Images</h5>
                    <img src={ArrowNext} ali="icon" />
                </div>
            ) : null}
        </>
    );
};

export default TrainerProfile;
