import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";

export class CommonPageLoaderClass extends Component {
  render() {
    let { isSpinningLoader = false } = this.props;
    return (
      <>
        {!isSpinningLoader ? (
          <div className="loader">
            <div className="loader-circle"></div>
          </div>
        ) : (
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </>
    );
  }
}
let component = CommonPageLoaderClass;

export const CommonPageLoader = connect(null, null)(component);
