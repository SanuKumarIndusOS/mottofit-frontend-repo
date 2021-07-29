import { NotificationActionType } from "../service/actionType";
import { notificationApi } from "service/apiVariables";

export const getnotificationList =
  () =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      api({ ...notificationApi.getNotificationList })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };



  export const mark_as_read =
  () =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      api({ ...notificationApi.markAllRead })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


