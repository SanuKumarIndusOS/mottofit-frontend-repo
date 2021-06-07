import React, { useState } from "react";
import "./styles.scss";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import BlueHoverButton from "component/common/BlueArrowButton";
import Tick from "../../../../../assets/files/FindTrainer/Tick 1.svg";
import { fileUpload } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
}) => {
  const uploadArea = (e) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("insurance", image);
      fileUploadApi(fd).then((data) => {
        console.log(data, "datadata");
        setTrainerSetupData({
          ...trainerSetupData,
          insurance: e.target.files[0],
        });
      });
    }
  };

  const uploadAreaId = (e) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("identity", image);
      fileUploadApi(fd).then((data) => {
        console.log(data, "datadata");
        setTrainerSetupData({
          ...trainerSetupData,
          governmentId: e.target.value,
        });
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
              <div className="inputs_payment1">
                <select
                  value={trainerSetupData.identityNameUS}
                  name="identityNameUS"
                  onChange={(e) => {
                    setTrainerSetupData({
                      ...trainerSetupData,
                      identityNameUS: e.target.value,
                    });
                  }}
                >
                  {info.map((list, index) => (
                    <option value={list.value} key={index}>
                      {list.label}
                    </option>
                  ))}
                </select>
                {/* <Dropdown
                  title="Select government ID’s "
                  list={info}
                  value={trainerSetupData.identityNameUS}
                  onChange={(e) => {
                    setTrainerSetupData({
                      ...trainerSetupData,
                      identityNameUS: e.value,
                    });
                  }}
                  name="identityNameUS"
                /> */}
                <input
                  type="text"
                  placeholder="Add your ID Number"
                  value={trainerSetupData.governmentIdNumber}
                  onChange={(e) => {
                    setTrainerSetupData({
                      ...trainerSetupData,
                      governmentIdNumber: e.target.value,
                    });
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
            </div>
            <div className="payment_item1">
              <h6>Please upload your insurance information</h6>
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
