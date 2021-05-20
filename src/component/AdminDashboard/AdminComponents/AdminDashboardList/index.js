import React from "react";
import AdminTrainerSection from "../AdminTrainerSection";
import "./styles.scss";

const AdminDashboard = () => {
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
                                    User's : <span>43</span>
                                </h3>
                            </div>
                            <div className="views_AD">
                                <p>No of</p>
                                <h3>
                                    Trainer's : <span>253</span>
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
