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

export const getTrainerSessionDetails = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { getTrainerSessionApi } = TrainerApi;

    api({ ...getTrainerSessionApi })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: TrainerActionType.updateTrainerDetails,
          payload: { sessionData: data },
        });

        resolve(data);
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
export const trainerChannel = () => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { trainerChannel } = TrainerApi;

    trainerChannel.id =
      parseInt(localStorage.getItem("type")) === 3 ? "user" : "trainer";
    api({ ...trainerChannel })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//trainer My Earning
export const trainerMyEarning = (id, isTrainer) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { trainerMyEarning } = TrainerApi;

    const { userPaymentHistoryApi } = userApi;

    let currentApi = isTrainer ? trainerMyEarning : userPaymentHistoryApi;

    currentApi.id = id;
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
