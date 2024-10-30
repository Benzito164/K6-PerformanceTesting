import http from "k6/http";
import { BASE_URL, DEV_URL } from "./endpoint.js";

let choice = false;
let BASE_URLS;

export function GoToUrl() {
  choice = !choice;
  if (choice) {
    BASE_URLS = "https://www.google.co.uk";
  } else {
    BASE_URLS = BASE_URL;
  }
  http.get(BASE_URLS);
}
