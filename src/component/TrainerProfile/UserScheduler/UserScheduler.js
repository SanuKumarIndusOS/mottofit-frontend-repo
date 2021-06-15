import React, { useEffect } from "react";
// import "./styles.scss";
import moment from "moment";
import BackIcon from "../../../assets/files/SVG/SchedulerAsset/Left Button.svg";
import NextIcon from "../../../assets/files/SVG/SchedulerAsset/Right Button.svg";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import EarlyInActive from "../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/EarlyBird_Inactive.svg";
import RiseInActive from "../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/Rise_Shine_Inactive.svg";
import MidInActive from "../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/Mid-DayBreak_Inactive.svg";
import HappyInActive from "../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/HappyHour_Inactive.svg";
import NeverTooInActive from "../../../assets/files/TrainerDashboard/AvaliablityDropDownAssets/NeverTooLate_Inactive.svg";
import { getCalenderDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getFormatDate } from "service/helperFunctions";
import { updateTrainerDetails } from "../../../action/trainerAct";
const timeZone = [
  {
    label: "Early Bird",
    value: "EarlyBird",
  },
  {
    label: "Rise & Shine",
    value: "RiseAndShine",
  },
  {
    label: "Mid-Day Break",
    value: "MidDayBreak1",
  },
  {
    label: "Mid-Day Lunchtime",
    value: "MidDayBreak2",
  },
  {
    label: "Happy Hour",
    value: "HappyHours",
  },
  {
    label: "Never Too Late",
    value: "NeverTooLate",
  },
];
function UserSchedulerClass(props) {
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
  const [startWeek, setstartWeek] = React.useState(moment().startOf("isoWeek"));
  const [endWeek, setendWeek] = React.useState(moment().endOf("isoWeek"));

  var dt = new Object();
  var lt = new Object();
  const [data, setData] = React.useState([]);

  const [aslot, setAslot] = React.useState();
  const [aslotKeys, setAslotKeys] = React.useState();

  useEffect(() => {
    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);

    window.scrollTo(0, 0);

    // setuserSlots([props.startTime, props.endTime]);
  }, []);

  useEffect(() => {
    if (props?.selectedTimes?.length === 2) {
      setuserSlots(props.selectedTimes);
    }
  }, [props.selectedTimes]);

  useEffect(() => {
    setSelectedCell([]);
    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);
  }, [time]);

  useEffect(() => {
    Object.keys(data).map((item) => {
      dt[data[item]["slotDate"]] = data[item]["availabileTimes"];
    });

    var ta;
    Object.keys(dt).map((item) => {
      ta = [];
      dt[item].map((a) => {
        // ta.push(a["end"]);
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
        // temp.push(date + " " + time);
        temp.push({ date: date, time: time });
      });

      setCellData((cellData) => [...cellData, temp]);
    });
  }, [cal]);

  useEffect(() => {
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

        setSelectedCell((selectedCell) => [...selectedCell, temp]);
      }
    });
  }, [cells]);

  const PreviousWeek = () => {
    //Reset current cells

    setstartWeek(startWeek.subtract(7, "days"));
    setendWeek(endWeek.subtract(7, "days"));

    getAvailableSlots(startWeek, endWeek);
    populate(startWeek, endWeek);
  };

  const NextWeek = () => {
    //Reset current cells

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
          // temp.push(date + " " + time);
          temp.push({ date: date, time: time });
        });

        setCellData((cellData) => [...cellData, temp]);
      });
    }
  };

  function selectUserSlot(date, time) {
    // var temp = [date + time]
    // setuserSlots(temp);

    // console.log(date, time);

    var cellCollection = [];
    var temp = aslot[date];
    cellCollection.push(time + date);

    var newTime = moment(time, "hh:mm A").add(30, "minutes").format("hh:mm A");
    var ts = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm").valueOf();
    var tss;
    if (temp.find((el) => el === newTime)) {
      cellCollection.push(newTime + date);
      tss = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm")
        .add(60, "minutes")
        .valueOf();

      console.log(cellCollection, "cellCollection1");

      let reduxData = {
        selectedTimes: cellCollection,
      };

      props?.updateUserDetails && props?.updateUserDetails(reduxData);

      props.parentCallback(ts, tss, date);
    } else {
      var prevTime = moment(newTime, "hh:mm A")
        .subtract(60, "minutes")
        .format("hh:mm A");
      cellCollection.push(prevTime + date);
      tss = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm")
        .subtract(30, "minutes")
        .valueOf();

      ts = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm")
        .add(30, "minutes")
        .valueOf();

      console.log(cellCollection, "cellCollection1");

      let reduxData = {
        selectedTimes: cellCollection,
      };

      props.updateUserDetails(reduxData);

      props.parentCallback(tss, ts, date);
    }

    setuserSlots(cellCollection);
  }

  useEffect(() => {
    populate(startWeek, endWeek);
  }, [userSlots]);

  const getAvailableSlots = (start, end) => {
    var startDate = start.format("YYYY-MM-DD");
    var endDate = end.format("YYYY-MM-DD");

    if (props.id) {
      props
        .getCalenderDetails(props.id, startDate, endDate, TimeSlot)
        .then(({ data }) => {
          setData(data);
        });
    }
  };

  useEffect(() => {
    let tempValue = props.queryObject?.availability?.value;

    console.log(tempValue, TimeSlot);

    let selectedTime = {};

    if (tempValue && TimeSlot !== tempValue) {
      // switch (props.queryObject?.availability?.value) {
      //   case "EarlyBird":
      // }

      setTimeSlot(tempValue);

      switch (tempValue) {
        case "EarlyBird":
          setTime(early_bird);
          break;
        case "RiseAndShine":
          setTime(rise_shine);
          break;
        case "MidDayBreak1":
          setTime(mid_day);
          break;
        case "MidDayBreak2":
          setTime(mid_day_2);
          break;
        case "HappyHours":
          setTime(happy_hour);
          break;
        case "NeverTooLate":
          setTime(never_too_late);
          break;
        default:
          setTime(early_bird);
          break;
      }

      selectedTime = timeZone.filter((data) => data.value === tempValue)[0];

      console.log(selectedTime);
    } else {
      selectedTime = timeZone.filter((data) => data.value === "EarlyBird")[0];

      console.log(selectedTime);
    }

    let payload = {
      query: {
        location: props.queryObject.location,
        date: props.queryObject.date,
        trainingType: props.queryObject.trainingType,
        availability: selectedTime,
      },
    };

    props.updateTrainerDetails(payload);
  }, []);

  // HANDLE DROPDOWN CHANGE

  const handleChange = ({ target: { value } }) => {
    setTimeSlot(value);
    if (value === "EarlyBird") {
      setTime(early_bird);
    }

    if (value === "RiseAndShine") {
      setTime(rise_shine);
    }

    if (value === "MidDayBreak1") {
      setTime(mid_day);
    }

    if (value === "MidDayBreak2") {
      setTime(mid_day_2);
    }

    if (value === "HappyHours") {
      setTime(happy_hour);
    }

    if (value === "NeverTooLate") {
      setTime(never_too_late);
    }

    const selectedTime = timeZone.filter((data) => data.value === value)[0];

    let payload = {
      query: {
        location: props.queryObject.location,
        date: props.queryObject.date,
        trainingType: props.queryObject.trainingType,
        availability: selectedTime,
      },
    };

    props.updateTrainerDetails(payload);
  };

  let tableData2;

  if (cellData.length === 0) {
    //console.log("hitu");
  } else {
    tableData2 = (
      <table>
        <thead>
          <tr>
            <th style={{ height: "70px" }}>
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
                }}
              >
                {" "}
                {time[6]}
              </h6>
            </th>
            <th>
              <div className="table_header_number">{cal[0].slice(8, 10)}</div>
              <div className="table_header_txt">MON</div>
            </th>
            <th>
              <div className="table_header_number">{cal[1].slice(8, 10)}</div>
              <div className="table_header_txt">TUES</div>
            </th>
            <th>
              <div className="table_header_number">{cal[2].slice(8, 10)}</div>
              <div className="table_header_txt">WED</div>
            </th>
            <th>
              <div className="table_header_number">{cal[3].slice(8, 10)}</div>
              <div className="table_header_txt">THURS</div>
            </th>
            <th>
              <div className="table_header_number">{cal[4].slice(8, 10)}</div>
              <div className="table_header_txt">FRI</div>
            </th>
            <th>
              <div className="table_header_number">{cal[5].slice(8, 10)}</div>
              <div className="table_header_txt">SAT</div>
            </th>
            <th>
              <div className="table_header_number">{cal[6].slice(8, 10)}</div>
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                        className="avaiable_slot"
                      >
                        {item.time}
                      </td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                        className="avaiable_slot"
                      ></td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                      ></td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                      ></td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                      ></td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  if (aslot[item.date].find((l) => l === item.time)) {
                    return userSlots.find(
                      (el) => el === item.time + item.date
                    ) ? (
                      <td
                        style={{
                          backgroundColor: "#53bfd2",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
                      ></td>
                    ) : (
                      <td
                        style={{
                          backgroundColor: "#fff",
                        }}
                        onClick={() => selectUserSlot(item.date, item.time)}
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
                  disabled={true}
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
              {startWeek.format("DD")} - {endWeek.format("DD")} &ensp;
              {startWeek.format("MMMM")} &ensp; {startWeek.format("yyyy")}{" "}
            </div>
            <img
              src={NextIcon}
              onClick={NextWeek}
              style={{ cursor: "pointer" }}
            />{" "}
            &ensp; &ensp;
          </div>

          <select value={TimeSlot} name="TimeSlot" onChange={handleChange}>
            {timeZone.map((list, index) => (
              <option value={list.value} key={index}>
                {list.label}
              </option>
            ))}
          </select>

          {/* <Dropdown
            className="custom_dropdown"
            title="Select Time Zone"
            list={timeZone}            
            value={TimeSlot}
            
            name="TimeSlot"
          /> */}
        </div>
      </div>

      <br></br>

      {tableData2}
    </div>
  );
}

const mapStateToProps = (state) => ({
  queryObject: state.trainerReducer.query,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCalenderDetails,
      updateTrainerDetails,
    },
    dispatch
  );
};

const UserScheduler = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSchedulerClass);

export default UserScheduler;
