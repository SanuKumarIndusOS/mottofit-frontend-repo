import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.css";
import { history } from "helpers";
import { Toast } from "service/toast";
// import "node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

const Datatable = ({
  userList,
  fetchAllTrainers,
  loading,
  noTrainer,
  addOrRemove,
  createDirectMessageApi,
  toggleLoading,
  loadingDatas,
}) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  // const formateButton = () => {
  //     function ChangeApproval(id, state) {
  //         const data = { trainerStatus: state };
  //         useEffect(() => {
  //             fetch(
  //                 "http://doodlebluelive.com:2307/v1/trainer?trainerId=" + id,
  //                 {
  //                     method: "PUT", // or 'PUT'
  //                     headers: {
  //                         "Content-Type": "application/json",
  //                         Authorization:
  //                             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjQ4NzFkLTAyNjgtNDk3ZC04MWU3LTBhZTY5NjViNTAxNSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTYyMTUxMTM5OSwiZXhwIjoxNjIxNTE4NTk5fQ.N1CGenuza8yyR_FnczruJiqbFvl-crZmiw1lrvTYWnM",
  //                     },
  //                     body: JSON.stringify(data),
  //                 }
  //             )
  //                 .then((response) => response.json())
  //                 .then((data) => {
  //                     console.log("Success:", data);
  //                     fetchAllTrainers();
  //                 })
  //                 .catch((error) => {
  //                     console.error("Error:", error);
  //                 });
  //         }, []);
  // }

  //     return (
  //         <>
  //             {trainerList.map((item) => {
  //                 var approve;
  //                 if (item["trainerStatus"] === "approved") {
  //                     approve = (
  //                         <div
  //                             onClick={() =>
  //                                 ChangeApproval(item["id"], "disapproved")
  //                             }
  //                             className="btn btn-danger"
  //                         >
  //                             Disapprove
  //                         </div>
  //                     );
  //                 } else {
  //                     approve = (
  //                         <div
  //                             onClick={() =>
  //                                 ChangeApproval(item["id"], "approved")
  //                             }
  //                             className="btn btn-success"
  //                         >
  //                             Approve
  //                         </div>
  //                     );
  //                 }
  //                 return (
  //                     <>
  //                         <tr>
  //                             <div>
  //                                 {" "}
  //                                 <button style={{ border: "none" }}>
  //                                     {approve}
  //                                 </button>{" "}
  //                             </div>
  //                         </tr>
  //                     </>
  //                 );
  //             })}
  //         </>
  //     );
  // };

  const handleDirectRequest = (id) => {
    if (!id) return;

    toggleLoading(id);

    // setTimeout(() => {

    // }, 6000);

    // console.log(id);

    createDirectMessageApi(id)
      .then((data) => {
        // console.log(data);
        const { channelSid } = data || {};
        Toast({ type: "success", message: data.message || "success" });

        toggleLoading(id, true);
        history.push(`/admins/message/user?channelId=${channelSid}`);
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        toggleLoading(id, true);
      });
  };

  const ActionField = (cell, row) => {
    // console.log(cell);

    let isUserDataLoading = loadingDatas.includes(cell);

    // console.log(isUserDataLoading);

    let actionBtn;

    // if (row.status === "active") {
    //   actionBtn = (
    //     <div className="d-flex align-items-center">
    //       <div
    //         onClick={() => {
    //           addOrRemove(cell, "removed");
    //         }}
    //         className="mr-3"
    //       >
    //         REMOVE
    //       </div>
    //     </div>
    //   );
    // } else {
    //   actionBtn = (
    //     <div className="d-flex align-items-center">
    //       <div
    //         onClick={() => {
    //           addOrRemove(cell, "active");
    //         }}
    //         className="mr-3"
    //       >
    //         ADD
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="d-flex align-items-center">
        {/* {actionBtn} */}
        <button
          className="btn btn-outline-primary border-none ml-3"
          onClick={(e) => handleDirectRequest(cell, e)}
          className={`${
            isUserDataLoading
              ? "btn-transparent btn-disabled btn border-none text-secondary fs-16"
              : "btn btn-outline-primary border-none"
          } `}
          disabled={isUserDataLoading || loadingDatas.length > 0}
        >
          {isUserDataLoading ? "Loading..." : "Message"}
        </button>
      </div>
    );
  };

  const AddorRemove = (cell, row) =>
    row.status === "active" ? (
      <div className="d-flex align-items-center">
        <div
          onClick={() => {
            addOrRemove(cell, "removed");
          }}
          className="mr-3"
        >
          REMOVE
        </div>
      </div>
    ) : (
      <div className="d-flex align-items-center">
        <div
          onClick={() => {
            addOrRemove(cell, "active");
          }}
          className="mr-3"
        >
          ADD
        </div>
      </div>
    );

  const columns = [
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "email", text: "Email", filter: textFilter() },
    { dataField: "location", text: "Location", filter: textFilter() },

    {
      dataField: "phoneNo",
      text: "Phone Number",
      filter: textFilter(),
    },
    { dataField: "status", text: "status", filter: textFilter() },
    { dataField: "id", text: "id", formatter: AddorRemove },
    { dataField: "id", text: "action", formatter: ActionField },
    // {
    //     // dataField: "trainerStatus",
    //     text: "Approve",
    //     // formatter: formateButton,
    //     // formatter: formateButton,
    //     // filter: textFilter(),
    // },
  ];

  const column = userList && Object.keys(userList);
  console.log(column, "column");

  const trainer = noTrainer && Object.keys(noTrainer);
  console.log(trainer, "noTrainer");

  // approveButton = () => {
  //     {
  //         trainerList.map((item) => {
  //             var approve;
  //             if (item["trainerStatus"] === "approved") {
  //                 approve = (
  //                     <div
  //                         onClick={() =>
  //                             ChangeApproval(item["id"], "disapproved")
  //                         }
  //                         className="btn btn-danger"
  //                     >
  //                         Disapprove
  //                     </div>
  //                 );
  //             } else {
  //                 approve = (
  //                     <div
  //                         onClick={() =>
  //                             ChangeApproval(item["id"], "approved")
  //                         }
  //                         className="btn btn-success"
  //                     >
  //                         Approve
  //                     </div>
  //                 );
  //             }
  //             return (
  //                 <>
  //                     <tr>
  //                         <div>
  //                             {" "}
  //                             <button style={{ border: "none" }}>
  //                                 {approve}
  //                             </button>{" "}
  //                         </div>
  //                     </tr>
  //                 </>
  //             );
  //         });
  //     }
  // };
  console.log(noTrainer, " data");
  return (
    <>
      <BootstrapTable
        bootstrap4
        classes="custom-table"
        keyField="id"
        columns={columns}
        data={userList}
        filter={filterFactory()}
      />
      {/* <Table bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th scope="row">First Name</th>
                        <th scope="row">Last Name</th>
                        <th scope="row">Email</th>
                        <th scope="row">Phone Number</th>
                        <th scope="row">Location</th>
                        <th scope="row">Expertise</th>
                        <th scope="row">servicableLocation</th>
                        <th scope="row">Trainer Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trainerList.map((item) => {
                        return (
                            <>
                                <tr>
                                    <td> {item["firstName"]}</td>
                                    <td> {item["lastName"]}</td>
                                    <td> {item["email"]}</td>
                                    <td> {item["phoneNumber"]}</td>
                                    <td> {item["location"]}</td>
                                    <td> {item["areaOfExpertise"]}</td>
                                    <td> {item["servicableLocation"]}</td>
                                    <td> {item["trainerStatus"]}</td>
                                </tr>
                            </>
                        );
                    })}
                    
                </tbody>
            </Table> */}
    </>
  );
};

export default Datatable;
