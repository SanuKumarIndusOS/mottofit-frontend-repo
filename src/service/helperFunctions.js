import moment from "moment";
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

export const getFormatDate = (
  date = moment(),
  format = "YYYY-MM-DD",
  isUnix = false
) => {
  return isUnix
    ? moment.unix(date).format(format)
    : moment(date).format(format);
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
