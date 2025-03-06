const EnvConfig = {
  dev: {
    BASE_URL: "https://test.k6.io/"
  },
  qa: {
    BASE_URL: "https://pizza.qa.grafana.fun"
  },
  pre: {
    BASE_URL: "https://pizza.ste.grafana.fun"
  },
  prod: {
    BASE_URL: "https://pizza.grafana.fun"
  },
};
const Config = EnvConfig[__ENV.ENVIRONMENT] || EnvConfig["prod"];
export const BASE_URL = Config.BASE_URL;
export const PROD_URL = EnvConfig.prod.BASE_URL;
export const DEV_URL = EnvConfig.dev.DEV_URL;
