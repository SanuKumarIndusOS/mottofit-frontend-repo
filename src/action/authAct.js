import { addDate } from "service/helperFunctions";

export const loginOrSignUp =
  (currentApi, payload) =>
  (dispatch, getState, { api }) => {
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
