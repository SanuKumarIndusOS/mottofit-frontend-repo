import React from "react";
import "./styles.scss";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function MottoSessionType() {
  const pricingItem = {
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
  };

  const [activeHeader, setactiveHeader] = React.useState("virtual");

  const setHeader = (value) => {
    setactiveHeader(value);
  };

  console.log(pricingItem);

  return (
    <div className="motto_session_type_container">
      <div className="session_type_header">
        <div
          style={{ flex: 1 }}
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
          style={{ flex: 2 }}
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
          style={{ flex: 2 }}
          className={
            activeHeader === "trainer_locaton"
              ? "session_type_header_item  right_border active_header"
              : "session_type_header_item right_border"
          }
          onClick={() => {
            setactiveHeader("trainer_locaton");
          }}
        >
          IN-PERSON (TRAINER'S FACILITY)
        </div>
      </div>
      <div className="session_type_body">
      <RadioGroup aria-label="sessionTypeRadio" name="sessionTypeRadio" >
        {Object.keys(pricingItem)?.map((item) => {
          return (
            <div>
              <div className="body_header">{item}</div>
              <hr></hr>
              <div>
             
                {Object.keys(pricingItem[item]).map((type,key) => {
                  return (
                
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center ",
                          
                        }}
                      >
                        <FormControlLabel
                          value={type}
                          control={<Radio />}
                          label={type}
                          style={{flex:"1"}}
                        />
                        <div  style={{flex:"1"}}>125$/Session</div>
                        <div  style={{flex:"1"}}>bookmyslsot</div>
                      </div>
                   
                  
                  );
                })}
                 
                {/* <RadioGroup
                  aria-label={item}
                  
                  name={item}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center ",
                      justifyContent: "space-between ",
                    }}
                  >
                   
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Individual Session"
                    />
                    <div>125$/Session</div>
                    <div>bookmyslsot</div>
                  </div>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="30 Session Package"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="10 Session Package"
                  />
                </RadioGroup> */}
              </div>
              <br></br>
            </div>
          );
        })}

        {/* <div>
          <div className="body_header">1 ON 1 INDIVIDUAL TRAININIG</div>
          <hr></hr>
          <div>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center ",
                  justifyContent: "space-between ",
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Individual Session"
                />
                <div>125$/Session</div>
                <div>bookmyslsot</div>
              </div>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="30 Session Package"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="10 Session Package"
              />
            </RadioGroup>
          </div>
          <br></br>
        </div>

        <div>
          <div className="body_header">SOCIAL SESSIONS</div>
          <hr></hr>
          <div></div>
          <br></br>
        </div>

        <div>
          <div className="body_header">CREATE A CLASS</div>
          <hr></hr>
          <div></div>
          <br></br>
        </div> */}

         </RadioGroup>
      </div>
    </div>
  );
}

export default MottoSessionType;
