import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import { Link, useParams, useHistory } from "react-router-dom";
import Tick from "../../../assets/files/FindTrainer/Tick 1.svg";
import Share from "../../../assets/files/FindTrainer/share.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import BlueHoverButton from "../../common/BlueArrowButton";
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

import MottoSessionType from "component/TrainerProfileTwo/subcomponents/MottoSessionType/index";

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
  const aboutRef = React.useRef(null);
  const priceRef = React.useRef(null);

  const [trainerProfileData, setTraierProfileData] = useState([]);
  useEffect(() => {
    fetchViewTrainer();
    //Auto scroll for book a session button
    // if (
    //   history.location.state !== undefined &&
    //   history.location.state.autoScroll
    // ) {
    //   handleBookSession();
    // }
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
    //Auto scroll for book a session button
    // history.replace({
    //   state: {
    //     autoScroll: false,
    //   },
    // });
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
  const isVirtualPresent =
    trainerProfileData?.preferedTrainingMode?.includes("virtual");
  const isInPersonPresent =
    trainerProfileData?.preferedTrainingMode?.includes("inPerson");

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
    passRatefor3SessionAtVirtual,
    passRatefor3SessionAtTrainerLocation,
    passRatefor3SessionAtClientLocation,
    passRatefor10SessionAtVirtual,
    passRatefor10SessionAtClientLocation,
    passRatefor10SessionAtTrainerLocation,
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

  //Minimum values finding
  // const findMinThreePass = [
  //   {
  //     label: "Session / (3 Session Pass Virtual)",
  //     value: passRatefor3SessionAtVirtual,
  //   },
  //   {
  //     label: "Session / (3 Session Pass At Your Location)",
  //     value: passRatefor3SessionAtClientLocation,
  //   },
  //   {
  //     label: "Session / (3 Session Pass At Trainer's Location)",
  //     value: passRatefor3SessionAtTrainerLocation,
  //   },
  // ].reduce((prev, curr) =>
  //   prev.value > 0 && prev.value < curr.value ? prev : curr
  // );

  // const findMinTenPass = [
  //   {
  //     label: "Session / (10 Session Pass Virtual)",
  //     value: passRatefor10SessionAtVirtual,
  //   },
  //   {
  //     label: "Session / (10 Session Pass At Your Location)",
  //     value: passRatefor10SessionAtClientLocation,
  //   },
  //   {
  //     label: "Session / (10 Session Pass At Trainer's Location)",
  //     value: passRatefor10SessionAtTrainerLocation,
  //   },
  // ].reduce((prev, curr) =>
  //   prev.value > 0 && prev.value < curr.value ? prev : curr
  // );

  const handleBooking = (price, type, venue, passData = null, availPass) => {
    var storedata = {
      sessionData: {
        trainerId: id,
        city: trainerProfileData?.servicableLocation,
        sessionType: venue === "virtual" ? "virtual" : "inPerson",
        venue: venue !== "virtual" ? venue : "clientLocation",
        trainingType: type,
        price: price,
        newPass: passData,
        availPass: availPass,
      },
    };

    updateUserDetails(storedata);
    if (!localStorage.getItem("token")) {
      // history.push(`/mobile/login?${encodeURIComponent("nextpath=/user/scheduler/" + id)}`);
      history.push(`/user/scheduler/${id}`);
    } else {
      console.log(availPass, "ll");

      history.push(`/user/scheduler/${id}`);
    }
  };

  return (
    <>
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
                {/* <div className="profile_aside_link">
                  <Link
                    onClick={handleBookSession}
                    onTouch={handleBookSession}
                  >{`Book  ${trainerProfileData.firstName} ${trainerProfileData?.lastName}`}</Link>
                  <img src={ArrowNext} alt="icon" />
                </div> */}

                <div className="scrollToCTA">
                  <div
                    className="about"
                    onClick={() => {
                      aboutRef.current.scrollIntoView();
                    }}
                  >
                    About {trainerProfileData?.firstName}
                  </div> <br></br>
                  <div
                    className="view_price"
                    onClick={() => {
                      priceRef.current.scrollIntoView();
                    }}
                  >
                    View {trainerProfileData?.firstName}'s training options and
                    rates
                  </div>
                </div>
                {/* <br></br> */}

                <h6>Have a question?</h6>

                <div className="request-trainer-block">
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
                      >
                        {`Message ${trainerProfileData.firstName} `}
                        <BlueHoverButton />
                      </button>
                    </div>
                  )}
                </div>
                <br></br>
                {/* <div className="profile_share">
                  <img src={Share} alt="icon" /> &ensp;
                  <Link onClick={handleCopy}>
                    <u style={{ fontSize: "18px" }}>Share Profile</u>
                  </Link>
                </div> */}
                {/* <div className="profile_aside_link">
                  <Link onClick={() => scrollToCalendar()}>View Calender</Link>
                  <img src={ArrowNext} alt="icon" />
                </div> */}
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
                  <br></br>
                  <div className="profile_right_item2" ref={priceRef}>
                    <h4>TRAIN WITH {trainerProfileData.firstName}</h4>
                    <p>
                      Browse & choose your session type to continue. You can
                      then choose an available time or message your trainer for
                      more availability & questions.
                    </p>
                    <MottoSessionType
                      oneOnone={trainerProfileData?.oneOnOnePricing}
                      social={trainerProfileData?.socialSessionPricing}
                      classPricing={trainerProfileData?.classSessionPricing}
                      handleBooking={handleBooking}
                      trainerId={id}
                      servicableLocation={
                        trainerProfileData?.servicableLocation
                      }
                      trainingFacilityLocation={
                        trainerProfileData?.trainingFacilityLocation
                      }
                    />
                  </div>

                  <div style={{ marginBottom: "7rem" }} ref={aboutRef}></div>

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
                    {/* <h2
                      style={{
                        textTransform: "capitalize",
                      }}
                      id="table_auto_scroll"
                    >
                      {trainerProfileData.firstName}
                      <span
                        style={{
                          textTransform: "none",
                        }}
                      >
                        's
                      </span>{" "}
                      calendar{" "}
                    </h2> */}

                    {/* 
                    <UserScheduler
                      id={id}
                      parentCallback={callbackFunction}
                      updateUserDetails={updateUserDetails}
                    />  */}
                    {/* <UserSchedulerScroll
                      id={id}
                      tableId={"trainer-profile-table"}
                      parentCallback={callbackFunction}
                      updateUserDetails={updateUserDetails}
                    /> */}
                    {/* <ButtonSection
                      selectedTimes={selectedTimes}
                      disableBooking={disableBooking}
                      handleSessionType={handleSessionType}
                      trainerstartSlot={trainerstartSlot}
                      trainerEndSlot={trainerEndSlot}
                    /> */}
                    {/* <div className="request-trainer-block">
                      {isLoading ? (
                        "Loading..."
                      ) : (
                        <div
                          className={
                            isLoading ? "d-none" : "request_a_time_part"
                          }
                          
                        >
                          <span style={{ color: "#2C2C2C", fontSize: "20px" }}>
                            Dont See a Time you want&ensp;?&ensp;
                          </span>
                          <button className="book_session_btn d-flex align-items-center" onClick={handleRequestTrainer}>
                            {`Request A Time with ${trainerProfileData.firstName}`}
                            <BlueHoverButton />
                          </button>
                        </div>
                      )}
                    </div> */}
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
    </>
  );
};

const ButtonSection = ({
  selectedTimes,
  handleSessionType,
  disableBooking,
  trainerstartSlot,
  trainerEndSlot,
}) => {
  const disableBtn = selectedTimes?.length > 0;

  return (
    <div className="schedular_slots">
      <div
        className={`items_slots ${disableBooking && "justify-content-center"}`}
      >
        {/* <div className="item_slot1">
          <div className="indicator"></div>
          <h5></h5>
        </div> */}
        <div className="item_slot2">
          <div className="indicator2"></div>
          <h5>UNAVAILABLE</h5>{" "}
        </div>

        {!disableBooking ? (
          <div className="item_slot3">
            <div className="indicator3"></div>
            <h5>
              {moment(trainerstartSlot).format("hh:mm A")} to{" "}
              {moment(trainerEndSlot).format("hh:mm A")}
            </h5>
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
          {images?.length > 0 ? (
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
          </div>) : null}

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
