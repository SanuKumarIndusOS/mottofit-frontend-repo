import React, { useRef, useState, useEffect } from "react";
import Profile from "../../../../assets/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/SVG/Picture Icon.svg";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import DollarIcon from "../../../../assets/SVG/dollar Icon.svg";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../../common/Footer/index";
// import { Tabbordion, TabPanel, TabLabel, TabContent } from "react-tabbordion";
import "./accordion.scss";
import "./styles.scss";
import ArrowBlackHover from "../../../common/ButtonIconBlackCircle/ArrowBlackHover";
// import { Accordion } from "@material-ui/core";

const CyanRadio = withStyles({
    root: {
        "&$checked": {
            color: cyan[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);
const TrainerCard = () => {
    const history = useHistory();

    const data = {
        title: "Time to build your Trainer Card!",
        describtion:
            " Heads up! Your trainer card is what clients will see when trainer results start filtering. Utilize keywords as anything you write here will also besearchable in our search box!",
        upload: " Upload your profile picture, hotshot!",
        tellus: " Tell us what you train! Select all the verticals that apply",
        clientDesc:
            "Write a short and sweet description for clients to pick you in 75 characters",
        pricing: "Tell us about your Pricing",
        pricingDesc:
            "We recommend that the pricing of the social sessions (2-4 people) should provide savings to each client in comparison to a 1 on 1 individual session. The pricing for a 5-15 person group class is a flat rate that will be split evenly amongst each client.",
    };

    const [image, setImage] = useState();
    const [previewImage, setPreviewTmage] = useState();
    const fileInputRef = useRef();

    // for radio button
    const [selectedValue, setSelectedValue] = useState("a");

    // for radio
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
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

    const handleChangeToTrainerProfile = () => {
        history.push("/trainer-setup");
    };

    return (
        <>
            <div className="container">
                <div className="card_outter">
                    <div className="card_outter_wrapper">
                        <h2>{data.title}</h2>
                        <p>{data.describtion}</p>
                    </div>
                    <div className="card_inner">
                        <div className="card_form_outter">
                            <form>
                                <div className="card_item1">
                                    {previewImage ? (
                                        <img
                                            src={previewImage}
                                            style={{
                                                objectFit: "cover",
                                                width: "200px",
                                                height: "200px",
                                                borderRadius: "100px",
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
                                                    src={Profile}
                                                    alt="icon"
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "100px",
                                                        height: "100px",
                                                    }}
                                                />
                                            </button>
                                            <img
                                                src={ProfileAdd}
                                                alt="icon"
                                                style={{
                                                    objectFit: "cover",
                                                    width: "20px",
                                                    height: "20px",
                                                    borderRadius: "100px",
                                                }}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    fileInputRef.current.click();
                                                }}
                                            />
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        accept="image/*"
                                        onChange={(event) => {
                                            const file = event.target.files[0];
                                            if (
                                                file &&
                                                file.type.substr(0, 5) ===
                                                    "image"
                                            ) {
                                                setImage(file);
                                            } else {
                                                setImage(null);
                                            }
                                        }}
                                    />
                                    <h5>{data.upload}</h5>
                                </div>
                                <div className="card_item2 ">
                                    <div className="card_innerItem">
                                        <h6>First Name</h6>
                                        <input />
                                    </div>
                                    <div className="card_innerItem">
                                        <h6>Last Name</h6>
                                        <input />
                                    </div>
                                </div>
                                <div className="card_item3">
                                    <h6>{data.tellus}</h6>
                                    <div className="inputs_experience">
                                        <CyanRadio
                                            checked={selectedValue === "a"}
                                            onChange={handleChange}
                                            value="a"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "a" }}
                                        />
                                        <label>Strength & Hitt</label>
                                        <CyanRadio
                                            checked={selectedValue === "b"}
                                            onChange={handleChange}
                                            value="b"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "b" }}
                                        />
                                        <label>Boxing</label>
                                        <CyanRadio
                                            checked={selectedValue === "c"}
                                            onChange={handleChange}
                                            value="c"
                                            name="radio-button-demo"
                                            label="Strength & Hitt"
                                            inputProps={{ "aria-label": "C" }}
                                        />
                                        <label>Yoga</label>
                                        <CyanRadio
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
                                <div className="card_item4">
                                    <h6>{data.clientDesc}</h6>
                                    <textarea
                                        type="text"
                                        name="comment"
                                        placeholder="Give us your elevator pitch! This is all clients will see on the search results page until they click into
                                            your full profile."
                                    />
                                </div>
                                <div className="card_item5">
                                    <h6></h6>
                                    <p>{data.pricingDesc}</p>
                                </div>
                                <div className="card_item6">
                                    <Accordion title="In Person Training Session Pricing (at the clients location)">
                                        <div className="card_accordion">
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Individual charge"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Social Session (Total Charge for 2 People)"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>

                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Social Session (Total Charge for 3 People)"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Social Session (Total Charge for 4 People)"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Class Flat Rate (5-15 People)"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="3 Session Rate"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="10 Session Pass Rate"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                        </div>
                                    </Accordion>
                                    <Accordion title="In Person Training Session Pricing (at your location)">
                                        <div className="card_accordion">
                                            <div className="iconwrapper">
                                                <input
                                                    type="text"
                                                    placeholder="Dollar Amount Per Person"
                                                />
                                                <img
                                                    src={DollarIcon}
                                                    alt="icon"
                                                />
                                            </div>
                                        </div>
                                    </Accordion>
                                    <Accordion title="Virtual Training Session Pricing">
                                        Content not Given in XD
                                    </Accordion>
                                </div>
                                <div className="submit_button">
                                    <Link
                                        onClick={handleChangeToTrainerProfile}
                                        type="submit"
                                        // onClick={handleTrainerAvailability}
                                    >
                                        Continue <ArrowBlackHover />
                                        {/* <img src={Arrow} alt="icon" /> */}
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                
            </div>
            <Footer></Footer>
        </>
    );
};

function Accordion({ title, children }) {
    const [isOpenAccodion, setAccordion] = useState(false);

    return (
        <div className="accordion-wrapper">
            <h6
                className={`accordion-title ${isOpenAccodion ? "open" : ""}`}
                onClick={() => setAccordion(!isOpenAccodion)}
            >
                {title}
            </h6>
            <div
                className={`accordion-item ${
                    !isOpenAccodion ? "collapsed" : ""
                }`}
            >
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
}

export default TrainerCard;
