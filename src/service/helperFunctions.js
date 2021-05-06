import moment from "moment";
import { history } from "helpers";
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

export const scrollTop = (id = "root", selector = "getElementById") => {
  var contentPageEle = document[selector](id);

  if (selector != "getElementById") {
    contentPageEle = contentPageEle[0];
  }

  contentPageEle &&
    contentPageEle.scrollTo({
      top: 0,
      behavior: "smooth",
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

export const compareDates = (date1, date2 = moment(), unit = "h") => {
  return date1 && moment.unix(date1).diff(date2, "h");
  // return moment.unix(date1);
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
// export const getFormatDateOnly = (date) => {
//   let newDate = moment(date).format("DD MM YYYY");

//   console.log(moment.unix(date).format("DD MM YYYY"));

//   if (newDate === "Invalid date") {
//     return moment.unix(date).format("DD MM YYYY");
//   } else {
//     return newDate;
//   }
// };

export const getSNo = ({ totalPages, page, chunk }, index) => {
  return parseInt((page - 1) * chunk) + index + 1;
};

export const displayImg = (file) => {
  if (typeof file === "object") {
    return URL.createObjectURL(file);
  } else {
    return file;
  }
};

export const getToken = () => {
  return localStorage.getItem("AuthToken")
    ? localStorage.getItem("AuthToken")
    : "";
};

// export const removeFeatureDate = (current, paramDate, paramAction) => {
//   return current.isBefore(moment(new Date()).subtract(paramDate, paramAction));
// };

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

export const appendQuery = (data) => {
  history.push({
    search: generateURLQuery(history.location.search, data),
  });
};
export const replaceQuery = (data) => {
  history.replace({
    search: generateURLQuery(history.location.search, data),
  });
};
const dataRequiredValidation = (value) =>
  value !== "" && value !== null && value !== undefined;

const updateQueryStringParameter = (uri, key, value) => {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
};

const removeQueryStringParameter = (url, parameter) => {
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    var prefix = encodeURIComponent(parameter) + "=";
    var pars = urlparts[1].split(/[&;]/g);

    for (var i = pars.length; i-- > 0; ) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }
    return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
  }
  return url;
};

export const generateURLQuery = (url, data) => {
  return data.reduce((acc, { label, value }) => {
    if (dataRequiredValidation(value)) {
      return updateQueryStringParameter(acc, label, value);
    } else {
      return removeQueryStringParameter(acc, label);
    }
  }, url);
};
