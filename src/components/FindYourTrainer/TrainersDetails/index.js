import React, { useState, useRef, useEffect } from "react";
import { TrainerData } from "./TrainerData";
import "./trainer.sass";
import onHoverImage from "../../../assets/FindTrainer/onHover.svg";
import onImage from "../../../assets/SignUp/Arrow.svg";
import Arrow from "../../../assets/SignUp/ArrowSecondary.svg";

function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);

                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref] // Recall only if ref changes
    );

    return [ref, value];
}

const TrainerCards = () => {
    const [hoverRef, isHovered] = useHover();
    const [visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((showCard) => showCard + 3);
    };

    return (
        <>
            <div className="container">
                <HeadingTrainer />

                <div className="row">
                    {TrainerData.slice(0, visible).map((data, index) => {
                        return (
                            <div className="card" key={index}>
                                <img
                                    className="card-img-top"
                                    src={data.image}
                                    alt={data.name}
                                />
                                <div className="card-body">
                                    <h3>{data.name}</h3>
                                    <h6>{data.role}</h6>
                                    <ReadMore maxChar={110}>
                                        {data.describe}
                                    </ReadMore>
                                </div>
                                <div className="card-button">
                                    <button
                                        ref={hoverRef}
                                        style={{
                                            backgroundColor: isHovered
                                                ? "red"
                                                : "#53BFD2",
                                        }}
                                    >
                                        book a session
                                        {isHovered ? (
                                            <img
                                                src={onHoverImage}
                                                alt="icon"
                                            />
                                        ) : (
                                            <img src={onImage} alt="icon" />
                                        )}
                                        <p>
                                            from <span>{data.price}</span>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="showmore">
                    <button className="showmore_btn" onClick={showMoreItems}>
                        {visible ? "View More Trainers " : null}
                        <img src={Arrow} alt="icon" />
                    </button>
                </div>
            </div>
        </>
    );
};

const HeadingTrainer = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper_heading">
                    <h2>Your Motto Matches</h2>
                    <p>
                        These matches are the perfect fit based on your filters.
                        The prices shown are for 1:1 sessions. Click on the
                        trainer profile for group rates!
                    </p>
                </div>
            </div>
        </>
    );
};

const ReadMore = ({ children, maxChar = 110 }) => {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxChar) : text;
    function toggleIsTruncated() {
        setIsTruncated(!isTruncated);
    }

    return (
        <>
            <p className="has-text-left">
                {resultString}
                <span onClick={toggleIsTruncated} className="readmore">
                    {isTruncated ? "Read more" : "Read less"}
                </span>
            </p>
        </>
    );
};

export default TrainerCards;
