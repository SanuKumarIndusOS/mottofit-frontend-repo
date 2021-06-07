import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import "./accordion.scss";
import DollarIcon from "../../../../assets/files/SVG/dollar Icon.svg";
// import { TrainerPrevModal } from "./TrainerPrevModal";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { useSelector, useDispatch } from "react-redux";
import { captureTrainerCard } from "action/trainerAct";
import { trainerDetail, updateTrainerDetailsApicall } from "action/trainerAct";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import { fileUpload } from "action/trainerAct";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function TrainerCardDashboard(props) {
    const [validationtxt, setValidationtxt] = useState(false);
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
        profilepic: null,
    });

    useEffect(() => {
        dispatch(captureTrainerCard(trainerCardData));
    }, [trainerCardData]);
    // Training verticals selection states
    const [checkedBoxing, setCheckedBoxing] = useState(false);
    const [checkedHIIT, setCheckedHIIT] = useState(false);
    const [checkedYoga, setCheckedYoga] = useState(false);
    const [checkedPilates, setCheckedPilates] = useState(false);

    //Profile Picture Upload
    const [previewImage, setPreviewTmage] = useState();
    const [image, setImage] = useState();
    const fileInputRef = useRef();

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
    const dispatch = useDispatch();

    useEffect(() => {
        props.trainerDetail().then((res) => {
            let {
                classSessionPricing = {},
                oneOnOnePricing = {},
                socialSessionPricing = {},
            } = res;
            setTrainerCardData({
                ...trainerCardData,
                profilepic: res.profilePicture,
                firstName: res.firstName,
                lastName: res.lastName,
                description: res.description,
                verticals: res.areaOfExpertise,
                inPersonAtClient_individualCharge: oneOnOnePricing
                    ? oneOnOnePricing.inPersonAtClientLocation
                    : "",
                inPersonAtClient_twoPPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtClientLocationfor2People
                    : "",
                inPersonAtClient_threePPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtClientLocationfor3People
                    : "",
                inPersonAtClient_fourPPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtClientLocationfor4People
                    : "",
                inPersonAtClient_classFlatRate: classSessionPricing
                    ? classSessionPricing.inPersonAtclientLocationfor15People
                    : "",
                inPersonAtClient_threeSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor3SessionAtClientLocation
                    : "",
                inPersonAtClient_tenSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor10SessionAtClientLocation
                    : "",
                inPersonAtTrainer_individualCharge: oneOnOnePricing
                    ? oneOnOnePricing.inPersonAtTrainerLocation
                    : "",
                inPersonAtTrainer_twoPPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtTrainerLocationfor2People
                    : "",
                inPersonAtTrainer_threePPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtTrainerLocationfor3People
                    : "",
                inPersonAtTrainer_fourPPL: socialSessionPricing
                    ? socialSessionPricing.inPeronAtTrainerLocationfor4People
                    : "",
                inPersonAtTrainer_classFlatRate: classSessionPricing
                    ? classSessionPricing.inPersonAttrainerLocationfor15People
                    : "",
                inPersonAtTrainer_threeSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor3SessionAtTrainerLocation
                    : "",
                inPersonAtTrainer_tenSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor10SessionAtTrainerLocation
                    : "",
                virtual_individualCharge: oneOnOnePricing
                    ? oneOnOnePricing.virtualSession
                    : "",
                virtual_twoPPL: socialSessionPricing
                    ? socialSessionPricing.virtualSessionfor2People
                    : "",
                virtual_threePPL: socialSessionPricing
                    ? socialSessionPricing.virtualSessionfor3People
                    : "",
                virtual_fourPPL: socialSessionPricing
                    ? socialSessionPricing.virtualSessionfor4People
                    : "",
                virtual_classFlatRate: classSessionPricing
                    ? classSessionPricing.virtualSessionfor15People
                    : "",
                virtual_threeSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor3SessionAtVirtual
                    : "",
                virtual_tenSessionRate: oneOnOnePricing
                    ? oneOnOnePricing.passRatefor10SessionAtVirtual
                    : "",
            });
            if (res.areaOfExpertise) {
                if (
                    res.areaOfExpertise.find((el) => el === "Strength & HIIT")
                ) {
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
        if (
            trainerCardData.inPersonAtClient_individualCharge ||
            trainerCardData.inPersonAtTrainer_individualCharge
        ) {
            if (image !== undefined) {
                const fd = new FormData();
                fd.append("profilePicture", image, image.name);
                dispatch(fileUpload(fd));
            }
            let payload = {
                firstName: trainerCardData.firstName,
                lastName: trainerCardData.lastName,
                areaOfExpertise: trainerCardData.verticals,
                description: trainerCardData.description,
                oneOnOnePricing: {
                    inPersonAtClientLocation:
                        trainerCardData.inPersonAtClient_individualCharge,
                    inPersonAtTrainerLocation:
                        trainerCardData.inPersonAtTrainer_individualCharge,
                    virtualSession: trainerCardData.virtual_individualCharge,
                    passRatefor3SessionAtClientLocation:
                        trainerCardData.inPersonAtClient_threeSessionRate,
                    passRatefor10SessionAtClientLocation:
                        trainerCardData.inPersonAtClient_tenSessionRate,
                    passRatefor3SessionAtTrainerLocation:
                        trainerCardData.inPersonAtTrainer_threeSessionRate,
                    passRatefor10SessionAtTrainerLocation:
                        trainerCardData.inPersonAtTrainer_tenSessionRate,
                    passRatefor3SessionAtVirtual:
                        trainerCardData.virtual_threeSessionRate,
                    passRatefor10SessionAtVirtual:
                        trainerCardData.virtual_tenSessionRate,
                },
                socialSessionPricing: {
                    inPeronAtClientLocationfor2People:
                        trainerCardData.inPersonAtClient_twoPPL,
                    inPeronAtClientLocationfor3People:
                        trainerCardData.inPersonAtClient_threePPL,
                    inPeronAtClientLocationfor4People:
                        trainerCardData.inPersonAtClient_fourPPL,
                    inPeronAtTrainerLocationfor2People:
                        trainerCardData.inPersonAtTrainer_twoPPL,
                    inPeronAtTrainerLocationfor3People:
                        trainerCardData.inPersonAtTrainer_threePPL,
                    inPeronAtTrainerLocationfor4People:
                        trainerCardData.inPersonAtTrainer_fourPPL,
                    virtualSessionfor2People: trainerCardData.virtual_twoPPL,
                    virtualSessionfor3People: trainerCardData.virtual_threePPL,
                    virtualSessionfor4People: trainerCardData.virtual_fourPPL,
                },
                classSessionPricing: {
                    inPersonAtclientLocationfor15People:
                        trainerCardData.inPersonAtClient_classFlatRate,
                    inPersonAttrainerLocationfor15People:
                        trainerCardData.inPersonAtTrainer_classFlatRate,
                    virtualSessionfor15People:
                        trainerCardData.virtual_classFlatRate,
                },
            };
            props.updateTrainerDetailsApicall(payload).then(() => {
                alert("Successfully, Updated the changes");
            });
        } else {
            setValidationtxt(true);
        }
    };

    return (
        <div className="container">
            <div className="card_inner">
                <div className="pro_pic_center">
                    <div className="item1_card">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "100px",
                                    marginTop: "3em",
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
                                        src={
                                            trainerCardData.profilepic
                                                ? trainerCardData.profilepic
                                                : Profile
                                        }
                                        alt="icon"
                                        style={{
                                            objectFit: "cover",
                                            width: "200px",
                                            height: "200px",
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
                            style={{ display: "none" }}
                            onChange={(event) => {
                                const file = event.target.files[0];
                                if (
                                    file &&
                                    file.type.substr(0, 5) === "image"
                                ) {
                                    setImage(file);
                                } else {
                                    setImage(null);
                                }
                            }}
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
                        Tell Us What You Train! Select All The Categories That
                        Apply
                    </label>
                    <br />
                    <div className="item3_card_inner">
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
                                    const index =
                                        trainerCardData.verticals.indexOf(
                                            "Strength & HIIT"
                                        );
                                    if (index > -1) {
                                        trainerCardData.verticals.splice(
                                            index,
                                            1
                                        );
                                    }
                                }
                            }}
                        />
                        &ensp;
                        <h6 style={{ marginRight: "1em" }}>Strength & HIIT</h6>
                        &ensp;
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
                                        verticals: [
                                            ...trainerCardData.verticals,
                                            "Boxing",
                                        ],
                                    });
                                } else {
                                    const index =
                                        trainerCardData.verticals.indexOf(
                                            "Boxing"
                                        );
                                    if (index > -1) {
                                        trainerCardData.verticals.splice(
                                            index,
                                            1
                                        );
                                    }
                                }
                            }}
                        />
                        &ensp;
                        <h6 style={{ marginRight: "1em" }}>Boxing</h6> &ensp;
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
                                        verticals: [
                                            ...trainerCardData.verticals,
                                            "Yoga",
                                        ],
                                    });
                                } else {
                                    const index =
                                        trainerCardData.verticals.indexOf(
                                            "Yoga"
                                        );
                                    if (index > -1) {
                                        trainerCardData.verticals.splice(
                                            index,
                                            1
                                        );
                                    }
                                }
                            }}
                        />
                        &ensp;
                        <h6 style={{ marginRight: "1em" }}>Yoga</h6> &ensp;
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
                                        verticals: [
                                            ...trainerCardData.verticals,
                                            "Pilates",
                                        ],
                                    });
                                } else {
                                    const index =
                                        trainerCardData.verticals.indexOf(
                                            "Pilates"
                                        );
                                    if (index > -1) {
                                        trainerCardData.verticals.splice(
                                            index,
                                            1
                                        );
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
                        Write A Short And Sweet Description For Clients To Pick
                        You In 100 Characterss
                    </label>
                    <br />
                    <textarea
                        value={trainerCardData.description}
                        onChange={(e) => {
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
                        Please fill only those fields relevant to the various
                        kinds of training you offer. We recommend that the
                        pricing of the social sessions (2-4 people) should
                        provide savings to each client in comparison to a 1 on 1
                        individual session. The pricing for a 5-15 person group
                        class is a flat rate that will be split evenly amongst
                        each client.
                    </p>
                </div>
                <div>
                    <Accordion title="In Person Training Session Pricing (at the clients location)">
                        <div className="card_accordion">
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Individual Charge"
                                    value={
                                        trainerCardData.inPersonAtClient_individualCharge
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_individualCharge:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <br />
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 2 People)"
                                    value={
                                        trainerCardData.inPersonAtClient_twoPPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_twoPPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />

                                <br />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 3 People)"
                                    value={
                                        trainerCardData.inPersonAtClient_threePPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_threePPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                                <br />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 4 People)"
                                    value={
                                        trainerCardData.inPersonAtClient_fourPPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_fourPPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                                <br />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Class Flat Rate (5-15 People)"
                                    value={
                                        trainerCardData.inPersonAtClient_classFlatRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_classFlatRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />

                                <br />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="3 Session Rate"
                                    value={
                                        trainerCardData.inPersonAtClient_threeSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_threeSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="10 Session Pass Rate"
                                    value={
                                        trainerCardData.inPersonAtClient_tenSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtClient_tenSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
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
                                    value={
                                        trainerCardData.inPersonAtTrainer_individualCharge
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_individualCharge:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 2 People)"
                                    value={
                                        trainerCardData.inPersonAtTrainer_twoPPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_twoPPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 3 People)"
                                    value={
                                        trainerCardData.inPersonAtTrainer_threePPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_threePPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Social Session (Total for 4 People)"
                                    value={
                                        trainerCardData.inPersonAtTrainer_fourPPL
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_fourPPL:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Class Flat Rate (5-15 People)"
                                    value={
                                        trainerCardData.inPersonAtTrainer_classFlatRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_classFlatRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="3 Session Rate"
                                    value={
                                        trainerCardData.inPersonAtTrainer_threeSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_threeSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="10 Session Pass Rate"
                                    value={
                                        trainerCardData.inPersonAtTrainer_tenSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            inPersonAtTrainer_tenSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
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
                                    value={
                                        trainerCardData.virtual_individualCharge
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            virtual_individualCharge:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
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
                                    type="number"
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
                                    type="number"
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
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="Class Flat Rate (5-15 People)"
                                    value={
                                        trainerCardData.virtual_classFlatRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            virtual_classFlatRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="3 Session Rate"
                                    value={
                                        trainerCardData.virtual_threeSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            virtual_threeSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />
                            </div>
                            <div className="card_accordion_input">
                                <input
                                    placeholder="10 Session Pass Rate"
                                    value={
                                        trainerCardData.virtual_tenSessionRate
                                    }
                                    onChange={(e) => {
                                        setTrainerCardData({
                                            ...trainerCardData,
                                            virtual_tenSessionRate:
                                                e.target.value,
                                        });
                                    }}
                                    type="number"
                                />
                                <img src={DollarIcon} alt="icon" />

                                <br />
                            </div>
                        </div>
                    </Accordion>
                </div>
                <div className="error_span">
                    {validationtxt ? (
                        <span>
                            Please enter Individual Charge (atleast one){" "}
                        </span>
                    ) : null}
                </div>
                <div className="card_submit">
                    <button onClick={() => handleSubmit()}>
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

    return (
        <div className="accordion-wrapper">
            <div className="cyanRadio_wrapper">
                <label
                    className={`accordion-title ${
                        isOpenAccodion ? "open" : ""
                    }`}
                    onClick={() => setAccordion(!isOpenAccodion)}
                >
                    {title}
                </label>
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            trainerDetail,
            updateTrainerDetailsApicall,
        },
        dispatch
    );
};

const TrainerCardNew = connect(null, mapDispatchToProps)(TrainerCardDashboard);
export default TrainerCardNew;
