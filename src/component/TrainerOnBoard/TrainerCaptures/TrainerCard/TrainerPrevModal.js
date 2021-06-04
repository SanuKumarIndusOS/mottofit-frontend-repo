import React, { useRef, useState, useEffect } from "react";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import { Modal } from "react-responsive-modal";

import { useSelector, useDispatch } from "react-redux";


export const TrainerPrevModal = ({ open, setOpen }) => {
    const [previewImage, setPreviewTmage] = useState();
    const myRef = useRef(null);
    const closeIconModal = <img src={CloseIcon} alt="close" />;

    const TrainerCardPayload = useSelector(
        (state) => state.trainerCaptureReducer.cardData
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
                >
                    <div className="container" style={{ paddingLeft: "50px" }}>
                        <div className="row m-0" style={{ alignleft: "auto" }}>
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={
                                        // previewImage
                                        //     ? previewImage
                                        //     :
                                        "https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg"
                                    }
                                    style={
                                        previewImage
                                            ? { objectFit: "cover" }
                                            : {
                                                  objectFit: "cover",
                                                  backgroundColor: "blue",
                                              }
                                    }
                                />
                                <div className="card-body">
                                    <h3
                                        style={{
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {TrainerCardPayload.firstName}
                                        {/* {trainerData.firstName}
                                    &nbsp;
                                    {trainerData.lastName} */}
                                    </h3>
                                    <h6
                                        style={{
                                            color: "#898989",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {/* {checkedHIIT &&
                                    !checkedPilates &&
                                    !checkedBoxing &&
                                    !checkedYoga
                                        ? "Strength & HIIT"
                                        : checkedPilates &&
                                          !checkedHIIT &&
                                          !checkedBoxing &&
                                          !checkedYoga
                                        ? "Pilates"
                                        : checkedYoga &&
                                          !checkedHIIT &&
                                          !checkedBoxing &&
                                          !checkedPilates
                                        ? "Yoga"
                                        : checkedBoxing &&
                                          !checkedHIIT &&
                                          !checkedPilates &&
                                          !checkedYoga
                                        ? "Boxing"
                                        : checkedHIIT &&
                                          checkedPilates &&
                                          !checkedBoxing &&
                                          !checkedYoga
                                        ? "Strength & HIIT,Pilates"
                                        : checkedHIIT &&
                                          checkedYoga &&
                                          !checkedPilates &&
                                          !checkedBoxing
                                        ? "Strength & HIIT,Yoga"
                                        : checkedHIIT &&
                                          checkedBoxing &&
                                          !checkedPilates &&
                                          !checkedYoga
                                        ? "Strength & HIIT,Boxing"
                                        : checkedYoga &&
                                          checkedBoxing &&
                                          !checkedPilates &&
                                          !checkedHIIT
                                        ? "Yoga,Boxing"
                                        : checkedYoga &&
                                          checkedPilates &&
                                          !checkedBoxing &&
                                          !checkedHIIT
                                        ? "Yoga,Pilates"
                                        : checkedBoxing &&
                                          checkedPilates &&
                                          !checkedHIIT &&
                                          !checkedYoga
                                        ? "Boxing,Pilates"
                                        : checkedHIIT &&
                                          checkedPilates &&
                                          checkedBoxing &&
                                          !checkedYoga
                                        ? "Strength & HIIT,Pilates,Boxing"
                                        : checkedHIIT &&
                                          checkedPilates &&
                                          checkedYoga &&
                                          !checkedBoxing
                                        ? "Strength & HIIT,Pilates,Yoga"
                                        : checkedYoga &&
                                          checkedPilates &&
                                          checkedBoxing &&
                                          !checkedHIIT
                                        ? "Yoga,Pilates,Boxing"
                                        : checkedYoga &&
                                          checkedHIIT &&
                                          checkedBoxing &&
                                          !checkedPilates
                                        ? "Yoga,Strength & HIIT,Boxing"
                                        : checkedYoga &&
                                          checkedHIIT &&
                                          checkedBoxing &&
                                          checkedPilates
                                        ? "Yoga,Strength & HIIT,Boxing,Pilates"
                                        : "Not Added"} */}
                                    </h6>
                                    <p style={{ color: "#898989" }}>
                                        {/* {trainerData.description} */}
                                        desc
                                    </p>
                                </div>
                                <div className="card-button">
                                    <button
                                        style={{
                                            backgroundColor: "#53BFD2",
                                        }}
                                    >
                                        book a session
                                        <p>
                                            from{" "}
                                            <span>
                                                {/* ${trainerData.individualCharge} */}
                                            </span>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
};
