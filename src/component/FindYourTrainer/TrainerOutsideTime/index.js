import React, { useState } from "react";
import "./styles.sass";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
import {COMMON_URL} from "helpers/baseURL"


const TrainerCardOutside = (props) => {
    const [outSideData, setOutSideData] = React.useState([]);
    const urlmy = COMMON_URL;

    React.useEffect(() => {
        setOutSideData(props.content);

        console.log("outside");
    }, []);

    React.useEffect(() => {
        setOutSideData(props.content);

        console.log("outside");
    }, [props.content]);

    return (
        <>
            <div className="container">
                <HeadingTrainer />

                <div className="row">
                    {Object.keys(outSideData).map((data, index) => {
                        let imgdb = `${urlmy}${outSideData[data]["profilePicture"]}`;
                        console.log(imgdb, "imgdb");
                        return (
                            <div className="card" key={index}>
                                <img
                                    className="card-img-top"
                                    src={imgdb}
                                    style={{ objectFit: "cover" }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                                    }}
                                />

                                <div className="card-body">
                                    <h3 style={{ textTransform: "capitalize" }}>
                                        {outSideData[data]["firstName"]}&nbsp;
                                        {outSideData[data]["lastName"]}
                                    </h3>
                                    <h6>
                                        {
                                            outSideData[data][
                                                "areaOfExpertise"
                                            ][0]
                                        }
                                        {outSideData[data]["areaOfExpertise"][1]
                                            ? ","
                                            : ""}
                                        &nbsp;
                                        {
                                            outSideData[data][
                                                "areaOfExpertise"
                                            ][1]
                                        }
                                        {outSideData[data]["areaOfExpertise"][2]
                                            ? ","
                                            : ""}
                                        &nbsp;
                                        {
                                            outSideData[data][
                                                "areaOfExpertise"
                                            ][2]
                                        }
                                        &nbsp;
                                        {
                                            outSideData[data][
                                                "areaOfExpertise"
                                            ][3]
                                        }
                                    </h6>
                                    <p>
                                        {outSideData[data]["description"]}

                                        <button
                                            onClick={() => {
                                                console.log(outSideData[data]);
                                                history.push({
                                                    pathname: `/trainer/profile/${outSideData[data]["id"]}`,
                                                    state: {
                                                        trainerId:
                                                            outSideData[data][
                                                                "id"
                                                            ],
                                                        trainerData:
                                                            outSideData[data],
                                                    },
                                                });
                                            }}
                                        >
                                            Read More
                                        </button>
                                    </p>
                                </div>
                                <div className="card-button">
                                    <button
                                        style={{
                                            backgroundColor: "#53BFD2",
                                        }}
                                        onClick={() => {
                                            console.log(outSideData[data]);
                                            history.push({
                                                pathname: "/user/scheduler",
                                                state: {
                                                    trainerId:
                                                        outSideData[data]["id"],
                                                    trainerData:
                                                        outSideData[data],
                                                },
                                            });
                                        }}
                                    >
                                        book a session
                                        <BlackCircleButton />
                                        <p>
                                            from{" "}
                                            <span>
                                                {
                                                    outSideData[data][
                                                        "oneOnOnePricing"
                                                    ][
                                                        "inPersonAtClientLocation"
                                                    ]
                                                }
                                            </span>
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
