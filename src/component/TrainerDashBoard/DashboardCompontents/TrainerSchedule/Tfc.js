import React from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import moment from "moment";
import BackIcon from "../../../../assets/files/SVG/SchedulerAsset/Left Button.svg";
import NextIcon from "../../../../assets/files/SVG/SchedulerAsset/Right Button.svg";
import BlueHoverButton from "component/common/BlueArrowButton";

function Tfc() {
    //refer style in node module's react-table-drag
    const [editMode, setEditMode] = React.useState(false);
    const tempcells = [
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false],
    ];
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
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
    ]; //230 - 4

    let happy_hour = [
        "04:30 PM",
        "05:00 PM",
        "05:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
    ];

    let never_too_late = [
        "07:00 PM",
        "07:30 PM",
        "08:00 PM",
        "08:30 PM",
        "09:00 PM",
        "09:30 PM",
    ];

    const [time, setTime] = React.useState(early_bird);
    const [TimeSlot, setTimeSlot] = React.useState("EarlyBird");

    const [cellData, setCellData] = React.useState([]);
    const [selectedCell, setSelectedCell] = React.useState([]);

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

        console.log(TimeSlot);
    }, []);

    React.useEffect(() => {
        populate(startWeek, endWeek);
    }, [aslotKeys]);

    React.useEffect(() => {
        setSelectedCell([]);
        console.log("time changed");
        getAvailableSlots(startWeek, endWeek);
        populate(startWeek, endWeek);
    }, [time]);

    //   React.useEffect(() => {
    //     console.log("time changed");
    //     // getAvailableSlots(startWeek, endWeek);
    //     populate(startWeek, endWeek);

    //  }, [TimeSlot])

    React.useEffect(() => {
        Object.keys(data).map((item) => {
            // console.log(data[item]["slotDate"], data[item]["availabileTimes"]);
            dt[data[item]["slotDate"]] = data[item]["availabileTimes"];
        });
        console.log(dt);

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
        console.log(Object.keys(lt));
    }, [data]);

    React.useEffect(() => {
        console.log(cal);
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
        console.log("change", cells, cellData);
        setSelectedCell([]);
        cells.map((column, key) => {
            var temp = [];
            if (key !== 0) {
                // console.log(key);

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

    React.useEffect(() => {
        // setSelectedCell([]);
        console.log(selectedCell);
        var temp = [];
        var sortDate = [];

        selectedCell.map((column, columnkey) => {
            if (column.length !== 0) {
                column.map((row, rowkey) => {
                    console.log(cellData[columnkey][row]);

                    temp.push(cellData[columnkey][row]);
                });
            }
        });

        // NOTE "date" is sorted reverse and "time" is sorted normally within the same object

        if (temp.length !== 0) {
            sortDate = temp.sort((a, b) => new Date(b.date) - new Date(a.date));
            console.log(sortDate);
        }

        // if (temp.length === 1) {
        //     alert("Select more than Half an hour");
        //     setCells(tempcells);
        // } else {
        if (sortDate.length !== 0) {
            console.log(
                sortDate[0].time + "-" + sortDate[sortDate.length - 1].time
            );
            var data = {
                startDate: sortDate[sortDate.length - 1].date,
                endDate: sortDate[0].date,
                availabilitySlot: [
                    {
                        availableMode: TimeSlot,
                        availableSlots: [
                            sortDate[0].time +
                                "-" +
                                moment(
                                    sortDate[sortDate.length - 1].time,
                                    "HH:mm a"
                                )
                                    .add(30, "minutes")
                                    .format("hh:mm A"),
                        ],
                    },
                ],
            };

            fetch("http://doodlebluelive.com:2307/v1/addTrainerSlot", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                    alert("Slot Added");
                    setCells(tempcells);
                    getAvailableSlots(startWeek, endWeek);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        // }

        // setCells(tempcells)
    }, [selectedCell]);

    const PreviousWeek = () => {
        //Reset current cells

        setCells(tempcells);
        // console.log(startWeek.format("DD/MM"));
        setstartWeek(startWeek.subtract(7, "days"));
        setendWeek(endWeek.subtract(7, "days"));
        console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));

        getAvailableSlots(startWeek, endWeek);
        populate(startWeek, endWeek);
    };

    React.useEffect(() => {}, [startWeek]);

    const NextWeek = () => {
        //Reset current cells

        setCells(tempcells);
        // console.log(startWeek.format("DD/MM"));
        setstartWeek(startWeek.add(7, "days"));
        setendWeek(endWeek.add(7, "days"));
        console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));

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
            console.log("0");
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

    const getAvailableSlots = (start, end) => {
        var startDate = start.format("YYYY-MM-DD");
        var endDate = end.format("YYYY-MM-DD");
        console.log(startDate, endDate);
        console.log(
            "http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate=" +
                startDate +
                "&endDate=" +
                endDate +
                "&timeBlock=" +
                TimeSlot
        );
        fetch(
            "http://doodlebluelive.com:2307/v1/trainer/calenderView?startDate=" +
                startDate +
                "&endDate=" +
                endDate +
                "&timeBlock=" +
                TimeSlot,
            {
                method: "GET", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        )
            .then((response) => response.json())
            .then((json) => {
                setData(json.data);
            });
    };
    function editSlot(datee, time) {
        var editData = {
            date: datee,
            mode: "EarlyBird",
            blockedSlot: time,
            state: "BLOCK",
        };
        // console.log(date + " " + time);
        fetch("http://doodlebluelive.com:2307/v1/block/trainerSlot", {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(editData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                // alert("Slot blocked");
                setCells(tempcells);
                getAvailableSlots(startWeek, endWeek);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    const toggleEditMode = () => {
        console.log("edit mode");

        setEditMode(!editMode);
    };

    let tableData;

    let tableData2;
    if (cellData.length === 0) {
        console.log("hitu");
    } else {
        tableData = (
            <TableDragSelect
                value={cells}
                onChange={(cells) => setCells(cells)}
            >
                <th>
                    <td disabled></td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[0].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">MON</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[1].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">TUES</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[2].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">WED</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[3].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">THURS</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[4].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">FRI</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[5].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">SAT</div>
                    </td>
                    <td disabled>
                        <div className="table_header_number">
                            {cal[6].slice(8, 10)}
                        </div>
                        <div className="table_header_txt">SUN</div>
                    </td>
                </th>
                <tr>
                    <td disabled className="slot_time">
                        {time[0]}
                    </td>
                    {cellData[0].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    console.log(item.time);
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
                    <td disabled className="slot_time">
                        {time[1]}
                    </td>
                    {cellData[1].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
                    <td disabled className="slot_time">
                        {time[2]}
                    </td>
                    {cellData[2].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
                    <td disabled className="slot_time">
                        {time[3]}
                    </td>
                    {cellData[3].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
                    <td disabled className="slot_time">
                        {time[4]}
                    </td>
                    {cellData[4].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
                    <td disabled className="slot_time">
                        {time[5]}
                    </td>
                    {cellData[5].map((item) => {
                        if (aslotKeys.length !== 0) {
                            if (aslotKeys.find((el) => el === item.date)) {
                                if (
                                    aslot[item.date].find(
                                        (l) => l === item.time
                                    )
                                ) {
                                    return (
                                        <td
                                            disabled
                                            onClick={() =>
                                                editSlot(item.date, item.time)
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
            </TableDragSelect>
        );
        tableData2 = (
            <table
                value={cells}
                onChange={(cells) => setCells(cells)}
                className="table2"
            >
                <thead>
                    <tr>
                        <th disabled></th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[0].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">MON</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[1].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">TUES</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[2].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">WED</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[3].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">THURS</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[4].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">FRI</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[5].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">SAT</div>
                        </th>
                        <th disabled>
                            <div className="table_header_number">
                                {cal[6].slice(8, 10)}
                            </div>
                            <div className="table_header_txt">SUN</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            disabled
                            className="slot_time"
                            style={{ backgroundColor: "fff" }}
                        >
                            {time[0]}
                        </td>
                        {cellData[0].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        console.log(item.time);
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
                        <td disabled className="slot_time">
                            {time[1]}
                        </td>
                        {cellData[1].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
                        <td disabled className="slot_time">
                            {time[2]}
                        </td>
                        {cellData[2].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
                        <td disabled className="slot_time">
                            {time[3]}
                        </td>
                        {cellData[3].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
                        <td disabled className="slot_time">
                            {time[4]}
                        </td>
                        {cellData[4].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
                        <td disabled className="slot_time">
                            {time[5]}
                        </td>
                        {cellData[5].map((item) => {
                            if (aslotKeys.length !== 0) {
                                if (aslotKeys.find((el) => el === item.date)) {
                                    if (
                                        aslot[item.date].find(
                                            (l) => l === item.time
                                        )
                                    ) {
                                        return (
                                            <td
                                                disabled
                                                className="avaiable_slot"
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
        <>
            <div className="outter_table_trainer">
                <div className="table_trainer">
                    <div className="table_inner_trainer">
                        <div className="table_date">
                            <img src={BackIcon} onClick={PreviousWeek} /> &ensp;
                            <div className="date_week">
                                {startWeek.format("DD")} -{" "}
                                {endWeek.format("DD")} &ensp;
                                {startWeek.format("MMMM")},{" "}
                                {startWeek.format("yyyy")}
                            </div>
                            <img src={NextIcon} onClick={NextWeek} /> &ensp;
                            &ensp;
                        </div>
                        <div className="table_date">
                            <select
                                value={TimeSlot}
                                onChange={(e) => {
                                    setTimeSlot(e.target.value);
                                    console.log(e.target.value);
                                    if (e.target.value === "EarlyBird") {
                                        setTime(early_bird);
                                        console.log("early_bird");
                                    }

                                    if (e.target.value === "RiseAndShine") {
                                        setTime(rise_shine);
                                        console.log("RiseAndShine");
                                    }

                                    if (e.target.value === "MidDayBreak") {
                                        setTime(mid_day);
                                        console.log("MidDayBreak");
                                    }

                                    if (e.target.value === "HappyHours") {
                                        setTime(happy_hour);
                                        console.log("HappyHours");
                                    }

                                    if (e.target.value === "NeverTooLate") {
                                        setTime(never_too_late);
                                        console.log("NeverTooLate");
                                    }
                                }}
                            >
                                <option value="EarlyBird">Early Bird</option>
                                <option value="RiseAndShine">
                                    Rise & Shine
                                </option>
                                <option value="MidDayBreak">
                                    Mid-Day Break
                                </option>
                                <option value="HappyHours">Happy Hour</option>
                                <option value="NeverTooLate">
                                    Never Too Late
                                </option>
                            </select>
                        </div>
                    </div>
                    {/* {tableData}
                    {tableData2} */}
                    {
                        //Check if message failed
                        editMode ? (
                            <div> {tableData} </div>
                        ) : (
                            <div> {tableData2} </div>
                        )
                    }
                    <div className="scheduler_button">
                        {editMode ? (
                            <button
                                onClick={toggleEditMode}
                                className="scheduler_button"
                                style={{
                                    backgroundColor: "#53bfd2",
                                    width: "100%",
                                }}
                            >
                                SAVE
                            </button>
                        ) : (
                            <button
                                onClick={toggleEditMode}
                                className="scheduler_button"
                                style={{
                                    backgroundColor: "#53d27d",
                                    width: "100%",
                                }}
                            >
                                EDIT
                            </button>
                        )}
                    </div>
                </div>
                <ButtonSection />
            </div>
        </>
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
                    <h5>YOUR SLOT</h5>{" "}
                </div>
            </div>
        </div>
    );
};

export default Tfc;
