import axios from 'axios';
import config from "./RequestConfig"
import buildEndpoint from "./RequestEndPoint";

const remove = (endpoint, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** DELETE REQUEST ***");
  console.log(url);
  axios.delete(url, config)
    .then(response => {
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

export default remove;
