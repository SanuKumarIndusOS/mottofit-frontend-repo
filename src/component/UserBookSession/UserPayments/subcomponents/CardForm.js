import React, { useMemo, useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "../styles.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import { Link } from "react-router-dom";
import { PaymentApi } from "service/apiVariables";
import { api } from "service/api";
import { updateUserDetails } from "action/userAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Toast } from "service/toast";
import InfoIcon from "@material-ui/icons/Info";
import { AiFillAlert, AiOutlineAlert } from "react-icons/ai";
import { history } from "helpers";
import BlueHoverButton from "component/common/BlueArrowButton";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }));

  return options;
};

function CardFormFC({
  updateUserDetails,
  agreedToTerms,
  checkPayAhead,
  handleChange,
  handleChangeCPA,
  handleFriendsCount,
  ScheduleSession,
  sessionData,

  isProfile = false,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [isRememberCard, setRememberCard] = useState(false);
  const [defaulCardDetails, setDefaultCardDetails] = useState({});
  const [showCardComp, setShowCardComp] = useState(true);
  // const [checkPayAhead, setCheckPayAhead] = useState(false);
  // const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    getUserPaymentInfo();
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!showCardComp) return ScheduleSession();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardNumberElement);

    // console.log(cardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      // console.log("[error]", error);

      return Toast({ type: "error", message: error.message || "Error" });
    } else {
      // return Toast({ type: "error", message: error.message || "Error" });
      console.log("[PaymentMethod]", paymentMethod);
    }

    stripe
      .createToken(cardElement)
      .then(function ({ token }) {
        // Handle result.error or result.token
        // console.log(token);

        token?.id && addCard(token?.id);

        //   console.log(result, "token");
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });

    // alert("Card Saved");
  };

  const scheduleData = () => {
    let sessionTypeRoute = {
      ["1 ON 1 TRAINING"]: () => ScheduleSession(),
      ["SOCIAL SESSION"]: () =>
        checkPayAhead ? ScheduleSession() : history.push("/user/with-friends"),
      ["CREATE A CLASS"]: () => history.push("/user/with-friends"),
    };

    let sessionType = sessionData?.sessionType;

    if (sessionType && sessionTypeRoute[sessionType])
      sessionTypeRoute[sessionType]();
    // console.log(sessionTypeRoute[sessionType]);
  };

  const addCard = (token) => {
    const { addCardDetails } = PaymentApi;

    let payload = {
      cardToken: token,
      setDefault: isProfile ? true : isRememberCard,
    };

    addCardDetails.body = payload;

    api({ ...addCardDetails })
      .then(({ data }) => {
        console.log(data);

        Toast({ type: "success", message: "Card details added" });
        getUserPaymentInfo();

        if (isProfile) return ScheduleSession();

        let sessionTypeRoute = {
          ["1 ON 1 TRAINING"]: () => ScheduleSession(),
          ["SOCIAL SESSION"]: () => history.push("/user/with-friends"),
          ["CREATE A CLASS"]: () => history.push("/user/with-friends"),
        };

        let sessionType = sessionData?.sessionType;

        if (sessionType && sessionTypeRoute[sessionType])
          console.log(sessionTypeRoute[sessionType]);
        //   sessionTypeRoute[sessionType]();
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        //console.log(err);
      });
  };

  const getUserPaymentInfo = () => {
    const { getPaymentMethods } = PaymentApi;

    api({ ...getPaymentMethods })
      .then(({ data = [] }) => {
        let tempData = data || [];

        const defaulCardDetails = tempData.filter((data) => data.default);

        if (defaulCardDetails.length > 0) {
          setDefaultCardDetails(defaulCardDetails[0]);
          setShowCardComp(false);

          let reduxData = {
            defaulCardDetails: defaulCardDetails[0],
          };

          // console.log(reduxData);
          updateUserDetails(reduxData);
        }
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        //  console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Card">
        <div className="payment_input_inner">
          <label className="card-detail">Card Number</label>

          {showCardComp ? (
            <CardNumberElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#898989",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          ) : (
            <p className="fs-20">{`**** **** **** ${
              defaulCardDetails?.card?.last4 || "****"
            }`}</p>
          )}

          <div className="payment_expire_input">
            <div className="payment_expire_inner">
              <label className="card-detail">Expiry Date</label>
              {showCardComp ? (
                <CardExpiryElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#898989",
                          fontFamily: "Montserrat",
                          fontSize: "16px",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              ) : (
                <p className="fs-20">{`${
                  defaulCardDetails?.card?.exp_month || ""
                }/${defaulCardDetails?.card?.exp_year || ""}`}</p>
              )}
            </div>
            <div className="payment_expire_inner">
              {showCardComp && (
                <>
                  <label className="card-detail">CVC/CVV</label>
                  <CardCvcElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
                          "::placeholder": {
                            color: "#898989",
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                          },
                        },
                        invalid: {
                          color: "#9e2146",
                        },
                      },
                    }}
                  />
                </>
              )}
            </div>
          </div>

          {defaulCardDetails.default && (
            <>
              {showCardComp ? (
                <div className="payment_change d-flex justify-content-end">
                  <button
                    className="link-btn"
                    onClick={(e) => {
                      setShowCardComp(false);
                      e.preventDefault();
                    }}
                    type="click"
                  >
                    Reset Card
                  </button>
                </div>
              ) : (
                <div className="payment_change d-flex justify-content-end">
                  <button
                    className="link-btn"
                    onClick={(e) => {
                      setShowCardComp(true);
                      e.preventDefault();
                    }}
                    type="click"
                  >
                    Edit Card
                  </button>
                </div>
              )}
            </>
          )}

          {showCardComp && (
            <div className="payment_input_check mt-3 d-flex justify-content-between">
              {!isProfile && (
                <div className="payment_check_inner">
                  <input
                    type="checkbox"
                    checked={isRememberCard}
                    onChange={() => setRememberCard(!isRememberCard)}
                    id="remember_card"
                  />
                  <label for="remember_card">Remember My Card Details</label>
                </div>
              )}
              <div className="payment_check_inner d-flex align-items-center">
                <Link to="/" className="fw-600 text-underline">
                  Session Cancellation Policy
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="payment_input_outter_check ">
          <div className="payment_terms">
            <input
              type="checkbox"
              style={{ width: "50px", marginRight: "10px" }}
              onChange={handleChange}
              checked={agreedToTerms}
            />
            <label>
              By proceeding, you accept the latest versions of our{" "}
              <Link to="/">Terms of Use</Link> and{" "}
              <Link to="/">Privacy Policy</Link>
            </label>
          </div>
        </div>
        {sessionData?.sessionType === "SOCIAL SESSION" ? (
          <>
            <div className="payment_input_outter_check ">
              <div className="payment_terms">
                <input
                  type="checkbox"
                  style={{ width: "50px", marginRight: "10px" }}
                  onChange={handleChangeCPA}
                  checked={checkPayAhead}
                />
                <label className="my-0">
                  I will pay for the entire social session
                </label>
              </div>
            </div>
            <div className="mb-3 mt-2">
              <div className="col-12 d-flex justify-content-end">
                {checkPayAhead ? (
                  <select
                    className="participants"
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleFriendsCount(e.target.value);
                    }}
                  >
                    <option value="1">1 Participants</option>
                    <option value="2">2 Participants</option>
                    <option value="3">3 Participants</option>
                  </select>
                ) : null}
              </div>
            </div>
          </>
        ) : null}

        <div className="disclaimer">
          <p className="text-info d-flex alignn-items-center">
            <InfoIcon />
            <span className="ml-2">
              Payment will happen only after the session is completed.
            </span>
          </p>
        </div>

        {/* {!isProfile ? ( */}
        <div className="submit">
          <button
            type="click"
            className={`${!agreedToTerms ? "disable-btn" : ""} ${
              isProfile ? "w-auto" : ""
            }`}
            disabled={!agreedToTerms}
            onClick={handleSubmit}
          >
            {`${isProfile ? "Save Changes" : "Continue"}`} <ArrowHoverBlacked />
          </button>
        </div>
        {/* ) : (
          <button className="profile_save" onClick={handleSubmit}>
            SAVE CHANGES <BlueHoverButton />
          </button>
        )} */}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const CardForm = connect(mapStateToProps, mapDispatchToProps)(CardFormFC);

export default CardForm;
