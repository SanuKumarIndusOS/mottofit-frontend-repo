import React, { Component } from "react";
import "./styles.scss";
import Instagram from "../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../assets/files/SVG/Web Icon.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import {
  updateTrainerDetailsApicall,
  getTrainerDetails,
} from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { history } from "helpers";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { trainerDetail } from "action/trainerAct";
import "./dropdown.scss";
import "react-datepicker/dist/react-datepicker.css";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import SimpleReactValidator from "simple-react-validator";
import moment from "moment";

const locations = [
  {
    label: "New York City",
    value: "New York City",
  },
  {
    label: "Miami",
    value: "Miami",
  },
  {
    label: "Hamptons",
    value: "Hamptons",
  },
  {
    label: "Palm Beach",
    value: "Palm Beach",
  },
];

const genderList = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];
class AboutTrainerFC extends Component {
  state = {
    dob: "",
    location: "",
    email: "",
    gender: "",
    websiteURL: "",
    phone: "",
    instagram: "",
    firstName: "",
  };

  //validation
  validator = new SimpleReactValidator({
    messages: {
      email: "Invalid Email address",
    },
    element: (message) => (
      <span className="error-message text-danger fs-14">{message}</span>
    ),
    autoForceUpdate: this,
    validators: {
      email: {
        message: "must be a valid Email.",
        rule: (val, params, validator) => {
          return validator.helpers.testRegex(
            val,
            /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
          );
        },
        messageReplace: (message, params) =>
          message.replace("", this.helpers.toSentence(params)),
        required: true,
      },
    },
  });

  handleTrainerBackground = async (e) => {
    e.preventDefault();
    let {
      dob,
      location,
      email,
      gender,
      websiteURL,
      phone,
      instagram,
      firstName,
    } = this.state;
    const storeData = {
      firstName,
      DOB: dob,
      email,
      gender,
      phone,
      location,
      websiteLink: websiteURL,
      instaHandle: instagram,
    };

    if (this.validator.allValid()) {
      this.props.updateTrainerDetailsApicall(storeData).then(() => {
        history.push(`/trainer/background`);
      });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.props.trainerDetail().then((data) => {
      this.setState({
        dob: data.DOB || "",
        location: data.location || "",
        email: data.email || "",
        gender: data.gender || "",
        websiteURL: data.websiteLink || "",
        phone: data.phoneNumber || "",
        instagram: data.instagramProfile || "",
        firstName: data.firstName,
      });
    });
  }
  render() {
    let {
      dob,
      location,
      email,
      gender,
      websiteURL,
      phone,
      instagram,
      firstName,
    } = this.state;
    return (
      <>
        <div className="container main">
          <div className="wrapper_about">
            <h2>Tell us a little bit about you</h2>
            <br></br>
            <div className="outter_form">
              <div className="wrapper_inputs">
                <div className="wrapper_innerInput">
                  <label>Name*</label>
                  <input
                    placeholder="Name"
                    style={{ textTransform: "capitalize" }}
                    onChange={(e) => this.handleInput(e)}
                    value={firstName}
                    name="firstName"
                  />
                  {this.validator.message(
                    "firstName",
                    firstName,
                    "required|alpha_space"
                  )}
                </div>

                <div className="wrapper_innerInput">
                  <label className="bg_down">Location*</label>
                  <div className="iconwrapper">
                    <NormalMultiSelect
                      placeholder="Select Your City"
                      value={location}
                      arrow={true}
                      name="location"
                      options={locations}
                      handleChange={(e) => this.handleInput(e)}
                    />
                    {this.validator.message("location", location, "required")}
                  </div>
                </div>
                <div className="wrapper_innerInput">
                  <label>Date of Birth*</label>
                  <input
                    placeholder="DD/MM/YYYY"
                    type="date"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    placeholder="MM/DD/YYYY"
                    value={dob}
                    onChange={(e) => this.handleInput(e)}
                    name="dob"
                  />
                  {this.validator.message("dob", dob, "required")}
                  {dob && moment().diff(dob, "years", false) <= 21 && (
                    <span>Trainer should be more than 21 years of age</span>
                  )}
                </div>
                <div className="wrapper_innerInput">
                  <label>Select Your Gender*</label>
                  <div className="iconwrapper">
                    <NormalMultiSelect
                      placeholder="Select Gender"
                      value={gender}
                      arrow={true}
                      name="gender"
                      options={genderList}
                      handleChange={(e) => this.handleInput(e)}
                    />
                    {this.validator.message("gender", gender, "required")}
                  </div>
                </div>
                <div className="wrapper_innerInput">
                  <label>Email*</label>
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => this.handleInput(e)}
                    name="email"
                  />
                  {this.validator.message("email", email, "required|email")}
                </div>
                <div className="wrapper_innerInput">
                  <label>Phone*</label>

                  <ReactPhoneInput
                    type="phone"
                    disableDropdown
                    disableAreaCodes
                    countryCodeEditable={false}
                    value={phone}
                    placeholder="Phone Number"
                    // country="us"
                    inputProps={{
                      name: "phone",
                    }}
                    name="phoneNumber"
                    onChange={(e) => {
                      this.setState({
                        phone: e,
                      });
                    }}
                  />
                  {this.validator.message("phone", phone, "required|phone")}
                </div>

                <div className="wrapper_innerInput">
                  <label>Website</label>
                  <div className="iconwrapper">
                    <input
                      placeholder="Add your weblink"
                      type="text"
                      value={websiteURL}
                      name="websiteURL"
                      onChange={(e) => this.handleInput(e)}
                    />
                    <img src={Web} alt="icon" />
                  </div>
                </div>
                <div className="wrapper_innerInput">
                  <label>Instagram</label>
                  <div className="iconwrapper">
                    <input
                      placeholder="Add your Instagram Handle"
                      type="text"
                      value={instagram}
                      name="instagram"
                      onChange={(e) => this.handleInput(e)}
                    />
                    <img src={Instagram} alt="icon" />
                  </div>
                </div>

                <div className="submit_button">
                  <button
                    type="submit"
                    onClick={(e) => this.handleTrainerBackground(e)}
                  >
                    Continue
                    <ArrowHoverBlacked />
                  </button>
                </div>
              </div>
            </div>
            <img src={WaterMark} alt="icon" className="about_watermark" />
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetailsApicall,
      getTrainerDetails,
      trainerDetail,
    },
    dispatch
  );
};

const AboutTrainer = connect(null, mapDispatchToProps)(AboutTrainerFC);

export default AboutTrainer;
