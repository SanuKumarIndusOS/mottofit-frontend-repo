import { TrainerApi } from "service/apiVariables";

//change Approval
export const changeApproval =
  (body, id) =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { changeApproval } = TrainerApi;
      changeApproval.id = id;
      api({ ...changeApproval, body })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

//get Trainer Detail
export const getTrainerDetail =
  (id, isAdmin = true) =>
  (dispatch, getState, { api }) => {
    return new Promise((resolve, reject) => {
      const { getTrainerDetail } = TrainerApi;
      getTrainerDetail.id = id;
      api({ ...getTrainerDetail, isAdmin })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
