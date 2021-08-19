import React from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

function Marketing() {
  const [open, setOpen] = React.useState(false);
  const [ctype, setCtype] = React.useState("");

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
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className="create_coupon_form">
          <h3>Create Coupon</h3>
          <form>
            <br></br>
            <TextField label="CODE" variant="filled" />
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
                <MenuItem value={10}>ONE TIME</MenuItem>
                <MenuItem value={20}>PERMANENT</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <TextField label="COUPON VALUE" variant="filled" type="number" />
            <br></br>
            <Button variant="contained" color="primary" disableElevation>
              <b>CREATE</b>
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

export default Marketing;
