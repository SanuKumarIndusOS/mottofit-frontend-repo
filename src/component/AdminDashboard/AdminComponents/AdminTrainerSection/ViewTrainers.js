import React, { useState, useEffect } from "react";

const ViewTrainers = () => {
    const [TrainerViewData, setTraierViewData] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(setTraierViewData, "setTraierViewData");

    useEffect(() => {
        setLoading(true);
        fetchAllTrainers();
    }, []);
    function fetchAllTrainers() {
        setLoading(true);

        fetch(
            // "http://doodlebluelive.com:2307/v1/admin/trainers?limit=1000&page=1",
            `http://doodlebluelive.com:2307/v1/admin/trainers`,

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
                setTraierViewData(data["data"]["list"]);
                setLoading(false);
            });
    }
    return (
        <div>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <span> {TrainerViewData["firstName"]}</span>
            )}
        </div>
    );
};

export default ViewTrainers;
