export const WorkloadConfig = {
  smoke: [{ duration: "10s", target: 2 }],
  average: [
    { duration: "1m", target: 100 },
    { duration: "4m", target: 100 },
    { duration: "1m", target: 0 },
  ],
  stress: [
    { duration: "1m", target: 700 },
    { duration: "4m", target: 700 },
    { duration: "1m", target: 0 },
  ],
  spike: [
    { duration: '5m', target: 10},
    { duration: '5m', target: 20},
    { duration: '5m', target: 40},
    { duration: '5m', target: 80}
    ]
  
};

export const stages = WorkloadConfig[__ENV.WORKLOAD] || WorkloadConfig["smoke"];
