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
import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { copyTextToClipboard } from "service/helperFunctions";

const closeIcon = <img src={CloseIcon} alt="close" />;

const TrainerProfileClass = ({
  getTrainerDetail,
  updateUserDetails,
  selectedTimes,
}) => {
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [openClassModel, setOpenClassModel] = useState(false);
  const [trainerstartSlot, settrainerstartSlot] = React.useState();
  const [trainerEndSlot, settrainerEndSlot] = React.useState();
  const [DateSlot, setDateSlot] = React.useState();

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

  const handleBookSession = () => {
    history.push("/user/scheduler");
  };
  const handleSessionType = () => {
    let reduxData = {
      selectedTrainerData: {
        ...trainerProfileData,
      },
    };

    // console.log("logged", reduxData);

    updateUserDetails(reduxData);
    history.push("/user/session-type");
  };

  const areaOfExpertise = trainerProfileData?.areaOfExpertise?.toString();

  const handleCopy = () => {
    let profileLink = window?.location?.href;
    profileLink && copyTextToClipboard(profileLink, "Link copied");
  };

  const { virtualSession = "", inPersonAtClientLocation = "" } =
    trainerProfileData?.oneOnOnePricing || {};

  const {
    virtualSessionfor2People = "",
    virtualSessionfor3People = "",
    virtualSessionfor4People = "",
    inPeronAtClientLocationfor2People = "",
    inPeronAtClientLocationfor3People = "",
    inPeronAtClientLocationfor4People = "",
  } = trainerProfileData.socialSessionPricing || {};

  const {
    virtualSessionfor15People = "",
    inPersonAtclientLocationfor15People = "",
  } = trainerProfileData.classSessionPricing || {};

  const isAnyOneonOnePriceAvailable =
    virtualSession || inPersonAtClientLocation;

  const isAnySocialPriceAvailable = [
    virtualSessionfor2People,
    virtualSessionfor3People,
    virtualSessionfor4People,
    inPeronAtClientLocationfor2People,
    inPeronAtClientLocationfor3People,
    inPeronAtClientLocationfor4People,
  ].some((price) => price !== "");

  const isAnyClassPriceAvailable =
    virtualSessionfor15People || inPeronAtClientLocationfor4People;

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
                  <img src={NotFoundImage} alt="Not Found Image" />
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
                  <Link to="/user/scheduler">View Calender</Link>
                  <img src={ArrowNext} alt="icon" />
                </div>
                <div className="profile_aside_items">
                  {isAnyOneonOnePriceAvailable && (
                    <div className="profile_aside_item">
                      <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                      <hr />
                      <div className="profile_aside_inner_item">
                        {virtualSession ? (
                          <h6>
                            {`$${virtualSession} `}
                            <span>(Virtual Session)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtClientLocation ? (
                          <h6>
                            {`$${inPersonAtClientLocation} `}
                            <span>(In Person Session)</span>
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
                        {virtualSessionfor2People ? (
                          <h6>
                            {`$${virtualSessionfor2People} `}
                            <span>/ Session (Virtual For 2 People)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor2People ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor2People} `}
                            <span>(In Person Session)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {virtualSessionfor3People ? (
                          <h6>
                            {`$${virtualSessionfor3People} `}
                            <span>/ Session (Virtual For 3 People)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor3People ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor3People} `}
                            <span>(In Person Session)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {virtualSessionfor4People ? (
                          <h6>
                            {`$${virtualSessionfor4People} `}
                            <span>/ Session (Virtual For 4 People)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPeronAtClientLocationfor4People ? (
                          <h6>
                            {`$${inPeronAtClientLocationfor4People} `}
                            <span>(In Person Session)</span>
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
                        {virtualSessionfor15People ? (
                          <h6>
                            {`$${virtualSessionfor15People} `}
                            <span>Flat Rate Class (For 5-15 People)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        {inPersonAtclientLocationfor15People ? (
                          <h6>
                            {`$${inPersonAtclientLocationfor15People} `}
                            <span>(In Person Session) (For 5-15 People)</span>
                          </h6>
                        ) : (
                          ""
                        )}
                        <h5>
                          If trainer offers Virtual Social Sessions and Classes
                          they will be at a discount to in person rates above.
                          You will see these prior to checkout.
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
                      <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>
                          {trainerProfileData?.preferedTrainingMode?.toString()}
                        </h4>
                      </div>
                      <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>
                          {trainerProfileData && trainerProfileData.location
                            ? trainerProfileData.location
                            : "Not Added"}
                          <Link to="/">View Location</Link>
                        </h4>
                      </div>
                      {/* <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>
                          {trainerProfileData &&
                          trainerProfileData.servicableLocation
                            ? trainerProfileData.servicableLocation
                            : "Not Added"}
                        </h4>
                      </div> */}
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
                        : "Not Added"}
                    </h6>
                  </div>
                  <div className="profile_right_item2">
                    <h4>About {trainerProfileData.firstName}</h4>
                    <p>
                      {trainerProfileData.description
                        ? trainerProfileData.description
                        : "Not Added"}
                    </p>

                    <div className="profile_images">
                      <ImageGrid trainerProfileData={trainerProfileData} />
                    </div>
                  </div>
                  <div className="profile_right_item3 mb-5 pb-5">
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
                      ) : (
                        <p>Not Added</p>
                      )}
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
                      updateUserDetails={updateUserDetails}
                    />
                    <ButtonSection
                      selectedTimes={selectedTimes}
                      handleSessionType={handleSessionType}
                    />
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

const ImageGrid = ({ trainerProfileData }) => {
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
              <div className="profile_images_card box1">
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
                <div className="profile_images_card box2">
                  <img
                    src={images[1] || imageView[0]?.image}
                    alt="picture"
                    className="box2"
                  />
                </div>
              )}

              <div className="flex-try-3">
                {images[2] && (
                  <div className="profile_images_card box3">
                    <img
                      src={images[2] || imageView[0]?.image}
                      alt="Not Added"
                      className="box3"
                    />
                  </div>
                )}

                {images[3] && (
                  <div className="profile_images_card box4">
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

          {images.length === 0 && <p>Images Not Added</p>}
          {/* ) : (
                "Image's Not Added" */}
          {/* )} */}
        </div>
        {/* ); })} */}
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

const mapStateToProps = (state) => ({
  selectedTrainerData: state.userReducer.selectedTrainerData,
  selectedTimes: state.userReducer.selectedTimes,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerDetail,
      updateUserDetails,
    },
    dispatch
  );
};

const TrainerProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerProfileClass);

export default TrainerProfile;
