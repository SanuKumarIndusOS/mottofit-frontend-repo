import { logout, cancelTokenSource, axiosInstance } from "./utilities";
import { Toast } from "./toast";
import config from "config";

export var api = async function ({
  method = "get",
  api,
  body,
  status = false,
  baseURL = "normal",
  isAdmin = false,
  configObj = {},
}) {
  configObj["cancelToken"] = cancelTokenSource.token;
  return await new Promise((resolve, reject) => {
    // setting token
    if (isAdmin) {
      console.log("isAdmin");
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = localStorage.getItem("admin-token")
        ? `${localStorage.getItem("admin-token")}`
        : "";
    } else {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = localStorage.getItem("token")
        ? `${localStorage.getItem("token")}`
        : "";
    }

    axiosInstance[method](
      `${getServiceUrl(baseURL)}${api}`,
      body ? body : "",
      configObj
    )
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
  if (data.status === 401 || data.status === 403) {
    // console.log(status, data);
    Toast({ type: "error", message: data.statusText });

    setTimeout(() => logout(), 1000);
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
  console.log(baseURL);

  switch (baseURL) {
    case "normal":
      finalURL = config.api.normalService;
      break;
    case "session":
      finalURL = config.api.sessionService;
      break;
    case "payment":
      finalURL = config.api.paymentService;
      break;
    case "message":
      finalURL = config.api.messgaeService;
      break;
    case "facebook":
      finalURL = config.api.tempFacebookService;
      break;
    default:
      finalURL = config.api.normalService;
      break;
    // case "normal":
    //   finalURL = "https://apis.bookmotto.com/user/v1/";
    //   break;
    // case "session":
    //   finalURL = "https://apis.bookmotto.com/session/v1/";
    //   break;
    // case "payment":
    //   finalURL = "https://apis.bookmotto.com/payments/v1/";
    //   break;
    // case "message":
    //   finalURL = "https://apis.bookmotto.com/messaging/v1/";
    //   break;
    // default:
    //   finalURL = "https://apis.bookmotto.com/user/v1/";
    //   break;
  }

  return finalURL;
};
