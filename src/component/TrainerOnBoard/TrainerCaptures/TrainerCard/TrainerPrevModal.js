import React, { useRef, useState, useEffect } from "react";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import { Modal } from "react-responsive-modal";

import { useSelector, useDispatch } from "react-redux";
import "./trainer.sass";

export const TrainerPrevModal = ({
    open,
    setOpen,
    trainerCardData,
    image,
    // setImage,
}) => {
    const myRef = useRef(null);
    const closeIconModal = <img src={CloseIcon} alt="close" />;

    const TrainerCardPayload = useSelector(
        (state) => state.trainerCaptureReducer.cardData
    );

    const priceArray = [
        TrainerCardPayload.inPersonAtClient_individualCharge,
        TrainerCardPayload.inPersonAtClient_twoPPL,
        TrainerCardPayload.inPersonAtClient_threePPL,
        TrainerCardPayload.inPersonAtClient_fourPPL,
        TrainerCardPayload.inPersonAtClient_classFlatRate,
        TrainerCardPayload.inPersonAtClient_threeSessionRate,
        TrainerCardPayload.inPersonAtClient_tenSessionRate,
        TrainerCardPayload.inPersonAtTrainer_individualCharge,
        TrainerCardPayload.inPersonAtTrainer_twoPPL,
        TrainerCardPayload.inPersonAtTrainer_threePPL,
        TrainerCardPayload.inPersonAtTrainer_fourPPL,
        TrainerCardPayload.inPersonAtTrainer_classFlatRate,
        TrainerCardPayload.inPersonAtTrainer_threeSessionRate,
        TrainerCardPayload.inPersonAtTrainer_tenSessionRate,
        TrainerCardPayload.virtual_individualCharge,
        TrainerCardPayload.virtual_twoPPL,
        TrainerCardPayload.virtual_threePPL,
        TrainerCardPayload.virtual_fourPPL,
        TrainerCardPayload.virtual_classFlatRate,
        TrainerCardPayload.virtual_threeSessionRate,
        TrainerCardPayload.virtual_tenSessionRate,
    ];
    const [price, setPrice] = React.useState(0);
    React.useEffect(() => {
        var temp = [];

        priceArray.map((v) => {
            if (!isNaN(parseInt(v))) {
                temp.push(parseInt(v));
            }
        });

        let min = Math.min(...temp);
        setPrice(min);

        console.log(min);
    }, [TrainerCardPayload]);

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
                    <div className="container">
                        <div className="row m-0 card-container">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={
                                        image
                                            ? image
                                            : "https://www.solidbackgrounds.com/images/2048x1536/2048x1536-powder-blue-web-solid-color-background.jpg"
                                    }
                                    style={
                                        image
                                            ? { objectFit: "cover" }
                                            : {
                                                objectFit: "cover",
                                                backgroundColor: "blue",
                                            }
                                    }
                                />
                                <div className="card-body">
                                    <h3>
                                        {trainerCardData.firstName}
                                        &nbsp;
                                        {trainerCardData.lastName}
                                    </h3>
                                    <h6 className="card-body-verticals"
                                    >
                                        {trainerCardData.verticals !== undefined
                                            ? trainerCardData.verticals.map(
                                                (item) => {
                                                    return (
                                                        <h6
                                                        >
                                                            {item}
                                                            {","}
                                                        </h6>
                                                    );
                                                }
                                            )
                                            : null}
                                    </h6>

                                    <p>{trainerCardData.description}</p>
                                </div>
                                <div className="card-button">
                                    <button>
                                        book a session
                                        <p>
                                            from <span>${price || ""}</span>
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
