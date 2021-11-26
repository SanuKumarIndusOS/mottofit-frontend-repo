import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import "./accordion.scss";
import DollarIcon from "../../../../assets/files/SVG/dollar Icon.svg";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { fileUpload } from "action/trainerAct";
import { trainerDetail, updateTrainerDetailsApicall } from "action/trainerAct";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import AvatarEditor from "react-avatar-editor";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Slider from "@material-ui/core/Slider";

function TrainerCardDashboard(props) {
  const [isValidationError, setValidationError] = useState(false);

  const [modal, setModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(1.2);
  const [isLoading, setisLoading] = useState(false);

   const [saveChangesLoader, setsaveChangesLoader] = useState(false)

  const toggle = () => setModal(!modal);
  // const history = useHistory();
  const [trainerCardData, setTrainerCardData] = useState({
    firstName: "",
    lastName: "",
    verticals: [],
    description: "",
    inPersonAtClient_individualCharge: "",
    inPersonAtClient_twoPPL: "",
    inPersonAtClient_threePPL: "",
    inPersonAtClient_fourPPL: "",
    inPersonAtClient_classFlatRate: "",
    inPersonAtClient_thirtySessionRate: "",
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
  const [checkedBoxing, setCheckedBoxing] = useState(false);
  const [checkedHIIT, setCheckedHIIT] = useState(false);
  const [checkedYoga, setCheckedYoga] = useState(false);
  const [checkedPilates, setCheckedPilates] = useState(false);

  const [image, setImage] = useState();
  const fileInputRef = useRef();
  const editorRef = useRef(null);
  const profileImgRef = useRef(null);
  const [file, setFile] = useState(null);
  const [tempImg, setTempImg] = useState();

  useEffect(() => {
    props.trainerDetail().then((res) => {
      let {
        classSessionPricing = {},
        oneOnOnePricing = {},
        socialSessionPricing = {},
        profilePicture,
      } = res;
      if (profilePicture) {
        setImage(profilePicture ? profilePicture : null);
      }
      setTrainerCardData({
        ...trainerCardData,
        firstName: res.firstName,
        lastName: res.lastName,
        description: res.description,
        verticals: res.areaOfExpertise,
        inPersonAtClient_individualCharge: covertToValid(
          oneOnOnePricing.inPersonAtClientLocation
        ),
        inPersonAtClient_twoPPL: covertToValid(
          socialSessionPricing.inPeronAtClientLocationfor2People
        ),
        inPersonAtClient_threePPL: covertToValid(
          socialSessionPricing.inPeronAtClientLocationfor3People
        ),
        inPersonAtClient_fourPPL: covertToValid(
          socialSessionPricing.inPeronAtClientLocationfor4People
        ),
        inPersonAtClient_classFlatRate: covertToValid(
          classSessionPricing.inPersonAtclientLocationfor15People
        ),
        inPersonAtClient_thirtySessionRate: covertToValid(
          oneOnOnePricing.passRatefor30SessionAtClientLocation
        ),
        inPersonAtClient_tenSessionRate: covertToValid(
          oneOnOnePricing.passRatefor10SessionAtClientLocation
        ),
        inPersonAtTrainer_individualCharge: covertToValid(
          oneOnOnePricing.inPersonAtTrainerLocation
        ),
        inPersonAtTrainer_twoPPL: covertToValid(
          socialSessionPricing.inPeronAtTrainerLocationfor2People
        ),
        inPersonAtTrainer_threePPL: covertToValid(
          socialSessionPricing.inPeronAtTrainerLocationfor3People
        ),
        inPersonAtTrainer_fourPPL: covertToValid(
          socialSessionPricing.inPeronAtTrainerLocationfor4People
        ),
        inPersonAtTrainer_classFlatRate: covertToValid(
          classSessionPricing.inPersonAttrainerLocationfor15People
        ),
        inPersonAtTrainer_threeSessionRate: covertToValid(
          oneOnOnePricing.passRatefor30SessionAtTrainerLocation
        ),
        inPersonAtTrainer_tenSessionRate: covertToValid(
          oneOnOnePricing.passRatefor10SessionAtTrainerLocation
        ),
        virtual_individualCharge: covertToValid(oneOnOnePricing.virtualSession),
        virtual_twoPPL: covertToValid(
          socialSessionPricing.virtualSessionfor2People
        ),
        virtual_threePPL: covertToValid(
          socialSessionPricing.virtualSessionfor3People
        ),
        virtual_fourPPL: covertToValid(
          socialSessionPricing.virtualSessionfor4People
        ),
        virtual_classFlatRate: covertToValid(
          classSessionPricing.virtualSessionfor15People
        ),
        virtual_threeSessionRate: covertToValid(
          oneOnOnePricing.passRatefor30SessionAtVirtual
        ),
        virtual_tenSessionRate: covertToValid(
          oneOnOnePricing.passRatefor10SessionAtVirtual
        ),
      });
      if (res.areaOfExpertise) {
        if (res.areaOfExpertise.find((el) => el === "Strength & HIIT")) {
          setCheckedHIIT(true);
        }

        if (res.areaOfExpertise.find((el) => el === "Yoga")) {
          setCheckedYoga(true);
        }

        if (res.areaOfExpertise.find((el) => el === "Boxing")) {
          setCheckedBoxing(true);
        }

        if (res.areaOfExpertise.find((el) => el === "Pilates")) {
          setCheckedPilates(true);
        }
      }
    });
  }, []);

  const handleSubmit = () => {

    setsaveChangesLoader(true);
    if (
      trainerCardData.inPersonAtClient_individualCharge ||
      trainerCardData.inPersonAtTrainer_individualCharge
    ) {
      let payload = {
        profilePicture: image,
        firstName: trainerCardData.firstName,
        lastName: trainerCardData.lastName,
        areaOfExpertise: trainerCardData.verticals,
        description: trainerCardData.description,
        oneOnOnePricing: {
          inPersonAtClientLocation:
            trainerCardData.inPersonAtClient_individualCharge || 0,
          inPersonAtTrainerLocation:
            trainerCardData.inPersonAtTrainer_individualCharge || 0,
          virtualSession: trainerCardData.virtual_individualCharge || 0,
          passRatefor30SessionAtClientLocation:
            trainerCardData.inPersonAtClient_thirtySessionRate || 0,
          passRatefor10SessionAtClientLocation:
            trainerCardData.inPersonAtClient_tenSessionRate || 0,
          passRatefor30SessionAtTrainerLocation:
            trainerCardData.inPersonAtTrainer_threeSessionRate || 0,
          passRatefor10SessionAtTrainerLocation:
            trainerCardData.inPersonAtTrainer_tenSessionRate || 0,
          passRatefor30SessionAtVirtual:
            trainerCardData.virtual_threeSessionRate || 0,
          passRatefor10SessionAtVirtual:
            trainerCardData.virtual_tenSessionRate || 0,
        },
        socialSessionPricing: {
          inPeronAtClientLocationfor2People:
            trainerCardData.inPersonAtClient_twoPPL || 0,
          inPeronAtClientLocationfor3People:
            trainerCardData.inPersonAtClient_threePPL || 0,
          inPeronAtClientLocationfor4People:
            trainerCardData.inPersonAtClient_fourPPL || 0,
          inPeronAtTrainerLocationfor2People:
            trainerCardData.inPersonAtTrainer_twoPPL || 0,
          inPeronAtTrainerLocationfor3People:
            trainerCardData.inPersonAtTrainer_threePPL || 0,
          inPeronAtTrainerLocationfor4People:
            trainerCardData.inPersonAtTrainer_fourPPL || 0,
          virtualSessionfor2People: trainerCardData.virtual_twoPPL || 0,
          virtualSessionfor3People: trainerCardData.virtual_threePPL || 0,
          virtualSessionfor4People: trainerCardData.virtual_fourPPL || 0,
        },
        classSessionPricing: {
          inPersonAtclientLocationfor15People:
            trainerCardData.inPersonAtClient_classFlatRate || 0,
          inPersonAttrainerLocationfor15People:
            trainerCardData.inPersonAtTrainer_classFlatRate || 0,
          virtualSessionfor15People: trainerCardData.virtual_classFlatRate || 0,
        },
      };

      // if (!handleValidation()) return;

      props.updateTrainerDetailsApicall(payload).then(() => {
        Toast({
          type: "success",
          message: "Successfully, Updated the changes",
        });

        setsaveChangesLoader(false);
      });

      
    } else {
      setValidationError(true);
    }
  };

  const handleValidation = () => {
    let tempTrainerData = { ...trainerCardData };

    tempTrainerData = Object.keys(tempTrainerData).filter(
      (data) =>
        data !== "description" &&
        data !== "firstName" &&
        data !== "verticals" &&
        data !== "lastName"
    );

    const isAllDataFilled = tempTrainerData
      .map((name) => parseInt(trainerCardData[name]))
      .every((data) => data > 0);

    setValidationError(!isAllDataFilled);

    return isAllDataFilled;
  };
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];

    toggle();
    // if (file) {
    //   const fd = new FormData();

    //   fd.append("profilePicture", file);
    //   props.fileUpload(fd).then((data) => {
    //     setImage(data.urlPath);
    //   });
    // }
  };

  const blockWheelBehaviour = (e) => {
    e.preventDefault();
  };

  const covertToValid = (value) => {
    return value === null || value === undefined ? "" : parseInt(value) || "";
  };

  const getRoundedCanvas = (sourceCanvas) => {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    let image = new Image();
    image.crossOrigin = "anonymous";
    image.src = sourceCanvas;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(image, 0, 0, width, height);
    context.globalCompositeOperation = "destination-in";
    context.beginPath();
    //  context.arc(
    //    width / 2,
    //    height / 2,
    //    Math.min(width, height) / 2,
    //    0,
    //    2 * Math.PI,
    //    true
    //  );
    //  context.fill();
    return canvas;
  };

  const handleFileChange = (e) => {
    window.URL = window.URL || window.webkitURL;
    let url = window.URL.createObjectURL(e.target.files[0]);
    // ReactDom.findDOMNode(this.refs.in).value = "";
    // let state = this.state;
    // state.img = url;
    // state.cropperOpen = true;
    // this.setState(state);

    setFile(url);
    toggle();
  };

  const handleCancel = () => {
    // console.log();

    fileInputRef.current.value = "";

    toggle();
  };

  const handleCropSave = () => {
    // console.log(editorRef);

    let currentEditor = editorRef.current;

    if (currentEditor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = currentEditor.getImageScaledToCanvas();

      const canvas = currentEditor.getImage().toDataURL();
      let imageURL;
      // console.log(canvas);

      fetch(canvas)
        .then((res) => res.blob())
        .then((blob) => {
          imageURL = window.URL.createObjectURL(blob);

          //  const tempURL = canvasScaled.toDataURL();

          setImage(canvas);
          // console.log(imageURL);
          // console.log(blob);

          let profile_pic = new File(
            [blob],
            `${trainerCardData.firstName || "First"}_${
              trainerCardData.lastName || "Last"
            }.jpg`
          );

          if (profile_pic) {
            const fd = new FormData();

            fd.append("profilePicture", profile_pic);

            setisLoading(true);
            props.fileUpload(fd).then((data) => {
              setImage(data.urlPath);
              setisLoading(false);
              // Toast({ type: "success", message: "Profile picture updated." });
            });
          }
        });

      toggle();

      //   canvasScaled.toBlob((data) => {
      //     let profile_pic = new File(
      //       [data],
      //       `${trainerCardData.firstName || "First"}_${
      //         trainerCardData.lastName || "Last"
      //       }.jpg`
      //     );

      //     if (profile_pic) {
      //       const fd = new FormData();

      //       fd.append("profilePicture", profile_pic);
      //       props.fileUpload(fd).then((data) => {
      //         setImage(data.urlPath);
      //         // Toast({ type: "success", message: "Profile picture updated." });
      //       });
      //     }
      //   }, `${trainerCardData.firstName || "First"}_${trainerCardData.lastName || "Last"}.jpg`);
      // }
    }
  };

  return (
    <div className="container">
      <div className="card_inner">
        <div className="pro_pic_center">
          <div></div>
          <div className="item1_card position-relative">
            {isLoading && (
              <div className="image-loading-overlay">Loading...</div>
            )}
            {image ? (
              <div className="combin_profile">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <img
                    src={image ? image : Profile}
                    alt="icon"
                    style={{
                      objectFit: "cover",
                      width: "200px",
                      height: "200px",
                      borderRadius: "100px",
                      position: "relative",
                      left: "-6px",
                      top: "-2px",
                    }}
                  />
                </button>
                <img
                  src={ProfileAdd}
                  alt="icon"
                  style={{
                    objectFit: "cover",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                  className={`${isLoading ? "d-none" : ""}`}
                />
              </div>
            ) : (
              <div className="combin_profile">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  <img
                    src={Profile}
                    style={{
                      objectFit: "cover",
                      width: "100px",
                      height: "100px",
                      borderRadius: "100px",
                    }}
                  />
                </button>
                <img
                  src={ProfileAdd}
                  alt="icon"
                  style={{
                    objectFit: "cover",
                    width: "20px",
                    height: "20px",
                    borderRadius: "100px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                  }}
                  className={`${isLoading ? "d-none" : ""}`}
                />
              </div>
            )}

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e)}
            />
            <h5>Upload your profile picture, hotshot!</h5>
          </div>
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
              style={{ textTransform: "capitalize" }}
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
              style={{ textTransform: "capitalize" }}
            />
          </div>
        </div>

        <div className="item3_card">
          <label>
            Tell Us What You Train! Select All The Categories That Apply
          </label>
          <br />
          <div className="item3_card_inner">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checkedHIIT}
                icon={
                  <RadioButtonUncheckedIcon className="vertical_checkbox" />
                }
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
                  } else {
                    const index = trainerCardData.verticals.indexOf(
                      "Strength & HIIT"
                    );
                    if (index > -1) {
                      trainerCardData.verticals.splice(index, 1);
                    }
                  }
                }}
              />
              &ensp;
              <h6 style={{ marginRight: "1em" }}>Strength & HIIT</h6>
            </div>
            &ensp;
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checkedBoxing}
                icon={
                  <RadioButtonUncheckedIcon className="vertical_checkbox" />
                }
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
                    if (index > -1) {
                      trainerCardData.verticals.splice(index, 1);
                    }
                  }
                }}
              />
              &ensp;
              <h6 style={{ marginRight: "1em" }}>Boxing</h6>{" "}
            </div>{" "}
            &ensp;
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checkedYoga}
                icon={
                  <RadioButtonUncheckedIcon className="vertical_checkbox" />
                }
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
                    if (index > -1) {
                      trainerCardData.verticals.splice(index, 1);
                    }
                  }
                }}
              />
              &ensp;
              <h6 style={{ marginRight: "1em" }}>Yoga</h6>{" "}
            </div>{" "}
            &ensp;
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checkedPilates}
                icon={
                  <RadioButtonUncheckedIcon className="vertical_checkbox" />
                }
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
                    if (index > -1) {
                      trainerCardData.verticals.splice(index, 1);
                    }
                  }
                }}
              />
              &ensp;
              <h6 style={{ marginRight: "1em" }}>Pilates</h6>{" "}
            </div>{" "}
            &ensp;
          </div>
        </div>

        <div>
          <label>
            Write A Short And Sweet Description For Clients To Pick You In 100
            Characters
          </label>
          <br />
          <textarea
            value={trainerCardData.description}
            onChange={(e) => {
              const tempValue = e.target.value;
              if (tempValue?.length > 100) return;
              setTrainerCardData({
                ...trainerCardData,
                description: e.target.value,
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>

              <div className="card_accordion_input">
                <input
                  placeholder="30 Session Rate"
                  value={trainerCardData.inPersonAtClient_thirtySessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtClient_thirtySessionRate: e.target.value,
                    });
                  }}
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />
              </div>

              <div className="card_accordion_input">
                <input
                  placeholder="30 Session Rate"
                  value={trainerCardData.inPersonAtTrainer_threeSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      inPersonAtTrainer_threeSessionRate: e.target.value,
                    });
                  }}
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
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
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />

                <br />
              </div>

              <div className="card_accordion_input">
                <input
                  placeholder="30 Session Rate"
                  value={trainerCardData.virtual_threeSessionRate}
                  onChange={(e) => {
                    setTrainerCardData({
                      ...trainerCardData,
                      virtual_threeSessionRate: e.target.value,
                    });
                  }}
                  type="text"
                  onWheel={blockWheelBehaviour}
                />
                <img src={DollarIcon} alt="icon" />
              </div>
            </div>
          </Accordion>
        </div>

        <div className="error_span">
          {isValidationError ? (
            <span>Please enter any one individual charge price </span>
          ) : null}
        </div>
        <div className="card_submit">
          <button onClick={() => handleSubmit()}>
            {saveChangesLoader ? (
              "Loading..."
            ) : (
              <>
                Save Changes <ArrowHoverBlacked />
              </>
            )}
          </button>
        </div>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Choose your Trainer Card size
          </ModalHeader>
          <ModalBody>
            <AvatarEditor
              ref={editorRef}
              image={file}
              width={308}
              height={200}
              borderRadius={0}
              color={[255, 255, 255, 0.6]} // RGBA
              scale={sliderValue}
              rotate={0}
            />
            <Slider
              value={sliderValue}
              onChange={(event, newValue) => {
                setSliderValue(newValue);
              }}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              min={1}
              valueLabelDisplay="auto"
              max={3}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleCropSave}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

//Accordion
function Accordion({ title, children }) {
  const [isOpenAccodion, setAccordion] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div className="cyanRadio_wrapper">
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerDetail,
      updateTrainerDetailsApicall,
      fileUpload,
    },
    dispatch
  );
};

const TrainerCardNew = connect(null, mapDispatchToProps)(TrainerCardDashboard);
export default TrainerCardNew;
