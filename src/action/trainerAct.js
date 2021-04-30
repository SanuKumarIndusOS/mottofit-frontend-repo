import { TrainerActionType } from "service/actionType";

export const updateTrainerDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: TrainerActionType.updateTrainerDetails, payload });

    resolve(true);
  });
};
