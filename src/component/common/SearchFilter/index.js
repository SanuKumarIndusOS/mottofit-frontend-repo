import React, { useEffect, useState } from "react";
import "./styles.scss";

function index() {
  return (
    <div className="search_filter">
      <div className="search_cta">
        <div className="circle"></div>
      </div>

      <div className="filter_type">
        <div className="filter_header">Availability</div>
        <div className="filter_options"></div>
      </div>
      <div className="filter_type">
        <div className="filter_header">Schedule</div>
        <div className="filter_options"></div>
      </div>
      <div className="filter_type">
        <div className="filter_header">Training Type</div>
        <div className="filter_options"></div>
      </div>
      <div className="filter_type">
        <div className="filter_header">Location</div>
        <div className="filter_options"></div>
      </div>
    </div>
  );
}

export default index;
