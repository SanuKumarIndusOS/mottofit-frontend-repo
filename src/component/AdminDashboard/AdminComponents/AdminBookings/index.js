import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getAdminSession, adminCancelSession } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";

function AdminBookings(props) {
  const [pastData, setPastData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [type, setType] = React.useState("all");
  const [pageLimit, setPageLimit] = React.useState();


  React.useEffect(() => {
    props.getAdminSession(page, type).then((data) => {
      console.log(data, "session");
      setPastData(data.list);
      setPageLimit(data.totalCount/10)

    });
  }, [page]);

  React.useEffect(() => {
    props.getAdminSession(page, type).then((data) => {
      console.log(data, "session");
      setPastData(data.list);
      setPage(1)

    });
  }, [type]);

  React.useEffect(() => {
    props.getAdminSession(page, type).then((data) => {
      console.log(data, "session");
      setPastData(data.list);
    });
  }, []);

  function AdminCancelSession(id) {
    props
      .adminCancelSession(id, "cancelled")
      .then(() => {
        props.getAdminSession(page).then((data) => {
          console.log(data, "session");
          setPastData(data.list);
        });
        console.log("s");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="admin_booking">
      <div className="filters">
        <div className="type">
          <div
            className={type === "all" ? "all active" : "all"}
            onClick={() => {
              setType("all");
            }}
          >
            All
          </div>
          <div
            className={type === "upcoming" ? "upcoming active" : "upcoming"}
            onClick={() => {
              setType("upcoming");
            }}
          >
            Upcoming
          </div>
          <div
            className={type === "past" ? "cancelled active" : "cancelled"}
            onClick={() => {
              setType("past");
            }}
          >
            Past
          </div>
        </div>
      </div>
      {pastData.map((item) => {
        return (
          <div className="session_card_outer">
            <br></br>

            <div className="session_card">
              <div className="header">
                <div className="title">
                  <div className="txt">{item?.title}</div>
                  <div className="date">{item?.sessionDate}</div>
                </div>
                <div className="status">
                  {item?.sessionStatus === "completed" ? (
                    <div className="completed">Completed </div>
                  ) : null}

                  {item?.sessionStatus === "created" ? (
                    <div className="created">Created </div>
                  ) : null}

                  {item?.sessionStatus === "cancelled" ? (
                    <div className="cancelled">Cancelled </div>
                  ) : null}
                </div>
              </div>
              <div className="content">
                <div className="left_content">
                  <div>
                    <b>Trainer Name :</b>&ensp;
                    {item.trainer.firstName} {item.trainer.lastName}
                  </div>
                  <div>
                    <b>Trainer Phone number :</b>&ensp;
                    {item.trainer.phoneNumber}
                  </div>
                  <div>
                    <b>Session Type :</b>&ensp;{item.sessionType}
                  </div>
                  <div>
                    <b>Training Type :</b>&ensp;{item.trainingType}
                  </div>
                  <div>
                    <b>City :</b>&ensp;{item.city}
                  </div>
                  <div>
                    <b>Price :</b>&ensp;{item.price}
                  </div>
                </div>
                <div className="right_content">
                  <div>
                    <b>User Name :</b>&ensp; {item.user.firstName}{" "}
                    {item.user.lastName}
                  </div>
                  <div>
                    <b>User Phone number :</b>&ensp; {item.user.phoneNo}
                  </div>

                  <div>
                    <b>Venue :</b>&ensp; {item.venue}
                  </div>
                  <div style={{ display: "flex" }}>
                    <b>Meeting Link :</b>&ensp;
                    {item.meetingLink ? item.meetingLink : <div>N/A</div>}
                  </div>
                  {/* <div>{item.mottoPassAvailed}</div> */}
                  <div style={{ display: "flex" }}>
                    <b>MottoPass :</b>&ensp;
                    {item.mottoPassAvailed ? (
                      item.mottoPassAvailed
                    ) : (
                      <div>N/A</div>
                    )}
                  </div>

                  <div style={{ display: "flex" }}>
                    <b>Paid by User :</b>&ensp;
                    {item.mottoPassAvailed ? (
                      <div>PAID</div>
                    ) : (
                      <div>NOT PAID</div>
                    )}
                  </div>

                  <div style={{ display: "flex" }}>
                    <b>Payment Status :</b>&ensp;
                    {item.paymentStatus ? (
                      <div>COMPLETED</div>
                    ) : (
                      <div>NOT COMPLETED</div>
                    )}
                  </div>

                  <div>{item.paidByUser}</div>
                  <div>{item.paymentStatus}</div>
                </div>
              </div>
              <hr></hr>
              <div className="friendSection"></div>
              <hr></hr>
              <div className="cancelSession">
                {item.sessionStatus === "created" ? (
                  <button onClick={() => AdminCancelSession(item.id)}>
                    Cancel Session
                  </button>
                ) : (
                  <button disabled="true">Cancel Session</button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      <div style={{margin:"1rem", display:"flex", justifyContent:"flex-end", alignItems:"center"}}>
      <b
       style={{cursor:"pointer"}}
        onClick={() => {
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
      >
        { (page === 1)? null : page-1}
      </b>
     <b style={{margin:"1rem", backgroundColor:"#53BFD2", padding:"1rem", color:"white"}}>{page}</b> 
      <b
        style={{cursor:"pointer"}}
        onClick={() => {
          setPage(page + 1);
        }}
      >
         {(pageLimit === page)? null : page+1}
      </b>
      </div>
      {pageLimit}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAdminSession,
      adminCancelSession,
    },
    dispatch
  );
};

const AdminBookings_export = connect(null, mapDispatchToProps)(AdminBookings);
export default AdminBookings_export;
