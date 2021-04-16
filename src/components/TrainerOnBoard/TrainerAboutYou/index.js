import React, { useState } from "react";
import "./styles.scss";
import Instagram from "../../../assets/SVG/Insta Icon.svg";
import Web from "../../../assets/SVG/Web Icon.svg";
import DropDown from "../../../assets/SVG/Drop Down 4.svg";
import { Link, NavLink, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";

const AboutTrainer = () => {
  //   const [location, setLocation] = useState("");
  //   const [dob, setDob] = useState(0 - 0 - 0);
  //   const [email, setEmail] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [websiteURL, setWebsiteURL] = useState("");
  //   const [instagram, setInstagram] = useState("");

  const [aboutTrainerData, setAboutTrainerData] = useState({
    location: "",
    dob: "",
    email: "",
    gender: "",
    phone: "",
    websiteURL: "",
    instagram: "",
  });

  const history = useHistory();

  const handleTrainerBackground = () => {
    console.log(aboutTrainerData);
    // history.push("/trainerbackground");
  };

  return (
    <>
      <div className="container main">
        <div className="wrapper_about">
          <h2>Tell us a little bit about you</h2>
          <p>
            *Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the. *All these fields are mandatory.{" "}
          </p>
          <div className="">
            <form className="wrapper_inputs">
              <div className="wrapper_innerInput">
                <label>Name*</label>
                <input placeholder="Name" type="name" />
              </div>

              <div className="wrapper_innerInput">
                <label>Location*</label>
                <input
                  placeholder="Location"
                  type="name"
                  value={aboutTrainerData.location}
                  onChange={(e) =>
                    setAboutTrainerData({
                      ...aboutTrainerData,
                      location: e.target.value,
                    })
                  }
                />
              </div>
              <div className="wrapper_innerInput">
                <label>Date of Birth*</label>
                <input
                  placeholder="DOB"
                  type="date"
                  value={aboutTrainerData.dob}
                  onChange={(e) =>
                    setAboutTrainerData({
                      ...aboutTrainerData,
                      dob: e.target.value,
                    })
                  }
                />
              </div>
              <div className="wrapper_innerInput">
                <label>Gender*</label>
                <div className="iconwrapper">
                  <select
                    required
                    // name="gender"
                    // id="gender"
                    value={aboutTrainerData.gender}
                    onChange={(e) =>
                      setAboutTrainerData({
                        ...aboutTrainerData,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      Select your Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                  <img src={DropDown} alt="icon" />
                </div>
              </div>
              <div className="wrapper_innerInput">
                <label>Email*</label>
                <input
                  placeholder="Email"
                  type="email"
                  value={aboutTrainerData.email}
                  onChange={(e) =>
                    setAboutTrainerData({
                      ...aboutTrainerData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="wrapper_innerInput">
                <label>Phone*</label>
                <input
                  placeholder="Phone Number"
                  type="phone"
                  value={aboutTrainerData.phone}
                  onChange={(e) =>
                    setAboutTrainerData({
                      ...aboutTrainerData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="wrapper_innerInput">
                <label>Website</label>
                <div className="iconwrapper">
                  <input
                    placeholder="Add your website"
                    type="text"
                    value={aboutTrainerData.websiteURL}
                    onChange={(e) =>
                      setAboutTrainerData({
                        ...aboutTrainerData,
                        websiteURL: e.target.value,
                      })
                    }
                  />
                  <img src={Web} alt="icon" />
                </div>
              </div>
              <div className="wrapper_innerInput">
                <label>Instagram</label>
                <div className="iconwrapper">
                  <input
                    placeholder="Add yor Instagram Handle"
                    type="text"
                    value={aboutTrainerData.instagram}
                    onChange={(e) =>
                      setAboutTrainerData({
                        ...aboutTrainerData,
                        instagram: e.target.value,
                      })
                    }
                  />
                  <img src={Instagram} alt="icon" />
                </div>
              </div>

              <div className="submit_button">
             
                <Link
                  type="submit"
                  onClick={handleTrainerBackground}
                  to={{
                    pathname: "/trainerbackground",
                    state: aboutTrainerData,
                  }}
                >
                  Continue
                  <ArrowHoverBlacked />
                  {/* <ArrowBlackHover /> */}
                </Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTrainer;
