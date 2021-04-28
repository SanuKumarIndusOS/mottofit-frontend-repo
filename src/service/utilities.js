import axios from "axios";

import { history } from "../helpers";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const logout = () => {
  axiosInstance.defaults.headers.common["Authorization"] = "";
  localStorage.clear();
  history.push("/");
  window.location.reload(true);
};
