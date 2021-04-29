import React from 'react'
import UserTracker from "component/UserBookSession/UserTrackerBar/index";
import UserPayments from "component/UserBookSession/UserPayments/index";


export default function index() {
    return (
        <div>
            <UserTracker/>
            <UserPayments/>
        </div>
    )
}
