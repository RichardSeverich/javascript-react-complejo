import requestManager from "./../../../api/RequestManager"
import messageManager from "./../MessageManager";

const handleGetWithBodyRequest = (endpoint, body, callback) => {
  requestManager.post(endpoint, body, (response) => {
      if(response && response.status===200){
        callback(response.data.data);
      } else {
        messageManager.commonMessages(response);
      }
    });
};

export default handleGetWithBodyRequest;
