import moment from "moment-timezone";
import { Toast } from "./toast";
export const addQuery = (dataObject, apiObject) => {
  if (!dataObject) {
    return "";
  }

  const keys = [
    "page",
    "limit",
    "search",
    "filter",
    "id",
    "region",
    "deleteFlag",
    "status",
    "size",
    "code",
    "name",
    "agencyName",
    "startDate",
    "endDate",
    "sort",
    "planName",
  ];

  keys.map((key) => {
    if (dataObject.hasOwnProperty(key) && typeof dataObject[key] != "object") {
      if (apiObject.query.hasOwnProperty(key)) {
        apiObject.addQuery = { key, payload: dataObject[key] };
      }
    } else {
      dataObject[key] &&
        Object.keys(dataObject[key]).map((keyName) => {
          if (apiObject.query.hasOwnProperty(keyName)) {
            apiObject.addQuery = {
              key: keyName,
              payload: dataObject[key][keyName],
            };
          }
        });
    }
  });
};

export const generateQuery = (query) => {
  let url = "";

  if (query.hasOwnProperty("url_id")) {
    url = `/${query.url_id}`;
  }

  return (
    url +
    Object.keys(query).reduce((accumulator, key, index) => {
      if (
        query[key] == "" ||
        query[key] == null ||
        key == "url_id" ||
        (query[key] !== null && query[key].toString().trim() == "")
      ) {
        return accumulator;
      } else {
        return accumulator + `${index != 0 ? "&" : "?"}${key}=${query[key]}`;
      }
    }, "")
  );
};

export const addDate = (date, number = 1, unit = "h") => {
  const date1 = date || moment();
  return moment(date1).add(number, unit);
};

export const convertToESTMs = (time) => {
  // var newYork = moment.tz(time, "America/New_York");
  const tempTime = moment(time).format("YYYY/MM/DD hh:mm A");

  console.log(`${tempTime} GMT-0400`, "q2");

  let temp =  moment(`${tempTime} GMT-0400`).valueOf();
  console.log(typeof temp, temp, "temp")
  console.log(moment.tz(temp, "America/New_York").format("YYYY MM DD HH:MM A"));
  return temp;
};

export const getFormatDate = (
  date = moment(),
  format = "YYYY-MM-DD",
  isUnix = false
) => {
  let tempDate = date || moment();
  return isUnix
    ? moment.tz(tempDate, "America/New_York").format(format)
    : moment(tempDate).format(format);
};

export const findDatesValid = (date) => {
  const isStartingDateValid = moment(date).isAfter("1900-01-01", "day");

  const isEndDateValid = moment(date).isBefore("2099-12-31", "day");

  return isStartingDateValid && isEndDateValid;
};

export const getFormattedYears = (startYear = 1950, endYear = null) => {
  const tempEndYear = !isNaN(endYear) ? parseInt(moment().year()) : endYear;
  const tempStartYear = !isNaN(startYear) ? 1950 : startYear;

  const noOfYears = Math.abs(tempEndYear - tempStartYear) + 1;

  const yearsData = [...new Array(noOfYears)].map((_, index) =>
    parseInt(tempStartYear + index)
  );

  return yearsData;
};

export const convertStringToObject = (searchQuery) => {
  try {
    if (!!searchQuery) {
      var search = searchQuery.substring(1);

      let obj = JSON.parse(
        '{"' +
          search
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      );

      return {
        filter: "",
        search: "",
        page: 1,
        field: "",
        orderBy: "",
        ...obj,
      };
    }

    return {
      search: "",
      page: 1,
      field: "",
      orderBy: "",
      filter: "",
    };
  } catch (error) {
    console.log(error, "d4sds4d");
  }
};

function fallbackCopyTextToClipboard(text, message) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    Toast({ type: "success", message });
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

export function copyTextToClipboard(text, message) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, message);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      Toast({ type: "success", message });
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      // Toast({ type: "error", err });
      console.error("Async: Could not copy text: ", err);
    }
  );
}
