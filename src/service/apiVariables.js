export const AuthApi = {
  loginApi: {
    api: "login",
    method: "post",
  },
  userSignUp: {
    api: "user/sign-up",
    method: "post",
  },
  trainerSignUp: {
    api: "trainer/sign-up",
    method: "post",
    baseUrl: "notis",
  },
  loginAdminApi: {
    api: "login",
    method: "post",
  },
  adminApi: {
    api: "admin/login",
    method: "post",
  },
  resetPassword: {
    api: "user/reset-password",
    method: "post",
  },
  changePasswordTrainer: {
    api: "trainer/change-password",
    method: "post",
  },
  changePasswordUser: {
    api: "user/change-password",
    method: "post",
  },
};

export const TrainerApi = {
  trainerAvailableApi: {
    url: "availableTrainer",
    method: "get",
    query: {
      location: null,
      date: null,
      availability: null,
      trainingType: null,
      city: null,
    },
    get api() {
      return (
        this.url +
        `?location=${this.query.location}&trainingType=${this.query.trainingType}&date=["${this.query.date}","${this.query.date}"]&availability=${this.query.availability}` +
        `&timeZone=America/New_York&city="${this.query.city || ""}"`
      );
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  updateTrainerAvailabilityApi: {
    api: "trainer",
    method: "put",
  },
  updateTrainerDetails: {
    api: "trainer",
    method: "put",
  },
  getTrainerApi: {
    api: "trainer",
    method: "get",
  },
  getTrainerSessionApi: {
    url: "session/trainer",
    method: "get",
    iscalenderView: false,
    baseURL: "session",
    get api() {
      return this.url;
    },
    set addQuery({ key, payload }) {
      this.query[key] = payload;
    },
  },
  changeApproval: {
    url: "trainer?trainerId=",
    method: "put",
    baseURL: "normal",
    isAdmin: true,
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
  changeTrainerStatus: {
    url: "approve/trainers",
    method: "post",
    baseURL: "normal",
    isAdmin: true,
    id: null,
    get api() {
      return this.url;
    },
  },
  changeSessionStatus: {
    url: "session/update",
    method: "put",
    baseURL: "session",
    get api() {
      return this.url;
    },
  },
  getAllTrainerLists: {
    url: "admin/trainers?limit=5&page=",
    method: "get",
    baseURL: "normal",
    isAdmin: true,
    page: 1,
    get api() {
      return this.url + this.page;
    },
  },
  getStatsData: {
    api: "get/stats",
    method: "get",
    baseURL: "normal",
    isAdmin: true,
  },
  getAllUsersLists: {
    url: "admin/users?limit=20&page=",
    method: "get",
    baseURL: "normal",
    isAdmin: true,
    page: 1,
    get api() {
      return this.url + this.page;
    },
  },
  fetchTrainersLists: {
    url: "admin/trainers?limit=20&page=",
    method: "get",
    baseURL: "normal",
    isAdmin: true,
    page: 1,
    get api() {
      return this.url + this.page;
    },
  },
  getTrainerDetail: {
    url: "trainer/id?trainerId=",
    method: "get",
    baseURL: "normal",
    isAdmin: true,
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
  trainerDetail: {
    api: "trainer",
    method: "get",
    baseURL: "normal",
  },
  fileUpload: {
    api: "upload/image",
    method: "post",
    baseURL: "normal",
  },
  getTrainerCalenderDetails: {
    url: "trainer/calenderView?startDate=",
    method: "get",
    baseURL: "normal",
    startDate: null,
    endDate: null,
    timeSlot: null,
    trainerId: null,
    get api() {
      let url =
        this.url +
        this.startDate +
        "&endDate=" +
        this.endDate +
        "&timeBlock=" +
        this.timeSlot +
        `&timeZone=America/New_York`;

      if (this.trainerId) url = `${url}&trainerId=${this.trainerId}`;
      return url;
    },
  },
  trainerSlot: {
    api: "block/trainerSlot",
    method: "put",
    baseURL: "normal",
  },
  makeDefaultApi: {
    api: "slot/make-default",
    method: "post",
    baseURL: "normal",
  },
  addTrainerSlotApi: {
    api: "addTrainerSlot",
    method: "post",
    baseURL: "normal",
  },
  trainerChannel: {
    api: "trainer/channel",
    method: "get",
    baseURL: "message",
  },
  trainerMyEarning: {
    url: "payment-history/trainer?trainerId=",
    method: "get",
    baseURL: "payment",
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
};

export const PaymentApi = {
  getStripeAccLink: {
    api: "connected-account-link",
    method: "post",
    baseURL: "payment",
  },
  getPaymentMethods: {
    api: "payment-methods",
    method: "get",
    baseURL: "payment",
  },
  addCardDetails: {
    api: "attach-card",
    method: "post",
    baseURL: "payment",
  },
};

export const userApi = {
  getUserDetail: {
    api: "user",
    method: "get",
    baseURL: "normal",
  },
  userSession: {
    api: "session/user",
    method: "get",
    baseURL: "session",
  },
  cancelSession: {
    api: "session/update",
    method: "put",
    baseURL: "session",
  },
  scheduleSession: {
    api: "session/schedule",
    method: "post",
    baseURL: "session",
  },
  getCalenderDetails: {
    url: "trainer/calenderView?trainerId=",
    method: "get",
    baseURL: "normal",
    trainerId: null,
    startDate: null,
    endDate: null,
    timeSlot: null,
    get api() {
      return (
        this.url +
        this.trainerId +
        "&startDate=" +
        this.startDate +
        "&endDate=" +
        this.endDate +
        "&timeBlock=" +
        this.timeSlot +
        `&timeZone=America/New_York`
      );
    },
  },
  editUserData: {
    api: "user/edit",
    method: "post",
    baseURL: "normal",
  },
  userPaymentHistoryApi: {
    method: "get",
    url: "payment-history/user?userId=",
    baseURL: "payment",
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
};
