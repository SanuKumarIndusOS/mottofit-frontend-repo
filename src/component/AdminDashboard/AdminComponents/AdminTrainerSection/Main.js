import React, { useState, useEffect } from "react";
import Datatable from "./datatable/index";
import Pagination from "./Pagination";
import { Input } from "reactstrap";
import "./styles.scss";

// require("es6-promise").polyfill();
// require("isomorphic-fetch");

const Main = () => {
    const [trainerList, setTrainerList] = React.useState([]);
    const [noTrainer, setNoTrainer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2000);
    const [loading, setLoading] = useState(false);
    const [q, setQ] = useState("");

    // console.log(trainerList, "useState");
    useEffect(() => {
        setLoading(true);
        fetchAllTrainers();
    }, []);

    function fetchAllTrainers() {
        setLoading(true);

        fetch(
            // "http://doodlebluelive.com:2307/v1/admin/trainers?limit=1000&page=1",
            `http://doodlebluelive.com:2307/v1/admin/trainers?limit=${postsPerPage}&page=${currentPage}`,

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
                setTrainerList(data["data"]["list"]);
                setNoTrainer(data["data"]["pageMetaData"]);
                setLoading(false);
            });
    }

    function search(rows) {
        return rows.filter(
            (row) =>
                row.email.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                row.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1
            // row.location
            //     .toString()
            //     .toLowerCase()
            //     .includes(q.toLowerCase() > -1)
            // row.location.toString().indexOf(q.toLowerCase()) > -1
        );
    }

    // get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = trainerList.slice(indexOfFirstPost, indexOfLastPost);

    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="outter_container_AD container">
            <h2>Admin Trainer's Data </h2>
            <div className="trainer_admin">
                <div className="views_trainer">
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
                <Input
                    style={{ width: "20%" }}
                    type="text"
                    placeholder="Search for Trainer's"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            <Datatable
                trainerList={search(currentPosts)}
                loading={loading}
                // trainerList={searchByLocation(trainerList)}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={trainerList.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Main;
