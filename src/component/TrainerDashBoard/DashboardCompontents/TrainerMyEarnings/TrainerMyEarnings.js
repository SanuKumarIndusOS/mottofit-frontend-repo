import React, { useState, useEffect } from "react";
import "./styles.scss";
import PersonIcon from "assets/files/TrainerDashboard/MyEarning/Person Icon.svg";
import SheduleIcon from "assets/files/TrainerDashboard/MyEarning/Shedule Icon.svg";
import AmountIcon from "assets/files/TrainerDashboard/MyEarning/Amount Icon.svg";
import Earn from "assets/files/TrainerDashboard/MyEarning/Earn.svg";
import Profile from "assets/files/TrainerDashboard/MyEarning/Profile Picture.svg";
import { trainerMyEarning } from "action/trainerAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toast } from "../../../../service/toast";
import { history } from "helpers";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import BlueHoverButton from "component/common/BlueArrowButton";

const TrainerMyEarningsClass = ({ trainerMyEarning }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [myEarning, setMyEarning] = useState();
  const [isTrainer, setIsTrainer] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [pageSize, setPageSize] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    getTrainerPaymentHistory();
  }, [pageSize]);

  const handlePagination = () => {
    setPageSize((prevData) => prevData + 1);
  };

  function getTrainerPaymentHistory() {
    const { pathname } = history.location || {};

    let isTrainer = pathname.includes("trainers");

    setIsTrainer(isTrainer);

    let id = localStorage.getItem("user-id");
    trainerMyEarning(id, pageSize, isTrainer)
      .then((data) => {
        setLoading(false);
        setPaymentHistory((prevData) => [...prevData, ...data.history]);

        setTotalSize(data.documentCount);

        setMyEarning(data);
      })
      .catch((error) => {
        Toast({ type: "error", message: error.message || "Error" });
        setLoading(false);
      });
  }

  const totalSizeData = totalSize / 10;

  const showPagination =
    pageSize < totalSizeData && paymentHistory?.length < totalSize;

  // console.log(totalSize, totalSizeData);

  return (
    <>
      <div className="outter_earn_container">
        <div className="container">
          <div className="inner_earn_container">
            <div className="earn_heading">
              <div className="earnHeader w-100">
                <h2>{`${isTrainer ? "My Earnings" : "Payment History"}`}</h2>
              </div>
            </div>

            {isTrainer && (
              <div className="earn_wrapper">
                <div className="earn_graph">
                  <div className="earn_total">
                    <div className="earn_total_inner">
                      <div className="total_item1">
                        <div className="total_data">
                          <img src={Earn} className="earn_image" alt="icon" />
                          <div className="earning_money">
                            <h2>
                              $
                              {myEarning
                                ? parseFloat(
                                    myEarning.totalRevenue?.total_amount || 0
                                  )?.toFixed(2)
                                : "N/A"}
                            </h2>
                            <p>Total Earnings in q1</p>
                          </div>
                        </div>
                      </div>
                      <div className="total_item2">
                        <div className="annual_status">
                          <div className="day_earn">
                            <h2>
                              $
                              {myEarning
                                ? Math.round(
                                    myEarning.dayRevenue?.total_amount || 0
                                  )
                                : "N/A"}
                            </h2>
                            <p>Today</p>
                          </div>
                          <div className="day_earn">
                            <h2>
                              $
                              {myEarning
                                ? Math.round(
                                    myEarning.weekRevenue?.total_amount || 0
                                  )
                                : "N/A"}
                            </h2>
                            <p>This Week</p>
                          </div>
                          <div className="month_earn">
                            <h2>
                              $
                              {myEarning
                                ? Math.round(
                                    myEarning.monthRevenue?.total_amount || 0
                                  )
                                : "N/A"}
                            </h2>
                            <p>This Month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isLoading ? (
              <CommonPageLoader />
            ) : (
              <TransactionSection
                paymentHistory={paymentHistory}
                isTrainer={isTrainer}
                handlePagination={handlePagination}
                showPagination={showPagination}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const TransactionSection = ({
  paymentHistory,
  isTrainer,
  handlePagination,
  showPagination,
}) => {
  return (
    <>
      <div className="outter_ts">
        <div className="s">
          <div className="inner_ts">
            <div className="ts_header">
              <h2>Transaction</h2>
            </div>
            <div className="ts_overflow_container">
              {paymentHistory && paymentHistory.length > 0 ? (
                paymentHistory.map((data, index) => {
                  let date = "";

                  if (data?.userDetail?.createdAt)
                    date = getFormatDate(
                      data?.userDetail?.createdAt,
                      "YYYY-MM-DD"
                    );

                  if (data?.createdAt)
                    date = getFormatDate(data?.createdAt, "YYYY-MM-DD");

                  let userProps = {
                    profilePicture:
                      data?.trainerDetail?.profilePicture ||
                      data?.userDetail?.profilePicture,
                    userName: `${
                      data?.userDetail?.firstName ||
                      data?.trainerDetail?.firstName ||
                      ""
                    } ${
                      data?.userDetail?.lastName ||
                      data?.trainerDetail?.lastName ||
                      ""
                    }`,
                  };
                  return (
                    <div className="ts_wrapper" key={index}>
                      <div className="ts_card row no-gutters">
                        <div className="card_profile col-3">
                          <UserAvatar {...userProps} className="img-md-2" />
                          <div className="profile_card_content">
                            <h4 className="text-uppercase">
                              {!isTrainer ? "Trainer" : "Client"}
                            </h4>
                            <div className="wrap_content_ts">
                              <img src={PersonIcon} alt="icon" />
                              <p
                                style={{
                                  textTransform: "capitalize",
                                }}
                              >
                                {data?.userDetail?.firstName ||
                                  data?.trainerDetail?.firstName}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card_transaction col-3">
                          <div className="transaction_card_content">
                            <h4>Transaction Date</h4>
                            <div className="wrap_content_ts">
                              <img src={SheduleIcon} alt="icon" />
                              <p>{date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card_amount col-2">
                          <div className="amount_card_content">
                            <h4>Amount</h4>
                            <div className="wrap_content_ts">
                              <img src={AmountIcon} alt="icon" />
                              <p>{data?.amount}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card_payment col-2">
                          <div className="payment_card_content">
                            <h4>Payment type</h4>
                            <p
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              {data?.paymentDetail?.card?.brand}
                            </p>
                          </div>
                        </div>
                        <div className="card_payment col-2">
                          <div className="payment_card_content">
                            <h4>Status</h4>
                            <p
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              {data?.status}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h5 className="my-4 text-center">Data not found</h5>
              )}
            </div>
            {showPagination && (
              <div className="d-flex align-items-center justify-content-end py-5">
                <button onClick={handlePagination} className="viewMoreButton">
                  View all Payments <BlueHoverButton />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerMyEarning,
    },
    dispatch
  );
};

const TrainerMyEarnings = connect(
  null,
  mapDispatchToProps
)(TrainerMyEarningsClass);

export default TrainerMyEarnings;
