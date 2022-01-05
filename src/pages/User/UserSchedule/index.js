import React from "react";
import UserTracker from "component/UserBookSession/UserTrackerBar/index";
import UserSchedule from "component/UserBookSession/UserSchedular/index";

export default function index() {
  return (
    <div>
      <UserTracker />
      <UserSchedule />
    </div>
  );
}
