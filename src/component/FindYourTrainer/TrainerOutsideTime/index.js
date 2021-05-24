import React, { useState, useRef, useEffect } from "react";
import { TrainerData } from "../TrainersDetails/TrainerData";
import "./styles.sass";
import onHoverImage from "../../../assets/files/FindTrainer/onHover.svg";
import onImage from "../../../assets/files/SignUp/Arrow.svg";
import { Link } from "react-router-dom";
// import Arrow from "../../../assests/SignUp/ArrowSecondary.svg";
import { history } from "helpers";
import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";

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

const TrainerCardOutside = (props) => {
  const [hoverRef, isHovered] = useHover();

  const [outSideData, setOutSideData] = React.useState([]);

  React.useEffect(() => {
    setOutSideData(props.content)

  //   Object.keys(outSideData).map((item) => {
  //     console.log(outSideData[item], "ouyt");
  // });

  console.log("outside");
  
  }, [])

  
  React.useEffect(() => {
   
  //   Object.keys(outSideData).map((item) => {
  //     console.log(outSideData[item], "ouyt");
  // });

  setOutSideData(props.content)

  console.log("outside");
  
  }, [props.content])

  return (
    <>
      <div className="container">
        <HeadingTrainer />
         
        <div className="row">
          {Object.keys(outSideData).map((data, index) => {
            return (
              <div className="card" key={index}>
              <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  style={{ objectFit: "cover" }}
              />

              <div className="card-body">
                  <h3>
                      {outSideData[data]["firstName"]}&nbsp;
                      {outSideData[data]["lastName"]}
                  </h3>
                  <h6>
                      {
                          outSideData[data][
                              "areaOfExpertise"
                          ][0]
                      }
                      {outSideData[data][
                          "areaOfExpertise"
                      ][1]
                          ? ","
                          : ""}
                      &nbsp;
                      {
                          outSideData[data][
                              "areaOfExpertise"
                          ][1]
                      }
                      {outSideData[data][
                          "areaOfExpertise"
                      ][2]
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
                              console.log(
                                outSideData[data]
                              );
                              history.push({
                                  pathname:
                                      "/trainer/profile",
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
                      // ref={hoverRef}
                      // style={{
                      //     backgroundColor: isHovered
                      //         ? "red"
                      //         : "#53BFD2",
                      // }}
                      style={{
                          backgroundColor: "#53BFD2",
                      }}
                      onClick={() => {
                          console.log(outSideData[data]);
                          history.push({
                              pathname: "/user/scheduler",
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
                      book a session
                      <BlackCircleButton />
                      {/* {isHovered ? (
    <img src={onHoverImage} alt="icon" />
  ) : (
    <img src={onImage} alt="icon" />
  )} */}
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
