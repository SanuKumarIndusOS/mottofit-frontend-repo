import { NotificationManager } from "react-notifications";

export const Toast = ({ type = "success", message, time = "4000" }) => {
  console.log(message, "message");

  if (Array.isArray(message)) {
    let item;

    for (item of message) {
      NotificationManager[type](item.message, "", time);
    }
  } else {
    NotificationManager[type](message, "", time);
  }
};
