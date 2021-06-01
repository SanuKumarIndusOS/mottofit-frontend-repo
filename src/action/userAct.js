import { UserActionType } from "service/actionType";
import { userApi } from "service/apiVariables";

export const updateUserDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.updateUserDetails, payload });

    resolve(true);
  });
};

//get User Detail
export const getUserDetail =
  () =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { getUserDetail } = userApi;

      api({ ...getUserDetail })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

//user Session
export const userSession =
  () =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { userSession } = userApi;

      api({ ...userSession })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

//schedule Session
export const scheduleSession =
  (body) =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { scheduleSession } = userApi;

      api({ ...scheduleSession, body })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

//get Calender Details
export const getCalenderDetails =
  (trainerId, startDate, endDate, timeSlot) =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { getCalenderDetails } = userApi;
      getCalenderDetails.trainerId = trainerId;
      getCalenderDetails.startDate = startDate;
      getCalenderDetails.endDate = endDate;
      getCalenderDetails.timeSlot = timeSlot;
      api({ ...getCalenderDetails })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
