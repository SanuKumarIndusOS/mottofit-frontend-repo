import React, { useEffect } from "react";
import "./styles.scss";
import Radio from "@material-ui/core/Radio";
import paymentMethodImg from "../../../assets/files/UserOnboard/PaymentAsset/Card Icons.png";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import Jenny from "../../../assets/files/TrainerDashboard/Message/Jenny.png";
import StrengthIcon from "../../../assets/files/UserOnboard/PaymentAsset/Strength Icon.svg";
import SheduleIcon from "../../../assets/files/UserOnboard/PaymentAsset/Shedule Icon.svg";
import LocationIcon from "../../../assets/files/UserOnboard/PaymentAsset/Location Icon.svg";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "./subcomponents/CardForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUserDetails } from "action/userAct";
import { useLocation } from "react-router-dom";
import { history } from "helpers";

const stripePromise = loadStripe(
  "pk_test_51IJnd4BqgEC4bFYpGGizgTzbIgTjeilOIQ1ht7qe6UfgB3yfVYRrcJbEZp37oPu7ACIFACqNc6hWVIPcIAbGqHyA00aa6T2SRm"
);

const UserPaymentsFC = ({ updateUserDetails, sessionData }) => {
  //for material ui radio buttom (temp)
  const [selectedValue, setSelectedValue] = React.useState("a");

  const [price, setprice] = React.useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const location = useLocation();

  useEffect(() => {
    // console.log(location.state.slotDetails, location.state.sessionData);
  }, []);

  const ScheduleSession = () => {

    let trainingtype = location.state.sessionType;
    if (trainingtype === 'group') {
      trainingtype = 'social';
    }

    const scheduleBody = {
      trainerId: location.state.slotDetails["id"],
      title:
        location.state.slotDetails["Name"] +
        " " +
        location.state.slotDetails["activity"],
      trainingType: trainingtype,
      sessionType: location.state.sessionData["preferedTrainingMode"],
      activity: location.state.slotDetails["activity"],
      sessionStatus: "created",
      sessionDate: location.state.slotDetails["date"],
      sessionStartTime: location.state.slotDetails["start_slot"],
      sessionEndTime: location.state.slotDetails["end_slot"],
      city: location.state.sessionData["location"]["value"],
      venue: location.state.sessionData["trainingVenue"]["value"],
      price: location.state.sessionData.price,
    };

    fetch("http://doodlebluelive.com:2337/v1/session/schedule", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      method: "POST",
      body: JSON.stringify(scheduleBody),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('sessionId',res.session.id);
        localStorage.setItem('sessionTrainingType',res.session.trainingType);
        if (res.session.trainingType === "1on1") {
          history.push({
            pathname: "/users/dashboard/session",

            state: {
              slotDetails: location.state["slotDetails"],
              sessionData: location.state["sessionData"],
            },
          });
        } else if (
          res.session.trainingType === "social" || res.session.trainingType==='class') {
          history.push({
            pathname: "user/with-friends",

            state: {
              slotDetails: location.state["slotDetails"],
              sessionData: location.state["sessionData"],
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="user_payment_outer_container">
        <div className="container">
          <div className="user_payment_inner_container">
            <div className="user_payment_link">
              <div className="outter_links">
                <img src={ArrowBack} alt="icon" />
                <div className="inner_links">
                  <Link to="/user/motto-pass">
                    {" "}
                                        Get a Motto Pass
                                    </Link>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="user_payment_grid">
              <div className="user_payment_left_outter">
                <div className="user_payment_left">
                  <div className="user_payment_left_wrapper">
                    <div className="up_header">
                      <h2>Secure Checkout</h2>
                      <h4>Choose your Payment Method</h4>
                      <p>
                        This is a hold on your card &
                        payment won’t be complete until
                        after the session is complete.
                        All transactions on Motto are
                        protected.
                                            </p>
                    </div>
                    <div className="user_payment_section">
                      <div className="inner_payment_form">
                        <div className="payment_form_radio">
                          <div className="inner_payment_radio">
                            <Radio
                              checked={
                                selectedValue ===
                                "a"
                              }
                              onChange={
                                handleChange
                              }
                              value="a"
                              name="radio-button-demo"
                              inputProps={{
                                "aria-label":
                                  "A",
                              }}
                              label="Credit or Debit Card"
                            />
                            <label>
                              Credit or Debit Card
                                                        </label>
                          </div>
                          <img
                            src={paymentMethodImg}
                            alt="icon"
                          />
                        </div>

                        <div className="payment_input">
                          <Elements
                            stripe={stripePromise}
                          >
                            <CardForm />
                          </Elements>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user_friends">
                  <button
                    className="ud_but"
                    onClick={ScheduleSession}
                  >
                    Continue <ArrowHoverBlacked />
                  </button>
                  <h2>
                    Session cost too high? Train with
                    friends and split the bill
                                    </h2>
                  <p>
                    Make your workout social & fun, while
                    saving money. Complete your payment and
                    add friends to your session simply by
                    sending them an invite through your
                    account dashboard. Once they accept your
                    session, your rate will automatically be
                    adjusted.
                                    </p>
                </div>
              </div>
              <div className="user_payment_right">
                <div className="user_payment_profile">
                  <img src={Jenny} alt="icon" />
                  <div className="up_profile_name">
                    <h2>John Doe</h2>
                    <p>BOXING, STRENGTH & HIIT</p>
                  </div>
                </div>
                <div className="user_details_wrapper">
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN IN</h3>
                    <div className="user_data_inner">
                      <img
                        src={StrengthIcon}
                        alt="icon"
                      />
                      <h4>Strength & HIIT</h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I want to train on</h3>
                    <div className="user_data_inner">
                      <img src={SheduleIcon} alt="icon" />
                      <h4>
                        February 16th, 2021 at 5:00 A.M.
                                            </h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN AT</h3>
                    <div className="user_data_inner">
                      <img
                        src={LocationIcon}
                        alt="icon"
                      />
                      <h4>The Trainer’s Gym</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="user_coupon">
                    <h2>
                      Have an incentive code? Avail it
                      now!
                                        </h2>
                    <input
                      type="text"
                      placeholder="Enter the coupon code here"
                    />
                    <button>Apply</button>
                  </div>
                  <div className="user_service_details">
                    <div className="user_service_wrapper">
                      <div className="user_service_left">
                        <div className="service_header">
                          <h3>Service Details</h3>
                          <div className="user_data_table_left">
                            <h5>
                              1 Hour Training
                              Session
                                                        </h5>
                            <h5>Incentive</h5>
                            <h5>Transaction Fee</h5>
                            <h5>Tax</h5>
                            <h5>
                              Cancellation Fee
                                                        </h5>
                            <hr />
                            <h3>Total</h3>
                          </div>
                        </div>
                      </div>
                      <div className="user_service_right">
                        <div className="service_header">
                          <h3>Price / Hour</h3>
                          <div className="user_data_table_right">
                            <h5>$100.00</h5>
                            <h5>$10.00</h5>
                            <h5>$00.00</h5>
                            <h5>$01.00</h5>
                            <h5>$00.00</h5>
                            <hr />
                            <h3>$120.00</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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

const UserPayments = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPaymentsFC);

export default UserPayments;
