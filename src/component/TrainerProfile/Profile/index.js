import React, { useState, useRef } from "react";
import "./styles.scss";
import Profile from "../../../assets/files/FindTrainer/Profile Picture.png";
import { Link } from "react-router-dom";
import Tick from "../../../assets/files/FindTrainer/Tick 1.svg";
import Share from "../../../assets/files/FindTrainer/share.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./model.scss";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import QMark from "../../../assets/files/FindTrainer/Q Mark.svg";
import Quote from "../../../assets/files/FindTrainer/Quote Icon.svg";

const closeIcon = <img src={CloseIcon} alt="close" />;

const TrainerProfile =  () => {
  const [open, setOpen] = useState(false);
  const myRef = useRef(null);
  const [openClassModel, setOpenClassModel] = useState(false);

  return (
    <>
      <div className="profile_outter_container">
        <div className="container">
          <div className="profile_wrapper_container">
            <div className="profile_header">
              <img src={Profile} alt="picture" />
              <div className="profile_header_inner">
                <h2>John Papa</h2>
                <p>PILATES, STRENGTH & HIIT</p>
              </div>
              <div className="profile_header_link">
                <Link to="/">Back</Link>
              </div>
            </div>
            <div className="profile_main_contents">
              <div className="profile_aside">
                <div className="profile_aside_link">
                  <Link to="/">View Calender</Link>
                </div>
                <div className="profile_aside_items">
                  <div className="profile_aside_item">
                    <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                    <hr />
                    <div className="profile_aside_inner_item">
                      <h6>
                        $45 <span>(Virtual Session)</span>
                      </h6>
                      <h6>
                        $150 <span>(In Person Session)</span>
                      </h6>
                      <h5>See package rates during checkout</h5>
                    </div>
                  </div>
                  <div className="profile_aside_item">
                    <h2>
                      SOCIAL SESSIONS{" "}
                      <img
                        src={QMark}
                        alt="icon"
                        onClick={() => setOpen(true)}
                        className="model_Qmark"
                      />
                    </h2>
                    <hr />
                    {/* model */}
                    {open ? (
                      <Modal
                        open={open}
                        onClose={() => setOpen(false)}
                        center
                        closeIcon={closeIcon}
                        container={myRef.current}
                        styles={{
                          boaderRadius: "10px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            height: "300px",
                            width: "600px",
                            padding: "2em",
                          }}
                          className="model_styles"
                        >
                          <h2>Want to Train with Friends?</h2>
                          <p>
                            Make your workout social & fun, while saving money!
                            Complete your payment and add friends to your
                            session simply by sending them an invite. Once they
                            accept your invite, your session rate will
                            automatically be adjusted.
                          </p>
                        </div>
                      </Modal>
                    ) : null}
                    <div className="profile_aside_inner_item">
                      <h6>
                        $65 <span>/ Session (For 2 People)</span>
                      </h6>
                      <h6>
                        $50 <span>/ Session (For 3 People)</span>
                      </h6>
                      <h6>
                        $25 <span>/ Session (For 4 People)</span>
                      </h6>
                    </div>
                  </div>
                  <div className="profile_aside_item">
                    <h2>
                      CREATE A CLASS
                      <img
                        src={QMark}
                        alt="icon"
                        onClick={() => setOpenClassModel(true)}
                        className="model_Qmark"
                      />
                    </h2>
                    <hr />
                    {/* model */}
                    {openClassModel ? (
                      <Modal
                        open={openClassModel}
                        onClose={() => setOpenClassModel(false)}
                        center
                        closeIcon={closeIcon}
                        container={myRef.current}
                        styles={{
                          boaderRadius: "10px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            height: "300px",
                            width: "600px",
                            padding: "2em",
                          }}
                          className="model_styles"
                        >
                          <h2>Want to Create a Class?</h2>
                          <p>
                            Design your very own workout party with the vertical
                            & location of your choice. Create a class by paying
                            a flat rate and adding up to 19 friends. You will be
                            notified once they accept your invite.
                          </p>
                        </div>
                      </Modal>
                    ) : null}
                    <div className="profile_aside_inner_item">
                      <h6>
                        $200 <span>Flat Rate Class (For 5-15 People)</span>
                      </h6>
                      <h5>
                        If trainer offers Virtual Social Sessions and Classes
                        they will be at a discount to in person rates above. You
                        will see these prior to checkout.
                      </h5>
                    </div>
                  </div>
                  <div className="profile_aside_item">
                    <h2>TRAINING LOCATIONS</h2>

                    <hr />
                    <div className="profile_aside_inner_item">
                      <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>Virtual</h4>
                      </div>
                      <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>
                          Trainer’s Location <Link to="/">View Location</Link>
                        </h4>
                      </div>
                      <div className="profile_location">
                        <img src={Tick} alt="icon" />
                        <h4>Your Location</h4>
                      </div>
                      <div className="profile_share">
                        <img src={Share} alt="icon" />
                        <Link to="/">Share Profile</Link>
                      </div>
                    </div>
                  </div>
                  <button>
                    Book a session <ArrowHoverBlacked />
                  </button>
                </div>
              </div>
              <div className="profile_trainer_data">
                <div className="profile_right_data">
                  <div className="profile_right_item1">
                    <img src={Quote} alt="qoute" />
                    <h6>
                      This trainers motto can go over here. Lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed di nonumy
                      eirmod tempor invidunt ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos et accusam.
                    </h6>
                  </div>
                  <div className="profile_right_item2">
                    <h4>About Jane</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren, no sea takimata
                      sanctus est Lorem ipsum dolor sit.
                    </p>

                    <div className="profile_images">
                      <div className="profile_images_container">
                        <div className="profile_images_card">1</div>
                        <div className="profile_images_card">2</div>
                        <div className="profile_images_card">3</div>
                        <div className="profile_images_card">4</div>
                      </div>
                    </div>
                  </div>
                  <div className="profile_right_item3">
                    <h2>Certifications</h2>
                    <div className="profile_item3_inner">
                      <div className="inner_items">
                        <img src={Tick} alt="check" />
                        <h6>Certification 1 goes here</h6>
                      </div>
                      <div className="inner_items">
                        <img src={Tick} alt="check" />
                        <h6>Certification 1 goes here</h6>
                      </div>
                      <div className="inner_items">
                        <img src={Tick} alt="check" />
                        <h6>Certification 1 goes here</h6>
                      </div>
                      <div className="inner_items">
                        <img src={Tick} alt="check" />
                        <h6>Certification 1 goes here</h6>
                      </div>
                    </div>
                  </div>
                  <div className="profile_right_item4">
                    <h2>Jane’s Schedule </h2>
                    <div className="profile_event_schedular">
                      Event schedular in pending
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerProfile;
