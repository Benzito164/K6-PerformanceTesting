const example_scenario = {
  // name of the executor to use
  executor: "shared-iterations",

  // common scenario configuration
  startTime: "10s",
  gracefulStop: "5s",
  env: { EXAMPLEVAR: "testing" },
  tags: { example_tag: "testing" },

  // executor-specific configuration
  vus: 10,
  iterations: 200,
  maxDuration: "10s",
};

export const shared_iter_scenario = {
  executor: "shared-iterations",
  vus: 10,
  iterations: 100,
  startTime: "0s",
};

export const per_vu_scenario = createScenario("per-vu-iterations", 90, "0", 15);

export const rps_30_scenario = {
  executor: 'constant-arrival-rate',
  
 // How long the test lasts
 duration: '30s',

 // How many iterations per timeUnit
 rate: 30,

 // Start `rate` iterations per second
 timeUnit: '1s',

 // Pre-allocate 2 VUs before starting the test
 preAllocatedVUs: 2,

 // Spin up a maximum of 50 VUs to sustain the defined
 // constant arrival rate.
 maxVUs: 50,

}

export function createScenario(executor, iterations, startTime, vus) {
  if (!startTime) {
    startTime = `${0}s`;
  }
  return {
    executor,
    vus,
    iterations,
    startTime,
    gracefulStop: "5s",
  };
}
