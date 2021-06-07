import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./model.scss";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import { history } from "helpers";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateTrainerDetailsApicall, trainerDetail } from "action/trainerAct";

const CyanRadio = withStyles({
  root: {
    "&$checked": {
      color: cyan[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const TrainerAvailabilityFC = ({
  updateTrainerDetailsApicall,
  trainerDetail,
}) => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [selectedOneValue, setSelectedOneValue] = useState("");
  const [checkButton, setCheckButton] = useState(false);
  const [checkButtonInPerson, setCheckButtonInPerson] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);

  const [trainerAvailabilityData, setTrainerAvailabilityData] = useState({
    hoursPerWeek: "",
    preferedTrainingMode: [],
    trainingFacilityLocation: "",
    servicableLocation: "",
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOneChange = (event) => {
    setSelectedOneValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      preferedTrainingMode: trainerAvailabilityData.preferedTrainingMode,
      willingToTravel: setSelectedOneValue == "1" ? true : false,
      servicableLocation: trainerAvailabilityData.servicableLocation,
      trainingFacilityLocation: [
        trainerAvailabilityData.trainingFacilityLocation,
      ],
      stripeId: "",
      serviceableCity: trainerAvailabilityData.servicableLocation,
    };
    if (trainerAvailabilityData.hoursPerWeek !== "") {
      data.hoursPerWeek = parseFloat(trainerAvailabilityData.hoursPerWeek);
    }
    setisLoading(true);
    updateTrainerDetailsApicall(data)
      .then(() => {
        setOpen(true);
        setisLoading(false);
      })
      .catch(() => {
        setOpen(false);
        setisLoading(false);
      });
  };

  const handleTrianingData = (e, type) => {
    let tempData = [...trainerAvailabilityData.preferedTrainingMode];

    if (tempData.includes(type)) {
      tempData = tempData.filter((prefered) => prefered !== type);
    } else {
      tempData = [...tempData, type];
    }
    trainerAvailabilityData.preferedTrainingMode = [...tempData];
    setTrainerAvailabilityData({
      ...trainerAvailabilityData,
    });

    setCheckButton((checkButton) => !checkButton);
  };
  const handleTrainingData = (e, type) => {
    let tempData = [...trainerAvailabilityData.preferedTrainingMode];

    if (tempData.includes(type)) {
      tempData = tempData.filter((prefered) => prefered !== type);
    } else {
      tempData = [...tempData, type];
    }
    trainerAvailabilityData.preferedTrainingMode = [...tempData];
    setTrainerAvailabilityData({
      ...trainerAvailabilityData,
    });
    setCheckButtonInPerson((checkButtonInPerson) => !checkButtonInPerson);
  };

  useEffect(() => {
    trainerDetail().then((data) => {
      if (data) {
        const tempData = {
          hoursPerWeek: data.hoursPerWeek ? data.hoursPerWeek : 0,
          preferedTrainingMode: data.preferedTrainingMode
            ? data.preferedTrainingMode
            : [],
          trainingFacilityLocation: data.trainingFacilityLocation
            ? data.trainingFacilityLocation
            : "",
          servicableLocation: data.servicableLocation
            ? data.servicableLocation
            : "",
        };
        setTrainerAvailabilityData(tempData);
        if (
          data.trainingFacility !== null &&
          data.trainingFacility !== undefined
        ) {
          setSelectedValue(data.trainingFacility ? "a" : "b");
        }
        if (
          data.willingToTravel !== null &&
          data.willingToTravel !== undefined
        ) {
          setSelectedOneValue(data.willingToTravel ? "1" : "0");
        }
        if (
          data.preferedTrainingMode &&
          data.preferedTrainingMode.length !== 0
        ) {
          let tempArray = [];
          tempArray = data.preferedTrainingMode.filter((x) => x == "Online");
          if (tempArray.length !== 0) {
            setCheckButton(true);
          }
          let tempArrayPerson = [];
          tempArrayPerson = data.preferedTrainingMode.filter(
            (x) => x == "inperson"
          );
          if (tempArrayPerson.length !== 0) {
            setCheckButtonInPerson(true);
          }
        }
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="link_wrapper">
          <img src={ArrowBack} alt="icon" />
          <div className="inner_links">
            <Link to="/trainer/background">Back to Trainer Background</Link>
          </div>
        </div>
        <div className="main_wrappercontainer">
          <div className="wrapper_inneritem">
            <h1>Highlight your availability on the platform</h1>
            <form className="container" onSubmit={(e) => e.preventDefault()}>
              <div className="content_wrapper">
                <div className="item_1">
                  <h6>How many hours will you list on Motto?</h6>
                  <div className="inputs_platform">
                    <input
                      type="number"
                      placeholder="10 Hours/Week"
                      value={trainerAvailabilityData.hoursPerWeek}
                      onChange={(e) => {
                        setTrainerAvailabilityData({
                          ...trainerAvailabilityData,
                          hoursPerWeek: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="item_2">
                  <h6>Where are you willing to train?</h6>
                  <div className="inputs_platform">
                    <button
                      onClick={(e) => handleTrianingData(e, "Online")}
                      className={checkButton ? "buttonFalse" : "buttonTrue"}
                    >
                      Virtual
                    </button>
                    <button
                      onClick={(e) => handleTrainingData(e, "inperson")}
                      className={
                        checkButtonInPerson ? "buttonFalse" : "buttonTrue"
                      }
                    >
                      In Person
                    </button>
                  </div>
                </div>
                <div className="item_3">
                  <h6>
                    Do you have a facility or location where you will train
                    clients?
                  </h6>
                  <CyanRadio
                    checked={selectedValue == "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "a" }}
                  />
                  <label>Yes</label>
                  <CyanRadio
                    checked={selectedValue == "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "b" }}
                  />
                  <label>No</label>
                </div>
                <div className="item_4">
                  <h6>Details of the facility/location</h6>
                  <div className="inputs_platform">
                    <textarea
                      type="text"
                      placeholder="Enter the Details of the location"
                      value={trainerAvailabilityData.trainingFacilityLocation}
                      onChange={(e) => {
                        setTrainerAvailabilityData({
                          ...trainerAvailabilityData,
                          trainingFacilityLocation: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="item_5">
                  <h6>
                    Are you willing to travel to clients in your city/region?
                  </h6>
                  <CyanRadio
                    checked={selectedOneValue == "1"}
                    onChange={handleOneChange}
                    value="1"
                    inputProps={{ "aria-label": "1" }}
                  />
                  <label> Yes!</label>
                  <CyanRadio
                    checked={selectedOneValue == "0"}
                    onChange={handleOneChange}
                    value="0"
                    inputProps={{ "aria-label": "0" }}
                  />
                  <label>No</label>
                </div>
                <div className="item_6">
                  <h6>
                    List the areas/neighborhoods you’re willing to travel to
                  </h6>
                  <div className="inputs_platform">
                    <textarea
                      type="text"
                      placeholder="Neighborhood List"
                      value={trainerAvailabilityData.servicableLocation}
                      onChange={(e) => {
                        setTrainerAvailabilityData({
                          ...trainerAvailabilityData,
                          servicableLocation: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="submit_button">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="d-flex justify-content-center"
                >
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      Submit
                      <ArrowHoverBlacked />
                    </>
                  )}
                </button>
                {open ? (
                  <Modal
                    open={open}
                    onClose={() => {
                      setOpen(false);
                      history.push("card");
                    }}
                    center
                    closeIcon={<img src={CloseIcon} alt="close" />}
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
                      <h2>
                        Background Information collection complete. Click the
                        “x” to move to next section!
                      </h2>
                      <p>
                        Time to move on to building your public Motto profile.
                        This profile will be published only after you are
                        approved!
                      </p>
                    </div>
                  </Modal>
                ) : null}
              </div>
            </form>
          </div>
          <img src={WaterMark} alt="icon" className="ava_watermark" />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetailsApicall,
      trainerDetail,
    },
    dispatch
  );
};

const TrainerAvailability = connect(
  null,
  mapDispatchToProps
)(TrainerAvailabilityFC);

export default TrainerAvailability;
