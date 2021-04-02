import React from "react";
import "./styles.scss";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Arrow from "../../../assets/SignUp/Arrow.svg";
import { Link } from "react-router-dom";

const GreenRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const TrainerBackground = () => {
    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="main_wrapper">
                    <div className="links_wrapper">
                        <Link to='/aboutTrainer'>Back to About You</Link>
                        <Link to='/trainer-avaliability'>Go to Avaliability</Link>

                    </div>
                    <div className="wrapper_inneritems">
                        <h1>Detail out your training background</h1>
                        <p>
                            We want to know it all! Share with us your
                            experience & philosophy as a trainer to progress in
                            your application process and join the Motto family.{" "}
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
                                    <div className="inputs_experience">
                                        <input
                                            type="text"
                                            placeholder="Name of the Orgnisation/GYM"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                        />
                                        <input
                                            type="Number"
                                            placeholder="Years"
                                        />
                                    </div>
                                    <p>add</p>
                                </div>
                                <div className="item3">
                                    <h6>
                                        Prior training experience or gym
                                        affiliations
                                    </h6>
                                    <div className="inputs_experience">
                                        <input
                                            type="text"
                                            placeholder="Certification Title"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Year you were Certified"
                                        />
                                        <input type="file" name="file" />
                                    </div>
                                    <p>add</p>
                                </div>
                                <div className="item4">
                                    <h6>
                                        Are you currently enrolled in any
                                        continued education programs?
                                    </h6>
                                    <div className="inputs_experience">
                                        <textarea
                                            type="text"
                                            rows="5"
                                            cols="120"
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
                                            rows="5"
                                            cols="120"
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
                                            rows="5"
                                            cols="120"
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
                                            rows="5"
                                            cols="120"
                                            name="comment"
                                            placeholder="Tell us all about it in not more than 150 words"
                                        />
                                    </div>
                                </div>

                                <div className="submit_button">
                                    <button type="submit">
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
