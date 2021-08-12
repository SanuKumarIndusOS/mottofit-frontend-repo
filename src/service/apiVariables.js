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
  socialLoginSignup: {
    url: "auth/",
    socialType: "google",
    userType: "",
    method: "post",
    baseURL: "facebook",
    get api() {
      return `${this.url}${this.socialType}/${this.userType}`;
    },
  },
  socialLoginSignin: {
    url: "auth/social/",
    socialType: "google",
    method: "post",
    baseURL: "facebook",
    get api() {
      return `${this.url}${this.socialType}`;
    },
  },
};

export const TrainerApi = {
  searchBestMatch: {
    url: "availableTrainer",
    method: "get",
    baseURL: "search",
    page: 1,
    limit: 6,
    key: "",
    query: {
      location: null,
      date: null,
      availability: null,
      trainingType: null,
      city: null,
    },
    get api() {

      return(this.url
        +
         `?location=${this.query.location}&trainingType=${this.query.trainingType}&date=["${this.query.date}","${this.query.date}"]&availability=${this.query.availability}` +
         `&timeZone=America/New_York&city="${this.query.city || ""}"&page=${this.page}&limit=${this.limit}&listType=${this.key}`)
      
    },
  },
  trainerAvailableApi: {
    url: "availableTrainer",
    method: "get",
    baseURL: "normal",
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
    iscalenderView: false,
    url: "session/trainer?sessionType=",
    method: "get",
    baseURL: "session",
    sessionType: "",
    pageSize: 0,
    limit: 10,
    get api() {
      return `${this.url + this.sessionType}&offset=${this.pageSize}&limit=${
        this.limit
      }`;
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

  adminCancelSession: {
    url: "session/update",
    method: "put",
    baseURL: "session",
    isAdmin: true,
    id: null,
    get api() {
      return this.url;
    },
  },
  AddorRemoveUser: {
    url: "user/edit",
    method: "post",
    baseURL: "normal",
    isAdmin: true,
    id: null,
    get api() {
      return this.url;
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

  getAdminSession: {
    url: "sessionsList/",
    method: "get",
    baseURL: "session",
    isAdmin: true,
    page: 1,
    get api() {
      return this.url + this.type + this.page;
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
    url: "channel?",
    method: "get",
    baseURL: "message",
    id: "trainer",
    pageSize: 0,
    limit: 10,
    sessionType: "",
    get api() {
      return `${this.id}/${this.url}sessionType=${this.sessionType}&offset=${this.pageSize}&limit=${this.limit}`;
    },
  },
  adminChannel: {
    url: "admin/channel",
    method: "get",
    baseURL: "message",
    pageSize: 0,
    limit: 10,
    get api() {
      return `${this.url}`;
    },
  },
  trainerMyEarning: {
    url: "payment-history/trainer?trainerId=",
    method: "get",
    baseURL: "payment",
    id: null,
    pageSize: 0,
    limit: 10,
    get api() {
      return `${this.url}${this.id}&offset=${this.pageSize}&limit=${this.limit}`;
    },
  },
  requestTrainerMessage: {
    url: "channel",
    method: "post",
    baseURL: "message",
    get api() {
      return `${this.url}`;
    },
  },

  globalSearch: {
    url: "trainers/search?",
    method: "get",
    baseURL: "normal",
    page: 1,
    limit: 9,
    key: "",
    get api() {
      return `${this.url}search=${this.key}&page=${this.page}&limit=${this.limit}`;
    },
  },

  createDirectAdminMessage: {
    url: "admin/message",
    method: "post",
    baseURL: "message",
    key: "",
    get api() {
      return `${this.url}`;
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
    url: "session/user?sessionType=",
    method: "get",
    baseURL: "session",
    sessionType: "",
    pageSize: 0,
    limit: 10,
    get api() {
      return `${this.url + this.sessionType}&offset=${this.pageSize}&limit=${
        this.limit
      }`;
    },
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
    pageSize: 0,
    limit: 10,
    get api() {
      return `${this.url}${this.id}&offset=${this.pageSize}&limit=${this.limit}`;
    },
  },
  getSessionData: {
    method: "get",
    url: "session?sessionId=",
    baseURL: "session",
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
  editSessionData: {
    method: "put",
    url: "session/update",
    baseURL: "session",
    id: null,
    get api() {
      return this.url;
    },
  },
  invitationSession: {
    method: "post",
    url: "sessions/accept-invite",
    baseURL: "session",
    get api() {
      return this.url;
    },
  },
};

export const twilioApi = {
  getIdentityToken: {
    method: "get",
    url: "token?identity=",
    baseURL: "message",
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
};

export const notificationApi = {
  getNotificationList: {
    method: "get",
    url: "get-notification",
    baseURL: "notification",
    get api() {
      return this.url;
    },
  },
  markAllRead: {
    method: "post",
    url: "read/notifications",
    baseURL: "notification",
    get api() {
      return this.url;
    },
  },
  sendUnReadNotification: {
    method: "post",
    url: "send/unread-notification",
    baseURL: "notification",
    get api() {
      return this.url;
    },
  },

  changeLoginStatus: {
    method: "post",
    url: "edit/login-status",
    baseURL: "normal",
    get api() {
      return this.url;
    },
  },
};
