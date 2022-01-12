import React, { useState } from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import { Toast } from "service/toast";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CreateCoupon,
  GetAllCoupon,
  ActivateCoupon,
  deleteCouponAct,
} from "action/adminAct";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

function Marketing({
  CreateCoupon,
  GetAllCoupon,
  ActivateCoupon,
  deleteCouponApi,
}) {
  const [open, setOpen] = React.useState(false);
  const [isUserOpen, setUserOpen] = React.useState(false);
  const [couponData, setCouponData] = useState({});

  const [ctype, setCtype] = React.useState("");
  const [ccode, setCode] = React.useState("");
  const [cvalue, setCvalue] = React.useState(0);

  const [couponList, setCouponList] = React.useState([]);

  const handleClose = (value) => {
    setOpen(false);
  };

  const activateIncentive = (id, status) => {
    ActivateCoupon(id, status).then(() => {
      GetAllCoupon().then((data) => {
        setCouponList(data);
      });
    });
  };

  React.useEffect(() => {
    GetAllCoupon().then((data) => {
      console.log(data);
      setCouponList(data);
    });
  }, []);

  const handleToggle = () => {
    setUserOpen(false);
    setCouponData({});
  };

  const handleCouponData = (data) => {
    setCouponData(data);
    setUserOpen(!isUserOpen);
  };

  const handleDelete = (id) => {
    deleteCouponApi(id).then((data) => {
      console.log(data);
      Toast({ type: "success", message: data.message || "Success" });
      GetAllCoupon().then((couponData) => {
        setCouponList(couponData);
      });
    });
  };

  return (
    <div className="marketing_container">
      <div className="marketing_header">
        <h1>Incentives</h1>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => setOpen(true)}
        >
          <b>CREATE COUPON</b>
        </Button>
      </div>
      <div className="coupon_list">
        {couponList?.map((item) => {
          return (
            <Card className="coupon_card">
              <div className="coupon_card_body">
                <div className="cval d-flex">
                  {item.couponValue}% OFF
                  <button
                    className="p-0 border-0 ml-auto btn btn-transparent"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div className="ccode">{item.code}</div>

                <div className="ctype">
                  <mark>{item.type} use</mark>
                </div>
                <div className="d-flex align-items-center">
                  <p className="mb-0">Used: {`${item.couponCount}`} times</p>
                  {item.couponCount > 0 && (
                    <button
                      className="btn-link ml-auto btn p-0"
                      onClick={() => handleCouponData(item)}
                    >
                      View user
                    </button>
                  )}
                </div>
              </div>

              <CardActions>
                {item?.status === "inactive" ? (
                  <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                    onClick={() => {
                      activateIncentive(item?.id, "active");
                    }}
                  >
                    Activate
                  </Button>
                ) : (
                  <Button
                    size="medium"
                    variant="contained"
                    color="danger"
                    style={{ width: "100%" }}
                    onClick={() => {
                      activateIncentive(item?.id, "inactive");
                    }}
                  >
                    De-Activate
                  </Button>
                )}
              </CardActions>
            </Card>
          );
        })}
        <Card className="coupon_card">
          <div className="coupon_card_body">
            <div className="cval">20% OFF</div>
            <div className="ccode">TEST CODE</div>

            <div className="ctype">
              {" "}
              <mark>One Time use</mark>
            </div>
          </div>

          <CardActions>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
            >
              Activate
            </Button>
          </CardActions>
        </Card>
      </div>
      <Modal
        centered
        isOpen={isUserOpen}
        toggle={handleToggle}
        backdropClassName="h-100 w-100"
        size="lg"
      >
        <ModalHeader toggle={handleToggle}>
          {`List of user's used "${couponData.code}" coupon`}
        </ModalHeader>
        <ModalBody>
          <div className="pl-4 mb-4">
            <table>
              <thead>
                <tr>
                  <th className="pr-5">S.No</th>
                  <th className="pr-5">First Name</th>
                  <th className="pr-5">Last Name</th>
                  <th className="pr-5">Email</th>
                </tr>
              </thead>
              <tbody>
                {couponData.user?.map(
                  ({ firstName, lastName, email }, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{email}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </ModalBody>
      </Modal>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className="create_coupon_form">
          <h3>Create Coupon</h3>
          <form>
            <br></br>
            <TextField
              label="CODE"
              variant="filled"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <br></br>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-disabled-label">
                TYPE
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ctype}
                onChange={(event) => {
                  setCtype(event.target.value);
                }}
              >
                <MenuItem value={"ONE_TIME"}>ONE TIME</MenuItem>
                <MenuItem value={"PERMANENT"}>PERMANENT</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <TextField
              label="COUPON VALUE (in %)"
              variant="filled"
              type="number"
              onChange={(e) => {
                setCvalue(e.target.value);
              }}
            />
            <br></br>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => {
                let payload = {
                  code: ccode,
                  type: ctype,
                  couponValue: cvalue,
                };

                CreateCoupon(payload).then((data) => {
                  console.log(data);
                  GetAllCoupon().then((data) => {
                    setCouponList(data);
                    setOpen(false);
                  });
                });
              }}
            >
              <b>CREATE</b>
            </Button>
          </form>
        </div>
      </Dialog>
      {/* {ctype} {cvalue} {ccode} */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      CreateCoupon,
      GetAllCoupon,
      ActivateCoupon,
      deleteCouponApi: deleteCouponAct,
    },
    dispatch
  );
};

const MarketingC = connect(null, mapDispatchToProps)(Marketing);

export default MarketingC;
