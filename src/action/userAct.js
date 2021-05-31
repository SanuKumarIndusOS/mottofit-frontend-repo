import { UserActionType } from "service/actionType";
import { userApi } from "service/apiVariables";

export const updateUserDetails = (payload) => (dispatch) => {
  return new Promise((resolve) => {
    dispatch({ type: UserActionType.updateUserDetails, payload });

    resolve(true);
  });
};
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
