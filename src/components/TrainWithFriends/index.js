import React, { useState } from "react";
import { NavBar } from "../common/Navbar/NavBar";
import "./styles.scss";

const TrainWithFriends = () => {
    const [friendsInput, setFriendsInput] = useState([
        {
            friendName: "",
            friendEmail: "",
            friendPhone: "",
        },
        {
            friendName: "",
            friendEmail: "",
            friendPhone: "",
        },
        {
            friendName: "",
            friendEmail: "",
            friendPhone: "",
        },
    ]);
    const handleChangeFriendInput = (index, event) => {
        const values = [...friendsInput];
        values[index][event.target.name] = event.target.value;
        setFriendsInput(values);
    };

    const handleAddFriendFields = () => {
        setFriendsInput([
            ...friendsInput,
            { friendName: "", friendEmail: "", friendPhone: "" },
        ]);
    };
    return (
        <>
            <NavBar />
            <div className="TF_outter_container">
                <div className="container">
                    <div className="TF_inner_container">
                        <div className="TF_headers">
                            <h2>
                                Your session is booked! Start adding your
                                friends
                            </h2>
                            <p>
                                Invite as many friends as you’d like, the
                                friends that accept will automatically be added
                                in correspondence to session size! Once they
                                accept your session, your rate will
                                automatically be adjusted.
                            </p>
                        </div>
                        <div className="TF_wrapper">
                            <div className="TF_inner_wrapper">
                                <div className="TF_wrapper_left">
                                    <div className="TF_wrapper_content">
                                        <h2>Add Friends to Your Session</h2>
                                        <div className="TF_form">
                                            <form>
                                                <h3>
                                                    Enter your friend's details
                                                </h3>
                                                <div className="TF_inner_form">
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Email"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Phone Number"
                                                    />
                                                    {friendsInput.map(
                                                        (index, input) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Name"
                                                                        name="name"
                                                                        value={
                                                                            input.friendName
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleChangeFriendInput(
                                                                                index,
                                                                                event
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Email"
                                                                        name="email"
                                                                        value={
                                                                            input.friendEmail
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleChangeFriendInput(
                                                                                index,
                                                                                event
                                                                            )
                                                                        }
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Phone Number"
                                                                        name="phone"
                                                                        value={
                                                                            input.friendPhone
                                                                        }
                                                                        onChange={(
                                                                            event
                                                                        ) =>
                                                                            handleChangeFriendInput(
                                                                                index,
                                                                                event
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                                <h5
                                                    onClick={
                                                        handleAddFriendFields
                                                    }
                                                >
                                                    + Add friends
                                                </h5>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="TF_wrapper_right">right</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainWithFriends;
