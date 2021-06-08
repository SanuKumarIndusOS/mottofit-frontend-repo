import { addDate } from "service/helperFunctions";
import { AuthApi } from "service/apiVariables";

export const loginOrSignUp = (currentApi, payload) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    currentApi.body = payload;

    api({ ...currentApi })
      .then((data) => {
        resolve(data);
        const { token, expiresIn, type } = data;
        localStorage.setItem("token", token);

        const expireTime = addDate(null, 2).unix();
        localStorage.setItem("exp", expireTime);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const resetPassword = (body) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    api({ ...AuthApi.resetPassword, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//change Password Trainer
export const changePasswordAct = (body, currentApi) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    api({ ...currentApi, body })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
