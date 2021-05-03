import { TrainerActionType } from "service/actionType";
import { TrainerApi } from "service/apiVariables";

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