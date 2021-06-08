import { axiosInstance } from "./utilities";

import { logout } from "./utilities";

export var api = async function ({
  method = "get",
  api,
  body,
  status = false,
  token = "",
  baseURL = "normal",
  isAdmin = false,
}) {
  return await new Promise((resolve, reject) => {
    // setting token
    if (isAdmin) {
      axiosInstance.defaults.headers.common["Authorization"] =
        localStorage.getItem("admin-token")
          ? `${localStorage.getItem("admin-token")}`
          : "";
    } else {
      axiosInstance.defaults.headers.common["Authorization"] =
        localStorage.getItem("token") ? `${localStorage.getItem("token")}` : "";
    }

    axiosInstance[method](`${getServiceUrl(baseURL)}${api}`, body ? body : "")
      .then((data) => {
        resolve(statusHelper(status, data));
      })
      .catch((error) => {
        try {
          if (error.response) {
            reject(statusHelper(status, error.response));
          } else {
            reject(error);
          }
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
  });
};

var statusHelper = (status, data) => {
  if (data.status == 401 || data.status == 403) {
    logout();
  }
  if (status) {
    return {
      status: data.status,
      ...data.data,
    };
  } else {
    return data.data;
  }
};

let getServiceUrl = (baseURL) => {
  let finalURL = "";

  switch (baseURL) {
    case "normal":
      finalURL = "https://apis.bookmotto.com/user/v1/";
      break;
    case "session":
      finalURL = "https://apis.bookmotto.com/session/v1/";
      break;
    case "payment":
      finalURL = "https://apis.bookmotto.com/payments/v1/";
      break;
    case "message":
      finalURL = "https://apis.bookmotto.com/messaging/v1/";
      break;
    default:
      finalURL = "https://apis.bookmotto.com/user/v1/";
      break;
  }

  return finalURL;
};
