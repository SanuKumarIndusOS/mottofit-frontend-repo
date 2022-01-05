import React from "react";
import "./styles.scss";
import BlueArrowButton from "../../../common/BlueArrowButton";
const TrainerSecurity = () => {
  const data = {
    heading: "Security & Payment Information",
    describe:
      "The following information is mandatory to complete the onboarding of all new trainers. Please ensure you check all the documents before uploading them.",
    id: "Please upload any one of your US government issued ID’s",
    insurance: "Please upload your insurance information",
    payment: "Add your account details for payment",
  };

  const [dropdowm, setdropdown] = React.useState();
  const dropdowmColorChange = () => {
    setdropdown(!dropdowm);
  };
  return (
    <>
      <div className="s_payment_container">
        <div className="s_payment_wrapper">
          <div className="s_payment_heading">
            <h2>{data.heading}</h2>
            <p>{data.describe}</p>
          </div>
          <div className="s_payment_inner container">
            <form>
              <div className="s_payment_item1">
                <h6>{data.id}</h6>
                <div className="s_inputs_payment">
                  <select
                    name="bank"
                    id="id"
                    className={dropdowm ? "active" : "option"}
                    defaultValue={"Default"}
                    onChange={dropdowmColorChange}
                  >
                    <option value="Default" disabled hidden>
                      Select type of ID
                    </option>
                    <option value="USA">USA</option>
                    <option value="FBI">FBI</option>
                    <option value="National">National</option>
                    <option value="United">United</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Add your ID/PassPort Number"
                  />
                  <input
                    type="file"
                    name="file"
                    className="custom-file-input"
                  />
                  <a className="checkarrow">
                    <BlueArrowButton />
                  </a>
                </div>
              </div>
              <div className="s_payment_item1">
                <h6>{data.insurance}</h6>
                <div className="s_inputs_payment">
                  <select
                    name="bank"
                    id="insurance"
                    className={dropdowm ? "active" : "option"}
                    defaultValue={"Default"}
                    onChange={dropdowmColorChange}
                  >
                    <option value="Default" disabled hidden>
                      Select your Insurance
                    </option>

                    <option value="USA">USA</option>
                    <option value="FBI">FBI</option>
                    <option value="National">National</option>
                    <option value="United">United</option>
                  </select>
                  <input type="text" placeholder="Add your Cover Amount" />
                  <input
                    type="file"
                    name="file"
                    className="custom-file-input"
                  />
                  <a className="checkarrow">
                    <BlueArrowButton />
                  </a>
                </div>
              </div>
              <div className="s_payment_item2">
                <h6>{data.payment}</h6>
                <div className="s_inputs_payment">
                  <select
                    name="bank"
                    id="payment"
                    defaultValue={"Default"}
                    className={dropdowm ? "active" : "option"}
                    onChange={dropdowmColorChange}
                  >
                    <option value="Default" disabled hidden>
                      Bank Name
                    </option>

                    <option value="hdfc">HDFC</option>
                    <option value="america">American Bank</option>
                    <option value="national">National</option>
                    <option value="united">United</option>
                  </select>
                  <input type="text" placeholder="Add your Account Number" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerSecurity;
