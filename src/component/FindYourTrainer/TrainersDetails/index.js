import React, { useState, useEffect } from "react";
import "./trainer.sass";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";

const TrainerCards = (props) => {
    const [bestMatchData, setbestMatchData] = useState([]);
    console.log(bestMatchData, "bestmtch");

    useEffect(() => {
        setbestMatchData(props.content);

        Object.keys(bestMatchData).map((item) => {
            console.log(bestMatchData[item], "best");
        });
    });
    const [visible, setVisible] = useState(3);
    const showMoreItems = () => {
        setVisible((showCard) => showCard + 3);
    };

    let no_match = <div></div>;
    if (bestMatchData.length === 0) {
        no_match = <h1 className="no_match">No Matches found</h1>;
    }

    return (
        <>
            <div className="container">
                <HeadingTrainer />
                {no_match}
                <div className="row" style={{ alignleft: "auto" }}>
                    {Object.keys(bestMatchData).map((data, index) => {
                        return (
                            <div className="card" key={index}>
                                <img
                                    className="card-img-top"
                                    src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    style={{ objectFit: "cover" }}
                                />

                                <div className="card-body">
                                    <h3>
                                        {bestMatchData[data]["firstName"]}&nbsp;
                                        {bestMatchData[data]["lastName"]}
                                    </h3>
                                    <h6>
                                        {
                                            bestMatchData[data][
                                                "areaOfExpertise"
                                            ][0]
                                        }
                                        {bestMatchData[data][
                                            "areaOfExpertise"
                                        ][1]
                                            ? ","
                                            : ""}
                                        &nbsp;
                                        {
                                            bestMatchData[data][
                                                "areaOfExpertise"
                                            ][1]
                                        }
                                        {bestMatchData[data][
                                            "areaOfExpertise"
                                        ][2]
                                            ? ","
                                            : ""}
                                        &nbsp;
                                        {
                                            bestMatchData[data][
                                                "areaOfExpertise"
                                            ][2]
                                        }
                                        &nbsp;
                                        {
                                            bestMatchData[data][
                                                "areaOfExpertise"
                                            ][3]
                                        }
                                    </h6>
                                    <p>
                                        {bestMatchData[data]["description"]}

                                        <button
                                            onClick={() => {
                                                console.log(
                                                    bestMatchData[data]
                                                );
                                                history.push({
                                                    pathname:
                                                        "/trainer/profile",
                                                    state: {
                                                        trainerId:
                                                            bestMatchData[data][
                                                                "id"
                                                            ],
                                                        trainerData:
                                                            bestMatchData[data],
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
                                            console.log(bestMatchData[data]);
                                            history.push({
                                                pathname: "/user/scheduler",
                                                state: {
                                                    trainerId:
                                                        bestMatchData[data][
                                                            "id"
                                                        ],
                                                    trainerData:
                                                        bestMatchData[data],
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
                                                    bestMatchData[data][
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

export default TrainerCards;
