import React from "react";
import "./styles.scss";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
// import ArrowHover from "../../../../common/ButtonIcon/ArrowHover";
import BlueHoverButton from "component/common/BlueArrowButton";

const info = [
    {
        label: "Passport",
        value: "Passport",
    },
    {
        value: "Driver's Licence",
        label: "Driver's Licence",
    },
    {
        label: "State Issued ID",
        value: "State Issued ID",
    },
];

const PaymentSection = ({ onChange, trainerData, setTrainerData }) => {
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
    // function handleChange(e) {
    //     // Here, we invoke the callback with the new value
    //     onChange(e.target.value);
    // }
    const handleChange = ({ target: { name, value } }) => {
        const tempData = {
            ...trainerData,
        };

        tempData[name] = value;

        onChange(tempData);
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
                                <Dropdown
                                    title="Select government ID’s
                                    "
                                    list={info}
                                    value={trainerData.identityNameUS}
                                    onChange={(e) => {
                                        setTrainerData({
                                            ...trainerData,
                                            identityNameUS: e.value,
                                        });
                                    }}
                                    name="identityNameUS"
                                />
                                <input
                                    type="text"
                                    placeholder="Add your ID Number"
                                    value={trainerData.governmentIdNumber}
                                    onChange={handleChange}
                                    name="governmentIdNumber"
                                />
                                <input
                                    type="file"
                                    name="governmentId"
                                    className="custom-file-input"
                                    value={trainerData.governmentId}
                                    onChange={handleChange}
                                />
                                <a className="checkarrow">
                                    <BlueHoverButton />
                                </a>
                            </div>
                        </div>
                        <div className="payment_item1">
                            <h6>{data.insurance}</h6>
                            <div className="inputs_payment1">
                                <input
                                    type="text"
                                    placeholder="Enter your Insurance Name"
                                    value={trainerData.insuranceNameUS}
                                    onChange={handleChange}
                                    name="insuranceNameUS"
                                />
                                <input
                                    type="text"
                                    placeholder="Add your Cover Amount"
                                    value={trainerData.coverAmount}
                                    onChange={handleChange}
                                    name="coverAmount"
                                />
                                <input
                                    type="file"
                                    name="insurance"
                                    className="custom-file-input"
                                    value={trainerData.insurance}
                                    onChange={handleChange}
                                />
                                <a className="checkarrow">
                                    <BlueHoverButton />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PaymentSection;
