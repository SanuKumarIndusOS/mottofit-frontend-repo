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

        console.log( FileArray );

        if (FileArray.length !== 0) {
            const headers = {
              "Content-Type": "application/json",
              Authorization:
              localStorage.getItem('token'),
            };
      
            const fd = new FormData();
      
            FileArray.forEach(file=>{
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
        // const {
        //     firstName,
        //     lastName,
        //     description,
        //     individualCharge,
        //     ssTwoPeopleCharge,
        //     ssThreePeopleCharge,
        //     ssFourPeopleCharge,
        //     classFlatRate,
        //     threeSessionRate,
        //     tenSessionRate,
        //     instaHandle,
        //     location,
        //     motto,
        //     serviceableLocation,
        //     trainingLocation,
        //     trainingProcessDescription,
        //     websiteLink,
        //     youtubeChannel,
        // } = trainerData;

        // console.log(serviceableLocation);

        // let payload = {
        //     firstName,
        //     lastName,
        //     description,
        //     oneOnOnePricing: {
        //         passRatefor3Session: threeSessionRate,
        //         passRatefor10Session: tenSessionRate,
        //         inPersonAtClientLocation: individualCharge,
        //     },
        //     socialSessionPricing: {
        //         inPeronAtClientLocationfor2People: ssTwoPeopleCharge,
        //         inPeronAtClientLocationfor3People: ssThreePeopleCharge,
        //         inPeronAtClientLocationfor4People: ssFourPeopleCharge,
        //     },
        //     classSessionPricing: {
        //         inPersonAtclientLocationfor15People: classFlatRate,
        //     },
        //     trainingProcess: trainingProcessDescription,
        //     myMotto: motto,
        //     preferedTrainingMode: trainingLocation,
        //     websiteLink,
        //     youtubeLink: youtubeChannel,
        //     instagramProfile: instaHandle,
        //     currentExperience: { workLocation: location },
        //     certification: inputCertificatesFields?.map(
        //         ({ certificate, year }) => ({
        //             certificateName: "",
        //             certfiedYear: year,
        //             certification: certificate,
        //         })
        //     ),

        //     servicableLocation: serviceableLocation,
        // };
        // // updateTrainerDetails();

        // console.log(payload);

        // const { updateTrainerAvailabilityApi } = TrainerApi;

        // updateTrainerAvailabilityApi.body = payload;

        // setLoading(true);

        // api({ ...updateTrainerAvailabilityApi })
        //     .then(({ data, message }) => {
        //         console.log(data, message);
        //         getStripeURL();
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setLoading(false);
        //     });

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
            certification = "",
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
                youtubeChannel: youtubeLink,
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
                        <Link to="/"> Preview Your Trainer Profile </Link>
                    </div>
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
                                                            List all areas that
                                                            you will service
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
                                                            List all areas that
                                                            you will service
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
                                </div>
                                {/* <PaymentSection /> */}
                                <div className="submit_button">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        disabled={isLoading}
                                        className={`${
                                            isLoading ? "loading" : ""
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
                            setImage(file);
                            FileArray.push(file)
                        } else {
                            setImage(null);
                        }
                    }}
                />
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
