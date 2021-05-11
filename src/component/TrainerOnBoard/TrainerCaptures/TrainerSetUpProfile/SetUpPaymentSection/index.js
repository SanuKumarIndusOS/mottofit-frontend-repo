import React from "react";
import "./styles.scss";
import ArrowHover from "../../../../common/ButtonIcon/ArrowHover";
import BlueHoverButton from "component/common/BlueArrowButton";
const PaymentSection = () => {
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
            <div className="payment_container container">
                <div className="payment_wrapper">
                    <div className="payment_heading">
                        <h2>{data.heading}</h2>
                        <p>{data.describe}</p>
                    </div>
                    <div className="payment_inner ">
                        {/* <form> */}
                        <div className="payment_item1">
                            <h6>{data.id}</h6>
                            <div className="inputs_payment1">
                                <select
                                    value=""
                                    // onChange={handleInputChange}
                                >
                                    <option value="" disabled selected>
                                        Select type of ID
                                    </option>
                                    <option>New York</option>
                                    <option>Miami</option>
                                    <option>Hampton</option>
                                    <option>Palm Beach</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Add your ID Number"
                                />
                                <input
                                    type="file"
                                    name="file"
                                    className="custom-file-input"
                                />
                                <a className="checkarrow">
                                    <BlueHoverButton />
                                </a>
                            </div>
                        </div>
                        <div className="payment_item1">
                            <h6>{data.insurance}</h6>
                            <div className="inputs_payment1">
                                <select
                                    value=""
                                    // onChange={handleInputChange}
                                >
                                    <option value="" disabled selected>
                                        Insurance Plan Provider
                                    </option>
                                    <option>New York</option>
                                    <option>Miami</option>
                                    <option>Hampton</option>
                                    <option>Palm Beach</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="Add your Cover Amount"
                                />
                                <input
                                    type="file"
                                    name="file"
                                    className="custom-file-input"
                                />
                                <a className="checkarrow">
                                    <BlueHoverButton />
                                </a>
                            </div>
                        </div>
                        <div className="payment_item2">
                            <h6>{data.payment}</h6>
                            <div className="inputs_payment">
                                <select
                                    value=""
                                    // onChange={handleInputChange}
                                >
                                    <option value="" disabled selected>
                                        Bank Name
                                    </option>
                                    <option>New York</option>
                                    <option>Miami</option>
                                    <option>Hampton</option>
                                    <option>Palm Beach</option>
                                </select>
                                {/* <select
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
                                    <option value="america">
                                        American Bank
                                    </option>
                                    <option value="national">National</option>
                                    <option value="united">United</option>
                                </select> */}
                                <input
                                    type="text"
                                    placeholder="Add your Account Number"
                                />
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default PaymentSection;
