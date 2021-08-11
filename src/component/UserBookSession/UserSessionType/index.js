import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./styles.scss";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import TrainerIcon from "../../../assets/files/UserOnboard/UserSessionAsset/training1on1.svg";
import Social from "../../../assets/files/UserOnboard/UserSessionAsset/social.svg";
import ClassIcon from "../../../assets/files/UserOnboard/UserSessionAsset/class.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import QMark from "../../../assets/files/FindTrainer/Q Mark.svg";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUserDetails } from "action/userAct";
import { updateTrainerDetails } from "action/trainerAct";
import { history } from "helpers";
import { useLocation } from "react-router-dom";

// import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";
// import "./modal.scss";

let trainingTypeOption = [
  { label: "Boxing", value: "Boxing" },
  { label: "Pilates", value: "Pilates" },
  {
    label: "Strength & HIIT",
    value: "Strength & HIIT",
  },
  {
    label: "Yoga",
    value: "Yoga",
  },
];

let options = [
  { value: "New York City", label: "New York" },
  { value: "Miami", label: "Miami" },
  { value: "Hamptons", label: "Hampton" },
  { value: "Palm Beach", label: "Palm Beach" },
];

let trainingVenueOptions = [
  { value: "trainerLocation", label: "Trainer's Location" },
  { value: "clientLocation", label: "Your Location" },
];

const closeIcon = <img src={CloseIcon} alt="close" />;
const UserBookSessionFC = ({
  updateUserDetails,
  sessionData,
  queryObject,
  selectedTrainerData,
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [trainingType, setTrainingType] = useState("");
  const [availableLocation, setAvailableLocation] = useState([]);
  const [trainingVenue, setTrainingVenue] = useState({
    value: "clientLocation",
    label: "Your Location",
  });

  const [preferedTrainingMode, setPreferedTrainingMode] = useState("");

  const [open, setOpen] = useState(false);
  const [trainerLocationModal, setTrainerLocationModal] = useState(false);
  const myRef = useRef(null);
  const [openClassModel, setOpenClassModel] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      // let reduxData = {
      //   isModelOpen: true,
      // };

      history.push("/mobile/login");
      history.push(`?${encodeURIComponent("nextpath=/user/session-type")}`);

      //  updateUserDetails(reduxData);
    }

    const tempTrainerData =
      selectedTrainerData?.trainerData || selectedTrainerData;

     // console.log( selectedTrainerData?.trainerData, "st");

    if (!tempTrainerData?.id) return history.push("/trainer/find");

    if (tempTrainerData?.preferedTrainingMode?.length === 1) {
      setPreferedTrainingMode(tempTrainerData?.preferedTrainingMode[0]);
    } else {
      setPreferedTrainingMode(queryObject?.location);
    }

    let tempValue = options.filter(
      ({ value }) => value === queryObject?.city
    )[0];
    let tempTrainingValue = trainingTypeOption.filter(
      ({ value }) =>
        value ===
        (queryObject?.trainingType?.value || queryObject?.trainingType)
    )[0];

    tempValue?.value && setSelectedOption(tempValue);
    tempTrainingValue?.value && setTrainingType(tempTrainingValue);

    const { servicableLocation = [], areaOfExpertise = [] } = tempTrainerData;

    const {
      inPersonAtClientLocation = "",
      inPersonAtTrainerLocation = "",
      virtualSession = "",
    } = tempTrainerData?.oneOnOnePricing || {};

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
    } = tempTrainerData.socialSessionPricing || {};

    const {
      virtualSessionfor15People = "",
      inPersonAtclientLocationfor15People = "",
      inPersonAttrainerLocationfor15People = "",
    } = tempTrainerData.classSessionPricing || {};

    const isVirtualSessionAvailable = [
      virtualSession,
      virtualSessionfor2People,
      virtualSessionfor3People,
      virtualSessionfor4People,
      virtualSessionfor15People,
    ].some((price) => price !== "" && parseFloat(price) > 0);

    const isInPersonClientLocationAvailable = [
      inPersonAtClientLocation,
      inPeronAtClientLocationfor2People,
      inPeronAtClientLocationfor3People,
      inPeronAtClientLocationfor4People,
      inPersonAtclientLocationfor15People,
    ].some((price) => price !== "" && parseFloat(price) > 0);

    const isInPersonTrainerLocationAvailable = [
      inPersonAtTrainerLocation,
      inPeronAtTrainerLocationfor2People,
      inPeronAtTrainerLocationfor3People,
      inPeronAtTrainerLocationfor4People,
      inPersonAttrainerLocationfor15People,
    ].some((price) => price !== "" && parseFloat(price) > 0);

    if (servicableLocation?.length > 0) {
      if (typeof servicableLocation === "string") {
        options = [
          {
            label: servicableLocation,
            value: servicableLocation,
          },
        ];
      } else {
        options = servicableLocation?.map((location) => ({
          label: location,
          value: location,
        }));
      }
    }
    if (areaOfExpertise?.length > 0) {
      if (typeof areaOfExpertise === "string") {
        trainingTypeOption = [
          {
            label: areaOfExpertise,
            value: areaOfExpertise,
          },
        ];
      } else {
        trainingTypeOption = areaOfExpertise?.map((trainingType) => ({
          label: trainingType,
          value: trainingType,
        }));
      }
    }

    if (servicableLocation.length === 1) {
      setSelectedOption(options[0]);
    }
    if (areaOfExpertise.length === 1) {
      setTrainingType(trainingTypeOption[0]);
    }

    if (!isInPersonClientLocationAvailable) {
      isInPersonTrainerLocationAvailable &&
        tempTrainerData?.trainingFacility &&
        setTrainingVenue({
          value: "trainerLocation",
          label: "Trainer's Location",
        });
    }

    trainingVenueOptions = [];

    if (
      isInPersonTrainerLocationAvailable &&
      tempTrainerData?.trainingFacility
    ) {
      trainingVenueOptions.push({
        value: "trainerLocation",
        label: "Trainer's Location",
      });
    }
    if (isInPersonClientLocationAvailable && tempTrainerData?.willingToTravel) {
      trainingVenueOptions.push({
        value: "clientLocation",
        label: "Your Location",
      });
    } else {
      setTrainingVenue({
        value: "trainerLocation",
        label: "Trainer's Location",
      });
    }

    // console.log(isVirtualSessionAvailable);

    if (!isVirtualSessionAvailable) {
      setPreferedTrainingMode("inPerson");
    }

    let tempAvailableLocation = [];

    if (isVirtualSessionAvailable) {
      tempAvailableLocation.push("virtual");
    }
    if (
      isInPersonClientLocationAvailable ||
      isInPersonTrainerLocationAvailable
    ) {
      tempAvailableLocation.push("inPerson");
    }

    setAvailableLocation(tempAvailableLocation);
    // console.log(location.state["slotDetails"]);
    window.scrollTo(0, 0);
  }, []);

  const getPricingObject = () => {
    const tempTrainerData =
      selectedTrainerData?.trainerData || selectedTrainerData;

    const {
      virtualSession = "",
      inPersonAtClientLocation = "",
      inPersonAtTrainerLocation = "",
    } = tempTrainerData?.oneOnOnePricing || {};

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
    } = tempTrainerData.socialSessionPricing || {};

    const {
      virtualSessionfor15People = "",
      inPersonAtclientLocationfor15People = "",
      inPersonAttrainerLocationfor15People = "",
    } = tempTrainerData.classSessionPricing || {};

    //  VIRTUAL PRICING

    const sessionOneonOne = !isNaN(virtualSession)
      ? parseFloat(virtualSession)
      : null;

    const virtualSessionClass = !isNaN(virtualSessionfor15People)
      ? parseFloat(virtualSessionfor15People)
      : null;

    const tempSocialSession = [
      virtualSessionfor2People,
      virtualSessionfor3People,
      virtualSessionfor4People,
    ].some((price) => price !== "" && parseFloat(price) > 0);

    let virtualSessionSocial = {};

    if (tempSocialSession) {
      if (!isNaN(virtualSessionfor2People)) {
        virtualSessionSocial["2people"] = {
          label: "session (2 people)",
          value: virtualSessionfor2People,
        };
      }
      if (!isNaN(virtualSessionfor3People)) {
        virtualSessionSocial["3people"] = {
          label: "session (3 people)",
          value: virtualSessionfor3People,
        };
      }

      if (!isNaN(virtualSessionfor4People)) {
        virtualSessionSocial["4people"] = {
          label: "session (4 people)",
          value: virtualSessionfor4People,
        };
      }
    }

    // IN PERSON PRICING

    // INPERSON 1ON1 PRICING

    const inPersonOneOneOne = {};

    // if (tempTrainerData?.willingToTravel) {
    if (!isNaN(inPersonAtClientLocation) && tempTrainerData?.willingToTravel) {
      inPersonOneOneOne["clientLocation"] = {
        value: inPersonAtClientLocation,
      };
    }
    // }
    if (
      !isNaN(inPersonAtTrainerLocation) &&
      tempTrainerData?.trainingFacility
    ) {
      inPersonOneOneOne["trainerLocation"] = {
        value: inPersonAtTrainerLocation,
      };
    }

    // INPERSON SOCIAL PRICING

    const inPersonSocial = {
      clientLocation: {},
      trainerLocation: {},
    };

    if (tempTrainerData?.willingToTravel) {
      if (
        !isNaN(inPeronAtClientLocationfor2People) &&
        parseInt(inPeronAtClientLocationfor2People) > 0
      ) {
        inPersonSocial["clientLocation"]["2people"] = {
          value: parseInt(inPeronAtClientLocationfor2People),
          label: "session (2 people)",
        };
      }
      if (
        !isNaN(inPeronAtClientLocationfor3People) &&
        parseInt(inPeronAtClientLocationfor3People) > 0
      ) {
        inPersonSocial["clientLocation"]["3people"] = {
          value: parseInt(inPeronAtClientLocationfor3People),
          label: "session (3 people)",
        };
      }
      if (
        !isNaN(inPeronAtClientLocationfor4People) &&
        parseInt(inPeronAtClientLocationfor4People) > 0
      ) {
        inPersonSocial["clientLocation"]["4people"] = {
          value: parseInt(inPeronAtClientLocationfor4People),
          label: "session (4 people)",
        };
      }
    }

    if (tempTrainerData?.trainingFacility) {
      if (
        !isNaN(inPeronAtTrainerLocationfor2People) &&
        parseInt(inPeronAtTrainerLocationfor2People) > 0
      ) {
        inPersonSocial["trainerLocation"]["2people"] = {
          value: parseInt(inPeronAtTrainerLocationfor2People),
          label: "session (2 people)",
        };
      }
      if (
        !isNaN(inPeronAtTrainerLocationfor3People) &&
        parseInt(inPeronAtTrainerLocationfor3People) > 0
      ) {
        inPersonSocial["trainerLocation"]["3people"] = {
          value: parseInt(inPeronAtTrainerLocationfor3People),
          label: "session (3 people)",
        };
      }
      if (
        !isNaN(inPeronAtTrainerLocationfor4People) &&
        parseInt(inPeronAtTrainerLocationfor4People) > 0
      ) {
        inPersonSocial["trainerLocation"]["4people"] = {
          value: parseInt(inPeronAtTrainerLocationfor4People),
          label: "session (4 people)",
        };
      }
    }

    // INPERSON CLASS PRICING

    const inPersonClass = {};

    if (
      !isNaN(inPersonAtclientLocationfor15People) &&
      tempTrainerData?.willingToTravel
    ) {
      inPersonClass["clientLocation"] = {
        value: inPersonAtclientLocationfor15People,
      };
    }
    if (
      !isNaN(inPersonAttrainerLocationfor15People) &&
      tempTrainerData?.trainingFacility
    ) {
      inPersonClass["trainerLocation"] = {
        value: inPersonAttrainerLocationfor15People,
      };
    }

    //  console.log({
    //    inPersonClass,
    //    inPersonSocial,
    //    inPersonOneOneOne,
    //    virtualSessionSocial,
    //    virtualSessionClass,
    //    sessionOneonOne,
    //   });

    return {
      inPersonClass,
      inPersonSocial,
      inPersonOneOneOne,
      virtualSessionSocial,
      virtualSessionClass,
      sessionOneonOne,
    };
  };

  const handleBookSession = (price, sessionType) => {
    let storeData = {
      sessionData: {
        location: selectedOption,
        trainingVenue,
        preferedTrainingMode,
        price,
        sessionType,
        trainingType,
       
      },
    };

    // console.log("called", storeData["sessionData"]);
    updateUserDetails(storeData);

   // console.log(storeData);

    history.push({
          pathname: "/user/payment",
        });

    
    // if (sessionType === "1 ON 1 TRAINING") {
    
    //   //Check for motto pass if available go to checkout
    //   history.push({
    //     pathname: "/user/motto-pass",
    //   });
    // } else {
    //   history.push({
    //     pathname: "/user/payment",
    //   });
    // }

    // if(price === 20)
    // {
    //   history.push("/user/moto-pass");
    // }else
    // {
    //   history.push("/user/payment");
    // }
  };

  let hasDataEntered = false;

  if (preferedTrainingMode === "virtual") {
    hasDataEntered = trainingType?.value;
  }

  if (preferedTrainingMode === "inPerson") {
    hasDataEntered =
      trainingType?.value && selectedOption?.value && trainingVenue?.value;
  }

  const tempTrainerData =
    selectedTrainerData?.trainerData || selectedTrainerData;

  let isVirtualPresent = availableLocation?.includes("virtual");
  let isInPersonPresent = availableLocation?.includes("inPerson");

  const pricingObject = getPricingObject();

  if (!localStorage.getItem("token")) hasDataEntered = false;

  return (
    <>
      <div className="session_outter_container">
        <div className="container">
          <div className="seesion_inner_container">
            <div className="link_wrapper">
              <img src={ArrowBack} alt="icon" />
              <div className="inner_links">
                <Link to="/user/scheduler">Change your Slot</Link>
                <div></div>
              </div>
            </div>
            <div className="session_inner_wrapper">
              <div className="session_heading">
                <h2>Choose Your Session Type</h2>
                <p>
                  Please select a preferable training location along with the
                  class size in order to book your training session.
                </p>
              </div>
              <div className="session_tabs">
                <div className="session_tabs_inner">
                  <Tabs
                    defaultTab={`${
                      preferedTrainingMode === "inPerson"
                        ? "inPerson"
                        : "virtual"
                    }`}
                    onChange={(tabId) => {
                     // console.log(tabId);
                    }}
                  >
                    <div className="sesstion_tabslist container">
                      <TabList className="w-50">
                        {/* {JSON.stringify(isVirtualPresent)} */}
                        {/* {isVirtualPresent && ( */}
                        <Tab tabFor="virtual" disabled={!isVirtualPresent}>
                          <button
                            onClick={() => setPreferedTrainingMode("virtual")}
                            className={`${
                              preferedTrainingMode === "virtual" ? "active" : ""
                            } ${
                              !isVirtualPresent
                                ? "disable-btn pointer-none"
                                : ""
                            }`}
                            disabled={!isVirtualPresent}
                          >
                            Virtual
                          </button>
                        </Tab>
                        {/* )} */}
                        {/* {isInPersonPresent && ( */}
                        {/* {JSON.stringify(isInPersonPresent)} */}
                        <Tab tabFor="inPerson" disabled={!isInPersonPresent}>
                          <button
                            onClick={() => setPreferedTrainingMode("inPerson")}
                            className={`${
                              preferedTrainingMode === "inPerson"
                                ? "active"
                                : ""
                            } ${
                              !isInPersonPresent
                                ? "disable-btn pointer-none"
                                : ""
                            }`}
                            disabled={!isInPersonPresent}
                          >
                            In Person
                          </button>
                        </Tab>
                        {/* )} */}
                      </TabList>

                      {isInPersonPresent &&
                      preferedTrainingMode === "inPerson" ? (
                        <div className="session_location_dd">
                          <div className="session_venue">
                            <div className="session_location">
                              <Select
                                value={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className="session_location_select"
                              />
                            </div>
                          </div>
                          <div className="session_venue">
                            <div className="session_location">
                              <Select
                                value={trainingType}
                                onChange={setTrainingType}
                                options={trainingTypeOption}
                                placeholder="Select Training Type"
                                className="session_location_select"
                              />
                            </div>
                          </div>
                          <div className="session_venue">
                            <div className="session_location">
                              <Select
                                value={trainingVenue}
                                onChange={setTrainingVenue}
                                options={trainingVenueOptions}
                                placeholder="Select Training Venue"
                                className="session_location_select"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-100 single-session">
                          <div className="session_venue">
                            <div className="session_location">
                              <Select
                                value={trainingType}
                                onChange={setTrainingType}
                                options={trainingTypeOption}
                                placeholder="Select Training Type"
                                className="session_location_select"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-right pt-4">
                      {trainingVenue?.label && (
                        <div className="session_view_location">
                          <Link
                            onClick={() =>
                              setTrainerLocationModal(!trainerLocationModal)
                            }
                          >
                            {` View ${
                              trainingVenue?.label === "Trainer's Location"
                                ? "Trainer's Location"
                                : "areas trainer services"
                            }`}
                          </Link>
                        </div>
                      )}
                    </div>
                    <TabPanel tabId="virtual">
                      <div className="inPerson_tab_inner">
                        <div className="inPerson_tab_wrapper">
                          {pricingObject.sessionOneonOne ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>1 ON 1 TRAINING</h2>
                                <p>
                                  Train individually with a top trainer for the
                                  highest quality of training and a personalized
                                  experience.
                                </p>
                              </div>
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
                                      Make your workout social & fun, while
                                      saving money! Complete your payment and
                                      add friends to your session simply by
                                      sending them an invite. Once they accept
                                      your invite, your session rate will
                                      automatically be adjusted.
                                    </p>
                                  </div>
                                </Modal>
                              ) : null}
                              <div className="session_card_inner">
                                <h6 className="mt-3">
                                  {`$${pricingObject.sessionOneonOne}`}
                                  <span>
                                    / session{" "}
                                    <img
                                      src={QMark}
                                      alt="icon"
                                      onClick={() => setOpen(true)}
                                    />
                                  </span>
                                </h6>

                                <img src={TrainerIcon} alt="icon" />
                              </div>
                              <button
                                onClick={() =>
                                  handleBookSession(
                                    pricingObject.sessionOneonOne,
                                    "1 ON 1 TRAINING"
                                  )
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                          {Object.values(pricingObject.virtualSessionSocial)
                            ?.length > 0 ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>SOCIAL SESSION</h2>
                                <p>
                                  Add up to 3 friends to your session. Get
                                  personal attention, while you enjoy a social
                                  experience at lower costs.
                                </p>
                              </div>
                              <div className="session_card_inner flex-column mb-4 justify-content-start">
                                {pricingObject.virtualSessionSocial?.["2people"]
                                  ?.value && (
                                  <h6 className="mt-3">
                                    {`$${pricingObject.virtualSessionSocial?.["2people"]?.value}`}
                                    <span>
                                      /{" "}
                                      {`${pricingObject.virtualSessionSocial?.["2people"]?.label}`}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}
                                {pricingObject.virtualSessionSocial["3people"]
                                  ?.value && (
                                  <h6 className="mt-0">
                                    {`$${pricingObject.virtualSessionSocial["3people"]?.value}`}
                                    <span>
                                      /{" "}
                                      {`${pricingObject.virtualSessionSocial["3people"]?.label}`}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}
                                {pricingObject.virtualSessionSocial["4people"]
                                  ?.value && (
                                  <h6 className="mt-0">
                                    {`$${pricingObject.virtualSessionSocial["4people"]?.value}`}
                                    <span>
                                      /{" "}
                                      {`${pricingObject.virtualSessionSocial["4people"]?.label}`}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}

                                <img src={Social} alt="icon" />
                              </div>
                              <button
                                onClick={() =>
                                  handleBookSession(
                                    pricingObject.virtualSessionSocial?.value,
                                    "SOCIAL SESSION"
                                  )
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                                // className={`${
                                //   !hasDataEntered ? "btn-disabled" : ""
                                // }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}

                          {pricingObject?.virtualSessionClass ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>CREATE A CLASS</h2>
                                <p>
                                  Design your very own workout party. Choose a
                                  top trainer, and add up to 14 more friends to
                                  split the cost evenly.
                                </p>
                              </div>
                              <div className="session_card_inner">
                                <h6 className="mt-3">
                                  {`$${pricingObject?.virtualSessionClass}`}
                                  <span>
                                    / session (5-15 people){" "}
                                    <img
                                      src={QMark}
                                      alt="icon"
                                      onClick={() => setOpen(true)}
                                    />
                                  </span>
                                </h6>
                                <img src={ClassIcon} alt="icon" />
                              </div>
                              <button
                                onClick={() =>
                                  handleBookSession(20, "CREATE A CLASS")
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                                // className={`${
                                //   !hasDataEntered ? "btn-disabled" : ""
                                // }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="inPerson">
                      <div className="inPerson_tab_inner">
                        <div className="inPerson_tab_wrapper">
                          {pricingObject?.inPersonOneOneOne[
                            trainingVenue?.value
                          ]?.value ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>1 ON 1 TRAINING</h2>
                                <p>
                                  Train individually with a top trainer for the
                                  highest quality of training and a personalized
                                  experience.
                                </p>
                              </div>
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
                                      Make your workout social & fun, while
                                      saving money! Complete your payment and
                                      add friends to your session simply by
                                      sending them an invite. Once they accept
                                      your invite, your session rate will
                                      automatically be adjusted.
                                    </p>
                                  </div>
                                </Modal>
                              ) : null}
                              <div className="session_card_inner">
                                <h6 className="mt-3">
                                  {`$${
                                    pricingObject?.inPersonOneOneOne[
                                      trainingVenue?.value
                                    ]?.value
                                  }`}
                                  <span>
                                    / session{" "}
                                    <img
                                      src={QMark}
                                      alt="icon"
                                      onClick={() => setOpen(true)}
                                    />
                                  </span>
                                </h6>

                                <img src={TrainerIcon} alt="icon" />
                              </div>

                              <button
                                onClick={() =>
                                  handleBookSession(
                                    pricingObject?.inPersonOneOneOne[
                                      trainingVenue?.value
                                    ]?.value,
                                    "1 ON 1 TRAINING"
                                  )
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                          {Object.values(
                            pricingObject?.inPersonSocial[trainingVenue?.value]
                          )?.length > 0 ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>SOCIAL SESSION</h2>
                                <p>
                                  Add up to 3 friends to your session. Get
                                  personal attention, while you enjoy a social
                                  experience at lower costs.
                                </p>
                              </div>
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
                                      Make your workout social & fun, while
                                      saving money! Complete your payment and
                                      add friends to your session simply by
                                      sending them an invite. Once they accept
                                      your invite, your session rate will
                                      automatically be adjusted.
                                    </p>
                                  </div>
                                </Modal>
                              ) : null}
                              <div className="session_card_inner  flex-column mb-4 justify-content-start">
                                {pricingObject?.inPersonSocial[
                                  trainingVenue?.value
                                ]["2people"]?.value && (
                                  <h6 className="mt-3">
                                    {`$${
                                      pricingObject?.inPersonSocial[
                                        trainingVenue?.value
                                      ]["2people"]?.value
                                    }`}
                                    <span>
                                      /{" "}
                                      {`${
                                        pricingObject?.inPersonSocial[
                                          trainingVenue?.value
                                        ]["2people"]?.label
                                      }`}{" "}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}
                                {pricingObject?.inPersonSocial[
                                  trainingVenue?.value
                                ]["3people"]?.value && (
                                  <h6 className="mt-0">
                                    {`$${
                                      pricingObject?.inPersonSocial[
                                        trainingVenue?.value
                                      ]["3people"]?.value
                                    }`}
                                    <span>
                                      /{" "}
                                      {`${
                                        pricingObject?.inPersonSocial[
                                          trainingVenue?.value
                                        ]["3people"]?.label
                                      }`}{" "}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}
                                {pricingObject?.inPersonSocial[
                                  trainingVenue?.value
                                ]["4people"]?.value && (
                                  <h6 className="mt-0">
                                    {`$${
                                      pricingObject?.inPersonSocial[
                                        trainingVenue?.value
                                      ]["4people"]?.value
                                    }`}
                                    <span>
                                      /{" "}
                                      {`${
                                        pricingObject?.inPersonSocial[
                                          trainingVenue?.value
                                        ]["4people"]?.label
                                      }`}{" "}
                                      <img
                                        src={QMark}
                                        alt="icon"
                                        onClick={() => setOpen(true)}
                                      />
                                    </span>
                                  </h6>
                                )}
                                <img src={Social} alt="icon" />
                              </div>
                              <button
                                onClick={() =>
                                  handleBookSession(
                                    pricingObject?.inPersonSocial[
                                      trainingVenue?.value
                                    ]?.value,
                                    "SOCIAL SESSION"
                                  )
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                                // className={`${
                                //   !hasDataEntered ? "btn-disabled" : ""
                                // }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                          {pricingObject?.inPersonClass[trainingVenue?.value]
                            ?.value ? (
                            <div className="session_cards">
                              <div className="session_card_content">
                                <h2>CREATE A CLASS</h2>
                                <p>
                                  Design your very own workout party. Choose a
                                  top trainer, and add up to 14 more friends to
                                  split the cost evenly.
                                </p>
                              </div>
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
                                      Make your workout social & fun, while
                                      saving money! Complete your payment and
                                      add friends to your session simply by
                                      sending them an invite. Once they accept
                                      your invite, your session rate will
                                      automatically be adjusted.
                                    </p>
                                  </div>
                                </Modal>
                              ) : null}
                              <div className="session_card_inner">
                                <h6 className="mt-3">
                                  {`$${
                                    pricingObject?.inPersonClass[
                                      trainingVenue?.value
                                    ]?.value
                                  }`}
                                  <span>
                                    / 15 People{" "}
                                    <img
                                      src={QMark}
                                      alt="icon"
                                      onClick={() => setOpen(true)}
                                    />
                                  </span>
                                </h6>
                                <img src={ClassIcon} alt="icon" />
                              </div>
                              <button
                                onClick={() =>
                                  handleBookSession(
                                    pricingObject?.inPersonClass[
                                      trainingVenue?.value
                                    ]?.value,
                                    "CREATE A CLASS"
                                  )
                                }
                                disabled={!hasDataEntered}
                                className={`${
                                  !hasDataEntered ? "btn-disabled" : ""
                                }`}
                                // className={`${
                                //   !hasDataEntered ? "btn-disabled" : ""
                                // }`}
                              >
                                BOOK YOUR SESSION <ArrowHoverBlacked />
                              </button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {trainerLocationModal ? (
          <Modal
            open={trainerLocationModal}
            onClose={() => {
              setTrainerLocationModal(false);
              // history.push("card");
            }}
            center
            closeIcon={<img src={CloseIcon} alt="close" />}
            // container={myRef.current}
            styles={{
              boaderRadius: "10px",
            }}
          >
            <div className="model_styles modal-heading">
              <h2>
                {`${
                  trainingVenue?.label === "Trainer's Location"
                    ? "Trainer's Locations"
                    : "Neighbourhood Locations"
                }`}
              </h2>
              {trainingVenue?.label === "Trainer's Location" ? (
                <p>
                  {tempTrainerData?.trainingFacilityLocation ||
                    "No trainer locations"}
                </p>
              ) : (
                <p>
                  {tempTrainerData?.serviceableNeighbourHood ||
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

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
  queryObject: state.trainerReducer.query,
  selectedTrainerData: state.userReducer.selectedTrainerData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const UserBookSession = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBookSessionFC);

export default UserBookSession;
