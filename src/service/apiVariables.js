import { generateQuery } from "./helperFunctions";

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
    },
    get api() {
      return (
        this.url +
        `?location=${this.query.location}&trainingType=["${this.query.trainingType}"]&date=["${this.query.date}","${this.query.date}"]&availability=["${this.query.availability}"]`
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
};

export const PaymentApi = {
  getStripeAccLink: {
    api: "connected-account-link",
    method: "post",
    baseURL: "payment",
  },
};
