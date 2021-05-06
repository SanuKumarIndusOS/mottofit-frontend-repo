import React, { useMemo } from "react";
import {
    // CardElement,
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import "../styles.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import { Link } from "react-router-dom";

const useOptions = () => {
    // const fontSize = useResponsiveFontSize();
    const options = useMemo(() => ({
        style: {
            base: {
                // fontSize,
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
function CardForm() {
    // const stripe = useStripe();
    // const elements = useElements();
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardNumberElement);

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

        stripe.createToken(cardElement).then(function (result) {
            // Handle result.error or result.token
            console.log(result);
        });

        alert("Card Saved")
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="Card">
                <div className="payment_input_inner">
                    <label>Card Number</label>

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
                    <div className="payment_expire_input">
                        <div className="payment_expire_inner">
                            <label>
                                Expiry Date
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
                            </label>
                        </div>
                        <div className="payment_expire_inner">
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
                        </div>
                    </div>
                    <div className="payment_input_check mt-3">
                        <div className="payment_check_inner">
                            <input type="checkbox" />
                            <label>Remember My Card Details</label>
                        </div>
                        <div className="payment_check_inner">
                            <Link to="/">Session Cancellation Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="payment_input_outter_check ">
                    <div className="payment_terms">
                        <input
                            type="checkbox"
                            style={{ width: "20px", marginRight: "10px" }}
                        />
                        <label>
                            By proceeding, you accept the latest versions of our{" "}
                            <Link to="/">Terms of Use</Link> and{" "}
                            <Link to="/">Privacy Policy</Link>
                        </label>
                    </div>
                </div>
                <div className="submit">
                    <button type="submit" disabled={!stripe}>
                        Save Card <ArrowHoverBlacked />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CardForm;
