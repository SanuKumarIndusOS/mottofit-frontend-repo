import React, { useState } from "react";
import moment from "moment";
import "./styles.css";
import "./styles.scss";

import AvailabilityIcon from "../../assets/files/SVG/SearchBar/Availability Icon.svg";
import Earlybrid from "../../assets/files/SVG/SearchBar/Early bird.svg";
import BackIcon from "../../assets/files/SVG/SchedulerAsset/Left Button.svg";
import NextIcon from "../../assets/files/SVG/SchedulerAsset/Right Button.svg";
import DropdownTrainerAvailability from "../Home/Banner/DropdownAvailability";
import Select from "react-select";

import BlueArrowHover from "../common/BlueArrowButton";

const options = [
  { value: "nyw", label: "New York" },
  { value: "maimi", label: "Maimi" },
  { value: "hampton", label: "Hampton" },
  { value: "plam", label: "Plam Beach" },
];

function Scheduler(props) {
  const [date, setDate] = React.useState([]);
  const [startWeek, setstartWeek] = React.useState(moment().startOf("isoWeek"));
  const [endWeek, setendWeek] = React.useState(moment().endOf("isoWeek"));

  React.useEffect(() => {
    populate(startWeek, endWeek);
    console.log(props.trainerID);
  }, []);

  const PreviousWeek = () => {
    // console.log(startWeek.format("DD/MM"));
    setstartWeek(startWeek.subtract(7, "days"));
    setendWeek(endWeek.subtract(7, "days"));
    console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));
    populate(startWeek, endWeek);
  };

  const NextWeek = () => {
    // console.log(startWeek.format("DD/MM"));
    setstartWeek(startWeek.add(7, "days"));
    setendWeek(endWeek.add(7, "days"));
    console.log(startWeek.format("DD/MM"), endWeek.format("DD/MM"));

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
    console.log(dates);
  };

  // date logiccccccccccccc
  var glob = [];
  var dt = new Object();
  var lt = new Object();

  var time = [
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 Am",
  ];

  const [data, setData] = React.useState([]);
//   JSON.parse(localStorage.getItem("user-info"))["token"]
  React.useEffect(() => {
    console.log("check effect");
    populate(startWeek, endWeek);
    fetch(
      "http://doodlebluelive.com:2307/v1/trainer/calenderView?trainerId=8a915f49-4b89-43d6-bbf8-9f799886fc68&startDate=2021-04-22&endDate=2021-04-30&timeBlock=EarlyBird",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4YzI4MDlmLTFhYTEtNDI4OS05MDNhLWZmZjllOTM4YTdkYyIsImlhdCI6MTYxOTk3NDc0OSwiZXhwIjoxNjE5OTgxOTQ5fQ.0ze5BaUfDtbEtQfYZ6VC8eaVEHsqI8WqiqOYsZOJgf8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log(json.data);
      });
  }, []);

  Object.keys(data).map((item) => {
    // var a = json.data[item]["slotDate"];
    // var b = data[item]["availabileTimes"];
    dt[data[item]["slotDate"]] = data[item]["availabileTimes"];

    //glob.push(a);
  });

  var ta;
  Object.keys(dt).map((item) => {
    ta = [];
    dt[item].map((a) => {
      ta.push(a["end"]);
      ta.push(a["start"]);
      // console.log(ta, item);
    });

    lt[item] = ta;
  });

  console.log(ta);

  // Dropdown time zone
  const [selectedOption, setSelectedOption] = useState([]);

  // Dropdown for availability

  const [
    DropdownTrainerAvailabilityState,
    setDropdownTrainerAvailabilityState,
  ] = useState(false);
  const [
    DropdownAvailabilityValue,
    setDropdownTrainerAvailabilityValue,
  ] = useState([]);

  let DropdownAvailability;
  if (DropdownTrainerAvailabilityState) {
    DropdownAvailability = <DropdownTrainerAvailability />;
  } else {
    <div>hello</div>;
  }

  const TriggerDropDownTrainerAvailability = () => {
    setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
    setDropdownTrainerAvailabilityValue("Boxing");
  };

  return (
    <div className="outer_schedular_container">
      <div className="schedular_header">
        <div className="schedular_buttons">
          <img src={BackIcon} alt="back" onClick={PreviousWeek} />
          <p>Week Month, 2021</p>
          <img src={NextIcon} alt="back" onClick={NextWeek} />
        </div>

        <div className="schedular_dropdown">
          <div className="availability_dropdown_outter">
            <div className="availability_dropdown">
              <div
                className="availability"
                onClick={TriggerDropDownTrainerAvailability}
              >
                <img src={AvailabilityIcon} alt="icon" />
                <p>Early Bird</p>
              </div>
            </div>
            {DropdownAvailability}
          </div>
          <div className="time_zone">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="session_location_select"
            />
          </div>
        </div>
      </div>
      <div className="schedular_table">
        <table>
          <thead>
            <tr>
              <th>
                <div className="schedular_selection">
                  <img src={Earlybrid} alt="icon" />
                  <h3 className="schedular_selection_header">Earlybird</h3>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ttime">5:00 A.M</td>
            </tr>
            <tr>
              <td className="ttime">5:30 A.M</td>
            </tr>
            <tr>
              <td className="ttime">6:00 A.M</td>
            </tr>
            <tr>
              <td className="ttime">6.30 A.M</td>
            </tr>
            <tr>
              <td className="ttime">7.00 A.M</td>
            </tr>
            <tr>
              <td className="ttime">7.30 A.M</td>
            </tr>
          </tbody>
        </table>
        <table className="week_selection_table">
          <thead>
            <tr>
              <th>
                <div className="scheduler_date">
                  {String(date[0]).slice(8, 10)}
                </div>
                <div className="schedular_day">MON</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[1]).slice(8, 10)}
                </div>
                <div className="schedular_day">TUE</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[2]).slice(8, 10)}
                </div>
                <div className="schedular_day">WED</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[3]).slice(8, 10)}
                </div>
                <div className="schedular_day">THU</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[4]).slice(8, 10)}
                </div>
                <div className="schedular_day">FRI</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[5]).slice(8, 10)}
                </div>
                <div className="schedular_day">SAT</div>
              </th>
              <th>
                <div className="scheduler_date">
                  {String(date[6]).slice(8, 10)}
                </div>
                <div className="schedular_day">SUN</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {time.map((time) => {
              return (
                <tr key={time}>
                  {date.map((t) => {
                    if (Object.keys(dt).find((el) => el === t)) {
                      // console.log(dt[t][0]["end"], t);
                      // console.log(lt[t]);
                      if (lt[t].find((el) => el === time)) {
                        return (
                          <td
                            style={{
                              backgroundColor: "#F8F8F8",
                              border: "2px solid #E6E6E6",
                              height: "70px",
                            }}
                            key={time + t}
                            onClick={() => {
                              console.log(time + t);
                            }}
                          ></td>
                        );
                      } else {
                        return <td key={time + t}></td>;
                      }
                    } else {
                      return <td key={time + t}></td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
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
        <div className="items_slot_button">
          <button>
            BOOK A SESSION <BlueArrowHover />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
