import React from "react";
import "./style.scss";
const agreeData = [
    {
        firstPoint:
            "I verify that the information I have provided is true and accurate. I also agree that my relationship with Motto is solely as an independent contractor, that I will receive a 1099 at year end as required by the IRS, and that I will be solely responsible for my own taxes. ",
        secondPoint:
            "I understand that any new clients from Motto are required to book and pay for all future sessions through the Motto platform. Violation of this practice can result in being banned from using the Motto platform. I also agree that under no circumstances will I ask clients to reimburse me for additional travel expenses, equipment rentals, or facility fees, nor will any solicitations for gratuities be made. I understand that any facility surcharges or additional expenses I may incur are either included in the Trainer Payout I selected or listed",
        thridPoint:
            "I agree to Mottos policies and professional standards for excellence, including: ensuring my training calendar is accurate at all times, responding to all client communications within 24 hours, not canceling a clients session unless in case of emergency, starting and ending all sessions on time.",
        fouthPoint:
            'Payment processing services to trainers on Motto are provided by Stripe and are subject to the Stripe Connected Account Agreement, which includes the Stripe Terms of Service (collectively, the "Stripe Services Agreement"). By agreeing to these terms or continuing to operate as a trainer on Motto, you agree to be bound by the Stripe Services Agreement, as the same may be modified by Stripe from time to time. As a condition of Motto enabling payment processing services through Stripe, you agree to provide Motto accurate and complete information about you and your business, and you authorize Motto to share it and transaction information related to your use of the payment processing services provided by Stripe.',
        fivthPoint: "Insurance",
        sixthPoint: "Liabilities",
        seventhPoint: "Safety",
        eightPoint: "Confidentiality",
    },
];
const TrainerAgreementSetup = () => {
    return (
        <div className="outer_agreement">
            <div className="container">
                <div className="inner_agreement">
                    <div className="agree_heading">
                        <h2>Trainer Agreement</h2>
                    </div>
                    <div className="agreement_wrapper">
                        {agreeData.map((data, index) => (
                            <div className="agreement_inner_data" key={index}>
                                <p>{data.firstPoint}</p>
                                <p>{data.secondPoint}</p>
                                <p>{data.thridPoint}</p>
                                <p>{data.fouthPoint}</p>
                                <p>{data.fivthPoint}</p>
                                <p>{data.sixthPoint}</p>
                                <p>{data.seventhPoint}</p>
                                <p>{data.eightPoint}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerAgreementSetup;
