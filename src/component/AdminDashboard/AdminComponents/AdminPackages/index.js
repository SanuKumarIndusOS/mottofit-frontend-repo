import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import {
  cancelMottoPackage,
  getAdminSession,
  getAllMottoPackage,
  updateMottoPackage,
} from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.scss";
import { api } from "service/api";
import { TrainerApi } from "service/apiVariables";
import AsyncSelect from "react-select/async";
import { debounceFunction } from "helpers/debounce";
import { MottoPassCard } from "component/common/MottoPassCard";
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Toast } from "service/toast";

function AdminMottoPassesFC(props) {
  const [passData, setPassData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [type, setType] = React.useState("active");
  const [pageLimit, setPageLimit] = React.useState();
  const [trainerSearch, setTrainerSearch] = useState();
  const [trainerSelectedValue, setTrainerSelectedValue] = useState();
  const [userSearch, setUserSearch] = useState();
  const [userSelectedValue, setUserSelectedValue] = useState();
  const [activeMottoPackageData, setActiveMottoPackageData] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [remainingCount, setRemainingCount] = useState("");

  React.useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    props.getAllMottoPackage(type, page).then(({ data, totalCount }) => {
      console.log(data, "session");
      setPassData(data);
      setPageLimit(totalCount / 10);
    });
  };

  React.useEffect(() => {
    if (page !== 1) {
      setPage(1);
      return;
    }

    props.getAllMottoPackage(type, 1).then(({ data, totalCount }) => {
      console.log(data, "session");
      setPassData(data);
      setPageLimit(totalCount / 10);
    });
  }, [type]);

  //   React.useEffect(() => {
  //     props.getAllMottoPackage(type, page).then(({data}) => {
  //       console.log(data, "session");
  //       setPassData(data);
  //     });
  //   }, []);

  const handleClick = (data) => {
    setOpen(true);
    setActiveMottoPackageData(data);
  };

  const handleRemainingCount = () => {
    let payload = {
      mottoId: activeMottoPackageData.id,
      count: remainingCount,
    };
    props
      .updateMottoPackage(payload)
      .then(({ data, message }) => {
        console.log(data);
        Toast({ type: "success", message: message || "Successful" });
        getData();
        handleToggle();
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
  };

  const handleToggle = () => {
    isOpen && setActiveMottoPackageData({});
    setRemainingCount("");
    setOpen(!isOpen);
  };

  const handleStatusChange = () => {
    let payload = {
      mottoId: activeMottoPackageData.id,
    };
    if (activeMottoPackageData.status === "Inactive") {
      payload["status"] = "Active";
    } else {
      payload["status"] = "Inactive";
    }

    props
      .cancelMottoPackage(payload)
      .then(({ data, message }) => {
        console.log(data);
        Toast({ type: "success", message: message || "Successful" });
        getData();
        handleToggle();
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
  };

  let remainingValue =
    activeMottoPackageData.totalPassCount - activeMottoPackageData.remains;

  return (
    <div className="admin_booking">
      <div className="filters">
        <div className="type">
          <div
            className={`${type === "active" ? "active" : ""} upcoming`}
            onClick={() => {
              setType("active");
            }}
          >
            Active
          </div>
          <div
            className={`${type === "expired" ? "active" : ""} upcoming`}
            onClick={() => {
              setType("expired");
            }}
          >
            Expired
          </div>
        </div>
      </div>
      <div className="row no-gutters w-100 justify-content-around">
        {passData.map((data) => (
          <MottoPassCard
            data={data}
            key={data.id}
            className="col-xl-6 col-12 cursor-pointer"
            isAdminView
            handleClick={() => handleClick(data)}
          />
        ))}
      </div>
      <div
        style={{
          margin: "1rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <b
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (page !== 1) {
              setPage(page - 1);
            }
          }}
        >
          {page === 1 ? null : page - 1}
        </b>
        <b
          style={{
            margin: "1rem",
            backgroundColor: "#53BFD2",
            padding: "1rem",
            color: "white",
          }}
        >
          {page}
        </b>
        <b
          style={{ cursor: "pointer" }}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {pageLimit === page ? null : page + 1}
        </b>
      </div>
      <Modal
        centered
        isOpen={isOpen}
        toggle={handleToggle}
        backdropClassName="h-100 w-100"
        size="md"
      >
        <ModalHeader toggle={handleToggle}>
          Update Motto Package Details
        </ModalHeader>
        <ModalBody>
          <div className="pl-4 mb-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <p>
                {activeMottoPackageData.remains} out of{" "}
                {activeMottoPackageData.totalPassCount} passes remaining
              </p>
              <FormGroup className="mb-4">
                <Label for="remainingCount">
                  {`Update remaining count (Max: ${remainingValue})`}
                </Label>
                <div className="d-flex align-items-center">
                  <Input
                    id="remainingCount"
                    name="reaminingCount"
                    placeholder=""
                    className="w-50"
                    type="number"
                    value={remainingCount}
                    onChange={({ target: { value } }) => {
                      if (remainingValue < 0 || value < 0) return;

                      if (parseInt(value) > parseInt(remainingValue)) return;

                      setRemainingCount(value);
                    }}
                  />
                  <Button
                    color="primary"
                    className="px-4 ml-3"
                    disabled={remainingCount === ""}
                    onClick={handleRemainingCount}
                  >
                    Save
                  </Button>
                </div>
              </FormGroup>
              <p>
                This motto package is{" "}
                <span
                  className={`${
                    activeMottoPackageData.status !== "Inactive"
                      ? "text-success"
                      : "text-danger"
                  } text-capitalize fw-600`}
                >
                  {activeMottoPackageData.status}
                </span>{" "}
                would you like to change it?
              </p>
              {activeMottoPackageData.status !== "Inactive" ? (
                <Button
                  color="danger"
                  className="px-4"
                  onClick={handleStatusChange}
                >
                  Cancel package
                </Button>
              ) : (
                <Button
                  color="success"
                  className="px-4"
                  onClick={handleStatusChange}
                >
                  Active package
                </Button>
              )}
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAdminSession,
      getAllMottoPackage,
      updateMottoPackage,
      cancelMottoPackage,
    },
    dispatch
  );
};

const AdminMottoPasses = connect(null, mapDispatchToProps)(AdminMottoPassesFC);
export default AdminMottoPasses;
