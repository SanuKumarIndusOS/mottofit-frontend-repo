import React from "react";
import "./styles.scss";

const AdminDashboard = () => {
  const [trainerList, setTrainerList] = React.useState([]);

  React.useEffect(() => {
    // console.log( localStorage.getItem('admin-token'));
    fetchAllTrainers();
  }, []);

  function fetchAllTrainers() {
    fetch("http://doodlebluelive.com:2307/v1/admin/trainers?limit=10&page=1", {
      method: "get",
      headers: new Headers({
        Authorization: localStorage.getItem("admin-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data["data"]["list"]);
        setTrainerList(data["data"]["list"]);
      });
  }

  function ChangeApproval(id, state) {

    console.log("http://doodlebluelive.com:2307/v1/trainer?trainerId="+id,  { trainerStatus: state });
    const data = { trainerStatus: state };

    fetch("http://doodlebluelive.com:2307/v1/trainer?trainerId="+id, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("admin-token"),
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      fetchAllTrainers()
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="outter_container_AD">
      <div className="container">
        <h2>Admin Dashboard</h2>
        <br></br>
        <h2>Trainer List</h2>
        <div className="admin">
          <div className="tariner_info">
            <div className="tariner_info_item">Name</div>
            <div className="tariner_info_item">Email</div>
            <div className="tariner_info_item">Trainer Status</div>
            <div className="tariner_info_item">Action</div>
          </div>

          {trainerList.map((item) => {
            var approve;
            if (item["trainerStatus"] === "approved") {
              approve = (
                <div onClick={() => ChangeApproval(item["id"], "disapproved")}>
                  Disapprove
                </div>
              );
            } else {
              approve = (
                <div onClick={() => ChangeApproval(item["id"], "approved")}>
                  Approve
                </div>
              );
            }

            return (
              <div className="tariner_info">
                <div className="tariner_info_item">{item["firstName"]}</div>
                <div className="tariner_info_item">{item["email"]}</div>
                <div className="tariner_info_item">{item["trainerStatus"]}</div>
                <div className="tariner_info_item">
                  {" "}
                  <button className="tariner_info_button">
                    {approve}
                  </button>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
