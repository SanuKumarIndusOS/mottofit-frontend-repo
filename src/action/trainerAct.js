import { TrainerApi, PaymentApi, userApi } from "service/apiVariables";
import {
  TrainerActionType,
  TrainerCaptureActionType,
  TrainerCaptureSetupActionType,
} from "service/actionType";

export const updateTrainerDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: TrainerActionType.updateTrainerDetails, payload });

    resolve(true);
  });
};

export const trainerSearchFilters = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: TrainerActionType.trainerSearchFilters, payload });

    resolve(true);
  });
};



export const searchBestMatch = (payload,type, page) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    console.log(JSON.parse(payload));
    TrainerApi.searchBestMatch.query = JSON.parse(payload);
    TrainerApi.searchBestMatch.key = type;
    TrainerApi.searchBestMatch.page = page;
    TrainerApi.searchBestMatch.limit = 6;

    api({ ...TrainerApi.searchBestMatch })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTrainerDetails = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { getTrainerApi } = TrainerApi;

    api({ ...getTrainerApi })
      .then(({ data }) => {
        dispatch({
          type: TrainerActionType.updateTrainerDetails,
          payload: { data },
        });

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTrainerSessionDetails = (type, pageSize) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getTrainerSessionApi } = TrainerApi;

    getTrainerSessionApi.sessionType = type || "upcoming";
    getTrainerSessionApi.pageSize = pageSize || 0;

    api({ ...getTrainerSessionApi })
      .then(({ data, documentCount }) => {
        // console.log(data);
        dispatch({
          type: TrainerActionType.updateTrainerDetails,
          payload: { sessionData: data },
        });

        resolve({ data, documentCount });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const trainerDetail = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { trainerDetail } = TrainerApi;

    api({ ...trainerDetail })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//file Upload
export const fileUpload = (body, configData) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { fileUpload } = TrainerApi;

    if (configData) fileUpload.configObj = configData;

    api({ ...fileUpload, body })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//get Trainer Calender Details
export const getTrainerCalenderDetails = (startDate, endDate, timeSlot) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getTrainerCalenderDetails } = TrainerApi;
    getTrainerCalenderDetails.startDate = startDate;
    getTrainerCalenderDetails.endDate = endDate;
    getTrainerCalenderDetails.timeSlot = timeSlot;
    getTrainerCalenderDetails.trainerId = localStorage.getItem("user-id");

    api({ ...getTrainerCalenderDetails })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//trainer Slot
export const trainerSlot = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { trainerSlot } = TrainerApi;
    api({ ...trainerSlot, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//make Default
export const makeDefaultApi = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { makeDefaultApi } = TrainerApi;
    api({ ...makeDefaultApi, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//add Trainer Slot Api
export const addTrainerSlotApi = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { addTrainerSlotApi } = TrainerApi;
    api({ ...addTrainerSlotApi, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//trainer Channel
export const trainerChannel = (sessionType, pageSize) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { trainerChannel } = TrainerApi;

    trainerChannel.id =
      parseInt(localStorage.getItem("type")) === 3 ? "user" : "trainer";

    trainerChannel.sessionType = sessionType;

    trainerChannel.pageSize = pageSize || 0;
    api({ ...trainerChannel })
      .then(({ data, documentCount }) => {
        resolve({ data, documentCount });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//admin Channel
export const adminChannel = (pageSize) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { adminChannel } = TrainerApi;

    // trainerChannel.pageSize = pageSize || 0;
    api({ ...adminChannel })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//trainer My Earning
export const trainerMyEarning = (id, pageSize, isTrainer) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { trainerMyEarning } = TrainerApi;

    const { userPaymentHistoryApi } = userApi;

    let currentApi = isTrainer ? trainerMyEarning : userPaymentHistoryApi;

    currentApi.id = id;
    currentApi.pageSize = pageSize;
    // trainerMyEarning.trainerId = id;
    api({ ...currentApi })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const captureTrainerCard = (data) => {
  return {
    type: TrainerCaptureActionType.CAPTURE_TRAINER_CARD,
    payload: data,
  };
};

export const captureTrainerSetup = (data) => {
  return {
    type: TrainerCaptureSetupActionType.CAPTURE_TRAINER_SETUP,
    payload: data,
  };
};

//update TrainerDetails Apicall
export const updateTrainerDetailsApicall = (body) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { updateTrainerDetails } = TrainerApi;
    api({ ...updateTrainerDetails, body })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//get Stripe Acc Link

export const getStripeAccLink = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    api({ ...PaymentApi.getStripeAccLink })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// request trainer for personal message

export const requestTrainerMessageAct = (payload) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    api({ ...TrainerApi.requestTrainerMessage, body: payload })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Global Trainer Search Results

export const fetchGlobalSearchResults = (payload) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    TrainerApi.globalSearch.key = payload.key;
    TrainerApi.globalSearch.page = payload.page;
    api({ ...TrainerApi.globalSearch })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};



export const getActiveUsersPass = (passStatus = "") => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { getAllUsersPasses } = TrainerApi;
    getAllUsersPasses.passStatus = passStatus;
 //console.log(getAllUsersPasses,"pp");
    api({ ...getAllUsersPasses })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
