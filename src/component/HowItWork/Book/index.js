import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../../assets/files/HowItWorks/Icon 1.svg";
import Icon2 from "../../../assets/files/HowItWorks/Icon 2.svg";
import Icon3 from "../../../assets/files/HowItWorks/Icon 3.svg";

import "./styles.scss";
import BlueHoverButton from "component/common/BlueArrowButton";

const Book = () => {
    return (
        <>
            <div className="container">
                <div className="book_main">
                    <div className="book_grid">
                        <div className="book_left">
                            <div className="book_left_content">
                                <h5>Book with Motto is simple!</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    psum has been the industry’s standard dummy
                                    text.
                                </p>
                                <div className="book_left_link">
                                    <Link to="/">
                                        Book your Session
                                        <BlueHoverButton />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="book_right">
                            <div className="book_right_content">
                                <RenderRightCol
                                    image={Icon1}
                                    heading="Choose your training preference, time & trainer"
                                    description="set your session filters to easily start browsing from our dedicated trainer community.
                                    "
                                />
                                <RenderRightCol
                                    image={Icon2}
                                    heading="Create your own fitness experience"
                                    description="Train 1 on 1, as social sessions for up to 4 people, or group training (do we want this to say “classes”?)  for 5-15 people. Add friends to social sessions and classes after checkout. 
                                    "
                                />
                                <RenderRightCol
                                    image={Icon3}
                                    heading="Crush your workout & get rewarded"
                                    description="Benefit both in and out of the gym! More sessions mean more perks for you from our brand partners.
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const RenderRightCol = (props) => {
    return (
        <>
            <div className="book_right_innerItems">
                <img src={props.image} alt="icon" />
                <div>
                    <h3>{props.heading}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default Book;
