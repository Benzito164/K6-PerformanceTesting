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
//{
//executor: "per-vu-iterations",
//vus: 15,
//iterations: 90,
//startTime: "0s",
//};

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
