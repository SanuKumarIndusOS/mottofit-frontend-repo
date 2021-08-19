import React from "react";
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

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CreateCoupon } from "action/adminAct";

function Marketing({ CreateCoupon }) {
  const [open, setOpen] = React.useState(false);

  const [ctype, setCtype] = React.useState("");
  const [ccode, setCode] = React.useState("");
  const [cvalue, setCvalue] = React.useState(0);

  const handleClose = (value) => {
    setOpen(false);
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
        <Card className="coupon_card">
          <div className="coupon_card_body">
            <div className="cval">20% OFF</div>
            <div className="ccode">TEST CODE</div>

            <div className="ctype"> <mark>One Time use</mark></div>
          </div>

          <CardActions>
            <Button size="medium" variant="contained" color="primary" style={{width:"100%"}}>
              Activate
            </Button>
          </CardActions>
        </Card>
      </div>
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
  return bindActionCreators({ CreateCoupon }, dispatch);
};

const MarketingC = connect(null, mapDispatchToProps)(Marketing);

export default MarketingC;
