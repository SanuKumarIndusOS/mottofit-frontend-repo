import { TrainerApi , AdminApi } from "service/apiVariables";

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

// adminCancelSession

export const adminCancelSession = (id, body) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { adminCancelSession } = TrainerApi;

    let payload = {
      sessionId: id,
      sessionStatus: body,
    };

    adminCancelSession.body = payload;

    console.log("action", payload);

    api({ ...adminCancelSession })
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

// Get Admin SessionData list
export const getAdminSession = (page, type, isAdmin = true) => (
  dispatch,
  getState,
  { api }
) => {
  return new Promise((resolve, reject) => {
    const { getAdminSession } = TrainerApi;
    getAdminSession.page = "?limit=10&offset=" + page;
    getAdminSession.type = type + "/";
    console.log(getAdminSession.type + getAdminSession.page, "action");
    api({ ...getAdminSession, isAdmin })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// Cancel session by admin

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

// Add or Remove user
export const AddorRemoveUser = (id, type) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { AddorRemoveUser } = TrainerApi;

    let payload = {
      userId: id,
      status: type,
    };

    AddorRemoveUser.body = payload;
    console.log(payload, AddorRemoveUser);
    api({ ...AddorRemoveUser })
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

export const createDirectMessage = (id) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { createDirectAdminMessage } = TrainerApi;

    let payload = {
      recipientId: id,
      admin: { id: localStorage.getItem("user-id") },
    };

    api({ ...createDirectAdminMessage, isAdmin: true, body: payload })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


export const CreateCoupon = (payload) => (dispatch, getState, { api }) => {
  return new Promise((resolve, reject) => {
    const { CreateCoupon } = AdminApi;

    // let payload = {
    //   userId: id,
    //   status: type,
    // };
   
    CreateCoupon.body = payload;
    console.log( CreateCoupon);
    
    api({ ...CreateCoupon })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

