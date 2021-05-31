import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { changeApproval } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import BootstrapTable from "react-bootstrap-table-next";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css";
const DatatableClass = ({
  trainerList,
  fetchAllTrainers,
  loading,
  changeApproval,
}) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  function ChangeApproval(id, state) {
    const data = { trainerStatus: state };

    changeApproval(data, id)
      .then(() => {
        alert("Approved");
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
                onClick={() => ChangeApproval(item["id"], "disapproved")}
                className="btn btn-danger"
              >
                Disapprove
              </div>
            );
          } else {
            approve = (
              <div
                onClick={() => ChangeApproval(item["id"], "approved")}
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
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/admins/view/${item["id"]}`}
                  >
                    view
                  </Link>
                </td>
                <div>
                  <button style={{ border: "none" }}>{approve}</button>
                </div>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changeApproval,
    },
    dispatch
  );
};

const Datatable = connect(null, mapDispatchToProps)(DatatableClass);

export default Datatable;
