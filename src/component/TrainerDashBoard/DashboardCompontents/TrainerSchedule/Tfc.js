import React, { useState, useEffect } from "react";
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import moment from "moment";
import BackIcon from "../../../../assets/files/SVG/SchedulerAsset/Left Button.svg";
import NextIcon from "../../../../assets/files/SVG/SchedulerAsset/Right Button.svg";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import EarlyInActive from "../../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/EarlyBird_Inactive.svg";
import RiseInActive from "../../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/Rise_Shine_Inactive.svg";
import MidInActive from "../../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/Mid-DayBreak_Inactive.svg";
import HappyInActive from "../../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/HappyHour_Inactive.svg";
import NeverTooInActive from "../../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/NeverTooLate_Inactive.svg";
import {
  getTrainerCalenderDetails,
  trainerSlot,
  makeDefaultApi,
  addTrainerSlotApi,
} from "action/trainerAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toast } from "service/toast";
import BlueHoverButton from "component/common/BlueArrowButton";
const timeZone = [
  {
    label: "EARLY BIRD (5AM-8AM)",
    value: "EarlyBird",
  },
  {
    label: "RISE & SHINE (8AM-11AM)",
    value: "RiseAndShine",
  },
  {
    label: "MID-DAY BREAK (11:30AM-2PM)",
    value: "MidDayBreak1",
  },
  {
    label: "MID-DAY LUNCHTIME (2AM-5PM)",
    value: "MidDayBreak2",
  },
  {
    label: "HAPPY HOUR (5PM-8PM)",
    value: "HappyHours",
  },
  {
    label: "NEVER TOO LATE (8PM-11PM)",
    value: "NeverTooLate",
  },
];

function TfcClass({
  getTrainerCalenderDetailsApi,
  trainerSlotApi,
  makeDefaultApi,
  addTrainerSlotApi,
}) {
  const [makeDefault, setMakeDefault] = useState(false);
  //refer style in node module's react-table-drag
  const [editMode, setEditMode] = useState(false);
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
    "Early Bird",
    EarlyInActive,
  ];

  let rise_shine = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "Rise & Shine",
    RiseInActive,
  ]; //1
  // let rise_shine = ["Rise & Shine"]; //1
  let mid_day = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "Mid-Day Break",
    MidInActive,
  ]; //230 - 4

  let mid_day_2 = [
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "Mid-Day Lunchtime",
    MidInActive,
  ];

  let happy_hour = [
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "Happy Hour",
    HappyInActive,
  ];

  let never_too_late = [
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "Never Too Late",
    NeverTooInActive,
  ];

  const [time, setTime] = useState(early_bird);
  const [TimeSlot, setTimeSlot] = useState("EarlyBird");

  const [cellData, setCellData] = useState([]);
  const [selectedCell, setSelectedCell] = useState([]);

  const [cells, setCells] = useState([
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ]);

  const [cal, setCal] = useState([]);
  const [startWeek, setstartWeek] = useState(moment().startOf("isoWeek"));
  const [endWeek, setendWeek] = useState(moment().endOf("isoWeek"));

  const token = localStorage.getItem("token");

  var dt = new Object();
  var lt = new Object();
  const [data, setData] = useState([]);

  const [aslot, setAslot] = useState();
  const [aslotKeys, setAslotKeys] = useState();

  useEffect(() => {
    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);
  }, []);

  useEffect(() => {
    populate(startWeek, endWeek);
  }, [aslotKeys]);

  useEffect(() => {
    setSelectedCell([]);
    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);
  }, [time]);

  //   useEffect(() => {
  //     // getAvailableSlots(startWeek, endWeek);
  //     populate(startWeek, endWeek);

  //  }, [TimeSlot])

  useEffect(() => {
    Object.keys(data).map((item) => {
      dt[data[item]["slotDate"]] = data[item]["availabileTimes"];
    });

    var ta;
    Object.keys(dt).map((item) => {
      ta = [];
      dt[item].map((a) => {
        ta.push(a["start"]);
      });

      lt[item] = ta;
    });

    setAslot(lt);
    setAslotKeys(Object.keys(lt));
  }, [data]);

  useEffect(() => {
    setCellData([]);
    time.map((time) => {
      var temp = [];
      cal.map((date) => {
        temp.push({ date: date, time: time });
      });

      setCellData((cellData) => [...cellData, temp]);
    });
  }, [cal]);

  useEffect(() => {
    setSelectedCell([]);
    cells.map((column, key) => {
      var temp = [];
      if (key !== 0) {
        column.map((row, key) => {
          if (row === true) {
            temp.push(key - 1);
          }
        });

        setSelectedCell((selectedCell) => [...selectedCell, temp]);
      }
    });
  }, [cells]);

  useEffect(() => {
    var temp = [];
    var sortDate = [];

    selectedCell.map((column, columnkey) => {
      if (column.length !== 0) {
        column.map((row, rowkey) => {
          temp.push(cellData[columnkey][row]);
        });
      }
    });

    // NOTE "date" is sorted reverse and "time" is sorted normally within the same object

    if (temp.length !== 0) {
      sortDate = temp.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    // if (temp.length === 1) {
    //     alert("Select more than Half an hour");
    //     setCells(tempcells);
    // } else {
    if (sortDate.length !== 0) {
      var data = {
        startDate: sortDate[sortDate.length - 1].date,
        endDate: sortDate[0].date,
        timeZone: "America/New_York",
        availabilitySlot: [
          {
            availableMode: TimeSlot,
            availableSlots: [
              sortDate[0].time +
                "-" +
                moment(sortDate[sortDate.length - 1].time, "HH:mm a")
                  .add(30, "minutes")
                  .format("hh:mm A"),
            ],
          },
        ],
      };

      let fulltime = moment(
        `${data?.startDate} ${sortDate[sortDate.length - 1].time}`
      );

      const isOldDate = fulltime.isBefore(moment());

      if (isOldDate) {
        setCells(tempcells);
        getAvailableSlots(startWeek, endWeek);
        return Toast({ type: "error", message: "Cannot add slot at past" });
      }

      addTrainerSlotApi(data)
        .then(() => {
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
    setstartWeek(startWeek.subtract(7, "days"));
    setendWeek(endWeek.subtract(7, "days"));

    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);
  };

  useEffect(() => {}, [startWeek]);

  const NextWeek = () => {
    //Reset current cells

    setCells(tempcells);
    setstartWeek(startWeek.add(7, "days"));
    setendWeek(endWeek.add(7, "days"));

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
      time.map((time) => {
        var temp = [];
        dates.map((date) => {
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
    getTrainerCalenderDetailsApi(startDate, endDate, TimeSlot).then(
      ({ data }) => {
        setData(data);
      }
    );
  };
  function editSlot(datee, time) {
    var editData = {
      date: datee,
      mode: TimeSlot,
      blockedSlot: time,
      state: "BLOCK",
      timeZone: "America/New_York",
    };

    // console.log(editData);

    trainerSlotApi(editData)
      .then(() => {
        setCells(tempcells);
        getAvailableSlots(startWeek, endWeek);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const toggleEditMode = () => {
    if (makeDefault) {
      saveDefaultWeeks();
      setMakeDefault(!makeDefault);
    }
    setEditMode(!editMode);
  };

  const saveDefaultWeeks = () => {
    var def_body = {
      startDate: startWeek.format("YYYY-MM-DD"),
      endDate: endWeek.format("YYYY-MM-DD"),
      defaultWeeks: 2,
      mode: TimeSlot,
      timeZone: "America/New_York",
    };
    makeDefaultApi(def_body)
      .then(() => {
        Toast({ type: "success", message: "Slot def blocked" });

        setCells(tempcells);
        getAvailableSlots(startWeek, endWeek);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  let tableData;

  let tableData2;
  if (cellData.length === 0) {
    console.log("hitu");
  } else {
    tableData = (
      <TableDragSelect
        value={cells}
        onChange={(cells) => {
          // console.log(cells);

          setCells(cells);
        }}
      >
        <thead>
          <td disabled>
            <img src={time[7]} style={{ width: "30px", height: "30px" }} />
            <h6
              style={{
                wordWrap: "break-word",
                lineHeight: "18px",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                paddingBottom: "0em",
                fontFamily: "Montserrat",
                fontWeight: "800",
                color: "#898989",
                margin: 0,
                textAlign: "center",
              }}
            >
              {" "}
              {time[6]}
            </h6>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[0].slice(8, 10)}</div>
            <div className="table_header_txt">MON</div>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[1].slice(8, 10)}</div>
            <div className="table_header_txt">TUES</div>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[2].slice(8, 10)}</div>
            <div className="table_header_txt">WED</div>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[3].slice(8, 10)}</div>
            <div className="table_header_txt">THURS</div>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[4].slice(8, 10)}</div>
            <div className="table_header_txt">FRI</div>
          </td>
          <td disabled>
            <div className="table_header_number">{cal[5].slice(8, 10)}</div>
            <div className="table_header_txt">SAT</div>
          </td>
          <td disabled style={{ height: "120px" }}>
            <div className="table_header_number">{cal[6].slice(8, 10)}</div>
            <div className="table_header_txt">SUN</div>
          </td>
        </thead>
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[0]}
          </td>
          {cellData[0].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[1]}
          </td>
          {cellData[1].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[2]}
          </td>
          {cellData[2].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[3]}
          </td>
          {cellData[3].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[4]}
          </td>
          {cellData[4].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
        <tr style={{ height: "70px" }}>
          <td disabled className="slot_time">
            {time[5]}
          </td>
          {cellData[5].map((item) => {
            if (aslotKeys.length !== 0) {
              if (aslotKeys.find((el) => el === item.date)) {
                if (aslot[item.date].find((l) => l === item.time)) {
                  return (
                    <td
                      disabled
                      onClick={() => editSlot(item.date, item.time)}
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
      <table className="table2">
        <thead>
          <tr style={{ height: "70px" }}>
            <th disabled>
              <img src={time[7]} style={{ width: "30px", height: "30px" }} />
              <h6
                style={{
                  wordWrap: "break-word",
                  lineHeight: "18px",
                  paddingLeft: "0.5em",
                  paddingRight: "0.5em",
                  paddingBottom: "0em",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  color: "#898989",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {" "}
                {time[6]}
              </h6>
              {/* {early_bird} */}
            </th>
            <th disabled>
              <div className="table_header_number">{cal[0].slice(8, 10)}</div>
              <div className="table_header_txt">MON</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[1].slice(8, 10)}</div>
              <div className="table_header_txt">TUES</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[2].slice(8, 10)}</div>
              <div className="table_header_txt">WED</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[3].slice(8, 10)}</div>
              <div className="table_header_txt">THURS</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[4].slice(8, 10)}</div>
              <div className="table_header_txt">FRI</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[5].slice(8, 10)}</div>
              <div className="table_header_txt">SAT</div>
            </th>
            <th disabled>
              <div className="table_header_number">{cal[6].slice(8, 10)}</div>
              <div className="table_header_txt">SUN</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: "70px" }}>
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
          <tr style={{ height: "70px" }}>
            <td disabled className="slot_time">
              {time[1]}
            </td>
            {cellData[1].map((item) => {
              if (aslotKeys.length !== 0) {
                if (aslotKeys.find((el) => el === item.date)) {
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
          <tr style={{ height: "70px" }}>
            <td disabled className="slot_time">
              {time[2]}
            </td>
            {cellData[2].map((item) => {
              if (aslotKeys.length !== 0) {
                if (aslotKeys.find((el) => el === item.date)) {
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
          <tr style={{ height: "70px" }}>
            <td disabled className="slot_time">
              {time[3]}
            </td>
            {cellData[3].map((item) => {
              if (aslotKeys.length !== 0) {
                if (aslotKeys.find((el) => el === item.date)) {
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
          <tr style={{ height: "70px" }}>
            <td disabled className="slot_time">
              {time[4]}
            </td>
            {cellData[4].map((item) => {
              if (aslotKeys.length !== 0) {
                if (aslotKeys.find((el) => el === item.date)) {
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
          <tr style={{ height: "70px" }}>
            <td disabled className="slot_time">
              {time[5]}
            </td>
            {cellData[5].map((item) => {
              if (aslotKeys.length !== 0) {
                if (aslotKeys.find((el) => el === item.date)) {
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return <td disabled className="avaiable_slot"></td>;
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
              {/* <img
                                src={BackIcon}
                                onClick={PreviousWeek}
                                disabled="true"
                            />{" "} */}
              &ensp;
              {moment(startWeek.format("YYYY-MM-DD")).isAfter(
                moment().startOf("isoWeek").format("YYYY-MM-DD"),
                "day"
              ) ? (
                <div>
                  <img src={BackIcon} onClick={PreviousWeek} /> &ensp;
                </div>
              ) : (
                <div>
                  <img
                    src={BackIcon}
                    disabled="true"
                    style={{ opacity: "0.5" }}
                  />{" "}
                  &ensp;
                </div>
              )}
              <div className="date_week">
                {startWeek.format("DD")} - {endWeek.format("DD")} &ensp;
                {startWeek.format("MMMM")}, {startWeek.format("yyyy")}
              </div>
              <img src={NextIcon} onClick={NextWeek} /> &ensp; &ensp;
            </div>
            <div className="table_date">
              <Dropdown
                className="custom_dropdown"
                title="Select Time Zone"
                list={timeZone}
                value={TimeSlot}
                onChange={(e) => {
                  setTimeSlot(e.value);
                  if (e.value === "EarlyBird") {
                    setTime(early_bird);
                  }

                  if (e.value === "RiseAndShine") {
                    setTime(rise_shine);
                  }

                  if (e.value === "MidDayBreak1") {
                    setTime(mid_day);
                  }

                  if (e.value === "MidDayBreak2") {
                    setTime(mid_day_2);
                  }

                  if (e.value === "HappyHours") {
                    setTime(happy_hour);
                  }

                  if (e.value === "NeverTooLate") {
                    setTime(never_too_late);
                  }
                }}
                name="TimeSlot"
              />
            </div>
          </div>
          {/* {tableData}
                    {tableData2} */}
          {
            //Check if message failed
            editMode ? (
              <div style={{ height: "100%", width: "960px" }}>{tableData}</div>
            ) : (
              <div style={{ height: "100%", width: "960px" }}>{tableData2}</div>
            )
          }
          <div className={`scheduler_button ${editMode ? "w-auto" : ""}`}>
            {editMode ? (
              <>
                <input
                  type="checkbox"
                  id="defualt"
                  onChange={(e) => {
                    setMakeDefault(e.target.checked);
                  }}
                  checked={makeDefault}
                />
                <label
                  for="defualt"
                  style={{ color: "#898989" }}
                  className="default_label"
                >
                  {" "}
                  Make default
                </label>
                <button
                  onClick={toggleEditMode}
                  className="scheduler_button"
                  style={{
                    backgroundColor: "#53d27d",
                    width: "100%",
                  }}
                >
                  SAVE <ArrowHoverBlacked />
                </button>
              </>
            ) : (
              <button
                onClick={toggleEditMode}
                className="scheduler_button"
                style={{
                  backgroundColor: "#53bfd2",

                  width: "100%",
                }}
              >
                ADD YOUR SLOT <ArrowHoverBlacked />
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
          <h5>BOOKED SLOT</h5>{" "}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerCalenderDetailsApi: getTrainerCalenderDetails,
      trainerSlotApi: trainerSlot,
      makeDefaultApi,
      addTrainerSlotApi,
    },
    dispatch
  );
};

const Tfc = connect(null, mapDispatchToProps)(TfcClass);

export default Tfc;
