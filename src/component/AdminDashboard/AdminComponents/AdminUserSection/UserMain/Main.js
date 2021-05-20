import React, { useState, useEffect } from "react";
import Datatable from "../datatable/index";
import Pagination from "../UserMain/Pagination";
import { Input } from "reactstrap";
import "./styles.scss";

// require("es6-promise").polyfill();
// require("isomorphic-fetch");

const Main = () => {
    const [userList, setUserList] = React.useState([]);
    const [noUser, setNoUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2000);
    const [loading, setLoading] = useState(false);

    const [q, setQ] = useState("");

    console.log(userList, "useState");
    console.log(noUser, "trainer");
    useEffect(() => {
        setLoading(true);
        fetchAllTrainers();
    }, []);

    function fetchAllTrainers() {
        setLoading(true);

        fetch(
            "http://doodlebluelive.com:2307/v1/admin/users?limit=50&page=1",
            // `http://doodlebluelive.com:2307/v1/admin/trainers?limit=${postsPerPage}&page=${currentPage}`,

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
                setUserList(data["data"]["list"]);
                setNoUser(data["data"]["pageMetaData"]);
                setLoading(false);
            });
    }

    function search(rows) {
        return rows.filter(
            (row) =>
                row.email.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                row.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1
            // row.location.toString().indexOf(q.toLowerCase()) > -1
        );
    }

    // get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userList.slice(indexOfFirstPost, indexOfLastPost);

    //Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="outter_container_AD container">
            <h2>Admin User's Data </h2>
            <div className="trainer_admin">
                <div className="views_trainer">
                    <p>No of</p>
                    <h3>
                        User:{" "}
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            <span>{noUser.total}</span>
                        )}
                    </h3>
                </div>
            </div>
            <Input
                style={{ width: "20%" }}
                type="text"
                placeholder="Search for User's"
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />

            <Datatable
                userList={search(currentPosts)}
                loading={loading}
                // trainerList={searchByLocation(trainerList)}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={userList.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Main;
