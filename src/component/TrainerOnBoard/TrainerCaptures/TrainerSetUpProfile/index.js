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
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Footer from "../../../common/Footer/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateTrainerDetails } from "action/trainerAct";
// import Select from "react-select";
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
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import { fileUpload } from "action/trainerAct";
import { COMMON_URL } from "helpers/baseURL";
const FileArray = [];

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

const TrainerSetUpProfileFC = ({
    updateTrainerDetails,
    trainerPersonalData,
    details,
    fileUpload,
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

    const [selectedValue, setSelectedValue] = React.useState("a");
    const [selectedOneValue, setSelectedOneValue] = React.useState("");

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
        governmentId: "",
        insurance: "",
        governmentIdNumber: "",
        coverAmount: "",
        virtualMeetingHandle: "",
        virtualMeetingLink: "",
        identityNameUS: "",
        insuranceNameUS: "",
    });

    const [trainerAvailabilityData, setTrainerAvailabilityData] =
        React.useState({
            hoursPerWeek: "",
            preferedTrainingMode: [],
            trainingFacilityLocation: "",
            willingToTravel: "0",
            servicableLocation: "",
        });
    const handleOneChange = (event) => {
        setSelectedOneValue(event.target.value);

        setTrainerAvailabilityData({
            ...trainerAvailabilityData,
            willingToTravel: event.target.value,
        });
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

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

    function handleChangePayment(e) {
        setTrainerData(e);
    }

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
        console.log(FileArray);

        if (FileArray.length !== 0) {
            const fd = new FormData();

            FileArray.forEach((file) => {
                fd.append("images", file, file.name);
                fileUpload(fd);
            });
        }

        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };

        axios
            .put(
                COMMON_URL + "/v1/trainer",
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
            governmentId,
            insurance,
            governmentIdNumber,
            coverAmount,
            virtualMeetingLink,
            identityNameUS,
            insuranceNameUS,
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
                passRatefor3SessionAtTrainerLocation: threeSessionRateTl,
                passRatefor10SessionAtTrainerLocation: tenSessionRateTl,
                virtualSession: individualChargeVt,
                passRatefor3SessionAtVirtual: threeSessionRateVt,
                passRatefor10SessionAtVirtual: tenSessionRateVt,
            },
            socialSessionPricing: {
                inPeronAtClientLocationfor2People: ssTwoPeopleCharge,
                inPeronAtClientLocationfor3People: ssThreePeopleCharge,
                inPeronAtClientLocationfor4People: ssFourPeopleCharge,
                inPeronAtTrainerLocationfor2People: ssTwoPeopleChargeTl,
                inPeronAtTrainerLocationfor3People: ssThreePeopleChargeTl,
                inPeronAtTrainerLocationfor4People: ssFourPeopleChargeTl,
                virtualSessionfor2People: ssTwoPeopleChargeVt,
                virtualSessionfor3People: ssThreePeopleChargeVt,
                virtualSessionfor4People: ssFourPeopleChargeVt,
            },
            classSessionPricing: {
                inPersonAtclientLocationfor15People: classFlatRate,
                inPersonAttrainerLocationfor15People: classFlatRateTl,
                virtualSessionfor15People: classFlatRateVt,
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
            insuranceInformation: {
                insuranceName: insuranceNameUS,
                insurance: insurance,
                insuranceAmount: coverAmount,
            },
            identityInfromation: {
                identityName: identityNameUS,
                identity: governmentId,
                identityNumber: governmentIdNumber,
            },
            virtualMeetingLink: virtualMeetingLink,
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
            // virtualMeetingLink = "",
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
                // virtualMeetingHandle: virtualMeetingLink,
                willingToTravel: trainerAvailabilityData.willingToTravel,
                servicableLocation: trainerAvailabilityData.servicableLocation,
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

        updateTrainerDetails(storeData);

        axios
            .get("http://doodlebluelive.com:2307/v1/trainer", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                },
            })
            .then((res) => {
                let storeTrainerData = res.data.data;
                console.log(storeTrainerData.myMotto);
                setTrainerData({
                    ...trainerData,
                    motto: storeTrainerData.myMotto,
                    trainingProcessDescription:
                        storeTrainerData.trainingProcess,
                    trainingLocation: storeTrainerData.preferedTrainingMode,
                    servicableLocation: storeTrainerData.location,
                    websiteLink: storeTrainerData.websiteLink,
                    instaHandle: storeTrainerData.instagramProfile,
                    virtualMeetingLink: storeTrainerData.virtualMeetingLink,
                    location: storeTrainerData.location,
                });
                //images , certificates are left

                let certData = [];
                storeTrainerData.certification.forEach((certificate) => {
                    certData.push({
                        certificate: certificate.certification,
                        year: certificate.certfiedYear,
                        upload: "",
                    });
                });

                console.log(certData);
                setInputCertificatesFields([...certData]);
                setImageFields([...storeTrainerData.images, { image: "" }]);
                setTrainerAvailabilityData({
                    ...trainerAvailabilityData,
                    hoursPerWeek: storeTrainerData.hoursPerWeek,
                    preferedTrainingMode: storeTrainerData.preferedTrainingMode,
                    trainingFacilityLocation:
                        storeTrainerData.trainingFacilityLocation,
                    willingToTravel: "0",
                    servicableLocation: storeTrainerData.ser,
                });
            })
            .catch((err) => console.log(err));
    }, []);

    const [renderButton, setRenderButton] = useState({
        visiable: false,
    });
    const [agreed, setAgreed] = useState(false);

    const handleAgreedCheck = () => {
        setAgreed(!agreed);
    };
    // debugger;
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
                        <div
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="prev_profile"
                        >
                            Preview Your Trainer Profile
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
                            classNames={{
                                modal: "customModal",
                            }}
                        >
                            <div className="profile_main">
                                <div className="profile_outter_container">
                                    {/* <div className="profile"> */}
                                    <div className="profile_wrapper_container ">
                                        <div className="profile_header">
                                            <div className="inner_profile container">
                                                <img
                                                    src={
                                                        trainerPersonalData.profilePicture
                                                    }
                                                    alt="Image not Added"
                                                />

                                                <div className="profile_header_inner">
                                                    <h2>
                                                        {trainerData.firstName}{" "}
                                                        {trainerData.lastName}
                                                    </h2>
                                                    <p>
                                                        {trainerPersonalData.areaOfExpertise.toString()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile_main_contents container">
                                            <div className="profile_aside">
                                                <div className="profile_aside_link">
                                                    <label>View Calender</label>
                                                    <img
                                                        src={ArrowNext}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="profile_aside_items">
                                                    {trainerPersonalData.oneOnOnePricing &&
                                                    (trainerPersonalData
                                                        .oneOnOnePricing
                                                        .virtualSession ||
                                                        trainerPersonalData
                                                            .oneOnOnePricing
                                                            .inPersonAtTrainerLocation) ? (
                                                        <div className="profile_aside_item">
                                                            <h2>
                                                                1 ON 1
                                                                INDIVIDUAL
                                                                TRAINING
                                                            </h2>
                                                            <hr />
                                                            <div className="profile_aside_inner_item">
                                                                {trainerPersonalData.oneOnOnePricing &&
                                                                trainerPersonalData
                                                                    .oneOnOnePricing
                                                                    .virtualSession ? (
                                                                    <h6>
                                                                        {
                                                                            trainerPersonalData
                                                                                .oneOnOnePricing
                                                                                .virtualSession
                                                                        }
                                                                        <span>
                                                                            (Virtual
                                                                            Session)
                                                                        </span>
                                                                    </h6>
                                                                ) : null}
                                                                {trainerPersonalData.oneOnOnePricing &&
                                                                trainerPersonalData
                                                                    .oneOnOnePricing
                                                                    .inPersonAtTrainerLocation ? (
                                                                    <h6>
                                                                        {
                                                                            trainerPersonalData
                                                                                .oneOnOnePricing
                                                                                .inPersonAtTrainerLocation
                                                                        }
                                                                        <span>
                                                                            (In
                                                                            Person
                                                                            Session)
                                                                        </span>
                                                                    </h6>
                                                                ) : null}
                                                                <h5>
                                                                    See package
                                                                    rates during
                                                                    checkout
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    ) : null}

                                                    {trainerPersonalData.socialSessionPricing &&
                                                    (trainerPersonalData
                                                        .socialSessionPricing
                                                        .inPeronAtTrainerLocationfor2People ||
                                                        trainerPersonalData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor3People ||
                                                        trainerPersonalData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor4People) ? (
                                                        <div className="profile_aside_item">
                                                            <h2>
                                                                SOCIAL SESSIONS{" "}
                                                                <img
                                                                    src={QMark}
                                                                    alt="icon"
                                                                    onClick={() =>
                                                                        setOpen(
                                                                            true
                                                                        )
                                                                    }
                                                                    className="model_Qmark"
                                                                />
                                                            </h2>
                                                            <hr />

                                                            <div className="profile_aside_inner_item">
                                                                {trainerPersonalData.socialSessionPricing &&
                                                                trainerPersonalData
                                                                    .socialSessionPricing
                                                                    .inPeronAtTrainerLocationfor2People ? (
                                                                    <h6>
                                                                        {
                                                                            trainerPersonalData
                                                                                .socialSessionPricing
                                                                                .inPeronAtTrainerLocationfor2People
                                                                        }
                                                                        <span>
                                                                            /
                                                                            Session
                                                                            (For
                                                                            2
                                                                            People)
                                                                        </span>
                                                                    </h6>
                                                                ) : null}
                                                                {trainerPersonalData.socialSessionPricing &&
                                                                trainerPersonalData
                                                                    .socialSessionPricing
                                                                    .inPeronAtTrainerLocationfor3People ? (
                                                                    <h6>
                                                                        {
                                                                            trainerPersonalData
                                                                                .socialSessionPricing
                                                                                .inPeronAtTrainerLocationfor3People
                                                                        }
                                                                        <span>
                                                                            /
                                                                            Session
                                                                            (For
                                                                            3
                                                                            People)
                                                                        </span>
                                                                    </h6>
                                                                ) : null}
                                                                {trainerPersonalData.socialSessionPricing &&
                                                                trainerPersonalData
                                                                    .socialSessionPricing
                                                                    .inPeronAtTrainerLocationfor4People ? (
                                                                    <h6>
                                                                        {
                                                                            trainerPersonalData
                                                                                .socialSessionPricing
                                                                                .inPeronAtTrainerLocationfor4People
                                                                        }
                                                                        <span>
                                                                            /
                                                                            Session
                                                                            (For
                                                                            4
                                                                            People)
                                                                        </span>
                                                                    </h6>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                    ) : null}
                                                    {trainerPersonalData.classSessionPricing &&
                                                    trainerPersonalData
                                                        .classSessionPricing
                                                        .inPersonAtclientLocationfor15People ? (
                                                        <div className="profile_aside_item">
                                                            <h2>
                                                                CREATE A CLASS
                                                                <img
                                                                    src={QMark}
                                                                    alt="icon"
                                                                    className="model_Qmark"
                                                                />
                                                            </h2>
                                                            <hr />

                                                            <div className="profile_aside_inner_item">
                                                                <h6>
                                                                    {trainerPersonalData &&
                                                                    trainerPersonalData.classSessionPricing
                                                                        ? trainerPersonalData
                                                                              .classSessionPricing
                                                                              .inPersonAtclientLocationfor15People
                                                                        : ""}
                                                                    <span>
                                                                        Flat
                                                                        Rate
                                                                        Class
                                                                        (For
                                                                        5-15
                                                                        People)
                                                                    </span>
                                                                </h6>
                                                                <h5>
                                                                    If trainer
                                                                    offers
                                                                    Virtual
                                                                    Social
                                                                    Sessions and
                                                                    Classes they
                                                                    will be at a
                                                                    discount to
                                                                    in person
                                                                    rates above.
                                                                    You will see
                                                                    these prior
                                                                    to checkout.
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    ) : null}
                                                    <div className="profile_aside_item">
                                                        <h2>
                                                            TRAINING LOCATIONS
                                                        </h2>

                                                        <hr />
                                                        <div className="profile_aside_inner_item">
                                                            {trainerPersonalData
                                                                .currentExperience
                                                                .workLocation ? (
                                                                <div className="profile_location">
                                                                    <img
                                                                        src={
                                                                            Tick
                                                                        }
                                                                        alt="icon"
                                                                    />
                                                                    <h4>
                                                                        {
                                                                            trainerPersonalData
                                                                                .currentExperience
                                                                                .workLocation
                                                                        }
                                                                    </h4>
                                                                </div>
                                                            ) : (
                                                                ""
                                                            )}
                                                            <div className="profile_location">
                                                                <img
                                                                    src={Tick}
                                                                    alt="icon"
                                                                />
                                                                <h4>
                                                                    Trainer’s
                                                                    Location{" "}
                                                                    <Link>
                                                                        View
                                                                        Location
                                                                    </Link>
                                                                </h4>
                                                            </div>
                                                            <div className="profile_location">
                                                                <img
                                                                    src={Tick}
                                                                    alt="icon"
                                                                />
                                                                <h4>
                                                                    Your
                                                                    Location
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="profile_trainer_data">
                                                <div className="profile_right_data">
                                                    <div className="profile_right_item1">
                                                        <h6>
                                                            {trainerData.motto
                                                                ? trainerData.motto
                                                                : "Motto not Added"}
                                                        </h6>
                                                    </div>
                                                    <div
                                                        className="profile_right_item2"
                                                        style={{
                                                            width: "40rem",
                                                        }}
                                                    >
                                                        <h4>
                                                            About{" "}
                                                            {
                                                                trainerData.firstName
                                                            }
                                                        </h4>
                                                        <p>
                                                            {trainerData.trainingProcessDescription
                                                                ? trainerData.trainingProcessDescription
                                                                : "Description not Added"}
                                                        </p>

                                                        <div className="profile_images">
                                                            {
                                                                // trainerData ? (
                                                                //     <ImageGrid
                                                                //         trainerPersonalData={
                                                                //             trainerPersonalData
                                                                //         }
                                                                //     />
                                                                // ) :
                                                                "NO IMAGES ADDED"
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="profile_right_item3 mb-5 pb-5">
                                                        <h2>Certifications</h2>
                                                        <div className="profile_item3_inner">
                                                            <div className="inner_items">
                                                                <img
                                                                    src={Tick}
                                                                    alt="check"
                                                                />
                                                                <h6>
                                                                    {trainerPersonalData
                                                                        .certification[0]
                                                                        ? trainerPersonalData
                                                                              .certification[0]
                                                                              .certification
                                                                        : "Not Added"}
                                                                </h6>
                                                            </div>
                                                            <div className="inner_items">
                                                                <img
                                                                    src={Tick}
                                                                    alt="check"
                                                                />
                                                                <h6>
                                                                    {trainerPersonalData
                                                                        .certification[1]
                                                                        ? trainerPersonalData
                                                                              .certification[1]
                                                                              .certification
                                                                        : "Not Added"}
                                                                </h6>
                                                            </div>
                                                            <div className="inner_items">
                                                                <img
                                                                    src={Tick}
                                                                    alt="check"
                                                                />
                                                                <h6>
                                                                    {trainerPersonalData
                                                                        .certification[2]
                                                                        ? trainerPersonalData
                                                                              .certification[2]
                                                                              .certification
                                                                        : "Not Added"}
                                                                </h6>
                                                            </div>
                                                            <div className="inner_items">
                                                                <img
                                                                    src={Tick}
                                                                    alt="check"
                                                                />
                                                                <h6>
                                                                    {trainerPersonalData
                                                                        .certification[3]
                                                                        ? trainerPersonalData
                                                                              .certification[3]
                                                                        : "Not Added"}
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
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
                                        placeholder="Tell clients everything you think they should know! Utilize Key words as anything you write here will be searchable through our search bar"
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
                                            <div className="social_meeting_links">
                                                {trainerData?.trainingLocation?.includes(
                                                    "Online"
                                                ) ? (
                                                    // <div className="setup_ite1">
                                                    <>
                                                        <h5>
                                                            Add zoom meeting
                                                            link
                                                        </h5>
                                                        <div className="inputs_platform">
                                                            <div className="iconwrapper">
                                                                <textarea
                                                                    type="text"
                                                                    placeholder="Add a Google or Zoom meeting link"
                                                                    value={
                                                                        trainerData.virtualMeetingLink
                                                                    }
                                                                    onChange={
                                                                        handleInputChange
                                                                    }
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
                                                location where you will train
                                                clients?
                                            </h6>
                                            <CyanRadio
                                                checked={selectedValue === "a"}
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
                                                checked={selectedValue === "b"}
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
                                                Details of the facility/location
                                            </h6>
                                            <div className="inputs_platform">
                                                <textarea
                                                    type="text"
                                                    placeholder="Enter the Details of the location"
                                                    onChange={(e) =>
                                                        setTrainerAvailabilityData(
                                                            {
                                                                ...trainerAvailabilityData,
                                                                trainingFacilityLocation:
                                                                    e.target
                                                                        .value,
                                                            }
                                                        )
                                                    }
                                                    value={
                                                        trainerAvailabilityData.trainingFacilityLocation
                                                    }
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
                                                    onChange={(e) =>
                                                        setTrainerAvailabilityData(
                                                            {
                                                                ...trainerAvailabilityData,
                                                                servicableLocation:
                                                                    e.target
                                                                        .value,
                                                            }
                                                        )
                                                    }
                                                    value={
                                                        trainerAvailabilityData.servicableLocation
                                                    }
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
                                                    <img src={Web} alt="icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PaymentSection
                                    onChange={handleChangePayment}
                                    trainerData={trainerData}
                                    setTrainerData={setTrainerData}
                                />
                                <div className="card_agree">
                                    <input
                                        type="checkbox"
                                        id="agree"
                                        name="agree"
                                        onChange={handleAgreedCheck}
                                    />
                                    <label>
                                        Check here to acknowledge that you have
                                        read and agree to the Motto trainer
                                        <a href="/agreement" target="_blank">
                                            terms and conditions
                                        </a>
                                    </label>
                                </div>
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
                                    <div className="terms_msg">
                                        {agreed ? null : (
                                            <span>
                                                Please Agree to the above terms
                                                and conditions to continue
                                            </span>
                                        )}
                                    </div>
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
                            console.log(FileArray);
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
        setImageView([
            ...imageView,
            {
                image: "http://doodlebluelive.com:2307/public/profilePictures/54c156e9-3bd0-43d3-84cb-2794ea7206ad.jpg",
            },
        ]);
    };
    return (
        <>
            <div className="profile_images_grid">
                {imageView.map((images, index) => {
                    return (
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
                    );
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
            fileUpload,
        },
        dispatch
    );
};

const TrainerSetUpProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainerSetUpProfileFC);

export default TrainerSetUpProfile;
