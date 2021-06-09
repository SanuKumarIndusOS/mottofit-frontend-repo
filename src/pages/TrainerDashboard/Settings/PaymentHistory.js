import React, { useState, useEffect } from "react";
import PaymentSectionSetup from "component/TrainerOnBoard/TrainerCaptures/TrainerSetUpProfile/SetUpPaymentSection/PaymentSectionSetup";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStripeAccLink, trainerDetail } from "action/trainerAct";

const PaymentHistoryFC = (props) => {
  const [trainerSetupData, setTrainerSetupData] = useState({
    identityNameUS: "Passport",
    insuranceNameUS: "",
    coverAmount: "",
    governmentId: "",
    governmentIdNumber: "",
    insurance: "",
  });

  const [isLoading, setLoading] = useState(false);

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
      .then(() => {
        // getStripeURL();
        setLoading(false);
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
      setTrainerSetupData({
        ...trainerSetupData,
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
      });
    });
  }, []);

  const hasAllFieldsFilled = Object.values({ ...trainerSetupData }).every(
    (data) => data !== ""
  );

  return (
    <div>
      <PaymentSectionSetup
        trainerSetupData={trainerSetupData}
        setTrainerSetupData={setTrainerSetupData}
      />

      <div className="action-btn d-flex justify-content-center">
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={isLoading || !hasAllFieldsFilled}
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
        <button onClick={getStripeURL} type="submit" className={`normal-btn`}>
          <a>
            {" "}
            View Payment Details
            <ArrowHoverBlacked />
          </a>
        </button>
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
