import React, { useState, useEffect } from "react";
import "./styles.scss";

import { connect } from "react-redux";
import { updateTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { Toast } from "service/toast";

import Calendar from "react-calendar";
import moment from "moment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import arrowSign from "assets/files/SVG/Arrow Next.svg";
import { useHistory } from "react-router-dom";

const MobileSearchMenu = ({ updateTrainerDetails }) => {
  const CyanRadio = withStyles({
    root: {
      "&$checked": {
        color: cyan[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  //Responsive search

  const [Calvalue, onChangeCal] = useState(new Date());
  const [IPCvalue, setIPCValue] = useState("");
  const [Avalvalue, setAvalValue] = useState("");
  const [VerticalVal, setVerticalVal] = useState("");
  const [LocationVal, setLocationVal] = useState("virtual");

  const handleIPCChange = (event) => {
    setIPCValue(event.target.value);
  };

  const handleAvalChange = (event) => {
    setAvalValue(event.target.value);
  };

  useEffect(() => {}, []);
  console.log("aswd");

  const [queryObject, setqueryObject] = useState({
    location: "virtual",
    vertical: "",
    date: "",
    availability: "",
    // inPerson: "In Person",
  });

  const history = useHistory();

  const search_action_mob = () => {
    let payload = {
      query: {
        location: queryObject.location,
        date: moment(Calvalue).format("YYYY-MM-DD"),
        trainingType: { label: VerticalVal, value: VerticalVal },
        availability: Avalvalue,
        // inPerson: queryObject.inPerson,
        city: IPCvalue || "",
      },
    };
    if (queryObject.location === "inPerson" && !payload.query.city) {
      //  setInPersonDD(true);
      return Toast({ type: "error", message: "City is mandatory" });
    }
    updateTrainerDetails(payload);
    history.push("/trainer/find");
  };

  return (
    <div className="mobile-search-menu">
      <div className="header">
        <div className="title">Find Your Best Match</div>
        <div className="close" onClick={() => {}}>
          x
        </div>
      </div>
      <div className="content">
        <div
          className="clear-filters"
          onClick={() => {
            setLocationVal("virtual");
            setIPCValue("");
            setVerticalVal("");
            setAvalValue("");
            onChangeCal(new Date());
          }}
        >
          Clear All Filters
        </div>

        <div className="location">
          <div className="accheader">
            Location <img src={arrowSign}></img>
          </div>

          {LocationVal === "virtual" ? (
            <div className="element">
              <div
                className="sel"
                onClick={() => {
                  setLocationVal("virtual");
                }}
              >
                Virtual
              </div>
              <div className="slash">/</div>
              <div
                onClick={() => {
                  setLocationVal("inPerson");
                }}
              >
                In Person
              </div>
            </div>
          ) : (
            <div className="element">
              <div
                onClick={() => {
                  setLocationVal("virtual");
                }}
              >
                Virtual
              </div>
              <div className="slash">/</div>
              <div
                className="sel"
                onClick={() => {
                  setLocationVal("inPerson");
                }}
              >
                In Person
              </div>
            </div>
          )}
          {LocationVal === "inPerson" ? (
            <div>
              <FormControl component="fieldset">
                {/* {IPCvalue} */}
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={IPCvalue}
                  onChange={handleIPCChange}
                >
                  <FormControlLabel
                    value="New York City"
                    control={<CyanRadio />}
                    label="NEW YORK"
                  />
                  <FormControlLabel
                    value="Miami"
                    control={<CyanRadio />}
                    label="MIAMI"
                  />
                  <FormControlLabel
                    value="Hamptons"
                    control={<CyanRadio />}
                    label="HAMPTONS"
                  />
                  <FormControlLabel
                    value="Palm Beach"
                    control={<CyanRadio />}
                    label="PALM BEACH"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          ) : null}

          <hr></hr>
        </div>

        <div className="vertical">
          <div> Training Vertical</div>
          {/* {VerticalVal} */}
          <div className="listv">
            {VerticalVal !== "Strength & HIIT" || VerticalVal === "" ? (
              <div
                className="litem"
                onClick={() => {
                  setVerticalVal("Strength & HIIT");
                }}
              >
                STRENGTH
              </div>
            ) : (
              <div
                className="litem_active"
                onClick={() => {
                  setVerticalVal("");
                }}
              >
                STRENGTH
              </div>
            )}

            {VerticalVal !== "Boxing" || VerticalVal === "" ? (
              <div
                className="litem"
                onClick={() => {
                  setVerticalVal("Boxing");
                }}
              >
                BOXING
              </div>
            ) : (
              <div
                className="litem_active"
                onClick={() => {
                  setVerticalVal("");
                }}
              >
                BOXING
              </div>
            )}

            {VerticalVal !== "Yoga" || VerticalVal === "" ? (
              <div
                className="litem"
                onClick={() => {
                  setVerticalVal("Yoga");
                }}
              >
                YOGA
              </div>
            ) : (
              <div
                className="litem_active"
                onClick={() => {
                  setVerticalVal("");
                }}
              >
                YOGA
              </div>
            )}

            {VerticalVal !== "Pilates" || VerticalVal === "" ? (
              <div
                className="litem"
                onClick={() => {
                  setVerticalVal("Pilates");
                }}
              >
                PILATES
              </div>
            ) : (
              <div
                className="litem_active"
                onClick={() => {
                  setVerticalVal("");
                }}
              >
                PILATES
              </div>
            )}
          </div>

          <hr></hr>
        </div>
        <div className="schedule">
          Schedule <br></br> {moment(Calvalue).format("YYYY/MM/DD")}
          <Calendar onChange={onChangeCal} value={Calvalue} />
          <hr></hr>
        </div>
        <div className="availability">
          <div>Availability</div>
          {Avalvalue} <br></br>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="availability"
              value={Avalvalue}
              onChange={handleAvalChange}
            >
              <FormControlLabel
                value="EarlyBird"
                control={<CyanRadio />}
                label="EARLY BIRD (5AM-8AM)"
              />
              <FormControlLabel
                value="RiseAndShine"
                control={<CyanRadio />}
                label="RISE & SHINE (8AM-11AM)"
              />
              <FormControlLabel
                value="MidDayBreak1"
                control={<CyanRadio />}
                label="MID-DAY BREAK (11:30AM-2PM)"
              />
              <FormControlLabel
                value="MidDayBreak2"
                control={<CyanRadio />}
                label="MID-DAY LUNCHTIME (2AM-5PM)"
              />
              <FormControlLabel
                value="HappyHours"
                control={<CyanRadio />}
                label="HAPPY HOUR (5PM-8PM)"
              />
              <FormControlLabel
                value="NeverTooLate"
                control={<CyanRadio />}
                label="NEVER TOO LATE (8PM-11PM)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div
        className="search"
        onClick={search_action_mob}
        onTouchStart={search_action_mob}
      >
        APPLY ALL FILTERS{" "}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trainerQueryData: state.trainerReducer.query,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetails,
    },
    dispatch
  );
};

const MobileSearchMenu_r = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileSearchMenu);

export default MobileSearchMenu_r;
