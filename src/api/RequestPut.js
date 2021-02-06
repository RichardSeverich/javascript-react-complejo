import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const put = (endpoint, body, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** PUT REQUEST ***");
  console.log(url);
  console.log(body);
  axios.put(url, body, config)
    .then(response => {
      console.log("*** RESPONSE ***");
      console.log(response);
      callback(response);
    })
    .catch(error => {
      console.log("*** RESPONSE ***");
      if(error.response){
        console.log(error.response)
        callback(error.response);
      } else {
        console.log(error)
        callback(error);
      }
  })
};

export default put;