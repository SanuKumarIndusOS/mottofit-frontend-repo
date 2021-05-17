import React, { useState } from "react";
import "./styles.scss";
import PersonIcon from "assets/files/TrainerDashboard/MyEarning/Person Icon.svg";
import SheduleIcon from "assets/files/TrainerDashboard/MyEarning/Shedule Icon.svg";
import AmountIcon from "assets/files/TrainerDashboard/MyEarning/Amount Icon.svg";
import Mastercard from "assets/files/TrainerDashboard/MyEarning/Mastercard.svg";
import Earn from "assets/files/TrainerDashboard/MyEarning/Earn.svg";
import Profile from "assets/files/TrainerDashboard/MyEarning/Profile Picture.svg";
import Client from "assets/files/TrainerDashboard/MyEarning/Image 1.svg";
// import Select from "react-select";

const options = [
    { value: "q1", label: "Q1 2021" },
    { value: "maimi", label: "Maimi" },
    { value: "hampton", label: "Hampton" },
    { value: "plam", label: "Plam Beach" },
];
export const TrainerMyEarnings = () => {
    const [selectedOption, setSelectedOption] = useState([]);

    return (
        <>
            <div className="outter_earn_container">
                <div className="container">
                    <div className="inner_earn_container">
                        <div className="earn_heading">
                            <div className="earnHeader">
                                <h2>My Earnings</h2>
                            </div>
                            <div className="earnDropdown_tabs">
                                <div className="tab_outter_earn">1</div>
                                <div className="dd_outter_earn">
                                    {/* <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className="session_location_select"
                  /> */}
                                </div>
                            </div>
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
                                                    <h2>$500</h2>
                                                    <p>Today</p>
                                                </div>
                                                <div className="day_earn">
                                                    <h2>$2,000</h2>
                                                    <p>This Week</p>
                                                </div>
                                                <div className="month_earn">
                                                    <h2>$7,000</h2>
                                                    <p>This Month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="earn_charts">
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
                                </div>
                            </div>
                        </div>
                        <TransactionSection />
                    </div>
                </div>
            </div>
        </>
    );
};
const TransactionSection = () => {
    return (
        <>
            <div className="outter_ts">
                <div className="s">
                    <div className="inner_ts">
                        <div className="ts_header">
                            <h2>Transaction</h2>
                        </div>
                        <div className="ts_overflow_container">
                            {TransactionTempData.map((data, index) => {
                                return (
                                    <div className="ts_wrapper" key={index}>
                                        <div className="ts_card">
                                            <div className="card_profile">
                                                <img
                                                    src={data.clientImg}
                                                    className="profile_card_img"
                                                />
                                                <div className="profile_card_content">
                                                    <h4>Client</h4>
                                                    <div className="wrap_content_ts">
                                                        <img
                                                            src={PersonIcon}
                                                            alt="icon"
                                                        />
                                                        <p>{data.clientName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_transaction">
                                                <div className="transaction_card_content">
                                                    <h4>Transaction Date</h4>
                                                    <div className="wrap_content_ts">
                                                        <img
                                                            src={SheduleIcon}
                                                            alt="icon"
                                                        />
                                                        <p>{data.transTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_amount">
                                                <div className="amount_card_content">
                                                    <h4>Amount</h4>
                                                    <div className="wrap_content_ts">
                                                        <img
                                                            src={AmountIcon}
                                                            alt="icon"
                                                        />
                                                        <p>{data.amount}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_payment">
                                                <div className="payment_card_content">
                                                    <h4>Payment type</h4>
                                                    <img
                                                        src={Mastercard}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const TransactionTempData = [
    {
        clientImg: Profile,
        clientName: "John Doe",
        transTime: "Feb 16,2021 at 2:20 P.M",
        amount: "$500",
    },
    {
        clientImg: Client,
        clientName: "Jeremy Clark",
        transTime: "Feb 16,2021 at 2:20 P.M",
        amount: "$500",
    },
    {
        clientImg: Profile,
        clientName: "John Doe",
        transTime: "Feb 16,2021 at 2:20 P.M",
        amount: "$500",
    },
    {
        clientImg: Client,
        clientName: "Jeremy Clark",
        transTime: "Feb 16,2021 at 2:20 P.M",
        amount: "$500",
    },
];
