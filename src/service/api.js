import { axiosInstance } from "./utilities";

import { logout } from "./utilities";

export var api = async function ({
  method = "get",
  api,
  body,
  status = false,
  token = "",
  baseURL = "normal",
}) {
  return await new Promise((resolve, reject) => {
    // setting token
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = localStorage.getItem("AuthToken")
      ? `Bearer ${localStorage.getItem("AuthToken")}`
      : "";

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
    // logout();
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
      finalURL = "http://180.151.69.138:2167";
      break;
    default:
      finalURL = "http://180.151.69.138:2081/api/";
      break;
  }

  return finalURL;
};
