import React, { useState } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import Checkbox from "@material-ui/core/Checkbox";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import Location from "../../../assets/files/SVG/Location Icon.svg";

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

const TrainerBackground = (props) => {
    const [currentExperiencee, setCurrentExperiencee] = useState({
        workMode: "",
        workLocation: "",
    });
    const [trainerbackgroundData, setTrainerbackgroundData] = useState({
        areaOfExpertise: "",
        previousExperience: [],
        certification: [],
        clientAssessment: "",
        trainingProcess: "",
        interestInMotto: "",
        currentExperience: "",
    });

    const [checkstate, setCheckState] = React.useState("");

    React.useEffect(() => {
        // Update the document title using the browser API
        console.log("trainerBackground", props.location.state);
    });

    // const history = useHistory();
    const AboutTrainer = props.location.state;

    const handleTrainerAvailability = (event) => {
        console.log(trainerbackgroundData, props.location.state);
        // history.push("/trainer-avaliability");
        event.preventDefault();
    };

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
                                <Link to="/trainer/avaliability">
                                    Go to Avaliability
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
                                We want to know it all! Share with us your
                                experience & philosophy as a trainer to progress
                                in your application process and join the Motto
                                Family.{" "}
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
                                                value={
                                                    trainerbackgroundData.areaOfExpertise
                                                }
                                                onChange={(e) => {
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        areaOfExpertise:
                                                            "Strength & HIIT",
                                                    });

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
                                                value={
                                                    trainerbackgroundData.areaOfExpertise
                                                }
                                                onChange={(e) => {
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        areaOfExpertise:
                                                            "Boxing",
                                                    });

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
                                                value={
                                                    trainerbackgroundData.areaOfExpertise
                                                }
                                                onChange={(e) => {
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        areaOfExpertise: "Yoga",
                                                    });
                                                }}
                                                style={{
                                                    color: "#53BFD2",
                                                }}
                                            />
                                            <div className="checkbox_label">
                                                Yoga
                                            </div>
                                            <Checkbox
                                                value={
                                                    trainerbackgroundData.areaOfExpertise
                                                }
                                                onChange={(e) => {
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        areaOfExpertise:
                                                            "Pilates",
                                                    });
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
                                        <h6>
                                            Prior training experience or gym
                                            affiliations
                                        </h6>
                                        {inputFields.map((input, index) => {
                                            return (
                                                <div
                                                    className="inputs_experience"
                                                    key={index}
                                                >
                                                    <input
                                                        type="text"
                                                        placeholder="Name of the Orgnisation / GYM"
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
                                            Do you currently own/work at a gym?
                                        </h6>
                                        <div className="inputs_experience">
                                            <select
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
                                                    Select your Answer
                                                </option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>

                                            <select
                                                className="select_location"
                                                required
                                                name="answer"
                                                value={
                                                    currentExperiencee.workLocation
                                                }
                                                onChange={(e) => {
                                                    setCurrentExperiencee({
                                                        ...currentExperiencee,
                                                        workLocation:
                                                            e.target.value,
                                                    });
                                                    setTrainerbackgroundData({
                                                        ...trainerbackgroundData,
                                                        currentExperience: currentExperiencee,
                                                    });
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    disabled
                                                    selected
                                                >
                                                    Select your Location
                                                </option>
                                                <option>New York</option>
                                                <option>Miami</option>
                                                <option>Hampton</option>
                                                <option>Palm Beach</option>
                                            </select>
                                            <img
                                                src={Location}
                                                alt="icon"
                                                className="loction_img_select"
                                            />
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
                                        <button type="submit">
                                            <Link
                                                style={{
                                                    textDecoration: "none",
                                                    color: "#FFFFFF",
                                                }}
                                                type="submit"
                                                // onClick={handleTrainerAvailability}
                                                to={{
                                                    pathname:
                                                        "/trainer/avaliability",
                                                    state: [
                                                        AboutTrainer,
                                                        trainerbackgroundData,
                                                    ],
                                                }}
                                            >
                                                Continue
                                                <ArrowHoverBlacked />
                                            </Link>
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

export default TrainerBackground;
