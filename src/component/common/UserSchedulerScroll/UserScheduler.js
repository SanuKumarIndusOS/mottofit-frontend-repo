import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

import moment from "moment";
import { time } from "./timeArray";

function UserScheduler() {
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

  useEffect(() => {
    populate(startWeek, endWeek);
    fetch(
      "http://15.206.37.182:2307/v2/trainer/calenderView?startDate=2021-08-30&endDate=2021-09-05&timeBlock=EarlyBird&timeZone=America/New_York&trainerId=f3fc69bf-913c-454f-b573-e4d0b27d402d"
    )
      .then((response) => response.json())
      .then((data) => {
        setBlockCell(data.data);
      });
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
  };

  const NextWeek = () => {
    setstartWeek(startWeek.add(7, "days"));
    setendWeek(endWeek.add(7, "days"));
    populate(startWeek, endWeek);
  };

  const populate = (start, end) => {
    var now = start.clone(),
      dates = [];

    while (now.isSameOrBefore(end)) {
      dates.push(now.format("YYYY-MM-DD"));
      now.add(1, "days");
    }

    setDate(dates);
  };

  const setSelectedSlots = (timeKey, datekey) => {
    console.log(timeKey, datekey);

    setSelectedCell({
      timeKey: timeKey,
      datekey: datekey,
      timeKeyTwo: timeKey + 1,
    });
  };

  return (
    <div className="">
      <button
        onClick={() =>
          EarlyBirdRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Early Bird
      </button>
      <button
        onClick={() =>
          RiseAndShineRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Rise and Shine{" "}
      </button>

      <button
        onClick={() =>
          MidDayRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Miday
      </button>

      <button
        onClick={() =>
          LunchTimeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Lunchtime
      </button>

      <button
        onClick={() =>
          HappyHourRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Happy Hours
      </button>

      <button
        onClick={() =>
          NeverTooLateRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          })
        }
      >
        Scroll to Never too Late
      </button>

      <br></br>
      <br></br>
      <div className="calendar_controls">
        <button onClick={PreviousWeek} className="calendar_buttons">
          &#10094;
        </button>
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
      <br></br>
      <table className="table sticky">
        <thead>
          <tr>
            <th className="date_title_two">Early Bird</th>
            {date.map((item, keys) => {
              return (
                <th className={keys === 6 ? "border_right_none" : null}>
                  <div>
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
                      onClick={() => {
                        if (
                          Object.keys(blockCell).find((ele) => ele === dateItem)
                        ) {
                          if (
                            !blockCell[dateItem].find(
                              (ele) => ele === item.time
                            )
                          ) {
                            setSelectedSlots(keys, dateItem);
                          }
                        } else {
                          setSelectedSlots(keys, dateItem);
                        }
                      }}
                      className={
                        (selectedCell.timeKey === keys ||
                          selectedCell.timeKeyTwo === keys) &&
                        date.indexOf(selectedCell.datekey) === datekey
                          ? "selected_cell"
                          : datekey === 6
                          ? "border_right_none"
                          : Object.keys(blockCell).find(
                              (ele) => ele === dateItem
                            )
                          ? blockCell[dateItem].find((ele) => ele === item.time)
                            ? "block_cell"
                            : null
                          : null
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
    </div>
  );
}

export default UserScheduler;
