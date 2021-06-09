import { TrainerApi } from "service/apiVariables";

//change Approval
export const changeApproval = (body, id) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { changeTrainerStatus } = TrainerApi;

    let payload = {
      trainerId: id,
      action: body?.trainerStatus,
    };

    changeTrainerStatus.body = payload;

    api({ ...changeTrainerStatus })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//get Trainer Detail
export const getTrainerDetail = (id, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
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

//get All Trainer Lists
export const getAllTrainerLists = (page, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getAllTrainerLists } = TrainerApi;
    getAllTrainerLists.page = page;
    api({ ...getAllTrainerLists, isAdmin })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//get Stats Data
export const getStatsData = (page, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    api({ ...TrainerApi.getStatsData, isAdmin })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//get All Users Lists
export const getAllUsersLists = (page, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getAllUsersLists } = TrainerApi;
    getAllUsersLists.page = page;
    api({ ...getAllUsersLists, isAdmin })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//fetct Trainers Lists
export const fetchTrainersLists = (page, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { fetchTrainersLists } = TrainerApi;
    fetchTrainersLists.page = page;
    api({ ...fetchTrainersLists, isAdmin })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
