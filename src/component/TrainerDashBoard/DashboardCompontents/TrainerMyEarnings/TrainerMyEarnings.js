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

const TrainerMyEarningsClass = ({ trainerMyEarning }) => {
  const [paymentHistory, setPaymentHistory] = useState();
  const [myEarning, setMyEarning] = useState();
  const [isTrainer, setIsTrainer] = useState(false);

  useEffect(() => {
    getTrainerPaymentHistory();
  }, []);

  function getTrainerPaymentHistory() {
    const { pathname } = history.location || {};

    let isTrainer = pathname.includes("trainers");

    setIsTrainer(isTrainer);

    let id = localStorage.getItem("user-id");
    trainerMyEarning(id, isTrainer)
      .then((data) => {
        setPaymentHistory(data.history);
        console.log(data);

        setMyEarning(data);
      })
      .catch((error) => {
        Toast({ type: "error", message: error.message || "Error" });
        console.log(error, "error");
      });
  }

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
                                ? myEarning.totalRevenue?.total_amount
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
                                ? myEarning.dayRevenue?.total_amount
                                : "N/A"}
                            </h2>
                            <p>Today</p>
                          </div>
                          <div className="day_earn">
                            <h2>
                              $
                              {myEarning
                                ? myEarning.weekRevenue?.total_amount
                                : "N/A"}
                            </h2>
                            <p>This Week</p>
                          </div>
                          <div className="month_earn">
                            <h2>
                              $
                              {myEarning
                                ? myEarning.monthRevenue?.total_amount
                                : "N/A"}
                            </h2>
                            <p>This Month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="earn_charts">
                                    <div className="outter_chart_grid">
                                        <div className="chart_flex">
                                            <div className="chart_contents">
                                                <h3>
                                                    Here’s what the last quarter
                                                    looked like!
                                                </h3>
                                                <p>
                                                    Want to change your payout
                                                    method? Head to Settings
                                                </p>
                                            </div>
                                        </div>
                                        <div className="chart_section">
                                            chart
                                        </div>
                                    </div>
                                </div> */}
                </div>
              </div>
            )}

            <TransactionSection paymentHistory={paymentHistory} />
          </div>
        </div>
      </div>
    </>
  );
};
const TransactionSection = ({ paymentHistory }) => {
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
                  return (
                    <div className="ts_wrapper" key={index}>
                      <div className="ts_card">
                        <div className="card_profile">
                          <img src={Profile} className="profile_card_img" />
                          <div className="profile_card_content">
                            <h4>Client</h4>
                            <div className="wrap_content_ts">
                              <img src={PersonIcon} alt="icon" />
                              <p
                                style={{
                                  textTransform: "capitalize",
                                }}
                              >
                                {data?.userDetail?.firstName}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card_transaction">
                          <div className="transaction_card_content">
                            <h4>Transaction Date</h4>
                            <div className="wrap_content_ts">
                              <img src={SheduleIcon} alt="icon" />
                              <p>{date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card_amount">
                          <div className="amount_card_content">
                            <h4>Amount</h4>
                            <div className="wrap_content_ts">
                              <img src={AmountIcon} alt="icon" />
                              <p>{data?.amount}</p>
                            </div>
                          </div>
                        </div>
                        <div className="card_payment">
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
                      </div>
                    </div>
                  );
                })
              ) : (
                <h5 className="my-4 text-center">Data not found</h5>
              )}
            </div>
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
