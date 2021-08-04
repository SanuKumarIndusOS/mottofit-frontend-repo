import React, { useState, useEffect } from "react";
import PaymentSectionSetup from "component/TrainerOnBoard/TrainerCaptures/TrainerSetUpProfile/SetUpPaymentSection/PaymentSectionSetup";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStripeAccLink, trainerDetail } from "action/trainerAct";
import { Toast } from "../../../service/toast";

const PaymentHistoryFC = (props) => {
  const [trainerSetupData, setTrainerSetupData] = useState({
    identityNameUS: "Passport",
    insuranceNameUS: "",
    coverAmount: "",
    governmentId: "",
    governmentIdNumber: "",
    insurance: "",
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [showSaveBtn, setShowSaveBtn] = useState(false);

  const handleSubmit = () => {
    let payload = {
      identityName: trainerSetupData.identityNameUS || "",
      identityNo: trainerSetupData.governmentIdNumber || "",
      insuranceName: trainerSetupData.insuranceNameUS || "",
      insuranceAmount: trainerSetupData.coverAmount || "",
      insurance: trainerSetupData.insurance || "",
      identity: trainerSetupData.governmentId || "",
    };

    // console.log(payload);

    const { updateTrainerAvailabilityApi } = TrainerApi;
    updateTrainerAvailabilityApi.body = payload;
    setLoading(true);
    api({ ...updateTrainerAvailabilityApi })
      .then(({ message }) => {
        // getStripeURL();
        setLoading(false);
        Toast({ type: "success", message: message || "Success" });
        setShowSaveBtn(false);
        setAgreeToTerms(false);
      })
      .catch(() => setLoading(false));
  };

  const getStripeURL = () => {
    props
      .getStripeAccLink()
      .then((data) => {
        const { url } = data;
        url && window.open(url);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    props.trainerDetail().then((res) => {
      let { identityInfromation = {}, insuranceInformation = {} } = res;

      let tempData = {
        identityNameUS: identityInfromation
          ? identityInfromation.identityName
          : "",
        governmentIdNumber: identityInfromation
          ? identityInfromation.identityNo
          : "",
        insuranceNameUS: insuranceInformation
          ? insuranceInformation.insuranceName
          : "",
        coverAmount: insuranceInformation
          ? insuranceInformation.insuranceAmount
          : "",
        insurance: insuranceInformation ? insuranceInformation.insurance : "",
        governmentId: identityInfromation ? identityInfromation.identity : "",
      };

      const isAllUploaded = Object.values(tempData).every(
        (value) => value !== ""
      );

      setShowSaveBtn(!isAllUploaded);

      setTrainerSetupData({ ...trainerSetupData, ...tempData });
    });
  }, []);

  const hasAllFieldsFilled = Object.values({ ...trainerSetupData }).every(
    (data) => data !== ""
  );

  const handleAgreedCheck = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  let disableBtn = isLoading || !hasAllFieldsFilled;

  if (showSaveBtn && !agreeToTerms) disableBtn = true;

  return (
    <div>
      <PaymentSectionSetup
        trainerSetupData={trainerSetupData}
        setTrainerSetupData={setTrainerSetupData}
        showSaveBtn={() => setShowSaveBtn(true)}
      />

      {/* {showSaveBtn && ( */}
        <div className="card_agree">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={handleAgreedCheck}
          />
          <label>
            Check here to acknowledge that you have read and agree to the Motto
            trainer
            <a href="/agreement" target="_blank">
              terms and conditions
            </a>
          </label>
        </div>
      {/* )} */}

      <div className="action-btn d-flex justify-content-center">
        {showSaveBtn ? (
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={disableBtn}
            className={`${isLoading ? "loading" : "btn"} normal-btn`}
          >
            {isLoading ? (
              "Loading..."
            ) : (
              <a>
                {" "}
                Save Details
                <ArrowHoverBlacked />
              </a>
            )}
          </button>
        ) : (
          <button onClick={getStripeURL} type="submit" className={`normal-btn`}>
            <a>
              {" "}
              Edit Payment Details
              <ArrowHoverBlacked />
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getStripeAccLink,
      trainerDetail,
    },
    dispatch
  );
};

const PaymentHistory = connect(null, mapDispatchToProps)(PaymentHistoryFC);
export default PaymentHistory;
