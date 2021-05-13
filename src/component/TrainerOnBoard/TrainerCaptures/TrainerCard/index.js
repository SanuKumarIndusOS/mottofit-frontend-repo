import React, { useRef, useState, useEffect } from "react";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import DollarIcon from "../../../../assets/files/SVG/dollar Icon.svg";
import { Link, useHistory } from "react-router-dom";
import "./accordion.scss";
import "./styles.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import { bindActionCreators } from "redux";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { updateTrainerDetails, getTrainerDetails } from "action/trainerAct";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import axios from "axios";
import { set } from "date-fns";
import { Modal } from "react-responsive-modal";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import "./trainer.sass";

const CyanRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
const TrainerCardFC = ({
    updateTrainerDetails,
    trainerPersonalData,
    getTrainerDetails,
}) => {
    const history = useHistory();

    const data = {
        title: "Time to build your Trainer Card!",
        describtion:
            " Heads up! Your trainer card is what clients will see when trainer results start filtering. Utilize keywords as anything you write here will also besearchable in our search box!",
        upload: " Upload your profile picture, hotshot!",
        tellus: " Tell us what you train! Select all the categories that apply",
        clientDesc:
            "Write a short and sweet description for clients to pick you in 100 characters",
        pricing: "Tell us about your Pricing",
        pricingDesc:
            "Please fill only those fields relevant to the various kinds of training you offer. We recommend that the pricing of the social sessions (2-4 people) should provide savings to each client in comparison to a 1 on 1 individual session. The pricing for a 5-15 person group class is a flat rate that will be split evenly amongst each client.",
    };

    const [checkedBoxing, setCheckedBoxing] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [checkedHIIT, setCheckedHIIT] = React.useState(false);
    const [checkedYoga, setCheckedYoga] = React.useState(false);
    const [checkedPilates, setCheckedPilates] = React.useState(false);
    const [trainerbackgroundData, setTrainerbackgroundData] = useState({
        areaOfExpertise: [],
    });

    const [image, setImage] = useState();
    const myRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [previewImage, setPreviewTmage] = useState();
    const [trainerData, setTrainerData] = useState({
        firstName: "",
        lastName: "",
        description: "",
        individualCharge: "",
        ssTwoPeopleCharge: "",
        ssThreePeopleCharge: "",
        ssFourPeopleCharge: "",
        classFlatRate: "",
        threeSessionRate: "",
        tenSessionRate: "",
        amtPerPerson: "",
        individualChargeTl: "",
        ssTwoPeopleChargeTl: "",
        ssThreePeopleChargeTl: "",
        ssFourPeopleChargeTl: "",
        classFlatRateTl: "",
        threeSessionRateTl: "",
        tenSessionRateTl: "",
        individualChargeVt: "",
        ssTwoPeopleChargeVt: "",
        ssThreePeopleChargeVt: "",
        ssFourPeopleChargeVt: "",
        classFlatRateVt: "",
        threeSessionRateVt: "",
        tenSessionRateVt: "",
    });
    const fileInputRef = useRef();

    // for radio
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewTmage(reader.result);
                console.log(typeof image);
            };
            reader.readAsDataURL(image);
        } else {
            setPreviewTmage(null);
        }
    }, [image]);

    const handleChangeToTrainerProfile = () => {
        // Update Area of Expertise

        // TrainerCard Profile Upload

        if (image !== undefined) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            };

            const fd = new FormData();

            fd.append("profilePicture", image, image.name);
            axios
                .post("http://doodlebluelive.com:2307/v1/upload/image", fd, {
                    headers: headers,
                })
                .then((res) => {
                    console.log(res);
                });
        }

        // Redux logic
        let storeData = {
            details: { ...trainerData },
        };
        updateTrainerDetails(storeData);
        history.push("/trainer/setup");
    };
    useEffect(() => {
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

    // const handleChangeToTrainerProfile = () => {
    //     let storeData = {
    //         details: { ...trainerData },
    //     };
    //     updateTrainerDetails(storeData);
    //     history.push("/trainer/setup");
    // };

    const handleInputChange = ({ target: { name, value } }) => {
        const tempData = {
            ...trainerData,
        };

        tempData[name] = value;

        setTrainerData(tempData);
    };

    useEffect(() => {
        getTrainerDetails().then((data) => {
            if (
                data["areaOfExpertise"].find((el) => el === "Strength & HIIT")
            ) {
                console.log("Strength & HIIT");
                setCheckedHIIT(true);
            }

            if (data["areaOfExpertise"].find((el) => el === "Boxing")) {
                console.log("Boxing");
                setCheckedBoxing(true);
            }

            if (data["areaOfExpertise"].find((el) => el === "Yoga")) {
                console.log("Yoga");
                setCheckedYoga(true);
            }

            if (data["areaOfExpertise"].find((el) => el === "Pilates")) {
                console.log("Pilates");
                setCheckedPilates(true);
            }

            const {
                firstName,
                lastName,
                description,
                socialSessionPricing,
                oneOnOnePricing,
                classSessionPricing,
            } = data || {};

            if (data) {
                // console.log(data);
                const {
                    inPeronAtClientLocationfor2People = "",
                    inPeronAtClientLocationfor3People = "",
                    inPeronAtClientLocationfor4People = "",
                    inPeronAtTrainerLocationfor2People = "",
                    inPeronAtTrainerLocationfor3People = "",
                    inPeronAtTrainerLocationfor4People = "",
                    virtualSessionfor2People = "",
                    virtualSessionfor3People = "",
                    virtualSessionfor4People = "",
                } = socialSessionPricing || {};

                const {
                    passRatefor3Session = "",
                    passRatefor10Session = "",
                    inPersonAtClientLocation = "",
                    inPersonAtTrainerLocation = "",
                    virtualSession = "",
                    passRatefor3SessionAtTrainerLocation = "",
                    passRatefor10SessionAtTrainerLocation = "",
                    passRatefor3SessionAtVirtual = "",
                    passRatefor10SessionAtVirtual = "",
                } = oneOnOnePricing || {};

                const {
                    inPersonAtclientLocationfor15People = "",
                    inPersonAttrainerLocationfor15People = "",
                    virtualSessionfor15People = "",
                } = classSessionPricing || {};

                const storeData = {
                    details: {
                        firstName,
                        lastName,
                        description,
                        // individualCharge: inPersonAtClientLocation,
                        // ssTwoPeopleCharge: inPeronAtClientLocationfor2People,
                        // ssThreePeopleCharge: inPeronAtClientLocationfor3People,
                        // ssFourPeopleCharge: inPeronAtClientLocationfor4People,
                        // classFlatRate: inPersonAtclientLocationfor15People,
                        // threeSessionRate: passRatefor3Session,
                        // tenSessionRate: passRatefor10Session,
                        // individualChargeTl: inPersonAtTrainerLocation,
                        // ssTwoPeopleChargeTl: inPeronAtTrainerLocationfor2People,
                        // ssThreePeopleChargeTl: inPeronAtTrainerLocationfor3People,
                        // ssFourPeopleChargeTl: inPeronAtTrainerLocationfor4People,
                        // classFlatRateTl: inPersonAttrainerLocationfor15People,
                        // threeSessionRateTl: passRatefor3SessionAtTrainerLocation,
                        // tenSessionRateTl: passRatefor10SessionAtTrainerLocation,
                        // individualChargeVt: virtualSession,
                        // ssTwoPeopleChargeVt: virtualSessionfor2People,
                        // ssThreePeopleChargeVt: virtualSessionfor3People,
                        // ssFourPeopleChargeVt: virtualSessionfor4People,
                        // classFlatRateVt: virtualSessionfor15People,
                        // threeSessionRateVt: passRatefor3SessionAtVirtual,
                        // tenSessionRateVt: passRatefor10SessionAtVirtual,
                    },
                };

                setTrainerData(storeData.details);

                updateTrainerDetails(storeData);
            }
        });
    }, []);

    const closeIcon = <img src={CloseIcon} alt="close" />;

    return (
        <>
            <div className="outter_container_card">
                <div className="container">
                    <div className="card_prev_link">
                        <div
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="prev_link"
                        >
                            Preview Your Trainer Card
                        </div>
                    </div>
                    {open ? (
                        <Modal
                            open={open}
                            onClose={() => {
                                setOpen(false);
                            }}
                            center
                            closeIcon={closeIcon}
                            container={myRef.current}
                            styles={{
                                boaderRadius: "10px",
                            }}
                        >
                            <div
                                className="container"
                                style={{ paddingLeft: "50px" }}
                            >
                                <div
                                    className="row"
                                    style={{ alignleft: "auto" }}
                                >
                                    <div className="card">
                                        <img
                                            className="card-img-top"
                                            src={
                                                previewImage
                                                    ? previewImage
                                                    : "https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg"
                                            }
                                            style={
                                                previewImage
                                                    ? { objectFit: "cover" }
                                                    : {
                                                          objectFit: "cover",
                                                          backgroundColor:
                                                              "blue",
                                                      }
                                            }
                                        />
                                        <div className="card-body">
                                            <h3
                                                style={{
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                {trainerData.firstName}&ensp;
                                                {trainerData.lastName}
                                            </h3>
                                            <h6
                                                style={{
                                                    color: "#898989",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {checkedHIIT &&
                                                !checkedPilates &&
                                                !checkedBoxing &&
                                                !checkedYoga
                                                    ? "HIIT"
                                                    : checkedPilates &&
                                                      !checkedHIIT &&
                                                      !checkedBoxing &&
                                                      !checkedYoga
                                                    ? "Pilates"
                                                    : checkedYoga &&
                                                      !checkedHIIT &&
                                                      !checkedBoxing &&
                                                      !checkedPilates
                                                    ? "Yoga"
                                                    : checkedBoxing &&
                                                      !checkedHIIT &&
                                                      !checkedPilates &&
                                                      !checkedYoga
                                                    ? "Boxing"
                                                    : checkedHIIT &&
                                                      checkedPilates &&
                                                      !checkedBoxing &&
                                                      !checkedYoga
                                                    ? "HIIT,Pilates"
                                                    : checkedHIIT &&
                                                      checkedYoga &&
                                                      !checkedPilates &&
                                                      !checkedBoxing
                                                    ? "HIIT,Yoga"
                                                    : checkedHIIT &&
                                                      checkedBoxing &&
                                                      !checkedPilates &&
                                                      !checkedYoga
                                                    ? "HIIT,Boxing"
                                                    : checkedYoga &&
                                                      checkedBoxing &&
                                                      !checkedPilates &&
                                                      !checkedHIIT
                                                    ? "Yoga,Boxing"
                                                    : checkedYoga &&
                                                      checkedPilates &&
                                                      !checkedBoxing &&
                                                      !checkedHIIT
                                                    ? "Yoga,Pilates"
                                                    : checkedBoxing &&
                                                      checkedPilates &&
                                                      !checkedHIIT &&
                                                      !checkedYoga
                                                    ? "Boxing,Pilates"
                                                    : checkedHIIT &&
                                                      checkedPilates &&
                                                      checkedBoxing &&
                                                      !checkedYoga
                                                    ? "HIIT,Pilates,Boxing"
                                                    : checkedHIIT &&
                                                      checkedPilates &&
                                                      checkedYoga &&
                                                      !checkedBoxing
                                                    ? "HIIT,Pilates,Yoga"
                                                    : checkedYoga &&
                                                      checkedPilates &&
                                                      checkedBoxing &&
                                                      !checkedHIIT
                                                    ? "Yoga,Pilates,Boxing"
                                                    : checkedYoga &&
                                                      checkedHIIT &&
                                                      checkedBoxing &&
                                                      !checkedPilates
                                                    ? "Yoga,HIIT,Boxing"
                                                    : checkedYoga &&
                                                      checkedHIIT &&
                                                      checkedBoxing &&
                                                      checkedPilates
                                                    ? "Yoga,HIIT,Boxing,Pilates"
                                                    : "Not Added"}
                                            </h6>
                                            <p style={{ color: "#898989" }}>
                                                {trainerData.description}
                                                {/* <Link to="profile">Read More</Link> */}
                                            </p>
                                        </div>
                                        <div className="card-button">
                                            {/* <button
                                                ref={hoverRef}
                                                style={{
                                                    backgroundColor: "#53BFD2",
                                                }}
                                                onClick={() => {
                                                  console.log(bestMatchData[data]);
                                                  history.push({
                                                    pathname: "/user/scheduler",
                                                    state: { trainerId: bestMatchData[data]["id"], trainerData: bestMatchData[data] },
                                                  });
                                                }}
                                            >
                                                book a session */}
                                                {/* <img src={onImage} alt="icon" /> */}
                                                {/* {isHovered ? (
                              <img src={onHoverImage} alt="icon" />
                            ) : (
                              <img src={onImage} alt="icon" />
                            )} */}
                                                {/* <p>
                                                    from{" "}
                                                    <span>
                                {
                                  bestMatchData[data]["oneOnOnePricing"][
                                    "inPersonAtClientLocation"
                                  ]
                                }
                              </span>
                                                </p>
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                    <div className="card_outter">
                        <div className="card_outter_wrapper">
                            <h2>{data.title}</h2>
                            <p>{data.describtion}</p>
                        </div>
                        <div className="card_inner ">
                            <div className="card_form_outter">
                                <form>
                                    <div className="card_item1">
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
                                                <img
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
                                                />
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            onChange={(event) => {
                                                const file =
                                                    event.target.files[0];
                                                if (
                                                    file &&
                                                    file.type.substr(0, 5) ===
                                                        "image"
                                                ) {
                                                    setImage(file);
                                                } else {
                                                    setImage(null);
                                                }
                                            }}
                                        />
                                        <h5>{data.upload}</h5>
                                    </div>
                                    <div className="card_item2 ">
                                        <div className="card_innerItem">
                                            <h6>First Name</h6>
                                            <input
                                                type="text"
                                                name="firstName"
                                                onChange={handleInputChange}
                                                value={trainerData.firstName}
                                                style={{
                                                    textTransform: "capitalize",
                                                }}
                                            />
                                        </div>
                                        <div className="card_innerItem">
                                            <h6>Last Name</h6>
                                            <input
                                                name="lastName"
                                                onChange={handleInputChange}
                                                value={trainerData.lastName}
                                                style={{
                                                    textTransform: "capitalize",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="card_item3">
                                        <h6>{data.tellus}</h6>

                                        <div className="inputs_experience">
                                            <Checkbox
                                                checked={checkedHIIT}
                                                onChange={(e) => {
                                                    setCheckedHIIT(
                                                        e.target.checked
                                                    );
                                                    console.log(
                                                        e.target.checked
                                                    );

                                                    if (e.target.checked) {
                                                        setTrainerbackgroundData(
                                                            {
                                                                ...trainerbackgroundData,
                                                                areaOfExpertise:
                                                                    [
                                                                        ...trainerbackgroundData.areaOfExpertise,
                                                                        "Strength & HIIT",
                                                                    ],
                                                            }
                                                        );

                                                        console.log(
                                                            trainerbackgroundData.areaOfExpertise
                                                        );
                                                    } else {
                                                        const index =
                                                            trainerbackgroundData.areaOfExpertise.indexOf(
                                                                "Strength & HIIT"
                                                            );
                                                        // console.log(index);
                                                        if (index > -1) {
                                                            trainerbackgroundData.areaOfExpertise.splice(
                                                                index,
                                                                1
                                                            );
                                                        }
                                                        console.log(
                                                            trainerbackgroundData.areaOfExpertise
                                                        );
                                                    }

                                                    console.log(
                                                        trainerbackgroundData
                                                    );
                                                }}
                                                style={{
                                                    color: "#53BFD2",
                                                }}

                                                // onChange={() => {
                                                //   setCheckState("Strength & HIIT");
                                                // }}
                                            />
                                            <div className="checkbox_label">
                                                Strength & HIIT
                                            </div>
                                            <Checkbox
                                                checked={checkedBoxing}
                                                // checked={true}
                                                onChange={(e) => {
                                                    setCheckedBoxing(
                                                        e.target.checked
                                                    );
                                                    console.log(
                                                        e.target.checked
                                                    );

                                                    if (e.target.checked) {
                                                        console.log(
                                                            "setBoxing"
                                                        );
                                                        setTrainerbackgroundData(
                                                            {
                                                                ...trainerbackgroundData,
                                                                areaOfExpertise:
                                                                    [
                                                                        ...trainerbackgroundData.areaOfExpertise,
                                                                        "Boxing",
                                                                    ],
                                                            }
                                                        );

                                                        console.log(
                                                            trainerbackgroundData.areaOfExpertise
                                                        );
                                                    } else {
                                                        console.log(
                                                            "unsetBoxing"
                                                        );

                                                        const index =
                                                            trainerbackgroundData.areaOfExpertise.indexOf(
                                                                "Boxing"
                                                            );
                                                        // console.log(index);
                                                        if (index > -1) {
                                                            trainerbackgroundData.areaOfExpertise.splice(
                                                                index,
                                                                1
                                                            );
                                                        }
                                                        console.log(
                                                            trainerbackgroundData.areaOfExpertise
                                                        );
                                                    }

                                                    console.log(
                                                        trainerbackgroundData
                                                    );
                                                }}
                                                style={{
                                                    color: "#53BFD2",
                                                }}
                                            />
                                            <div className="checkbox_label">
                                                Boxing
                                            </div>
                                            <Checkbox
                                                checked={checkedYoga}
                                                onChange={(e) => {
                                                    setCheckedYoga(
                                                        e.target.checked
                                                    );

                                                    if (e.target.checked) {
                                                        setTrainerbackgroundData(
                                                            {
                                                                ...trainerbackgroundData,
                                                                areaOfExpertise:
                                                                    [
                                                                        ...trainerbackgroundData.areaOfExpertise,
                                                                        "Yoga",
                                                                    ],
                                                            }
                                                        );
                                                    } else {
                                                        const index =
                                                            trainerbackgroundData.areaOfExpertise.indexOf(
                                                                "Yoga"
                                                            );
                                                        // console.log(index);
                                                        if (index > -1) {
                                                            trainerbackgroundData.areaOfExpertise.splice(
                                                                index,
                                                                1
                                                            );
                                                        }
                                                    }
                                                }}
                                                style={{
                                                    color: "#53BFD2",
                                                }}
                                            />
                                            <div className="checkbox_label">
                                                Yoga
                                            </div>
                                            <Checkbox
                                                checked={checkedPilates}
                                                onChange={(e) => {
                                                    setCheckedPilates(
                                                        e.target.checked
                                                    );

                                                    if (e.target.checked) {
                                                        setTrainerbackgroundData(
                                                            {
                                                                ...trainerbackgroundData,
                                                                areaOfExpertise:
                                                                    [
                                                                        ...trainerbackgroundData.areaOfExpertise,
                                                                        "Pilates",
                                                                    ],
                                                            }
                                                        );
                                                    } else {
                                                        const index =
                                                            trainerbackgroundData.areaOfExpertise.indexOf(
                                                                "Pilates"
                                                            );
                                                        // console.log(index);
                                                        if (index > -1) {
                                                            trainerbackgroundData.areaOfExpertise.splice(
                                                                index,
                                                                1
                                                            );
                                                        }
                                                    }
                                                }}
                                                style={{
                                                    color: "#53BFD2",
                                                }}
                                            />
                                            <div className="checkbox_label">
                                                Pilates
                                            </div>
                                        </div>

                                        {/* <div className="inputs_experience"> */}
                                        {/* <Checkbox
                        checked={trainerData?.areaOfExpertise?.includes(
                          "Strength & HIIT"
                        )}
                        value=""
                        onChange={handleChange}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <label>Strength & HITT</label>
                      <Checkbox
                        value=""
                        onChange={handleChange}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <label>Boxing</label>
                      <Checkbox
                        value=""
                        onChange={handleChange}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <label>Yoga</label>
                      <Checkbox
                        value=""
                        onChange={handleChange}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <label>Pilates</label>
                    </div> */}
                                    </div>
                                    <div className="card_item4">
                                        <h6>{data.clientDesc}</h6>
                                        <textarea
                                            type="text"
                                            value={trainerData.description}
                                            name="description"
                                            placeholder="Give us your elevator pitch! This is all clients will see on the search results page until they click into your full profile."
                                            onChange={handleInputChange}
                                            maxLength="100"
                                        />
                                    </div>
                                    <div className="card_item5">
                                        <h6>Tell us about your Pricing</h6>
                                        <p>{data.pricingDesc}</p>
                                    </div>
                                    <div className="card_item6">
                                        <Accordion title="In Person Training Session Pricing (at the clients location)">
                                            <div className="card_accordion">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Individual charge"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.individualCharge
                                                        }
                                                        name="individualCharge"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 2 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssTwoPeopleCharge
                                                        }
                                                        name="ssTwoPeopleCharge"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>

                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 3 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssThreePeopleCharge
                                                        }
                                                        name="ssThreePeopleCharge"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 4 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssFourPeopleCharge
                                                        }
                                                        name="ssFourPeopleCharge"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Class Flat Rate (5-15 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.classFlatRate
                                                        }
                                                        name="classFlatRate"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="3 Session Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.threeSessionRate
                                                        }
                                                        name="threeSessionRate"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="10 Session Pass Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.tenSessionRate
                                                        }
                                                        name="tenSessionRate"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </Accordion>
                                        <Accordion title="In Person Training Session Pricing (at your location)">
                                            <div className="card_accordion">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Individual charge"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.individualChargeTl
                                                        }
                                                        name="individualChargeTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 2 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssTwoPeopleChargeTl
                                                        }
                                                        name="ssTwoPeopleChargeTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>

                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 3 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssThreePeopleChargeTl
                                                        }
                                                        name="ssThreePeopleChargeTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 4 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssFourPeopleChargeTl
                                                        }
                                                        name="ssFourPeopleChargeTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Class Flat Rate (5-15 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.classFlatRateTl
                                                        }
                                                        name="classFlatRateTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="3 Session Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.threeSessionRateTl
                                                        }
                                                        name="threeSessionRateTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="10 Session Pass Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.tenSessionRateTl
                                                        }
                                                        name="tenSessionRateTl"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </Accordion>
                                        <Accordion title="Virtual Training Session Pricing">
                                            <div className="card_accordion">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Individual charge"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.individualChargeVt
                                                        }
                                                        name="individualChargeVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 2 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssTwoPeopleChargeVt
                                                        }
                                                        name="ssTwoPeopleChargeVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>

                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 3 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssThreePeopleChargeVt
                                                        }
                                                        name="ssThreePeopleChargeVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Social Session (Total Charge for 4 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.ssFourPeopleChargeVt
                                                        }
                                                        name="ssFourPeopleChargeVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Class Flat Rate (5-15 People)"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.classFlatRateVt
                                                        }
                                                        name="classFlatRateVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="3 Session Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.threeSessionRateVt
                                                        }
                                                        name="threeSessionRateVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="10 Session Pass Rate"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.tenSessionRateVt
                                                        }
                                                        name="tenSessionRateVt"
                                                    />
                                                    <img
                                                        src={DollarIcon}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </Accordion>
                                    </div>
                                    <div className="submit_button">
                                        <button
                                            onClick={
                                                handleChangeToTrainerProfile
                                            }
                                            type="submit"
                                            // onClick={handleTrainerAvailability}
                                        >
                                            Continue To profile{" "}
                                            <ArrowHoverBlacked />
                                            {/* <img src={Arrow} alt="icon" /> */}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

function Accordion({ title, children }) {
    const [isOpenAccodion, setAccordion] = useState(false);

    // for radio button
    const [selectedValue, setSelectedValue] = useState("a");

    // for radio
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="accordion-wrapper">
            <div className="cyanRadio_wrapper">
                <CyanRadio
                    checked={selectedValue === ""}
                    onChange={handleChange}
                    onClick={() => setAccordion(!isOpenAccodion)}
                />
                <h6
                    className={`accordion-title ${
                        isOpenAccodion ? "open" : ""
                    }`}
                    onClick={() => setAccordion(!isOpenAccodion)}
                >
                    {title}
                </h6>
            </div>
            <div
                className={`accordion-item ${
                    !isOpenAccodion ? "collapsed" : ""
                }`}
            >
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    details: state.trainerReducer.details,
    trainerPersonalData: state.trainerReducer.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateTrainerDetails,
            getTrainerDetails,
        },
        dispatch
    );
};

const TrainerCard = connect(mapStateToProps, mapDispatchToProps)(TrainerCardFC);

export default TrainerCard;
