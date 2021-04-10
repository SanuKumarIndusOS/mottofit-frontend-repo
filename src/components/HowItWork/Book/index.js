import React from "react";
import { Link } from "react-router-dom";
import ArrowHover from "../../common/ButtonIcon/ArrowHover";
import Icon1 from "../../../assets/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assets/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assets/Home/Experience/icon/Icon3.png";
import "./styles.scss";

const Book = () => {
    return (
        <>
            <div className="container">
                <div className="book_main">
                    <div className="book_grid">
                        <div className="book_left">
                            <div className="book_left_content">
                                <h5>Book with Motto is simple</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    psum has been the industry’s standard dummy
                                    text.
                                </p>
                                <div className="book_left_link">
                                    <Link to="/">
                                        Book your Session
                                        <ArrowHover />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="book_right">
                            <div className="book_right_content">
                                <RenderRightCol
                                    image={Icon1}
                                    heading="Select your TRAINING preferences"
                                    description="Set your session filters to easily start browsing from our community of the highest quality personal trainers."
                                />
                                <RenderRightCol
                                    image={Icon2}
                                    heading="Curate your fitness experience"
                                    description="Train your way 1 : 1 with a trainer, social sessions for 2-4 people and group training classes for 5-15 people."
                                />
                                <RenderRightCol
                                    image={Icon3}
                                    heading="Crush your workout & enjoy rewards"
                                    description="Benefit both in and outside of the gym! More sessions mean more perks for you from our brand partners."
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
