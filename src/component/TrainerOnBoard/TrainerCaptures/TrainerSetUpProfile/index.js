import React, { useState, useEffect, useRef } from "react";
import ImageBG from "../../../../assets/files/SVG/Image 1.svg";
import PaymentSection from "./SetUpPaymentSection/index";
import "./styles.scss";
import Instagram from "../../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../../assets/files/SVG/Web Icon.svg";
import Youtube from "../../../../assets/files/SVG/Youtube.svg";
import Location from "../../../../assets/files/SVG/Location Icon.svg";
import ArrowBack from "../../../../assets/files/SVG/Arrow Back.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";

import Footer from "../../../common/Footer/index";

const TrainerSetUpProfile = () => {
  const data = {
    heading: "Build out the rest of your Profile!",
    describe:
      "Your trainer profile is what clients will see when they click on your trainer card while filtering results. The below information and training settings can be changed at any time.",
    motto: "What’s your Motto?",
    tellUs: "Tell us about you and describe your training process",
    showcase: "Throw in some photos showcasing you & your skills",
    certificate: "Certifications you’d like to display",
    where: "Where will you br training",
    serviceable: "Serviceable Location",
    location: "Location",
    web: "Website",
    insta: "Instagram",
    youtube: "Youtube",
  };

  const [imageFields, setImageFields] = useState([
    {
      image: "",
    },
  ]);
  const [inputCertificatesFields, setInputCertificatesFields] = useState([
    {
      certificate: "",
      year: "",
      upload: "",
    },
  ]);

  const handleAddFields = () => {
    setImageFields([...imageFields, { image: "" }]);
  };
  const handleAddCertificateFields = () => {
    setInputCertificatesFields([
      ...inputCertificatesFields,
      { certificate: "", year: "", upload: "" },
    ]);
  };
  const handleChangeCertificateInput = (index, event) => {
    const values = [...inputCertificatesFields];
    values[index][event.target.name] = event.target.value;
    setInputCertificatesFields(values);
  };
  return (
    <>
      <div>
        <div className="setup_container container">
          <div className="setup_link">
            <img src={ArrowBack} alt="icon" />
            <div className="inner_link">
              <Link to="/trainer-card"> Edit Trainer Card </Link>
              <div></div>
            </div>
          </div>
          <div className="setup_headings">
            <h2>{data.heading}</h2>
            <p>{data.describe}</p>
          </div>
          <div className="setup_wrapper">
            <div className="setup_formInner container">
              <form>
                <div className="setup_card1">
                  <h6>{data.motto}</h6>
                  <textarea
                    type="text"
                    name="comment"
                    placeholder="Share the words you live or train by in 250 characters or less"
                  />
                </div>
                <div className="setup_card2">
                  <h6>{data.tellUs}</h6>
                  <textarea
                    type="text"
                    name="comment"
                    placeholder="Tell clients everything you think they should know! Utilize Key words as anything you write here
                                        will be searchable through our search bar"
                  />
                </div>
                <div className="setup_card3">
                  <h6>{data.showcase}</h6>
                  <div className="read_image">
                    {imageFields.map((index, input) => {
                      return (
                        <div key={index} className="render_image">
                          <ImageReander value={input.image} />
                          <ImageReander value={input.image} />
                          <ImageReander value={input.image} />
                          <ImageReander value={input.image} />
                          <ImageReander value={input.image} />
                        </div>
                      );
                    })}
                    <h5 onClick={() => handleAddFields()}>
                      + Add More Image's
                    </h5>
                  </div>
                </div>
                <div className="setup_card4">
                  <h6>{data.certificate}</h6>
                  {inputCertificatesFields.map(
                    (inputCertificatesField, index) => (
                      <div className="inputs_certificate" key={index}>
                        <input
                          type="text"
                          placeholder="Certification Title"
                          value={inputCertificatesField.certificate}
                          name="certificate"
                          onChange={(event) =>
                            handleChangeCertificateInput(index, event)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Year you were Certified"
                          value={inputCertificatesField.year}
                          name="year"
                          onChange={(event) =>
                            handleChangeCertificateInput(index, event)
                          }
                        />
                        {/* <input
                          type="file"
                          name="file"
                          value={inputCertificatesField.upload}
                          onChange={(event) =>
                            handleChangeCertificateInput(index, event)
                          }
                          className="custom-file-input"
                        />
                        <a className="checkarrow">
                          <ArrowHover />
                        </a> */}
                      </div>
                    )
                  )}
                  <h5 onClick={handleAddCertificateFields}>
                    + Add Certification
                  </h5>
                </div>
                <div className="setup_card5">
                  <div className="setupcontent_wrapper">
                    <div className="setup_item">
                      <h6>{data.where}</h6>
                      <div className="inputs_platform">
                        <button>Virtual</button>
                        <button>In Person</button>
                        <button>Outdoors</button>
                      </div>
                    </div>
                    <div className="setup_item1">
                      <h6>{data.serviceable}</h6>
                      <div className="inputs_platform">
                        <div className="iconwrapper">
                          <input
                            type="text"
                            placeholder="List all areas that you will service"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="setup_item1">
                      <h6>{data.location}</h6>
                      <div className="inputs_platform">
                        <div className="iconwrapper">
                          <input
                            type="number"
                            placeholder="Select your Location"
                          />
                          <img src={Location} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="setup_item1">
                      <h6>{data.web}</h6>
                      <div className="inputs_platform">
                        <div className="iconwrapper">
                          <input type="text" placeholder="Add your Web Link" />
                          <img src={Web} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="setup_item1">
                      <h6>{data.insta}</h6>
                      <div className="inputs_platform">
                        <div className="iconwrapper">
                          <input
                            type="text"
                            placeholder="Add your Instagram Handle"
                          />
                          <img src={Instagram} alt="icon" />
                        </div>
                      </div>
                    </div>
                    <div className="setup_item1">
                      <h6>{data.youtube}</h6>
                      <div className="inputs_platform">
                        <div className="iconwrapper">
                          <input
                            type="text"
                            placeholder="Add your Youtube Channel"
                          />
                          <img src={Youtube} alt="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PaymentSection />
                <div className="submit_button">
                  <button
                    // onClick={handleChangeToTrainerProfile}
                    type="submit"
                  >
                    <a>
                      {" "}
                      Continue to account
                      <ArrowHoverBlacked />
                    </a>
                    {/* <img src={Arrow} alt="icon" /> */}
                  </button>
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

const ImageReander = () => {
  const [image, setImage] = useState();
  const [previewImage, setPreviewTmage] = useState();
  const fileInputRef = useRef();

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
  return (
    <>
      <div className="renderImage">
        {previewImage ? (
          <img
            src={previewImage}
            style={{
              objectFit: "cover",
              width: "180px",
              height: "180px",
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
                // src={Profile}
                src={ImageBG}
                alt="icon"
                style={{
                  objectFit: "cover",
                  width: "180px",
                  height: "180px",
                }}
              />
            </button>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </div>
    </>
  );
};

export default TrainerSetUpProfile;
