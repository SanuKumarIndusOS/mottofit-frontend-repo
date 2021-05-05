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
        where: "Where will you br training",
        serviceable: "Serviceable Location",
        location: "Location",
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
        } = trainerData;

        let payload = {
            firstName,
            lastName,
            description,
            oneOnOnePricing: {
                passRatefor3Session: threeSessionRate,
                passRatefor10Session: tenSessionRate,
                inPersonAtClientLocation: individualCharge,
            },
            socialSessionPricing: {
                inPeronAtClientLocationfor2People: ssTwoPeopleCharge,
                inPeronAtClientLocationfor3People: ssThreePeopleCharge,
                inPeronAtClientLocationfor4People: ssFourPeopleCharge,
            },
            classSessionPricing: {
                inPersonAtclientLocationfor15People: classFlatRate,
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
            servicableLocation: serviceableLocation?.map(({ value }) => value),
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

        // history.push("/trainers/dashboard/session");
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
            servicableLocation = [],
        } = trainerPersonalData || {};

        const { workLocation = "" } = currentExperience || {};

        const storeData = {
            details: {
                motto: myMotto,
                trainingProcessDescription: trainingProcess,
                trainingLocation: preferedTrainingMode,
                serviceableLocation: servicableLocation?.map((location) => ({
                    label: location,
                    value: location,
                    name: "serviceableLocation",
                })),
                location: workLocation,
                websiteLink,
                instaHandle: instagramProfile,
                youtubeChannel: youtubeLink,
                ...details,
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

    return (
        <>
            <div>
                <div className="setup_container container">
                    <div className="setup_link">
                        <img src={ArrowBack} alt="icon" />
                        <div className="inner_link">
                            <Link to="/trainer/card" onClick={handleBack}>
                                {" "}
                                Edit Trainer Card{" "}
                            </Link>
                            <div></div>
                        </div>
                    </div>
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
                                        {imageFields.map((index, input) => {
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
                                        <h5 onClick={() => handleAddFields()}>
                                            + Add More Image's
                                        </h5>
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
                                                <button
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
                                                </button>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.serviceable}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <Select
                                                        // defaultValue={trainingVenue}
                                                        value={
                                                            trainerData.serviceableLocation
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        options={options}
                                                        isMulti
                                                        placeholder="List all areas that you will service"
                                                        // className="session_location_select"
                                                        className="w-100"
                                                    />
                                                    {/* <input
                            type="text"
                            placeholder="List all areas that you will service"
                            onChange={handleInputChange}
                            value={trainerData.serviceableLocation}
                            name="serviceableLocation"
                          /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="setup_item1">
                                            <h6>{data.location}</h6>
                                            <div className="inputs_platform">
                                                <div className="iconwrapper">
                                                    <input
                                                        type="text"
                                                        placeholder="Select your Location"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            trainerData.location
                                                        }
                                                        name="location"
                                                    />
                                                    <img
                                                        src={Location}
                                                        alt="icon"
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
