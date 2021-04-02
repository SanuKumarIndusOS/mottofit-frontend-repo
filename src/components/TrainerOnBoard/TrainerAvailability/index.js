import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import Arrow from "../../../assets/SignUp/Arrow.svg";

const CyanRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
const TrainerAvailability = () => {
    const [selectedValue, setSelectedValue] = React.useState("a");
    const [selectedOneValue, setSelectedOneValue] = React.useState("a");


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleOneChange = (event) => {
        setSelectedOneValue(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="main_wrappercontainer">
                    <div className="link_wrapper">
                        <Link to="/trainerbackground">
                            Back to Trainer Background
                        </Link>
                    </div>
                    <div className="wrapper_inneritem">
                        <h1>Highlight your availability on the platform</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem ipsum has been the
                            industry’s standard dummy text.
                        </p>
                        <form>
                            <div className="content_wrapper">
                                <div className="item_1">
                                    <h6>
                                    How many hours will you list on Motto?
                                    </h6>
                                    <div className="inputs_platform">
                                        <input
                                            type="number"
                                            placeholder='10 Hours/Week'
                                        />
                                    </div>
                                </div>
                                <div className="item_2">
                                    <h6>
                                    Where are you willing to train?
                                    </h6>
                                    <div className="inputs_platform">
                                       <button>Virtual</button>
                                       <button>In Person</button>
                                       <button>Outdoors</button>

                                    </div>
                                </div>
                                <div className="item_3">
                                    <h6>
                                        Tell us what you train! Select all the
                                        verticals that apply
                                    </h6>
                                    <CyanRadio
                                            checked={selectedValue === "a"}
                                            onChange={handleChange}
                                            value="a"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "a" }}
                                        />
                                        <label>Yes</label>
                                        <CyanRadio
                                            checked={selectedValue === "b"}
                                            onChange={handleChange}
                                            value="b"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "b" }}
                                        />
                                        <label>No</label>
                                </div>
                                <div className="item_4">
                                    <h6>
                                    Select the location of your facility
                                    </h6>
                                    <div className="inputs_platform">
                                        <input
                                            type="text"
                                            placeholder="Select your Location"
                                        />
                                    </div>
                                </div>
                                <div className="item_5">
                                    <h6>
                                    Are you willing to travel in the selected area?
                                    </h6>
                                    <CyanRadio
                                            checked={selectedOneValue === "c"}
                                            onChange={handleOneChange}
                                            value="c"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "c" }}
                                        />
                                        <label>Hell, Yes!</label>
                                        <CyanRadio
                                            checked={selectedOneValue === "d"}
                                            onChange={handleOneChange}
                                            value="d"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "d" }}
                                        />
                                        <label>No</label>
                                </div>
                                <div className="item_6">
                                    <h6>
                                    Serviceable Locations
                                    </h6>
                                    <div className="inputs_platform">
                                        <input
                                            type="text"
                                            placeholder="List all areas that you will service"
                                        />
                                    </div>
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
        </>
    );
};

export default TrainerAvailability;
