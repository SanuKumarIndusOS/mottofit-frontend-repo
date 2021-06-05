import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { captureTrainerSetup } from "action/trainerAct";
import Radio from "@material-ui/core/Radio";
import ArrowBack from "../../../../assets/files/SVG/Arrow Back.svg";
import "./stylesSetup.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import PaymentSectionSetup from "./SetUpPaymentSection/PaymentSectionSetup";
import SetupPrevModal from "./SetupPrevModal";
import { trainerDetail } from "action/trainerAct";
import Instagram from "../../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../../assets/files/SVG/Web Icon.svg";
import { history } from "helpers";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";

const CyanRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

// Dropdown Data
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
function TrainerSetup() {
    const [trainerSetupData, setTrainerSetupData] = React.useState({
        motto: "",
        training_process: "",
        facility_details: "",
        neighborhood_list: "",
        haveAFacility: "",
        willingToTravel: "",
        instagram: "",
        website: "",
        serviceableLocation: "",
        certificateFields: [{ certificate: "", year: "" }],
        trainingLocation: [],
        zoom_link: "",
        identityNameUS: "",
        insuranceNameUS: "",
        coverAmount: "",
        governmentId: "",
        governmentIdNumber: "",
    });

    React.useEffect(() => {
        dispatch(captureTrainerSetup(trainerSetupData));
    }, [trainerSetupData]);

    //buttons virtual and in person active
    const [checkButtonVirtual, setCheckButtonVirtual] = useState(true);
    const [checkButtonInPerson, setCheckButtonInPerson] = useState(true);

    // loading the submit button
    const [isLoading, setLoading] = useState(false);

    // Agree check
    const [agreed, setAgreed] = useState(false);

    const TrainerSetupPayload = useSelector(
        (state) => state.trainerCaptureReducer.setupData
    );

    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log(TrainerSetupPayload);

        TrainerSetupPayload.motto === undefined
            ? dispatch(trainerDetail()).then((res) => {
                  console.log(res, "testt");
                  trainerSetupData.motto = res.myMotto;
                  trainerSetupData.training_process = res.trainingProcess;
                  trainerSetupData.certificateFields = res.certification;
                  trainerSetupData.instagram = res.instagramProfile;
                  trainerSetupData.website = res.websiteLink;
                  trainerSetupData.willingToTravel = res.willingToTravel;
                  trainerSetupData.haveAFacility = res.trainingFacility;
                  trainerSetupData.zoom_link = res.virtualMeetingLinK;
                  trainerSetupData.neighborhood_list = res.servicableLocation;
              })
            : setTrainerSetupData(TrainerSetupPayload);
    }, []);

    function handleCertificateField() {
        //setCertificateFields([...certificateFields, { certificate: "", year: "" }]);
        setTrainerSetupData({
            ...trainerSetupData,
            certificateFields: [
                ...trainerSetupData.certificateFields,
                { certificate: "", year: "" },
            ],
        });
    }

    const handleChangeCertificateInput = (index, event) => {
        const values = [...trainerSetupData.certificateFields];
        values[index][event.target.name] = event.target.value;
        //setCertificateFields(values);
        setTrainerSetupData({ ...trainerSetupData, certificateFields: values });

        console.log(trainerSetupData.certificateFields);
    };

    //onChange for payment section
    function handleChangePayment(e) {
        setTrainerSetupData(e);
    }

    // handle virtual button active
    const handleVirtual = () => {
        setCheckButtonVirtual((checkButtonVirtual) => !checkButtonVirtual);
    };
    // handle InPerson button active
    const handleInPerson = () => {
        setCheckButtonInPerson((checkButtonInPerson) => !checkButtonInPerson);
    };

    // handle agree check
    const handleAgreedCheck = () => {
        setAgreed(!agreed);
    };

    // for Modal Operation
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen((prev) => !prev);
    };
    return (
        <>
            <div className="container">
                <div className="inner_setup_container">
                    <div className="setup_link">
                        <div className="inner_link">
                            <img src={ArrowBack} alt="icon" />
                            <Link
                                to="/trainer/card"
                                //  onClick={handleBack}
                            >
                                {" "}
                                Edit Trainer Card{" "}
                            </Link>
                        </div>
                        <div className="inner_link_preview">
                            <div onClick={openModal} className="prev_profile">
                                Preview Your Trainer Profile
                            </div>
                        </div>
                    </div>
                    <SetupPrevModal open={open} setOpen={setOpen} />
                    <div className="setup_headings">
                        <h2>Build out the rest of your Profile!</h2>
                        <p>
                            Your trainer profile is what clients will see when
                            they click on your trainer card while filtering
                            results. The below information and training settings
                            can be changed at any time.
                        </p>
                    </div>
                    <div className="textarea_content">
                        <label>What’s your Motto?</label>
                        <br />
                        <textarea
                            placeholder="Share the words you live or train by in 250 characters or less"
                            value={trainerSetupData.motto}
                            onChange={(e) => {
                                setTrainerSetupData({
                                    ...trainerSetupData,
                                    motto: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="textarea_content">
                        <label>
                            Tell us about you and describe your training process
                        </label>
                        <br />
                        <textarea
                            placeholder="Share the words you live or train by in 250 characters or less"
                            value={trainerSetupData.training_process}
                            onChange={(e) => {
                                setTrainerSetupData({
                                    ...trainerSetupData,
                                    training_process: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <label>Image Field</label>
                    <div className="certificate_content">
                        <label>Certifications</label>
                        {trainerSetupData.certificateFields.map((field, id) => {
                            return (
                                <div
                                    key={`${field}-${id}`}
                                    className="certificate_fields"
                                >
                                    <input
                                        placeholder="Certification Title"
                                        name="certificate"
                                        value={field.certificate}
                                        onChange={(event) =>
                                            handleChangeCertificateInput(
                                                id,
                                                event
                                            )
                                        }
                                    />
                                    <input
                                        placeholder="Year you were certified"
                                        name="year"
                                        value={field.year}
                                        onChange={(event) =>
                                            handleChangeCertificateInput(
                                                id,
                                                event
                                            )
                                        }
                                        type="number"
                                    />
                                </div>
                            );
                        })}

                        <button
                            className="certificate_button"
                            type="button"
                            onClick={() => handleCertificateField()}
                        >
                            + Add Certification
                        </button>
                    </div>

                    <div className="trainDetails_container">
                        <div className="training_options">
                            <label>Where will you be training</label>
                            <div className="options_button">
                                <button
                                    onClick={(e) => handleVirtual(e, "Online")}
                                    className={
                                        checkButtonVirtual
                                            ? "buttonTrue"
                                            : "buttonFalse"
                                    }
                                >
                                    Virtual
                                </button>
                                <button
                                    onClick={(e) =>
                                        handleInPerson(e, "inperson")
                                    }
                                    className={
                                        checkButtonInPerson
                                            ? "buttonTrue"
                                            : "buttonFalse"
                                    }
                                >
                                    In Person
                                </button>
                            </div>
                            {checkButtonVirtual === true ? (
                                <div className="textarea_content">
                                    <label>Add zoom app meeting link</label>
                                    <br />
                                    <textarea
                                        placeholder="add you're meeting link"
                                        value={trainerSetupData.zoom_link}
                                        onChange={(e) => {
                                            setTrainerSetupData({
                                                ...trainerSetupData,
                                                zoom_link: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className="dd_content">
                            <h5>Which city will you train in?</h5>
                            <Dropdown
                                className="custom_dropdown"
                                title="Select Location"
                                list={options}
                                name="location"
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        serviceableLocation: e.value,
                                    });
                                }}
                                value={trainerSetupData.serviceableLocation}
                            />
                        </div>
                        <div className="radio_content">
                            <label>
                                Do you have a facility or location where you
                                will train clients?
                            </label>
                            <br />
                            <CyanRadio
                                checked={
                                    trainerSetupData.haveAFacility === true
                                }
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        haveAFacility:
                                            !trainerSetupData.haveAFacility,
                                    });
                                }}
                                value={trainerSetupData.haveAFacility}
                            />
                            &ensp;<span className="radio">Yes</span> &ensp;
                            <CyanRadio
                                checked={
                                    trainerSetupData.haveAFacility === false
                                }
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        haveAFacility:
                                            !trainerSetupData.haveAFacility,
                                    });
                                }}
                                value={trainerSetupData.haveAFacility}
                            />
                            &ensp;<span className="radio">No</span>
                        </div>
                        <div className="textarea_content">
                            <label>Details of the facility/location</label>

                            <br />
                            <textarea
                                placeholder="Enter the Details of the location"
                                value={trainerSetupData.facility_details}
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        facility_details: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="radio_content">
                            <label>
                                Are you willing to travel to clients in your
                                city/region?
                            </label>
                            <br />
                            <CyanRadio
                                checked={
                                    trainerSetupData.willingToTravel === true
                                }
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        willingToTravel:
                                            !trainerSetupData.willingToTravel,
                                    });
                                }}
                                value={trainerSetupData.willingToTravel}
                            />
                            &ensp;<span className="radio">Yes</span> &ensp;
                            <CyanRadio
                                checked={
                                    trainerSetupData.willingToTravel === false
                                }
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        willingToTravel:
                                            !trainerSetupData.willingToTravel,
                                    });
                                }}
                                value={trainerSetupData.willingToTravel}
                            />
                            &ensp;<span className="radio">No</span>
                        </div>
                        <div className="textarea_content">
                            <label>
                                List the areas/neighborhoods you’re willing to
                                travel to
                            </label>
                            <br />
                            <textarea
                                placeholder="Neighborhood List"
                                value={trainerSetupData.neighborhood_list}
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        neighborhood_list: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="input_content">
                            <label>Instagram</label>
                            <br />
                            <input
                                placeholder="Add your Instagram Handle"
                                value={trainerSetupData.instagram}
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        instagram: e.target.value,
                                    });
                                }}
                            />
                            <img src={Instagram} alt="icon" />
                        </div>
                        <div className="input_content">
                            <label>Website</label>
                            <br />
                            <input
                                placeholder="Add your Web Link"
                                value={trainerSetupData.website}
                                onChange={(e) => {
                                    setTrainerSetupData({
                                        ...trainerSetupData,
                                        website: e.target.value,
                                    });
                                }}
                            />
                            <img src={Web} alt="icon" />
                        </div>
                    </div>

                    <PaymentSectionSetup
                        onChange={handleChangePayment}
                        trainerSetupData={trainerSetupData}
                        setTrainerSetupData={setTrainerSetupData}
                    />

                    <div className="card_agree">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            onChange={handleAgreedCheck}
                        />
                        <label>
                            Check here to acknowledge that you have read and
                            agree to the Motto trainer
                            <a href="/agreement" target="_blank">
                                terms and conditions
                            </a>
                        </label>
                    </div>

                    {/* <button
                            className="setup_submit"
                            onClick={() => {
                                console.log(trainerSetupData);
                                dispatch(captureTrainerSetup(trainerSetupData));
                            }}
                        >
                            Continue
                        </button> */}
                    <div className="submit_button">
                        <button
                            onClick={() => {
                                console.log(trainerSetupData);
                                dispatch(captureTrainerSetup(trainerSetupData));
                                if (trainerSetupData) {
                                    history.push("/trainers/dashboard/session");
                                }
                            }}
                            type="submit"
                            disabled={(isLoading, !agreed)}
                            className={`${isLoading ? "loading" : "btn"}`}
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
                                    Please Agree to the above terms and
                                    conditions to continue
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerSetup;
