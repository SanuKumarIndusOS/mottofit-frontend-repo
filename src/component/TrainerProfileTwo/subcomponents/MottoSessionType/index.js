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

function MottoSessionType({ oneOnone, social, classPricing, handleBooking }) {
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
  const [price, setPrice] = React.useState("");

  const setHeader = (value) => {
    setactiveHeader(value);
  };

  React.useEffect(() => {
    // console.log(oneOnone, social, classPricing);

    if (activeHeader === "virtual") {
      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.virtualSession,
            type: "1on1",
          },
          "3 Session Package": {
            price: oneOnone?.passRatefor3SessionAtVirtual,
            type: "1on1",
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtVirtual,
            type: "1on1",
          },
        },
        "SOCIAL SESSIONS": {
          "For 2 People": {
            price: social?.virtualSessionfor2People,
            type: "social",
          },
          "For 3 People": {
            price: social?.virtualSessionfor3People,
            type: "social",
          },
          "For 4 People": {
            price: social?.virtualSessionfor4People,
            type: "social",
          },
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
      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.inPersonAtClientLocation,
            type: "1on1",
          },
          "3 Session Package": {
            price: oneOnone?.passRatefor3SessionAtClientLocation,
            type: "1on1",
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtClientLocation,
            type: "1on1",
          },
        },
        "SOCIAL SESSIONS": {
          "For 2 People": {
            price: social?.inPeronAtClientLocationfor2People,
            type: "social",
          },
          "For 3 People": {
            price: social?.inPeronAtClientLocationfor3People,
            type: "social",
          },
          "For 4 People": {
            price: social?.inPeronAtClientLocationfor4People,
            type: "social",
          },
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
      setPricingItem({
        ...pricingItem,
        "1 ON 1 INDIVIDUAL TRAINING": {
          "Individual Session": {
            price: oneOnone?.inPersonAtTrainerLocation,
            type: "1on1",
          },
          "3 Session Package": {
            price: oneOnone?.passRatefor3SessionAtTrainerLocation,
            type: "1on1",
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtTrainerLocation,
            type: "1on1",
          },
        },
        "SOCIAL SESSIONS": {
          "For 2 People": {
            price: social?.inPeronAtTrainerLocationfor2People,
            type: "social",
          },
          "For 3 People": {
            price: social?.inPeronAtTrainerLocationfor3People,
            type: "social",
          },
          "For 4 People": {
            price: social?.inPeronAtTrainerLocationfor4People,
            type: "social",
          },
        },
        "CREATE A CLASS": {
          "For 5-15 People": {
            price: classPricing?.inPersonAttrainerLocationfor15People,
            type: "class",
          },
        },
      });
    }
  }, [activeHeader, oneOnone]);

  return (
    <div className="motto_session_type_container">
      <div className="session_type_header">
        <div
          style={{ width: "15%" }}
          className={
            activeHeader === "virtual"
              ? "session_type_header_item left_border active_header "
              : "session_type_header_item left_border"
          }
          onClick={() => {
            setactiveHeader("virtual");
          }}
        >
          VIRTUAL
        </div>
        <div
          style={{ width: "35%" }}
          className={
            activeHeader === "clientLocation"
              ? "session_type_header_item  active_header"
              : "session_type_header_item "
          }
          onClick={() => {
            setactiveHeader("clientLocation");
          }}
        >
          IN-PERSON (YOUR LOCATION)
        </div>
        <div
          style={{ width: "50%" }}
          className={
            activeHeader === "trainerLocation"
              ? "session_type_header_item  right_border active_header"
              : "session_type_header_item right_border"
          }
          onClick={() => {
            setactiveHeader("trainerLocation");
          }}
        >
          IN-PERSON (TRAINER'S LOCATION)
        </div>
      </div>
      <div className="session_type_body">
        <RadioGroup
          aria-label="sessionTypeRadio"
          name="sessionTypeRadio"
          defaultValue="Individual Session"
        >
          {Object.keys(pricingItem)?.map((item) => {
            return (
              <div style={{ maxHeight: "20 0px", marginBottom: "1rem" }}>
                <div className="body_header">{item}</div>
                <div className="line"></div>
                <div>
                  {Object.keys(pricingItem[item]).map((type, key) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center ",
                        }}
                      >
                        <FormControlLabel
                          value={type}
                          control={
                            <CyanRadio
                              onChange={(e) => {
                                setselectedSessionType(e.currentTarget.value);
                              }}
                            />
                          }
                          label={<div className="radio_label"> {type} </div>}
                          style={{ width: "40%" }}
                        />

                        <div className="session_type_item2">
                          <div className="session_type_item2_left">
                            ${pricingItem[item][type]?.price}{" "}
                            <span>/ Session</span>
                          </div>
                          <div className="session_type_item2_right">
                            {selectedSessionType === type ? (
                              <div
                                onClick={() => {
                                  
                                  handleBooking(
                                    pricingItem[item][type]?.price,
                                    pricingItem[item][type]?.type,
                                    activeHeader
                                  );
                                }}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                BOOK NOW <BlueHoverButton />
                              </div>
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

export default MottoSessionType;
