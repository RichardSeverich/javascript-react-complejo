import axios from 'axios';
import buildEndpoint from "./RequestEndPoint";

const post = (endpoint, body, callback) => {
  const url = buildEndpoint(endpoint);
  console.log("*** POST REQUEST ***");
  console.log(url);
  console.log(body);
  axios.post(url, body)
    .then(response => {
      console.log("*** RESPONSE ***");
      console.log(response)
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

export default post;
