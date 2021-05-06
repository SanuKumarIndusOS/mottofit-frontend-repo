import React from "react";
import "./styles.scss";

import BlueHoverButton from "../common/BlueArrowButton";
import { Link } from "react-router-dom";

const data = {
    point1:
        "PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY ACCESSING OR USING MOTTO APPLICATIONS OR ANY SERVICES PROVIDED BY US, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS AND CONDITIONS, DO NOT ACCESS OR USE THE FIND YOUR TRAINER WEBSITE, APPLICATION OR ANY SERVICES PROVIDED BY US.",
    point3:
        " MOTTO may modify this Agreement's terms and conditions at any time without notice. Continued use of the Services and the Motto Site after a change in this Agreement, or after implementation of any other new policy constitutes acceptance of such change or policy. IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT OR ANY REVISED VERSION OF THIS AGREEMENT, PLEASE DO NOT USE THIS SITE OR OUR SERVICES.",
    point4:
        " You understand that our Services are intended for use only by individuals healthy enough to perform strenuous exercise and follow a general nutrition plan and, may not be suitable or recommended to all individuals, including but not limited to, pregnant women or people who suffer from an underlying medical condition or who have special dietary needs. Our Services may utilize the Physical Activity Readiness Questionnaire (PAR-Q) in assessing the safety of, or possible risks of, exercising for you based on your answers. This assessment requires that all information provided by you is true, complete and correct and further, requires that you not omit any relevant information regardless of whether we have asked about such information. Furthermore, in becoming a user of the Services, you affirm that a physician has specifically approved your use of the Services, or that all of the following statements are true:",
    point5:
        "No physician has ever informed you that you have a heart condition or that you should only do physical activities recommended by a physician",
    point6: "You have never felt chest pain when engaging in physical activity",
    point7:
        "You have not experienced chest pain when not engaged in physical activity at any time within the past month",
    point8:
        "You have never lost your balance because of dizziness and you have never lost consciousness",
    point9:
        "You do not have a bone or joint problem that could be made worse by a change in your physical activity",
    point10:
        "Your physician is not currently prescribing drugs for your blood pressure or heart condition",
    point11:
        "You do not have a history of high blood pressure, and no one in your immediate family has a history of high blood pressure or heart problems",
    point12: "You are not pregnant, breastfeeding or lactating",
    point13:
        "You do not have a condition of high-cholesterol, diabetes, obesity or arthritis",
    point14:
        "You do not know of any other reason you should not exercise or follow a general nutrition plan",
    point15:
        "BEFORE USING OUR SERVICES, YOU SHOULD CONSULT YOUR DOCTOR OR OTHER PROFESSIONAL HEALTHCARE PROVIDER. THE USE OF ANY INFORMATION OR PROGRAMS PROVIDED ON THE SERVICES IS SOLELY AT YOUR OWN RISK. IF YOU THINK YOU MAY HAVE A MEDICAL EMERGENCY, CALL YOUR DOCTOR OR 911 IMMEDIATELY.",
    point16:
        "IF AT ANYTIME DURING YOUR EXERCISE WORKOUT YOU DO NOT FEEL WELL, MAKE SURE YOU STOP IMMEDIATELY AND SEEK MEDICAL ADVICE OF A MEDICAL PROFESSIONAL IF REQUIRED.",
    point17:
        " THE CONTENT AVAILABLE VIA THE SERVICES IS PROVIDED WITH THE UNDERSTANDING THAT NEITHER THE COMPANY NOR ITS AFFILIATES OR USERS ARE ENGAGED IN RENDERING MEDICAL, COUNSELING, LEGAL, OR OTHER PROFESSIONAL SERVICES OR ADVICE. SUCH CONTENT IS INTENDED SOLELY AS A GENERAL EDUCATIONAL AID. IT IS NOT INTENDED AS MEDICAL OR HEALTHCARE ADVICE, OR TO BE USED FOR MEDICAL DIAGNOSIS OR TREATMENT, FOR ANY INDIVIDUAL PROBLEM. IT IS ALSO NOT INTENDED AS A SUBSTITUTE FOR PROFESSIONAL ADVICE AND SERVICES FROM A QUALIFIED HEALTHCARE PROVIDER FAMILIAR WITH YOUR UNIQUE FACTS. NOTHING STATED OR POSTED ON THIS SITE OR AVAILABLE THROUGH ANY SERVICES ARE INTENDED TO BE, AND MUST NOT BE TAKEN TO BE, THE PRACTICE OF MEDICINE. OUR RECOMMENDED WORKOUT PLANS AND EXERCISES OR NUTRITION PLANS, EVEN IF THEY ARE TAILORED TO INDIVIDUAL USERS, SHOULD NOT BE MISCONSTRUED AS MEDICAL ADVICE, DIAGNOSES OR TREATMENT. ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTHCARE PROVIDER REGARDING ANY MEDICAL CONDITION AND BEFORE STARTING ANY NEW TREATMENT. ",
    point18:
        "Neither the Company nor any of its trainers or Affiliates will be liable for any physical or mental injury or illness that may result, whether directly or indirectly, from any of our recommended workout plans or exercises or nutrition plans. While we may provide guidelines such as written descriptions, pictures, or videos describing how to perform specific exercises or activities, you assume sole responsibility for performing those exercises or activities with proper form, as risk of injury or illness increases with improper form.",
};

const Terms = () => {
    return (
        <>
            <div className="outter_terms_container">
                <div className="container">
                    <div className="div_outer">
                        <TermsComponent data={data} />
                    </div>

                    <div className="readmore_button">
                        <Link to="">
                            Read More
                            <BlueHoverButton />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const TermsComponent = ({ data }) => {
    return (
        <>
            <div className="div_outer_wrapper box1">
                <h2>Terms of Use</h2>
                <p className="common_margin">{data.point1}</p>
                <p className="common_margin">
                    This USER Agreement (the "Agreement") and the policies
                    referred to herein contain the complete terms and conditions
                    that apply to your use of the personal training services
                    (the "Services") being offered at bookmotto.com all
                    affiliated web sites and applications owned and operated
                    solely by Dap Fitness, LLC. As used in this Agreement,
                    "Motto" or “Company” refer to Dap Fitness, LLC, and "USER"
                    or "you" refers to you. USE OF THE SERVICES AND THE MOTTO
                    SITE CONSTITUTES KNOWING ACCEPTANCE AND ACKNOWLEDGEMENT OF
                    THIS USER AGREEMENT, AND MOTTO’S PRIVACY POLICY
                    (COLLECTIVELY, THE “MOTTO POLICIES”).
                </p>
                <p className="common_margin">{data.point3}</p>
            </div>
            <div className="div_outer_wrapper box2">
                <h5>USE OF SERVICE; NO MEDICAL ADVICE</h5>
                <p className="common_margin">{data.point4}</p>
                <ul>
                    <li className="common_margin_li">
                        <span>{data.point5}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point6}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point7}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point8}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point9}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point10}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point11}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point12}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point13}</span>
                    </li>
                    <li className="common_margin_li">
                        <span>{data.point14}</span>
                    </li>
                </ul>
                <p className="common_margin">{data.point15}</p>
                <p className="common_margin">{data.point16}</p>
                <p className="common_margin">{data.point17}</p>
                <p className="common_margin">{data.point18}</p>
            </div>
        </>
    );
};

export default Terms;
