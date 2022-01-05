import React, { useState } from "react";
import "./styles.scss";
import "./dropdown.scss";
import BlueHoverButton from "component/common/BlueArrowButton";
import Tick from "../../../../../assets/files/FindTrainer/Tick 1.svg";
import { fileUpload } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { api } from "service/api";
import { TrainerApi } from "service/apiVariables";
import { Toast } from "service/toast";
const info = [
  {
    label: "Passport",
    value: "Passport",
  },
  {
    value: "Driver's Licence",
    label: "Driver's Licence",
  },
  {
    label: "State Issued ID",
    value: "State Issued ID",
  },
];

const PaymentSectionSetupClass = ({
  trainerSetupData,
  setTrainerSetupData,
  fileUploadApi,
  showSaveBtn,
}) => {
  const uploadArea = (e) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("insurance", image);
      fileUploadApi(fd).then((data) => {
        setTrainerSetupData({
          ...trainerSetupData,
          insurance: data.urlPath,
        });

        data.urlPath && updateUploadedFile("insurance", data.urlPath);
      });
    }
  };

  const updateUploadedFile = (name, url) => {
    const { updateTrainerAvailabilityApi } = TrainerApi;

    let payload = {
      [name]: url,
    };
    updateTrainerAvailabilityApi.body = payload;
    api({ ...updateTrainerAvailabilityApi })
      .then(({ message }) => {
        Toast({ type: "success", message: message || "Success" });
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
  };

  const uploadAreaId = (e) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("identity", image);
      fileUploadApi(fd).then((data) => {
        setTrainerSetupData({
          ...trainerSetupData,
          governmentId: data.urlPath,
        });

        data.urlPath && updateUploadedFile("identity", data.urlPath);
      });
    }
  };

  return (
    <>
      <div className="payment_container container">
        <div className="payment_wrapper">
          <div className="payment_heading">
            <h2>{"Security & Payment Information"}</h2>
            <p>
              The following information is mandatory to complete the onboarding
              of all new trainers. Please ensure you check all the documents
              before uploading them.
            </p>
          </div>
          <div className="payment_inner ">
            {/* <form> */}
            <div className="payment_item1">
              <h6>Please upload any one of your US government issued ID’s</h6>
              <div>
                <div className="inputs_payment1">
                  <select
                    value={trainerSetupData.identityNameUS}
                    name="identityNameUS"
                    onChange={(e) => {
                      setTrainerSetupData({
                        ...trainerSetupData,
                        identityNameUS: e.target.value,
                      });
                      showSaveBtn();
                    }}
                  >
                    {info.map((list, index) => (
                      <option value={list.value} key={index}>
                        {list.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Add your ID Number"
                    value={trainerSetupData.governmentIdNumber}
                    onChange={(e) => {
                      setTrainerSetupData({
                        ...trainerSetupData,
                        governmentIdNumber: e.target.value,
                      });
                      showSaveBtn();
                    }}
                    name="governmentIdNumber"
                  />
                  <input
                    type="file"
                    name="governmentId"
                    className="custom-file-input"
                    onChange={(e) => {
                      uploadAreaId(e);
                    }}
                  />

                  {trainerSetupData.governmentId ? (
                    <a className="checkarrow pl-3">
                      <img src={Tick} alt="Uploaded" />
                    </a>
                  ) : (
                    <a className="checkarrow">
                      <BlueHoverButton />
                    </a>
                  )}
                </div>
                {trainerSetupData.governmentId && (
                  <a href={trainerSetupData.governmentId} target="_blank">
                    View File
                  </a>
                )}
              </div>
            </div>
            <div className="payment_item1">
              <h6>Please upload your insurance information</h6>
              <div>
                <div className="inputs_payment1">
                  <input
                    type="text"
                    placeholder="Enter your Insurance Name"
                    value={trainerSetupData.insuranceNameUS}
                    onChange={(e) => {
                      setTrainerSetupData({
                        ...trainerSetupData,
                        insuranceNameUS: e.target.value,
                      });
                      showSaveBtn();
                    }}
                    name="insuranceNameUS"
                  />
                  <input
                    type="text"
                    placeholder="Add your Cover Amount"
                    value={trainerSetupData.coverAmount}
                    onChange={(e) => {
                      setTrainerSetupData({
                        ...trainerSetupData,
                        coverAmount: e.target.value,
                      });
                      showSaveBtn();
                    }}
                    name="coverAmount"
                  />
                  <input
                    type="file"
                    name="insurance"
                    className="custom-file-input"
                    onChange={(e) => uploadArea(e)}
                  />

                  {trainerSetupData.insurance ? (
                    <a className="checkarrow pl-3">
                      <img src={Tick} alt="Uploaded" />
                    </a>
                  ) : (
                    <a className="checkarrow">
                      <BlueHoverButton />
                    </a>
                  )}
                </div>
                {trainerSetupData.insurance && (
                  <a href={trainerSetupData.insurance} target="_blank">
                    View File
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fileUploadApi: fileUpload,
    },
    dispatch
  );
};

const PaymentSectionSetup = connect(
  null,
  mapDispatchToProps
)(PaymentSectionSetupClass);

export default PaymentSectionSetup;
