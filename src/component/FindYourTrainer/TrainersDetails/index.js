import React, { useState, useRef, useEffect } from "react";
// import { TrainerData } from "./TrainerData";
import "./trainer.sass";
import onHoverImage from "../../../assets/files/FindTrainer/onHover.svg";
import onImage from "../../../assets/files/SignUp/Arrow.svg";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";
import { Link } from "react-router-dom";
import { history } from "helpers";

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

const TrainerCards = (props) => {
  const [bestMatchData, setbestMatchData] = useState([]);

  useEffect(() => {
    setbestMatchData(props.content);

    Object.keys(bestMatchData).map((item) => {
      console.log(bestMatchData[item], "best");
    });
  });
  const [hoverRef, isHovered] = useHover();
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
          {/* {console.log("dd", bestMatchData[0]["firstName"])} */}

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
                    {bestMatchData[data]["firstName"]}&ensp;
                    {bestMatchData[data]["lastName"]}
                  </h3>
                  <h6>{data.role}</h6>
                  <p>
                    {data.describe}
                    <Link to="profile">Read More</Link>
                  </p>
                </div>
                <div className="card-button">
                  <button
                    ref={hoverRef}
                    style={{
                      backgroundColor: isHovered ? "red" : "#53BFD2",
                    }}
                    onClick={() => {
                      console.log(bestMatchData[data]);
                      history.push({
                        pathname: "/user/scheduler",
                        state: { trainerId: bestMatchData[data]["id"], trainerData: bestMatchData[data] },
                      });
                    }}
                  >
                    book a session
                    <img src={onImage} alt="icon" />
                    {/* {isHovered ? (
                      <img src={onHoverImage} alt="icon" />
                    ) : (
                      <img src={onImage} alt="icon" />
                    )} */}
                    <p>
                      from{" "}
                      <span>
                        {
                          bestMatchData[data]["oneOnOnePricing"][
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
            These matches are the perfect fit based on your filters. The prices
            shown are for 1:1 sessions. Click on the trainer profile for group
            rates!
          </p>
        </div>
      </div>
    </>
  );
};

export default TrainerCards;
