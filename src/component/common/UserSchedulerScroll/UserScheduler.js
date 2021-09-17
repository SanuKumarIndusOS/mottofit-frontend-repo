import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

import moment from "moment";
import { time } from "./timeArray";

import { getCalenderDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function UserScheduler({
  id,
  parentCallback,
  updateUserDetails,
  getCalenderDetails,
}) {
  const EarlyBirdRef = useRef(null);
  const RiseAndShineRef = useRef(null);
  const MidDayRef = useRef(null);
  const LunchTimeRef = useRef(null);
  const HappyHourRef = useRef(null);
  const NeverTooLateRef = useRef(null);

  // Calendar Control Variables
  const [date, setDate] = useState([]);
  const [startWeek, setstartWeek] = useState(moment().startOf("isoWeek"));
  const [endWeek, setendWeek] = useState(moment().endOf("isoWeek"));
  const [blockCell, setBlockCell] = useState([]);
  const [selectedCell, setSelectedCell] = useState({
    timeKey: null,
    timeKeyTwo: null,
    datekey: null,
  });

  const [mottoBlock, setMottoBlock] = useState("Early Bird");
  const mottoTimeBlock = [
    "Early Bird",
    "Rise and Shine",
    "Miday",
    "Lunchtime",
    "Happy Hours",
    "Never too Late",
  ];

  const [mobileDate, setMobileDate] = useState();

  useEffect(() => {
    populate(startWeek, endWeek);
    //console.log(startWeek.format("YYYY-MM-DD"));
    getTrainerSlots();
 
  }, []);

  // useEffect(() => {
  //   //  console.log(blockCell["2021-08-30"], "block");
  // }, [blockCell]);

  // useEffect(() => {
  //   console.log(selectedCell);
  // }, [selectedCell]);

  const PreviousWeek = () => {
    setstartWeek(startWeek.subtract(7, "days"));
    setendWeek(endWeek.subtract(7, "days"));
    populate(startWeek, endWeek);
    getTrainerSlots();
  };

  const NextWeek = () => {
    setstartWeek(startWeek.add(7, "days"));
    setendWeek(endWeek.add(7, "days"));
    populate(startWeek, endWeek);
    getTrainerSlots();
  };

  const populate = (start, end) => {
    var now = start.clone(),
      dates = [];

    while (now.isSameOrBefore(end)) {
      dates.push(now.format("YYYY-MM-DD"));
      now.add(1, "days");
    }

    setDate(dates);
    setMobileDate(dates[0]);
  };

  const setSelectedSlots = (timeKey, datekey, timeVal) => {
    // console.log(
    //   timeKey,
    //   datekey,
    //   time[timeKey].time,
    //   time[timeKey + 1].time,
    //   "pooo"
    // );
    var ts = moment(
      `${datekey} ${time[timeKey].time}`,
      "YYYY-MM-DD hh:mm A"
    ).valueOf();
    var tss = moment(`${datekey} ${time[timeKey].time}`, "YYYY-MM-DD hh:mm A")
      .add(60, "minutes")
      .valueOf();
    console.log(ts, tss);
    parentCallback(ts, tss, datekey);

    setSelectedCell({
      timeKey: timeKey,
      datekey: datekey,
      timeKeyTwo: timeKey + 1,
    });
  };

  const getTrainerSlots = () => {
    // fetch(
    //   `http://15.206.37.182:2307/v2/trainer/calenderView?startDate=${startWeek.format(
    //     "YYYY-MM-DD"
    //   )}&endDate=${endWeek.format(
    //     "YYYY-MM-DD"
    //   )}&timeBlock=EarlyBird&timeZone=America/New_York&trainerId=${id}`
    // )

    getCalenderDetails(
      id,
      startWeek.format("YYYY-MM-DD"),
      endWeek.format("YYYY-MM-DD"),
      "EarlyBird"
    ).then((data) => {
      setBlockCell(data.data);
      console.log(data.data, "hello");
    });
  };

  const cycleMottoSlots = (key, type) => {
    // mottoTimeBlock.findIndex(mottoBlock)

    if (type === "forward") {
      mottoBlock !== "Never too Late"
        ? setMottoBlock(
            mottoTimeBlock[
              mottoTimeBlock.findIndex((el) => el === mottoBlock) + 1
            ]
          )
        : setMottoBlock(mottoTimeBlock[0]);
    } else {
      mottoBlock !== "Early Bird"
        ? setMottoBlock(
            mottoTimeBlock[
              mottoTimeBlock.findIndex((el) => el === mottoBlock) - 1
            ]
          )
        : setMottoBlock(mottoTimeBlock[5]);
    }
  };

  useEffect(() => {
    if (mottoBlock === "Early Bird") {
      EarlyBirdRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (mottoBlock === "Rise and Shine") {
      RiseAndShineRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (mottoBlock === "Miday") {
      MidDayRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (mottoBlock === "Lunchtime") {
      LunchTimeRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (mottoBlock === "Happy Hours") {
      HappyHourRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    if (mottoBlock === "Never too Late") {
      NeverTooLateRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [mottoBlock]);

  return (
    <div className="">
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="calendar_controls">
          {moment(startWeek.format("YYYY-MM-DD")).isAfter(
            moment().startOf("isoWeek").format("YYYY-MM-DD"),
            "day"
          ) ? (
            <button onClick={PreviousWeek} className="calendar_buttons">
              &#10094;
            </button>
          ) : (
            <button
              onClick={PreviousWeek}
              className="calendar_buttons"
              disabled="true"
              style={{opacity:"0.5"}}
            >
              &#10094;
            </button>
          )}
         
          <div className="calendar_txt">
            {date[0]?.slice(8) +
              "-" +
              date[6]?.slice(8) +
              " " +
              moment(date[0], "'DD-MM-YYYY'").format("MMMM") +
              "," +
              " " +
              date[0]?.slice(0, 4)}
          </div>
          <button onClick={NextWeek} className="calendar_buttons">
            &#10095;
          </button>
        </div>

        <div className="calendar_controls">
          <button
            className="calendar_buttons"
            onClick={() => {
              cycleMottoSlots(mottoBlock, "reverse");
            }}
          >
            &#10094;
          </button>
          <div className="calendar_txt">{mottoBlock}</div>
          <button
            className="calendar_buttons"
            onClick={() => {
              cycleMottoSlots(mottoBlock, "forward");
            }}
          >
            &#10095;
          </button>
        </div>
      </div>
      <br></br>
      <table className="table sticky">
        <thead>
          <tr>
            <th className="date_title_two">Early Bird</th>
            {date.map((item, keys) => {
              return (
                <th className={keys === 6 ? "border_right_none" : null}>
                  <div className="center_date_title">
                    <div className="date_title">{item?.slice(8)}</div>
                    <div className="date_title_two">
                      {keys === 1 || keys === 3
                        ? moment(item, "YYYY MM DD").format("dddd").slice(0, 4)
                        : moment(item, "YYYY MM DD").format("dddd").slice(0, 3)}
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {time.map((item, keys) => {
            return (
              <tr>
                <td
                  className={
                    item.isHalfHour ? "border_top_none" : "border_bottom_none"
                  }
                >
                  <div className="time_title">{item.time}</div>
                </td>
                {date.map((dateItem, datekey) => {
                  return (
                    <td
                      onClick={(e) => {
                        if (
                          Object.keys(blockCell).find((ele) => ele === dateItem)
                        ) {
                          if (
                            blockCell[dateItem].find((ele) => ele === item.time)
                          ) {
                            setSelectedSlots(keys, dateItem, item);
                          }
                        }
                        // else {
                        //   setSelectedSlots(keys, dateItem);
                        // }
                      }}
                      className={
                        (selectedCell.timeKey === keys ||
                          selectedCell.timeKeyTwo === keys) &&
                        date.indexOf(selectedCell.datekey) === datekey
                          ? "selected_cell"
                          : // :
                          //  datekey === 6
                          // ? "border_right_none block_cell"
                          Object.keys(blockCell).find((ele) => ele === dateItem)
                          ? blockCell[dateItem].find((ele) => ele === item.time)
                            ? null
                            : "block_cell"
                          : "block_cell"
                      }
                      ref={
                        keys === 0
                          ? EarlyBirdRef
                          : keys === 6
                          ? RiseAndShineRef
                          : keys === 12
                          ? MidDayRef
                          : keys === 18
                          ? LunchTimeRef
                          : keys === 24
                          ? HappyHourRef
                          : keys === 30
                          ? NeverTooLateRef
                          : null
                      }
                    >
                      {}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mobile_calendar_card">
        {" "}
        <div style={{ display:"flex", justifyContent:"space-between"}}>
        {date.map((dateItem, keys) =>
          {
            return <b style={{cursor:"pointer"}}>  {mobileDate === dateItem? <div style={{color:'#53BFD2'}}>{dateItem?.slice(8)}</div>  : <div onClick={()=>{ setMobileDate(dateItem)}}>{dateItem?.slice(8)}</div>} </b>
          })}
          </div>
        <table style={{ width: "100%" }}>
          <tbody>
            {time.map((item, keys) => {
              return (
                <tr className="mc_time">
                  <td
                    className={
                      item.isHalfHour ? "border_top_none" : "border_bottom_none"
                    }
                  >
                    <div className="time_title">{item.time}</div>
                  </td>
                  <td
                    onClick={() => {
                     // setSelectedSlots(keys, "2021-08-31");
                      if (
                        Object.keys(blockCell).find((ele) => ele === "2021-08-31")
                      ) {
                        if (
                          !blockCell["2021-08-31"].find(
                            (ele) => ele === item.time
                          )
                        ) {
                          setSelectedSlots(keys, "2021-08-31");
                        }
                      } else {
                        setSelectedSlots(keys, "2021-08-31");
                      }
                    }}
                    className={
                      selectedCell.timeKey === keys ||
                      selectedCell.timeKeyTwo === keys
                        ? //date.indexOf(selectedCell.datekey) === datekey
                          "selected_cell mc_time_slot"
                        : Object.keys(blockCell).find((ele) => ele === "2021-08-31")
                        ? blockCell["2021-08-31"].find((ele) => ele === item.time)
                          ? "block_cell"
                          : "mc_time_slot"
                        : "mc_time_slot"
                    }
                  >
                    <div
                    // className="mc_time_slot"
                    ></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCalenderDetails,
    },
    dispatch
  );
};

const UserSchedulerC = connect(null, mapDispatchToProps)(UserScheduler);

export default UserSchedulerC;
