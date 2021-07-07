import React, { useState, useEffect } from "react";
import "./styles.scss";
import Mail from "../../assets/files/SignUp/Email Icon.svg";
import Person from "../../assets/files/SignUp/Person Icon.svg";
import Phone from "../../assets/files/SignUp/Phone Icon.svg";
import Jenny from "../../assets/files/TrainerDashboard/Message/Jenny.png";
import StrengthIcon from "../../assets/files/UserOnboard/PaymentAsset/Strength Icon.svg";
import SheduleIcon from "../../assets/files/UserOnboard/PaymentAsset/Shedule Icon.svg";
import LocationIcon from "../../assets/files/UserOnboard/PaymentAsset/Location Icon.svg";
import ArrowHoverBlacked from "../common/BlackCircleButton/ArrowHoverBlacked";
import "../HowItWork/TrainerMotto/styles.scss";
import BlueHoverButton from "../common/BlueArrowButton";
import { Link } from "react-router-dom";
import { history } from "helpers";
import { userSession, updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SESSION_URL } from "helpers/baseURL";
import { getFormatDate } from "service/helperFunctions";
import ReactPhoneInput from "react-phone-input-2";
import { userApi } from "service/apiVariables";
import { api } from "service/api";
import { Toast } from "service/toast";
import validate from "validate.js";
import { UserAvatar } from "component/common/UserAvatar";

let tempaccordionData = [
  {
    title: "Social Session",
    session: "1 Session / 2 People",
    session1: "1 Session / 3 People",
    session2: "1 Session / 4 People",
    price: "$65.00 / Person",
    price1: "$65.00 / Person",
    price2: "$65.00 / Person",
    isPrice: true,
  },
  {
    title: "Class Session",
    session: "Class (5-15 People)",
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

const TrainWithFriendsClass = ({
  userSession,
  sessionData,
  scheduleSession,
  trainerData,
  bookingData,
  defaulCardDetails,
  queryQbject,
  selectedTimes,
  selectedTrainerData,
  submittedData,
  updateUserDetails,
  ...restProps
}) => {
  const [friendsInput, setFriendsInput] = useState([
    {
      friendName: "",
      friendEmail: "",
      friendPhone: "",
    },
  ]);

  const [accordionData, setAccordionData] = useState(tempaccordionData);
  const [errors, setErrors] = useState([]);
  const [iWillPay, setIPay] = useState(false);
  const [maxUser, setMaxUser] = useState(0);

  let trainingType = localStorage.getItem("sessionTrainingType");
  const handleChangeFriendInput = (index, event) => {
    const values = [...friendsInput];

    const { name, value } = event.target;
    values[index][name] = value;

    if (errors["friendsData"] && errors["friendsData"][index]) {
      let tempErrors = { ...errors };
      tempErrors["friendsData"][index][name] = undefined;
    }

    setFriendsInput(values);
  };

  const handleAddFriendFields = () => {
    setFriendsInput([
      ...friendsInput,
      { friendName: "", friendEmail: "", friendPhone: "" },
    ]);
  };

  useEffect(() => {
    const { getSessionData } = userApi;
    let sessionId = submittedData?.id;

    getSessionData.id = sessionId;

    api({ ...getSessionData }).then(({ data }) => {
      const { friends = [] } = data;

      let trainingType = "";

      if (data.trainingType === "social") {
        trainingType = "SOCIAL SESSION";
      } else if (data.trainingType === "class") {
        trainingType = "CREATE A CLASS";
      } else if (data.trainingType === "1on1") {
        trainingType = "1 ON 1 TRAINING";
      }

      let sessionData = {
        location: { label: data?.city || "", value: data?.city || "" },
        trainingVenue: {
          label:
            data.venue === "clientLocation"
              ? "Your Location"
              : "Trainer's Location",
          value: data?.venue || "",
        },
        preferedTrainingMode: data?.sessionType || "",
        price: data.price || "",
        sessionType: trainingType || "",
        trainingType: {
          label: data?.activity || "",
          value: data?.activity || "",
        },
      };

      let bookingData = {
        start_slot: data.sessionStartTime,
        end_slot: data.sessionEndTime,
        date: data.sessionDate,
      };

      let selectedTrainerData = {
        ...data.trainerDetail,
      };

      let tempFriendsData = friends.map(({ userDetail, userId }) => ({
        friendName: userDetail?.firstName || "",
        friendEmail: userDetail?.email || "",
        friendPhone: userDetail?.phoneNo || "",
        id: userId,
        isSubmitted: true,
      }));

      setIPay(data.paidByUser);

      if (tempFriendsData.length > 0) setFriendsInput(tempFriendsData);

      let reduxData = {
        bookingData,
        sessionData,
        selectedTrainerData,
        submittedData: { ...data },
      };

      updateUserDetails(reduxData);
    });
  }, []);

  const updateSessionApi = (e) => {
    e.preventDefault();
    let sessionId = submittedData?.id;

    const { editSessionData } = userApi;

    let tempPhoneData = friendsInput.filter(
      ({ friendEmail, friendName, friendPhone, id }) =>
        friendEmail && friendName && friendPhone && !id
    );

    let payload = {
      sessionId,
      friends: tempPhoneData.map(
        ({ friendEmail, friendName, friendPhone }) => ({
          email: friendEmail,
          firstName: friendName,
          phoneNo: !friendPhone.includes("+") ? `+${friendPhone}` : friendPhone,
        })
      ),
      paidByUser: iWillPay,
    };

    let validateData = {
      friendsData: [...friendsInput],
    };

    if (!validateFields(validateData)) return;
    editSessionData.body = payload;

    api({ ...editSessionData })
      .then((data) => {
        Toast({ type: "success", message: data.message || "Success" });
        history.push("/users/dashboard/session");
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
  };

  // REMOVE FRINEDS API
  const handleRemoveFriend = (e, friendId, index) => {
    e.preventDefault();

    let tempFriendsData = [...friendsInput];

    tempFriendsData = tempFriendsData.filter((_, i) => i !== index);

    if (!friendId) {
      setFriendsInput(tempFriendsData);

      let tempErrors = {
        ...errors,
      };

      tempErrors["friendsData"] = tempErrors["friendsData"].filter(
        (_, i) => i !== index
      );

      setErrors(tempErrors);

      return;
    }

    const { editSessionData } = userApi;

    let sessionId = submittedData?.id;

    let payload = {
      sessionId,
      removeFriend: friendId,
    };

    editSessionData.body = payload;

    api({ ...editSessionData })
      .then((data) => {
        Toast({ type: "success", message: data.message || "Success" });
        setFriendsInput(tempFriendsData);
        //  history.push("/users/dashboard/session");
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
    // console.log(friendId);
  };

  const validationRules = () => {
    validate.validators.array = (arrayItems, itemConstraints) => {
      const arrayItemErrors = arrayItems.reduce((errors, item, index) => {
        let isAnyData = Object.values({
          friendEmail: item.friendEmail,
          friendName: item.friendName,
          friendPhone: item.friendName,
        }).some((data) => data !== "");

        let error;

        let itemValidation = { ...item };

        if (index === 0 || isAnyData) {
          error = validate(itemValidation, itemConstraints);
        }
        if (error) {
          errors[index] = error;
        } else {
          errors[index] = null;
        }

        return errors;
      }, []);

      let isNoError = arrayItemErrors.every((error) => error === null);

      return isNoError ? null : arrayItemErrors;
    };
    let nameValidation = {
      format: {
        pattern: /^[a-zA-Z ]*$/,
        flags: "i",
        message: "must be alphabets and spaces",
      },
      length: {
        minimum: 3,
        tooShort: "must contain alteast 3 character",
        maximum: 35,
        tooLong: "must contain less than 35 character",
      },
    };
    return {
      friendsData: {
        array: {
          friendEmail: {
            presence: {
              allowEmpty: false,
              message: "^Email is required",
            },
            email: true,
          },
          friendPhone: {
            presence: {
              allowEmpty: false,
              message: "^Phone number is required",
            },
            length: {
              minimum: 8,
              tooShort: "^Invalid number",
              maximum: 15,
              tooLong: "^Invalid number",
            },
          },
          friendName: {
            presence: {
              allowEmpty: false,
              message: "^Name is required",
            },
            ...nameValidation,
          },
        },
      },
    };
  };

  const validateFields = (data) => {
    let fieldInvalidList = validate(data, validationRules());

    if (fieldInvalidList !== undefined) {
      let errors = {
        ...fieldInvalidList,
      };
      setErrors({ ...errors, ...fieldInvalidList });
    }

    return !fieldInvalidList;
  };

  const getUserSessions = () => {
    userSession()
      .then(() => {
        history.push({
          pathname: "/users/dashboard/session",
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const trainingLocation = sessionData?.trainingVenue?.value;

    const activity =
      bookingData?.activity?.label || sessionData?.trainingType?.label;

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
    tempData[1] = {
      ...tempData[1],
      price: !isNaN(pricingObject.class.fifteenPeople)
        ? parseFloat(pricingObject.class.fifteenPeople)
        : null,
    };

    if (tempData[1]?.price) {
      setMaxUser(15);
    } else if (tempData[0]?.price2) {
      setMaxUser(4);
    } else if (tempData[0]?.price1) {
      setMaxUser(3);
    } else if (tempData[0]?.price) {
      setMaxUser(2);
    }

    setAccordionData([...tempData]);
    // }

    window.scrollTo(0, 0);

    // console.log(pricingObject);
  }, []);

  const tempTrainerData = trainerData || selectedTrainerData;

  const areaOfExpertise = tempTrainerData?.areaOfExpertise?.toString();

  const trainingDate = bookingData?.start_slot
    ? getFormatDate(bookingData?.start_slot, "MMMM Do, YYYY hh:mm A.", true)
    : "";

  const sessionType = sessionData?.sessionType || "";

  const normalSessionValidation =
    (sessionType.includes("SOCIAL") && friendsInput.length < 3) ||
    (sessionType.includes("CLASS") && friendsInput.length < 14);

  const maxSessionValidation = friendsInput.length + 1 < maxUser;

  let userProps = {
    profilePicture: tempTrainerData?.profilePicture,
    userName: `${tempTrainerData?.firstName || ""} ${
      tempTrainerData?.lastName || ""
    }`,
  };

  return (
    <>
      <div className="TF_outter_container">
        <div className="container">
          <div className="TF_inner_container">
            <div className="TF_headers">
              <h2>Your session is booked! Start adding your friends</h2>
              <p>
                Invite as many friends as you’d like, the friends that accept
                will automatically be added in correspondence to session size!
                Once they accept your session, your rate will automatically be
                adjusted.
              </p>
            </div>
            <div className="TF_wrapper">
              <div className="TF_inner_wrapper">
                <div className="TF_wrapper_left">
                  <div className="TF_wrapper_content">
                    <h2>Add Friends to Your Session</h2>
                    <div className="TF_form">
                      <form onSubmit={updateSessionApi}>
                        <h3>Enter your friend's details</h3>
                        <div className="TF_inner_form">
                          {friendsInput.map((input, index) => {
                            return (
                              <div
                                key={index}
                                className="TF_wrapper_input d-flex flex-column"
                              >
                                <h4 className="text-left">
                                  Friend #{index + 1}
                                </h4>
                                {/* <div> */}
                                <div className="inner_input">
                                  <input
                                    type="text"
                                    placeholder="Name"
                                    name="friendName"
                                    value={input.friendName}
                                    onChange={(event) =>
                                      handleChangeFriendInput(index, event)
                                    }
                                    disabled={input.isSubmitted}
                                    className={`${
                                      input.isSubmitted ? "disable-btn" : ""
                                    }`}
                                  />
                                  <img src={Person} alt="icon" />
                                </div>
                                {errors["friendsData"] &&
                                  errors["friendsData"][index] &&
                                  errors["friendsData"][index][
                                    "friendName"
                                  ] && (
                                    <span className="text-danger fs-12 d-inline-block w-100">
                                      {
                                        errors["friendsData"][index][
                                          "friendName"
                                        ][0]
                                      }
                                    </span>
                                  )}
                                <div className="TF_input">
                                  <div className="inner_input">
                                    <div className="w-100 mr-3">
                                      <div className="position-relative">
                                        <input
                                          type="text"
                                          placeholder="Email"
                                          name="friendEmail"
                                          value={input.friendEmail}
                                          onChange={(event) =>
                                            handleChangeFriendInput(
                                              index,
                                              event
                                            )
                                          }
                                          disabled={input.isSubmitted}
                                          className={`${
                                            input.isSubmitted
                                              ? "disable-btn"
                                              : ""
                                          }`}
                                        />

                                        <img src={Mail} alt="icon" />
                                      </div>
                                      {errors["friendsData"] &&
                                        errors["friendsData"][index] &&
                                        errors["friendsData"][index][
                                          "friendEmail"
                                        ] && (
                                          <span className="text-danger fs-12 d-inline-block w-100">
                                            {
                                              errors["friendsData"][index][
                                                "friendEmail"
                                              ][0]
                                            }
                                          </span>
                                        )}
                                    </div>
                                    <div className="w-100">
                                      <div className="position-relative">
                                        <ReactPhoneInput
                                          disableDropdown
                                          countryCodeEditable={false}
                                          country="us"
                                          placeholder="Phone"
                                          inputProps={{
                                            name: "phone",
                                          }}
                                          specialLabel=""
                                          value={input.friendPhone}
                                          name="phoneNo"
                                          onChange={(e) => {
                                            handleChangeFriendInput(index, {
                                              target: {
                                                name: "friendPhone",
                                                value: e,
                                              },
                                            });
                                          }}
                                          disabled={input.isSubmitted}
                                          className={`${
                                            input.isSubmitted
                                              ? "disable-btn"
                                              : ""
                                          }`}
                                        />

                                        <img src={Phone} alt="icon" />
                                      </div>
                                      {errors["friendsData"] &&
                                        errors["friendsData"][index] &&
                                        errors["friendsData"][index][
                                          "friendPhone"
                                        ] && (
                                          <span className="text-danger fs-12 d-inline-block w-100">
                                            {
                                              errors["friendsData"][index][
                                                "friendPhone"
                                              ][0]
                                            }
                                          </span>
                                        )}
                                    </div>
                                  </div>
                                </div>

                                {(input.id || index !== 0) && (
                                  <button
                                    className="btn-link btn text-underline fw-400 text-right"
                                    onClick={(e) =>
                                      handleRemoveFriend(e, input.id, index)
                                    }
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            );
                          })}
                          <div className="TF_remember_left">
                            <input
                              className="TF_check"
                              type="checkbox"
                              name="iWillPay"
                              checked={iWillPay}
                              onChange={() => setIPay(!iWillPay)}
                            />
                            <label>
                              I will pay for all the people that I will be
                              inviting to my social session or class
                            </label>
                          </div>
                        </div>

                        <div className="TF_button">
                          <button onClick={updateSessionApi}>
                            Invite Friends <ArrowHoverBlacked />{" "}
                          </button>
                          {normalSessionValidation && maxSessionValidation ? (
                            <h5 onClick={handleAddFriendFields}>
                              + Add More Friends
                            </h5>
                          ) : null}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="TF_wrapper_right">
                  <div className="TF_right">
                    <div className="TF_profile">
                      <UserAvatar {...userProps} className="img-md" />
                      <div className="TF_name">
                        <h2>{`${tempTrainerData?.firstName || ""} ${
                          tempTrainerData?.lastName || ""
                        }`}</h2>
                        <p>{areaOfExpertise}</p>
                      </div>
                    </div>
                    <div className="TF_wrapper">
                      <div className="TF_details">
                        <h3>I WANT TO TRAIN IN</h3>
                        <div className="TF_data_inner">
                          <img src={StrengthIcon} alt="icon" />
                          <h4>
                            {bookingData?.activity?.label ||
                              sessionData?.trainingType?.label}
                          </h4>
                        </div>
                      </div>
                      <div className="TF_details">
                        <h3>I want to train on</h3>
                        <div className="TF_data_inner">
                          <img src={SheduleIcon} alt="icon" />
                          <h4>
                            {trainingDate ||
                              getFormatDate(selectedTimes[0], "YYYY-MM-DD")}
                          </h4>
                        </div>
                      </div>
                      <div className="TF_details">
                        <h3>I WANT TO TRAIN AT</h3>
                        <div className="TF_data_inner">
                          <img src={LocationIcon} alt="icon" />
                          <h4>{`${sessionData?.trainingVenue?.label}`}</h4>
                        </div>
                      </div>
                      <hr />

                      <div className="TF_service_details">
                        <div className="TF_service_wrapper">
                          <div className="TF_service_left">
                            <div className="TF_service_header">
                              <div className="TF_inner_header">
                                <h3>Service Details</h3>
                                <h3>Price / Hour</h3>
                              </div>
                              <AccordationService data={accordionData} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TF_skip">
                <h2 className="w-100 text-right">Not right now? </h2>
                <Link onClick={getUserSessions}>
                  CONTINUE TO ACCOUNT <BlueHoverButton />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const AccordationService = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <>
      {data.map((item, index) => {
        // console.log(item);

        if (!item?.price && !item.price1 && !item.price2) return null;

        return (
          <div
            className={`TF_data_item ${
              index === data.length - 1 ? "no-border" : ""
            }`}
            key={index}
          >
            <div className="TF_data_title" onClick={() => toggle(index)}>
              <h3>{item.title}</h3>
              {/* <div className={selected === index ? "line show" : "line"}></div> */}
            </div>

            <div className="session-block">
              {item?.price ? (
                <div className="session-item d-flex aling-items-center">
                  <p>{item.session}</p>
                  <p className="ml-auto">
                    {item.isPrice ? `$${item?.price} / Person` : item?.price}
                  </p>
                </div>
              ) : (
                ""
              )}
              {item.price1 ? (
                <div className="session-item d-flex aling-items-center">
                  <p>{item.session1}</p>
                  <p className="ml-auto">{`$${item?.price1} / Person`}</p>
                </div>
              ) : (
                ""
              )}
              {item.price2 ? (
                <div className="session-item d-flex aling-items-center">
                  <p>{item.session2}</p>
                  <p className="ml-auto">{`$${item?.price2} / Person`}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
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
  submittedData: state.userReducer.submittedData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userSession,
      updateUserDetails,
    },
    dispatch
  );
};

const TrainWithFriends = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainWithFriendsClass);

export default TrainWithFriends;
