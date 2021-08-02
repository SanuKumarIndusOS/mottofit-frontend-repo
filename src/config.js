let config = {
  development: {
    api: {
      baseUrl: "http://doodlebluelive.com:2307",
      normalService: "http://doodlebluelive.com:2307/v1/",
      sessionService: "http://doodlebluelive.com:2337/v1/",
      paymentService: "http://doodlebluelive.com:2336/v1/",
      messgaeService: "http://doodlebluelive.com:2338/v1/",
      notificationService: "http://doodlebluelive.com:2355/v1/",
      tempFacebookService: "https://4db3af52de99.ngrok.io/v1/",
    },
    stripeUrl:
      "pk_test_51IJnd4BqgEC4bFYpGGizgTzbIgTjeilOIQ1ht7qe6UfgB3yfVYRrcJbEZp37oPu7ACIFACqNc6hWVIPcIAbGqHyA00aa6T2SRm",
    googleClientId:
      "667288998529-mltflfijefc7u5r8eaon8j8e1cmcfsot.apps.googleusercontent.com",
    facebookAppId: "310220110776502",
    socketURL:"http://doodlebluelive.com:2355"
  },
  production: {
    api: {
      baseUrl: "https://apis.bookmotto.com/user",
      normalService: "https://apis.bookmotto.com/user/v1/",
      sessionService: "https://apis.bookmotto.com/session/v1/",
      paymentService: "https://apis.bookmotto.com/payments/v1/",
      messgaeService: "https://apis.bookmotto.com/messaging/v1/",
      notificationService:"https://apis.bookmotto.com/notification/v1/",
    },
    stripeUrl:
      "pk_live_51IJnd4BqgEC4bFYp4gC7EoInjpEKKjJXZMZGZurak1aK2ft1XN72QU355hRhLry3QmEucSKialeSBOGevqDJqfIJ00sU4zSO7O",
    googleClientId:
      "667288998529-mltflfijefc7u5r8eaon8j8e1cmcfsot.apps.googleusercontent.com",
    facebookAppId: "310220110776502",
    socketURL:"https://apis.bookmotto.com/notification"
  },
};

let configBasedOnEnv = {};

let env = process.env.REACT_APP_ENV;

configBasedOnEnv = config[env] ? config[env] : config["development"];
// configBasedOnEnv = config["production"];

export default configBasedOnEnv;
