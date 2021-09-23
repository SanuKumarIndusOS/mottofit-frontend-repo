import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import { Link, useParams, useHistory } from "react-router-dom";
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
import UserSchedulerScroll from "component/common/UserSchedulerScroll/UserScheduler";
import BlueArrowButton from "../../common/BlueArrowButton";
import { history } from "helpers";
import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { copyTextToClipboard } from "service/helperFunctions";
import FullScreenCarousel from "component/common/FullScreenCarousel";
import { requestTrainerMessageAct } from "action/trainerAct";
import { Toast } from "service/toast";
import Dialog from "@material-ui/core/Dialog";
import moment from "moment";

const closeIcon = <img src={CloseIcon} alt="close" />;

const TrainerProfileClass = ({
  getTrainerDetail,
  updateUserDetails,
  selectedTimes,
  requestTrainerMessageApi,
}) => {
  const [collapseTitle, setCollapseTitle] = useState([
    false,
    false,
    false,
    true,
  ]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [openClassModel, setOpenClassModel] = useState(false);
  const [trainerstartSlot, settrainerstartSlot] = React.useState();
  const [trainerEndSlot, settrainerEndSlot] = React.useState();
  const [DateSlot, setDateSlot] = React.useState();
  const [isCarouselOpen, setCarouselOpen] = useState(false);
  const [currItemIndex, setCurrIndex] = useState("");
  const [trainerLocationModal, setTrainerLocationModal] = useState(false);
  const [viewLocationType, setViewLocationType] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [trainerCertificates, setTrainerCertificates] = useState([]);
  const [disableBooking, setDisableBooking] = useState(true);

  const [trainerProfileData, setTraierProfileData] = useState([]);
  useEffect(() => {
    fetchViewTrainer();
  }, []);

  const { id } = useParams();

  function fetchViewTrainer() {
    getTrainerDetail(id, false).then((data) => {
      const { certification } = data;

      let tempCertificate = certification.filter(
        (data) => data.certificate !== ""
      );

      setTrainerCertificates(tempCertificate);

      setTraierProfileData(data);

      console.log(data);
    });
  }

  const callbackFunction = (ts, tss, date) => {
    console.log(ts, tss, date, "oop");
    settrainerstartSlot(ts);
    settrainerEndSlot(tss);
    setDateSlot(date);
    setDisableBooking(false);
  };

  const toggleCarouselModel = (itemIndex) => {
    setCarouselOpen(!isCarouselOpen);
    setCurrIndex(itemIndex);
    // console.log(itemIndex);
  };

  const handleBookSession = () => {
    // let reduxData = {
    //   selectedTrainerData: {
    //     trainerId: trainerProfileData["id"],
    //     trainerData: { ...trainerProfileData },
    //   },
    // };
    // updateUserDetails(reduxData);
    // history.push(`/user/scheduler/${trainerProfileData["id"]}`);

    const trainerProfileCalendar = document.getElementById(
      "trainer-profile-table"
    );
    const trainerProfileMobileCalendar = document.getElementById(
      "trainer_profile_mobile_calendar"
    );

    let mql = window.matchMedia("(max-width: 700px)");

    if (mql.matches) {
      if (trainerProfileMobileCalendar) {
        trainerProfileMobileCalendar.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    } else {
      if (trainerProfileCalendar) {
        trainerProfileCalendar.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  };
  const handleSessionType = () => {
    let reduxData = {
      selectedTrainerData: {
        ...trainerProfileData,
      },
      bookingData: {
        start_slot: trainerstartSlot,
        end_slot: trainerEndSlot,
        date: DateSlot,
      },
    };

    // console.log("logged", reduxData);

    updateUserDetails(reduxData);
    history.push("/user/session-type");
  };

  const areaOfExpertise = trainerProfileData?.areaOfExpertise?.toString();
  const isVirtualPresent = trainerProfileData?.preferedTrainingMode?.includes(
    "virtual"
  );
  const isInPersonPresent = trainerProfileData?.preferedTrainingMode?.includes(
    "inPerson"
  );

  const handleRequestTrainer = () => {
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
      requestTrainerMessageApi(payload)
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

  const handleCopy = () => {
    let profileLink = window?.location?.href;
    profileLink && copyTextToClipboard(profileLink, "Link copied");
  };

  //Collapse function
  const collapseToggle = (index) => {
    let collapseDetails = collapseTitle;
    var checkCollapse = collapseDetails.find((val, key) => index === key);
    collapseDetails[index] = !checkCollapse;
    setCollapseTitle([...collapseDetails]);
  };

  //scroll to calendar part
  const scrollToCalendar = () => {
    window.scrollTo(0, window.screen.width > 890 ? 1200 : 8000);
  };

  const {
    virtualSession = "",
    inPersonAtClientLocation = "",
    inPersonAtTrainerLocation = "",
  } = trainerProfileData?.oneOnOnePricing || {};

  const {
    virtualSessionfor2People = "",
    virtualSessionfor3People = "",
    virtualSessionfor4People = "",
    inPeronAtClientLocationfor2People = "",
    inPeronAtClientLocationfor3People = "",
    inPeronAtClientLocationfor4People = "",
    inPeronAtTrainerLocationfor2People = "",
    inPeronAtTrainerLocationfor3People = "",
    inPeronAtTrainerLocationfor4People = "",
  } = trainerProfileData.socialSessionPricing || {};

  const {
    virtualSessionfor15People = "",
    inPersonAtclientLocationfor15People = "",
    inPersonAttrainerLocationfor15People = "",
  } = trainerProfileData.classSessionPricing || {};

  const isAnyOneonOnePriceAvailable = [
    virtualSession,
    inPersonAtClientLocation,
    inPersonAtTrainerLocation,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  const isAnySocialPriceAvailable = [
    virtualSessionfor2People,
    virtualSessionfor3People,
    virtualSessionfor4People,
    inPeronAtClientLocationfor2People,
    inPeronAtClientLocationfor3People,
    inPeronAtClientLocationfor4People,
    inPeronAtTrainerLocationfor2People,
    inPeronAtTrainerLocationfor3People,
    inPeronAtTrainerLocationfor4People,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  const isAnyClassPriceAvailable = [
    virtualSessionfor15People,
    inPersonAtclientLocationfor15People,
    inPersonAttrainerLocationfor15People,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  return (
    <>
      {console.log(collapseTitle, "asdsdfdsfdsf")}
      <div className="profile_main">
        <div className="profile_outter_container">
          <div className="profile_wrapper_container ">
            <div className="profile_header">
              <div className="inner_profile container">
                {trainerProfileData && trainerProfileData.profilePicture ? (
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
                  <div className="not_found">
                    {" "}
                    {trainerProfileData.firstName?.[0]}
                  </div>
                  //<img src={NotFoundImage} alt="Not Found Image" />
                )}
                <div className="profile_header_inner">
                  <h2>
                    {trainerProfileData.firstName}&nbsp;
                    {trainerProfileData.lastName}
                  </h2>
                  <p>{areaOfExpertise}</p>
                </div>
                <div className="profile_header_link">
                  <img src={ArrowBack} alt="icon" />
                  <Link to="/trainer/find">Back to Search</Link>
                </div>
              </div>
            </div>
            <div className="profile_main_contents container">
              <div className="profile_aside">
                <div className="profile_aside_link">
                  <Link onClick={handleBookSession}>View Calender</Link>
                  <img src={ArrowNext} alt="icon" />
                </div>
                {/* <div className="profile_aside_link">
                  <Link onClick={() => scrollToCalendar()}>View Calender</Link>
                  <img src={ArrowNext} alt="icon" />
                </div> */}
                <div className="profile_aside_items">
                  {isAnyOneonOnePriceAvailable && (
                    <div className="profile_aside_item">
                      <h2 onClick={() => collapseToggle(0)}>
                        1 ON 1 INDIVIDUAL TRAINING
                        <span
                          className={`trainer_title_collapse ${
                            !collapseTitle[0] && "trainer_title_rotate"
                          }`}
                        >
                          &#10094;
                        </span>
                      </h2>
                      <hr />
                      <div
                        className={`profile_aside_inner_item ${
                          !collapseTitle[0] && "d-none"
                        }`}
                      >
                        <p>
                          All the rates displayed below are the total amounts
                          for each session.
                        </p>
                        {virtualSession && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSession} `}
                            <span>(Virtual Session)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtClientLocation && isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAtClientLocation}`}
                            <span>(In Person - At Your Location)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtTrainerLocation && isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAtTrainerLocation}`}
                            <span>(In Person - At Trainer's Location)</span>
                          </h6>
                        ) : (
                          ""
                        )}

                        <h6 className="for_people_title">For 3 Session Pass</h6>
                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor3SessionAtVirtual !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor3SessionAtVirtual}`}
                            <span>Session / (Virtual)</span>
                          </h6>
                        )}
                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor3SessionAtClientLocation !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor3SessionAtClientLocation}`}
                            <span>
                              Session / (In Person - At Your Location)
                            </span>
                          </h6>
                        )}
                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor3SessionAtTrainerLocation !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor3SessionAtTrainerLocation}`}
                            <span>
                              Session / (In Person - At Trainer's Location)
                            </span>
                          </h6>
                        )}
                        <h6 className="for_people_title">
                          For 10 Session Pass
                        </h6>
                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor10SessionAtVirtual !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor10SessionAtVirtual}`}
                            <span>Session / (Virtual)</span>
                          </h6>
                        )}
                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor10SessionAtClientLocation !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor10SessionAtClientLocation}`}
                            <span>
                              <span>
                                Session / (In Person - At Your Location)
                              </span>
                            </span>
                          </h6>
                        )}

                        {trainerProfileData?.oneOnOnePricing
                          ?.passRatefor10SessionAtTrainerLocation !== 0 && (
                          <h6>
                            {`$${trainerProfileData?.oneOnOnePricing.passRatefor10SessionAtTrainerLocation}`}
                            <span>
                              <span>
                                Session / (In Person - At Trainer's Location)
                              </span>
                            </span>
                          </h6>
                        )}

                        {/* <h5
                          onClick={() => {
                            setOpenDialog(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          See package rates
                        </h5> */}
                        {/* <Dialog
                          onClose={() => {
                            setOpenDialog(false);
                          }}
                          aria-labelledby="simple-dialog-title"
                          open={openDialog}
                        >
                          <div className="packages_dialog">
                            <div className="package_header">
                              <h3>Package Rates</h3>
                            </div>
                            <hr></hr>
                            <div className="package_body">
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                3 Session Pass (Virtual) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor3SessionAtVirtual
                                  }
                                </h3>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                3 Session Pass (Your Location) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor3SessionAtClientLocation
                                  }
                                </h3>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                3 Session Pass (Trainer's Location) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor3SessionAtTrainerLocation
                                  }
                                </h3>
                              </div>
                              <br></br>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                10 Session Pass (Virtual) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor10SessionAtVirtual
                                  }
                                </h3>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                10 Session Pass (Your Location) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor10SessionAtClientLocation
                                  }
                                </h3>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "20px",
                                }}
                              >
                                10 Session Pass (Trainer's Location) &ensp;
                                <h3>
                                  $
                                  {
                                    trainerProfileData?.oneOnOnePricing
                                      .passRatefor10SessionAtTrainerLocation
                                  }
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Dialog> */}
                      </div>
                    </div>
                  )}
                  {isAnySocialPriceAvailable ? (
                    <div className="profile_aside_item">
                      <h2 onClick={() => collapseToggle(1)}>
                        SOCIAL SESSIONS{" "}
                        <img
                          src={QMark}
                          alt="icon"
                          onClick={() => setOpen(true)}
                          className="model_Qmark"
                        />
                        <span
                          className={`trainer_title_collapse ${
                            !collapseTitle[1] && "trainer_title_rotate"
                          }`}
                        >
                          &#10094;
                        </span>
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
                            <h2>Want to Train with Friends?</h2>
                            <p>
                              Make your workout social & fun, while saving
                              money! Complete your payment and add friends to
                              your session simply by sending them an invite.
                              Once they accept your invite, your session rate
                              will automatically be adjusted.
                            </p>
                          </div>
                        </Modal>
                      ) : null}

                      <div
                        className={`profile_aside_inner_item ${
                          !collapseTitle[1] && "d-none"
                        }`}
                      >
                        <p>
                          All the rates displayed below are the total amounts
                          for each session to be split between participants.
                        </p>
                        {virtualSessionfor2People !== 0 ||
                        inPeronAtClientLocationfor2People !== 0 ||
                        inPeronAtTrainerLocationfor2People !== 0 ? (
                          <>
                            <h6 className="for_people_title">For 2 People</h6>
                            {virtualSessionfor2People > 0 &&
                            isVirtualPresent ? (
                              <h6>
                                {`$${virtualSessionfor2People} `}
                                <span>(Virtual Session)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor2People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor2People}`}
                                <span>(In Person - At Your Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor2People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor2People}`}
                                <span>(In Person - At Trainer's Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          ""
                        )}

                        {/* 3 People */}
                        {virtualSessionfor3People !== 0 ||
                        inPeronAtClientLocationfor3People !== 0 ||
                        inPeronAtTrainerLocationfor3People !== 0 ? (
                          <>
                            <h6 className="for_people_title">For 3 People</h6>
                            {virtualSessionfor3People > 0 &&
                            isVirtualPresent ? (
                              <h6>
                                {`$${virtualSessionfor3People} `}
                                <span>(Virtual Session)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor3People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor3People}`}
                                <span>(In Person - At Your Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor3People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor3People}`}
                                <span>(In Person - At Trainer's Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          ""
                        )}

                        {/* 4 People */}
                        {virtualSessionfor4People !== 0 ||
                        inPeronAtClientLocationfor4People !== 0 ||
                        inPeronAtTrainerLocationfor4People !== 0 ? (
                          <>
                            <h6 className="for_people_title">For 4 People</h6>
                            {virtualSessionfor4People > 0 &&
                            isVirtualPresent ? (
                              <h6>
                                {`$${virtualSessionfor4People} `}
                                <span>(Virtual Session)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor4People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor4People}`}
                                <span>(In Person - At Your Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor4People > 0 &&
                            isInPersonPresent ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor4People}`}
                                <span>(In Person - At Trainer's Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {isAnyClassPriceAvailable ? (
                    <div className="profile_aside_item">
                      <h2 onClick={() => collapseToggle(2)}>
                        CREATE A CLASS
                        <img
                          src={QMark}
                          alt="icon"
                          onClick={() => setOpenClassModel(true)}
                          className="model_Qmark"
                        />
                        <span
                          className={`trainer_title_collapse ${
                            !collapseTitle[2] && "trainer_title_rotate"
                          }`}
                        >
                          &#10094;
                        </span>
                      </h2>
                      <hr />

                      {/* model */}
                      {openClassModel ? (
                        <Modal
                          open={openClassModel}
                          onClose={() => setOpenClassModel(false)}
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
                            <h2>Want to Create a Class?</h2>
                            <p>
                              Design your very own workout party with the
                              vertical & location of your choice. Create a class
                              by paying a flat rate and adding up to 19 friends.
                              You will be notified once they accept your invite.
                            </p>
                          </div>
                        </Modal>
                      ) : null}
                      <div
                        className={`profile_aside_inner_item ${
                          !collapseTitle[2] && "d-none"
                        }`}
                      >
                        <p>
                          All the rates displayed below are the total amounts
                          for each session to be split between participants.
                        </p>
                        {virtualSessionfor15People && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSessionfor15People} `}
                            <span>(Virtual Session)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtclientLocationfor15People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAtclientLocationfor15People}`}
                            <span>(In Person - At Your Location)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAttrainerLocationfor15People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAttrainerLocationfor15People}`}
                            <span>(In Person - At Trainer's Location)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        <h5>
                          {/* If trainer offers Virtual Social Sessions and Classes
                          they will be at a discount to in person rates above.
                          You will see these prior to checkout. */}
                        </h5>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="profile_aside_item">
                    <h2 onClick={() => collapseToggle(3)}>
                      TRAINING LOCATIONS
                      <span
                        className={`trainer_title_collapse ${
                          !collapseTitle[3] && "trainer_title_rotate"
                        }`}
                      >
                        &#10094;
                      </span>
                    </h2>

                    <hr />
                    <div
                      className={`profile_aside_inner_item ${
                        !collapseTitle[3] && "d-none"
                      }`}
                    >
                      {trainerProfileData?.preferedTrainingMode &&
                        trainerProfileData?.preferedTrainingMode?.includes(
                          "virtual"
                        ) && (
                          <div className="profile_location">
                            <img src={Tick} alt="icon" />
                            <h4>Virtual</h4>
                          </div>
                        )}

                      {trainerProfileData &&
                      trainerProfileData.servicableLocation?.length > 0 &&
                      trainerProfileData?.trainingFacility ? (
                        <div className="profile_location flex-column mt-2">
                          <div className="d-flex align-items-center w-100">
                            <img src={Tick} alt="icon" />
                            <h4>
                              {`${trainerProfileData?.servicableLocation[0]}(Training Facility)`}
                              <Link
                                onClick={() => {
                                  setTrainerLocationModal(true);
                                  setViewLocationType("trainer");
                                }}
                              >
                                location details
                              </Link>
                            </h4>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {trainerProfileData &&
                      trainerProfileData.servicableLocation?.length > 0 &&
                      trainerProfileData?.willingToTravel ? (
                        <div className="profile_location flex-column mt-2">
                          <div className="d-flex align-items-center w-100">
                            <img src={Tick} alt="icon" />
                            <h4>
                              {`${trainerProfileData?.servicableLocation[0]}(Your Location)`}
                              <Link
                                onClick={() => {
                                  setTrainerLocationModal(true);
                                  setViewLocationType("servicable");
                                }}
                              >
                                areas serviced
                              </Link>
                            </h4>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="profile_share">
                        <img src={Share} alt="icon" />
                        <Link onClick={handleCopy}>Share Profile</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_trainer_data">
                <div className="profile_right_data">
                  <div className="profile_right_item1">
                    <img src={Quote} alt="qoute" />
                    <h6>
                      {trainerProfileData.myMotto
                        ? trainerProfileData.myMotto
                        : null}
                    </h6>
                  </div>
                  <div className="profile_right_item2">
                    <h4>About {trainerProfileData.firstName}</h4>
                    <p>
                      {trainerProfileData.trainingProcess
                        ? trainerProfileData.trainingProcess
                        : null}
                    </p>

                    <div className="profile_images">
                      <ImageGrid
                        trainerProfileData={trainerProfileData}
                        toggle={toggleCarouselModel}
                        currItemIndex={currItemIndex}
                      />
                    </div>
                  </div>
                  {trainerCertificates.length > 0 ? (
                    <div className="profile_right_item3 mb-5 pb-5">
                      <h2>Certifications</h2>
                      <div className="profile_item3_inner">
                        {
                          trainerCertificates.length > 0 ? (
                            <>
                              {trainerCertificates.map(
                                ({ certificate }, index) => (
                                  <div
                                    className="inner_items"
                                    key={`${certificate}_${index}`}
                                  >
                                    <img src={Tick} alt="check" />
                                    <h6>{certificate}</h6>
                                  </div>
                                )
                              )}
                            </>
                          ) : null
                          // <p>Not Added</p>
                        }
                      </div>
                    </div>
                  ) : null}
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
                    <div className="request-trainer-block">
                      {isLoading ? (
                        "Loading..."
                      ) : (
                        <div
                          className={
                            isLoading ? "d-none" : "request_a_time_part"
                          }
                          onClick={handleRequestTrainer}
                        >
                          <span style={{ color: "#2C2C2C", fontSize: "20px" }}>
                            Dont See a Time you want&ensp;?&ensp;
                          </span>
                          <button className="book_session_btn d-flex align-items-center">
                            {`Request A Time with ${trainerProfileData.firstName}`}
                            <ArrowHoverBlacked />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* 
                    <UserScheduler
                      id={id}
                      parentCallback={callbackFunction}
                      updateUserDetails={updateUserDetails}
                    />  */}
                    <UserSchedulerScroll
                      id={id}
                      tableId={"trainer-profile-table"}
                      parentCallback={callbackFunction}
                      updateUserDetails={updateUserDetails}
                    />
                    <ButtonSection
                      selectedTimes={selectedTimes}
                      disableBooking={disableBooking}
                      handleSessionType={handleSessionType}
                      trainerstartSlot={trainerstartSlot}
                      trainerEndSlot={trainerEndSlot}
                    />
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isCarouselOpen && (
          <FullScreenCarousel
            images={trainerProfileData?.images}
            toggle={toggleCarouselModel}
            currItemIndex={currItemIndex}
            // index={currItemIndex}
          />
        )}

        {trainerLocationModal ? (
          <Modal
            open={trainerLocationModal}
            onClose={() => {
              setTrainerLocationModal(false);
              setViewLocationType("");
            }}
            center
            closeIcon={<img src={CloseIcon} alt="close" />}
            styles={{
              boaderRadius: "10px",
            }}
          >
            <div className="model_styles modal-heading">
              <h2>{`${
                viewLocationType === "trainer" ? "Trainer's" : "Servicable"
              } Locations`}</h2>
              {viewLocationType === "trainer" ? (
                <p>
                  {trainerProfileData?.trainingFacilityLocation ||
                    "No trainer locations"}
                </p>
              ) : (
                <p>
                  {trainerProfileData?.serviceableNeighbourHood ||
                    "No neighbourhood locations"}
                </p>
              )}
            </div>
          </Modal>
        ) : null}
      </div>

      {/* Mobile Layout */}

      {/* <div className="trainer_profile_mob">
        <div className="heading">
          <div className="back_to_search">
            <p>Back to Search</p>
          </div>
          <div className="profile_pic"></div>
          <div className="name">Praveen Nat</div>
          <div className="activity">PILATES, STRENGTH & HIIT, BOXING, YOGA</div>
        </div>
        <div className="pricing">
          <div className="on1"></div>
          <div className="social"></div>
          <div className="class"></div>
        </div>
        <div className="short_description">
          This trainers motto can go over here. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam.
        </div>
        <div className="about"></div>
        <div className="mob_image_grid"></div>
        <div className="certifications"></div>
        <div className="scheduler"></div>
        <div className="book_button"></div>
        <div className="other_trainers"></div>
      </div> */}
    </>
  );
};

const ButtonSection = ({
  selectedTimes,
  handleSessionType,
  disableBooking,
  trainerstartSlot,
  trainerEndSlot
}) => {
  const disableBtn = selectedTimes?.length > 0;

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

        {!disableBooking ? (
          <div className="item_slot3">
            <div className="indicator3"></div>
            <h5> {moment(trainerstartSlot).format("hh:mm A")} to <br></br> {moment(trainerEndSlot).format("hh:mm A")}</h5>
          </div>
        ) : null}

       

        <div className="item_slot4">
          {!disableBooking ? (
            <button
              onClick={handleSessionType}
              // disabled={disableBooking}
            >
              BOOK selected time
              <ArrowHoverBlacked />{" "}
            </button>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
};

const ImageGrid = ({ trainerProfileData, toggle }) => {
  const [imageView, setImageView] = useState([
    {
      image: null,
    },
  ]);
  const handleViewImages = () => {
    setImageView([...imageView, { image: Profile }]);
  };

  const { images = [] } = trainerProfileData;

  return (
    <>
      <div className="profile_images_grid">
        {/* {images.map((img, index) => {
          return ( */}
        <div>
          {/* {images?.length > 0 ? ( */}
          <div className="profile_images_container">
            {images[0] && (
              <div
                className="profile_images_card box1"
                onClick={() => toggle(0)}
              >
                <img
                  src={images[0] || imageView[0]?.image}
                  alt="picture"
                  className="box1"
                  onError={(e) => {
                    e.target.src = imageView[0]?.image;
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
            <div className="flex-try-2">
              {images[1] && (
                <div
                  className="profile_images_card box2"
                  onClick={() => toggle(1)}
                >
                  <img
                    src={images[1] || imageView[0]?.image}
                    alt="picture"
                    className="box2"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div className="flex-try-3">
                {images[2] && (
                  <div
                    className="profile_images_card box3"
                    onClick={() => toggle(2)}
                  >
                    <img
                      src={images[2] || imageView[0]?.image}
                      alt="Not Added"
                      className="box3"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {images[3] && (
                  <div
                    className="profile_images_card box4"
                    onClick={() => toggle(3)}
                  >
                    <img
                      src={images[3] || imageView[0]?.image}
                      alt="picture"
                      className="box4"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* {images.length === 0 && <p>Images Not Added</p>} */}

          {/* ) : (
                "Image's Not Added" */}
          {/* )} */}
        </div>
        {/* ); })} */}
      </div>
      {/* {trainerProfileData &&
      trainerProfileData.images &&
      trainerProfileData.images[4] ? (
        <div className="image_more" onClick={() => handleViewImages()}>
          <h5>View More Images</h5>
          <img src={ArrowNext} ali="icon" />
        </div>
      ) : null} */}
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedTrainerData: state.userReducer.selectedTrainerData,
  selectedTimes: state.userReducer.selectedTimes,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerDetail,
      updateUserDetails,
      requestTrainerMessageApi: requestTrainerMessageAct,
    },
    dispatch
  );
};

const TrainerProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerProfileClass);

export default TrainerProfile;
