import React, { useState, useEffect } from "react";
import "./styles.scss";
import PersonIcon from "assets/files/TrainerDashboard/MyEarning/Person Icon.svg";
import SheduleIcon from "assets/files/TrainerDashboard/MyEarning/Shedule Icon.svg";
import AmountIcon from "assets/files/TrainerDashboard/MyEarning/Amount Icon.svg";
import Mastercard from "assets/files/TrainerDashboard/MyEarning/Mastercard.svg";
import Earn from "assets/files/TrainerDashboard/MyEarning/Earn.svg";
import Profile from "assets/files/TrainerDashboard/MyEarning/Profile Picture.svg";
import Client from "assets/files/TrainerDashboard/MyEarning/Image 1.svg";

export const TrainerMyEarnings = () => {
    const [paymentHistory, setPaymentHistory] = useState();
    const [myEarning, setMyEarning] = useState();
    console.log(paymentHistory, "paymentHistory");
    console.log(myEarning, "myEarning");

    useEffect(() => {
        getTrainerPaymentHistory();
    }, []);

    function getTrainerPaymentHistory() {
        fetch(
            "http://doodlebluelive.com:2336/v1/payment-history/trainer?trainerId=7f007fd1-7042-4c1c-b8ea-3d739cf9f707",
            {
                method: "get",
                headers: new Headers({
                    Authorization: localStorage.getItem("token"),

                    "Content-Type": "application/x-www-form-urlencoded",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data["data"]["history"]);
                setPaymentHistory(data["data"]["history"]);
                setMyEarning(data["data"]);
            })
            .catch((error) => {
                console.log(error, "error");
            });
    }

    return (
        <>
            <div className="outter_earn_container">
                <div className="container">
                    <div className="inner_earn_container">
                        <div className="earn_heading">
                            <div className="earnHeader">
                                <h2>
                                    My Earnings
                                    {/* {paymentHistory.createdAt} */}
                                </h2>
                            </div>
                            {/* <div className="earnDropdown_tabs">
                                <div className="tab_outter_earn">1</div>
                                <div className="dd_outter_earn"></div>
                            </div> */}
                        </div>
                        <div className="earn_wrapper">
                            <div className="earn_graph">
                                <div className="earn_total">
                                    <div className="earn_total_inner">
                                        <div className="total_item1">
                                            <div className="total_data">
                                                <img
                                                    src={Earn}
                                                    className="earn_image"
                                                    alt="icon"
                                                />
                                                <div className="earning_money">
                                                    <h2>$8,500</h2>
                                                    <p>Total Earnings in q1</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="total_item2">
                                            <div className="annual_status">
                                                <div className="day_earn">
                                                    <h2>
                                                        $
                                                        {myEarning &&
                                                        myEarning.dayRevenue &&
                                                        myEarning.dayRevenue
                                                            .total_amount ===
                                                            !null
                                                            ? myEarning
                                                                  .dayRevenue
                                                                  .total_amount
                                                            : "N/A"}
                                                    </h2>
                                                    <p>Today</p>
                                                </div>
                                                <div className="day_earn">
                                                    <h2>
                                                        $
                                                        {myEarning &&
                                                        myEarning.weekRevenue
                                                            ? myEarning
                                                                  .weekRevenue
                                                                  .total_amount
                                                            : "N/A"}
                                                    </h2>
                                                    <p>This Week</p>
                                                </div>
                                                <div className="month_earn">
                                                    <h2>
                                                        $
                                                        {myEarning &&
                                                        myEarning.monthRevenue
                                                            ? myEarning
                                                                  .monthRevenue
                                                                  .total_amount
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
                            {paymentHistory
                                ? paymentHistory.map((data, index) => {
                                      return (
                                          <div
                                              className="ts_wrapper"
                                              key={index}
                                          >
                                              <div className="ts_card">
                                                  <div className="card_profile">
                                                      <img
                                                          src={Profile}
                                                          className="profile_card_img"
                                                      />
                                                      <div className="profile_card_content">
                                                          <h4>Client</h4>
                                                          <div className="wrap_content_ts">
                                                              <img
                                                                  src={
                                                                      PersonIcon
                                                                  }
                                                                  alt="icon"
                                                              />
                                                              <p
                                                                  style={{
                                                                      textTransform:
                                                                          "capitalize",
                                                                  }}
                                                              >
                                                                  {
                                                                      data
                                                                          .userDetail
                                                                          .firstName
                                                                  }
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="card_transaction">
                                                      <div className="transaction_card_content">
                                                          <h4>
                                                              Transaction Date
                                                          </h4>
                                                          <div className="wrap_content_ts">
                                                              <img
                                                                  src={
                                                                      SheduleIcon
                                                                  }
                                                                  alt="icon"
                                                              />
                                                              <p>
                                                                  {
                                                                      data
                                                                          .userDetail
                                                                          .createdAt
                                                                  }
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="card_amount">
                                                      <div className="amount_card_content">
                                                          <h4>Amount</h4>
                                                          <div className="wrap_content_ts">
                                                              <img
                                                                  src={
                                                                      AmountIcon
                                                                  }
                                                                  alt="icon"
                                                              />
                                                              <p>
                                                                  {data.amount}
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="card_payment">
                                                      <div className="payment_card_content">
                                                          <h4>Payment type</h4>
                                                          {/* <img
                                                        src={Mastercard}
                                                        alt="icon"
                                                    /> */}
                                                          <p
                                                              style={{
                                                                  textTransform:
                                                                      "capitalize",
                                                              }}
                                                          >
                                                              {
                                                                  data
                                                                      .paymentDetail
                                                                      .card
                                                                      .brand
                                                              }
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })
                                : "Loading...."}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
