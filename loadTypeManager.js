import { load_options, smoke_options } from "./testOptions.js";
import { testTypeNotSetMessage } from "./utils/textinformation.js";


export function setTestOptions(type) {

    // if (!type && display) {
    //   console.log(testTypeNotSetMessage);
    // }
  switch (type) {
    case "smoke":
    default:
        console.log('smoke - option')
      return smoke_options;
    case "load":
        console.log('load - option')
      return load_options;
  }
}

