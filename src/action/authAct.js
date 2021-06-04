import { UserActionType } from "service/actionType";
import { AuthApi } from "service/apiVariables";
import { addDate, compareDates } from "service/helperFunctions";
import { history } from "helpers";


export const loginOrSignUp = (payload) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    let { loginApi } = AuthApi;

    loginApi.body = payload;

    api({ ...loginApi })
      .then((data) => {
        resolve(data);
        const { token, expiresIn, type } = data;
        localStorage.setItem("token", token);

        const expireTime = addDate(null, 2).unix();
        localStorage.setItem("exp", expireTime);

       //if (token && type === "trainer") history.push("/trainer/about");

       
      })
      .catch((err) => {
        reject(err);
      });
  });
};
