import React, { useState, useEffect, useRef } from "react";
// import DatePicker from "react-datepicker";
import "./find.scss";
import "react-datepicker/dist/react-datepicker.css";
import Arrow from "../../../assets/files/SignUp/ArrowSecondary.svg";

import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";
// import { BiSearch } from "react-icons/bi";
// import HoverImage from "react-hover-image";
// import InPersonDropDown from "component/Home/Banner/InPersonDropDown";
// import Between from "../../../assets/files/Home/Banner/SearchBar/between.svg";

// //Assets for Inactive
// import BoxingIcon from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Inactive.svg";
// import PilatesIcon from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Inactive.svg";
// import StrengthIcon from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Inactive.svg";
// import YogaIcon from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Inactive.svg";

// // Assets when hoveded
// import BoxingIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Active.svg";
// import PilatesIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Active.svg";
// import StrengthIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Active.svg";
// import YogaIconIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Active.svg";

import TrainerCards from "../TrainersDetails/index";
import TrainerCardOutside from "../TrainerOutsideTime/index";
// import Weight from "../../../assets/files/SVG/findTrainer/weight.svg";
// import SheduleIcon from "../../../assets/files/Home/Banner/SearchBar/Shedule Icon.svg";
// import AvailabilityIcon from "../../../assets/files/Home/Banner/SearchBar/Availability Icon.svg";
// import DropdownTrainerAvailability from "../../Home/Banner/DropdownAvailability";
import "./find.scss";
// import { TrainerApi } from "service/apiVariables";
// import { api } from "service/api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateTrainerDetails,
  searchBestMatch,
  trainerSearchFilters,
} from "action/trainerAct";
import { getFormatDate } from "service/helperFunctions";
import { Toast } from "service/toast";

import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import moment from "moment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import { updateUserDetails } from "action/userAct";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import SearchFilter from "component/common/SearchFilter/index";

const FindTrainerFC = ({
  trainerQueryData,
  updateTrainerDetails,
  updateUserDetails,
  trainerSearchFilterData,
  searchBestMatch,
}) => {
  // const CyanRadio = withStyles({
  //   root: {
  //     color: cyan[400],
  //     "&$checked": {
  //       color: cyan[600],
  //     },
  //   },
  //   checked: {},
  // })((props) => <Radio color="default" {...props} />);
  //Responsive search
  // const [Calvalue, onChangeCal] = useState(new Date());
  // const [IPCvalue, setIPCValue] = useState("");
  // const [Avalvalue, setAvalValue] = useState("");
  // const [VerticalVal, setVerticalVal] = useState("");
  // const [LocationVal, setLocationVal] = useState("virtual");
  // const history = useHistory();

  // const [LocTrigger, setLocTrigger] = useState(false);
  // const [VerTrigger, setVerTrigger] = useState(false);
  // const [CalTrigger, setCalTrigger] = useState(false);
  // const [AvalTrigger, setAvalTrigger] = useState(false);

  // const handleIPCChange = (event) => {
  //   setIPCValue(event.target.value);
  // };

  // const handleAvalChange = (event) => {
  //   setAvalValue(event.target.value);
  // };

  // const [showMenu, setshowMenu] = useState(false);

  const search_filter_action = (payload) => {
    // console.log("mi2", payload, trainerSearchFilterData);

    searchBestMatch(payload, 1, "match").then((data) => {
      console.log(data);
      setTempBestMatch(data.list);
    });

    searchBestMatch(payload, 1, "unmatch").then((data) => {
      console.log(data.list);
      setTempOtherMatch(data.list);
    });
  };

  // const search_action_mob = () => {
  //   let payload = {
  //     query: {
  //       location: queryObject.location,
  //       date: moment(Calvalue).format("YYYY-MM-DD"),
  //       trainingType: { label: VerticalVal, value: VerticalVal },
  //       availability: Avalvalue,
  //       // inPerson: queryObject.inPerson,
  //       city: IPCvalue || "",
  //     },
  //   };

  //   if (queryObject.location === "inPerson" && !payload.query.city) {
  //     setInPersonDD(true);

  //     return Toast({ type: "error", message: "City is mandatory" });
  //   }

  //   updateTrainerDetails(payload);
  //   getTrainerDataByQuery(payload.query);
  //   setshowMenu(false);
  //   // history.push("/trainer/find");
  // };

  //DESKTOP
  const [tempBestMatch, setTempBestMatch] = useState([]);
  const [tempOtherMatch, setTempOtherMatch] = useState([]);
  const [loader, setloader] = useState(true);
  const [loaderUnMatch, setloaderUnMatch] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPageMatch, settotalPageMatch] = useState(0);
  const [pageUnmatch, setpageUnmatch] = useState(1);
  const [totalPageUnMatch, settotalPageUnMatch] = useState(0);

  // const [bestMatchData, setbestMatchData] = useState([]);
  // const [bestOthersData, setbestOthersData] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [DropdownState, setDropdownState] = useState(false);
  // const [
  //   DropdownTrainerAvailabilityState,
  //   setDropdownTrainerAvailabilityState,
  // ] = useState(false);
  // const [InPersonDD, setInPersonDD] = useState(false);

  // const [matchLoad, setMatchLoad] = useState(true);

  // const [ddBoxingState, setddBoxingState] = useState(false);
  // const [ddPilatesState, setddPilatesState] = useState(false);
  // const [ddYogaState, setddYogaState] = useState(false);
  // const [ddHiitState, setddHiitState] = useState(false);
  // const [queryObject, setqueryObject] = useState({
  //   location: "virtual",
  //   vertical: "",
  //   date: "",
  //   availability: "",
  //   // inPerson: "In Person",
  // });

  // const [inPerson, setInPerson] = useState({
  //   newYork: { value: "New York City", selected: false, name: "newYork" },
  //   miami: { value: "Miami", selected: false, name: "miami" },
  //   hamptons: { value: "Hamptons", selected: false, name: "hamptons" },
  //   palmBeach: { value: "Palm Beach", selected: false, name: "palmBeach" },
  // });

  const bestMatchRef = useRef(null);
  const otherRef = useRef(null);

  useEffect(() => {
    if (Object.keys(trainerSearchFilterData).length === 0) {
      console.log(
        JSON.parse(localStorage.getItem("persistFilters")),
        "persist"
      );

      if( JSON.parse(localStorage.getItem("persistFilters")) !== null){

      searchBestMatch(JSON.parse(localStorage.getItem("persistFilters")), page, "match").then((data) => {
        console.log(data);
        setTempBestMatch(data.list);
        settotalPageMatch(Math.ceil(data.totalCount / 6));
        setloader(false);
      });

      searchBestMatch(JSON.parse(localStorage.getItem("persistFilters")), pageUnmatch, "unmatch").then(
        (data) => {
          console.log(data.list);
          setTempOtherMatch(data.list);
          settotalPageUnMatch(Math.ceil(data.totalCount / 6));
          setloaderUnMatch(false);
        }
      );}
    } else {
      localStorage.setItem(
        "persistFilters",
        JSON.stringify(trainerSearchFilterData)
      );

      searchBestMatch(trainerSearchFilterData, page, "match").then((data) => {
        console.log(data);
        setTempBestMatch(data.list);
        settotalPageMatch(Math.ceil(data.totalCount / 6));
        setloader(false);
      });

      searchBestMatch(trainerSearchFilterData, pageUnmatch, "unmatch").then(
        (data) => {
          console.log(data.list);
          setTempOtherMatch(data.list);
          settotalPageUnMatch(Math.ceil(data.totalCount / 6));
          setloaderUnMatch(false);
        }
      );
    }

    window.scrollTo(0, 0);
    // //Mobile

    // //Desktop
    // if (trainerQueryData.location === "inPerson") {
    //   SetLocation("In Person");
    //   setInPersonDD(false);
    // }

    // if (trainerQueryData.location && trainerQueryData.date) {
    //   localStorage.setItem("search_location", trainerQueryData.location);
    //   localStorage.setItem("search_city", trainerQueryData.city);

    //   // console.log(trainerQueryData);

    //   let selectedCity = Object.values(inPerson).filter(
    //     ({ value }) => value === trainerQueryData?.city
    //   )[0];

    //   if (selectedCity?.name) {
    //     let tempInperson = { ...inPerson };
    //     tempInperson[selectedCity?.name] = { ...selectedCity, selected: true };

    //     setInPerson(tempInperson);
    //   }

    //   let payload = {
    //     query: {
    //       location: trainerQueryData?.location,
    //       vertical: trainerQueryData?.trainingType,
    //       date: getFormatDate(),
    //       availability: trainerQueryData?.availability,
    //       city: trainerQueryData?.city,
    //     },
    //   };

    //   setqueryObject(payload.query);
    //   // console.log(payload.query, "pp");

    //   localStorage.setItem("testObject", JSON.stringify(payload.query));

    //   getTrainerDataByQuery();
    //   // setqueryObject(trainerQueryData);
    //   // SetLocation(trainerQueryData.location);
    // } else {
    //   if (localStorage.getItem("search_location") === "inPerson") {
    //     SetLocation("In Person");
    //     setInPersonDD(false);
    //   }

    //   let selectedCity = Object.values(inPerson).filter(
    //     ({ value }) => value === localStorage.getItem("search_city")
    //   )[0];

    //   if (selectedCity?.name) {
    //     let tempInperson = { ...inPerson };
    //     tempInperson[selectedCity?.name] = { ...selectedCity, selected: true };

    //     setInPerson(tempInperson);
    //   }

    //   // console.log("else");

    //   let payload = {
    //     query: {
    //       location: trainerQueryData?.location,
    //       vertical: trainerQueryData?.trainingType,
    //       date: getFormatDate(),
    //       availability: trainerQueryData?.availability,
    //       city: trainerQueryData?.city,
    //     },
    //   };
    //   setqueryObject(JSON.parse(localStorage.getItem("testObject")));
    //   getTrainerDataByQuery(JSON.parse(localStorage.getItem("testObject")));
    //   updateTrainerDetails(JSON.parse(localStorage.getItem("testObject")));
    //   //   console.log(JSON.parse(localStorage.getItem("testObject")), "cc");
    // }

    // let reduxData = {
    //   selectedTimes: [],
    // };

    // // console.log(reduxData);

    // updateUserDetails(reduxData);
  }, []);

  // const onClickHandle = () => {
  //   setSelectedDate(selectedDate);
  // };

  // Dropdown for availability
  // let DropdownAvailability;
  // if (DropdownTrainerAvailabilityState) {
  //   DropdownAvailability = (
  //     <DropdownTrainerAvailability
  //       onClick={({ availability }) => {
  //         setqueryObject({ ...queryObject, availability });
  //         TriggerDropDownTrainerAvailability();
  //       }}
  //       selectedData={queryObject.availability?.value}
  //     />
  //   );
  // } else {
  //   <div></div>;
  // }

  // const TriggerDropDownTrainerAvailability = () => {
  //   setDropdownTrainerAvailabilityState(!DropdownTrainerAvailabilityState);
  // };

  // const handleChange = (value) => {
  //   let tempData = {
  //     newYork: { value: "New York City", selected: false },
  //     miami: { value: "Miami", selected: false },
  //     hamptons: { value: "Hamptons", selected: false },
  //     palmBeach: { value: "Palm Beach", selected: false },
  //   };

  //   tempData[value] = {
  //     ...tempData[value],
  //     selected: true,
  //   };

  //   setInPerson(tempData);

  //   TriggerInPersonDropDown();
  // };

  // let Dropdown;

  // if (DropdownState) {
  //   Dropdown = (
  //     <div className="box_3_active_trainer">
  //       <div className="dd_row_one">
  //         <div
  //           className={`option ${
  //             queryObject?.vertical?.value === "Boxing" ? "selected-data" : ""
  //           }`}
  //           onClick={() => {
  //             setddBoxingState(!ddBoxingState);
  //             setDropdownState(!DropdownState);
  //             queryObject?.vertical?.value === "Boxing"
  //               ? setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "", value: "" },
  //                 })
  //               : setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "Boxing", value: "Boxing" },
  //                 });
  //           }}
  //         >
  //           <div className="option_wapper">
  //             <HoverImage src={BoxingIcon} hoverSrc={BoxingIconActive} />
  //             <h2>Boxing</h2>
  //           </div>
  //         </div>
  //         <div
  //           className={`option ${
  //             queryObject?.vertical?.value === "Pilates" ? "selected-data" : ""
  //           }`}
  //           onClick={() => {
  //             setddPilatesState(!ddPilatesState);
  //             setDropdownState(!DropdownState);
  //             queryObject?.vertical?.value === "Pilates"
  //               ? setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "", value: "" },
  //                 })
  //               : setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "Pilates", value: "Pilates" },
  //                 });
  //           }}
  //         >
  //           <div className="option_wapper">
  //             <HoverImage src={PilatesIcon} hoverSrc={PilatesIconActive} />
  //             <h2>Pilates</h2>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="dd_row_two">
  //         <div
  //           className={`option ${
  //             queryObject?.vertical?.value === "Strength & HIIT"
  //               ? "selected-data"
  //               : ""
  //           }`}
  //           onClick={() => {
  //             setddHiitState(!ddHiitState);
  //             queryObject?.vertical?.value === "Strength & HIIT"
  //               ? setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "", value: "" },
  //                 })
  //               : setqueryObject({
  //                   ...queryObject,
  //                   vertical: {
  //                     label: "Strength & HIIT",
  //                     value: "Strength & HIIT",
  //                   },
  //                 });
  //             setDropdownState(!DropdownState);
  //           }}
  //         >
  //           <div className="option_wapper">
  //             <HoverImage src={StrengthIcon} hoverSrc={StrengthIconActive} />
  //             <h2>Strength & Hiit</h2>
  //           </div>
  //         </div>
  //         <div
  //           className={`option ${
  //             queryObject?.vertical?.value === "Yoga" ? "selected-data" : ""
  //           }`}
  //           onClick={() => {
  //             setddYogaState(!ddYogaState);
  //             queryObject?.vertical?.value === "Yoga"
  //               ? setqueryObject({
  //                   ...queryObject,
  //                   vertical: { label: "", value: "" },
  //                 })
  //               : setqueryObject({
  //                   ...queryObject,
  //                   vertical: {
  //                     label: "Yoga",
  //                     value: "Yoga",
  //                   },
  //                 });
  //             setDropdownState(!DropdownState);
  //           }}
  //         >
  //           <div className="option_wapper">
  //             <HoverImage src={YogaIcon} hoverSrc={YogaIconIconActive} />
  //             <h2>Yoga</h2>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   Dropdown = <div className="box_3_inactive"></div>;
  // }

  // const TriggerVerticalDropDown = () => {
  //   setDropdownState(!DropdownState);
  // };

  // const [virtualMarkup, setvirtualMarkup] = useState(
  //   <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
  // );
  // const [inPersonMarkup, setinPersonMarkup] = useState(
  //   <p style={{ fontWeight: "normal" }}>In Person</p>
  // );

  // const SetLocation = (value) => {
  //   if (value === "virtual" || value === "Virtual") {
  //     setvirtualMarkup(
  //       <p style={{ borderBottom: "3px solid #53BFD2" }}>Virtual</p>
  //     );
  //     setinPersonMarkup(<p style={{ fontWeight: "normal" }}>In Person</p>);

  //     setqueryObject({ ...queryObject, location: "virtual" });
  //   } else {
  //     setvirtualMarkup(<p style={{ fontWeight: "normal" }}>Virtual</p>);
  //     setinPersonMarkup(
  //       <p
  //         style={{
  //           borderBottom: "3px solid #53BFD2",
  //           width: "222px",
  //           maxWidth: "fit-content",
  //         }}
  //       >
  //         In Person
  //       </p>
  //     );
  //     setqueryObject({ ...queryObject, location: "inPerson" });
  //     setInPersonDD(!InPersonDD);
  //   }
  // };

  // const search_action = () => {
  //   let city =
  //     Object.values(inPerson).filter(({ selected }) => selected)[0]?.value ||
  //     "";
  //   let payload = {
  //     query: {
  //       location: queryObject.location,
  //       date: queryObject.date,
  //       trainingType: queryObject.vertical,
  //       availability: queryObject.availability,
  //       city,
  //       // inPerson: queryObject.inPerson,
  //     },
  //   };

  //   if (queryObject.location === "inPerson" && !city) {
  //     setInPersonDD(true);

  //     return Toast({ type: "error", message: "City is mandatory" });
  //   }

  //   // console.log(payload);

  //   updateTrainerDetails(payload);
  //   localStorage.setItem("testObject", JSON.stringify(payload.query));
  //   // getTrainerDataByQuery(payload.query);
  //   getTrainerDataByQuery(JSON.parse(localStorage.getItem("testObject")));
  // };

  // const getTrainerDataByQuery = (currData) => {
  //   const { location, date, trainingType, availability, city } =
  //     currData || trainerQueryData;

  //   const { trainerAvailableApi } = TrainerApi;

  //   let trainingValue = trainingType?.value ? [trainingType?.value] : [];

  //   let availabilityValue = availability?.value ? [availability?.value] : [];

  //   let tempCityValue = Object.values(inPerson).filter(
  //     ({ selected }) => selected
  //   )[0]?.value;

  //   let cityValue = tempCityValue ? tempCityValue : city;
  //   trainerAvailableApi.query.location = location;
  //   trainerAvailableApi.query.trainingType = encodeURIComponent(
  //     JSON.stringify(trainingValue)
  //   );
  //   // trainerAvailableApi.query.trainingType = JSON.stringify(trainingValue);

  //   trainerAvailableApi.query.date = date;
  //   trainerAvailableApi.query.city = location === "inPerson" ? cityValue : "";
  //   trainerAvailableApi.query.availability = JSON.stringify(availabilityValue);

  //   api({ ...trainerAvailableApi }).then(({ data }) => {
  //     setMatchLoad(false);
  //     setbestMatchData(data.bestMatch);
  //     setbestOthersData(data.others);

  //     if (data.bestMatch.length > 0) {
  //       return bestMatchRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //     if (data.others.length > 0) {
  //       return otherRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   });
  // };

  //inPerson_dropdown
  // let DropdownHomeInPerson;
  // if (InPersonDD) {
  //   DropdownHomeInPerson = (
  //     <InPersonDropDown
  //       onClick={({ inPerson }) => {
  //         setqueryObject({ ...queryObject, inPerson });
  //         TriggerInPersonDropDown();
  //       }}
  //       handleChange={handleChange}
  //       inPerson={inPerson}
  //       type="findtrainer"
  //     />
  //   );
  // } else {
  //   <div></div>;
  // }
  // const TriggerInPersonDropDown = () => {
  //   setInPersonDD(!InPersonDD);
  // };

  // let selectedValue =
  //   Object.values(inPerson).filter(({ selected }) => selected)[0]?.value || "";

  useEffect(() => {
    console.log(page);
    if (page !== 1) {
      searchBestMatch(trainerSearchFilterData, page, "match").then((data) => {
        console.log(data);
        setTempBestMatch((tempBestMatch) => [...tempBestMatch, ...data.list]);
        setloader(false);
      });
    }
  }, [page]);

  useEffect(() => {
    console.log(pageUnmatch);
    if (pageUnmatch !== 1) {
      searchBestMatch(trainerSearchFilterData, pageUnmatch, "unmatch").then(
        (data) => {
          console.log(data);
          setTempOtherMatch((tempOtherMatch) => [
            ...tempOtherMatch,
            ...data.list,
          ]);
          setloaderUnMatch(false);
        }
      );
    }
  }, [pageUnmatch]);

  const ViewMoreTrainers = () => {
    setloader(true);
    setPage(page + 1);
  };
  return (
    <div className="find_wrapper">
      <div className="find_trainer">
        <SearchFilter
          type="find"
          searchAction={search_filter_action}
          activeQuery={trainerSearchFilterData}
        />
      </div>

      {/* {tempBestMatch.length === 0 ? (
        <div className="load_p">
          <div className="loaders"></div>
        </div>
      ) : (
        <>
          <TrainerCards content={tempBestMatch} bestMatchRef={bestMatchRef} />
          {page >= totalPageMatch || totalPageMatch === 1? null : (
            <button onClick={ViewMoreTrainers}>View More Trainers</button>
          )}

          <button onClick={ViewMoreTrainers}>View More Trainers</button>
          <TrainerCardOutside content={tempOtherMatch} otherRef={otherRef} /> 
        </>
      )} */}

      <TrainerCards
        content={tempBestMatch}
        bestMatchRef={bestMatchRef}
        loader={loader}
      />
      {page >= totalPageMatch || totalPageMatch === 1 ? null : (
        <button className="view_more" onClick={ViewMoreTrainers}>
          View More Trainers
        </button>
      )}
      {loader ? (
        <div className="load_p">
          <div className="loaders"></div>
        </div>
      ) : null}

      <TrainerCardOutside content={tempOtherMatch} otherRef={otherRef} />

      {pageUnmatch >= totalPageUnMatch || totalPageUnMatch === 1 ? null : (
        <button
          onClick={() => {
            setpageUnmatch(pageUnmatch + 1);
            setloaderUnMatch(true);
          }}
          className="view_more"
        >
          View More Trainers
        </button>
      )}
      {loaderUnMatch ? (
        <div className="load_p">
          <div className="loaders"></div>
        </div>
      ) : null}
    </div>
    // <div
    //   id="find-trainer"
    //   className="find-trainer"
    //   onClick={() => {
    //     //  console.log("findhit");

    //     //Availability Dropdown
    //     if (DropdownTrainerAvailabilityState) {
    //       setDropdownTrainerAvailabilityState(
    //         !DropdownTrainerAvailabilityState
    //       );
    //     }

    //     //TrainingType DropDown
    //     if (DropdownState) {
    //       setDropdownState(!DropdownState);
    //     }

    //     //Inperson DropDown
    //     if (InPersonDD) {
    //       setInPersonDD(!InPersonDD);
    //     }
    //   }}
    // >
    //   <div className="card container border-0">
    //     <div className="card-wrapper">
    //       <div className="item1">
    //         <h3>Location</h3>
    //         <div className="location">
    //           <div className="card-item">
    //             <div
    //               onClick={() => {
    //                 SetLocation("Virtual");
    //                 setInPersonDD(false);
    //               }}
    //               className="card-selection"
    //             >
    //               {virtualMarkup}
    //             </div>
    //           </div>
    //           <img src={Between} alt="icon" className="ml-2" />
    //           <div
    //             onClick={() => {
    //               SetLocation("In Person") && TriggerInPersonDropDown();
    //             }}
    //             className={`position-relative ${selectedValue ? "pt-2" : ""}`}
    //           >
    //             <h6
    //               className={`${
    //                 selectedValue ? "in-person-option find-trainer" : ""
    //               } `}
    //             >
    //               {inPersonMarkup}
    //               <span>{selectedValue}</span>
    //             </h6>
    //             <div
    //               className="inPerson-dd"
    //               // onClick={TriggerInPersonDropDown}
    //             >
    //               {DropdownHomeInPerson}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <LineBetween />
    //       <div className="item2">
    //         <h3>Training Vertical</h3>
    //         <div className="card-item" onClick={TriggerVerticalDropDown}>
    //           <img src={Weight} alt="icon" />
    //           <p>
    //             {queryObject?.vertical?.label ||
    //               queryObject?.trainingType?.label ||
    //               "Select a Category"}
    //           </p>
    //         </div>
    //         {Dropdown}
    //       </div>
    //       <LineBetween />

    //       <div className="item3">
    //         <h3>Schedule</h3>
    //         <div className="card-item">
    //           <img src={SheduleIcon} alt="icon" />
    //           <DatePicker
    //             onChange={(datee) => {
    //               setSelectedDate(datee);
    //               var date = new Date(datee);
    //               var year = date.getFullYear();
    //               var month = date.getMonth() + 1;
    //               var dt = date.getDate();

    //               if (dt < 10) {
    //                 dt = "0" + dt;
    //               }
    //               if (month < 10) {
    //                 month = "0" + month;
    //               }

    //               setqueryObject({
    //                 ...queryObject,
    //                 date: year + "-" + month + "-" + dt,
    //               });
    //             }}
    //             selected={selectedDate}
    //             dateFormat="MM/dd/yyyy"
    //             minDate={new Date()}
    //             showYearDropdown
    //             scrollableMonthYearDropdown
    //           ></DatePicker>

    //           <DropDownSVG onClick={onClickHandle} />
    //         </div>
    //       </div>
    //       <LineBetween />

    //       <div className="item4">
    //         <h3>Availability</h3>
    //         <div
    //           className="card-item"
    //           onClick={TriggerDropDownTrainerAvailability}
    //         >
    //           <img src={AvailabilityIcon} alt="icon" />
    //           <p>
    //             {queryObject?.availability?.label?.split("(")[0] ||
    //               "Select a Time"}
    //           </p>
    //         </div>
    //         {DropdownAvailability}
    //       </div>

    //       <div className="item5">
    //         <div className="circle_search" onClick={search_action}>
    //           <BiSearch />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // <div
    //   className="mobile-find-wrapper"
    //   onClick={() => {
    //     // setshowMenu(!showMenu);
    //     history.push("/mobiles/filter");
    //   }}
    // >
    //   <div className="cat">
    //     {VerticalVal === "" ? (
    //       queryObject?.vertical?.label === "" ? (
    //         <div>All Verticals</div>
    //       ) : (
    //         queryObject?.vertical?.label
    //       )
    //     ) : (
    //       VerticalVal
    //     )}
    //   </div>
    //   <div className="date">
    //     {Calvalue === new Date()
    //       ? queryObject?.date
    //       : moment(Calvalue).format("YYYY/MM/DD")}
    //   </div>
    //   <div
    //     className="find-filters"
    //     // onClick={() => {
    //     //  // setshowMenu(!showMenu);
    //     //  history.push("/mobiles/filter")
    //     // }}
    //   >
    //     &#9776;
    //   </div>
    // </div>
    //   {matchLoad ? (
    //     <div className="load_parent" style={{ paddingBottom: "500px" }}>
    //       <div className="loaderss"></div>
    //     </div>
    //   ) : (
    //     <div>
    //       <div
    //         style={{ display: "flex", width: "100%", justifyContent: "center" }}
    //       >
    //         <SearchFilter
    //           type="find"
    //           searchAction={search_filter_action}
    //           activeQuery={trainerSearchFilterData}
    //         />
    //       </div>
    //      <h1>New</h1>
    //       <TrainerCards content={tempBestMatch} bestMatchRef={bestMatchRef} />
    //       <TrainerCardOutside content={tempOtherMatch} otherRef={otherRef} />

    //       <h1>OLD</h1>
    //       <TrainerCards content={bestMatchData} bestMatchRef={bestMatchRef} />
    //       <TrainerCardOutside content={bestOthersData} otherRef={otherRef} />
    //     </div>
    //   )}
    // </div>
  );
};

// function LineBetween() {
//   return (
//     <div className="line">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="2"
//         height="55"
//         viewBox="0 0 2 55"
//       >
//         <line
//           id="Line_1"
//           data-name="Line 1"
//           y2="55"
//           transform="translate(1)"
//           fill="none"
//           stroke="#eaeaea"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// }

// function DropDownSVG() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="14.118"
//       height="7.809"
//       viewBox="0 0 14.118 7.809"
//     >
//       <path
//         id="Drop_Down_3"
//         data-name="Drop Down 3"
//         d="M12,0,6,6,0,0"
//         transform="translate(1.061 1.061)"
//         fill="none"
//         stroke="#898989"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

const mapStateToProps = (state) => ({
  trainerQueryData: state.trainerReducer.query,
  trainerSearchFilterData: state.trainerReducer.searchFilterParams,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
      updateTrainerDetails,
      searchBestMatch,
    },
    dispatch
  );
};

const FindTrainer = connect(mapStateToProps, mapDispatchToProps)(FindTrainerFC);

export default FindTrainer;
