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

const closeIcon = <img src={CloseIcon} alt="close" />;

const TrainerProfileClass = ({
  getTrainerDetail,
  updateUserDetails,
  selectedTimes,
  requestTrainerMessageApi,
}) => {
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
    });
  }

  const callbackFunction = (ts, tss, date) => {
    settrainerstartSlot(ts);
    settrainerEndSlot(tss);
    setDateSlot(date);
  };

  const toggleCarouselModel = (itemIndex) => {
    setCarouselOpen(!isCarouselOpen);
    setCurrIndex(itemIndex);
    // console.log(itemIndex);
  };

  const handleBookSession = () => {
    let reduxData = {
      selectedTrainerData: {
        trainerId: trainerProfileData["id"],
        trainerData: { ...trainerProfileData },
      },
    };
    updateUserDetails(reduxData);
    history.push("/user/scheduler");
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
    )}`;

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
          setLoading(false);
          Toast({ type: "success", message: "Success" });
          history.push("/users/dashboard/message/requested");
          resolve();
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
                <div className="profile_aside_items">
                  {isAnyOneonOnePriceAvailable && (
                    <div className="profile_aside_item">
                      <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                      <hr />
                      <div className="profile_aside_inner_item">
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
                            {`$${inPersonAtClientLocation} `}
                            <span>(at your location)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtTrainerLocation && isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAtTrainerLocation} `}
                            <span>(at trainer location)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        <h5>See package rates during checkout</h5>
                      </div>
                    </div>
                  )}
                  {isAnySocialPriceAvailable ? (
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

                      <div className="profile_aside_inner_item">
                        {virtualSessionfor2People && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSessionfor2People} `}
                            <span>virtual for 2 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor2People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor2People} `}
                            <span>at your location for 2 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtTrainerLocationfor2People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtTrainerLocationfor2People} `}
                            <span>at trainer location for 2 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {virtualSessionfor3People && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSessionfor3People} `}
                            <span>virtual for 3 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor3People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor3People} `}
                            <span>at your location for 3 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtTrainerLocationfor3People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtTrainerLocationfor3People} `}
                            <span>at trainer location for 3 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {virtualSessionfor4People && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSessionfor4People} `}
                            <span>virtual for 4 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor4People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor4People} `}
                            <span>at your location for 4 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtTrainerLocationfor4People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPeronAtTrainerLocationfor4People} `}
                            <span>at trainer location for 4 people</span>
                          </h6>
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
                      <h2>
                        CREATE A CLASS
                        <img
                          src={QMark}
                          alt="icon"
                          onClick={() => setOpenClassModel(true)}
                          className="model_Qmark"
                        />
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
                      <div className="profile_aside_inner_item">
                        {virtualSessionfor15People && isVirtualPresent ? (
                          <h6>
                            {`$${virtualSessionfor15People} `}
                            <span>virtually for 5-15 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtclientLocationfor15People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAtclientLocationfor15People} `}
                            <span>at your location for 5-15 people</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAttrainerLocationfor15People &&
                        isInPersonPresent ? (
                          <h6>
                            {`$${inPersonAttrainerLocationfor15People} `}
                            <span>at trainer location for 5-15 people</span>
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
                    <h2>TRAINING LOCATIONS</h2>

                    <hr />
                    <div className="profile_aside_inner_item">
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
                  <button className="w-100" onClick={handleBookSession}>
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
                        : null }
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
                  {trainerCertificates.length > 0 ?    <div className="profile_right_item3 mb-5 pb-5">
                    <h2>Certifications</h2>
                    <div className="profile_item3_inner">
                      {trainerCertificates.length > 0 ? (
                        <>
                          {trainerCertificates.map(({ certificate }, index) => (
                            <div
                              className="inner_items"
                              key={`${certificate}_${index}`}
                            >
                              <img src={Tick} alt="check" />
                              <h6>{certificate}</h6>
                            </div>
                          ))}
                        </>
                      ) : ( null
                        // <p>Not Added</p>
                      )}
                    </div>
                  </div> : null }
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
                      updateUserDetails={updateUserDetails}
                    />
                    <ButtonSection
                      selectedTimes={selectedTimes}
                      handleSessionType={handleSessionType}
                    />
                    <div className="request-trainer-block">
                      <button
                        className={`btn btn-transparent  fw-600 fs-18 ${
                          isLoading ? "btn-disabled" : "text-underline"
                        }`}
                        onClick={handleRequestTrainer}
                        disabled={isLoading}
                      >
                        {isLoading ? "Loading..." : "Request Slot"}
                      </button>
                    </div>
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

const ButtonSection = ({ selectedTimes, handleSessionType }) => {
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
        <div className="item_slot3">
          <div className="indicator3"></div>
          <h5>BOOKED SLOT</h5>{" "}
        </div>
        <div className="item_slot4">
          <button
            onClick={handleSessionType}
            disabled={!disableBtn}
            className={`${!disableBtn ? "disable-btn" : ""}`}
          >
            BOOK a session <BlueArrowButton />{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

const ImageGrid = ({ trainerProfileData, toggle }) => {
  const [imageView, setImageView] = useState([
    {
      image: NotFoundImage,
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
