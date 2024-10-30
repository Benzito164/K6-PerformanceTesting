const ThresholdsConfig = {
  common: {
    http_req_duration: [{ threshold: "p(95)<1", abortOnFail: false }],
    http_req_failed: ["rate<0.1"],
  },
  pre: {
    // http_req_duration: ["p(99)<300"],
  },
  prod: {
    http_req_duration: [{ threshold: "p(99) < 10", abortOnFail: true }],
  },
};

export const thresholds =
  ThresholdsConfig[__ENV.threshold] ||
  Object.assign({}, ThresholdsConfig.common, ThresholdsConfig.pre);
