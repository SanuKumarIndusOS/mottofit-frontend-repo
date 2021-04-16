import React, { useState, useRef, useEffect } from "react";
import { TrainerData } from "../TrainersDetails/TrainerData";
import "./styles.sass";
import onHoverImage from "../../../assets/FindTrainer/onHover.svg";
import onImage from "../../../assets/SignUp/Arrow.svg";
import {Link} from  'react-router-dom'
// import Arrow from "../../../assests/SignUp/ArrowSecondary.svg";


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

const TrainerCardOutside = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <>
            <div className="container">
                <HeadingTrainer />

                <div className="row">
                    {TrainerData.slice(0, 3).map((data, index) => {
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
                                    <Link to='/trainer-profile'>Read More</Link>
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
            </div>
        </>
    );
};

const HeadingTrainer = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper_headings">
                    <h2>just outside your time</h2>
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

export default TrainerCardOutside;
