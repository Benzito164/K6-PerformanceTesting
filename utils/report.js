import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function CreateAllOutPutReports(data, title, reportName) {
  if (!title) {
    title = `${new Date(Date.now()).toDateString()}`;
  }
  const htmlReportName = `./reports/${reportName ||'result'}.html`
  const jsonReportName = `./reports/${reportName ||'result'}.json`
  return {
    stdout: textSummary(data, { indent: "→", enableColors: true }),
    [htmlReportName]: htmlReport(data, { title }),
    [jsonReportName]: JSON.stringify(data),
  };
}
