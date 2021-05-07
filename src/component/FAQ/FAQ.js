import React, { useState } from "react";
import {
    general,
    bookSession,
    socialSession,
    billing,
    locations,
    manageSession,
} from "./FAQData";
import "./styles.scss";
import "./accordion.scss";
import { Link as LinkScroll } from "react-scroll";

const FAQ = () => {
    return (
        <>
            <div className="faq_outer_container">
                <div className="hero_banner">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="container">
                    <div className="faq_wrapper">
                        <div className="data_container">
                            <div className="side_menu_contents">
                                <nav className="sidebar_left active">
                                    <LinkScroll to="general" spy={true}>
                                        general
                                    </LinkScroll>
                                    <LinkScroll to="bookSession" spy={true}>
                                        booking a session
                                    </LinkScroll>
                                    <LinkScroll to="socialSession" spy={true}>
                                        Social sessions & classes
                                    </LinkScroll>
                                    <LinkScroll to="billing" spy={true}>
                                        billing
                                    </LinkScroll>
                                    <LinkScroll to="locations" spy={true}>
                                        locations & equipment
                                    </LinkScroll>
                                    <LinkScroll to="manageSession" spy={true}>
                                        managing a session
                                    </LinkScroll>
                                </nav>
                            </div>
                            <div className="sidebar_right">
                                <div className="card_item item1" id="general">
                                    <h6>General</h6>
                                    <div>
                                        {general.map((data) => (
                                            <Accordion data={data} />
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="card_item item1"
                                    id="bookSession"
                                >
                                    <h6>Booking A Session</h6>
                                    <div>
                                        {bookSession.map((data) => (
                                            <Accordion data={data} />
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="card_item item1"
                                    id="socialSession"
                                >
                                    <h6>Social Sessions & Classes</h6>
                                    <div>
                                        {socialSession.map((data) => (
                                            <Accordion data={data} />
                                        ))}
                                    </div>
                                </div>
                                <div className="card_item item1" id="billing">
                                    <h6>Billing</h6>
                                    <div>
                                        {billing.map((data) => (
                                            <Accordion data={data} />
                                        ))}
                                    </div>
                                </div>
                                <div className="card_item item1" id="locations">
                                    <h6>Locations & Equipment</h6>
                                    <div>
                                        {locations.map((data) => (
                                            <Accordion data={data} />
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="card_item2 item2"
                                    id="manageSession"
                                >
                                    <h6>Managing A Session</h6>
                                    <div>
                                        {manageSession.map((data) => (
                                            <Accordion data={data} />
                                        ))}
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

function Accordion(props) {
    const [isOpenAccodion, setAccordion] = useState(false);
    const { question, answer } = props.data;

    return (
        <>
            {/* <div className="contain_wrapper"> */}
            <div className="accordion-wrapper">
                <div className="title_wrapper">
                    <h5
                        className={`accordion-title ${
                            isOpenAccodion ? "open" : ""
                        }`}
                        onClick={() => setAccordion(!isOpenAccodion)}
                    >
                        {question}
                    </h5>
                </div>
                <div
                    className={`accordion-item ${
                        !isOpenAccodion ? "collapsed" : ""
                    }`}
                >
                    <div className="accordion-content">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
}
export default FAQ;
