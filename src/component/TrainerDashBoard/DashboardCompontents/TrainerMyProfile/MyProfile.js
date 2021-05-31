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

import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import { COMMON_URL } from "helpers/baseURL";

const options = [
    { label: "Palm Beach", value: "Palm Beach", name: "serviceableLocation" },
    {
        label: "New York City",
        value: "New York City",
        name: "serviceableLocation",
    },
    { label: "Hamptons", value: "Hamptons", name: "serviceableLocation" },
    { label: "Miami", value: "Miami", name: "serviceableLocation" },
];

const CyanRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const MyProfileFC = ({
    getTrainerDetails,
    details,
    updateTrainerDetails,
    // trainerPersonalData,
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
    const [trainerAvailabilityData, setTrainerAvailabilityData] =
        React.useState({
            hoursPerWeek: "",
            preferedTrainingMode: [],
            trainingFacilityLocation: "",
            willingToTravel: "0",
            servicableLocation: "",
        });

    const [renderButton, setRenderButton] = useState({
        visiable: false,
    });

    //state for radio buttons
    const [selectedValue, setSelectedValue] = React.useState("a");
    const [selectedOneValue, setSelectedOneValue] = React.useState("");

    const handleOneChange = (event) => {
        setSelectedOneValue(event.target.value);

        setTrainerAvailabilityData({
            ...trainerAvailabilityData,
            willingToTravel: event.target.value,
        });
    };

    //handleChange for radio
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    //Image
    const [imageFields, setImageFields] = useState([
        {
            image: "",
        },
    ]);
    // const handleAddFields = () => {
    //     setImageFields([...imageFields, { image: "" }]);
    // };

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

    //adding and removing the input certificate field
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
                 COMMON_URL+"/v1/trainer",
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
            // location,
            motto,
            // serviceableLocation,
            // trainingLocation,
            trainingProcessDescription,
            websiteLink,
            // youtubeChannel,
        } = trainerData;
        console.log(trainerData, "trainer data");

        let payload = {
            trainingProcess: trainingProcessDescription,
            myMotto: motto,
            preferedTrainingMode: websiteLink,
            // youtubeLink: youtubeChannel,
            instagramProfile: instaHandle,
            // currentExperience: { workLocation: location },
            certification: inputCertificatesFields?.map(
                ({ certificate, year }) => ({
                    certificateName: "",
                    certfiedYear: year,
                    certification: certificate,
                })
            ),
            // servicableLocation: serviceableLocation?.map(({ value }) => value),
        };
        // updateTrainerDetails();

        console.log(payload, "payload");

        const { updateTrainerAvailabilityApi } = TrainerApi;

        updateTrainerAvailabilityApi.body = payload;

        api({ ...updateTrainerAvailabilityApi })
            .then(({ data, message }) => {
                console.log(data, message);
                alert("Successfully added changes");
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
                    // preferedTrainingMode = "",
                    websiteLink = "",
                    // youtubeLink = "",
                    instagramProfile = "",
                    // currentExperience = {},
                    // certification = "",
                    // servicableLocation = [],
                } = data || {};

                // const { workLocation = "" } = currentExperience || {};

                const storeData = {
                    details: {
                        motto: myMotto,
                        trainingProcessDescription: trainingProcess,
                        // trainingLocation: preferedTrainingMode,
                        // serviceableLocation: servicableLocation?.map(
                        //     (location) => ({
                        //         label: location,
                        //         value: location,
                        //         name: "serviceableLocation",
                        //     })
                        // ),
                        // location: workLocation,
                        // websiteLink,

                        location: websiteLink,
                        instaHandle: instagramProfile,
                        // youtubeChannel: youtubeLink,
                        ...details,
                    },
                };

                // const tempCertification = certification?.map(
                //     ({ certfiedYear, certificateName }) => ({
                //         certificate: certificateName,
                //         year: certfiedYear,
                //     })
                // );

                // setInputCertificatesFields(tempCertification);
                setTrainerData(storeData.details);
                // updateTrainerDetails(storeData);
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
                                                </div>
                                            )
                                        )}
                                        <h5
                                            onClick={handleAddCertificateFields}
                                        >
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
                                                </div>
                                                <div className="social_meeting_links">
                                                    {trainerData?.trainingLocation?.includes(
                                                        "Online"
                                                    ) ? (
                                                        // <div className="setup_ite1">
                                                        <>
                                                            <h5>
                                                                Add your Google
                                                                or Zoom meeting
                                                                link
                                                            </h5>
                                                            <div className="inputs_platform">
                                                                <div className="iconwrapper">
                                                                    <textarea
                                                                        type="text"
                                                                        placeholder="Add a Google or Zoom meeting link"
                                                                        // value={
                                                                        //     trainerData.virtualMeetingLink
                                                                        // }
                                                                        // onChange={
                                                                        //     handleInputChange
                                                                        // }
                                                                        name="virtualMeetingLink"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="setup_item1">
                                                <h6>{data.serviceable}</h6>
                                                <div className="inputs_platform">
                                                    <div className="iconwrapper">
                                                        <Dropdown
                                                            className="custom_dropdown"
                                                            title="Select Location"
                                                            list={options}
                                                            value={
                                                                trainerData.serviceableLocation
                                                            }
                                                            onChange={(e) => {
                                                                setTrainerData({
                                                                    ...trainerData,
                                                                    serviceableLocation:
                                                                        e.value,
                                                                });
                                                                console.log(
                                                                    e.value
                                                                );
                                                            }}
                                                            name="location"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="item_3">
                                                <h6>
                                                    Do you have a facility or
                                                    location where you will
                                                    train clients?
                                                </h6>
                                                <CyanRadio
                                                    checked={
                                                        selectedValue === "a"
                                                    }
                                                    onChange={handleChange}
                                                    value="a"
                                                    name="radio-button-demo"
                                                    label="Strength & Hitt"
                                                    inputProps={{
                                                        "aria-label": "a",
                                                    }}
                                                />
                                                <label>Yes</label>
                                                <CyanRadio
                                                    checked={
                                                        selectedValue === "b"
                                                    }
                                                    onChange={handleChange}
                                                    value="b"
                                                    name="radio-button-demo"
                                                    label="Strength & Hitt"
                                                    inputProps={{
                                                        "aria-label": "b",
                                                    }}
                                                />
                                                <label>No</label>
                                            </div>
                                            <div className="item_4">
                                                <h6>
                                                    Details of the
                                                    facility/location
                                                </h6>
                                                <div className="inputs_platform">
                                                    <textarea
                                                        type="text"
                                                        placeholder="Enter the Details of the location"
                                                    />
                                                </div>
                                            </div>
                                            <div className="item_5">
                                                <h6>
                                                    Are you willing to travel to
                                                    clients in your city/region?
                                                </h6>
                                                <CyanRadio
                                                    checked={
                                                        selectedOneValue === "1"
                                                    }
                                                    onChange={handleOneChange}
                                                    value="1"
                                                    label="Strength & Hitt"
                                                    inputProps={{
                                                        "aria-label": "1",
                                                    }}
                                                />
                                                <label> Yes!</label>
                                                <CyanRadio
                                                    checked={
                                                        selectedOneValue === "0"
                                                    }
                                                    onChange={handleOneChange}
                                                    value="0"
                                                    label="Strength & Hitt"
                                                    inputProps={{
                                                        "aria-label": "0",
                                                    }}
                                                />
                                                <label>No</label>
                                            </div>
                                            <div className="item_6">
                                                <h6>
                                                    List the areas/neighborhoods
                                                    you’re willing to travel to
                                                </h6>
                                                <div className="inputs_platform">
                                                    <textarea
                                                        type="text"
                                                        placeholder="Neighborhood List"
                                                        // onChange={
                                                        //     handleInputChange
                                                        // }
                                                        // value={
                                                        //     trainerPersonalData.servicableLocation
                                                        //         ? trainerPersonalData.servicableLocation
                                                        //         : ""
                                                        // }
                                                    />

                                                    <img
                                                        src={Location}
                                                        alt="icon"
                                                        className="loction_img_select"
                                                    />
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
                                                        <img
                                                            src={Web}
                                                            alt="icon"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tp_button_save mb-5">
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
