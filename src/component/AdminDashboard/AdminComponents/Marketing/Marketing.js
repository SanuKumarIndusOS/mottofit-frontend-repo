import React from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

function Marketing() {
  const [open, setOpen] = React.useState(false);

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
            <TextField label="TYPE" variant="filled" />
            <br></br>
            <TextField label="COUPON VALUE" variant="filled" />
            <br></br>
          </form>
        </div>
      </Dialog>
    </div>
  );
}

export default Marketing;
