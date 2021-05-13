import React, { useState, useEffect, useRef } from "react";
import ImageBG from "../../../../assets/files/SVG/Image 1.svg";
import PaymentSection from "./SetUpPaymentSection/index";
import "./styles.scss";
import Instagram from "../../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../../assets/files/SVG/Web Icon.svg";
import Youtube from "../../../../assets/files/SVG/Youtube.svg";
import Location from "../../../../assets/files/SVG/Location Icon.svg";
import ArrowBack from "../../../../assets/files/SVG/Arrow Back.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
// import 'react-responsive-modal/styles.css';

import Footer from "../../../common/Footer/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateTrainerDetails } from "action/trainerAct";
import Select from "react-select";
import { history } from "helpers";
import { TrainerApi, PaymentApi } from "service/apiVariables";
import { api } from "service/api";
import { Toast } from "service/toast";
import axios from "axios";
import { Modal } from "react-responsive-modal";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import "../../../TrainerProfile/Profile/model.scss";
import "../../../TrainerProfile/Profile/styles.scss";
import QMark from "../../../../assets/files/FindTrainer/Q Mark.svg";
import Quote from "../../../../assets/files/FindTrainer/Quote Icon.svg";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import Tick from "../../../../assets/files/FindTrainer/Tick 1.svg";
import Share from "../../../../assets/files/FindTrainer/share.svg";

const FileArray = [];

const options = [
    { label: "Palm Beach", value: "Palm Beach", name: "serviceableLocation" },
    { label: "New York", value: "New York", name: "serviceableLocation" },
    { label: "Hamptons", value: "Hamptons", name: "serviceableLocation" },
    { label: "Miami", value: "Miami", name: "serviceableLocation" },
];

const TrainerSetUpProfileFC = ({
    updateTrainerDetails,
    trainerPersonalData,
    details,
}) => {
    const data = {
        heading: "Build out the rest of your Profile!",
        describe:
            "Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time.",
        motto: "What’s your Motto?",
        tellUs: "Tell us about you and describe your training process",
        showcase: "Throw in some photos showcasing you & your skills",
        certificate: "Certifications you’d like to display",
        where: "Where will you be training",
        serviceable: "Which city will you train in?",
        location: "Your preferred training location",
        web: "Website",
        insta: "Instagram",
        youtube: "Youtube",
    };

    const [imageFields, setImageFields] = useState([
        {
            image: "",
        },
    ]);

    const [isLoading, setLoading] = useState(false);

    const [inputCertificatesFields, setInputCertificatesFields] = useState([
        {
            certificate: "",
            year: "",
            upload: "",
        },
    ]);

    const [trainerData, setTrainerData] = useState({
        motto: "",
        trainingProcessDescription: "",
        trainingLocation: [],
        serviceableLocation: "",
        location: "",
        websiteLink: "",
        instaHandle: "",
        youtubeChannel: "",
    });

    const [open, setOpen] = useState(false);
    const myRef = useRef(null);
    const closeIcon = <img src={CloseIcon} alt="close" />;

    const handleAddFields = () => {
        setImageFields([...imageFields, { image: "" }]);
        setRenderButton(false);
    };
    const handleRemoveFields = (index) => {
        const values = [...imageFields];
        values.splice(index, 1);
        setImageFields(values);
        setRenderButton(true);
    };

    const handleAddCertificateFields = () => {
        setInputCertificatesFields([
            ...inputCertificatesFields,
            { certificate: "", year: "", upload: "" },
        ]);
    };
    const handleChangeCertificateInput = (index, event) => {
        const values = [...inputCertificatesFields];
        values[index][event.target.name] = event.target.value;
        setInputCertificatesFields(values);
    };

    const handleInputChange = (e, trainingType) => {
        // debugger;
        e.preventDefault && e.preventDefault();

        const { name, value, label } = e.target || e || {};

        const tempData = {
            ...trainerData,
        };

        // if(label) value = {label , name , value};

        const isMultiSelect = Array.isArray(e);

        if (name === "trainingLocation") {
            if (tempData["trainingLocation"].includes(trainingType)) {
                tempData["trainingLocation"] = tempData[
                    "trainingLocation"
                ].filter((location) => location !== trainingType);
            } else {
                tempData["trainingLocation"] = [
                    ...tempData["trainingLocation"],
                    trainingType,
                ];
            }
        } else {
            tempData[`${isMultiSelect ? e[0].name : name}`] = isMultiSelect
                ? e
                : value;
        }

        setTrainerData(tempData);
    };

    const handleSubmit = () => {
        console.log(FileArray);

        if (FileArray.length !== 0) {
            const headers = {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            };

            const fd = new FormData();

            FileArray.forEach((file) => {
                fd.append("images", file, file.name);
            });
            axios
                .post("http://doodlebluelive.com:2307/v1/upload/image", fd, {
                    headers: headers,
                })
                .then((res) => {
                    console.log(res);
                });
        }

        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };

        axios
            .put(
                "http://doodlebluelive.com:2307/v1/trainer",
                { applicationStatus: "setupComplete" },
                {
                    headers: headers,
                }
            )
            .then((res) => {
                console.log(res);
            });

        const {
            firstName,
            lastName,
            description,
            individualCharge,
            ssTwoPeopleCharge,
            ssThreePeopleCharge,
            ssFourPeopleCharge,
            classFlatRate,
            threeSessionRate,
            tenSessionRate,
            instaHandle,
            location,
            motto,
            serviceableLocation,
            trainingLocation,
            trainingProcessDescription,
            websiteLink,
            youtubeChannel,
            individualChargeTl,
            ssTwoPeopleChargeTl,
            ssThreePeopleChargeTl,
            ssFourPeopleChargeTl,
            classFlatRateTl,
            threeSessionRateTl,
            tenSessionRateTl,
            individualChargeVt,
            ssTwoPeopleChargeVt,
            ssThreePeopleChargeVt,
            ssFourPeopleChargeVt,
            classFlatRateVt,
            threeSessionRateVt,
            tenSessionRateVt,
        } = trainerData;

        console.log(serviceableLocation);

        let payload = {
            firstName,
            lastName,
            description,
            oneOnOnePricing: {
                passRatefor3Session: threeSessionRate,
                passRatefor10Session: tenSessionRate,
                inPersonAtClientLocation: individualCharge,
                inPersonAtTrainerLocation: individualChargeTl,
                passRatefor3SessionAtTrainerLocation:threeSessionRateTl,
                passRatefor10SessionAtTrainerLocation:tenSessionRateTl,
                virtualSession:individualChargeVt,
                passRatefor3SessionAtVirtual:threeSessionRateVt,
                passRatefor10SessionAtVirtual:tenSessionRateVt,  
            },
            socialSessionPricing: {
                inPeronAtClientLocationfor2People: ssTwoPeopleCharge,
                inPeronAtClientLocationfor3People: ssThreePeopleCharge,
                inPeronAtClientLocationfor4People: ssFourPeopleCharge,
                inPeronAtTrainerLocationfor2People:ssTwoPeopleChargeTl,
                inPeronAtTrainerLocationfor3People:ssThreePeopleChargeTl,
                inPeronAtTrainerLocationfor4People:ssFourPeopleChargeTl,
                virtualSessionfor2People:ssTwoPeopleChargeVt,
                virtualSessionfor3People:ssThreePeopleChargeVt,
                virtualSessionfor4People:ssFourPeopleChargeVt,
            },
            classSessionPricing: {
                inPersonAtclientLocationfor15People: classFlatRate,
                inPersonAttrainerLocationfor15People:classFlatRateTl,
                virtualSessionfor15People:classFlatRateVt 
            },
            trainingProcess: trainingProcessDescription,
            myMotto: motto,
            preferedTrainingMode: trainingLocation,
            websiteLink,
            youtubeLink: youtubeChannel,
            instagramProfile: instaHandle,
            currentExperience: { workLocation: location },
            certification: inputCertificatesFields?.map(
                ({ certificate, year }) => ({
                    certificateName: "",
                    certfiedYear: year,
                    certification: certificate,
                })
            ),

            servicableLocation: serviceableLocation,
        };
        // updateTrainerDetails();

        console.log(payload);

        const { updateTrainerAvailabilityApi } = TrainerApi;

        updateTrainerAvailabilityApi.body = payload;

        setLoading(true);

        api({ ...updateTrainerAvailabilityApi })
            .then(({ data, message }) => {
                console.log(data, message);
                getStripeURL();
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

        // // history.push("/trainers/dashboard/session");
    };

    const handleBack = () => {
        let storeData = {
            details: { ...trainerData },
        };

        updateTrainerDetails(storeData);
    };

    const getStripeURL = () => {
        const { getStripeAccLink } = PaymentApi;

        api({ ...getStripeAccLink })
            .then(({ data, message }) => {
                const { url } = data;
                window.location.href = url;
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (Object.keys(trainerPersonalData).length < 5) {
            return history.push("/trainer/card");
        }
        const {
            trainingProcess = "",
            myMotto = "",
            preferedTrainingMode = "",
            websiteLink = "",
            youtubeLink = "",
            instagramProfile = "",
            currentExperience = {},
            certification = [],
            serviceableLocation = [],
        } = trainerPersonalData || {};

        const { workLocation = "" } = currentExperience || {};

        const storeData = {
            details: {
                ...details,
                motto: myMotto,
                trainingProcessDescription: trainingProcess,
                trainingLocation: preferedTrainingMode,
                servicableLocation: serviceableLocation.map((location) => ({
                    label: location,
                    value: location,
                    name: "serviceableLocation",
                })),
                location: workLocation,
                websiteLink,
                instaHandle: instagramProfile,
                // youtubeChannel: youtubeLink,
            },
        };

        const tempCertification = certification?.map(
            ({ certfiedYear, certificateName }) => ({
                certificate: certificateName,
                year: certfiedYear,
            })
        );

        setInputCertificatesFields(tempCertification);

        setTrainerData(storeData.details);

        updateTrainerDetails(storeData);
    }, []);

    const [renderButton, setRenderButton] = useState({
        visiable: false,
    });
    const [agreed, setAgreed] = useState(false);

    const handleAgreedCheck = () => {
        setAgreed(!agreed);
    };
    return (
        <>
            <div className="outter_setup_container container">
                <div className="setup_link">
                    <div className="inner_link">
                        <img src={ArrowBack} alt="icon" />
                        <Link to="/trainer/card" onClick={handleBack}>
                            {" "}
                            Edit Trainer Card{" "}
                        </Link>
                    </div>
                    <div className="inner_link_preview">
                    <div onClick={()=>{setOpen(true);}}>Preview Your Trainer Profile</div>
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
                            classNames={{
                                modal: 'customModal',
                              }}
                        >
                            <div className="profile_main">
                <div className="profile_outter_container">
                    {/* <div className="profile"> */}
                    <div className="profile_wrapper_container ">
                        <div className="profile_header">
                            <div className="inner_profile container">
                                <img src={trainerPersonalData.profilePicture} />
                                <div className="profile_header_inner">
                                    <h2>{trainerData.firstName}{" "}{trainerData.lastName}</h2>
                                    <p>{trainerPersonalData.areaOfExpertise.toString()}</p>
                                </div>
                                {/* <div className="profile_header_link"> */}
                                    {/* <img src={ArrowBack} alt="icon" /> */}
                                    {/* <Link to="/trainer/find">
                                        Back to Search
                                    </Link> */}
                                    {/* <label style = {{color:"#bcbcbc"}}>Back to Search</label> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="profile_main_contents container">
                            <div className="profile_aside">
                                <div className="profile_aside_link">
                                    {/* <Link to="/">View Calender</Link> */}
                                    <label>View Calender</label>
                                    <img src={ArrowNext} alt="icon" />
                                </div>
                                <div className="profile_aside_items">
                                    <div className="profile_aside_item">
                                        <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                                        <hr />
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $45{" "}
                                                <span>(Virtual Session)</span>
                                            </h6>
                                            <h6>
                                                $150{" "}
                                                <span>(In Person Session)</span>
                                            </h6>
                                            <h5>
                                                See package rates during
                                                checkout
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="profile_aside_item">
                                        <h2>
                                            SOCIAL SESSIONS{" "}
                                            <img
                                                src={QMark}
                                                alt="icon"
                                                onClick={() => setOpen(true)}
                                                className="model_Qmark"
                                            />
                                        </h2>
                                        <hr />
                                        {/* model */}
                                        {/* {open ? (
                                            <Modal
                                                open={open}
                                                onClose={() => setOpen(false)}
                                                center
                                                closeIcon={closeIcon}
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
                                                        Want to Train with
                                                        Friends?
                                                    </h2>
                                                    <p>
                                                        Make your workout social
                                                        & fun, while saving
                                                        money! Complete your
                                                        payment and add friends
                                                        to your session simply
                                                        by sending them an
                                                        invite. Once they accept
                                                        your invite, your
                                                        session rate will
                                                        automatically be
                                                        adjusted.
                                                    </p>
                                                </div>
                                            </Modal>
                                        ) : null} */}
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $65{" "}
                                                <span>
                                                    / Session (For 2 People)
                                                </span>
                                            </h6>
                                            <h6>
                                                $50{" "}
                                                <span>
                                                    / Session (For 3 People)
                                                </span>
                                            </h6>
                                            <h6>
                                                $25{" "}
                                                <span>
                                                    / Session (For 4 People)
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="profile_aside_item">
                                        <h2>
                                            CREATE A CLASS
                                            <img
                                                src={QMark}
                                                alt="icon"
                                                // onClick={() =>
                                                //     setOpenClassModel(true)
                                                // }
                                                className="model_Qmark"
                                            />
                                        </h2>
                                        <hr />
                                        {/* model */}
                                        {/* {openClassModel ? (
                                            <Modal
                                                open={openClassModel}
                                                // onClose={() =>
                                                //     setOpenClassModel(false)
                                                // }
                                                center
                                                closeIcon={closeIcon}
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
                                                        Want to Create a Class?
                                                    </h2>
                                                    <p>
                                                        Design your very own
                                                        workout party with the
                                                        vertical & location of
                                                        your choice. Create a
                                                        class by paying a flat
                                                        rate and adding up to 19
                                                        friends. You will be
                                                        notified once they
                                                        accept your invite.
                                                    </p>
                                                </div>
                                            </Modal>
                                        ) : null} */}
                                        <div className="profile_aside_inner_item">
                                            <h6>
                                                $200{" "}
                                                <span>
                                                    Flat Rate Class (For 5-15
                                                    People)
                                                </span>
                                            </h6>
                                            <h5>
                                                If trainer offers Virtual Social
                                                Sessions and Classes they will
                                                be at a discount to in person
                                                rates above. You will see these
                                                prior to checkout.
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="profile_aside_item">
                                        <h2>TRAINING LOCATIONS</h2>

                                        <hr />
                                        <div className="profile_aside_inner_item">
                                            <div className="profile_location">
                                                {/* <img src={Tick} alt="icon" /> */}
                                                <h4>{trainerData.trainingLocation[0]}</h4>
                                            </div>
                                            <div className="profile_location">
                                                {/* <img src={Tick} alt="icon" /> */}
                                                <h4>
                                                    Trainer’s Location{" "}
                                                    <Link>
                                                        View Location
                                                    </Link>
                                                </h4>
                                            </div>
                                            <div className="profile_location">
                                                <img src={Tick} alt="icon" />
                                                <h4>Your Location</h4>
                                            </div>
                                            <div className="profile_share">
                                                <img src={Share} alt="icon" />
                                                <Link to="/">
                                                    Share Profile
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        Book a session <ArrowHoverBlacked />
                                    </button>
                                </div>
                            </div>
                            <div className="profile_trainer_data">
                                <div className="profile_right_data">
                                    <div className="profile_right_item1">
                                        {/* <img src={Quote} alt="qoute" /> */}
                                        <h6>
                                        {trainerData.motto}
                                        </h6>
                                    </div>
                                    <div className="profile_right_item2">
                                        <h4>About{" "}{trainerData.firstName}</h4>
                                        <p>
                                            {trainerData.trainingProcessDescription}
                                        </p>

                                        <div className="profile_images">
                                            {trainerData ? <ImageGrid trainerPersonalData = {trainerPersonalData} /> : null}
                                            
                                        </div>
                                    </div>
                                    <div className="profile_right_item3 mb-5 pb-5">
                                        <h2>Certifications</h2>
                                        <div className="profile_item3_inner">
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                <h6>
                                                    {trainerPersonalData.certification[0] ? trainerPersonalData.certification[0].certification : "Not Added"}
                                                </h6>
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                <h6>
                                                {trainerPersonalData.certification[1] ? trainerPersonalData.certification[1].certification : "Not Added"}
                                                </h6>
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                <h6>
                                                {trainerPersonalData.certification[2] ? trainerPersonalData.certification[2].certification : "Not Added"}
                                                </h6>
                                            </div>
                                            <div className="inner_items">
                                                <img src={Tick} alt="check" />
                                                <h6>
                                                {trainerPersonalData.certification[3] ? trainerPersonalData.certification[3] : "Not Added"}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="profile_right_item4">
                                        <h2>Jane’s Schedule </h2>
                                        <div
                                            className="profile_event_schedular"
                                            onClick={() => console.log("hello")}
                                        ></div>
                                    </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>) : null }
                </div>
                <div className="setup_container ">
                    <div className="setup_headings">
                        <h2>{data.heading}</h2>
                        <p>{data.describe}</p>
                    </div>
                    <div className="setup_wrapper">
                        <div className="setup_formInner container">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="setup_card1">
                                    <h6>{data.motto}</h6>
                                    <textarea
                                        type="text"
                                        placeholder="Share the words you live or train by in 250 characters or less"
                                        onChange={handleInputChange}
                                        value={trainerData.motto}
                                        name="motto"
                                        maxlength="250"
                                    />
                                </div>
                                <div className="setup_card2">
                                    <h6>{data.tellUs}</h6>
                                    <textarea
                                        type="text"
                                        name="comment"
                                        placeholder="Tell clients everything you think they should know! Utilize Key words as anything you write here
                                        will be searchable through our search bar"
                                        onChange={handleInputChange}
                                        value={
                                            trainerData.trainingProcessDescription
                                        }
                                        name="trainingProcessDescription"
                                    />
                                </div>
                                <div className="setup_card3">
                                    <h6>{data.showcase}</h6>
                                    <div className="read_image">
                                        {imageFields
                                            .slice(0, 2)
                                            .map((index, input) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="render_image"
                                                    >
                                                        <ImageReander
                                                            value={input.image}
                                                        />
                                                        <ImageReander
                                                            value={input.image}
                                                        />
                                                        <ImageReander
                                                            value={input.image}
                                                        />
                                                        <ImageReander
                                                            value={input.image}
                                                        />
                                                        <ImageReander
                                                            value={input.image}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        {renderButton ? (
                                            <h5
                                                onClick={() =>
                                                    handleAddFields()
                                                }
                                            >
                                                + Add More Image's
                                            </h5>
                                        ) : (
                                            <h5
                                                onClick={() =>
                                                    handleRemoveFields()
                                                }
                                            >
                                                Remove
                                            </h5>
                                        )}
                                    </div>
                                </div>
                                <div className="setup_card4">
                                    <h6>{data.certificate}</h6>
                                    {inputCertificatesFields?.map(
                                        (inputCertificatesField, index) => (
                                            <div
                                                className="inputs_certificate"
                                                key={index}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Certification Title"
                                                    value={
                                                        inputCertificatesField.certificate
                                                    }
                                                    name="certificate"
                                                    onChange={(event) =>
                                                        handleChangeCertificateInput(
                                                            index,
                                                            event
                                                        )
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Year you were Certified"
                                                    value={
                                                        inputCertificatesField.year
                                                    }
                                                    name="year"
                                                    onChange={(event) =>
                                                        handleChangeCertificateInput(
                                                            index,
                                                            event
                                                        )
                                                    }
                                                />
                                                {/* <input
                          type="file"
                          name="file"
                          value={inputCertificatesField.upload}
                          onChange={(event) =>
                            handleChangeCertificateInput(index, event)
                          }
                          className="custom-file-input"
                        />
                        <a className="checkarrow">
                          <ArrowHover />
                        </a> */}
                                            </div>
                                        )
                                    )}
                                    <h5 onClick={handleAddCertificateFields}>
                                        + Add Certification
                                    </h5>
                                </div>
                                <div className="setup_card5">
                                    <div className="setupcontent_wrapper">
                                        <div className="setup_item">
                                            <h6>{data.where}</h6>
                                            <div className="inputs_platform">
                                                <button
                                                    onClick={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            "Online"
                                                        )
                                                    }
                                                    className={`${
                                                        trainerData?.trainingLocation?.includes(
                                                            "Online"
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    name="trainingLocation"
                                                >
                                                    Virtual
                                                </button>
                                                <button
                                                    onClick={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            "inperson"
                                                        )
                                                    }
                                                    className={`${
                                                        trainerData?.trainingLocation?.includes(
                                                            "inperson"
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    name="trainingLocation"
                                                >
                                                    In Person
                                                </button>
                                                {/* <button
                                                    onClick={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            "outdoors"
                                                        )
                                                    }
                                                    className={`${
                                                        trainerData?.trainingLocation?.includes(
                                                            "outdoors"
                                                        )
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    name="trainingLocation"
                                                >
                                                    Outdoors
                                                </button> */}
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.serviceable}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <select
                                                        value={
                                                            trainerData.serviceableLocation
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                            selected
                                                        >
                                                            Choose City
                                                        </option>
                                                        <option>
                                                            New York
                                                        </option>
                                                        <option>Miami</option>
                                                        <option>Hampton</option>
                                                        <option>
                                                            Palm Beach
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.location}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <select
                                                        required
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.location
                                                        }
                                                    >
                                                        <option
                                                            value=""
                                                            disabled
                                                            selected
                                                        >
                                                            Choose City
                                                        </option>
                                                        <option>
                                                            New York
                                                        </option>
                                                        <option>Miami</option>
                                                        <option>Hampton</option>
                                                        <option>
                                                            Palm Beach
                                                        </option>
                                                    </select>

                                                    <img
                                                        src={Location}
                                                        alt="icon"
                                                        className="location_icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.web}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Add your Web Link"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.websiteLink
                                                        }
                                                        name="websiteLink"
                                                    />
                                                    <img src={Web} alt="icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.insta}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Add your Instagram Handle"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.instaHandle
                                                        }
                                                        name="instaHandle"
                                                    />
                                                    <img
                                                        src={Instagram}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.youtube}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Add your Youtube Channel"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.youtubeChannel
                                                        }
                                                        name="youtubeChannel"
                                                    />
                                                    <img
                                                        src={Youtube}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card_agree">
                                        <input
                                            type="checkbox"
                                            id="agree"
                                            name="agree"
                                            onChange={handleAgreedCheck}
                                        />
                                        <label>
                                            Check here to acknowledge that you
                                            have read and agree to the Motto
                                            trainer
                                            <a
                                                href="/agreement"
                                                target="_blank"
                                            >
                                                terms and conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                {/* <PaymentSection /> */}
                                <div className="submit_button">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        disabled={(isLoading, !agreed)}
                                        className={`${
                                            isLoading ? "loading" : "btn"
                                        }`}
                                    >
                                        {isLoading ? (
                                            "Loading..."
                                        ) : (
                                            <a>
                                                {" "}
                                                Continue to account
                                                <ArrowHoverBlacked />
                                            </a>
                                        )}
                                        {/* <img src={Arrow} alt="icon" /> */}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ImageReander = () => {
    const [image, setImage] = useState();
    const [previewImage, setPreviewTmage] = useState();
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
    return (
        <>
            <div className="renderImage">
                {previewImage ? (
                    <img
                        src={previewImage}
                        style={{
                            objectFit: "cover",
                            width: "180px",
                            height: "180px",
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
                                // src={Profile}
                                src={ImageBG}
                                alt="icon"
                                style={{
                                    objectFit: "cover",
                                    width: "180px",
                                    height: "180px",
                                }}
                            />
                        </button>
                    </div>
                )}

                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            // debugger;
                            // debugger;
                            setImage(file);
                            FileArray.push(file);
                            console.log(FileArray)
                        } else {
                            setImage(null);
                        }
                    }}
                />
            </div>
        </>
    );
};

const ImageGrid = () => {
    const [imageView, setImageView] = useState([
        {
            image: "http://doodlebluelive.com:2307/public/profilePictures/54c156e9-3bd0-43d3-84cb-2794ea7206ad.jpg",
        },
    ]);
    const handleViewImages = () => {
        setImageView([...imageView, { image: "http://doodlebluelive.com:2307/public/profilePictures/54c156e9-3bd0-43d3-84cb-2794ea7206ad.jpg"}]);
    };
    return (
        <>
            <div className="profile_images_grid">
                {imageView.map((images, index) => {
                    return(
                        <div className="profile_images_container">
                            <div className="profile_images_card box1">
                                <img
                                    src={images.image}
                                    alt="picture"
                                    className="box1"
                                />
                            </div>
                            <div className="flex-try-2">
                                <div className="profile_images_card box2">
                                    <img
                                        src={images.image}
                                        alt="picture"
                                        className="box2"
                                    />
                                </div> 

                                <div className="flex-try-3">
                                    <div className="profile_images_card box3">
                                        <img
                                            src={images.image}
                                            alt="picture"
                                            className="box3"
                                        />
                                    </div>

                                    <div className="profile_images_card box4">
                                        <img
                                            src={images.image}
                                            alt="picture"
                                            className="box4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                )
                })}
            </div>
            <div className="image_more" onClick={() => handleViewImages()}>
                <h5>View More Images</h5>
                {/* <img src={ArrowNext} ali="icon" /> */}
            </div>
        </>
    );
};


const mapStateToProps = (state) => ({
    details: state.trainerReducer.details,
    trainerPersonalData: state.trainerReducer.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateTrainerDetails,
        },
        dispatch
    );
};

const TrainerSetUpProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainerSetUpProfileFC);

export default TrainerSetUpProfile;
