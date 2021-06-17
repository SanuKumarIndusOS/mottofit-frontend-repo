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
import "react-datepicker/dist/react-datepicker.css";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import SimpleReactValidator from "simple-react-validator";
import moment from "moment";
import validate from "service/validation";

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
    isLoading: false,
    errors: {},
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

  validationRules = () => {
    validate.validators.dateValidation = function (
      value,
      options,
      key,
      attributes
    ) {
      var maxDate = moment();
      maxDate = maxDate.subtract(options, "years");

      maxDate = maxDate.format("YYYY-MM-DD");

      let trainerDOB = moment(value).format("YYYY-MM-DD");

      let isTrainerValid = moment(trainerDOB).isBefore(maxDate);

      return isTrainerValid
        ? undefined
        : ["^Trainer should be atleast 21 years old"];
    };

    return {
      firstName: {
        presence: {
          allowEmpty: false,
          message: "^First name is required",
        },
        format: {
          pattern: /^[A-Za-z ]+$/,
          flags: "i",
          message: "^First name must contain only letters and spaces",
        },
      },
      DOB: {
        presence: {
          allowEmpty: false,
          message: "^Date of birth is required",
        },
        dateValidation: 21,
      },
      gender: {
        presence: {
          allowEmpty: false,
          message: "^Gender is required",
        },
      },
      location: {
        presence: {
          allowEmpty: false,
          message: "^Location is required",
        },
      },
      email: {
        presence: {
          allowEmpty: false,
          message: "^Email is required",
        },
        email: true,
      },
      phoneNumber: {
        presence: {
          allowEmpty: false,
          message: "^Phone number is required",
        },
        // format: {
        //   pattern: /^[1-9][0-9]*$/,
        //   flags: "i",
        //   message: "^Invalid number",
        // },
        length: {
          minimum: 8,
          tooShort: "^Invalid number",
          maximum: 15,
          tooLong: "^Invalid number",
        },
      },
    };
  };

  validateFields = (data) => {
    let fieldInvalidList = validate(data, this.validationRules());

    console.log(fieldInvalidList);

    if (fieldInvalidList !== undefined) {
      let errors = {
        ...fieldInvalidList,
      };

      this.setState({
        errors: {
          ...this.state.errors,
          ...fieldInvalidList,
        },
      });

      console.log(errors);

      // setErrors();
    }

    return !fieldInvalidList;
  };

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
      phoneNumber: phone.includes("+") ? phone : `+${phone}`,
      location,
      websiteLink: websiteURL,
      instagramProfile: instagram,
    };

    if (!this.validateFields(storeData)) return;

    // if (this.validator.allValid()) {
    this.setState({ isLoading: true });
    this.props
      .updateTrainerDetailsApicall(storeData)
      .then(() => {
        // this.validator.hideMessages();
        this.setState({ isLoading: false });
        history.push(`/trainer/background`);
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
    // } else {
    //   this.validator.showMessages();
    //   this.forceUpdate();
    // }
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.props.trainerDetail().then((data) => {
      this.setState({
        dob: data.DOB ? data.DOB : "",
        location: data.location ? data.location : "",
        email: data.email ? data.email : "",
        gender: data.gender ? data.gender : "",
        websiteURL: data.websiteLink ? data.websiteLink : "",
        phone: data.phoneNumber ? data.phoneNumber : "",
        instagram: data.instagramProfile ? data.instagramProfile : "",
        firstName: data.firstName ? data.firstName : "",
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
      isLoading,
      errors,
    } = this.state;

    var maxDate = moment();
    maxDate = maxDate.subtract(21, "years");

    maxDate = maxDate.format("YYYY-MM-DD");

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
                  {errors.firstName && <span>{errors.firstName[0]}</span>}
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
                  </div>
                  {errors.location && <span>{errors.location[0]}</span>}
                </div>
                <div className="wrapper_innerInput">
                  <label>Date of Birth*</label>
                  <input
                    placeholder="DD/MM/YYYY"
                    type="date"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    // placeholder="MM/DD/YYYY"
                    value={dob}
                    onChange={(e) => this.handleInput(e)}
                    name="dob"
                    min="1900-01-01"
                    max={maxDate}
                    // onKeyDown={(e) =>
                    //   e.keyCode !== 8 ? e.preventDefault() : ""
                    // }
                  />
                  {errors.DOB && <span>{errors.DOB[0]}</span>}
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
                  </div>
                  {errors.gender && <span>{errors.gender[0]}</span>}
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
                  {errors.email && <span>{errors.email[0]}</span>}
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

                  {errors.phoneNumber && <span>{errors.phoneNumber[0]}</span>}
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
                    disabled={isLoading}
                    className="d-flex justify-content-center"
                  >
                    {isLoading ? (
                      "Loading..."
                    ) : (
                      <>
                        Continue
                        <ArrowHoverBlacked />
                      </>
                    )}
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
