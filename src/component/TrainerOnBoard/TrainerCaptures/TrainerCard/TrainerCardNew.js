import React, { useState } from "react";
import "./stylesnew.scss";
import "./accordion.scss";
import DollarIcon from "../../../../assets/files/SVG/dollar Icon.svg";
import { TrainerPrevModal } from "./TrainerPrevModal";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { useSelector, useDispatch } from "react-redux";
import { captureTrainerCard } from "action/trainerAct";
import { trainerDetail } from "action/trainerAct";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import { fileUpload } from "action/trainerAct";
import { useHistory } from "react-router-dom";

function TrainerCardNew() {
  //for Modal Operation
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen((prev) => !prev);
  };
  const [validationtxt, setValidationtxt] = React.useState(false);

  const history = useHistory();
  // const inputFile = React.useRef(null);
  const [trainerCardData, setTrainerCardData] = React.useState({
    firstName: "",
    lastName: "",
    verticals: [],
    shortDescription: "",
    inPersonAtClient_individualCharge: "",
    inPersonAtClient_twoPPL: "",
    inPersonAtClient_threePPL: "",
    inPersonAtClient_fourPPL: "",
    inPersonAtClient_classFlatRate: "",
    inPersonAtClient_threeSessionRate: "",
    inPersonAtClient_tenSessionRate: "",
    inPersonAtTrainer_individualCharge: "",
    inPersonAtTrainer_twoPPL: "",
    inPersonAtTrainer_threePPL: "",
    inPersonAtTrainer_fourPPL: "",
    inPersonAtTrainer_classFlatRate: "",
    inPersonAtTrainer_threeSessionRate: "",
    inPersonAtTrainer_tenSessionRate: "",
    virtual_individualCharge: "",
    virtual_twoPPL: "",
    virtual_threePPL: "",
    virtual_fourPPL: "",
    virtual_classFlatRate: "",
    virtual_threeSessionRate: "",
    virtual_tenSessionRate: "",
  });

  // Training verticals selection states
  const [checkedBoxing, setCheckedBoxing] = React.useState(false);
  const [checkedHIIT, setCheckedHIIT] = React.useState(false);
  const [checkedYoga, setCheckedYoga] = React.useState(false);
  const [checkedPilates, setCheckedPilates] = React.useState(false);

  //Profile Picture Upload
  const [previewImage, setPreviewTmage] = useState();
  const [image, setImage] = useState();
  const fileInputRef = React.useRef();

  React.useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewTmage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreviewTmage(null);
    }
  }, [image]);

  const TrainerCardPayload = useSelector(
    (state) => state.trainerCaptureReducer.cardData
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(TrainerCardPayload);
  }, [trainerCardData]);

  React.useEffect(() => {
    // console.log(TrainerCardPayload.firstName);

    TrainerCardPayload.firstName === undefined
      ? dispatch(trainerDetail()).then((res) => {
          console.log(res);
          setTrainerCardData({
            ...trainerCardData,
            firstName: res.firstName,
            lastName: res.lastName,
            shortDescription: res.description,
            verticals: res.areaOfExpertise,
          });

          if (res.areaOfExpertise.find((el) => el === "Strength & HIIT")) {
            setCheckedHIIT(true);
            console.log("yes");
          }

          if (res.areaOfExpertise.find((el) => el === "Yoga")) {
            setCheckedYoga(true);
            console.log("yes");
          }

          if (res.areaOfExpertise.find((el) => el === "Boxing")) {
            setCheckedBoxing(true);
            console.log("yes");
          }

          if (res.areaOfExpertise.find((el) => el === "Pilates")) {
            setCheckedPilates(true);
            console.log("yes");
          }
        })
      : setInitialData();
  }, []);

  function setInitialData() {
    // For All fields
    setTrainerCardData(TrainerCardPayload);
    // For Checkbox
    if (TrainerCardPayload.verticals.find((el) => el === "Strength & HIIT")) {
      setCheckedHIIT(true);
      console.log("yes");
    }

    if (TrainerCardPayload.verticals.find((el) => el === "Yoga")) {
      setCheckedYoga(true);
      console.log("yes");
    }

    if (TrainerCardPayload.verticals.find((el) => el === "Boxing")) {
      setCheckedBoxing(true);
      console.log("yes");
    }

    if (TrainerCardPayload.verticals.find((el) => el === "Pilates")) {
      setCheckedPilates(true);
      console.log("yes");
    }
  }

  return (
    <div className="container">
      <div className="card_inner">
        <div className="card_prev_link">
          <div onClick={openModal} className="prev_link">
            <TrainerPrevModal open={open} setOpen={setOpen} />
            Preview Your Trainer Card
          </div>
        </div>
        <div className="card_heading">
          <h2>Time to build your Trainer Card!</h2>
          <p>
            Heads up! Your trainer card is what clients will see when trainer
            results start filtering. Utilize keywords as anything you write here
            will also besearchable in our search box!
          </p>
        </div>
        <div className="item1_card">
          {previewImage ? (
            <img
              src={previewImage}
              style={{
                objectFit: "cover",
                width: "200px",
                height: "200px",
                borderRadius: "100px",
              }}
              onClick={() => {
                setPreviewTmage(null);
              }}
            />
          ) : (
            <div className="combin_profile">
              <button
                style={{ opacity: "0" }}
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                <img
                  src={Profile}
                  alt="icon"
                  style={{
                    objectFit: "cover",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </button>
              {/* <img
                src={ProfileAdd}
                alt="icon"
                style={{
                  objectFit: "cover",
                  width: "20px",
                  height: "20px",
                  borderRadius: "100px",
                }}
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              /> */}
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
          <h5></h5>
        </div>
        <div className="item2_card">
          <div className="item2_card_inner">
            <label>First Name</label> <br />
            <input
              value={trainerCardData.firstName}
              onChange={(e) => {
                setTrainerCardData({
                  ...trainerCardData,
                  firstName: e.target.value,
                });
              }}
            />
          </div>

          <div className="item2_card_inner">
            <label>Last Name</label> <br />
            <input
              value={trainerCardData.lastName}
              onChange={(e) => {
                setTrainerCardData({
                  ...trainerCardData,
                  lastName: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="item3_card">
          <label>
            Tell Us What You Train! Select All The Categories That Apply
          </label>
          <br />
          <div className="item3_card_inner">
            <Checkbox
              checked={checkedHIIT}
              icon={<RadioButtonUncheckedIcon className="vertical_checkbox" />}
              checkedIcon={
                <RadioButtonCheckedIcon className="vertical_checkbox" />
              }
              onChange={(e) => {
                setCheckedHIIT(!checkedHIIT);
                if (e.target.checked) {
                  setTrainerCardData({
                    ...trainerCardData,
                    verticals: [
                      ...trainerCardData.verticals,
                      "Strength & HIIT",
                    ],
                  });
                  //setVerticalArray([...verticalArray, "Strength & HIIT"]);
                } else {
                  const index =
                    trainerCardData.verticals.indexOf("Strength & HIIT");
                  // console.log(index);
                  if (index > -1) {
                    trainerCardData.verticals.splice(index, 1);
                  }
                }
              }}
            />
            &ensp;
            <h6 style={{ marginRight: "1em" }}>Strength & HIIT</h6>
            &ensp;
            <Checkbox
              checked={checkedBoxing}
              icon={<RadioButtonUncheckedIcon className="vertical_checkbox" />}
              checkedIcon={
                <RadioButtonCheckedIcon className="vertical_checkbox" />
              }
              onChange={(e) => {
                setCheckedBoxing(!checkedBoxing);

                if (e.target.checked) {
                  setTrainerCardData({
                    ...trainerCardData,
                    verticals: [...trainerCardData.verticals, "Boxing"],
                  });
                } else {
                  const index = trainerCardData.verticals.indexOf("Boxing");
                  // console.log(index);
                  if (index > -1) {
                    trainerCardData.verticals.splice(index, 1);
                  }
                }
              }}
            />
            &ensp;
            <h6 style={{ marginRight: "1em" }}>Boxing</h6> &ensp;
            <Checkbox
              checked={checkedYoga}
              icon={<RadioButtonUncheckedIcon className="vertical_checkbox" />}
              checkedIcon={
                <RadioButtonCheckedIcon className="vertical_checkbox" />
              }
              onChange={(e) => {
                setCheckedYoga(!checkedYoga);
                if (e.target.checked) {
                  setTrainerCardData({
                    ...trainerCardData,
                    verticals: [...trainerCardData.verticals, "Yoga"],
                  });
                } else {
                  const index = trainerCardData.verticals.indexOf("Yoga");
                  // console.log(index);
                  if (index > -1) {
                    trainerCardData.verticals.splice(index, 1);
                  }
                }
              }}
            />
            &ensp;
            <h6 style={{ marginRight: "1em" }}>Yoga</h6> &ensp;
            <Checkbox
              checked={checkedPilates}
              icon={<RadioButtonUncheckedIcon className="vertical_checkbox" />}
              checkedIcon={
                <RadioButtonCheckedIcon className="vertical_checkbox" />
              }
              onChange={(e) => {
                setCheckedPilates(!checkedPilates);
                if (e.target.checked) {
                  setTrainerCardData({
                    ...trainerCardData,
                    verticals: [...trainerCardData.verticals, "Pilates"],
                  });
                } else {
                  const index = trainerCardData.verticals.indexOf("Pilates");
                  // console.log(index);
                  if (index > -1) {
                    trainerCardData.verticals.splice(index, 1);
                  }
                }
              }}
            />
            &ensp;
            <h6 style={{ marginRight: "1em" }}>Pilates</h6> &ensp;
          </div>
        </div>

        <div>
          <label>
            Write A Short And Sweet Description For Clients To Pick You In 100
            Characters
          </label>
          <br />
          <textarea
            value={trainerCardData.shortDescription}
            onChange={(e) => {
              setTrainerCardData({
                ...trainerCardData,
                shortDescription: e.target.value,
              });
            }}
            placeholder="Give us your elevator pitch! This is all clients will see on the search results page until they click into your full profile."
          />
        </div>
        <div>
          <label>Tell Us About Your Pricing</label>
          <br />
          <p>
            Please fill only those fields relevant to the various kinds of
            training you offer. We recommend that the pricing of the social
            sessions (2-4 people) should provide savings to each client in
            comparison to a 1 on 1 individual session. The pricing for a 5-15
            person group class is a flat rate that will be split evenly amongst
            each client.
          </p>
        </div>

        {/* In Person Training Session Pricing (at the clients location)  MARKUP*/}
        <div>
          <Accordion title="In Person Training Session Pricing (at the clients location)">
            <div className="card_accordion">
              <div className="card_accordion_input">
                <input
                  placeholder="Individual Charge"
                  value={trainerCardData.inPersonAtClient_individualCharge}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_individualCharge: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <br />
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 2 People)"
                  value={trainerCardData.inPersonAtClient_twoPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_twoPPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 3 People)"
                  value={trainerCardData.inPersonAtClient_threePPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_threePPL: e.target.value,
                    });
                  }}
                />{" "}
                <img src={DollarIcon} alt="icon" />
                <br />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 4 People)"
                  value={trainerCardData.inPersonAtClient_fourPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_fourPPL: e.target.value,
                    });
                  }}
                />{" "}
                <img src={DollarIcon} alt="icon" />
                <br />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Class Flat Rate (5-15 People)"
                  value={trainerCardData.inPersonAtClient_classFlatRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_classFlatRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="3 Session Rate"
                  value={trainerCardData.inPersonAtClient_threeSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_threeSessionRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />

                {/* <br /> */}
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="10 Session Pass Rate"
                  value={trainerCardData.inPersonAtClient_tenSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_tenSessionRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>
            </div>
          </Accordion>
        </div>
        <div>
          <Accordion title="In Person Training Session Pricing (at your location)">
            <div className="card_accordion">
              <div className="card_accordion_input">
                <input
                  placeholder="Individual Charge"
                  value={trainerCardData.inPersonAtTrainer_individualCharge}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_individualCharge: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 2 People)"
                  value={trainerCardData.inPersonAtTrainer_twoPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_twoPPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 3 People)"
                  value={trainerCardData.inPersonAtTrainer_threePPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_threePPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 4 People)"
                  value={trainerCardData.inPersonAtTrainer_fourPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_fourPPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Class Flat Rate (5-15 People)"
                  value={trainerCardData.inPersonAtTrainer_classFlatRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_classFlatRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="3 Session Rate"
                  value={trainerCardData.inPersonAtTrainer_threeSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_threeSessionRate: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="10 Session Pass Rate"
                  value={trainerCardData.inPersonAtTrainer_tenSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_tenSessionRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
            </div>
          </Accordion>
        </div>

        <div>
          <Accordion title="Virtual Training Session Pricing">
            <div className="card_accordion">
              <div className="card_accordion_input">
                <input
                  placeholder="Individual Charge"
                  value={trainerCardData.virtual_individualCharge}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_individualCharge: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>

              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 2 People)"
                  value={trainerCardData.virtual_twoPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_twoPPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 3 People)"
                  value={trainerCardData.virtual_threePPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_threePPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Social Session (Total for 4 People)"
                  value={trainerCardData.virtual_fourPPL}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_fourPPL: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="Class Flat Rate (5-15 People)"
                  value={trainerCardData.virtual_classFlatRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_classFlatRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="3 Session Rate"
                  value={trainerCardData.virtual_threeSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_threeSessionRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
              <div className="card_accordion_input">
                <input
                  placeholder="10 Session Pass Rate"
                  value={trainerCardData.virtual_tenSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_tenSessionRate: e.target.value,
                    });
                  }}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>
            </div>
          </Accordion>
        </div>
        <div className="error_span">
          {validationtxt ? (
            <span>Please enter Individual Charge (atleast one) </span>
          ) : null}
        </div>
        <div className="card_submit">
          <button
            onClick={() => {
              dispatch(captureTrainerCard(trainerCardData));

              if (image !== undefined) {
                const fd = new FormData();

                fd.append("profilePicture", image, image.name);
                dispatch(fileUpload(fd));
              }

              if (
                trainerCardData.inPersonAtClient_individualCharge ||
                trainerCardData.inPersonAtTrainer_individualCharge
              ) {
                history.push("/trainer/setup");
              } else {
                setValidationtxt(true);
              }
            }}
          >
            Continue To profile <ArrowHoverBlacked />
          </button>
        </div>
      </div>
    </div>
  );
}

//Accordion
function Accordion({ title, children }) {
  const [isOpenAccodion, setAccordion] = useState(false);

  // for radio button
  // const [selectedValue, setSelectedValue] = useState("a");

  // for radio
  // const handleChange = (event) => {
  //     setSelectedValue(event.target.value);
  // };

  return (
    <div className="accordion-wrapper">
      <div className="cyanRadio_wrapper">
        {/* <CyanRadio
                    checked={selectedValue === ""}
                    onChange={handleChange}
                    onClick={() => setAccordion(!isOpenAccodion)}
                /> */}
        <label
          className={`accordion-title ${isOpenAccodion ? "open" : ""}`}
          onClick={() => setAccordion(!isOpenAccodion)}
        >
          {title}
        </label>
      </div>
      <div className={`accordion-item ${!isOpenAccodion ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
}

export default TrainerCardNew;

{
  /* <div
        className="pro_pic"
        onClick={(event) => {
          inputFile.current.click();
        }}
      >
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
      </div> */
}
