import React, { useRef, useState } from "react";
//import Tick from "../../../../assets/files/FindTrainer/Tick 1.svg";
import Tick from '../../../../assets/files/FindTrainer/Tick 1.svg';
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import { Modal } from "react-responsive-modal";
import QMark from "../../../../assets/files/FindTrainer/Q Mark.svg";
import { Link } from "react-router-dom";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import "./styles.scss";
import "./stylesSetup.scss";

const SetupPrevModal = ({ open, setOpen, trainerdetailData }) => {
  const myRef = useRef(null);

  const closeIconModal = <img src={CloseIcon} alt="close" />;
  console.log(trainerdetailData);
  return (
    <div>
      {open ? (
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          center
          closeIcon={closeIconModal}
          container={myRef.current}
          styles={{
            boaderRadius: "10px",
          }}
          classNames={{
            modal: "customModal",
          }}
        >
          <div className="profile_main">
            <div className="profile_outter_container">
              <div className="profile_wrapper_container ">
                <div className="profile_header">
                  <div className="inner_profile container">
                    <img
                      src={trainerdetailData.profilePicture}
                      alt="Image not Added"
                    />

                    <div className="profile_header_inner">
                      <h2>
                        {trainerdetailData.firstName}{" "}
                        {trainerdetailData.lastName}
                      </h2>
                      <p>
                        {trainerdetailData.areaOfExpertise.toString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="profile_main_contents container">
                  <div className="profile_aside">
                    <div className="profile_aside_link">
                      <label>View Calender</label>
                      <img src={ArrowNext} alt="icon" />
                    </div>
                    <div className="profile_aside_items">
                      <div className="profile_aside_item">
                        <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                        <hr />
                        <div className="profile_aside_inner_item">
                          <h6>
                            {`$${trainerdetailData.oneOnOnePricing.virtualSession}`}
                            <span>(Virtual Session)</span>
                          </h6>
                          <h6>
                            {`$
                              ${trainerdetailData
                                .oneOnOnePricing
                                .inPersonAtTrainerLocation}`
                            }
                            <span>(In Person Session)</span>
                          </h6>
                          <h5>See package rates during checkout</h5>
                        </div>
                      </div>

                      {/* {trainerdetailData.socialSessionPricing &&
                                            (trainerdetailData
                                                .socialSessionPricing
                                                .inPeronAtTrainerLocationfor2People ||
                                                trainerdetailData
                                                    .socialSessionPricing
                                                    .inPeronAtTrainerLocationfor3People ||
                                                trainerdetailData
                                                    .socialSessionPricing
                                                    .inPeronAtTrainerLocationfor4People) ? ( */}
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

                        <div className="profile_aside_inner_item">
                          {/* {trainerdetailData.socialSessionPricing &&
                                                        trainerdetailData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor2People ? ( */}
                          <h6>

                            {`$${trainerdetailData
                              .socialSessionPricing
                              .inPeronAtTrainerLocationfor2People
                              }`
                            }
                            <span>/ Session (For 2 People)</span>
                          </h6>
                          {/* ) : null} */}
                          {/* {trainerdetailData.socialSessionPricing &&
                                                        trainerdetailData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor3People ? ( */}
                          <h6>
                            {`$${trainerdetailData
                              .socialSessionPricing
                              .inPeronAtTrainerLocationfor3People
                              }`}
                            <span>/ Session (For 3 People)</span>
                          </h6>
                          {/* ) : null} */}
                          {/* {trainerdetailData.socialSessionPricing &&
                                                        trainerdetailData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor4People ? ( */}
                          <h6>
                            {`$${trainerdetailData
                              .socialSessionPricing
                              .inPeronAtTrainerLocationfor4People}`
                            }
                            <span>/ Session (For 4 People)</span>
                          </h6>
                          {/* ) : null} */}
                        </div>
                      </div>
                      {/* ) : null} */}
                      {/* {trainerdetailData.classSessionPricing &&
                                            trainerdetailData
                                                .classSessionPricing
                                                .inPersonAtclientLocationfor15People ? ( */}
                      <div className="profile_aside_item">
                        <h2>
                          CREATE A CLASS
                          <img src={QMark} alt="icon" className="model_Qmark" />
                        </h2>
                        <hr />

                        <div className="profile_aside_inner_item">
                          <h6>

                            {`$${trainerdetailData &&
                              trainerdetailData.classSessionPricing
                              ? trainerdetailData
                                .classSessionPricing
                                .inPersonAtclientLocationfor15People
                              : ""}`}
                            <span>Flat Rate Class (For 5-15 People)</span>
                          </h6>
                          <h5>
                            If trainer offers Virtual Social Sessions and
                            Classes they will be at a discount to in person
                            rates above. You will see these prior to checkout.
                          </h5>
                        </div>
                      </div>
                      {/* ) : null} */}
                      <div className="profile_aside_item">
                        <h2>TRAINING LOCATIONS</h2>

                        <hr />
                        <div className="profile_aside_inner_item">
                          {trainerdetailData
                            .currentExperience
                            .workLocation ? (
                            <div className="profile_location">
                              <img src={Tick} alt="icon" />
                              <h4>

                                {
                                  trainerdetailData
                                    .currentExperience
                                    .workLocation
                                }
                              </h4>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="profile_location">
                            <img src={Tick} alt="icon" />
                            <h4>
                              Trainer’s Location <Link>View Location</Link>
                            </h4>
                          </div>
                          <div className="profile_location">
                            <img src={Tick} alt="icon" />
                            <h4>Your Location</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile_trainer_data">
                    <div className="profile_right_data">
                      <div className="profile_right_item1">
                        <h6>
                          {/* motto */}
                          {trainerdetailData.myMotto
                            ? trainerdetailData.myMotto
                            : "Motto not Added"}
                        </h6>
                      </div>
                      <div
                        className="profile_right_item2"
                        style={{
                          width: "40rem",
                        }}
                      >
                        <h4>About {trainerdetailData.firstName}</h4>
                        <p>
                          {/* desc */}
                          {trainerdetailData.trainingProcess
                            ? trainerdetailData.trainingProcess
                            : "Description not Added"}
                        </p>

                        <div className="profile_images">
                          {
                            trainerdetailData.images ? (
                              trainerdetailData.images.map((imgVal) => (
                                <img src={imgVal} alt="image1" />
                              ))
                            ) :
                              "NO IMAGES ADDED"
                          }
                        </div>
                      </div>
                      <div className="profile_right_item3 mb-5 pb-5">
                        <h2>Certifications</h2>
                        <div className="profile_item3_inner">
                          <div className="inner_items">
                            <img src={Tick} alt="check" />
                            <h6>
                              {trainerdetailData
                                .certification[0]
                                ? trainerdetailData
                                  .certification[0]
                                  .certification
                                : "Not Added"}
                              {/* certification 1 */}
                            </h6>
                          </div>
                          <div className="inner_items">
                            <img src={Tick} alt="check" />
                            <h6>
                              {/* certification2 */}
                              {trainerdetailData
                                .certification[1]
                                ? trainerdetailData
                                  .certification[1]
                                  .certification
                                : "Not Added"}
                            </h6>
                          </div>
                          <div className="inner_items">
                            <img src={Tick} alt="check" />
                            <h6>
                              {/* certification 3 */}
                              {trainerdetailData
                                .certification[2]
                                ? trainerdetailData
                                  .certification[2]
                                  .certification
                                : "Not Added"}
                            </h6>
                          </div>
                          <div className="inner_items">
                            <img src={Tick} alt="check" />
                            <h6>
                              {/* certification 4 */}
                              {trainerdetailData
                                .certification[3]
                                ? trainerdetailData
                                  .certification[3]
                                : "Not Added"}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default SetupPrevModal;
