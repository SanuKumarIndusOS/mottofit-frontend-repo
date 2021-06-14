import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { changeApproval } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";
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
        // alert("Approved");
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
          <th scope="row">Email</th>
          <th scope="row">Phone Number</th>
          <th scope="row">Location</th>
          <th scope="row">Expertise</th>
          <th scope="row">Servicable Location</th>
          <th scope="row">Trainer Status</th>
          <th scope="row" colSpan="2">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {trainerList.map((item) => {
          var approve;
          if (item["trainerStatus"] === "approved") {
            approve = (
              <div
                onClick={() => ChangeApproval(item["id"], "disapproved")}
                className="btn btn-danger mx-0"
              >
                Disapprove
              </div>
            );
          } else {
            approve = (
              <div
                onClick={() => ChangeApproval(item["id"], "approved")}
                className="btn btn-success mx-0"
              >
                Approve
              </div>
            );
          }
          return (
            <tr>
              <td> {item.firstName ? item.firstName : "-"}</td>
              <td> {item.email ? item.email : "-"}</td>
              <td> {item.phoneNumber ? item.phoneNumber : "-"}</td>
              <td> {item.location ? item.location : "-"}</td>
              <td> {item.areaOfExpertise ? item.areaOfExpertise : "-"}</td>
              <td>{item.servicableLocation ? item.servicableLocation : "-"}</td>
              <td> {item.trainerStatus ? item.trainerStatus : "-"}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/admins/view/${item["id"]}`}
                >
                  view
                </Link>
              </td>
              <div>
                <button className="p-0 but_border">
                  {approve}
                </button>
              </div>
            </tr>
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
