import React, { useState, useEffect } from "react";
import "./styles.scss";
import LogoImage from "../../../assets/files/SVG/Motto Logo.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Index() {
  const [keys, setKey] = useState("");
  const history = useHistory();

  useEffect(() => {
    setKey("");
  }, []);
  return (
    <div className="ham_menu">
      <div className="inner">
        <div className="header">
          <img src={LogoImage} alt="logo" style={{ height: "30px" }} />
          <div className="close" onClick={() => history.goBack()}>
            x
          </div>
        </div>
        <div className="menu">
          <div className="menu_item">
            <Link to="/who-we-are" style={{ color: "#2C2C2C" }}>
              Who We Are
            </Link>
          </div>
          <hr></hr>
          <div className="menu_item">
            <Link to="/how-it-works" style={{ color: "#2C2C2C" }}>
              How it Works
            </Link>
          </div>
          <hr></hr>
          <div className="menu_item">
            <Link to="/mobiles/filter" style={{ color: "#2C2C2C" }}>
              Find your trainer
            </Link>
          </div>
          <hr></hr>
          <div className="menu_item">
            <Link to="/trainer/signup" style={{ color: "#2C2C2C" }}>
              Be a Trainer
            </Link>
          </div>
          <hr></hr>
        </div>
        <div className="search">
          Search to Know More
          <form
            onSubmit={() => {
              history.push({
                pathname: "/trainer/results",
                state: {
                  key: keys,
                },
              });
            }}
          >
            <input
              className="input"
              type="text"
              placeholder="Search trainers & workouts"
              onChange={(e) => {
                setKey(e.target.value);
              }}
            ></input>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Index;
