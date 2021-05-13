import React, { useState, useEffect } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import Checkbox from "@material-ui/core/Checkbox";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import Location from "../../../assets/files/SVG/Location Icon.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrainerDetails, getTrainerDetails } from "action/trainerAct";
import { history } from "helpers";

/* areaOfExpertise
   previousExperience
   currentExperience
   interestInMotto
   trainingProcess
   clientAssessment
   "myMotto":"",
   certification

   hoursPerWeek
   preferedTrainingMode
//    serviceableCity
   servicableLocation
   trainingFacilityLocation
   willingToTravel


   
*/

const TrainerBackgroundFC = ({ updateTrainerDetails, details }) => {
    const [checkedBoxing, setCheckedBoxing] = React.useState(false);
    const [checkedHIIT, setCheckedHIIT] = React.useState(false);
    const [checkedYoga, setCheckedYoga] = React.useState(false);
    const [checkedPilates, setCheckedPilates] = React.useState(false);

    const [currentExperiencee, setCurrentExperiencee] = useState({
        workMode: "",
        workLocation: "",
    });
    const [trainerbackgroundData, setTrainerbackgroundData] = useState({
        areaOfExpertise: [],
        previousExperience: [],
        certification: [],
        clientAssessment: "",
        trainingProcess: "",
        interestInMotto: "",
        currentExperience: "",
    });

    const [checkstate, setCheckState] = React.useState("");

    // const history = useHistory();

    const [selectedValue, setSelectedValue] = useState("a");
    const [inputFields, setInputField] = useState([
        {
            orgnization: "",
            job: "",
            years: "",
        },
    ]);

    const [inputCertificatesFields, setinputCertificatesField] = useState([
        {
            certificate: "",
            year: "",
            upload: "",
        },
    ]);
    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputField(values);

        console.log(inputFields);

        setTrainerbackgroundData({
            ...trainerbackgroundData,
            previousExperience: inputFields,
        });
    };
    const handleChangeCertificateInput = (index, event) => {
        const values = [...inputCertificatesFields];
        values[index][event.target.name] = event.target.value;
        setinputCertificatesField(values);

        // console.log(inputCertificatesFields);
        setTrainerbackgroundData({
            ...trainerbackgroundData,
            certification: inputCertificatesFields,
        });
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleAddFields = () => {
        setInputField([
            ...inputFields,
            { orgnization: "", job: "", years: "" },
        ]);
    };

    const handleAddCertificateFields = () => {
        setinputCertificatesField([
            ...inputCertificatesFields,
            { certificate: "", year: "", upload: "" },
        ]);

        console.log(inputCertificatesFields);
    };

    // const handleRemoveFields = (index) => {
    //     const values = [...inputFields];
    //     values.splice(index, 1);
    //     setInputField(values);
    // };

    const handleSubmit = () => {
        const storeData = {
            details: {
                ...details,
                areaOfExpertise: trainerbackgroundData.areaOfExpertise,
                previousExperience: trainerbackgroundData.previousExperience,
                certification: trainerbackgroundData.certification,
                clientAssessment: trainerbackgroundData.clientAssessment,
                trainingProcess: trainerbackgroundData.trainingProcess,
                interestInMotto: trainerbackgroundData.interestInMotto,
                currentExperience: currentExperiencee,
            },
        };

        updateTrainerDetails(storeData);

        history.push(`/trainer/availability`);
    };

    useEffect(() => {
        if (Object.keys(details).length > 3) {
            let tempData = {
                areaOfExpertise: details?.areaOfExpertise || [],
                previousExperience: details?.previousExperience || [],
                certification: details?.certificate || [],
                clientAssessment: details.clientAssessment,
                trainingProcess: details.trainingProcess,
                interestInMotto: details.interestInMotto,
            };

            details.currentExperience &&
                setCurrentExperiencee(details.currentExperience);

            details.previousExperience &&
                setInputField(details.previousExperience);

            details.certification &&
                setinputCertificatesField(details.certification);

            setTrainerbackgroundData(tempData);
        }
    }, []);

    return (
        <>
            <div className="outter_container_bg">
                <div className="container">
                    <div className="links_wrapper">
                        <div className="outter_links">
                            <img src={ArrowBack} alt="icon" />
                            <div className="inner_links">
                                <Link to="/trainer/about">
                                    {" "}
                                    Back to About You
                                </Link>
                                <div></div>
                            </div>
                        </div>
                        <div className="outter_links">
                            <div className="inner_links">
                                <Link to="/trainer/availability">
                                    Go to Availability
                                </Link>
                                <div></div>
                            </div>
                            <img src={ArrowNext} alt="icon" />
                        </div>
                    </div>
                    <div className="main_wrapper">
                        <div className="wrapper_inneritems">
                            <h1>Detail out your training background</h1>

                            <p>
                                {/* We want to know it all! Share with us your
                                experience & philosophy as a trainer to progress
                                in your application process and join the Motto
                                Family.{" "} */}
                            </p>

                            <div className="contents_wrapper">
                                <form>
                                    <div className="item1">
                                        <h6>
                                            Tell us what you train! Select all
                                            the verticals that apply
                                        </h6>
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
                                    </div>
                                    <div className="item2">
                                        <h6>Training experience</h6>
                                        {inputFields.map((input, index) => {
                                            return (
                                                <div
                                                    className="inputs_experience"
                                                    key={index}
                                                >
                                                    <input
                                                        type="text"
                                                        placeholder="Name of the organization / GYM"
                                                        value={
                                                            input.orgnization
                                                        }
                                                        name="orgnization"
                                                        onChange={(event) =>
                                                            handleChangeInput(
                                                                index,
                                                                event
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Job Title"
                                                        value={input.job}
                                                        name="job"
                                                        onChange={(event) =>
                                                            handleChangeInput(
                                                                index,
                                                                event
                                                            )
                                                        }
                                                    />
                                                    <input
                                                        type="number"
                                                        placeholder="Years"
                                                        name="years"
                                                        value={input.years}
                                                        onChange={(event) =>
                                                            handleChangeInput(
                                                                index,
                                                                event
                                                            )
                                                        }
                                                    />
                                                </div>
                                            );
                                        })}

                                        <h5 onClick={() => handleAddFields()}>
                                            + Add Work Experience
                                        </h5>
                                        {/* {inputFields ? (
                                        <span
                                            onClick={() => handleRemoveFields()}
                                        >
                                            Remove
                                        </span>
                                    ) : null} */}
                                    </div>
                                    <div className="item3">
                                        <h6>Certifications</h6>
                                        {inputCertificatesFields.map(
                                            (inputCertificatesField, index) => (
                                                <div
                                                    className="inputs_background"
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
                                                    value={
                                                        inputCertificatesField.upload
                                                    }
                                                    // className="custom-file-input"
                                                    onChange={(event) =>
                                                        handleChangeCertificateInput(
                                                            index,
                                                            event
                                                        )
                                                    }
                                                /> */}
                                                    {/* <a className="checkarrow">
                                                    <ArrowHover />
                                                </a> */}
                                                </div>
                                            )
                                        )}

                                        <h5
                                            onClick={handleAddCertificateFields}
                                        >
                                            + Add Certificate's
                                        </h5>
                                    </div>
                                    <div className="item4">
                                        <h6>
                                            Are you currently enrolled in any
                                            continued education programs?
                                        </h6>
                                        <div className="inputs_experience">
                                            <textarea
                                                type="text"
                                                name="comment"
                                                placeholder="Tell us about any awaiting certifications "
                                            />
                                        </div>
                                    </div>
                                    <div className="item5">
                                        <h6>
                                            Do you have a facility to train new
                                            & outside clients?
                                        </h6>
                                        <div className="inputs_experience">
                                            <select
                                                className="select_location"
                                                required
                                                name="answer"
                                                value={
                                                    currentExperiencee.workMode
                                                }
                                                onChange={(e) => {
                                                    setCurrentExperiencee({
                                                        ...currentExperiencee,
                                                        workMode:
                                                            e.target.value,
                                                    });

                                                    // setTrainerbackgroundData({...trainerbackgroundData, currentExperience: currentExperiencee})
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Select Your Answer
                                                </option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>

                                            {currentExperiencee.workMode ===
                                            "yes" ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        placeholder="Details of facility"
                                                        value={
                                                            currentExperiencee.workLocation
                                                        }
                                                        name="answer"
                                                        onChange={(e) => {
                                                            setCurrentExperiencee(
                                                                {
                                                                    ...currentExperiencee,
                                                                    workLocation:
                                                                        e.target
                                                                            .value,
                                                                }
                                                            );
                                                            setTrainerbackgroundData(
                                                                {
                                                                    ...trainerbackgroundData,
                                                                    currentExperience:
                                                                        currentExperiencee,
                                                                }
                                                            );
                                                        }}
                                                    />
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="item6">
                                        <h6>
                                            Why are you interested in joining
                                            Motto?
                                        </h6>
                                        <div className="inputs_experience">
                                            <textarea
                                                type="text"
                                                name="comment"
                                                placeholder="Tell us all about it in not more than 150 words"
                                                value={
                                                    trainerbackgroundData.interestInMotto
                                                }
                                                onChange={(e) =>
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        interestInMotto:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="item6">
                                        <h6>
                                            Describe how you assess a client
                                            before their first session?
                                        </h6>
                                        <div className="inputs_experience">
                                            <textarea
                                                type="text"
                                                name="comment"
                                                placeholder="Tell us all about it in not more than 150 words"
                                                value={
                                                    trainerbackgroundData.clientAssessment
                                                }
                                                onChange={(e) =>
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        clientAssessment:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="item6">
                                        <h6>
                                            Describe your training process &
                                            philosophy
                                        </h6>
                                        <div className="inputs_experience">
                                            <textarea
                                                type="text"
                                                name="comment"
                                                placeholder="Tell us all about it in not more than 150 words"
                                                value={
                                                    trainerbackgroundData.trainingProcess
                                                }
                                                onChange={(e) =>
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        trainingProcess:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="submit_button">
                                        <button
                                            type="submit"
                                            style={{
                                                textDecoration: "none",
                                                color: "#FFFFFF",
                                            }}
                                            type="submit"
                                            // onClick={handleTrainerAvailability}
                                            onClick={handleSubmit}
                                            // to={{
                                            //   pathname: "/trainer/avaliability",
                                            //   state: [AboutTrainer, trainerbackgroundData],
                                            // }}
                                        >
                                            Continue
                                            <ArrowHoverBlacked />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <img src={WaterMark} alt="icon" className="bg_watermark" />
                </div>
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

const TrainerBackground = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainerBackgroundFC);

export default TrainerBackground;
