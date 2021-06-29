import React, { useState, useEffect } from "react";
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
import {
  scheduleSession,
  resetUserDetails,
  updateUserDetails,
} from "action/userAct";
import { useLocation } from "react-router-dom";
import { history } from "helpers";
import { STRIPE_URL } from "../../../helpers/baseURL";
import { getFormatDate, convertToESTMs } from "service/helperFunctions";
import { Toast } from "service/toast";

const stripePromise = loadStripe(STRIPE_URL);

const UserPaymentsFC = ({
  sessionData,
  scheduleSession,
  trainerData,
  bookingData,
  defaulCardDetails,
  queryQbject,
  selectedTimes,
  selectedTrainerData,
  ...restProps
}) => {
  //for material ui radio buttom (temp)
  const [selectedValue, setSelectedValue] = useState("a");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [coupondCode, setCouponCode] = useState("");
  const [isCouponCodeValid, setCouponCodeValid] = useState(false);

  const [price, setprice] = useState();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCouponCode = ({ target: { value } }) => {
    setCouponCode(value);
  };

  const checkCouponCode = () => {
    let isCodeValid = coupondCode === "MOTTO1";

    setCouponCodeValid(isCodeValid);
  };

  const location = useLocation();

  const ScheduleSession = () => {
    // console.log(location, "locationlocation");

    if (!defaulCardDetails?.default)
      return Toast({
        type: "info",
        message: "Need atleast one default card details",
      });

    let trainingtype = sessionData?.sessionType;
    if (trainingtype.includes("1 ON 1")) {
      trainingtype = "1on1";
    } else if (trainingtype.includes("SOCIAL")) {
      trainingtype = "social";
    } else if (trainingtype.includes("CLASS")) {
      trainingtype = "class";
    }

    const tempTrainingActivity =
      sessionData?.trainingType?.value || bookingData?.activity?.value;

    const scheduleBody = {
      trainerId: trainerData?.id || selectedTrainerData?.id,
      title: tempTrainingActivity,
      trainingType: trainingtype,
      sessionType: sessionData?.preferedTrainingMode,
      activity: tempTrainingActivity,
      sessionStatus: "created",
      sessionDate:
        bookingData?.date || getFormatDate(selectedTimes[0], "YYYY-MM-DD"),
      sessionStartTime: convertToESTMs(bookingData?.start_slot),
      sessionEndTime: convertToESTMs(bookingData?.end_slot),
      city: sessionData?.location?.value,
      venue: sessionData?.trainingVenue?.value,
      price: sessionData?.price,
      sessionMode: queryQbject?.availability?.value,
      paidByUser: trainingtype === "1on1",
    };

    // console.log(scheduleBody);

    scheduleSession(scheduleBody)
      .then((res) => {
        if (res.session.trainingType === "1on1") {
          history.push("/users/dashboard/session");
        } else if (
          res.session.trainingType === "social" ||
          res.session.trainingType === "class"
        ) {
          let reduxData = {
            submittedData: {
              ...res.session,
            },
          };
          // console.log(res);
          restProps?.updateUserDetails(reduxData);
          history.push("/user/with-friends");
        }

        // restProps.resetUserDetails();
      })
      .catch((error) => {
        Toast({
          type: "error",
          message: error.message || "Something went wrong",
        });
        console.log(error);
      });
  };

  const tempTrainerData = trainerData || selectedTrainerData;

  const areaOfExpertise = tempTrainerData?.areaOfExpertise?.toString();

  const trainingDate = bookingData?.start_slot
    ? getFormatDate(bookingData?.start_slot, "MMMM Do, YYYY hh:mm A.")
    : "";

  let discountPrice = isCouponCodeValid ? 10 : 0;
  let trxFee = 0;
  let tax = 1;
  let cancellationFee = 0;
  let totalPrice = Math.round(
    (sessionData?.price || 0) - discountPrice + trxFee + tax + cancellationFee
  );

  useEffect(() => {
    // console.log(getFormatDate(selectedTimes[0], "YYYY-MM-DD"));

    window.scrollTo(0, 0);
    if (Object.keys(sessionData).length === 0)
      return history.push("/trainer/find");
  }, []);

  return (
    <>
      <div className="user_payment_outer_container">
        <div className="container">
          <div className="user_payment_inner_container">
            <div className="user_payment_link">
              <div className="outter_links">
                <img src={ArrowBack} alt="icon" />
                <div className="inner_links">
                  <Link to="/user/motto-pass"> Get a Motto Pass</Link>
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
                        This is a hold on your card & payment won’t be complete
                        until after the session is complete. All transactions on
                        Motto are protected.
                      </p>
                    </div>
                    <div className="user_payment_section">
                      <div className="inner_payment_form">
                        <div className="payment_form_radio">
                          <div className="inner_payment_radio">
                            <Radio
                              checked={selectedValue === "a"}
                              onChange={handleChange}
                              value="a"
                              name="radio-button-demo"
                              inputProps={{
                                "aria-label": "A",
                              }}
                              label="Credit or Debit Card"
                            />
                            <label>Credit or Debit Card</label>
                          </div>
                          <img src={paymentMethodImg} alt="icon" />
                        </div>

                        <div className="payment_input">
                          <Elements stripe={stripePromise}>
                            <CardForm
                              agreedToTerms={agreedToTerms}
                              handleChange={() =>
                                setAgreedToTerms(!agreedToTerms)
                              }
                              ScheduleSession={ScheduleSession}
                            />
                          </Elements>
                          {/* <button
                            className={`ud_but ${
                              !agreedToTerms ? "disable-btn" : ""
                            }`}
                            onClick={ScheduleSession}
                            disabled={!agreedToTerms}
                          >
                            Continue <ArrowHoverBlacked />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user_friends">
                  {/* <button
                                        className="ud_but"
                                        onClick={ScheduleSession}
                                    >
                                        Continue <ArrowHoverBlacked />
                                    </button> */}
                  <h2>
                    Session cost too high? Train with friends and split the bill
                  </h2>
                  <p>
                    Make your workout social & fun, while saving money. Complete
                    your payment and add friends to your session simply by
                    sending them an invite through your account dashboard. Once
                    they accept your session, your rate will automatically be
                    adjusted.
                  </p>
                </div>
              </div>
              <div className="user_payment_right">
                <div className="user_payment_profile">
                  <img
                    src={tempTrainerData?.profilePicture || Jenny}
                    alt="icon"
                  />
                  <div className="up_profile_name">
                    <h2>{`${tempTrainerData?.firstName || ""} ${
                      tempTrainerData?.lastName || ""
                    }`}</h2>
                    <p>{areaOfExpertise}</p>
                  </div>
                </div>
                <div className="user_details_wrapper">
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN IN</h3>
                    <div className="user_data_inner">
                      <img src={StrengthIcon} alt="icon" />
                      <h4>
                        {bookingData?.activity?.label ||
                          sessionData?.trainingType?.label}
                      </h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I want to train on</h3>
                    <div className="user_data_inner">
                      <img src={SheduleIcon} alt="icon" />
                      <h4>
                        {trainingDate ||
                          getFormatDate(
                            selectedTimes[0],
                            "MMMM Do, YYYY hh:mm A."
                          )}
                      </h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN AT</h3>
                    <div className="user_data_inner">
                      <img src={LocationIcon} alt="icon" />
                      <h4>{`${sessionData?.trainingVenue?.label}`}</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="user_coupon">
                    <h2>Have a discount code? Avail it now!</h2>
                    <input
                      type="text"
                      placeholder="Enter the coupon code here"
                      onChange={handleCouponCode}
                    />
                    <button onClick={checkCouponCode}>Apply</button>
                    {isCouponCodeValid && (
                      <p className="w-100 text-success fs-12">Code applied!</p>
                    )}
                  </div>
                  <div className="user_service_details">
                    <div className="user_service_wrapper">
                      <div className="user_service_left">
                        <div className="service_header">
                          <h3>Service Details</h3>
                          <div className="user_data_table_left">
                            <h5>{sessionData?.sessionType}</h5>
                            <h5>Discount</h5>
                            <h5>Transaction Fee</h5>
                            <h5>Tax</h5>
                            <h5>Cancellation Fee</h5>
                            <hr />
                            <h3>Total</h3>
                          </div>
                        </div>
                      </div>
                      <div className="user_service_right">
                        <div className="service_header">
                          <h3>Price / Hour</h3>
                          <div className="user_data_table_right">
                            <h5>{`$${sessionData?.price}`}</h5>
                            <h5>{`-$${discountPrice}`}</h5>
                            <h5>{`$${trxFee}`}</h5>
                            <h5>{`$${tax}`}</h5>
                            <h5>{`$${cancellationFee}`}</h5>
                            <hr />
                            <h3>{totalPrice}</h3>
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
  bookingData: state.userReducer.bookingData,
  selectedTimes: state.userReducer.selectedTimes,
  defaulCardDetails: state.userReducer.defaulCardDetails,
  queryQbject: state.trainerReducer.query,
  sessionData: state.userReducer.sessionData,
  trainerData: state.userReducer.selectedTrainerData?.trainerData,
  selectedTrainerData: state.userReducer.selectedTrainerData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      scheduleSession,
      resetUserDetails,
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
