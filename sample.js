import { getCars, GoToUrl } from "./actions.js";
import { CreateAllOutPutReports } from "./utils/report.js";
import { setTestOptions } from "./loadtypeManager.js";
import http from "k6/http";

export const options = setTestOptions(__ENV.TESTTYPE);
const url = "http://localhost:8080/api/login";
const actions = "http://localhost:8080/asset"
let acces_token;

const loginJsonBody = JSON.stringify({
  username: "admin",
  password: "test",
});

const params = {
  headers: {
    authorization: `Bearer ${acces_token}`,
  },
};

export default function () {
  let response = http.post(url, loginJsonBody, {});
  http.p
  let responseJson = response.json();
  acces_token = responseJson.access_token;
 console.log(`${responseJson.token_type} ${acces_token}`)
 
  response = http.get(actions,{
    headers: {
      Authorization: `${responseJson.token_type} ${acces_token}`,
    },
  })
  //console.log(response)
}

export function handleSummary(data) {
  return CreateAllOutPutReports(
    data,
    __ENV.TESTTYPE,
    `${__ENV.TESTTYPE}-Test-Result`
  );
}

const onsiteIventorySearchPayload = {
  filters:'' ,
  first:0,
getConstraints:false,
getFilterNumbers:false,
rows:100
}