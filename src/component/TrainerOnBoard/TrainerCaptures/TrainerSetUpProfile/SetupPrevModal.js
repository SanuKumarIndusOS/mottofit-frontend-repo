import React, { useRef, useState } from "react";
import Tick from "../../../../assets/files/FindTrainer/Tick 1.svg";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";
import { Modal } from "react-responsive-modal";
import QMark from "../../../../assets/files/FindTrainer/Q Mark.svg";
import { Link } from "react-router-dom";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import "./modal.scss";
import "./stylesSetup.scss";
const SetupPrevModal = ({ open, setOpen, trainerSetupData }) => {
    const myRef = useRef(null);

    const closeIconModal = <img src={CloseIcon} alt="close" />;
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
                                            // src={
                                            //     trainerPersonalData.profilePicture
                                            // }
                                            src="https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg"
                                            alt="Image not Added"
                                        />

                                        <div className="profile_header_inner">
                                            <h2>
                                                firstname and lastname
                                                {/* {trainerData.firstName}{" "}
                                                {trainerData.lastName} */}
                                            </h2>
                                            <p>
                                                areaOfExpertise
                                                {/* {trainerPersonalData.areaOfExpertise.toString()} */}
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
                                            {/* {trainerPersonalData.oneOnOnePricing &&
                                            (trainerPersonalData.oneOnOnePricing
                                                .virtualSession ||
                                                trainerPersonalData
                                                    .oneOnOnePricing
                                                    .inPersonAtTrainerLocation) ? ( */}
                                            <div className="profile_aside_item">
                                                <h2>
                                                    1 ON 1 INDIVIDUAL TRAINING
                                                </h2>
                                                <hr />
                                                <div className="profile_aside_inner_item">
                                                    {/* {trainerPersonalData.oneOnOnePricing &&
                                                        trainerPersonalData
                                                            .oneOnOnePricing
                                                            .virtualSession ? ( */}
                                                    <h6>
                                                        50
                                                        {/* {
                                                                    
                                                                    // trainerPersonalData
                                                                    //     .oneOnOnePricing
                                                                    //     .virtualSession
                                                                } */}
                                                        <span>
                                                            (Virtual Session)
                                                        </span>
                                                    </h6>
                                                    {/* ) : null} */}
                                                    {/* {trainerPersonalData.oneOnOnePricing &&
                                                        trainerPersonalData
                                                            .oneOnOnePricing
                                                            .inPersonAtTrainerLocation ? ( */}
                                                    <h6>
                                                        51
                                                        {/* {
                                                                    trainerPersonalData
                                                                        .oneOnOnePricing
                                                                        .inPersonAtTrainerLocation
                                                                } */}
                                                        <span>
                                                            (In Person Session)
                                                        </span>
                                                    </h6>
                                                    {/* ) : null} */}
                                                    <h5>
                                                        See package rates during
                                                        checkout
                                                    </h5>
                                                </div>
                                            </div>
                                            {/* ) : null} */}

                                            {/* {trainerPersonalData.socialSessionPricing &&
                                            (trainerPersonalData
                                                .socialSessionPricing
                                                .inPeronAtTrainerLocationfor2People ||
                                                trainerPersonalData
                                                    .socialSessionPricing
                                                    .inPeronAtTrainerLocationfor3People ||
                                                trainerPersonalData
                                                    .socialSessionPricing
                                                    .inPeronAtTrainerLocationfor4People) ? ( */}
                                            <div className="profile_aside_item">
                                                <h2>
                                                    SOCIAL SESSIONS{" "}
                                                    <img
                                                        src={QMark}
                                                        alt="icon"
                                                        onClick={() =>
                                                            setOpen(true)
                                                        }
                                                        className="model_Qmark"
                                                    />
                                                </h2>
                                                <hr />

                                                <div className="profile_aside_inner_item">
                                                    {/* {trainerPersonalData.socialSessionPricing &&
                                                        trainerPersonalData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor2People ? ( */}
                                                    <h6>
                                                        40
                                                        {/* {
                                                                    trainerPersonalData
                                                                        .socialSessionPricing
                                                                        .inPeronAtTrainerLocationfor2People
                                                                } */}
                                                        <span>
                                                            / Session (For 2
                                                            People)
                                                        </span>
                                                    </h6>
                                                    {/* ) : null} */}
                                                    {/* {trainerPersonalData.socialSessionPricing &&
                                                        trainerPersonalData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor3People ? ( */}
                                                    <h6>
                                                        {/* {
                                                                    trainerPersonalData
                                                                        .socialSessionPricing
                                                                        .inPeronAtTrainerLocationfor3People
                                                                } */}
                                                        <span>
                                                            / Session (For 3
                                                            People)
                                                        </span>
                                                    </h6>
                                                    {/* ) : null} */}
                                                    {/* {trainerPersonalData.socialSessionPricing &&
                                                        trainerPersonalData
                                                            .socialSessionPricing
                                                            .inPeronAtTrainerLocationfor4People ? ( */}
                                                    <h6>
                                                        58
                                                        {/* {
                                                                    trainerPersonalData
                                                                        .socialSessionPricing
                                                                        .inPeronAtTrainerLocationfor4People
                                                                } */}
                                                        <span>
                                                            / Session (For 4
                                                            People)
                                                        </span>
                                                    </h6>
                                                    {/* ) : null} */}
                                                </div>
                                            </div>
                                            {/* ) : null} */}
                                            {/* {trainerPersonalData.classSessionPricing &&
                                            trainerPersonalData
                                                .classSessionPricing
                                                .inPersonAtclientLocationfor15People ? ( */}
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
                                                    <h6>
                                                        70
                                                        {/* {trainerPersonalData &&
                                                            trainerPersonalData.classSessionPricing
                                                                ? trainerPersonalData
                                                                      .classSessionPricing
                                                                      .inPersonAtclientLocationfor15People
                                                                : ""} */}
                                                        <span>
                                                            Flat Rate Class (For
                                                            5-15 People)
                                                        </span>
                                                    </h6>
                                                    <h5>
                                                        If trainer offers
                                                        Virtual Social Sessions
                                                        and Classes they will be
                                                        at a discount to in
                                                        person rates above. You
                                                        will see these prior to
                                                        checkout.
                                                    </h5>
                                                </div>
                                            </div>
                                            {/* ) : null} */}
                                            <div className="profile_aside_item">
                                                <h2>TRAINING LOCATIONS</h2>

                                                <hr />
                                                <div className="profile_aside_inner_item">
                                                    {/* {trainerPersonalData
                                                        .currentExperience
                                                        .workLocation ? ( */}
                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
                                                        <h4>
                                                            demo
                                                            {/* {
                                                                    trainerPersonalData
                                                                        .currentExperience
                                                                        .workLocation
                                                                } */}
                                                        </h4>
                                                    </div>
                                                    {/* ) : (
                                                        ""
                                                    )} */}
                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
                                                        <h4>
                                                            Trainer’s Location{" "}
                                                            <Link>
                                                                View Location
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                    <div className="profile_location">
                                                        <img
                                                            src={Tick}
                                                            alt="icon"
                                                        />
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
                                                    motto
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
                                                <h4>
                                                    About{" "}
                                                    {/* {trainerData.firstName} */}
                                                </h4>
                                                <p>
                                                    desc
                                                    {/* {trainerSetupData.trainingProcessDescription
                                                        ? trainerData.trainingProcessDescription
                                                        : "Description not Added"} */}
                                                </p>

                                                <div className="profile_images">
                                                    {
                                                        // trainerData ? (
                                                        //     <ImageGrid
                                                        //         trainerPersonalData={
                                                        //             trainerPersonalData
                                                        //         }
                                                        //     />
                                                        // ) :
                                                        "NO IMAGES ADDED"
                                                    }
                                                </div>
                                            </div>
                                            <div className="profile_right_item3 mb-5 pb-5">
                                                <h2>Certifications</h2>
                                                <div className="profile_item3_inner">
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        <h6>
                                                            {/* {trainerPersonalData
                                                                .certification[0]
                                                                ? trainerPersonalData
                                                                      .certification[0]
                                                                      .certification
                                                                : "Not Added"} */}
                                                            certification 1
                                                        </h6>
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        <h6>
                                                            certification2
                                                            {/* {trainerPersonalData
                                                                .certification[1]
                                                                ? trainerPersonalData
                                                                      .certification[1]
                                                                      .certification
                                                                : "Not Added"} */}
                                                        </h6>
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        <h6>
                                                            certification 3
                                                            {/* {trainerPersonalData
                                                                .certification[2]
                                                                ? trainerPersonalData
                                                                      .certification[2]
                                                                      .certification
                                                                : "Not Added"} */}
                                                        </h6>
                                                    </div>
                                                    <div className="inner_items">
                                                        <img
                                                            src={Tick}
                                                            alt="check"
                                                        />
                                                        <h6>
                                                            certification 4
                                                            {/* {trainerPersonalData
                                                                .certification[3]
                                                                ? trainerPersonalData
                                                                      .certification[3]
                                                                : "Not Added"} */}
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
