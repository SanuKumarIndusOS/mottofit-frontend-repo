import axios from "axios";

import { history } from "../helpers";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const cancelTokenSource = axios.CancelToken.source();

export const logout = (canOpenModel = false) => {
  axiosInstance.defaults.headers.common["Authorization"] = "";
  localStorage.clear();
  history.push("/");
  window.location.reload(true);
};
