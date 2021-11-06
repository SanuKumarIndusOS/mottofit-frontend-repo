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

function MottoSessionType({ oneOnone, social, classPricing }) {
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
  const [selectedSessionType, setselectedSessionType] = React.useState("");
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
          "Individual Session": { price: oneOnone?.virtualSession },
          "3 Session Package": {
            price: oneOnone?.passRatefor3SessionAtVirtual,
          },
          "10 Session Package": {
            price: oneOnone?.passRatefor10SessionAtVirtual,
          },
        },
        "SOCIAL SESSIONS": {
          "For 2 People": { price: social?.virtualSessionfor2People },
          "For 3 People": { price: social?.virtualSessionfor3People },
          "For 4 People": { price: social?.virtualSessionfor4People },
        },
        "CREATE A CLASS": { price: classPricing?.virtualSessionfor15People },
      });
    }

    if (activeHeader === "client_location") {
    }

    if (activeHeader === "trainer_locaton") {
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
            activeHeader === "client_location"
              ? "session_type_header_item  active_header"
              : "session_type_header_item "
          }
          onClick={() => {
            setactiveHeader("client_location");
          }}
        >
          IN-PERSON (YOUR LOCATION)
        </div>
        <div
          style={{ width: "50%" }}
          className={
            activeHeader === "trainer_locaton"
              ? "session_type_header_item  right_border active_header"
              : "session_type_header_item right_border"
          }
          onClick={() => {
            setactiveHeader("trainer_locaton");
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
                            $125 {pricingItem[item][type]?.price}{" "}
                            <span>/ Session</span>
                          </div>
                          <div className="session_type_item2_right">
                            {selectedSessionType === type ? (
                              <>
                                BOOK NOW <BlueHoverButton />
                              </>
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
