import React, { useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import ArrowBack from "../../../assets/SVG/Arrow Back.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";

// hoursPerWeek
// preferedTrainingMode
// serviceableCity
// servicableLocation
// trainingFacilityLocation
// willingToTravel

const CyanRadio = withStyles({
  root: {
    "&$checked": {
      color: cyan[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const TrainerAvailability = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedOneValue, setSelectedOneValue] = React.useState("");

  const [trainerAbout, setTrainerAbout] = React.useState({})


  

  const [trainerAvailabilityData, setTrainerAvailabilityData] = React.useState({
    hoursPerWeek: "",
    preferedTrainingMode: "Virtual",
    trainingFacilityLocation: "",
    willingToTravel: "0",
    servicableLocation: "",
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOneChange = (event) => {
    setSelectedOneValue(event.target.value);

    setTrainerAvailabilityData({
      ...trainerAvailabilityData,
      willingToTravel: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem("user-info"))["token"]);

    console.log();

    let data = {
      location: props.location.state[0]["location"],
      DOB: props.location.state[0]["dob"],
      gender:  props.location.state[0]["gender"],
      instagramProfile:  props.location.state[0]["instagram"],
      facebookProfile: "https://facebook.com/kljdhpersonaltrainer",
      linkedInProfile: "https://linkedin.com/kljdhpersonaltrainer",
      referalCode: "gh678lJJ",
      areaOfExpertise: props.location.state[0]["areaOfExpertise"],
      trainingAvailability: "Fulltime",
      preferedTrainingMode: trainerAvailabilityData.preferedTrainingMode,
      willingToTravel: trainerAvailabilityData.willingToTravel,
      servicableLocation: trainerAvailabilityData.servicableLocation,
      currentExperience: props.location.state[1]["currentExperience"],
      previousExperience: [
        {
          workMode: "S FITNESS & CROSSFIT STUDIO",
          jobTitle: "Personal Trainers",
          yearsOfExperience: "2 Years",
        },
      ],
      trainingProcess: props.location.state[1]["trainingProcess"],
      profilePicture: "img location",
      interestInMotto: props.location.state[1]["interestInMotto"],
      clientAssessment: props.location.state[1]["clientAssessment"],
      trainingFacility: true,
      trainingFacilityLocation: [trainerAvailabilityData.trainingFacilityLocation],
      description: "",
      myMotto: "",
      images: ["img Location"],
      identityInfromation: {
        identityType: "",
        identityNumber: "",
        identityImg: "S3 location",
      },
      insuranceInformation: {},
      stripeId: "",
      hoursPerWeek: trainerAvailabilityData.hoursPerWeek,
      serviceableCity: trainerAvailabilityData.servicableLocation,
      websiteLink: props.location.state[0]["websiteURL"],
      youtubeLink: "jfjdld",
      certification: [
        { certificateName: "", certfiedYear: "", certification: "" },
      ],
      oneOnOnePricing: {
        inPersonAtClientLocation: "125$",
        inPersonAtTrainerLocation: "130$",
        virtualSession: "120$",
        passRatefor3Session: "100$",
        passRatefor10Session: "150$",
      },
      socialSessionPricing: {
        inPeronAtClientLocationfor2People: "$123",
        inPeronAtClientLocationfor3People: "$123",
        inPeronAtClientLocationfor4People: "$123",
        inPeronAtTrainerLocationfor2People: "$123",
        inPeronAtTrainerLocationfor3People: "$123",
        inPeronAtTrainerLocationfor4People: "$123",
        virtualSessionfor2People: "$130",
        virtualSessionfor3People: "$130",
        virtualSessionfor4People: "$130",
      },
      classSessionPricing: {
        inPersonAtclientLocationfor15People: "$300",
        inPersonAttrainerLocationfor15People: "$290",
        virtualAtclientLocationfor15People: "$300",
        virtualAttrainerLocationfor15People: "$290",
        virtualSessionfor15People: "$130",
      },
    };

    fetch("http://doodlebluelive.com:2307/v1/trainer", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("user-info"))["token"],
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

    // useEffect(() => {
    //   // Update the document title using the browser API
    //   console.log("trainerBackground", props.location.state);
    //   setTrainerAbout(props.location.state)
    // });

  return (
    <>
      <div className="container">
        <div className="main_wrappercontainer">
          <div className="link_wrapper">
            <img src={ArrowBack} alt="icon" />
            <div className="inner_links">
              <Link to="/trainerbackground">Back to Trainer Background</Link>
              <div></div>
            </div>
          </div>
          <div className="wrapper_inneritem">
            <h1>Highlight your availability on the platform</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry’s standard dummy text.
            </p>
            <form>
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
                    <button>Virtual</button>
                    <button>In Person</button>
                    {/* <button>Outdoors</button> */}
                  </div>
                </div>
                <div className="item_3">
                  <h6>
                    Tell us what you train! Select all the verticals that apply
                  </h6>
                  <CyanRadio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    label="Strength & Hitt"
                    inputProps={{ "aria-label": "a" }}
                  />
                  <label>Yes</label>
                  <CyanRadio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    label="Strength & Hitt"
                    inputProps={{ "aria-label": "b" }}
                  />
                  <label>No</label>
                </div>
                <div className="item_4">
                  <h6>Select the location of your facility</h6>
                  <div className="inputs_platform">
                    <input
                      type="text"
                      placeholder="Select your Location"
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
                  <h6>Are you willing to travel in the selected area?</h6>
                  <CyanRadio
                    checked={selectedOneValue === "1"}
                    onChange={handleOneChange}
                    value="1"
                    label="Strength & Hitt"
                    inputProps={{ "aria-label": "1" }}
                  />
                  <label>Hell, Yes!</label>
                  <CyanRadio
                    checked={selectedOneValue === "0"}
                    onChange={handleOneChange}
                    value="0"
                    label="Strength & Hitt"
                    inputProps={{ "aria-label": "0" }}
                  />
                  <label>No</label>
                </div>
                <div className="item_6">
                  <h6>Serviceable Locations</h6>
                  <div className="inputs_platform">
                    <input
                      type="text"
                      placeholder="List all areas that you will service"
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
                  //   onClick={(e) => {
                  //     console.log(selectedOneValue, trainerAvailabilityData);
                  //     e.preventDefault();
                  //   }}

                  onClick={handleSubmit}
                >
                  Continue
                  <ArrowHoverBlacked />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerAvailability;
