import React, { useState } from "react";
import "./styles.scss";
import {
  dataList,
  dataSet1,
  dataSet2,
  dataSet3,
  dataSet4,
  dataSet5,
  dataSet6,
  dataSet7,
  dataSet8,
  dataSet9,
  dataSet10,
  dataSet11,
  dataSet12,
  dataSet13,
  dataListTwo,
  dataSet13_1,
  dataSet13_2,
  dataListTwoMore,
  dataSet14,
  dataSet15,
  dataSet16,
  dataSet17,
  dataSet18,
  dataSet19,
  dataSet20,
  dataSet21,
  dataSet22,
  dataSet23,
  dataSet24,
  dataSet25,
  dataSet26,
  dataSet27,
} from "./termsData";
import BlueHoverButton from "../common/BlueArrowButton";

const Terms = () => {
  const [showMore, setShowMore] = useState(false);

  const showMoreTerms = () => {
    setShowMore(true);
  };
  const showLessTerms = () => {
    setShowMore(false);
  };
  return (
    <>
      <div className="outter_terms_container">
        <div className="container">
          <div className="div_outer">
            <TermsComponentHeader />
            <div className="div_outer_wrapper box2">
              {/* {item.slice(0, 2).map((terms, index) => { */}
              {/* return ( */}
              {/* <>
                                <div>
                                    <TermsComponent
                                        heading={dataList.heading1}
                                        paragraph={dataList.paragraph1}
                                    />
                                    <DataListOne />
                                    <Termsdesc desc={dataList.point15} />
                                    <Termsdesc desc={dataList.point16} />
                                    <Termsdesc desc={dataList.point17} />
                                    <Termsdesc desc={dataList.point18} />
                                    {showMore ? (
                                        <div>
                                            <TermsComponent
                                                heading={dataSet1.heading}
                                                paragraph={dataSet1.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet2.heading}
                                                paragraph={dataSet2.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet3.heading}
                                                paragraph={dataSet3.desc}
                                                hyper={dataSet3.hyper}
                                                linkTo="/privacy"
                                            />
                                            <TermsComponent
                                                heading={dataSet4.heading}
                                                paragraph={dataSet4.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet5.heading}
                                                paragraph={dataSet5.desc}
                                            />
                                            <TermsComponentBold
                                                heading={dataSet6.heading}
                                                paragraph={dataSet6.desc}
                                                bold={dataSet6.bold}
                                                desc1={dataSet6.desc1}
                                                desc2={dataSet6.desc2}
                                            />
                                            <TermsComponent
                                                heading={dataSet7.heading}
                                                paragraph={dataSet7.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet8.heading}
                                                paragraph={dataSet8.desc}
                                            />
                                            <TermsComponentBold
                                                heading={dataSet9.heading}
                                                paragraph={dataSet9.desc}
                                                desc1={dataSet9.desc1}
                                                desc2={dataSet9.desc2}
                                            />
                                            <TermsComponent
                                                heading={dataSet10.heading}
                                                paragraph={dataSet10.desc}
                                            />
                                            <TermsComponentBold
                                                heading={dataSet11.heading}
                                                paragraph={dataSet11.desc}
                                                desc2={dataSet11.desc1}
                                            />
                                            <TermsComponent
                                                heading={dataSet12.heading}
                                                paragraph={dataSet12.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet13.heading}
                                                paragraph={dataSet13.desc}
                                            />
                                            <DataListTwo />
                                            <TermsComponent
                                                paragraph={dataSet13_1.desc}
                                            />
                                            <DataListTwo_More />
                                            <TermsComponentBold
                                                paragraph={dataSet13_2.desc}
                                                desc2={dataSet13_2.desc1}
                                            />
                                            <TermsComponent
                                                heading={dataSet14.heading}
                                                paragraph={dataSet14.desc}
                                            />
                                            <TermsComponentBold
                                                desc2={dataSet14.desc1}
                                            />
                                            <TermsComponent
                                                paragraph={dataSet14.desc2}
                                                hyper={dataSet14.hyper}
                                                linkTo="mail"
                                            />
                                            <TermsComponentBold
                                                heading={dataSet15.heading}
                                                paragraph={dataSet15.desc}
                                                desc2={dataSet15.desc2}
                                            />
                                            <TermsComponent
                                                heading={dataSet16.heading}
                                                paragraph={dataSet16.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet17.heading}
                                                paragraph={dataSet17.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet18.heading}
                                                paragraph={dataSet18.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet19.heading}
                                                paragraph={dataSet19.desc}
                                            />{" "}
                                            <TermsComponent
                                                heading={dataSet20.heading}
                                                paragraph={dataSet20.desc}
                                            />{" "}
                                            <TermsComponent
                                                heading={dataSet21.heading}
                                                paragraph={dataSet21.desc}
                                            />{" "}
                                            <TermsComponent
                                                heading={dataSet22.heading}
                                                paragraph={dataSet22.desc}
                                            />{" "}
                                            <TermsComponent
                                                heading={dataSet23.heading}
                                                paragraph={dataSet23.desc}
                                            />{" "}
                                            <TermsComponent
                                                heading={dataSet24.heading}
                                                paragraph={dataSet24.desc}
                                            />
                                            <TermsComponent
                                                heading={dataSet25.heading}
                                                paragraph={dataSet25.desc}
                                            />
                                            <TermsComponentBold
                                                heading={dataSet26.heading}
                                                paragraph={dataSet26.desc}
                                                desc1={dataSet26.desc1}
                                                desc2={dataSet26.desc2}
                                            />
                                            <TermsComponentBold
                                                paragraph={dataSet26.desc3}
                                                desc1={dataSet26.desc4}
                                                desc2={dataSet26.desc5}
                                            />
                                            <TermsComponentBold
                                                heading={dataSet27.heading}
                                                desc1={dataSet27.desc}
                                                desc2={dataSet27.desc1}
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            </> */}
              {/* );
                            })} */}
            </div>
            {/* <TermsComponent data={data} /> */}
          </div>

          {/* <div className="readmore_button">
            {showMore ? (
              <button onClick={showLessTerms}>
                Read Less
                <BlueHoverButton />
              </button>
            ) : (
              <button onClick={showMoreTerms}>
                Read More
                <BlueHoverButton />
              </button>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};
const DataListOne = () => {
  return (
    <ul>
      <li className="common_margin_li">
        <span>{dataList.point4}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataList.point5}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataList.point6}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataList.point7}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataList.point8}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataList.point10}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataList.point11}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataList.point12}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataList.point13}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataList.point14}</span>
      </li>
    </ul>
  );
};
const DataListTwo = () => {
  return (
    <ul>
      <li className="common_margin_li">
        <span>{dataListTwo.point1}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataListTwo.point2}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwo.point3}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwo.point4}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwo.point5}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwo.point6}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataListTwo.point7}</span>
      </li>
    </ul>
  );
};
const DataListTwo_More = () => {
  return (
    <ul>
      <li className="common_margin_li">
        <span>{dataListTwoMore.point1}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataListTwoMore.point2}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point3}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point4}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point5}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point6}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataListTwoMore.point7}</span>
      </li>
      <li className="common_margin_li">
        <span>{dataListTwoMore.point8}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point9}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point10}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point11}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point12}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point13}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point14}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point15}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point16}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point17}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point18}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point19}</span>
      </li>{" "}
      <li className="common_margin_li">
        <span>{dataListTwoMore.point20}</span>
      </li>{" "}
    </ul>
  );
};

const Termsdesc = (props) => {
  return (
    <>
      <div className="div_outer_wrapper box2">
        <p className="common_margin">{props.desc}</p>
      </div>
    </>
  );
};

const TermsComponent = (props) => {
  return (
    <>
      <div className="div_outer_wrapper box2">
        <h5>{props.heading}</h5>
        <p className="common_margin">
          {props.paragraph}
          <a href={props.linkTo}>{props.hyper}</a>
        </p>
      </div>
    </>
  );
};
const TermsComponentBold = (props) => {
  return (
    <>
      <div className="div_outer_wrapper box2">
        <h5>{props.heading}</h5>
        <p className="common_margin">
          {props.paragraph}
          <strong>{props.bold}</strong>
          {props.desc1}
        </p>
        <p className="common_margin">{props.desc2}</p>
      </div>
    </>
  );
};
const TermsComponentHeader = ({ data }) => {
  return (
    <>
      <div className="div_outer_wrapper box1">
        <h2>Terms of Use</h2>
        {/* <p className="common_margin">{dataList.point1}</p> */}
        <p className="common_margin">
          I verify that the information I have provided is true and accurate. I
          also agree that my relationship with Motto is solely as an independent
          contractor, that I will receive a 1099 at year end as required by the
          IRS, and that I will be solely responsible for my own taxes.
          <br></br>
          <br></br>I understand that any new clients from Motto are required to
          book and pay for all future sessions through the Motto platform.
          Violation of this practice can result in being banned from using the
          Motto platform. I also agree that under no circumstances will I ask
          clients to reimburse me for additional travel expenses, equipment
          rentals, or facility fees, nor will any solicitations for gratuities
          be made. I understand that any facility surcharges or additional
          expenses I may incur are either included in the Trainer Payout I
          selected or listed. I understand that clients are responsible for
          their own conduct, and Motto does not stand responsible for
          interactions between me and clients booked on Motto.
          <br></br>
          <br></br>I agree to Mottos policies and professional standards for
          excellence, including: ensuring my training calendar is accurate at
          all times, responding to all client communications within 24 hours,
          not canceling a client's session unless in case of emergency, starting
          and ending all sessions on time.
          <br></br>
          <br></br>
          Payment processing services to trainers on Motto are provided by
          Stripe and are subject to the Stripe Connected Account Agreement,
          which includes the Stripe Terms of Service (collectively, the "Stripe
          Services Agreement"). By agreeing to these terms or continuing to
          operate as a trainer on Motto, you agree to be bound by the Stripe
          Services Agreement, as the same may be modified by Stripe from time to
          time. As a condition of Motto enabling payment processing services
          through Stripe, you agree to provide Motto accurate and complete
          information about you and your business, and you authorize Motto to
          share it and transaction information related to your use of the
          payment processing services provided by Stripe.
          <br></br>
          <br></br>I verify that I have insurance as a trainer. This insurance
          should have a validity that extends atlerast a period of 30 days post
          the booking of any session. Motto is not responsible for providing
          this insurance. Any cancellation of insurance or failure of renewal is
          not a responsibility of Motto and the consequences of such an event
          fall upon the trainer.
          <br></br>
          <br></br>I agree that I am responsible for safe and professional
          execution of training sessions with all clients, and will be held to
          the standards of professional personal training.
          <br></br>
          <br></br>I agree to implement and adhere to top safety procedures
          during all sessions, with the responsibility of the clients health and
          well being a primary focus.
          <br></br>
          <br></br>I will keep all information about clients and their
          respective sessions confidential and will only divulge and share after
          obtaining permission from the client.
        </p>
        {/* <p className="common_margin">{dataList.point3}</p> */}
      </div>
    </>
  );
};

export default Terms;
