import React from "react";
import { Table } from "reactstrap";
// import BootstrapTable from "react-bootstrap-table-next";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css";
const Datatable = ({ trainerList, fetchAllTrainers, loading }) => {
    if (loading) {
        return <h2>loading...</h2>;
    }

    const columns = trainerList[0] && Object.keys(trainerList[0]);
    console.log(columns, "column");

    function ChangeApproval(id, state) {
        console.log(
            "http://doodlebluelive.com:2307/v1/trainer?trainerId=" + id,
            { trainerStatus: state }
        );
        const data = { trainerStatus: state };

        fetch("http://doodlebluelive.com:2307/v1/trainer?trainerId=" + id, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("admin-token"),
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                fetchAllTrainers();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <Table bordered hover size="sm" responsive>
            <thead>
                <tr>
                    <th scope="row">First Name</th>
                    {/* <th scope="row">Last Name</th> */}
                    <th scope="row">Email</th>
                    <th scope="row">Phone Number</th>
                    <th scope="row">Location</th>
                    <th scope="row">Expertise</th>
                    <th scope="row">Servicable Location</th>
                    <th scope="row">Trainer Status</th>
                </tr>
            </thead>
            <tbody>
                {trainerList.map((item) => {
                    var approve;
                    if (item["trainerStatus"] === "approved") {
                        approve = (
                            <div
                                onClick={() =>
                                    ChangeApproval(item["id"], "disapproved")
                                }
                                className="btn btn-danger"
                            >
                                Disapprove
                            </div>
                        );
                    } else {
                        approve = (
                            <div
                                onClick={() =>
                                    ChangeApproval(item["id"], "approved")
                                }
                                className="btn btn-success"
                            >
                                Approve
                            </div>
                        );
                    }
                    return (
                        <>
                            <tr>
                                <td> {item["firstName"]}</td>
                                {/* <td> {item["lastName"]}</td> */}
                                <td> {item["email"]}</td>
                                <td> {item["phoneNumber"]}</td>
                                <td> {item["location"]}</td>
                                <td> {item["areaOfExpertise"]}</td>

                                <td> {item["servicableLocation"]}</td>
                                <td> {item["trainerStatus"]}</td>
                                <div>
                                    {" "}
                                    <button style={{ border: "none" }}>
                                        {approve}
                                    </button>{" "}
                                </div>
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Datatable;
