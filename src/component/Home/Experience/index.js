import React, { Component } from "react";
import "./styles.scss";
import strength_img from "../../../assets/files/Home/Experience/Strength & HIIT Image.png";
import boxing_img from "../../../assets/files/Home/Experience/Boxing Image.png";
import yoga_img from "../../../assets/files/Home/Experience/Yoga Image.png";
import pilates_img from "../../../assets/files/Home/Experience/Pilates Image.png";
import svgBG from "../../../assets/files/Home/Experience/Oval Stamp.png";
import Icon1 from "../../../assets/files/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assets/files/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assets/files/Home/Experience/icon/Icon3.png";
import Icon4 from "../../../assets/files/Home/Experience/icon/Icon4.png";
import Icon5 from "../../../assets/files/Home/Experience/icon/Icon5.png";
import Icon6 from "../../../assets/files/Home/Experience/icon/Icon6.png";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import BlueHoverButton from "../../common/BlueArrowButton";

import { connect } from "react-redux";
import { trainerSearchFilters } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { history } from "helpers";
import moment from "moment";

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  payload = {
    location: "",
    city: "",
    trainingType: "",
    date: new Date(),
    availability: "",
    label: {
      availability: "",
      trainingType: "",
    },
  };

  render() {
    return (
      <div className="container">
        <div className="big_container">
          <div className="experience_upper_container">
            <div className="heading">
              Experience the Best Training in <br /> these Categories
            </div>
            <div className="image_Container row">
              <div className="image_strength_main col-lg-3 col-md-6 m-0">
                <img src={strength_img} alt="image" />
                <Link
                  onClick={() => {
                    let payload = {
                      location: "virtual",
                      city: "",
                      trainingType: encodeURIComponent(
                        JSON.stringify(["Strength & HIIT"])
                      ),
                      date: moment(new Date()).format("YYYY-MM-DD"),
                      availability: JSON.stringify([]),
                      label: {
                        availability: { label: "", value: "" },
                        trainingType: {
                          label: "Strength",
                          value: "Strength & HIIT",
                        },
                      },
                    };

                    this.props.trainerSearchFilters(payload);
                    history.push("/trainer/find");
                  }}
                  className="link_button"
                >
                  Strength
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main col-lg-3 col-md-6 m-0">
                <img src={boxing_img} alt="image" />
                <Link
                  onClick={() => {
                    let payload = {
                      location: "virtual",
                      city: "",
                      trainingType: encodeURIComponent(
                        JSON.stringify(["Boxing"])
                      ),
                      date: moment(new Date()).format("YYYY-MM-DD"),
                      availability: JSON.stringify([]),
                      label: {
                        availability: { label: "", value: "" },
                        trainingType: {
                          label: "Boxing",
                          value: "Boxing",
                        },
                      },
                    };

                    this.props.trainerSearchFilters(payload);
                    history.push("/trainer/find");
                  }}
                  className="link_button"
                >
                  Boxing
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main col-lg-3 col-md-6 m-0">
                <img src={yoga_img} alt="image" />
                <Link
                  onClick={() => {
                    let payload = {
                      location: "virtual",
                      city: "",
                      trainingType: encodeURIComponent(
                        JSON.stringify(["Yoga"])
                      ),
                      date: moment(new Date()).format("YYYY-MM-DD"),
                      availability: JSON.stringify([]),
                      label: {
                        availability: { label: "", value: "" },
                        trainingType: {
                          label: "Yoga",
                          value: "Yoga",
                        },
                      },
                    };

                    this.props.trainerSearchFilters(payload);
                    history.push("/trainer/find");
                  }}
                  className="link_button"
                >
                  Yoga
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main col-lg-3 col-md-6 m-0">
                <img src={pilates_img} alt="image" />
                <Link
                  onClick={() => {
                    let payload = {
                      location: "virtual",
                      city: "",
                      trainingType: encodeURIComponent(
                        JSON.stringify(["Pilates"])
                      ),
                      date: moment(new Date()).format("YYYY-MM-DD"),
                      availability: JSON.stringify([]),
                      label: {
                        availability: { label: "", value: "" },
                        trainingType: {
                          label: "Pilates",
                          value: "Pilates",
                        },
                      },
                    };

                    this.props.trainerSearchFilters(payload);
                    history.push("/trainer/find");
                  }}
                  className="link_button"
                >
                  Pilates
                  <ArrowHoverBlacked />
                </Link>
                <img src={svgBG} className="svgBG" alt="svg" />
              </div>
              <img src={svgBG} className="svgBGMobile" alt="svg" />
            </div>

            <div className="image_container_mobile">
              <div className="row">
                <div
                  onClick={() => {
                    history.push("/mobiles/filter");
                  }}
                  className="vertical"
                >
                  <img src={strength_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>STRENGTH</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    history.push("/mobiles/filter");
                  }}
                  className="vertical"
                >
                  <img src={boxing_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>BOXING</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  onClick={() => {
                    history.push("/mobiles/filter");
                  }}
                  className="vertical"
                >
                  <img src={yoga_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>YOGA</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    history.push("/mobiles/filter");
                  }}
                  className="vertical"
                >
                  <img src={pilates_img} alt="image" />

                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>PILATES</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
              </div>
              <div className="monogram">
                <img src={svgBG} className="svgBGMobile" alt="svg" />
              </div>
            </div>
          </div>
          {/* ------------------------------------personal--------------- */}

          <div className="personal_container">
            <div className="personal_trainer_description">
              <h2 className="heading">The Top Personal Trainer Marketplace</h2>
              <p className="discription">
                Your personal trainer marketplace for Strength & HIIT, Boxing,
                Yoga & Pilates. Train virtually from anywhere or locally in
                Motto markets.
              </p>
              <div className="link">
                <div className="button-text">
                  <Link to="/trainer/find" className="btn">
                    Find Your Best Match <BlueHoverButton />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_container_home">
              <ExperienceParent
                icon={Icon1}
                description="Discover only the top training talent"
              />
              <ExperienceParent
                icon={Icon4}
                description="A community of vetted personal trainers"
              />
              <ExperienceParent
                icon={Icon2}
                description="Personalized sessions to meet specific goals"
              />
              <ExperienceParent
                icon={Icon5}
                description="Save with cost-efficient social & group sessions "
              />
              <ExperienceParent
                icon={Icon3}
                description="Easy booking method & secure transactions "
              />
              <ExperienceParent
                icon={Icon6}
                description="Contactless & virtual training available"
              />

              <Link to="/trainer/find" className="btn find_your_trainer desk_">
                Find Your Best Match <BlueHoverButton />
              </Link>

              <Link
                to="/mobiles/filter"
                className="btn find_your_trainer mobile_"
              >
                Find Your Best Match <BlueHoverButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ExperienceParent = (props) => {
  return (
    <>
      <div className="flex-contents">
        <div className="image">
          <img src={props.icon} alt="icon" />
        </div>
        <p className="discription_home">{props.description}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerSearchFilters,
    },
    dispatch
  );
};

const _Experience = connect(null, mapDispatchToProps)(Experience);

export default _Experience;
