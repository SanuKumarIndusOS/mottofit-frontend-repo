import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
// import Select from "react-select";

import BlueHoverButton from "../../../common/BlueArrowButton";
import ImageBG from "assets/files/SVG/Image 1.svg";
import Instagram from "assets/files/SVG/Insta Icon.svg";
import Web from "assets/files/SVG/Web Icon.svg";
import Youtube from "assets/files/SVG/Youtube.svg";
import Location from "assets/files/SVG/Location Icon.svg";
import { getTrainerDetails, updateTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import axios from "axios";

const MyProfileFC = ({
    getTrainerDetails,
    details,
    updateTrainerDetails,
    // trainerPersonalData,
}) => {
    // const [selectedOption, setSelectedOption] = useState([]);

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

    //Image
    const [imageFields, setImageFields] = useState([
        {
            image: "",
        },
    ]);
    const handleAddFields = () => {
        setImageFields([...imageFields, { image: "" }]);
    };

    // input certification
    const [inputCertificatesFields, setInputCertificatesFields] = useState([
        {
            certificate: "",
            year: "",
            remove: "",
        },
    ]);
    const handleAddCertificateFields = () => {
        setInputCertificatesFields([
            ...inputCertificatesFields,
            { certificate: "", year: "", remove: "" },
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
        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };

        axios
            .get(
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

        console.log(payload, "payload");

        const { updateTrainerAvailabilityApi } = TrainerApi;

        updateTrainerAvailabilityApi.body = payload;

        api({ ...updateTrainerAvailabilityApi })
            .then(({ data, message }) => {
                console.log(data, message);
            })
            .catch((err) => console.log(err));

        // history.push("/trainers/dashboard/session");
    };

    useEffect(() => {
        getTrainerDetails()
            .then((data) => {
                console.log(data, "api data");

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
                } = data || {};

                const { workLocation = "" } = currentExperience || {};

                const storeData = {
                    details: {
                        motto: myMotto,
                        trainingProcessDescription: trainingProcess,
                        trainingLocation: preferedTrainingMode,
                        serviceableLocation: servicableLocation?.map(
                            (location) => ({
                                label: location,
                                value: location,
                                name: "serviceableLocation",
                            })
                        ),
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
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className="outter_tp_container">
                <div className="container">
                    <div className="inner_trinerpro_container">
                        <div className="tp_wrapper">
                            <div className="tp_header">
                                <h2>My Profile</h2>
                            </div>
                            <div className="tp_outter_form container">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="tp_inner_form">
                                        <div className="tp_item1">
                                            <label>What’s your Motto?</label>
                                            <textarea
                                                type="text"
                                                name="comment"
                                                placeholder=""
                                                onChange={handleInputChange}
                                                value={trainerData.motto}
                                                name="motto"
                                            />
                                        </div>
                                        <div className="tp_item1">
                                            <label>
                                                Tell us about you and describe
                                                your training process
                                            </label>
                                            <textarea
                                                type="text"
                                                placeholder=""
                                                onChange={handleInputChange}
                                                value={
                                                    trainerData.trainingProcessDescription
                                                }
                                                name="trainingProcessDescription"
                                            />
                                        </div>
                                        <div className="tp_item1">
                                            <label>
                                                Throw in some photos showcasing
                                                you & your skills
                                            </label>
                                            <div className="tp_image_render">
                                                {imageFields.map(
                                                    (index, input) => {
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="render_image"
                                                            >
                                                                <ImageReander
                                                                    value={
                                                                        input.image
                                                                    }
                                                                />
                                                                <ImageReander
                                                                    value={
                                                                        input.image
                                                                    }
                                                                />
                                                                <ImageReander
                                                                    value={
                                                                        input.image
                                                                    }
                                                                />
                                                                <ImageReander
                                                                    value={
                                                                        input.image
                                                                    }
                                                                />
                                                                <ImageReander
                                                                    value={
                                                                        input.image
                                                                    }
                                                                />
                                                            </div>
                                                        );
                                                    }
                                                )}
                                                <h5
                                                    onClick={() =>
                                                        handleAddFields()
                                                    }
                                                >
                                                    + Add More Image's
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="tp_item_certi">
                                            <label>
                                                Throw in some photos showcasing
                                                you & your skills
                                            </label>
                                            <div className="tp_certificates">
                                                {inputCertificatesFields?.map(
                                                    (
                                                        inputCertificatesField,
                                                        index
                                                    ) => (
                                                        <div
                                                            className="tp_input_certificate"
                                                            key={index}
                                                        >
                                                            <input
                                                                type="text"
                                                                placeholder="Display Certification API "
                                                                value={
                                                                    inputCertificatesField.certificate
                                                                }
                                                                name="certificate"
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    handleChangeCertificateInput(
                                                                        index,
                                                                        event
                                                                    )
                                                                }
                                                            />
                                                            <input
                                                                type="text"
                                                                placeholder="Display Year API"
                                                                value={
                                                                    inputCertificatesField.year
                                                                }
                                                                name="year"
                                                                onChange={(
                                                                    event
                                                                ) =>
                                                                    handleChangeCertificateInput(
                                                                        index,
                                                                        event
                                                                    )
                                                                }
                                                            />
                                                            <button
                                                                name="remove"
                                                                value={
                                                                    inputCertificatesField.remove
                                                                }
                                                            >
                                                                Remove{" "}
                                                                <BlueHoverButton />
                                                            </button>
                                                        </div>
                                                    )
                                                )}
                                                <h5
                                                    onClick={
                                                        handleAddCertificateFields
                                                    }
                                                >
                                                    + Add Certification
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="setup_card5">
                                            <div className="setupcontent_wrapper">
                                                <div className="setup_item">
                                                    <label>
                                                        Where will you be
                                                        training?
                                                    </label>
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
                                                    <h6>
                                                        Which city will you
                                                        train in?
                                                    </h6>
                                                    <div className="inputs_platform">
                                                        <div className="iconwrapper">
                                                            {/* <Select
                                // defaultValue={trainingVenue}
                                value={trainerData.serviceableLocation}
                                onChange={handleInputChange}
                                options={options}
                                isMulti
                                placeholder="List all areas that you will service"
                                // className="session_location_select"
                                className="w-100"
                              /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setup_item1">
                                                    <h6>
                                                        Your preferred training
                                                        location
                                                    </h6>
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
                                                    <h6>Website</h6>
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
                                                            <img
                                                                src={Web}
                                                                alt="icon"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="setup_item1">
                                                    <h6>Instagram</h6>
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
                                                    <h6>Youtube</h6>
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
                                    </div>
                                    <div className="tp_button_save">
                                        <button onClick={handleSubmit}>
                                            Save changes <BlueHoverButton />
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
            getTrainerDetails,
        },
        dispatch
    );
};

const MyProfile = connect(mapStateToProps, mapDispatchToProps)(MyProfileFC);

export default MyProfile;
