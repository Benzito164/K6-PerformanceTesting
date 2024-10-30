const EnvConfig = {
  dev: {
    BASE_URL: "https://www.google.co.uk",
    MY_FLAG: true,
  },
  qa: {
    BASE_URL: "https://pizza.qa.grafana.fun",
    MY_FLAG: true,
  },
  pre: {
    BASE_URL: "https://pizza.ste.grafana.fun",
    MY_FLAG: false,
  },
  prod: {
    BASE_URL: "https://pizza.grafana.fun",
    MY_FLAG: false,
  },
};
const Config = EnvConfig[__ENV.ENVIRONMENT] || EnvConfig["prod"];
export const BASE_URL = Config.BASE_URL;
export const PROD_URL = EnvConfig.prod.BASE_URL;
export const DEV_URL = EnvConfig.dev.DEV_URL;
