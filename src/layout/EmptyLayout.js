import React, { Component } from "react";
import "assets/css/homeLayout.scss";

export class EmptyLayout extends Component {
  render() {
    let { children } = this.props;
    console.log(children, "asdasd");
    return (
      <>
        <div className="empty-layout">{children}</div>
      </>
    );
  }
}
