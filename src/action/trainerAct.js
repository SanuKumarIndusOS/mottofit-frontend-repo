import { TrainerApi } from "service/apiVariables";
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

export const getTrainerDetails =
    () =>
    (dispatch, getState, { api }) => {
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

export const getTrainerSessionDetails =
    () =>
    (dispatch, getState, { api }) => {
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

export const trainerDetail =
    () =>
    (dispatch, getState, { api }) => {
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
export const fileUpload =
    (body) =>
    (dispatch, getState, { api }) => {
        return new Promise((resolve, reject) => {
            const { fileUpload } = TrainerApi;

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
export const getTrainerCalenderDetails =
    (startDate, endDate, timeSlot) =>
    (dispatch, getState, { api }) => {
        return new Promise((resolve, reject) => {
            const { getTrainerCalenderDetails } = TrainerApi;
            getTrainerCalenderDetails.startDate = startDate;
            getTrainerCalenderDetails.endDate = endDate;
            getTrainerCalenderDetails.timeSlot = timeSlot;
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
export const trainerSlot =
    (body) =>
    (dispatch, getState, { api }) => {
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
export const makeDefaultApi =
    (body) =>
    (dispatch, getState, { api }) => {
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
export const addTrainerSlotApi =
    (body) =>
    (dispatch, getState, { api }) => {
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
export const trainerChannel =
    () =>
    (dispatch, getState, { api }) => {
        return new Promise((resolve, reject) => {
            const { trainerChannel } = TrainerApi;
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
export const trainerMyEarning =
    (id) =>
    (dispatch, getState, { api }) => {
        return new Promise((resolve, reject) => {
            const { trainerMyEarning } = TrainerApi;
            trainerMyEarning.trainerId = id;
            api({ ...trainerMyEarning })
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
