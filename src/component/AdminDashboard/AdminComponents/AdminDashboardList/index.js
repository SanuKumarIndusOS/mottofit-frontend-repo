import React, { useState, useEffect } from "react";
import AdminTrainerSection from "../AdminTrainerSection";
import "./styles.scss";

const AdminDashboard = () => {
    const [noTrainer, setNoTrainer] = useState([]);
    const [noUser, setNoUser] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(noUser, "user");
    console.log(noTrainer, "trainer");

    useEffect(() => {
        fetchNoTrainers();
        fetchNoUsers();
    }, []);

    function fetchNoTrainers() {
        setLoading(true);

        fetch(
            "http://doodlebluelive.com:2307/v1/admin/trainers?limit=10&page=1",
            {
                method: "get",
                headers: new Headers({
                    Authorization: localStorage.getItem("admin-token"),
                    "Content-Type": "application/x-www-form-urlencoded",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setNoTrainer(data["data"]["pageMetaData"]);
                setLoading(false);
            });
    }

    function fetchNoUsers() {
        setLoading(true);

        fetch("http://doodlebluelive.com:2307/v1/admin/users?limit=5&page=2", {
            method: "get",
            headers: new Headers({
                Authorization: localStorage.getItem("admin-token"),
                "Content-Type": "application/x-www-form-urlencoded",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setNoUser(data["data"]["pageMetaData"]);
                setLoading(false);
            });
    }
    return (
        <div className="outter_container_AD">
            <div className="container">
                <h2>Admin Dashboard</h2>
                <div className="inner_AD">
                    <div className="wrapper_AD">
                        <div className="AD_views">
                            <div className="views_AD">
                                <p>No of</p>
                                <h3>
                                    User's :
                                    {loading ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <span> {noUser.total}</span>
                                    )}
                                </h3>
                            </div>
                            <div className="views_AD">
                                <p>No of</p>
                                <h3>
                                    Trainer's :
                                    {loading ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <span> {noTrainer.total}</span>
                                    )}
                                </h3>
                            </div>
                            <div className="views_AD">
                                <p>No of</p>
                                <h3>
                                    Page Views : <span>300</span>
                                </h3>
                            </div>
                            <div className="views_AD">
                                <h3>
                                    Revenue : <span>$100</span>
                                </h3>{" "}
                            </div>
                        </div>
                    </div>
                    <AdminTrainerSection />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
