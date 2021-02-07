import requestManager from "./../../../api/RequestManager"
import messageManager from "./../MessageManager";

const handleGetRequest = (endpoint, callback) => {
    requestManager.get(endpoint, (response) => {
      if(response && response.status===200){
        callback(response.data.data);
      } else {
        messageManager.commonMessages(response);
      }
    });
};

export default handleGetRequest;
