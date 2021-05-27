import React from "react";
import moment from "moment";
import BackIcon from "../../../assets/files/SVG/SchedulerAsset/Left Button.svg";
import NextIcon from "../../../assets/files/SVG/SchedulerAsset/Right Button.svg";
import "./styles.scss";
function UserScheduler(props) {
    //   let date = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let early_bird = [
        "05:00 AM",
        "05:30 AM",
        "06:00 AM",
        "06:30 AM",
        "07:00 AM",
        "07:30 AM",
    ];

    let rise_shine = [
        "08:00 AM",
        "08:30 AM",
        "09:00 AM",
        "09:30 AM",
        "10:00 AM",
        "10:30 AM",
    ]; //1

    let mid_day = [
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
    ]; //230 - 4

    let mid_day_2 = [
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
    ];

    let happy_hour = [
        "05:00 PM",
        "05:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM",
    ];

    let never_too_late = [
        "08:00 PM",
        "08:30 PM",
        "09:00 PM",
        "09:30 PM",
        "10:00 PM",
        "10:30 PM",
    ];

    const [time, setTime] = React.useState(early_bird);
    const [TimeSlot, setTimeSlot] = React.useState("EarlyBird");

    const [cellData, setCellData] = React.useState([]);
    const [selectedCell, setSelectedCell] = React.useState([]);

    const [userSlots, setuserSlots] = React.useState([]);

    const [cells, setCells] = React.useState([
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ]);

    const [cal, setCal] = React.useState([]);
    const [startWeek, setstartWeek] = React.useState(
        moment().startOf("isoWeek")
    );
    const [endWeek, setendWeek] = React.useState(moment().endOf("isoWeek"));

    const token = localStorage.getItem("token");

    var dt = new Object();
    var lt = new Object();
    const [data, setData] = React.useState([]);

    const [aslot, setAslot] = React.useState();
    const [aslotKeys, setAslotKeys] = React.useState();

    React.useEffect(() => {
        getAvailableSlots(startWeek, endWeek);
        populate(startWeek, endWeek);

        // console.log(TimeSlot);
    }, []);

    React.useEffect(() => {
        setSelectedCell([]);
        //console.log("time changed");
        getAvailableSlots(startWeek, endWeek);
        populate(startWeek, endWeek);
    }, [time]);

    React.useEffect(() => {
        Object.keys(data).map((item) => {
            // console.log(data[item]["slotDate"], data[item]["availabileTimes"]);
            dt[data[item]["slotDate"]] = data[item]["availabileTimes"];
        });
        //console.log(dt);

        var ta;
        Object.keys(dt).map((item) => {
            ta = [];
            dt[item].map((a) => {
                // ta.push(a["end"]);
                ta.push(a["start"]);
                // console.log(ta, item);
            });

            lt[item] = ta;
        });

        setAslot(lt);
        setAslotKeys(Object.keys(lt));
        //  console.log(lt);
    }, [data]);

    React.useEffect(() => {
        // console.log(cal);
        setCellData([]);
        time.map((time) => {
            var temp = [];
            cal.map((date) => {
                // temp.push(date + " " + time);
                temp.push({ date: date, time: time });
            });

            setCellData((cellData) => [...cellData, temp]);
        });
    }, [cal]);

    React.useEffect(() => {
        //    ("change", cells, cellData);
        setSelectedCell([]);
        cells.map((column, key) => {
            var temp = [];
            if (key !== 0) {
                // (key);

                column.map((row, key) => {
                    if (row === true) {
                        temp.push(key - 1);
                    }
                });

                //   console.log(temp);
                setSelectedCell((selectedCell) => [...selectedCell, temp]);
            }
        });
    }, [cells]);

    const PreviousWeek = () => {
        //Reset current cells

        // console.log(startWeek.format("DD/MM"));
        setstartWeek(startWeek.subtract(7, "days"));
        setendWeek(endWeek.subtract(7, "days"));
        //console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));

        getAvailableSlots(startWeek, endWeek);
        populate(startWeek, endWeek);
    };

    React.useEffect(() => {}, [startWeek]);

    const NextWeek = () => {
        //Reset current cells

        // console.log(startWeek.format("DD/MM"));
        setstartWeek(startWeek.add(7, "days"));
        setendWeek(endWeek.add(7, "days"));
        // console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));

        getAvailableSlots(startWeek, endWeek);

        populate(startWeek, endWeek);

        // getAvailableSlots(startWeek, endWeek)
    };

    const populate = (start, end) => {
        setCellData([]);
        var now = start.clone(),
            dates = [];

        while (now.isSameOrBefore(end)) {
            dates.push(now.format("YYYY-MM-DD"));
            now.add(1, "days");
        }
        setCal(dates);

        if (cellData.length === 0) {
            // console.log("0");
            time.map((time) => {
                var temp = [];
                dates.map((date) => {
                    // temp.push(date + " " + time);
                    temp.push({ date: date, time: time });
                });

                setCellData((cellData) => [...cellData, temp]);
            });
        } else {
            //   console.log("pop");
        }
    };

    function selectUserSlot(date, time) {
        // console.log("user slot", date + time);

        // var temp = [date + time]
        // setuserSlots(temp);

        var cellCollection = [];
        var temp = aslot[date];
        // console.log(time, date, temp);

        cellCollection.push(time + date);

        var newTime = moment(time, "hh:mm A")
            .add(30, "minutes")
            .format("hh:mm A");
        var ts = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm").valueOf();
        var tss;
        if (temp.find((el) => el === newTime)) {
            // console.log("found", date);
            cellCollection.push(newTime + date);
            //  console.log(cellCollection);
            // tss = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm")
            //     .add(60, "minutes")
            //     .valueOf();
        } else {
            //  console.log("not_found");
            var prevTime = moment(newTime, "hh:mm A")
                .subtract(60, "minutes")
                .format("hh:mm A");
            cellCollection.push(prevTime + date);
            //  console.log(cellCollection);
            // tss = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm")
            //     .subtract(30, "minutes")
            //     .valueOf();
        }

        setuserSlots(cellCollection);
    }

    React.useEffect(() => {
        populate(startWeek, endWeek);
    }, [userSlots]);

    const getAvailableSlots = (start, end) => {
        var startDate = start.format("YYYY-MM-DD");
        var endDate = end.format("YYYY-MM-DD");
        //  console.log(startDate, endDate);
        // console.log(
        //   "http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate=" +
        //     startDate +
        //     "&endDate=" +
        //     endDate +
        //     "&timeBlock=" +
        //     TimeSlot
        // );
        fetch(
            "http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId=" +
                props.id +
                "&startDate=" +
                startDate +
                "&endDate=" +
                endDate +
                "&timeBlock=" +
                TimeSlot,
            {
                method: "GET", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: localStorage.getItem("token"),
                    Authorization: token,
                },
            }
        )
            .then((response) => response.json())
            .then((json) => {
                setData(json.data);
            });
    };

    let tableData2;

    if (cellData.length === 0) {
        //console.log("hitu");
    } else {
        tableData2 = (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <div className="table_header_number">
                                {cal[0].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">MON</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[1].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">TUES</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[2].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">WED</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[3].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">THURS</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[4].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">FRI</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[5].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">SAT</div>
                        </th>
                        <th>
                            <div className="table_header_number">
                                {cal[6].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">SUN</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="user_time_slot">{time[0]}</td>
                        {cellData[0].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        // console.log(item.date + item.time, userSlots, "blah");
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                                className="avaiable_slot"
                                            >
                                                {item.time}
                                            </td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                    <tr>
                        <td className="user_time_slot">{time[1]}</td>
                        {cellData[1].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                                className="avaiable_slot"
                                            ></td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                    <tr>
                        <td className="user_time_slot">{time[2]}</td>
                        {cellData[2].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                    <tr>
                        <td className="user_time_slot">{time[3]}</td>
                        {cellData[3].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                    <tr>
                        <td className="user_time_slot">{time[4]}</td>
                        {cellData[4].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                    <tr>
                        <td className="user_time_slot">{time[5]}</td>
                        {cellData[5].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return userSlots.find(
                                            (el) => el === item.time + item.date
                                        ) ? (
                                            <td
                                                style={{
                                                    backgroundColor: "#53bfd2",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        ) : (
                                            <td
                                                style={{
                                                    backgroundColor: "#fff",
                                                }}
                                                onClick={() =>
                                                    selectUserSlot(
                                                        item.date,
                                                        item.time
                                                    )
                                                }
                                            ></td>
                                        );
                                    } else {
                                        return <td></td>;
                                    }
                                } else {
                                    return <td></td>;
                                }
                            } else {
                                return <td></td>;
                            }
                        })}
                    </tr>
                </tbody>
            </table>
        );
    }
    return (
        <div className="outter_table_user">
            <div className="table_user">
                <div className="table_inner_trainer">
                    <div className="table_date">
                        {moment(startWeek.format("YYYY-MM-DD")).isAfter(
                            moment().startOf("isoWeek").format("YYYY-MM-DD"),
                            "day"
                        ) ? (
                            <div>
                                <img
                                    src={BackIcon}
                                    onClick={PreviousWeek}
                                    style={{ cursor: "pointer" }}
                                />{" "}
                                &ensp;
                            </div>
                        ) : (
                            <div>
                                <img
                                    src={BackIcon}
                                    disabled="true"
                                    style={{
                                        opacity: "0.5",
                                        cursor: "not-allowed",
                                    }}
                                />{" "}
                                &ensp;
                            </div>
                        )}
                        &ensp;
                        <div className="date_week">
                            {startWeek.format("DD")} - {endWeek.format("DD")}{" "}
                            &ensp;
                            {startWeek.format("MMMM")} &ensp;{" "}
                            {startWeek.format("yyyy")}{" "}
                        </div>
                        <img
                            src={NextIcon}
                            onClick={NextWeek}
                            style={{ cursor: "pointer" }}
                        />{" "}
                        &ensp; &ensp;
                    </div>
                    <select
                        value={TimeSlot}
                        onChange={(e) => {
                            setTimeSlot(e.target.value);
                            // console.log(e.target.value);
                            if (e.target.value === "EarlyBird") {
                                setTime(early_bird);
                                // console.log("early_bird");
                            }

                            if (e.target.value === "RiseAndShine") {
                                setTime(rise_shine);
                                //console.log("RiseAndShine");
                            }

                            if (e.target.value === "MidDayBreak1") {
                                setTime(mid_day);
                                // console.log("MidDayBreak");
                            }

                            if (e.target.value === "MidDayBreak2") {
                                setTime(mid_day_2);
                                //console.log("MidDayBreak2");
                            }

                            if (e.target.value === "HappyHours") {
                                setTime(happy_hour);
                                //console.log("HappyHours");
                            }

                            if (e.target.value === "NeverTooLate") {
                                setTime(never_too_late);
                                //console.log("NeverTooLate");
                            }
                        }}
                    >
                        <option value="EarlyBird">Early Bird</option>
                        <option value="RiseAndShine">Rise & Shine</option>
                        <option value="MidDayBreak1">Mid-Day Break</option>
                        <option value="MidDayBreak2">Mid-Day AfterNoon</option>
                        <option value="HappyHours">Happy Hour</option>
                        <option value="NeverTooLate">Never Too Late</option>
                    </select>
                </div>
            </div>
            {/* {tableData} */}

            <br></br>
            {/* {tableData2} */}

            {tableData2}

            <ButtonSection />
        </div>
    );
}

const ButtonSection = () => {
    return (
        <div className="schedular_slots">
            <div className="items_slots">
                <div className="item_slot1">
                    <div className="indicator"></div>
                    <h5>AVAILABLE</h5>
                </div>
                <div className="item_slot2">
                    <div className="indicator2"></div>
                    <h5>UNAVAILABLE</h5>{" "}
                </div>
                <div className="item_slot3">
                    <div className="indicator3"></div>
                    <h5>BOOKED SLOT</h5>{" "}
                </div>
            </div>
        </div>
    );
};

export default UserScheduler;
