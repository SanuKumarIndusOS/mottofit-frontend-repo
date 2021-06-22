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

  const [price, setPrice] = React.useState(0);
  React.useEffect(() => {
    let tempTrainerData = { ...trainerCardData };

    tempTrainerData = Object.keys(tempTrainerData).filter(
      (data) =>
        data !== "description" &&
        data !== "firstName" &&
        data !== "verticals" &&
        data !== "lastName"
    );

    const minCost = tempTrainerData
      .map((name) => parseInt(trainerCardData[name]))
      .filter((value) => !isNaN(value) && parseFloat(value) > 0)
      .sort((a, b) => a - b);

    if (minCost?.length > 0) setPrice(minCost[0]);
  }, [open]);

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
            <div className="row m-0" style={{ alignleft: "auto" }}>
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
                  <h3
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {trainerCardData.firstName}
                    &nbsp;
                    {trainerCardData.lastName}
                  </h3>
                  <h6
                    style={{
                      color: "#898989",
                      fontWeight: "bold",
                    }}
                  >
                    {trainerCardData.verticals !== undefined
                      ? trainerCardData.verticals.map((item) => {
                          return (
                            <h6
                              style={{
                                margin: "0 0.3em 0 0",
                              }}
                            >
                              {item}
                              {","}
                            </h6>
                          );
                        })
                      : null}
                  </h6>

                  <p>{trainerCardData.description}</p>
                </div>
                <div className="card-button">
                  <button
                    style={{
                      backgroundColor: "#53BFD2",
                    }}
                  >
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
