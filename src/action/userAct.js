import { UserActionType } from "service/actionType";

export const updateUserDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.updateUserDetails, payload });

    resolve(true);
  });
};
