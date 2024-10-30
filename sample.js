import { thresholds } from "./thresholds.js";
import { per_vu_scenario as scenario } from "./scenario.js";
import { GoToUrl } from "./actions.js";
import { stages } from "./workloads.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

const smoke_options = {
  //stages,
  thresholds,
  scenarios: { scenario },
  summaryTrendStats: ["avg", "min", "med", "max", "p(90)", "p(95)", "p(99)"],
};

export const options = smoke_options;

export default function () {
  GoToUrl();
}

export function handleSummary(data) {
  CreateAllOutPutReports(data);
}

function CreateAllOutPutReports(data, title, reportName) {
  if (!title) {
    title = `Load Test ${Date.now()}`;
  }

  return {
    stdout: textSummary(data, { indent: "→", enableColors: true }),
    "result.html": htmlReport(data, { title }),
    "result.json": JSON.stringify(data),
  };
}
