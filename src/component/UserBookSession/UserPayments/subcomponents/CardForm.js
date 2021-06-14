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
  handleChange,
  ScheduleSession,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [isRememberCard, setRememberCard] = useState(false);
  const [defaulCardDetails, setDefaultCardDetails] = useState({});
  const [showCardComp, setShowCardComp] = useState(true);
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
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    stripe.createToken(cardElement).then(function ({ token }) {
      // Handle result.error or result.token
      addCard(token.id);

      //   console.log(result, "token");
    });

    // alert("Card Saved");
  };

  const addCard = (token) => {
    const { addCardDetails } = PaymentApi;

    let payload = {
      cardToken: token,
      setDefault: isRememberCard,
    };

    addCardDetails.body = payload;

    api({ ...addCardDetails })
      .then(({ data }) => {
        console.log(data);

        Toast({ type: "success", message: "Card details added" });
        ScheduleSession();
        getUserPaymentInfo();
      })
      .catch((err) => {
        console.log(err);
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

          console.log(reduxData);
          updateUserDetails(reduxData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="Card">
        <div className="payment_input_inner">
          <label>Card Number</label>

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
              <label>
                Expiry Date
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
              </label>
            </div>
            <div className="payment_expire_inner">
              {showCardComp && (
                <label>
                  CVC/CVV
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
                </label>
              )}
            </div>
          </div>

          {defaulCardDetails.default && (
            <>
              {showCardComp ? (
                <div className="payment_change d-flex justify-content-end">
                  <button
                    className="link-btn"
                    onClick={() => setShowCardComp(false)}
                  >
                    Reset Card
                  </button>
                </div>
              ) : (
                <div className="payment_change d-flex justify-content-end">
                  <button
                    className="link-btn"
                    onClick={() => setShowCardComp(true)}
                  >
                    Edit Card
                  </button>
                </div>
              )}
            </>
          )}

          {showCardComp && (
            <div className="payment_input_check mt-3">
              <div className="payment_check_inner">
                <input
                  type="checkbox"
                  checked={isRememberCard}
                  onChange={() => setRememberCard(!isRememberCard)}
                  id="remember_card"
                />
                <label for="remember_card">Remember My Card Details</label>
              </div>
              <div className="payment_check_inner">
                <Link to="/">Session Cancellation Policy</Link>
              </div>
            </div>
          )}
        </div>

        <div className="payment_input_outter_check ">
          <div className="payment_terms">
            <input
              type="checkbox"
              style={{ width: "20px", marginRight: "10px" }}
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

        {/* {showCardComp && ( */}
        <div className="submit">
          <button
            type="click"
            className={`${!agreedToTerms ? "disable-btn" : ""}`}
            disabled={!agreedToTerms}
            onClick={handleSubmit}
          >
            Continue <ArrowHoverBlacked />
          </button>
        </div>
        {/* )} */}
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const CardForm = connect(null, mapDispatchToProps)(CardFormFC);

export default CardForm;
