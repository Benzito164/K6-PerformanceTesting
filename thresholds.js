export const thresholdsConfig = {
  common: {
    http_req_duration: [{ threshold: "p(95)<1", abortOnFail: false }],
    http_req_failed: ["rate<0.1"],
  },
  load: {
    http_req_duration: [{ threshold: "p(95)<1", abortOnFail: false }],
    http_req_failed: ["rate<0.1"],
  },
  smoke: {
    "group_duration{group:::Go to base url}": ["p(99)<300"],
  },
  stress: {
    http_req_duration: [{ threshold: "p(99) < 10", abortOnFail: true }],
  },
  spike: {
    http_req_duration: [{ threshold: "p(99) < 10", abortOnFail: true }],
  },
};

export const thresholds =
  thresholdsConfig[__ENV.threshold] ||
  Object.assign({}, thresholdsConfig.common, thresholdsConfig.pre);
