import React, { useState, useEffect, useRef } from "react";
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
  mottoPassData,
  verifyCouponCodeAct,
} from "action/userAct";
import { useLocation } from "react-router-dom";
import { history } from "helpers";
import config from "config";
import { getFormatDate, convertToESTMs } from "service/helperFunctions";
import { Toast } from "service/toast";
import { UserAvatar } from "component/common/UserAvatar";
import moment from "moment";
import momentTZ from "moment-timezone";

const stripePromise = loadStripe(config.stripeUrl);

let tempaccordionData = [];

const UserPaymentsFC = ({
  sessionData,
  scheduleSession,
  trainerData,
  bookingData,
  defaulCardDetails,
  queryQbject,
  selectedTimes,
  selectedTrainerData,
  mottoPassDataVal,
  verifyCouponCodeApi,
  ...restProps
}) => {
  //for material ui radio buttom (temp)
  const [selectedValue, setSelectedValue] = useState("a");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [coupondCode, setCouponCode] = useState("");
  const [isCouponCodeValid, setCouponCodeValid] = useState(false);
  const [accordionData, setAccordionData] = useState(tempaccordionData);
  const [checkPayAhead, setCheckPayAhead] = useState(false);
  const [friendsCount, setFriendsCount] = useState(1);
  const [trainingAcivityType, setTrainigType] = useState("");

  const couponRate = useRef(null);

  const [price, setprice] = useState();

  const handleChangeCPA = (event) => {
    setCheckPayAhead(!checkPayAhead);
  };

  const handleFriendsCount = (number) => {
    setFriendsCount(number);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCouponCode = ({ target: { value } }) => {
    setCouponCode(value);
  };

  const checkCouponCode = () => {
    // let isCodeValid = coupondCode === "MOTTO1";
    if (!coupondCode) return;

    let payload = coupondCode.toLocaleUpperCase();

    verifyCouponCodeApi(payload)
      .then((data) => {
        const { couponValue, code } = data || {};

        couponRate.current = () => {
          return couponValue;
        };

        setCouponCodeValid(true);
        setCouponCode(code);
        // console.log(couponRate);
      })
      .catch((error) => {
        Toast({
          type: "error",
          message: error.message || "Something went wrong",
        });
      });
  };

  const cancelCouponCode = () => {
    couponRate.current = null;
    setCouponCode("");
    setCouponCodeValid(false);
  };

  const location = useLocation();

  const ScheduleSession = (errCb) => {
    // console.log(location, "locationlocation");
    console.log("hit");
    // if (!defaulCardDetails?.default)
    //   return Toast({
    //     type: "info",
    //     message: "Need atleast one default card details",
    //   });

    let trainingtype = sessionData?.sessionType;
    if (trainingtype.includes("1 ON 1")) {
      trainingtype = "1on1";
    } else if (trainingtype.includes("SOCIAL")) {
      trainingtype = "social";
    } else if (trainingtype.includes("CLASS")) {
      trainingtype = "class";
    }

    // const tempTrainingActivity =
    //   sessionData?.trainingType?.value || bookingData?.activity?.value;

    const scheduleBody = {
      trainerId: selectedTrainerData?.id || selectedTrainerData?.id,
      title: trainingAcivityType || "Motto Session",
      trainingType: trainingtype,
      sessionType: sessionData?.preferedTrainingMode,
      activity: trainingAcivityType,
      sessionStatus: "created",
      sessionDate:
        bookingData?.date || getFormatDate(selectedTimes[0], "YYYY-MM-DD"),
      sessionStartTime: convertToESTMs(bookingData?.start_slot),
      sessionEndTime: convertToESTMs(bookingData?.end_slot),
      city: sessionData?.location?.value,
      venue: sessionData?.trainingVenue?.value,
      price: sessionData?.price,
      // sessionMode: queryQbject?.availability?.value,
      sessionMode: "EarlyBird",
      paidByUser: checkPayAhead ? checkPayAhead : trainingtype === "1on1",
      participantsCount: checkPayAhead ? parseInt(friendsCount) : 0,
    };

    if (isCouponCodeValid) {
      scheduleBody["code"] = coupondCode;
    }

    if (Object.keys(mottoPassDataVal).length === 0) {
      console.log(mottoPassDataVal, "empty");
    } else {
      console.log(mottoPassDataVal, "full");

      if ("availPass" in mottoPassDataVal) {
        console.log(mottoPassDataVal.availPass[0].id, "pl");
        scheduleBody.availPass = mottoPassDataVal.availPass[0].id;
      } else {
        scheduleBody.newPass = mottoPassDataVal;
        console.log(mottoPassDataVal);
      }
    }

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
          checkPayAhead && res.session.trainingType === "social"
            ? history.push("/users/dashboard/session")
            : history.push("/user/with-friends");
        }

        // restProps.resetUserDetails();
      })
      .catch((error) => {
        errCb && errCb();
        Toast({
          type: "error",
          message: error.message || "Something went wrong",
        });
        // console.log(error);
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
    updatePricing();
    setCheckPayAhead(false);
    console.log(mottoPassDataVal);

    let tempTrainingActivity = "";

    let selectedFilterData = localStorage.getItem("persistFilters");

    if (selectedFilterData) {
      let tempData = JSON.parse(selectedFilterData);

      const { trainingType = {} } = tempData?.label || {};

      //  console.log(tempData);

      tempTrainingActivity = trainingType?.label || "Motto Session";

      setTrainigType(tempTrainingActivity);
    }

    window.scrollTo(0, 0);
    if (Object.keys(sessionData).length === 0)
      return history.push("/trainer/find");
  }, []);

  let userData = {
    profilePicture: tempTrainerData?.profilePicture,
    userName: `${tempTrainerData?.firstName || ""} ${
      tempTrainerData?.lastName || ""
    }`,
  };

  const updatePricing = () => {
    const trainingLocation = sessionData?.trainingVenue?.value;
    const isVirtual = sessionData?.preferedTrainingMode === "virtual";
    const tempTrainerData = trainerData || selectedTrainerData;

    const pricingObject = {};

    // if (sessionType.includes("SOCIAL")) {
    const virtualSesion2People =
      tempTrainerData?.socialSessionPricing?.virtualSessionfor2People;
    const virtualSesion3People =
      tempTrainerData?.socialSessionPricing?.virtualSessionfor3People;
    const virtualSesion4People =
      tempTrainerData?.socialSessionPricing?.virtualSessionfor4People;

    const inPerson2People =
      trainingLocation === "trainerLocation"
        ? tempTrainerData?.socialSessionPricing
            ?.inPeronAtTrainerLocationfor2People
        : tempTrainerData?.socialSessionPricing
            ?.inPeronAtClientLocationfor2People;

    const inPerson3People =
      trainingLocation === "trainerLocation"
        ? tempTrainerData?.socialSessionPricing
            ?.inPeronAtTrainerLocationfor3People
        : tempTrainerData?.socialSessionPricing
            ?.inPeronAtClientLocationfor3People;

    const inPerson4People =
      trainingLocation === "trainerLocation"
        ? tempTrainerData?.socialSessionPricing
            ?.inPeronAtTrainerLocationfor4People
        : tempTrainerData?.socialSessionPricing
            ?.inPeronAtClientLocationfor4People;

    pricingObject["social"] = {
      twoPeople: isVirtual ? virtualSesion2People : inPerson2People,
      threePeople: isVirtual ? virtualSesion3People : inPerson3People,
      foureople: isVirtual ? virtualSesion4People : inPerson4People,
    };
    // } else if (sessionType.includes("CLASS")) {
    const virtualSesion15People =
      tempTrainerData?.classSessionPricing?.virtualSessionfor15People;

    const inPerson15People =
      trainingLocation === "trainerLocation"
        ? tempTrainerData?.classSessionPricing
            ?.inPersonAttrainerLocationfor15People
        : tempTrainerData?.classSessionPricing
            ?.inPersonAtclientLocationfor15People;

    pricingObject["class"] = {
      fifteenPeople: isVirtual ? virtualSesion15People : inPerson15People,
    };

    let tempData = [...accordionData];

    if (sessionData?.sessionType === "SOCIAL SESSION") {
      tempData = [
        {
          title: "Social Session",
          session: "1 Session / 2 People",
          session1: "1 Session / 3 People",
          session2: "1 Session / 4 People",
          price: "$65.00 / Person",
          price1: "$65.00 / Person",
          price2: "$65.00 / Person",
          people: 2,
          people1: 3,
          people2: 4,
          isPrice: true,
        },
        {
          title: "Cancellation Session",
          session: "Cancellation Fee",
          price: "Free up to 24 hours",
          isPrice: false,
        },
      ];
      tempData[0] = {
        ...tempData[0],
        price: !isNaN(pricingObject.social.twoPeople)
          ? parseFloat(pricingObject.social.twoPeople)
          : null,
        price1: !isNaN(pricingObject.social.threePeople)
          ? parseFloat(pricingObject.social.threePeople)
          : null,
        price2: !isNaN(pricingObject.social.foureople)
          ? parseFloat(pricingObject.social.foureople)
          : null,
      };
    } else if (sessionData?.sessionType === "CREATE A CLASS") {
      tempData = [
        {
          title: "Class Session",
          session: "Class (5-15 People)",
          price: "$15.00 / Person",
          isPrice: true,
          people: 15,
        },
        {
          title: "Cancellation Session",
          session: "Cancellation Fee",
          price: "Free upto 24 hours",
          isPrice: false,
        },
      ];
      tempData[0] = {
        ...tempData[0],
        price: !isNaN(pricingObject.class.fifteenPeople)
          ? parseFloat(pricingObject.class.fifteenPeople)
          : null,
      };
    } else {
      tempData = [
        {
          title: "One on One Session",
          session: "1 sesson / 1 person",
          price: "$15.00 / Person",
          isPrice: true,
        },
        {
          title: "Cancellation Session",
          session: "Cancellation Fee",
          price: "Free upto 24 hours",
          isPrice: false,
        },
      ];
      tempData[0] = {
        ...tempData[0],
        price: !isNaN(sessionData?.price)
          ? parseFloat(sessionData?.price)
          : null,
      };
    }

    setAccordionData(tempData);
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
                      <hr></hr>

                      {sessionData?.sessionType === "SOCIAL SESSION" ? (
                        <div className="info-desc">
                          <div className="user_friends">
                            <div className="too_high">
                              Session cost too high? Train with friends and
                              split the bill
                            </div>
                            <p>
                              If you choose to pay for the entire session,
                              you'll be charged for the total number of
                              participants you select in the dropdown{" "}
                              <span className="font-weight-bold text-black">
                                {" "}
                                located below.
                              </span>{" "}
                              If you choose not to cover the entire session, you
                              will be prompted on the next page to invite
                              friends and your session price will be split
                              amongst you and your friends who accept your
                              invite.
                            </p>
                          </div>
                        </div>
                      ) : null}

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
                              checkPayAhead={checkPayAhead}
                              handleChange={() =>
                                setAgreedToTerms(!agreedToTerms)
                              }
                              handleChangeCPA={handleChangeCPA}
                              ScheduleSession={ScheduleSession}
                              handleFriendsCount={handleFriendsCount}
                              mottoPassDataVal={mottoPassDataVal}
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
              </div>
              <div className="user_payment_right">
                <div className="user_payment_profile">
                  <UserAvatar {...userData} className="img-md" />

                  <div className="up_profile_name">
                    <h2>{userData.userName}</h2>
                    <p>{areaOfExpertise}</p>
                  </div>
                </div>
                <div className="user_details_wrapper">
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN IN</h3>
                    <div className="user_data_inner">
                      <img src={StrengthIcon} alt="icon" />
                      <h4>{trainingAcivityType || "Motto session"}</h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I want to train on</h3>
                    <div className="user_data_inner">
                      <img src={SheduleIcon} alt="icon" />
                      {/* {JSON.stringify(trainingDate)}
                      {JSON.stringify(
                        getFormatDate(
                          selectedTimes[0],
                          "MMMM Do, YYYY hh:mm A."
                        )
                      )} */}
                      <h4>
                        {
                          /* {getFormatDate(
                          selectedTimes[0],
                          "MMMM Do, YYYY hh:mm A."
                        )} */
                          moment(bookingData?.start_slot).format(
                            "MMMM DD YYYY hh:mm A"
                          )
                        }
                      </h4>
                    </div>
                  </div>
                  <div className="user_payment_details">
                    <h3>I WANT TO TRAIN AT</h3>
                    <div className="user_data_inner">
                      <img src={LocationIcon} alt="icon" />
                      <h4>
                        {sessionData?.preferedTrainingMode === "inPerson"
                          ? `${sessionData?.trainingVenue?.label}`
                          : "Virtual"}
                      </h4>
                    </div>
                  </div>
                  <hr />
                  <div className="user_coupon">
                    <h2>Have a discount code? Add it now!</h2>
                    <div className="position-relative mt-3">
                      <input
                        type="text"
                        placeholder="Enter the coupon code here"
                        className={`mt-0 ${
                          isCouponCodeValid ? "btn-disabled" : ""
                        }`}
                        onChange={handleCouponCode}
                        value={coupondCode}
                        disabled={isCouponCodeValid}
                      />
                      <button
                        onClick={checkCouponCode}
                        className="apply-btn"
                        disabled={isCouponCodeValid}
                      >
                        Apply
                      </button>
                      {isCouponCodeValid && (
                        <div className="position-relative d-flex align-items-center">
                          <p className="w-100 text-black fs-12 mb-0">
                            Coupon Code <b>“{`${coupondCode}`}”</b> applied!
                          </p>
                          <button
                            className="btn btn-transparent cancel-btn"
                            onClick={cancelCouponCode}
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="user_service_details">
                    {/* 
                    //issue no 415 - invalid date and price/hour needs to be removed
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="service_header">
                        <h3 className="fs-20 text-secondary">
                          Service Details
                        </h3>
                      </div>
                      <div className="service_header">
                        <h3 className="fs-20 text-secondary">Price / Hour</h3>
                      </div>
                    </div> */}
                    <br></br>
                    {"passType" in mottoPassDataVal ? <h4>Availed Motto Pass: ${mottoPassDataVal?.price}</h4
                    > : <AccordationService
                      data={accordionData}
                      couponRate={couponRate}
                      isCouponApplied={isCouponCodeValid}
                    />
                    
                    }

                    {/* <AccordationService
                      data={accordionData}
                      couponRate={couponRate}
                      isCouponApplied={isCouponCodeValid}
                    /> */}

                    <div className="user_service_wrapper">
                      {/* <div className="user_service_left">
                        <div className="service_header">
                          <div className="user_data_table_left">
                            {sessionData?.sessionType === "1 ON 1 TRAINING" && (
                              <h5>{sessionData?.sessionType}</h5>
                            )}
                            <h5>Discount</h5>
                            <h5>Transaction Fee</h5>
                            <h5>Tax</h5>
                            <h5>Cancellation Fee</h5>
                            <hr />
                            <h3>Total</h3>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="user_service_right">
                        <div className="service_header">
                          <div className="user_data_table_right">
                            {sessionData?.sessionType === "1 ON 1 TRAINING" && (
                              <h5>{`$${sessionData?.price}`}</h5>
                            )}
                            <h5>{`-$${discountPrice}`}</h5>
                            <h5>{`$${trxFee}`}</h5>
                            <h5>{`$${tax}`}</h5>
                            <h5>{`$${cancellationFee}`}</h5>
                            <hr />
                            <h3>{totalPrice}</h3>
                          </div>
                        </div>
                      </div> */}
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

const AccordationService = ({ data, couponRate, isCouponApplied }) => {
  let couponRateValue = 0;

  if (isCouponApplied && typeof couponRate?.current === "function") {
    couponRateValue = couponRate.current() / 100;
  }
  return (
    <div className="d-flex flex-column">
      {data.map((item, index) => {
        // console.log(item);

        if (!item?.price && !item.price1 && !item.price2) return null;

        // console.log(item?.price1, couponRateValue);

        let tempPrice = item?.price * couponRateValue;
        let tempPrice1 = item?.price1 * couponRateValue;
        let tempPrice2 = item?.price2 * couponRateValue;

        let couponAdjustedPrice = item?.price - tempPrice;
        let couponAdjustedPrice1 = item?.price1 - tempPrice1;
        let couponAdjustedPrice2 = item?.price2 - tempPrice2;

        let finalPrice = isCouponApplied ? couponAdjustedPrice : item?.price;
        let finalPrice1 = isCouponApplied ? couponAdjustedPrice1 : item?.price1;
        let finalPrice2 = isCouponApplied ? couponAdjustedPrice2 : item?.price2;

        return (
          <div
            className={`TF_data_item ${
              index === data.length - 1 ? "no-border" : ""
            }`}
            key={index}
          >
            <div className="TF_data_title">
              <h3 className="fs-20 my-3">{item.title}</h3>
            </div>

            <div className="session-block">
              {item?.price ? (
                <div className="session-item d-flex aling-items-center">
                  <p className="fs-20 text-secondary">{item.session}</p>
                  <p className="ml-auto fs-20 text-secondary">
                    {item.people
                      ? `$${parseFloat((finalPrice || 0) / item.people).toFixed(
                          1
                        )} / Person`
                      : item.isPrice
                      ? `$${finalPrice} / Person`
                      : item?.price}
                  </p>
                </div>
              ) : (
                ""
              )}
              {item.price1 ? (
                <div className="session-item d-flex aling-items-center">
                  <p className="fs-20 text-secondary">{item.session1}</p>
                  {/* <p className="ml-auto fs-20 text-secondary">{`$${item?.price1} / Person`}</p> */}
                  <p className="ml-auto fs-20 text-secondary">
                    {" "}
                    {item.people1
                      ? `$${parseFloat(
                          (finalPrice1 || 0) / item.people1
                        ).toFixed(1)} / Person`
                      : item.isPrice
                      ? `$${finalPrice1} / Person`
                      : item?.price1}
                  </p>
                </div>
              ) : (
                ""
              )}
              {item.price2 ? (
                <div className="session-item d-flex aling-items-center">
                  <p className="fs-20 text-secondary">{item.session2}</p>
                  {/* <p className="ml-auto fs-20 text-secondary">{`$${item?.price2} / Person`}</p> */}
                  <p className="ml-auto fs-20 text-secondary">
                    {item.people2
                      ? `$${parseFloat(
                          (finalPrice2 || 0) / item.people2
                        ).toFixed(1)} / Person `
                      : item.isPrice
                      ? `$${finalPrice2} / Person`
                      : item?.price2}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
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
  mottoPassDataVal: state.userReducer.mottoPass,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      scheduleSession,
      resetUserDetails,
      updateUserDetails,
      verifyCouponCodeApi: verifyCouponCodeAct,
    },
    dispatch
  );
};

const UserPayments = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPaymentsFC);

export default UserPayments;
