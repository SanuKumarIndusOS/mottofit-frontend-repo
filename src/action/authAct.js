import { UserActionType } from "service/actionType";
import { AuthApi } from "service/apiVariables";
import { addDate, compareDates } from "service/helperFunctions";

export const loginOrSignUp = (currentApi, payload) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    currentApi.body = payload;

    api({ ...currentApi })
      .then((data) => {
        const { token, expiresIn } = data;
        localStorage.setItem("token", token);

        const expireTime = addDate(null, 2).unix();
        localStorage.setItem("exp", expireTime);

        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
