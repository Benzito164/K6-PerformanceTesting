
import { thresholdsConfig } from "./thresholds.js";
import { stages, WorkloadConfig } from "./workloads.js";
import { rps_30_scenario } from "./scenario.js";

export const smoke_options = {
  stages: WorkloadConfig.smoke,
  thresholds: thresholdsConfig.smoke,
};

export const load_options = {
  scenarios: { rps_30_scenario },
  thresholds: thresholdsConfig.load,
};
const spike_options = {};
const stress_options = {};
