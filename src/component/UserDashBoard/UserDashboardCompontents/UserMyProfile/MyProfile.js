import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Select from "react-select";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";

const location = [
    { value: "nyw", label: "New York" },
    { value: "maimi", label: "Maimi" },
    { value: "hampton", label: "Hampton" },
    { value: "plam", label: "Plam Beach" },
];
const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
];
const MyProfile = () => {
    const [selectedOption, setSelectedOption] = useState([]);

    const [image, setImage] = useState();
    const [previewImage, setPreviewTmage] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewTmage(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreviewTmage(null);
        }
    }, [image]);

    return (
        <>
            <div className="myprofile_outter_container">
                <div className="container">
                    <div className="myprofile_inner_container">
                        <div className="myprofile_header">
                            <h2>My Profile</h2>
                        </div>
                        <div className="profile_wrapper">
                            <div className="profile_grid">
                                <div className="profile_pic_col">
                                    <div className="profile_picture">
                                        {previewImage ? (
                                            <img
                                                src={previewImage}
                                                style={{
                                                    objectFit: "cover",
                                                    width: "200px",
                                                    height: "200px",
                                                    borderRadius: "100px",
                                                }}
                                                onClick={() => {
                                                    setPreviewTmage(null);
                                                }}
                                            />
                                        ) : (
                                            <div className="combin_profile">
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        fileInputRef.current.click();
                                                    }}
                                                >
                                                    <img
                                                        src={Profile}
                                                        alt="icon"
                                                        style={{
                                                            objectFit: "cover",
                                                            width: "100px",
                                                            height: "100px",
                                                        }}
                                                    />
                                                </button>
                                                <img
                                                    src={ProfileAdd}
                                                    alt="icon"
                                                    style={{
                                                        objectFit: "cover",
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "100px",
                                                    }}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        fileInputRef.current.click();
                                                    }}
                                                />
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            accept="image/*"
                                            onChange={(event) => {
                                                const file =
                                                    event.target.files[0];
                                                if (
                                                    file &&
                                                    file.type.substr(0, 5) ===
                                                        "image"
                                                ) {
                                                    setImage(file);
                                                } else {
                                                    setImage(null);
                                                }
                                            }}
                                        />
                                        <h5>Remove Profile Picture</h5>
                                    </div>
                                </div>
                                <div className="profile_form_col">
                                    <div className="outter_profile_form">
                                        <form>
                                            <div className="inner_profile_form">
                                                <div className="input_profile">
                                                    <label>Name </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="input_profile">
                                                    <label>Location </label>
                                                    <Select
                                                        defaultValue={
                                                            selectedOption
                                                        }
                                                        onChange={
                                                            setSelectedOption
                                                        }
                                                        options={location}
                                                        className="profile_location_select"
                                                    />
                                                </div>
                                                <div className="input_profile">
                                                    <label>
                                                        Date of Birth{" "}
                                                    </label>
                                                    <input type="date" />
                                                </div>
                                                <div className="input_profile">
                                                    <label>Gender </label>
                                                    <Select
                                                        defaultValue={
                                                            selectedOption
                                                        }
                                                        onChange={
                                                            setSelectedOption
                                                        }
                                                        options={gender}
                                                        className="profile_location_select"
                                                    />
                                                </div>
                                                <div className="input_profile">
                                                    <label>Email </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="input_profile">
                                                    <label>Phone </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="input_profile">
                                                    <label>
                                                        Payment Method{" "}
                                                    </label>
                                                    <input type="text" />
                                                </div>
                                                <div className="input_profile">
                                                    <label>Password </label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button className="profile_save">
                                SAVE CHANGES <BlueHoverButton />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
