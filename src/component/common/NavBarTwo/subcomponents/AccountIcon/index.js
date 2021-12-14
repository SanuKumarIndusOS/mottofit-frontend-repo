import React, { useState } from "react";
import "./styles.scss";

import { history } from "helpers";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { change_login_status } from "action/NotificationAct";
import { logout } from "service/utilities";

import Person from "assets/files/SignUp/Person Icon.svg";

function AccountIcon({change_login_status}) {
  const [dropdownOpen, setOpen] = useState(false);
  const toggleDrop = () => setOpen(!dropdownOpen);
  const isUserLoggedIn =
    localStorage.getItem("token") || localStorage.getItem("admin-token");

  const handleDashboard = () => {
    let userType = parseInt(localStorage.getItem("type"));

    switch (userType) {
      case 1:
        history.push(`/admins/dashboard`);
        break;
      case 2:
        history.push(`/trainers/dashboard/schedule`);
        break;
      case 3:
        history.push(`/users/dashboard/session`);
        break;
    }
  };

  return (
    <div className="account-icon-container">
      {!isUserLoggedIn ? (
        <img src={Person} onClick={() => history.push("/mobile/login")}></img>
      ) : (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDrop}>
          <DropdownToggle className="custom-dropdown">
            <div>
              <img src={Person} alt="icon" />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={handleDashboard}>Dashboard</DropdownItem>
            <DropdownItem
              onClick={() => {
                change_login_status({ loginStatus: false }).then(logout);
                
              }}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
     
      change_login_status,
      
    },
    dispatch
  );
};

export default AccountIcon = connect(null, mapDispatchToProps)(AccountIcon);


