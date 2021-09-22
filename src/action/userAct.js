import { UserActionType } from "service/actionType";
import { userApi } from "service/apiVariables";

export const updateUserDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.updateUserDetails, payload });

    resolve(true);
  });
};

export const resetUserDetails = () => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.restUserDetails });

    resolve(true);
  });
};

//get User Detail
export const getUserDetail = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    api({ ...userApi.getUserDetail })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//user Session
export const userSession = (type, pageSize = 0) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    userApi.userSession.sessionType = type || "invited";
    userApi.userSession.pageSize = pageSize || 0;

    api({ ...userApi.userSession })
      .then(({ data, documentCount }) => {
        resolve({ data, documentCount });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Cancel Session
export const cancelSession = (body) => (dispatch, getState, { api, Toast }) => {
  return new Promise((resolve, reject) => {
    api({ ...userApi.cancelSession, body })
      .then((data) => {
        console.log(data);

        // Toast({ type: "success", message });

        resolve(data);
      })
      .catch((err) => {
        console.log(err);

        reject(err);
      });
  });
};

//schedule Session
export const scheduleSession = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    api({ ...userApi.scheduleSession, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//get Calender Details
export const getCalenderDetails = (trainerId, startDate, endDate, timeSlot) => (
  dispatch,
  getState,
  { api }
) => {
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

//handle invidation
export const invitationSession = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    api({ ...userApi.invitationSession, body })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// Get Active Motto passes
export const GetActivePass = (userId, trainerId, passType) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getActivePass } = userApi;
    getActivePass.trainerId = trainerId;
    getActivePass.userId = userId;
    getActivePass.passType = passType;

    api({ ...getActivePass })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//save mottoPass data

export const mottoPassData = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.mottoPassData, payload });

    resolve(true);
  });
};

// verify coupon code

export const verifyCouponCodeAct = (code) => (
  dispatch,
  getState,
  { api, Toast }
) => {
  return new Promise((resolve, reject) => {
    const { verifyCouponCode } = userApi;

    verifyCouponCode.code = code;

    api({ ...verifyCouponCode })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
    // resolve(true);
  });
};

// get all motto passes

export const getAllMottoPassesAct = () => (
  dispatch,
  getState,
  { api, Toast }
) => {
  return new Promise((resolve, reject) => {
    const { getAllPasses } = userApi;

    api({ ...getAllPasses })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
    // resolve(true);
  });
};
