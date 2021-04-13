import React, { useState } from "react";
import "./styles.scss";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Arrow from "../../../assets/SignUp/Arrow.svg";
import { Link, useHistory } from "react-router-dom";
import ArrowHover from "../../../components/common/ButtonIcon/ArrowHover";

const GreenRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const TrainerBackground = () => {
    const history = useHistory();

    const handleTrainerAvailability = () => {
        history.push("/trainer-avaliability");
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
    };
    const handleChangeCertificateInput = (index, event) => {
        const values = [...inputCertificatesFields];
        values[index][event.target.name] = event.target.value;
        setinputCertificatesField(values);
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
    };

    // const handleRemoveFields = (index) => {
    //     const values = [...inputFields];
    //     values.splice(index, 1);
    //     setInputField(values);
    // };

    return (
        <>
            <div className="container">
                <div className="main_wrapper">
                    <div className="links_wrapper">
                        <Link to="/aboutTrainer" > Back to About You</Link>
                        <Link to="/trainer-avaliability">
                            Go to Avaliability
                        </Link>
                    </div>
                    <div className="wrapper_inneritems">
                        <h1>Detail out your training background</h1>
                        <p>
                            We want to know it all! Share with us your
                            experience & philosophy as a trainer to progress in
                            your application process and join the Motto Family.{" "}
                        </p>
                        <div className="contents_wrapper">
                            <form>
                                <div className="item1">
                                    <h6>
                                        Tell us what you train! Select all the
                                        verticals that apply
                                    </h6>
                                    <div className="inputs_experience">
                                        <GreenRadio
                                            checked={selectedValue === "a"}
                                            onChange={handleChange}
                                            value="a"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "a" }}
                                        />
                                        <label>Strength & Hitt</label>
                                        <GreenRadio
                                            checked={selectedValue === "b"}
                                            onChange={handleChange}
                                            value="b"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "b" }}
                                        />
                                        <label>Boxing</label>
                                        <GreenRadio
                                            checked={selectedValue === "c"}
                                            onChange={handleChange}
                                            value="c"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "C" }}
                                        />
                                        <label>Yoga</label>
                                        <GreenRadio
                                            checked={selectedValue === "d"}
                                            onChange={handleChange}
                                            value="d"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "d" }}
                                        />
                                        <label>Pilates</label>
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
                                                    placeholder="Name of the Orgnisation/GYM"
                                                    value={input.orgnization}
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
                                                    type="Number"
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
                                                className="inputs_experience"
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
                                                <input
                                                    type="file"
                                                    name="file"
                                                    value={
                                                        inputCertificatesField.upload
                                                    }
                                                    className="custom-file-input"
                                                    onChange={(event) =>
                                                        handleChangeCertificateInput(
                                                            index,
                                                            event
                                                        )
                                                    }
                                                />
                                                <a className="checkarrow">
                                                    <ArrowHover />
                                                </a>
                                            </div>
                                        )
                                    )}

                                    <h5 onClick={handleAddCertificateFields}>
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
                                        Are you currently enrolled in any
                                        continued education programs?
                                    </h6>
                                    <div className="inputs_experience">
                                        <input
                                            type="text"
                                            placeholder="Select your Answer"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Select your Location"
                                        />
                                    </div>
                                </div>
                                <div className="item6">
                                    <h6>
                                        Why are you interested in joining Motto?
                                    </h6>
                                    <div className="inputs_experience">
                                        <textarea
                                            type="text"
                                            name="comment"
                                            placeholder="Tell us all about it in not more than 150 words"
                                        />
                                    </div>
                                </div>
                                <div className="item6">
                                    <h6>
                                        Describe how you assess a client before
                                        their first session?
                                    </h6>
                                    <div className="inputs_experience">
                                        <textarea
                                            type="text"
                                            name="comment"
                                            placeholder="Tell us all about it in not more than 150 words"
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
                                        />
                                    </div>
                                </div>

                                <div className="submit_button">
                                    <button
                                        type="submit"
                                        onClick={handleTrainerAvailability}
                                    >
                                        Continue
                                        <img src={Arrow} alt="icon" />
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

export default TrainerBackground;
