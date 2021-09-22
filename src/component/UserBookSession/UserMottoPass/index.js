import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Tick from "../../../assets/files/FindTrainer/Tick 1.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUserDetails, mottoPassData } from "action/userAct";
import { history } from "helpers";

const UserMottoPass = ({ selectedTrainerData, sessionData, mottoPassData }) => {
  const [threeSessionRate, setthreeSessionRate] = React.useState();
  const [tensessionRate, settensessionRate] = React.useState();
  const [sessionType, setsessionType] = React.useState("");

  React.useEffect(() => {
    //const { oneOnOnePricing } = selectedTrainerData?.trainerData;
    // console.log(selectedTrainerData?.trainerData, "sd");
   // console.log(selectedTrainerData );

    mottoPassData({});

    if (sessionData?.preferedTrainingMode === "virtual") {
      setsessionType("(Virtual)");
      setthreeSessionRate(
        selectedTrainerData?.oneOnOnePricing
          ?.passRatefor3SessionAtVirtual
      );
      settensessionRate(
        selectedTrainerData?.oneOnOnePricing
          ?.passRatefor10SessionAtVirtual
      );
    } else {
      if (sessionData?.trainingVenue?.value === "trainerLocation") {
        setsessionType("(Trainer Location)");
        setthreeSessionRate(
          selectedTrainerData?.oneOnOnePricing
            ?.passRatefor3SessionAtTrainerLocation
        );

        settensessionRate(
          selectedTrainerData?.oneOnOnePricing
            ?.passRatefor10SessionAtTrainerLocation
        );
      } else {
        setsessionType("(Client Location)");
        setthreeSessionRate(
          selectedTrainerData?.oneOnOnePricing
            ?.passRatefor3SessionAtClientLocation
        );

        settensessionRate(
          selectedTrainerData?.oneOnOnePricing
            ?.passRatefor10SessionAtClientLocation
        );
      }
    }
  }, []);



  return (
    <>
      <div className="motto_outter_container">
        <div className="container">
          <div className="motto_inner_container">
            <div className="motto_links">
              <div className="links_wrapper">
                <div className="outter_links">
                  <img src={ArrowBack} alt="icon" />
                  <div className="inner_links">
                    <Link to="/user/session-type"> Change your Booking</Link>
                    <div></div>
                  </div>
                </div>
                <div className="outter_links">
                  <div className="inner_links">
                    <Link to="/user/payment">Skip to Payment</Link>
                    <div></div>
                  </div>
                  <img src={ArrowNext} alt="icon" />
                </div>
              </div>
            </div>
            <div className="motto_wrapper">
              <div className="motto_pass_wrapper">
                <h2>Get a Motto Pass to Do More for Less</h2>
                <div className="motto_pass_items">
                  <div className="motto_pass_left">
                    <div class="session_pass">
                      <h3>3 Session Pass</h3>
                    </div>
                    <div className="session_pass_inner">
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          Valid for{" "}
                          <span>
                            {selectedTrainerData?.firstName +
                              " " +
                              selectedTrainerData?.lastName}
                          </span>{" "}
                          only
                        </h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>Non-transferable pass</h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          It can be used anytime within 30 days of the purchase{" "}
                          {sessionType}.
                        </h5>
                      </div>
                      <div className="session_offer">
                        <h1>
                          <span style={{ display: "none" }}>$100</span> $
                          {threeSessionRate}
                          <span className="offer">/ Session </span>
                        </h1>
                      </div>
                    </div>
                    <div className="get_sessionPass">
                      <button
                        onClick={() => {
                          // console.log(sessionData, "hit");

                          let pass_type;
                          let _price;
                          if (sessionData?.preferedTrainingMode === "virtual") {
                            pass_type = "virtual";
                            _price = selectedTrainerData?.oneOnOnePricing
                            ?.passRatefor3SessionAtVirtual
                          }else
                          {
                            pass_type = sessionData?.trainingVenue?.value

                            if(sessionData?.trainingVenue?.value === "clientLocation")
                            {
                              _price = selectedTrainerData?.oneOnOnePricing
                              ?.passRatefor3SessionAtClientLocation
                            }else
                            {
                              _price = selectedTrainerData?.oneOnOnePricing
                              ?.passRatefor3SessionAtTrainerLocation 
                            }
                          }
                          let newPass = {
                            price: _price,
                            purchaseDate: new Date().toISOString().slice(0, 10),
                            passValidity: 30,
                            totalPasses: 3,
                            timeZone: "America/New_York",
                            passType: pass_type,
                          };

                          mottoPassData(newPass);

                          console.log(newPass);
                          history.push("/user/payment")
                          
                        }}
                      >
                        get this pass now <BlueHoverButton />
                      </button>
                    </div>
                    <div className="button_line"></div>
                  </div>

                  <div className="motto_pass_right">
                    <div class="session_pass">
                      <h3>10 Session Pass</h3>
                    </div>
                    <div className="session_pass_inner">
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          Valid for{" "}
                          <span>
                            {selectedTrainerData?.firstName +
                              " " +
                              selectedTrainerData?.lastName}
                          </span>{" "}
                          only
                        </h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>Non-transferable pass</h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          It can be used anytime within 90 days of the purchase{" "}
                          {sessionType}.
                        </h5>
                      </div>
                      <div className="session_offer">
                        <h1>
                          <span style={{ display: "none" }}>$100</span>$
                          {tensessionRate}
                          <span className="offer">/ Session</span>
                        </h1>
                      </div>
                    </div>
                    <div className="get_sessionPass">
                      <button
                      
                      onClick={() => {
                        // console.log(sessionData, "hit");

                        let pass_type;
                        let _price;
                        if (sessionData?.preferedTrainingMode === "virtual") {
                          pass_type = "virtual";
                          _price = selectedTrainerData?.oneOnOnePricing
                          ?.passRatefor10SessionAtVirtual
                        }else
                        {
                          pass_type = sessionData?.trainingVenue?.value

                          if(sessionData?.trainingVenue?.value === "clientLocation")
                          {
                            _price = selectedTrainerData?.oneOnOnePricing
                            ?.passRatefor10SessionAtClientLocation
                          }else
                          {
                            _price = selectedTrainerData?.oneOnOnePricing
                            ?.passRatefor10SessionAtTrainerLocation 
                          }
                        }
                        let newPass = {
                          price: _price,
                          purchaseDate: new Date().toISOString().slice(0, 10),
                          passValidity: 90,
                          totalPasses: 10,
                          timeZone: "America/New_York",
                          passType: pass_type,
                        };

                        console.log(newPass);

                        history.push("/user/payment");
                      }}>
                        get this pass now <BlueHoverButton />
                      </button>
                    </div>
                    <div className="button_line"></div>
                  </div>
                </div>
              </div>
              <div className="session_skip">
                <h4>
                  Not right now?
                  <Link to="/user/payment">
                    CONTINUE TO PAYMENT <BlueHoverButton />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
  queryObject: state.trainerReducer.query,
  selectedTrainerData: state.userReducer.selectedTrainerData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    mottoPassData
  }, dispatch);
};

const UserMottoPassC = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMottoPass);

export default UserMottoPassC;
