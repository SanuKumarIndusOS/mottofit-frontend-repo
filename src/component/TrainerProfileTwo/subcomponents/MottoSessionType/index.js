import React from "react";
import "./styles.scss";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import BlueHoverButton from "component/common/BlueArrowButton";
import { tr } from "date-fns/locale";

import { GetActivePass } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dialog from "@material-ui/core/Dialog";
import { FaLandmark } from "react-icons/fa";

function MottoSessionType({
  oneOnone,
  social,
  classPricing,
  handleBooking,
  trainerId,
  GetActivePass,
  servicableLocation,
  trainingFacilityLocation,
}) {
  const CyanRadio = withStyles({
    root: {
      "&$checked": {
        color: cyan[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const [pricingItem, setPricingItem] = React.useState({
    "1 ON 1 INDIVIDUAL TRAINING": {
      "Individual Session": "Individual Session",
      "3 Session Package": "3 Session Package",
      "10 Session Package": "10 Session Package",
    },

    "SOCIAL SESSIONS": {
      "For 2 People": "For 2 People",
      "For 3 People": "For 3 People",
      "For 4 People": "For 4 People",
    },

    "CREATE A CLASS": {
      "For 5-15 People": "For 5-15 People",
    },
  });

  const [activeHeader, setactiveHeader] = React.useState("virtual");
  const [selectedSessionType, setselectedSessionType] =
    React.useState("Individual Session");
  const [open, setOpen] = React.useState(false);

  const [activePackage, setActivePackage] = React.useState("");
  const [activePacakageId, setActivePackageId] = React.useState(null);
  const [activePacakageData, setActivePackageData] = React.useState({});
  const [activePassType, setactivePassType] = React.useState([]);

  const [hideClass, sethideClass] = React.useState(true);
  const [hideSocial, sethideSocial] = React.useState(true);
  const [hideOne, sethideOne] = React.useState(true);

  const handleClose = (value) => {
    setOpen(false);
  };

  React.useEffect(() => {
    checkActivePass();
   
  }, []);

  React.useEffect(() => {
    // Check for active MottoPass if user is logged in
    // checkActivePass();

    // console.log(oneOnone);

    sethideClass(true);
    sethideSocial(true);
    sethideOne(true);

    if (activeHeader === "virtual") {
      if (Number(classPricing?.virtualSessionfor15People) === 0) {
        sethideClass(false);
      }

      if (
        Number(social?.virtualSessionfor2People) === 0 &&
        Number(social?.virtualSessionfor3People) === 0 &&
        Number(social?.virtualSessionfor4People) === 0
      ) {
        sethideSocial(false);
      }

      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.virtualSession,
            type: "1on1",
            availPass: {
              availPass: activePacakageId,
              availPassData: activePacakageData,
            },
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtVirtual,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor10SessionAtVirtual,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 180,
              totalPasses: 10,
              timeZone: "America/New_York",
              passType: "virtual",
            },
          },
          "30 Session Package": {
            price: oneOnone?.passRatefor3SessionAtVirtual
              ? 0
              : oneOnone?.passRatefor30SessionAtVirtual,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor30SessionAtVirtual,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 360,
              totalPasses: 30,
              timeZone: "America/New_York",
              passType: "virtual",
            },
          },
        },
        "SOCIAL SESSIONS": {
          "For 2-4 People": {
            price: social?.virtualSessionfor2People,
            type: "social",
          },
          // "For 3 People": {
          //   price: social?.virtualSessionfor3People,
          //   type: "social",
          // },
          // "For 4 People": {
          //   price: social?.virtualSessionfor4People,
          //   type: "social",
          // },
        },
        "CREATE A CLASS": {
          "For 5-15 People": {
            price: classPricing?.virtualSessionfor15People,
            type: "class",
          },
        },
      });
    }

    if (activeHeader === "clientLocation") {
      if (Number(classPricing?.inPersonAtclientLocationfor15People) === 0) {
        sethideClass(false);
      }

      if (
        Number(social?.inPeronAtClientLocationfor2People) === 0 &&
        Number(social?.inPeronAtClientLocationfor3People) === 0 &&
        Number(social?.inPeronAtClientLocationfor4People) === 0
      ) {
        sethideSocial(false);
      }

      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.inPersonAtClientLocation,
            type: "1on1",
            availPass: {
              availPass: activePacakageId,
              availPassData: activePacakageData,
            },
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtClientLocation,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor10SessionAtClientLocation,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 180,
              totalPasses: 10,
              timeZone: "America/New_York",
              passType: "clientLocation",
            },
          },
          "30 Session Package": {
            price: oneOnone?.passRatefor3SessionAtClientLocation
              ? 0
              : oneOnone?.passRatefor30SessionAtClientLocation,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor30SessionAtClientLocation,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 360,
              totalPasses: 30,
              timeZone: "America/New_York",
              passType: "clientLocation",
            },
          },
        },
        "SOCIAL SESSIONS": {
          "For 2-4 People": {
            price: social?.inPeronAtClientLocationfor2People,
            type: "social",
          },
          // "For 3 People": {
          //   price: social?.inPeronAtClientLocationfor3People,
          //   type: "social",
          // },
          // "For 4 People": {
          //   price: social?.inPeronAtClientLocationfor4People,
          //   type: "social",
          // },
        },
        "CREATE A CLASS": {
          "For 5-15 People": {
            price: classPricing?.inPersonAtclientLocationfor15People,
            type: "class",
          },
        },
      });
    }

    if (activeHeader === "trainerLocation") {
      if (Number(classPricing?.inPersonAttrainerLocationfor15People) === 0) {
        sethideClass(false);
      }

      if (
        Number(social?.inPeronAtTrainerLocationfor2People) === 0 &&
        Number(social?.inPeronAtTrainerLocationfor3People) === 0 &&
        Number(social?.inPeronAtTrainerLocationfor4People) === 0
      ) {
        sethideSocial(false);
      }

      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.inPersonAtTrainerLocation,
            type: "1on1",
            availPass: {
              availPass: activePacakageId,
              availPassData: activePacakageData,
            },
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtTrainerLocation,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor10SessionAtTrainerLocation,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 180,
              totalPasses: 10,
              timeZone: "America/New_York",
              passType: "trainerLocation",
            },
          },
          "30 Session Package": {
            price: oneOnone?.passRatefor3SessionAtTrainerLocation
              ? 0
              : oneOnone?.passRatefor30SessionAtTrainerLocation,
            type: "1on1",
            newPass: {
              price: oneOnone?.passRatefor30SessionAtTrainerLocation,
              purchaseDate: new Date().toISOString().slice(0, 10),
              passValidity: 360,
              totalPasses: 30,
              timeZone: "America/New_York",
              passType: "trainerLocation",
            },
          },
        },
        "SOCIAL SESSIONS": {
          "For 2-4 People": {
            price: social?.inPeronAtTrainerLocationfor2People,
            type: "social",
          },
          // "For 3 People": {
          //   price: social?.inPeronAtTrainerLocationfor3People,
          //   type: "social",
          // },
          // "For 4 People": {
          //   price: social?.inPeronAtTrainerLocationfor4People,
          //   type: "social",
          // },
        },
        "CREATE A CLASS": {
          "For 5-15 People": {
            price: classPricing?.inPersonAttrainerLocationfor15People,
            type: "class",
          },
        },
      });
    }
  }, [activeHeader, oneOnone, activePacakageId]);

  const checkActivePass = () => {
    if (localStorage.getItem("token") !== null) {
      let userId = localStorage.getItem("user-id");

      GetActivePass(userId, trainerId, "")
        .then((data) => {
          console.log(data);

          var temp = [];
          data.map((item) => {
            console.log(item?.passType);
            temp.push(item?.passType);
          });

          setactivePassType(temp);
          // setActivePackage("virtual");
          // setActivePackageId(data[0]?.id);
          // setActivePackageData(data);
        })
        .catch((er) => {
          console.log(er);
          setActivePackageId(null);
        });
    }
  };

  return (
    <div className="motto_session_type_container">
      <div className="session_type_header">
        {parseInt(oneOnone?.virtualSession) === 0 &&
        parseInt(social?.virtualSessionfor2People) === 0 &&
        parseInt(social?.virtualSessionfor3People) === 0 &&
        parseInt(social?.virtualSessionfor4People) === 0 &&
        parseInt(classPricing?.virtualSessionfor15People) === 0? null : (
          <div
            className={
              activeHeader === "virtual"
                ? "session_type_header_item left_border active_header header_width1"
                : "session_type_header_item left_border header_width1"
            }
            onClick={() => {
              setactiveHeader("virtual");
            }}
          >
            VIRTUAL
          </div>
        )}

        {parseInt(oneOnone?.inPersonAtClientLocation) === 0 &&
        parseInt(social?.inPeronAtClientLocationfor2People) === 0 &&
        parseInt(social?.inPeronAtClientLocationfor3People) === 0 &&
        parseInt(social?.inPeronAtClientLocationfor4People) === 0 &&
        parseInt(classPricing?.inPersonAtclientLocationfor15People) === 0 ? null : (
          <div
            className={
              activeHeader === "clientLocation"
                ? "session_type_header_item  active_header header_width2"
                : "session_type_header_item header_width2"
            }
            onClick={() => {
              setactiveHeader("clientLocation");
            }}
          >
            IN-PERSON (YOUR LOCATION)
          </div>
        )}

        {parseInt(oneOnone?.inPersonAtTrainerLocation) === 0 &&
        parseInt(social?.inPeronAtTrainerLocationfor2People) === 0 &&
        parseInt(social?.inPeronAtTrainerLocationfor3People) === 0 &&
        parseInt(social?.inPeronAtTrainerLocationfor4People) === 0 &&
        parseInt(classPricing?.inPersonAttrainerLocationfor15People) === 0 ? null : (
          <div
            className={
              activeHeader === "trainerLocation"
                ? "session_type_header_item  right_border active_header header_width3"
                : "session_type_header_item right_border header_width3"
            }
            onClick={() => {
              setactiveHeader("trainerLocation");
            }}
          >
            IN-PERSON (TRAINER'S LOCATION)
          </div>
        )}
      </div>
      <div className="session_type_body">
        <RadioGroup
          aria-label="sessionTypeRadio"
          name="sessionTypeRadio"
          defaultValue="Individual Session"
        >
          {Object.keys(pricingItem)?.map((item) => {
            return (
              <div style={{ maxHeight: "20 0px" }}>
                <div className="body_header">
                  {item === "CREATE A CLASS" && !hideClass
                    ? null
                    : item === "SOCIAL SESSIONS" && !hideSocial
                    ? null
                    : item}
                  {item === "1 ON 1 INDIVIDUAL TRAINING" &&
                  activeHeader !== "virtual" ? (
                    <div
                      className="serviceable_location"
                      onClick={() => setOpen(true)}
                    >
                      {activeHeader === "clientLocation"
                        ? "Areas Trainer Services"
                        : "Trainer's location"}
                    </div>
                  ) : null}{" "}
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="simple-dialog-title"
                    open={open}
                  >
                    <div style={{ padding: "1rem" }}>
                      <h5>
                        {" "}
                        {activeHeader === "clientLocation"
                          ? "Areas Trainer Services"
                          : "Trainer's location"}
                      </h5>
                      <hr></hr>

                      {activeHeader === "clientLocation"
                        ? servicableLocation
                        : trainingFacilityLocation}
                    </div>
                  </Dialog>
                </div>
                {item === "CREATE A CLASS" && !hideClass ? null : item ===
                    "SOCIAL SESSIONS" && !hideSocial ? null : (
                  <div className="line"></div>
                )}

                <div>
                  {Object.keys(pricingItem[item]).map((type, key) => {
                    return (activePassType.includes(activeHeader) &&
                      (type === "10 Session Package" ||
                        type === "30 Session Package")) ||
                      pricingItem[item][type]?.price === 0 ? null : (
                      <div className="session_item_bar">

                        
                        <FormControlLabel
                          value={type}
                          control={
                            <CyanRadio
                              onChange={(e) => {
                                setselectedSessionType(e.currentTarget.value);
                              }}
                            />
                          }
                          label={<div className="radio_label"> {type}</div>}
                          className="radio_bar_width"
                        />

                        <div className="session_type_item2">
                          <div className="session_type_item2_left">
                            {pricingItem[item][type]?.price !== 0  ? (
                              <>
                                {type === "10 Session Package"
                                  ? "$" +
                                    Math.ceil(
                                      pricingItem[item][type]?.price / 10
                                    )
                                  : type === "30 Session Package"
                                  ? "$" +
                                    Math.ceil(
                                      pricingItem[item][type]?.price / 30
                                    )
                                  : "$" + pricingItem[item][type]?.price}
                                <span>/ Session</span>
                              </>
                            ) : (
                              "N/A"
                            )}
                          </div>
                          <div className="session_type_item2_right">
                            {selectedSessionType === type ? (
                              pricingItem[item][type]?.price !== 0 ? (
                                <div
                                  onClick={() => {
                                    handleBooking(
                                      pricingItem[item][type]?.price,
                                      pricingItem[item][type]?.type,
                                      activeHeader,
                                      pricingItem[item][type]?.newPass,
                                      pricingItem[item][type]?.availPass
                                    );
                                  }}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                 {activePassType.includes(activeHeader) && item === "1 ON 1 INDIVIDUAL TRAINING"? "USE PACKAGE":"BOOK NOW"}  <BlueHoverButton />
                                </div>
                              ) : null
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <br></br>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      GetActivePass,
    },
    dispatch
  );
};

const MottoSessionType2 = connect(null, mapDispatchToProps)(MottoSessionType);

export default MottoSessionType2;
