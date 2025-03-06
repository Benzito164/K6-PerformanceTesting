import http from "k6/http";
import { BASE_URL, DEV_URL } from "./endpoint.js";
import { check, group } from "k6";

let choice = false;
let BASE_URLS;

export function GoToUrl() {
  group("Go to base url", function () {
    choice = !choice;
    if (choice) {
      BASE_URLS = "https://www.google.co.uk";
    } else {
      BASE_URLS = BASE_URL;
    }
    let response = http.get(BASE_URLS);
    commonRequestChecker(response,200);
  });
}
function commonRequestChecker(response,statusCode) {
  const checkName = `status code is ${statusCode}`
  check(response, {
    [checkName] : (r) => r.status === statusCode,
    "response body contains": (r) => r.body.includes(""),
  });
}

export function getCars(){
  http.post("http://localhost:8080/asset/list",)
let headers = { 'Content-Type': 'application/json;charset=UTF-8' };
http.post(url, null, { headers });
}