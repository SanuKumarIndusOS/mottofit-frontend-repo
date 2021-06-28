import React, { useRef, useState } from "react";
//import Tick from "../../../../assets/files/FindTrainer/Tick 1.svg";
import Tick from "../../../../assets/files/FindTrainer/Tick 1.svg";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import { Modal } from "react-responsive-modal";
import QMark from "../../../../assets/files/FindTrainer/Q Mark.svg";
import { Link } from "react-router-dom";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import "./styles.scss";
import "./stylesSetup.scss";
import Profile from "../../../../assets/files/FindTrainer/Profile Picture.png";
import NotFoundImage from "../../../../assets/files/FindTrainer/NoImageFound.png";

const SetupPrevModal = ({
  open,
  setOpen,
  trainerdetailData,
  trainerSetupData,
}) => {
  const myRef = useRef(null);

  const [trainerLocationModal, setTrainerLocationModal] = useState(false);

  const closeIconModal = (
    <img src={CloseIcon} alt="close" className="close_setup" />
  );

  const {
    virtualSession = "",
    inPersonAtClientLocation = "",
    inPersonAtTrainerLocation = "",
  } = trainerdetailData?.oneOnOnePricing || {};

  const {
    virtualSessionfor2People = "",
    virtualSessionfor3People = "",
    virtualSessionfor4People = "",
    inPeronAtClientLocationfor2People = "",
    inPeronAtClientLocationfor3People = "",
    inPeronAtClientLocationfor4People = "",
    inPeronAtTrainerLocationfor2People = "",
    inPeronAtTrainerLocationfor3People = "",
    inPeronAtTrainerLocationfor4People = "",
  } = trainerdetailData.socialSessionPricing || {};

  const {
    virtualSessionfor15People = "",
    inPersonAtclientLocationfor15People = "",
    inPersonAttrainerLocationfor15People = "",
  } = trainerdetailData.classSessionPricing || {};

  const isAnyOneonOnePriceAvailable = [
    virtualSession,
    inPersonAtClientLocation,
    inPersonAtTrainerLocation,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  const isAnySocialPriceAvailable = [
    virtualSessionfor2People,
    virtualSessionfor3People,
    virtualSessionfor4People,
    inPeronAtClientLocationfor2People,
    inPeronAtClientLocationfor3People,
    inPeronAtClientLocationfor4People,
    inPeronAtTrainerLocationfor2People,
    inPeronAtTrainerLocationfor3People,
    inPeronAtTrainerLocationfor4People,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  const isAnyClassPriceAvailable = [
    virtualSessionfor15People,
    inPersonAtclientLocationfor15People,
    inPersonAttrainerLocationfor15People,
  ].some((price) => price !== "" && parseFloat(price) > 0);

  const { certification = [] } = trainerdetailData;

  let tempCertificate = certification?.filter(
    (data) => data.certificate !== ""
  );
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
                      <p>{trainerdetailData?.areaOfExpertise?.toString()}</p>
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
                      {isAnyOneonOnePriceAvailable ? (
                        <div className="profile_aside_item">
                          <h2>1 ON 1 INDIVIDUAL TRAINING</h2>
                          <hr />
                          <div className="profile_aside_inner_item">
                            {virtualSession ? (
                              <h6>
                                {`$${virtualSession} `}
                                <span>(Virtual Session)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPersonAtClientLocation ? (
                              <h6>
                                {`$${inPersonAtClientLocation} `}
                                <span>(In Person Session)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPersonAtTrainerLocation ? (
                              <h6>
                                {`$${inPersonAtTrainerLocation} `}
                                <span>(Trainer Location)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            <h5>See package rates during checkout</h5>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {isAnySocialPriceAvailable ? (
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
                            {virtualSessionfor2People ? (
                              <h6>
                                {`$${virtualSessionfor2People} `}
                                <span>/ Session (Virtual For 2 People)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor2People ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor2People} `}
                                <span>(In person session for 2 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor2People ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor2People} `}
                                <span>(In trainer location for 2 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {virtualSessionfor3People ? (
                              <h6>
                                {`$${virtualSessionfor3People} `}
                                <span>/ Session (Virtual For 3 People)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor3People ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor3People} `}
                                <span>(In person session for 3 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor3People ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor3People} `}
                                <span>(In trainer location for 3 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {virtualSessionfor4People ? (
                              <h6>
                                {`$${virtualSessionfor4People} `}
                                <span>/ Session (Virtual For 4 People)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtClientLocationfor4People ? (
                              <h6>
                                {`$${inPeronAtClientLocationfor4People} `}
                                <span>(In person session for 4 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPeronAtTrainerLocationfor4People ? (
                              <h6>
                                {`$${inPeronAtTrainerLocationfor4People} `}
                                <span>(In trainer location for 4 people)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {isAnyClassPriceAvailable ? (
                        <div className="profile_aside_item">
                          <h2>
                            CREATE A CLASS
                            <img
                              src={QMark}
                              alt="icon"
                              className="model_Qmark"
                            />
                          </h2>
                          <hr />

                          <div className="profile_aside_inner_item">
                            {virtualSessionfor15People ? (
                              <h6>
                                {`$${virtualSessionfor15People} `}
                                <span>Flat Rate Class (For 5-15 People)</span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPersonAtclientLocationfor15People ? (
                              <h6>
                                {`$${inPersonAtclientLocationfor15People} `}
                                <span>
                                  (In Person Session) (For 5-15 People)
                                </span>
                              </h6>
                            ) : (
                              ""
                            )}
                            {inPersonAttrainerLocationfor15People ? (
                              <h6>
                                {`$${inPersonAttrainerLocationfor15People} `}
                                <span>
                                  (Trainer Location) (For 5-15 People)
                                </span>
                              </h6>
                            ) : (
                              ""
                            )}
                            <h5>
                              If trainer offers Virtual Social Sessions and
                              Classes they will be at a discount to in person
                              rates above. You will see these prior to checkout.
                            </h5>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      <div className="profile_aside_item">
                        <h2>TRAINING LOCATIONS</h2>

                        <hr />
                        <div className="profile_aside_inner_item">
                          {trainerdetailData?.preferedTrainingMode ? (
                            <div className="profile_location">
                              <img src={Tick} alt="icon" />
                              <h4>
                                {trainerdetailData?.preferedTrainingMode?.toString()}
                              </h4>
                            </div>
                          ) : (
                            ""
                          )}
                          {/* <div className="profile_location">
                            <img src={Tick} alt="icon" />
                            <h4>
                              Trainer’s Location <Link>View Location</Link>
                            </h4>
                          </div> */}
                          <div className="profile_location">
                            <img src={Tick} alt="icon" />
                            <h4>
                              {trainerdetailData && trainerdetailData.location
                                ? trainerdetailData.location
                                : "Not Added"}
                              <Link
                                onClick={() => {
                                  setTrainerLocationModal(true);
                                }}
                              >
                                View Location
                              </Link>
                            </h4>
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
                          {trainerSetupData.motto
                            ? trainerSetupData.motto
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
                          <ImageGrid trainerProfileData={trainerdetailData} />
                        </div>
                      </div>
                      <div className="profile_right_item3 mb-5 pb-5">
                        <h2>Certifications</h2>
                        <div className="profile_item3_inner">
                          {tempCertificate.length > 0 ? (
                            <>
                              {tempCertificate.map(({ certificate }, index) => (
                                <div
                                  className="inner_items"
                                  key={`${certificate}_${index}`}
                                >
                                  <img src={Tick} alt="check" />
                                  <h6>{certificate}</h6>
                                </div>
                              ))}
                            </>
                          ) : (
                            <p>Not Added</p>
                          )}
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

      {trainerLocationModal ? (
        <Modal
          open={trainerLocationModal}
          onClose={() => {
            setTrainerLocationModal(false);
          }}
          center
          closeIcon={<img src={CloseIcon} alt="close" />}
          styles={{
            boaderRadius: "10px",
          }}
        >
          <div className="model_styles modal-heading">
            <h2>Trainer's Locations</h2>
            <p>
              {trainerdetailData?.trainingFacilityLocation ||
                "No trainer locations"}
            </p>
            {/* {trainingVenue?.label === "Trainer's Location" ? (
              ) : (
                <p>
                  {trainerProfileData?.serviceableNeighbourHood ||
                    "No neighbourhood locations"}
                </p>
              )} */}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

const ImageGrid = ({ trainerProfileData }) => {
  const [imageView, setImageView] = useState([
    {
      image: NotFoundImage,
    },
  ]);
  const handleViewImages = () => {
    setImageView([...imageView, { image: Profile }]);
  };

  const { images = [] } = trainerProfileData;
  return (
    <>
      <div className="profile_images_grid">
        {/* {images.map((img, index) => {
          return ( */}
        <div>
          {/* {images?.length > 0 ? ( */}
          <div className="profile_images_container">
            {images[0] && (
              <div className="profile_images_card box1">
                <img
                  src={images[0] || imageView[0]?.image}
                  alt="picture"
                  className="box1"
                  onError={(e) => {
                    e.target.src = imageView[0]?.image;
                  }}
                />
              </div>
            )}
            <div className="flex-try-2">
              {images[1] && (
                <div className="profile_images_card box2">
                  <img
                    src={images[1] || imageView[0]?.image}
                    alt="picture"
                    className="box2"
                  />
                </div>
              )}

              <div className="flex-try-3">
                {images[2] && (
                  <div className="profile_images_card box3">
                    <img
                      src={images[2] || imageView[0]?.image}
                      alt="Not Added"
                      className="box3"
                    />
                  </div>
                )}

                {images[3] && (
                  <div className="profile_images_card box4">
                    <img
                      src={images[3] || imageView[0]?.image}
                      alt="picture"
                      className="box4"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {images.length === 0 && <p>Images Not Added</p>}
          {/* ) : (
                "Image's Not Added" */}
          {/* )} */}
        </div>
        {/* ); })} */}
      </div>
      {trainerProfileData &&
      trainerProfileData.images &&
      trainerProfileData.images[4] ? (
        <div className="image_more" onClick={() => handleViewImages()}>
          <h5>View More Images</h5>
          <img src={ArrowNext} ali="icon" />
        </div>
      ) : null}
    </>
  );
};

export default SetupPrevModal;
